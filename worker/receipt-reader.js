// What the Fridge: receipt reader (Cloudflare Worker).
//
// The app sends a photo of a grocery receipt here; this Worker adds the Anthropic API key (a
// Cloudflare secret, never in this repository) and asks Claude to read it. It returns each line
// as a plain grocery name, and the app matches those names to its own food list and shows the
// usual review screen. Nothing is stored here.
//
// Deploy: Cloudflare dashboard > Workers & Pages > wtf-receipt-reader > Edit code, replace
// everything with this file, Deploy. The key lives in Settings > Variables and Secrets as a
// Secret named ANTHROPIC_API_KEY.
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

const SYSTEM = `You read photos of grocery receipts for a meal-planning app.

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

const SCHEMA = {
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
          unit: { anyOf: [{ type: 'string', enum: ['ea', 'lb', 'kg', 'g', 'oz', 'l', 'ml'] }, { type: 'null' }] },
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
    if (request.method === 'GET') return reply({ ok: true, service: 'What the Fridge receipt reader' }, 200, cors);
    if (request.method !== 'POST') return reply({ error: 'Send the receipt with POST.' }, 405, cors);
    if (!ALLOWED_ORIGINS.includes(origin)) return reply({ error: 'This reader only works from the What the Fridge app.' }, 403, cors);
    if (!env.ANTHROPIC_API_KEY) return reply({ error: 'The reader is not set up yet (no ANTHROPIC_API_KEY secret).' }, 500, cors);

    let body;
    try { body = await request.json(); } catch { return reply({ error: 'Expected JSON.' }, 400, cors); }
    const image = typeof body.image === 'string' ? body.image : '';
    const mediaType = IMAGE_TYPES.includes(body.mediaType) ? body.mediaType : null;
    if (!image || !mediaType) return reply({ error: 'Expected an image and its type.' }, 400, cors);
    if (image.length * 0.75 > MAX_IMAGE_BYTES) return reply({ error: 'That photo is too large.' }, 413, cors);

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
          output_config: { effort: 'low', format: { type: 'json_schema', schema: SCHEMA } },
          system: SYSTEM,
          messages: [{
            role: 'user',
            content: [
              { type: 'image', source: { type: 'base64', media_type: mediaType, data: image } },
              { type: 'text', text: 'Read this receipt.' },
            ],
          }],
        }),
      });
    } catch {
      return reply({ error: 'Could not reach Claude.' }, 502, cors);
    }

    if (!res.ok) {
      // 400 from a spent workspace limit, 401 from a bad or expired key, 429/529 when busy.
      // The details stay in the Worker's logs; the app just falls back to its own reader.
      console.log('Anthropic error', res.status, await res.text());
      return reply({ error: 'Claude could not read the receipt right now.', status: res.status }, 502, cors);
    }

    const msg = await res.json();
    if (msg.stop_reason === 'refusal' || msg.stop_reason === 'max_tokens') {
      return reply({ error: 'Claude could not read this receipt.' }, 422, cors);
    }
    const text = (msg.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('');
    let result;
    try { result = JSON.parse(text); } catch { return reply({ error: 'Unexpected answer from Claude.' }, 502, cors); }

    return reply({ purchase_date: result.purchase_date, items: result.items, model: msg.model }, 200, cors);
  },
};

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
