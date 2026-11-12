// What the Fridge: receipt and pantry-photo reader (Cloudflare Worker).
//
// The app sends a photo here; this Worker adds the Anthropic API key (a Cloudflare secret, never
// in this repository) and asks Claude to read it. Two modes:
//   - "receipt" (the default, and what older copies of the app send): each printed line as a
//     plain grocery name, plus the purchase date if one is printed.
//   - "pantry": the foods Claude can clearly see in a photo of a fridge, freezer or cupboard.
// Either way the app matches the names to its own food list and shows a review screen where the
// person ticks what to add. Nothing is stored here.
//
// Deploy: Cloudflare dashboard > Workers & Pages > wtf-receipt-reader > Edit code, replace
// everything with this file, Deploy. The key lives in Settings > Variables and Secrets as a
// Secret named ANTHROPIC_API_KEY; deploying new code leaves it untouched.
//
// Raw HTTP rather than the Anthropic SDK: the dashboard editor has no build step to install it.

const MODEL = 'claude-opus-5-5';

// Only the live site (and a local test copy) may use this Worker. A browser can't fake its
// Origin; other programs can, so the Console workspace's monthly spend limit is the real cap.
const ALLOWED_ORIGINS = [
  'https://jennamarie82.github.io',
  'http://localhost:8765',
];

// The app shrinks photos before sending; this stops anything unreasonable getting through.
const MAX_IMAGE_BYTES = 4 * 1024 * 1024;
const IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
const UNITS = ['ea', 'lb', 'kg', 'g', 'oz', 'l', 'ml'];

// ─── Receipts (unchanged) ───

const RECEIPT_SYSTEM = `You read photos of grocery receipts for a meal-planning app.

List every line item printed on the receipt, top to bottom. For each item give:
- printed: the item text exactly as printed, without the price.
- name: what the food is, as a home cook would write it on a shopping list, with store
  abbreviations expanded ("GRN ONION" -> "green onions", "FZ STRAWB" -> "frozen strawberries",
  "CHDR CHS" -> "cheddar cheese", "BNLS SKLS CHKN BRST" -> "boneless skinless chicken breast").
  Keep "frozen", "canned" or "dried" when the receipt says so. Leave out brand names unless the
  brand is the only clue to what the food is.
- is_food: false for the store name, address, dates, subtotals, totals, taxes, payments, change,
  savings, deposits, bag fees and anything that isn't food or drink.
- quantity and unit: the count or weight printed for that item ("2 @ 1.29" is 2 ea,
  "0.84 kg @ ..." is 0.84 kg). Use null for both when none is printed.

Also give purchase_date as YYYY-MM-DD if a date is printed, otherwise null.

Only report what is printed. If a line can't be read, skip it; never guess at items that aren't
there. If the photo isn't a receipt or can't be read at all, return an empty items list.`;

const RECEIPT_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['purchase_date', 'items'],
  properties: {
    purchase_date: { anyOf: [{ type: 'string', format: 'date' }, { type: 'null' }] },
    items: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['printed', 'name', 'is_food', 'quantity', 'unit'],
        properties: {
          printed: { type: 'string' },
          name: { type: 'string' },
          is_food: { type: 'boolean' },
          quantity: { anyOf: [{ type: 'number' }, { type: 'null' }] },
          unit: { anyOf: [{ type: 'string', enum: UNITS }, { type: 'null' }] },
        },
      },
    },
  },
};

// ─── Pantry photos ───
// The spec's rules for this feature: nothing is added until the person ticks it; a photo can't
// show when food was bought, so no dates; counts are estimates the person can change; and the
// app never says whether food is still good. The prompt keeps Claude inside those lines.

const AREAS = ['fridge', 'freezer', 'cupboard'];

const PANTRY_SYSTEM = `You look at photos of a home fridge, freezer or cupboard for a meal-planning app.
The app shows your list to the person, who ticks what to add to their pantry, so leaving an item
out costs them a few seconds while listing something that isn't there misleads them.

List each food or drink you can clearly identify. For each one give:
- name: what it is, as a home cook would write it on a shopping list ("cheddar cheese",
  "green onions", "frozen peas", "canned black beans"). Use a readable label when there is one;
  leave out brand names unless the brand is the only clue to what the food is.
- quantity and unit: how many you can see, as a count in "ea" (3 apples, 2 cans, 1 carton). Use a
  weight or volume only when it is printed and readable on the package. Use null for both when
  you can't tell, for example a bag of loose spinach.
- form: "fresh", "frozen", "canned", "dried", "packaged" (boxes, jars, bottles, cartons) or
  "other".
- sure: true when the item is plainly visible and you are confident what it is; false when it is
  partly hidden or you are inferring from shape or colour.

Rules:
- Only list what is visible. Never guess at what is inside an opaque or unlabelled container,
  and skip leftovers in containers unless the food itself is plainly visible.
- List each kind of food once, with the total you can see.
- Skip things that aren't food or drink, and skip condiments only when you can't tell what they are.
- Don't estimate when anything was bought, how old it is, or whether it is still good to eat.
- If the photo doesn't show food storage, or nothing can be identified, return an empty items list.`;

const PANTRY_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['items'],
  properties: {
    items: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['name', 'quantity', 'unit', 'form', 'sure'],
        properties: {
          name: { type: 'string' },
          quantity: { anyOf: [{ type: 'number' }, { type: 'null' }] },
          unit: { anyOf: [{ type: 'string', enum: UNITS }, { type: 'null' }] },
          form: { type: 'string', enum: ['fresh', 'frozen', 'canned', 'dried', 'packaged', 'other'] },
          sure: { type: 'boolean' },
        },
      },
    },
  },
};

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const cors = corsHeaders(origin);

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (request.method === 'GET') return reply({ ok: true, service: 'What the Fridge photo reader', modes: ['receipt', 'pantry'] }, 200, cors);
    if (request.method !== 'POST') return reply({ error: 'Send the photo with POST.' }, 405, cors);
    if (!ALLOWED_ORIGINS.includes(origin)) return reply({ error: 'This reader only works from the What the Fridge app.' }, 403, cors);
    if (!env.ANTHROPIC_API_KEY) return reply({ error: 'The reader is not set up yet (no ANTHROPIC_API_KEY secret).' }, 500, cors);

    let body;
    try { body = await request.json(); } catch { return reply({ error: 'Expected JSON.' }, 400, cors); }
    const image = typeof body.image === 'string' ? body.image : '';
    const mediaType = IMAGE_TYPES.includes(body.mediaType) ? body.mediaType : null;
    if (!image || !mediaType) return reply({ error: 'Expected an image and its type.' }, 400, cors);
    if (image.length * 0.75 > MAX_IMAGE_BYTES) return reply({ error: 'That photo is too large.' }, 413, cors);

    const mode = body.mode === undefined ? 'receipt' : body.mode;
    if (mode !== 'receipt' && mode !== 'pantry') return reply({ error: 'Unknown mode.' }, 400, cors);

    if (mode === 'receipt') {
      const out = await askClaude(env, RECEIPT_SYSTEM, RECEIPT_SCHEMA, image, mediaType, 'Read this receipt.');
      if (out.error) return reply({ error: out.error, status: out.status }, out.code, cors);
      return reply({ purchase_date: out.result.purchase_date, items: out.result.items, model: out.model }, 200, cors);
    }

    // The app knows which shelf the person photographed, which helps with look-alikes
    // (a frozen bag versus a fresh one). It is a hint only.
    const area = AREAS.includes(body.area) ? body.area : null;
    const ask = area ? 'This photo shows my ' + area + '. List the food you can see.' : 'List the food you can see.';
    const out = await askClaude(env, PANTRY_SYSTEM, PANTRY_SCHEMA, image, mediaType, ask);
    if (out.error) return reply({ error: out.error, status: out.status }, out.code, cors);
    return reply({ area, items: out.result.items, model: out.model }, 200, cors);
  },
};

async function askClaude(env, system, schema, image, mediaType, ask) {
  let res;
  try {
    res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        // If a safety check declines the request, Anthropic re-runs it on its recommended
        // fallback model instead of failing.
        'anthropic-beta': 'server-side-fallback-2026-07-01',
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 16000,
        fallbacks: 'default',
        output_config: { effort: 'low', format: { type: 'json_schema', schema } },
        system,
        messages: [{
          role: 'user',
          content: [
            { type: 'image', source: { type: 'base64', media_type: mediaType, data: image } },
            { type: 'text', text: ask },
          ],
        }],
      }),
    });
  } catch {
    return { error: 'Could not reach Claude.', code: 502 };
  }

  if (!res.ok) {
    // 400 from a spent workspace limit, 401 from a bad or expired key, 429/529 when busy.
    // The details stay in the Worker's logs; the app falls back or asks the person to add by hand.
    console.log('Anthropic error', res.status, await res.text());
    return { error: 'Claude could not read the photo right now.', status: res.status, code: 502 };
  }

  const msg = await res.json();
  if (msg.stop_reason === 'refusal' || msg.stop_reason === 'max_tokens') {
    return { error: 'Claude could not read this photo.', code: 422 };
  }
  const text = (msg.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('');
  try {
    return { result: JSON.parse(text), model: msg.model };
  } catch {
    return { error: 'Unexpected answer from Claude.', code: 502 };
  }
}

function corsHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Vary': 'Origin',
  };
}

function reply(data, status, cors) {
  return new Response(JSON.stringify(data), { status, headers: { ...cors, 'Content-Type': 'application/json' } });
}
