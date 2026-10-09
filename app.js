// ═══════════════ SETTINGS ═══════════════
var settings = {
  name: '',                       // what the app calls the user; blank is fine
  since: null,                    // YYYY-MM-DD the household was set up; null until setup is finished
  household: 2,
  dietary: { vegetarian:false, dairyFree:false, nutFree:false, porkFree:false },
  notify:  { cooked:true, expiry:true, planReady:false }
};

// Every meal marked cooked, for the Profile stats. Nothing here is estimated: `rescued`
// counts ingredients that were still inside their freshness window when they were used.
var cookLog = [];                 // { date:'YYYY-MM-DD', recipe:id, rescued:n }

// ═══════════════ INGREDIENTS & SHELF-LIFE NORMS ═══════════════
// Both generated from the approved files by tools/build-recipes.ps1 — see recipes.js.
var INGREDIENTS = window.WTF_INGREDIENTS || [];
var NORMS = window.WTF_NORMS || {};
var ingIndex = {};
INGREDIENTS.forEach(function(i) { ingIndex[i.id] = i; });
function ingById(id) { return ingIndex[id] || null; }
function ingName(id) { var i = ingIndex[id]; return i ? i.name : id; }

// ═══════════════ PANTRY ═══════════════
// One entry per thing on the shelf: two packs of chicken bought on different days are two entries.
//   ing       ingredient id from the shared list
//   zone      fridge | freezer | cupboard
//   qty/unit  how much, when the user says. null means unknown, and is never guessed.
//   bought    purchase date (YYYY-MM-DD), or null when the user doesn't know it
//   expires   a printed use-by date the user typed, or null
var pantry = [];
var ZONES = [ { key:'fridge', label:'Fridge' }, { key:'freezer', label:'Freezer' }, { key:'cupboard', label:'Cupboard' } ];
var UNITS = ['ea','g','kg','oz','lb','ml','l','cup','tbsp','tsp','can','bunch','package','slice','head','jar'];

function newEntryId() { return 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }

// The sample kitchen, for demos and for anyone who wants to look around before adding their
// own food. Purchase dates are set relative to the day it is loaded. The feta has no quantity
// and no date on purpose, to show how the app treats what it doesn't know.
function samplePantry() {
  // Units are the ones the recipes mostly use, so amounts can be compared.
  var rows = [
    ['eggs','fridge',12,'ea',4],          ['spinach','fridge',6,'cup',3],        ['chicken-breast','fridge',1.5,'lb',1],
    ['asparagus','fridge',1,'bunch',3],   ['shrimp','fridge',1,'lb',1],          ['lemon','fridge',2,'ea',4],
    ['cucumber','fridge',1,'ea',2],       ['cherry-tomatoes','cupboard',2,'cup',3], ['cooked-rice','fridge',3,'cup',2],
    ['greek-yogurt','fridge',2,'cup',2],  ['milk','fridge',4,'cup',3],           ['mozzarella','fridge',8,'oz',3],
    ['salsa','fridge',2,'cup',6],         ['cheese','fridge',2,'cup',6],         ['feta','fridge',null,null,null],
    ['parmesan','fridge',1,'cup',10],     ['carrot','fridge',1,'lb',5],          ['berries','freezer',2,'cup',8],
    ['frozen-veg','freezer',4,'cup',20],  ['avocado','cupboard',2,'ea',4],       ['bananas','cupboard',3,'ea',2],
    ['buns','cupboard',4,'ea',2],         ['red-onion','cupboard',1,'ea',4],     ['onion','cupboard',3,'ea',6],
    ['tomatoes','cupboard',3,'ea',2],     ['flour-tortillas','cupboard',6,'ea',5], ['oats','cupboard',5,'cup',20],
    ['peanut-butter','cupboard',32,'tbsp',30], ['chickpeas','cupboard',2,'can',40], ['black-beans','cupboard',2,'can',40],
    ['pasta','cupboard',1,'lb',25],       ['pork-chops','fridge',4,'ea',1],      ['bell-pepper','fridge',2,'ea',3],
    ['quinoa','cupboard',2,'cup',30],     ['corn','cupboard',3,'cup',40]
  ];
  return rows.map(function(r) {
    return { id:newEntryId(), ing:r[0], zone:r[1], qty:r[2], unit:r[3],
             bought: r[4] === null ? null : todayKey(addDays(new Date(), -r[4])), expires:null };
  });
}

// ═══════════════ DIETARY RULES ═══════════════
// Each recipe carries tags for what it actually contains, taken from the database's own Dietary
// line (which lists what it SATISFIES; recipes.js inverts it). Those tags come from required
// ingredients and staples only, so an optional garnish never disqualifies a recipe: it is
// dropped when a restriction is on.
var DIET_RULES = {
  vegetarian: { label:'Vegetarian', blocks:['meat','fish','pork'] },
  dairyFree:  { label:'Dairy-free', blocks:['dairy'] },
  nutFree:    { label:'Nut-free',   blocks:['nuts'] },
  porkFree:   { label:'No pork',    blocks:['pork'] }
};
function activeBlocks() {
  var out = [];
  for (var k in DIET_RULES) {
    if (settings.dietary[k]) {
      DIET_RULES[k].blocks.forEach(function(b) { if (out.indexOf(b) === -1) out.push(b); });
    }
  }
  return out;
}
function activeDietLabels() {
  var out = [];
  for (var k in DIET_RULES) { if (settings.dietary[k]) out.push(DIET_RULES[k].label); }
  return out;
}
// A recipe is excluded outright if any of its tags is blocked. This is a hard
// constraint, not a ranking preference.
function violatesDiet(recipe) {
  var blocked = activeBlocks();
  return (recipe.tags || []).some(function(t) { return blocked.indexOf(t) > -1; });
}

// What each ingredient contains, for deciding which OPTIONAL lines a restriction drops.
// (Required lines are already covered by the recipe's own tags from the database.)
var CONTAINS = {
  meat: ['chicken-breast','chicken-thighs','chicken-drumsticks','ground-chicken','chicken-wings','cooked-chicken','chicken',
         'ground-turkey','turkey-sausage','deli-turkey','cooked-turkey','turkey-breast','canadian-bacon','bacon','pancetta','ham',
         'pepperoni','salami','hot-dogs','sausage','smoked-sausage','ground-pork','pork-chops','pork','ribs','ground-beef',
         'corned-beef','roast-beef','beef-roast','beef-steak','ground-lamb','lamb','veal','smoked-salmon','salmon','tuna-steak',
         'canned-tuna','white-fish','shrimp','scallops','mussels','clams','crab','lobster','anchovies','fish-sauce','oyster-sauce',
         'chicken-broth','beef-broth','seafood-stock','cream-of-chicken'],
  dairy: ['butter','buttermilk','sour-cream','cream-cheese','heavy-cream','greek-yogurt','yogurt','milk','parmesan','feta',
          'ricotta','cottage-cheese','goat-cheese','blue-cheese','queso-fresco','mozzarella','provolone','american-cheese',
          'swiss','monterey-jack','cheddar','cheese','paneer','tortellini'],
  nuts:  ['peanut-butter','peanuts','almonds','walnuts','pecans','cashews'],
  pork:  ['canadian-bacon','bacon','pancetta','ham','pepperoni','salami','hot-dogs','sausage','ground-pork','pork-chops','pork','ribs']
};
function ingBlocked(id, blocked) {
  return blocked.some(function(b) {
    var list = CONTAINS[b === 'fish' ? 'meat' : b];
    return list && list.indexOf(id) > -1;
  });
}
// A recipe's ingredient lines as they apply to this household: an optional line whose every
// choice is ruled out is dropped, and choices that are ruled out are taken off the line.
function visibleLines(recipe) {
  var blocked = activeBlocks();
  if (!blocked.length) return recipe.ing;
  var out = [];
  recipe.ing.forEach(function(line) {
    if (!line.optional) { out.push(line); return; }
    var ok = lineIds(line).filter(function(id) { return !ingBlocked(id, blocked); });
    if (!ok.length) return;
    if (ok.length === lineIds(line).length) { out.push(line); return; }
    var copy = {}; for (var k in line) copy[k] = line[k];
    if (ok.length === 1) { delete copy.any; copy.id = ok[0]; } else { copy.any = ok; }
    out.push(copy);
  });
  return out;
}

// ═══════════════ RECIPE CATALOG ═══════════════
// All 300 recipes from the approved source, knowledge/Combined_Recipe_Database.md, via recipes.js
// (generated by tools/build-recipes.ps1). `id` is the slug of the title and doubles as the photo name.
// Each ingredient line keeps the database's own wording (`text`) and names the food it uses from
// the shared ingredient list (`id`, or `any` when the recipe offers a choice). Staple lines (salt,
// oil, spices...) are kept for display but never planned around: they're assumed on hand.
// Amounts are as written. The database doesn't say how many a recipe serves, so nothing is scaled.
var recipes = (window.WTF_RECIPES || []).map(function(src) {
  var lines = [];
  src.ing.forEach(function(l) {
    var ids = l.items || [];
    if (!ids.length) return;
    // A staple line, or a choice where one of the options is a staple ("vinegar or lemon juice"),
    // is covered by the staples assumed on hand.
    var isStaple = function(id) { var i = ingById(id); return !!(i && i.staple); };
    var staple = ids.every(isStaple) || (l.alt && ids.some(isStaple));
    var foods = ids.filter(function(id) { var i = ingById(id); return i && !i.staple; });
    var line = { text:l.text, optional:!!l.optional, staple:staple };
    if (!staple) {
      if (foods.length === 1) line.id = foods[0]; else line.any = foods;
      line.qty = (l.qty === undefined || l.qty === null || foods.length !== ids.length) ? null : l.qty;
      line.unit = line.qty === null ? null : (l.unit || 'ea');
    }
    lines.push(line);
  });
  return { id:src.id, n:src.n, name:src.name, type:src.type, time:src.time, mins:src.mins,
           tags:src.tags || [], all:lines, ing:lines.filter(function(l) { return !l.staple; }), steps:src.steps || [],
           nut:src.nut || null };
});

// ═══════════════ PLAN ═══════════════
// Three days x breakfast / lunch / dinner, built from the kitchen by the planner below.
// status: pending | accepted | skipped
var plan = [];
var planSig = null;               // the kitchen the plan was last built for; see kitchenSig()
var planBuiltEmpty = false;       // true while the plan was made for an empty kitchen

var MEAL_TYPES = ['breakfast','lunch','dinner'];
var currentDay = 1;              // 1..3
var currentTab = 'planTab';
var dayOffset  = 0;              // advanced by the midnight roll
var unreconciled = [];           // meals that left the horizon still unconfirmed

// ═══════════════ HELPERS ═══════════════
function recipeById(id) { for (var i=0;i<recipes.length;i++) { if (recipes[i].id === id) return recipes[i]; } return null; }
function entryById(id)  { for (var i=0;i<pantry.length;i++)  { if (pantry[i].id === id)  return pantry[i];  } return null; }
function planIndex(day, type) { return (day - 1) * 3 + MEAL_TYPES.indexOf(type); }

function round2(n) { return Math.round(n * 100) / 100; }

function fmtQty(qty, unit) {
  if (qty === null || qty === undefined) { return 'amount not recorded'; }
  var s = String(round2(qty));
  if (!unit || unit === 'ea') { return s; }
  return s + ' ' + unit;
}
function esc(s) {
  return String(s).replace(/[&<>"']/g, function(c) { return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]; });
}

// ─── calendar days ───
// Dates are kept as local calendar days ('YYYY-MM-DD') so a purchase date never drifts with the clock.
function todayKey(d) {
  d = d || new Date();
  return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
}
function parseKey(k) { var a = k.split('-'); return new Date(+a[0], a[1] - 1, +a[2]); }
function addDays(d, n) { var x = new Date(d.getFullYear(), d.getMonth(), d.getDate()); x.setDate(x.getDate() + n); return x; }
function daysBetween(fromKey, toKey) { return Math.round((parseKey(toKey) - parseKey(fromKey)) / 86400000); }

// ─── rolling dates ───
function dateFor(dayIndex) {           // dayIndex 0,1,2 — 0 is always today
  var d = new Date();
  d.setDate(d.getDate() + dayIndex);
  return d;
}
function dayLabel(dayIndex) {
  if (dayIndex === 0) return 'Today';
  if (dayIndex === 1) return 'Tomorrow';
  return dateFor(dayIndex).toLocaleDateString(undefined, { weekday:'long' });
}
function dayShort(dayIndex) {
  return dateFor(dayIndex).toLocaleDateString(undefined, { weekday:'short' });
}
// Adds the year when it isn't this year, so a freezer use-by next summer can't be misread as past.
function fmtDate(d) {
  var o = { month:'short', day:'numeric' };
  if (d.getFullYear() !== new Date().getFullYear()) o.year = 'numeric';
  return d.toLocaleDateString(undefined, o);
}
function fmtKey(k) { return fmtDate(parseKey(k)); }
function zoneLabel(z) { for (var i=0;i<ZONES.length;i++) { if (ZONES[i].key === z) return ZONES[i].label; } return z; }

// ─── freshness ───
// Estimated only from what the user told us plus knowledge/shelf-life-norms.md:
//   1. a printed use-by date the user typed wins outright;
//   2. otherwise purchase date + the norm's window for the storage spot it's in;
//   3. anything else is unknown, with the reason, and never assumed fresh.
// Norms are ranges ("3–7 days"), so the chip goes by the short end and "past window" by the long end.
function freshness(e) {
  var today = todayKey();
  var ing = ingById(e.ing);
  if (e.expires) {
    var l = daysBetween(today, e.expires);
    return status({ known:true, min:l, max:l, via:'printed' });
  }
  if (!e.bought) { return { known:false, cls:'unknown', text:'no date', via:'nodate' }; }
  var norm = ing && ing.norm ? NORMS[ing.norm] : null;
  if (!norm)             { return { known:false, cls:'unknown', text:'unknown', via:'nonorm' }; }
  if (norm.printed)      { return { known:false, cls:'unknown', text:'check date', via:'needsprinted', norm:norm }; }
  var win = norm[e.zone];
  if (!win)              { return { known:false, cls:'unknown', text:'unknown', via:'nozone', norm:norm }; }
  var age = daysBetween(e.bought, today);
  return status({ known:true, min:win[0] - age, max:win[1] - age, via:'norm', norm:norm });
}
function status(f) {
  f.left = f.min;
  if (f.max < 0)       { f.cls = 'now';  f.text = 'past window'; }
  else if (f.min <= 0) { f.cls = 'now';  f.text = 'use today'; }
  else if (f.min <= 3) { f.cls = 'soon'; f.text = f.min + (f.min === 1 ? ' day' : ' days'); }
  else                 { f.cls = 'ok';   f.text = 'fine'; }
  return f;
}
// A norm's wording for the storage spot the food is actually in: "Leafy greens: 3–7 days
// refrigerated; 10–12 months frozen" reads as just the refrigerated part for a fridge item.
var ZONE_WORDS = { fridge:/refrigerat/, freezer:/frozen|freez/, cupboard:/cupboard|counter|pantry/ };
function normBasis(norm, zone) {
  var parts = norm.basis.split('; ');
  if (parts.length < 2) return norm.basis;
  for (var i = 0; i < parts.length; i++) {
    if (ZONE_WORDS[zone].test(parts[i])) {
      return i === 0 ? parts[0] : parts[0].split(':')[0] + ': ' + parts[i];
    }
  }
  return norm.basis;
}

// The basis behind an estimate, in plain words. Shown wherever the estimate is.
function basisLine(e) {
  var f = freshness(e), name = ingName(e.ing);
  var bought = e.bought ? 'Bought ' + fmtKey(e.bought) : '';
  if (f.via === 'printed') {
    return (bought ? bought + ' · ' : '') + 'use-by date you entered: ' + fmtKey(e.expires);
  }
  if (f.via === 'nodate') { return 'No purchase date on record, so no freshness estimate.'; }
  if (f.via === 'nonorm') {
    return bought + ' · the shelf-life norms have no entry for ' + name.toLowerCase() + '. Add the printed date for an estimate.';
  }
  if (f.via === 'nozone') {
    return bought + ' · the norms give no window for ' + name.toLowerCase() + ' kept in the ' + zoneLabel(e.zone).toLowerCase() + '. Add the printed date for an estimate.';
  }
  if (f.via === 'needsprinted') {
    return bought + ' · ' + f.norm.basis + '. That counts from the printed date, so add it for an estimate.';
  }
  var from = addDays(parseKey(e.bought), f.norm[e.zone][0]), to = addDays(parseKey(e.bought), f.norm[e.zone][1]);
  return bought + ' · ' + normBasis(f.norm, e.zone) + ' · estimated use-by ' +
    (todayKey(from) === todayKey(to) ? fmtDate(from) : fmtDate(from) + '–' + fmtDate(to));
}
// Soonest-to-turn first; unknowns last, since nothing is known about them.
function byUrgency(a, b) {
  var fa = freshness(a), fb = freshness(b);
  if (!fa.known && !fb.known) return 0;
  if (!fa.known) return 1;
  if (!fb.known) return -1;
  return fa.min - fb.min;
}

// ═══════════════ STOCK ═══════════════
// What the kitchen holds of one ingredient, across every pantry entry for it.
function entriesFor(ingId) { return pantry.filter(function(p) { return p.ing === ingId; }); }
function inStock(e) { return e.qty === null || e.qty > 0; }

// Units convert only within weight or within volume, where it's plain arithmetic. Cups of
// spinach to grams would need a density for that food, so it isn't attempted: the amount is
// treated as uncertain and the user is asked to check.
var UNIT_BASE = { g:['mass',1], kg:['mass',1000], oz:['mass',28.3495], lb:['mass',453.592],
                  ml:['vol',1], l:['vol',1000], tsp:['vol',4.92892], tbsp:['vol',14.7868], cup:['vol',236.588] };
function convert(q, from, to) {
  from = from || 'ea'; to = to || 'ea';
  if (from === to) return q;
  var a = UNIT_BASE[from], b = UNIT_BASE[to];
  if (!a || !b || a[0] !== b[0]) return null;
  return q * a[1] / b[1];
}

// How much is KNOWN to be on hand in `unit`, less anything `reserved` for other meals
// ({ ingId: [{qty, unit}] }). Entries with no quantity, or in a unit that can't be converted,
// make the answer `uncertain` rather than being guessed at.
function stockOf(ingId, unit, reserved) {
  var known = 0, uncertain = false, any = false;
  entriesFor(ingId).forEach(function(e) {
    if (!inStock(e)) return;
    any = true;
    var c = e.qty === null ? null : convert(e.qty, e.unit, unit);
    if (c === null) { uncertain = true; return; }
    known += c;
  });
  ((reserved && reserved[ingId]) || []).forEach(function(r) {
    var c = convert(r.qty, r.unit, unit);
    if (c === null) uncertain = true; else known -= c;
  });
  return { any:any, known:round2(Math.max(0, known)), uncertain:uncertain };
}

function lineIds(line) { return line.any || [line.id]; }
function lineName(line) { return lineIds(line).map(ingName).join(' or '); }
// Amounts are as the recipe file writes them; it doesn't say how many a recipe serves.
function amountFor(line) { return line.qty === null || line.qty === undefined ? null : line.qty; }

// Whether the kitchen covers one recipe line, needing `amount` (null = presence only):
//   ok       enough is known to be on hand (or, for presence-only lines, some is)
//   check    some is on hand but how much isn't known, so the user should check
//   short    the known amount isn't enough (after `reserved`, if given)
//   missing  none on hand at all
var COVER_RANK = { missing:0, short:1, check:2, ok:3 };
function coverage(line, amount, reserved) {
  var best = null;
  lineIds(line).forEach(function(id) {
    var s = stockOf(id, line.unit, reserved), st;
    if (!s.any) st = 'missing';
    else if (amount === null || s.known >= amount - 1e-9) st = 'ok';
    else if (s.uncertain) st = 'check';
    else st = 'short';
    if (!best || COVER_RANK[st] > COVER_RANK[best.status]) { best = { status:st, id:id, stock:s }; }
  });
  return best;
}

// The entry a recipe line would draw on first: the one closest to the end of its window.
function urgentEntryFor(line) {
  var es = [];
  lineIds(line).forEach(function(id) { es = es.concat(entriesFor(id).filter(inStock)); });
  es.sort(byUrgency);
  return es[0] || null;
}

// Takes what a cooked meal used out of the pantry, soonest-to-turn first, converting units where
// that's arithmetic. Entries with no quantity, or in a unit that can't be converted, are left
// alone (the user is told), because subtracting from an unknown amount would invent a number.
// Returns what was taken, in each entry's own unit, so Undo can put it back.
function deductLine(line) {
  var amount = amountFor(line);
  if (amount === null) return [];
  var id = coverage(line, amount).id;
  var es = entriesFor(id).filter(function(e) {
    return e.qty !== null && e.qty > 0 && convert(1, line.unit, e.unit) !== null;
  }).sort(byUrgency);
  var left = amount, taken = [];
  es.forEach(function(e) {
    if (left <= 1e-9) return;
    var t = Math.min(e.qty, convert(left, line.unit, e.unit));
    e.qty = round2(e.qty - t);
    left -= convert(t, e.unit, line.unit);
    taken.push({ entry:e.id, qty:round2(t) });
  });
  return taken;
}
function restoreTaken(taken) {
  (taken || []).forEach(function(t) {
    var e = entryById(t.entry);
    if (e && e.qty !== null) { e.qty = round2(e.qty + t.qty); }
  });
}
// Uses up a whole meal. Returns what was taken plus how many lines were used inside their window.
function deductRecipe(r) {
  var taken = [], rescued = 0;
  visibleLines(r).forEach(function(line) {
    var u = urgentEntryFor(line);
    if (u) { var f = freshness(u); if (f.known && f.max >= 0) rescued++; }
    taken = taken.concat(deductLine(line));
  });
  return { taken:taken, rescued:rescued };
}

// True when everything on hand for this line will be past the long end of its estimated window
// by `dayIdx` (0 = today). Food whose freshness is unknown never counts: nothing is known either way.
function turnsBefore(line, dayIdx) {
  var es = [];
  lineIds(line).forEach(function(id) { es = es.concat(entriesFor(id).filter(inStock)); });
  if (!es.length) return false;
  return es.every(function(e) { var f = freshness(e); return f.known && f.max < dayIdx; });
}

// ─── setting food aside for meals ───
// The plan is checked meal by meal in order, each one setting aside what it uses, so a later meal
// can't count the same chicken twice. This is the cross-meal coordination rule in CLAUDE.md.
function reserveRecipe(r, reserved) {
  visibleLines(r).forEach(function(line) {
    var a = amountFor(line);
    if (a === null) return;
    var c = coverage(line, a, reserved);
    (reserved[c.id] = reserved[c.id] || []).push({ qty:a, unit:line.unit });
  });
}
function activeEntry(e) { return e && e.status === 'pending' && !e.dietBlocked; }
// What the pending meals OTHER than `skipIdx` set aside (for Swap and re-planning one slot).
function reservationsExcept(skipIdx) {
  var res = {};
  plan.forEach(function(e, i) { if (i !== skipIdx && activeEntry(e)) { var r = recipeById(e.recipe); if (r) reserveRecipe(r, res); } });
  return res;
}
// What the pending meals BEFORE `idx` set aside (for showing what's left for this one).
function reservationsBefore(idx) {
  var res = {};
  plan.forEach(function(e, i) { if (i < idx && activeEntry(e)) { var r = recipeById(e.recipe); if (r) reserveRecipe(r, res); } });
  return res;
}

// ─── requirements & feasibility ───
// Walks the pending meals in order, setting food aside as it goes, and reports what's missing,
// what runs short because an earlier meal needs it too, and what can't be counted.
function planNeeds() {
  var res = {}, out = { short:[], missing:[], check:[], stale:[] }, seen = {};
  function add(list, key, item) { if (!seen[key]) { seen[key] = true; list.push(item); } }
  plan.forEach(function(entry, idx) {
    if (!activeEntry(entry)) return;
    var r = recipeById(entry.recipe);
    if (!r) return;
    visibleLines(r).forEach(function(line) {
      if (line.optional) return;
      var amount = amountFor(line);
      var c = coverage(line, amount, res);
      var meal = dayLabel(Math.floor(idx / 3)).toLowerCase() + ' ' + r.type;
      if (c.status === 'missing') add(out.missing, 'm:' + lineName(line), { name:lineName(line) });
      else if (turnsBefore(line, Math.floor(idx / 3))) add(out.stale, 't:' + c.id + idx, { name:ingName(c.id), meal:meal });
      else if (c.status === 'short') add(out.short, 's:' + c.id, { name:ingName(c.id), need:amount, have:c.stock.known, unit:line.unit, meal:meal });
      else if (c.status === 'check') add(out.check, 'c:' + c.id, { name:ingName(c.id) });
    });
    reserveRecipe(r, res);
  });
  return out;
}
function optionalMissing() {
  var names = [];
  plan.forEach(function(entry) {
    if (!activeEntry(entry)) return;
    var r = recipeById(entry.recipe);
    visibleLines(r).forEach(function(line) {
      if (!line.optional) return;
      var n = lineName(line);
      if (coverage(line, null).status === 'missing' && names.indexOf(n) === -1) names.push(n);
    });
  });
  return names;
}

// ═══════════════ PLANNER ═══════════════
// Fills the plan one slot at a time from all 300 approved recipes, setting food aside as it goes.
// Hard rules (never broken): a dietary restriction, a "not for us", and no recipe twice in the plan.
// Then, in order of weight: no missing or short ingredients; food closest to the end of its
// window used first (and earlier in the three days); breakfasts of 20 minutes or less, as the spec
// asks; favourites and likes; using more of what's on hand. A small per-day shuffle keeps equally
// good plans from repeating every day.
function scoreRecipe(r, dayIdx, reserved) {
  var missing = 0, short = 0, check = 0, ok = 0, urgency = 0, stale = 0;
  visibleLines(r).forEach(function(line) {
    var c = coverage(line, amountFor(line), reserved);
    if (c.status === 'missing') { if (!line.optional) missing++; return; }
    if (turnsBefore(line, dayIdx)) { if (!line.optional) stale++; return; }   // it'll have turned by then
    if (c.status === 'short') { if (!line.optional) short++; return; }
    if (c.status === 'check') check++; else ok++;
    var e = urgentEntryFor(line);
    if (e) { var f = freshness(e); if (f.known && f.max >= 0 && f.min <= 5) urgency += 6 - Math.max(f.min, 0); }
  });
  var feasible = missing === 0 && short === 0 && stale === 0;
  var s = (feasible ? 1000 : 0) - missing * 60 - short * 40 - stale * 60 - check * 3 + ok * 6 + urgency * (3 - dayIdx) * 2;
  if (r.type === 'breakfast' && r.mins > 20) s -= 50 + (r.mins - 20) * 3;   // mornings are short
  if (dayIdx === 0 && /overnight/i.test(r.time)) s -= 200;          // can't be ready today
  var p = getPref(r.id);
  if (p.fav) s += 30; else if (p.vote === 'up') s += 10;
  s += (hashOf(r.id + '|' + todayKey() + '|' + dayIdx) % 100) / 25;  // up to 4 points of variety
  return { score:s, feasible:feasible };
}
function hashOf(str) { var h = 0; for (var i = 0; i < str.length; i++) { h = (h * 31 + str.charCodeAt(i)) | 0; } return Math.abs(h); }

function eligible(r, type) {
  return r.type === type && getPref(r.id).vote !== 'down' && !violatesDiet(r);
}
// The best recipe for one slot, or null when nothing in the approved files fits the household.
function pickRecipe(type, dayIdx, reserved, exclude) {
  var best = null;
  recipes.forEach(function(r) {
    if (!eligible(r, type) || exclude.indexOf(r.id) > -1) return;
    var s = scoreRecipe(r, dayIdx, reserved);
    if (!best || s.score > best.s.score) best = { r:r, s:s };
  });
  if (!best && exclude.length) return pickRecipe(type, dayIdx, reserved, []);  // repeat rather than leave a hole
  return best ? best.r : null;
}
function fullyCovered(r, reserved, dayIdx) {
  return visibleLines(r).every(function(line) {
    if (line.optional) return true;
    if (turnsBefore(line, dayIdx)) return false;
    var st = coverage(line, amountFor(line), reserved).status;
    return st === 'ok' || st === 'check';
  });
}

// What the plan was built for: the foods and dates in the kitchen (not amounts, which change
// every time a meal is cooked), the dietary settings and the "not for us" list.
function kitchenSig() {
  return pantry.filter(inStock).map(function(e) { return e.id + e.ing + e.zone + e.bought + e.expires; }).sort().join('|') +
    '#' + activeBlocks().join(',') + '#' + Object.keys(prefs).filter(function(k) { return prefs[k].vote === 'down'; }).sort().join(',');
}

// Builds or refreshes the plan. Cooked and skipped meals are never touched. With `keep`, pending
// meals the kitchen still covers stay put and only the rest are replaced, so re-planning doesn't
// discard meals the change didn't affect. Returns how many meals changed.
function planKitchen(keep) {
  var res = {}, used = [], kept = [], changed = 0;
  for (var i = 0; i < 9; i++) { if (plan[i] && plan[i].status !== 'pending') used.push(plan[i].recipe); }
  if (keep) {
    plan.forEach(function(e, i) {
      if (!e || e.status !== 'pending' || e.dietBlocked) return;
      var r = recipeById(e.recipe);
      if (r && eligible(r, r.type) && fullyCovered(r, res, Math.floor(i / 3))) { reserveRecipe(r, res); kept[i] = true; used.push(r.id); }
    });
  }
  for (var j = 0; j < 9; j++) {
    var e = plan[j];
    if (e && (e.status !== 'pending' || kept[j])) continue;
    var type = MEAL_TYPES[j % 3], pick = pickRecipe(type, Math.floor(j / 3), res, used);
    var before = e ? e.recipe : null;
    if (pick) {
      plan[j] = { recipe:pick.id, status:'pending' };
      reserveRecipe(pick, res); used.push(pick.id);
    } else {
      // Nothing in the approved files fits: flag the slot rather than break a restriction.
      plan[j] = { recipe:recipes.filter(function(r) { return r.type === type; })[0].id, status:'pending', dietBlocked:true };
    }
    if (plan[j].recipe !== before) changed++;
  }
  planSig = kitchenSig();
  planBuiltEmpty = pantryEmpty();
  return changed;
}
function replanNow() {
  var n = planKitchen(true);
  closeDetail();
  renderAll();
  showToast(n ? 'Re-planned ' + n + ' meal' + (n > 1 ? 's' : '') + ' around your kitchen. The rest still work.' : 'Your plan already fits your kitchen.');
}

// ═══════════════ RECIPE IMAGERY ═══════════════
// Photos live in recipe-images/ beside this file — one per approved recipe,
// 1280x720 WebP, named as a slug of the recipe title (which is also the recipe id).
var RECIPE_IMAGE_DIR = 'recipe-images/';
var RECIPE_IMAGES = [
  '15-minute-beef-and-broccoli-stir-fry','15-minute-tomato-spinach-tortellini',
  'apple-cinnamon-overnight-oats','arroz-con-pollo','avgolemono',
  'avocado-and-egg-toast-with-everything-seasoning','baja-fish-tacos','baked-beans-and-cornbread-skillet',
  'baked-lemon-butter-cod','baked-macaroni-and-cheese','baked-pesto-white-fish-with-cherry-tomatoes',
  'baked-ziti','banana-berry-overnight-chia-oats','barbecue-turkey-meatballs-with-rice','bbq-baby-back-ribs',
  'bbq-pulled-pork-sandwiches','beef-and-barley-soup','beef-bourguignon','beef-empanadas',
  'beef-enchiladas-rojas','beef-ragu-with-pappardelle','beef-stroganoff','beef-sukiyaki',
  'beef-tacos-with-pico-de-gallo','belgian-waffles','berry-smoothie-bowl','bibimbap-bowl',
  'black-bean-burgers-with-avocado','black-bean-soup','blackened-tilapia-with-rice',
  'black-pepper-beef-stir-fry','blt-sandwich','blueberry-muffins','breakfast-potato-and-pepper-hash',
  'broccoli-cheddar-soup','buffalo-chicken-macaroni-and-cheese','buffalo-chicken-wrap','butter-chicken',
  'buttermilk-biscuits-with-turkey-sausage-gravy','buttermilk-fried-chicken',
  'butternut-squash-and-sage-risotto','butternut-squash-soup','cacio-e-pepe','caesar-chicken-wrap',
  'camarones-a-la-diabla','caprese-chicken-ciabatta-sandwich','caprese-pasta-salad',
  'caprese-sandwich-on-focaccia','carne-asada-with-charred-salsa','carnitas-tacos','carrot-ginger-soup',
  'cashew-chicken','cauliflower-steaks-with-chimichurri','chana-masala','cheese-pupusas-with-curtido',
  'cheesy-grits-with-soft-cooked-eggs','chicken-and-dumplings','chicken-and-sausage-gumbo','chicken-banh-mi',
  'chicken-burrito-bowl','chicken-cacciatore','chicken-caesar-salad','chicken-cordon-bleu',
  'chicken-enchiladas-verdes','chicken-fried-rice','chicken-gyro-pita','chicken-katsu-with-japanese-curry',
  'chicken-marsala','chicken-mole-poblano','chicken-parmesan','chicken-pho','chicken-piccata',
  'chicken-pot-pie','chicken-pozole-rojo','chicken-salad-sandwich','chicken-shawarma-wrap',
  'chicken-souvlaki-with-lemon-potatoes','chicken-tikka-masala','chicken-tinga-tostadas',
  'chicken-tortilla-soup','chicken-udon-noodle-soup','chicken-yakitori-rice-bowl','chickpea-and-kale-soup',
  'chickpea-smash-sandwich','chilaquiles-verdes','chiles-rellenos','chimichurri-skirt-steak','cioppino',
  'classic-banana-bread','classic-buttermilk-pancakes','classic-cheese-omelette',
  'classic-chicken-noodle-soup','classic-crepes-with-berries-and-cream','classic-egg-salad-sandwich',
  'classic-grilled-cheese','classic-lasagna','classic-meatloaf','classic-potato-salad','cobb-salad',
  'coconut-chickpea-and-sweet-potato-stew','coq-au-vin','corn-chowder','cottage-cheese-and-tomato-toast',
  'country-fried-steak-with-gravy','crab-cakes-with-remoulade','creamy-macaroni-salad','creamy-tomato-soup',
  'crispy-teriyaki-tofu-and-veggie-stir-fry','cuban-black-beans-and-rice','curried-chicken-salad-wrap',
  'curried-lentil-and-sweet-potato-soup','dal-tadka-with-basmati-rice','dan-dan-noodles',
  'dutch-baby-pancake','easy-egg-and-veggie-fried-rice','egg-and-turkey-sausage-breakfast-sandwich',
  'egg-drop-soup','eggplant-and-chickpea-tagine','eggplant-parmesan','eggs-benedict',
  'elote-chicken-rice-bowl','falafel-grain-bowl','falafel-pita-with-tahini',
  'falafel-platter-with-tahini-and-salad','farro-salad-with-roasted-vegetables','fattoush-salad',
  'fettuccine-alfredo','fish-and-chips','french-dip-sandwich','french-onion-soup',
  'french-toast-with-cinnamon-and-maple','garlic-butter-scallops','garlic-butter-shrimp-and-spinach-pasta',
  'gazpacho','general-tso-s-chicken','ginger-scallion-congee','ginger-scallion-steamed-chicken',
  'gnocchi-with-tomato-basil-sauce','greek-moussaka','greek-salad-with-grilled-chicken',
  'grilled-bbq-chicken-thighs','grilled-halibut-with-mango-salsa','grilled-ribeye-with-garlic-butter',
  'grilled-vegetable-and-goat-cheese-ciabatta','ground-turkey-and-black-bean-skillet-tacos',
  'healthy-egg-salad-lettuce-boats','hearty-beef-stew','hearty-lentil-soup',
  'high-protein-greek-yogurt-and-berry-parfait','homemade-maple-granola','honey-mustard-glazed-pork-chops',
  'hot-and-sour-soup','huevos-rancheros','hummus-and-roasted-vegetable-wrap','italian-sub',
  'italian-wedding-soup','jambalaya','japchae','kimchi-fried-rice','king-ranch-chicken-casserole',
  'korean-beef-bulgogi','korean-fried-chicken','kung-pao-chicken','lamb-gyro-platter',
  'lemon-dill-tuna-and-white-bean-salad','lemongrass-chicken-vermicelli-bowl','lemon-herb-orzo-salad',
  'lemon-herb-roast-chicken-with-potatoes','lentil-and-feta-salad','lentil-bolognese-with-spaghetti',
  'lentil-shepherd-s-pie','linguine-with-clams','loaded-breakfast-burrito','mapo-tofu','margherita-pizza',
  'massaman-beef-curry','meatball-sub','mediterranean-breakfast-bowl','mediterranean-chickpea-salad',
  'mediterranean-stuffed-bell-peppers','menemen','minestrone-soup','miso-glazed-cod','miso-soup-with-tofu',
  'mongolian-beef','moroccan-chicken-tagine-with-olives','mushroom-and-spinach-egg-muffin-cups',
  'mushroom-barley-soup','mushroom-risotto','mushroom-stroganoff','mussels-in-white-wine-and-garlic',
  'new-england-clam-chowder','new-england-lobster-rolls','one-pot-chickpea-and-spinach-coconut-curry',
  'orange-chicken','osso-buco','oven-fried-chicken-tenders-with-honey-mustard',
  'overnight-cinnamon-french-toast-bake','pad-see-ew','pad-thai','paella-valenciana','palak-paneer',
  'pan-seared-salmon-with-dill-cream-sauce','panzanella','pasta-primavera','pasta-puttanesca',
  'peanut-butter-and-chocolate-protein-smoothie','peanut-butter-banana-oatmeal','penne-alla-vodka',
  'pepperoni-pizza','peruvian-lomo-saltado','pesto-chicken-pasta-salad','philly-cheesesteak','picadillo',
  'pollo-asado-with-lime-rice','potato-leek-soup','pot-roast-with-gravy','pulled-bbq-chicken-sandwich',
  'quiche-lorraine','quick-black-bean-and-rice-burrito-bowl','quick-sheet-pan-chicken-fajitas','ratatouille',
  'reuben-sandwich','ricotta-and-berry-honey-toast','roast-beef-and-horseradish-sandwich',
  'roasted-vegetable-buddha-bowl-with-tahini','roast-turkey-breast-with-pan-gravy','ropa-vieja',
  'salade-nicoise','salisbury-steak-with-mushroom-gravy','salmon-en-papillote','salmon-rice-bowl',
  'savory-oatmeal-with-soft-egg-and-scallions','sesame-crusted-tuna-steak','sesame-peanut-noodle-bowl',
  'shakshuka','sheet-pan-garlic-lemon-chicken-and-asparagus','sheet-pan-salmon-with-zucchini-and-tomatoes',
  'sheet-pan-smoked-sausage-peppers-and-onions','shepherd-s-pie','shoyu-ramen-with-chicken',
  'shrimp-and-grits','shrimp-scampi','shrimp-taco-salad','shrimp-tacos-with-chipotle-crema',
  'singapore-noodles-with-shrimp','skillet-caprese-chicken','skillet-tamale-pie','sloppy-joes',
  'smash-burgers','smoked-salmon-and-cream-cheese-bagel','soba-noodle-salad-with-edamame',
  'southwest-chicken-salad-with-lime-ranch','southwestern-mason-jar-quinoa-salad','spaghetti-bolognese',
  'spaghetti-carbonara','spanakopita','spanish-potato-tortilla','spicy-korean-chicken-stir-fry',
  'spinach-and-cheese-stuffed-chicken-breast','spinach-and-mushroom-quiche',
  'spinach-egg-and-avocado-breakfast-wrap','split-pea-soup','steak-frites-with-herb-butter',
  'steel-cut-oats-with-brown-sugar-and-pecans','stuffed-portobello-mushrooms',
  'stuffed-shells-with-ricotta-and-spinach','sweet-and-sour-pork','tabbouleh','teriyaki-chicken-rice-bowl',
  'teriyaki-salmon-donburi','texas-chili-con-carne','thai-basil-chicken','thai-green-curry-with-chicken',
  'thai-red-curry-with-shrimp','three-bean-salad','tom-kha-gai','tropical-green-power-smoothie','tuna-melt',
  'tuna-noodle-casserole','tuna-poke-bowl','turkey-and-cranberry-sandwich','turkey-and-wild-rice-soup',
  'turkey-avocado-and-hummus-wrap','turkey-burgers-with-avocado','turkey-chili-with-beans',
  'turkey-club-sandwich','turkey-marinara-over-zucchini-noodles','tuscan-white-bean-and-spinach-soup',
  'vegetable-biryani','vegetable-chow-mein','vegetable-lasagna','vegetarian-black-bean-chili',
  'vegetarian-enchilada-casserole','vegetarian-red-beans-and-rice','veggie-scramble-with-feta-and-herbs',
  'vietnamese-caramelized-chicken','waldorf-salad','western-omelette','whole-wheat-banana-pancakes'
];
var FALLBACK_HERO = 'linear-gradient(135deg,#FFF3E0 0%,#FFE0B2 40%,#FFCC80 100%)';

// A missing photo falls back to a gradient — never to another dish's photo.
// Single quotes only: this value is injected into a double-quoted style="" attribute.
function heroFor(recipe) {
  if (RECIPE_IMAGES.indexOf(recipe.id) === -1) { return FALLBACK_HERO; }
  return "url('" + RECIPE_IMAGE_DIR + recipe.id + ".webp') center/cover no-repeat";
}

// ═══════════════ CHIP ICONS ═══════════════
var chipSvgs = {
  ok:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5.5 5.5L20 7"/></svg>',
  soon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>',
  now:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 7v6"/><path d="M12 17h.01"/></svg>',
  unknown:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.3 9.2a2.8 2.8 0 1 1 3.6 2.7c-.7.2-1 .8-1 1.5v.4"/><path d="M12 17.5h.01"/></svg>'
};
function chipHTML(cls, text) { return '<span class="chip ' + cls + '">' + (chipSvgs[cls] || '') + ' ' + text + '</span>'; }

// ═══════════════ RECIPE PREFERENCES ═══════════════
var prefs = {};
function getPref(id) { if (!prefs[id]) { prefs[id] = { vote:null, fav:false }; } return prefs[id]; }

var rateIcons = {
  up:   '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20V10l4.5-6.5a1.8 1.8 0 0 1 3 1.9L13 10h5.3a2 2 0 0 1 2 2.4l-1.4 6A2 2 0 0 1 17 20H7Z"/><path d="M7 10H4v10h3"/></svg>',
  down: '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M17 4v10l-4.5 6.5a1.8 1.8 0 0 1-3-1.9L11 14H5.7a2 2 0 0 1-2-2.4l1.4-6A2 2 0 0 1 7 4h10Z"/><path d="M17 14h3V4h-3"/></svg>',
  fav:  '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7-4.4-7-9.2A4 4 0 0 1 12 8a4 4 0 0 1 7 2.8C19 15.6 12 20 12 20Z"/></svg>'
};
function ratingBarHTML(id) {
  var p = getPref(id);
  return '<div class="rating-bar" id="ratingBar">' +
    '<button class="rate-btn up' + (p.vote === 'up' ? ' on' : '') + '" onclick="rateMeal(\'' + id + '\',\'up\')">' + rateIcons.up + 'Like</button>' +
    '<button class="rate-btn down' + (p.vote === 'down' ? ' on' : '') + '" onclick="rateMeal(\'' + id + '\',\'down\')">' + rateIcons.down + 'Not for us</button>' +
    '<button class="rate-btn fav' + (p.fav ? ' on' : '') + '" onclick="rateMeal(\'' + id + '\',\'fav\')">' + rateIcons.fav + 'Favourite</button>' +
  '</div>';
}
function rateMeal(id, kind) {
  var p = getPref(id), msg;
  if (kind === 'fav') {
    p.fav = !p.fav;
    msg = p.fav ? '❤️ Favourited — this one comes back around more often.' : 'Un-favourited. Back to the regular rotation.';
  } else {
    p.vote = (p.vote === kind) ? null : kind;
    if (p.vote === 'up')        { msg = '👍 Noted — more like this.'; }
    else if (p.vote === 'down') { msg = '👎 Swapping it out — we won\'t suggest this again.'; }
    else                        { msg = 'Rating cleared.'; }
  }
  var bar = document.getElementById('ratingBar');
  if (bar) { bar.outerHTML = ratingBarHTML(id); }

  if (p.vote === 'down') {
    // A disliked recipe is replaced rather than leaving a hole in the day.
    var idx = -1;
    for (var i=0;i<plan.length;i++) { if (plan[i].recipe === id && plan[i].status === 'pending') { idx = i; break; } }
    closeDetail();
    if (idx > -1) { swapMeal(idx, true); }
    showToast(msg);
    return;
  }
  renderAll();
  showToast(msg);
}

// ═══════════════ PLAN RENDERING ═══════════════
function nextMealSlot() {
  var h = new Date().getHours();
  if (h < 10) return 0;
  if (h < 15) return 1;
  return 2;
}

function renderDaySelector() {
  var sel = document.getElementById('daySelector');
  var html = '';
  for (var i=0;i<3;i++) {
    html += '<button class="day-btn' + (currentDay === i+1 ? ' active' : '') + '" data-day="' + (i+1) + '" onclick="selectDay(' + (i+1) + ')">' +
      dayLabel(i) + '<br><small>' + fmtDate(dateFor(i)) + '</small></button>';
  }
  sel.innerHTML = html;
}
function selectDay(d) { currentDay = d; renderMeals(); renderDaySelector(); }

function pantryEmpty() { return !pantry.some(inStock); }

var TICK_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5.5 5.5L20 7"/></svg>';
var BANG_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round"><path d="M12 7v6"/><path d="M12 17h.01"/></svg>';

function renderBanner() {
  var el = document.getElementById('banner');

  if (pantryEmpty()) {
    el.className = 'banner empty';
    el.innerHTML =
      '<div class="text"><strong>Your fridge is a mystery to us</strong>' +
      '<span>Tell us what\'s in it and the plan will work around what you actually have. Nothing is assumed.</span>' +
      '<button class="btn primary small" onclick="openAddItem()">Add food</button></div>';
    return;
  }

  var n = planNeeds();
  var pendingCount = plan.filter(activeEntry).length;
  var gaps = n.short.length + n.missing.length + n.stale.length;
  var check = n.check.length ? ' Check you have enough ' + listOf(n.check.map(function(c){ return c.name.toLowerCase(); }), 4) +
                               ': the amount isn\'t recorded in a unit we can compare.' : '';
  var changed = planSig !== kitchenSig();
  var replan = (gaps || changed) && pendingCount
    ? '<button class="btn ghost small" onclick="replanNow()">' + (changed ? 'Your kitchen changed: re-plan' : 'Re-plan around my kitchen') + '</button>' : '';

  if (gaps === 0) {
    var opt = optionalMissing();
    el.className = 'banner' + (n.check.length ? ' check' : '');
    el.innerHTML = '<span class="tick">' + TICK_SVG + '</span>' +
      '<div class="text"><strong>No grocery trip required</strong><span>' +
        (pendingCount ? pendingCount + ' meal' + (pendingCount > 1 ? 's' : '') + ' still to cook, covered by what you have.' : 'Every meal in this plan is logged. Nice work.') +
        esc(check) + (opt.length ? ' Optional extras you don\'t have: ' + esc(listOf(opt, 4)) + '.' : '') +
      '</span>' + replan + '</div>';
    return;
  }
  // Shortfalls name the meal that runs out, because an earlier meal in the plan uses the same food.
  var lines = n.short.map(function(s) {
      return s.name + ': ' + s.meal + ' needs ' + fmtQty(s.need, s.unit) + ', ' + fmtQty(s.have, s.unit) + ' left after earlier meals';
    }).concat(n.stale.map(function(s) {
      return s.name + ' will be past its estimated window by ' + s.meal;
    })).concat(n.missing.length ? ['Not in your kitchen: ' + listOf(n.missing.map(function(m) { return m.name.toLowerCase(); }), 6)] : []);
  el.className = 'banner short';
  el.innerHTML = '<span class="tick">' + BANG_SVG + '</span>' +
    '<div class="text"><strong>' + gaps + ' gap' + (gaps > 1 ? 's' : '') + ' in this plan</strong>' +
    '<span>' + esc(lines.join(' · ')) + '. Swap a meal, re-plan, or shop for the gap.' + esc(check) + '</span>' + replan + '</div>';
}
function listOf(items, max) {
  return items.length <= max ? items.join(', ') : items.slice(0, max).join(', ') + ' and ' + (items.length - max) + ' more';
}

function mealChips(recipe) {
  // Surface the most urgent ingredient this recipe uses, and the first thing it's missing.
  var out = [], urgent = null, missing = null;
  visibleLines(recipe).forEach(function(line) {
    var e = urgentEntryFor(line);
    if (!e) { if (!line.optional && !missing) missing = line; return; }
    var f = freshness(e);
    if (f.known && (!urgent || f.min < urgent.f.min)) { urgent = { e:e, f:f }; }
  });
  if (urgent && urgent.f.min <= 3) {
    out.push({ cls:urgent.f.cls, text:'uses ' + ingName(urgent.e.ing).toLowerCase() + ' · ' + urgent.f.text });
  } else if (!missing) {
    out.push({ cls:'ok', text:'all in window' });
  }
  if (missing) { out.push({ cls:'now', text:'needs ' + lineName(missing).toLowerCase() }); }
  return out;
}

function renderMeals() {
  var container = document.getElementById('mealCards');
  container.innerHTML = '';
  var spot = (currentDay === 1) ? nextMealSlot() : -1;

  MEAL_TYPES.forEach(function(type, slot) {
    var idx = planIndex(currentDay, type);
    var entry = plan[idx];
    var r = recipeById(entry.recipe);
    if (!r) return;

    var pref = getPref(r.id);
    var card = document.createElement('div');
    card.className = 'meal-card' + (slot === spot ? ' spotlight' : '') + (entry.status !== 'pending' ? ' done' : '') + (entry.dietBlocked ? ' blocked' : '');
    card.onclick = function() { openDetail(idx); };

    var chips = mealChips(r).map(function(c) { return chipHTML(c.cls, esc(c.text)); }).join('');
    var badge = '';
    if (entry.status === 'accepted') { badge = '<span class="state-badge cooked">✓ cooked</span>'; }
    if (entry.status === 'skipped')  { badge = '<span class="state-badge skipped">skipped</span>'; }
    if (entry.dietBlocked)           { badge = '<span class="state-badge blocked">⚠ doesn\'t fit</span>'; }

    card.innerHTML =
      '<div class="meal-hero" style="background:' + heroFor(r) + ';">' +
        '<span class="meal-type-badge ' + r.type + '">' + r.type + '</span>' +
        '<span class="time-badge">' + r.time + '</span>' +
        badge +
        (pref.fav ? '<span class="fav-badge" title="Favourite">' + rateIcons.fav + '</span>' : '') +
      '</div>' +
      '<div class="meal-info">' +
        '<h4>' + r.name + '</h4>' +
        '<p class="meta">' + r.type.charAt(0).toUpperCase() + r.type.slice(1) + ' · ' + r.time + '</p>' +
        '<div class="chip-row">' + chips + '</div>' +
      '</div>';

    container.appendChild(card);
  });
}

// Where everything goes: each measured ingredient, and how much each day's meals take.
function renderAlloc() {
  var body = document.getElementById('allocBody');
  if (!body) return;
  var rows = {}, order = [];
  plan.forEach(function(entry, idx) {
    if (entry.status === 'skipped') return;
    var r = recipeById(entry.recipe);
    var day = Math.floor(idx / 3);
    visibleLines(r).forEach(function(line) {
      var amount = amountFor(line);
      if (amount === null) return;
      var key = lineIds(line).join('|') + '@' + line.unit;
      if (!rows[key]) { rows[key] = { name:lineName(line), unit:line.unit, days:[0,0,0] }; order.push(key); }
      rows[key].days[day] = round2(rows[key].days[day] + amount);
    });
  });
  body.innerHTML = order.map(function(k) {
    var row = rows[k];
    return '<tr><td>' + esc(row.name) + '</td>' + row.days.map(function(t) {
      return t > 0 ? '<td>' + fmtQty(t, row.unit) + '</td>' : '<td class="nil">&mdash;</td>';
    }).join('') + '</tr>';
  }).join('');
}

// ═══════════════ PANTRY RENDERING ═══════════════
function entryQty(e) { return e.qty === null ? 'amount not recorded' : (e.qty > 0 ? fmtQty(e.qty, e.unit) : 'used up'); }

function renderPantry() {
  var att = document.getElementById('pantryAttention');
  var zones = document.getElementById('pantryZones');

  if (!pantry.length) {
    att.innerHTML = '<div class="empty-card"><strong>Nothing here yet</strong>' +
      '<span>Add what\'s in your fridge, freezer and cupboard. A rough count is fine, and if you don\'t know when you bought something, say so; we\'ll never guess.</span>' +
      '<button class="btn primary small" onclick="openAddItem()">Add food</button></div>';
    zones.innerHTML = '';
    return;
  }

  // Needs attention: anything near or past its window, plus fridge and freezer food whose
  // freshness can't be estimated — it might be fine, but nobody can say.
  var attention = pantry.filter(function(e) {
    if (!inStock(e)) return false;
    var f = freshness(e);
    return f.known ? f.min <= 3 : e.zone !== 'cupboard';
  }).sort(byUrgency);

  att.innerHTML = attention.map(function(e) {
    var f = freshness(e);
    return '<div class="pantry-item" onclick="openEditItem(\'' + e.id + '\')">' +
      '<div>' +
        '<div class="name">' + esc(ingName(e.ing)) + '</div>' +
        '<div class="qty">' + entryQty(e) + ' · ' + zoneLabel(e.zone).toLowerCase() + '</div>' +
        '<div class="basis">' + esc(basisLine(e)) + '</div>' +
      '</div>' + chipHTML(f.cls, f.text) +
    '</div>';
  }).join('') || '<p class="pantry-note" style="margin-top:0;">Nothing needs urgent attention. Rare and beautiful.</p>';

  zones.innerHTML = ZONES.map(function(z) {
    var items = pantry.filter(function(e) { return e.zone === z.key; })
      .sort(function(a, b) { return ingName(a.ing).localeCompare(ingName(b.ing)); });
    var count = items.filter(inStock).length;
    var open = openZones[z.key];
    var lines = items.map(function(e) {
      var f = freshness(e);
      return '<div class="zone-line' + (inStock(e) ? '' : ' out') + '" onclick="event.stopPropagation();openEditItem(\'' + e.id + '\')">' +
        '<div><div class="zl-name">' + esc(ingName(e.ing)) + '</div>' +
        '<div class="zl-sub">' + esc(basisLine(e)) + '</div></div>' +
        '<div class="zl-right"><div class="zl-qty">' + entryQty(e) + '</div>' + (inStock(e) ? chipHTML(f.cls, f.text) : '') + '</div>' +
      '</div>';
    }).join('') || '<div class="zone-line empty"><div class="zl-sub">Nothing in the ' + z.label.toLowerCase() + ' yet.</div></div>';
    return '<div class="zone-row' + (open ? ' open' : '') + '" onclick="toggleZone(\'' + z.key + '\')">' +
        '<span class="zone-name">' + z.label + '</span>' +
        '<span class="zone-count">' + count + ' item' + (count === 1 ? '' : 's') + ' <span class="caret">&rsaquo;</span></span>' +
      '</div>' +
      (open ? '<div class="zone-items">' + lines + '</div>' : '');
  }).join('');
}

var openZones = { fridge:false, freezer:false, cupboard:false };
function toggleZone(key) { openZones[key] = !openZones[key]; renderPantry(); }

// ═══════════════ DETAIL VIEW ═══════════════
var detailIndex = null;

// The numbered steps, exactly as the approved database writes them. Tap a step to tick it off
// while cooking (not saved: it resets when the screen closes).
function methodHTML(r) {
  if (!r.steps.length) return '';
  return '<div class="section-label">How to make it <span class="method-tip">tap a step when it\'s done</span></div>' +
    '<ol class="method">' + r.steps.map(function(s, i) {
      return '<li onclick="this.classList.toggle(\'done\')"><span class="step-n">' + (i + 1) + '</span><span>' + esc(s) + '</span></li>';
    }).join('') + '</ol>';
}

// Per-serving nutrition, estimated at build time from the ingredient amounts and an estimated
// serving count (the approved database states neither), so it is always labelled an estimate.
function nutritionHTML(r) {
  var n = r.nut;
  if (!n) return '';
  function cell(label, value, unit) {
    return '<div class="nut-cell"><div class="nut-val">' + value + '<span>' + unit + '</span></div><div class="nut-label">' + label + '</div></div>';
  }
  return '<div class="section-label">Nutrition &middot; per serving <span class="method-tip">estimated</span></div>' +
    '<div class="nutrition-card">' +
      '<div class="nut-kcal"><b>' + n.kcal + '</b> kcal</div>' +
      '<div class="nut-grid">' +
        cell('Protein', n.protein, 'g') + cell('Carbs', n.carbs, 'g') + cell('Fat', n.fat, 'g') +
        cell('Fibre', n.fibre, 'g') + cell('Sodium', n.sodium, 'mg') +
      '</div>' +
    '</div>' +
    '<p class="field-hint">Estimated for about ' + n.serves + ' serving' + (n.serves > 1 ? 's' : '') +
      ', from the ingredient amounts and typical food-composition values. The recipe file doesn\'t state servings or nutrition. ' +
      'Optional ingredients and anything without an amount aren\'t counted' +
      (n.cover < 100 ? ' (' + n.cover + '% of this recipe\'s ingredient lines were)' : '') + '.</p>';
}

// One row per line of the recipe, in the recipe's own words, with what the kitchen has for it.
// For a meal still to cook, what earlier meals in the plan set aside is taken off first.
function ingredientRowsHTML(r, idx) {
  var entry = plan[idx];
  var reserved = activeEntry(entry) ? reservationsBefore(idx) : null;
  var visible = {};
  visibleLines(r).forEach(function(l) { visible[l.text] = l; });
  var html = '', missing = [];
  r.all.forEach(function(orig) {
    if (orig.staple) {
      html += '<div class="ingredient-row"><div><div class="ingredient-name">' + esc(orig.text) + '</div>' +
        '<div class="ingredient-basis">Staple, assumed on hand</div></div></div>';
      return;
    }
    var line = visible[orig.text];
    if (!line) return;                                  // an optional extra a restriction rules out
    var amount = amountFor(line), c = coverage(line, amount, reserved);
    var opt = line.optional && !/optional/i.test(line.text) ? ' <span class="opt">optional</span>' : '';
    if (c.status === 'missing') {
      if (!line.optional) missing.push(line);
      html += '<div class="ingredient-row"><div><div class="ingredient-name">' + esc(line.text) + opt + '</div>' +
        '<div class="ingredient-basis">No ' + esc(lineName(line).toLowerCase()) + ' in your kitchen' +
        (line.optional ? ', and the dish works without it' : '') + '</div></div>' +
        chipHTML(line.optional ? 'unknown' : 'now', line.optional ? 'skip it' : 'missing') + '</div>';
      return;
    }
    var e = urgentEntryFor(line), f = freshness(e);
    var chip = { ok:[f.cls, f.text], check:['soon', 'check amount'], short:['now', 'short'] }[c.status];
    var note = '';
    if (activeEntry(entry) && turnsBefore(line, Math.floor(idx / 3))) {
      chip = ['now', 'turned by then'];
      note = ' · <b>past its estimated window before this meal\'s day, so swap or re-plan</b>';
    }
    if (c.status === 'short') {
      note = ' · <b>' + fmtQty(c.stock.known, line.unit) + ' left' + (reserved && reserved[c.id] ? ' after earlier meals in the plan' : ' on hand') + '</b>';
    }
    if (c.status === 'check') { note = ' · <b>how much you have isn\'t recorded in a comparable unit, so check before cooking</b>'; }
    html += '<div class="ingredient-row"><div>' +
        '<div class="ingredient-name">' + esc(line.text) + opt + '</div>' +
        '<div class="ingredient-basis">' + esc(ingName(c.id)) + ': ' + esc(basisLine(e)) + note + '</div>' +
      '</div>' + chipHTML(chip[0], chip[1]) + '</div>';
  });
  return { html:html, missing:missing };
}
// A one-line reason the planner picked this meal, from the kitchen, never made up.
function whyLine(r) {
  var urgent = null;
  visibleLines(r).forEach(function(line) {
    var e = urgentEntryFor(line); if (!e) return;
    var f = freshness(e);
    if (f.known && f.max >= 0 && f.min <= 3 && (!urgent || f.min < urgent.f.min)) urgent = { e:e, f:f };
  });
  if (urgent) return 'Uses your ' + ingName(urgent.e.ing).toLowerCase() + ' while it\'s still good (' + urgent.f.text + ').';
  return '';
}

function openDetail(idx) {
  detailIndex = idx;
  var entry = plan[idx];
  var r = recipeById(entry.recipe);
  var overlay = document.getElementById('detailOverlay');

  document.getElementById('detailHero').style.background = heroFor(r);
  document.getElementById('detailTitle').textContent = r.name;
  var day = Math.floor(idx / 3);
  document.getElementById('detailBackLabel').textContent = dayLabel(day) + ' · ' + r.type;

  var rows = ingredientRowsHTML(r, idx);
  var html = ratingBarHTML(r.id) +
    '<div class="detail-facts">' +
      '<div class="detail-fact">⏱ ' + r.time + '</div>' +
      '<div class="detail-fact">Recipe #' + r.n + '</div>' +
    '</div>' +
    '<div class="section-label" style="margin-top:0;">Ingredients &middot; from your kitchen</div>' +
    '<div class="ingredient-card">' + rows.html + '</div>' +
    '<p class="field-hint">Amounts as the recipe file writes them. It doesn\'t say how many each recipe serves' +
      (r.nut ? '; about ' + r.nut.serves + ' is our estimate' : '') + '.</p>';

  rows.missing.forEach(function(line) {
    html += '<div class="missing-callout"><b>Missing: ' + esc(lineName(line)) + '</b><span>Required for this recipe. Swap the meal or pick it up.</span></div>';
  });

  html += methodHTML(r);

  if (entry.dietBlocked) {
    html += '<div class="missing-callout"><b>Doesn\'t fit your dietary settings</b><span>' +
      'Nothing for ' + r.type + ' in the approved recipe files fits ' +
      activeDietLabels().join(' + ') + '. Relax a restriction to fill this slot.</span></div>' +
      '<div class="actions"><button class="btn ghost" onclick="switchTab(\'profileTab\');openSub(\'dietary\');">Review dietary settings</button></div>';
  } else if (entry.status === 'accepted') {
    html += '<div class="actions">' +
        '<button class="btn ghost" onclick="undoAccept(' + idx + ')">Undo — put ingredients back</button>' +
      '</div>' +
      '<p class="detail-note">Marked cooked. What it used has been deducted from your pantry.' +
        (entry.unmeasured && entry.unmeasured.length
          ? '<br><br><b>' + esc(entry.unmeasured.join(', ')) + '</b> had no comparable amount on record, so nothing was taken off. If you used the last of it, update it in Pantry.'
          : '') + '</p>';
  } else if (entry.status === 'skipped') {
    html += '<div class="actions">' +
        '<button class="btn primary" onclick="unskip(' + idx + ')">Put it back on the plan</button>' +
      '</div>' +
      '<p class="detail-note">Skipped. Nothing was deducted from your pantry.</p>';
  } else {
    var why = whyLine(r);
    html += '<div class="actions">' +
        '<button class="btn primary" onclick="acceptMeal(' + idx + ')">Accept</button>' +
        '<button class="btn ghost" onclick="swapMeal(' + idx + ')">Swap</button>' +
        '<button class="btn quiet" onclick="skipMeal(' + idx + ')">Skip</button>' +
      '</div>' +
      '<p class="detail-note">' + (why ? esc(why) + '<br><br>' : '') +
        'Accepting deducts what this recipe uses from your pantry. Swap and Skip do not. ' +
        'Freshness windows are estimates from purchase dates and the norms in <i>shelf-life-norms.md</i>, not a check of the food itself.' +
      '</p>';
  }
  html += nutritionHTML(r);
  document.getElementById('detailContent').innerHTML = html;
  overlay.classList.add('open');
  document.getElementById('fab').style.display = 'none';
}

function closeDetail() {
  document.getElementById('detailOverlay').classList.remove('open');
  detailIndex = null;
  if (currentTab !== 'profileTab') { document.getElementById('fab').style.display = 'flex'; }
}

// ═══════════════ ACCEPT / SWAP / SKIP ═══════════════
function acceptMeal(idx) {
  var entry = plan[idx];
  if (entry.status === 'accepted') return;
  var r = recipeById(entry.recipe);

  var used = deductRecipe(r);
  entry.taken = used.taken;
  entry.unmeasured = unmeasuredIn(r);
  entry.status = 'accepted';
  entry.cookedOn = todayKey();
  cookLog.push({ date:entry.cookedOn, recipe:r.id, rescued:used.rescued });

  closeDetail();
  renderAll();
  showToast(entry.unmeasured.length
    ? '✅ Cooked. ' + entry.unmeasured.join(', ') + ' had no amount recorded, so check it in Pantry.'
    : '✅ Cooked — ingredients deducted from your pantry.');
}

// Ingredients a meal used that couldn't be drawn down because no quantity is on record.
function unmeasuredIn(r) {
  var out = [];
  visibleLines(r).forEach(function(line) {
    var amount = amountFor(line);
    if (amount === null) return;
    var c = coverage(line, amount);
    if (c.stock && c.stock.uncertain && out.indexOf(ingName(c.id)) === -1) out.push(ingName(c.id));
  });
  return out;
}

function undoAccept(idx) {
  var entry = plan[idx];
  if (entry.status !== 'accepted') return;
  restoreTaken(entry.taken);
  // Take the matching cook-log entry back out too, so the stats stay honest.
  for (var i = cookLog.length - 1; i >= 0; i--) {
    if (cookLog[i].recipe === entry.recipe && cookLog[i].date === entry.cookedOn) { cookLog.splice(i, 1); break; }
  }
  delete entry.taken; delete entry.unmeasured; delete entry.cookedOn;
  entry.status = 'pending';
  closeDetail();
  renderAll();
  showToast('Undone — ingredients are back in your pantry.');
}

function skipMeal(idx) {
  plan[idx].status = 'skipped';
  closeDetail();
  renderAll();
  showToast('Skipped — nothing deducted.');
}
function unskip(idx) {
  plan[idx].status = 'pending';
  closeDetail();
  renderAll();
  showToast('Back on the plan.');
}

// Swap: the best other recipe of the same meal type for what's in the kitchen, after what the
// rest of the plan sets aside. Dietary restrictions and "not for us" are hard filters.
function bestAlternative(idx, current) {
  var others = plan.map(function(e, i) { return i === idx ? null : e.recipe; }).filter(Boolean);
  var pick = pickRecipe(current.type, Math.floor(idx / 3), reservationsExcept(idx), others.concat([current.id]));
  return pick && pick.id !== current.id ? pick : null;
}

function swapMeal(idx, silent) {
  var entry = plan[idx];
  var current = recipeById(entry.recipe);
  var pick = bestAlternative(idx, current);

  if (!pick) {
    showToast('No other ' + current.type + ' in the approved files fits your settings.');
    return;
  }

  entry.recipe = pick.id;
  entry.status = 'pending';
  delete entry.dietBlocked;

  closeDetail();
  renderAll();
  var why = whyLine(pick);
  showToast((silent ? 'Replaced with ' : 'Swapped to ') + pick.name + (why ? '. ' + why : ''));
}

// Applied whenever a dietary preference changes. Any pending meal that breaks a restriction is
// replaced with the best compliant one. Meals already marked cooked are left alone: the food is
// eaten, and rewriting history would be dishonest. If nothing in the approved files fits, the
// slot is flagged rather than filled with something that breaks the restriction.
function enforceDiet() {
  var swapped = [], stuck = [];
  plan.forEach(function(entry, idx) {
    if (entry.status !== 'pending') return;
    var r = recipeById(entry.recipe);
    if (!violatesDiet(r) && !entry.dietBlocked) return;
    var others = plan.map(function(e, i) { return i === idx ? null : e.recipe; }).filter(Boolean);
    var pick = pickRecipe(r.type, Math.floor(idx / 3), reservationsExcept(idx), others);
    if (pick) {
      if (violatesDiet(r)) swapped.push(r.name + ' → ' + pick.name);
      entry.recipe = pick.id;
      delete entry.dietBlocked;
    } else {
      entry.dietBlocked = true;
      stuck.push(r.type);
    }
  });
  planSig = kitchenSig();
  renderAll();
  return { swapped:swapped, stuck:stuck };
}
// ═══════════════ SETTINGS SUB-SCREENS ═══════════════
function openSub(which) {
  var title = '', body = '';

  if (which === 'household') {
    title = 'Household size';
    body =
      '<p class="sub-intro">How many people you\'re cooking for.</p>' +
      '<div class="stepper">' +
        '<button class="step-btn" onclick="setHousehold(-1)"' + (settings.household <= 1 ? ' disabled' : '') + '>&minus;</button>' +
        '<div><div class="val">' + settings.household + '</div><div class="lbl">people</div></div>' +
        '<button class="step-btn" onclick="setHousehold(1)"' + (settings.household >= 8 ? ' disabled' : '') + '>+</button>' +
      '</div>' +
      '<div class="note-card">The recipe file doesn\'t say how many each recipe serves, so for now recipes aren\'t scaled to this number. ' +
      'Amounts are shown and deducted as the recipe writes them. Once servings are added to the recipe file, this is what they\'ll scale to.</div>';
  }

  if (which === 'dietary') {
    title = 'Dietary preferences';
    var d = [
      ['vegetarian','Vegetarian','No meat or fish in suggested meals'],
      ['dairyFree','Dairy-free','Skip milk, cheese and yogurt'],
      ['nutFree','Nut-free','Exclude peanut and tree-nut recipes'],
      ['porkFree','No pork','Exclude pork and pork products']
    ];
    var active = activeDietLabels();
    var fits = MEAL_TYPES.map(function(t) {
      return recipes.filter(function(r){ return r.type === t && !violatesDiet(r); }).length + ' ' + t;
    }).join(' · ');
    body = '<p class="sub-intro">Applied to the household, not a single meal. Turning one on immediately swaps any planned meal that breaks it.</p><div>' +
      d.map(function(x) {
        return '<div class="toggle-row"><div><div class="tr-name">' + x[1] + '</div><div class="tr-sub">' + x[2] + '</div></div>' +
          '<button class="switch' + (settings.dietary[x[0]] ? ' on' : '') + '" onclick="toggleDiet(\'' + x[0] + '\')"></button></div>';
      }).join('') + '</div>' +
      '<p class="nutri-note" style="margin-top:12px;">' +
        (active.length ? 'Active: ' + active.join(', ') + '. ' : 'No restrictions set. ') +
        'Recipes that still fit: ' + fits + '.</p>' +
      '<div class="note-card">These are hard filters, not preferences — a restricted recipe is never suggested, never surfaced by Swap, and never used to fill a new day. ' +
      'Meals you have already marked cooked are left as they are.<br><br>' +
      '<b>One caveat worth keeping in view:</b> filtering works on recipe-level tags, so it is only as good as those tags. For a real allergy that is not sufficient — ' +
      'ingredient-level checking and label reading would be required before anyone relies on this.</div>';
  }

  if (which === 'notify') {
    title = 'Notification reminders';
    var n = [
      ['cooked','Did you cook it?','An evening nudge to confirm what you actually made, so the pantry stays accurate'],
      ['expiry','Use-it-soon alerts','A heads-up when something is near the end of its estimated window'],
      ['planReady','New plan ready','A note when the next three-day plan is built']
    ];
    body = '<p class="sub-intro">The cooked-meal nudge is the one that keeps inventory honest — without it, the pantry drifts from reality.</p><div>' +
      n.map(function(x) {
        return '<div class="toggle-row"><div><div class="tr-name">' + x[1] + '</div><div class="tr-sub">' + x[2] + '</div></div>' +
          '<button class="switch' + (settings.notify[x[0]] ? ' on' : '') + '" onclick="toggleNotify(\'' + x[0] + '\')"></button></div>';
      }).join('') + '</div>' +
      '<div class="note-card">Whether a reminder ships in version 1 is still an open question in the spec (blindspot #5). This screen is here to test whether people would want one at all.</div>';
  }

  if (which === 'about') {
    title = 'About What the Fridge';
    body =
      '<div style="text-align:center;margin:var(--s8) 0;"><img src="logo-setup.webp" alt="What the Fridge" style="height:80px;width:auto;"></div>' +
      '<p class="sub-intro" style="font-size:15px;line-height:1.6;">What the Fridge plans three days of breakfast, lunch and dinner around the food already in your kitchen, ' +
      'so nothing expires forgotten and you always know what\'s for dinner.</p>' +
      '<div class="note-card" style="margin-top:var(--s6);">' +
        '<strong>How it works</strong><br>' +
        'Add your groceries to the Pantry (manually or by snapping a receipt). The planner picks from 300 approved recipes, ' +
        'prioritising items closest to their freshness window. Mark meals cooked and the ingredients are deducted automatically.' +
      '</div>' +
      '<div class="note-card" style="margin-top:var(--s4);">' +
        '<strong>Privacy</strong><br>' +
        'Everything is saved in this browser only. Your food, plan and settings never leave your device.' +
      '</div>' +
      '<div style="margin-top:var(--s8);color:var(--ink-soft);font-size:13px;line-height:1.5;text-align:center;">' +
        'BUS 860 · Group 3<br>University of Alberta' +
      '</div>';
  }

  if (which === 'receipt') {
    title = 'Upload receipt';
    body =
      '<p class="sub-intro">Take a photo of your grocery receipt or choose one from your camera roll. ' +
        'The app reads the text and suggests items to add to your pantry.</p>' +
      '<div class="receipt-upload-area" id="receiptUploadArea">' +
        '<label class="receipt-label" for="receiptFile">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="var(--leaf)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" style="width:48px;height:48px;margin-bottom:8px;">' +
            '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>' +
          '</svg>' +
          '<span>Tap to take a photo<br>or choose from camera roll</span>' +
        '</label>' +
        '<input type="file" id="receiptFile" accept="image/*" capture="environment" style="display:none;" onchange="handleReceiptFile(this)">' +
      '</div>' +
      '<div id="receiptStatus" style="display:none;"></div>' +
      '<div id="receiptResults" style="display:none;"></div>';
  }

  document.getElementById('subBackLabel').textContent = 'Profile';
  document.getElementById('subTitle').textContent = title;
  document.getElementById('subBody').innerHTML = body;
  document.getElementById('subScreen').classList.add('open');
  document.getElementById('fab').style.display = 'none';
  document.getElementById('subScreen').dataset.which = which;
}
function closeSub() {
  var sub = document.getElementById('subScreen');
  var wasAdding = sub.classList.contains('open') && sub.dataset.which === 'item';
  sub.classList.remove('open');
  // A plan made for an empty kitchen is a placeholder; once food is in, build the real one.
  if (wasAdding && planBuiltEmpty && !pantryEmpty()) {
    planKitchen(true);
    renderAll();
    showToast('Your plan is ready, built around what you just added.');
  }
  if (currentTab !== 'profileTab') { document.getElementById('fab').style.display = 'flex'; }
}
function setHousehold(delta) {
  settings.household = Math.min(8, Math.max(1, settings.household + delta));
  document.getElementById('hhArrow').innerHTML = settings.household + ' &rsaquo;';
  openSub('household');
  renderAll();
  showToast('Household of ' + settings.household + ' saved.');
}
function toggleDiet(key) {
  settings.dietary[key] = !settings.dietary[key];
  var result = enforceDiet();
  openSub('dietary');

  var on = settings.dietary[key];
  var label = DIET_RULES[key].label;
  if (result.stuck.length) {
    showToast('⚠ No ' + result.stuck[0] + ' in the approved files fits — that slot needs attention.');
  } else if (result.swapped.length) {
    showToast(label + ' on — swapped ' + result.swapped.length + ' meal' + (result.swapped.length > 1 ? 's' : '') + ' out.');
  } else {
    showToast(label + (on ? ' on — your plan already fits.' : ' off.'));
  }
}
function toggleNotify(key) { settings.notify[key]  = !settings.notify[key];  openSub('notify'); saveState(); }

// ═══════════════ TABS / TOAST / ALLOCATION ═══════════════
function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(function(c) { c.classList.remove('active'); });
  document.querySelectorAll('.tabs .tab').forEach(function(t) { t.classList.remove('active'); });
  document.getElementById(tabId).classList.add('active');
  document.querySelector('[data-tab="' + tabId + '"]').classList.add('active');
  currentTab = tabId;
  document.getElementById('fab').style.display = (tabId === 'profileTab') ? 'none' : 'flex';
  document.getElementById('mainView').scrollTop = 0;
  closeDetail();
  closeSub();
}

function showToast(msg) {
  var toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(function() { toast.classList.remove('show'); }, 2600);
}

function toggleAlloc() {
  var sec = document.getElementById('allocSection');
  var arrow = document.getElementById('allocArrow');
  var open = sec.style.display === 'none';
  sec.style.display = open ? 'block' : 'none';
  arrow.innerHTML = open ? '&#x25BE;' : '&#x25B8;';
}

// ═══════════════ UNCONFIRMED MEALS ═══════════════
// A meal that leaves the horizon still 'pending' is ambiguous, not resolved: it may
// have been cooked and never logged, or never cooked at all. Those have opposite
// inventory consequences, so the roll carries the question forward instead of
// guessing. Nothing is deducted until Ren answers.
// See knowledge/skills/day-roll-reconciliation/SKILL.md.
function queueUnreconciled(entry, type, day) {
  if (!entry || entry.status !== 'pending' || entry.dietBlocked) { return; }
  unreconciled.push({ recipe:entry.recipe, type:type, label:fmtDate(day), date:todayKey(day) });
}

function renderReconcile() {
  var el = document.getElementById('reconcile');
  if (!el) { return; }
  if (!unreconciled.length) { el.innerHTML = ''; return; }
  var rows = unreconciled.map(function(u, i) {
    var r = recipeById(u.recipe);
    return '<div class="rec-row">' +
      '<div class="rec-meal"><strong>' + (r ? r.name : u.recipe) + '</strong>' +
      '<span>' + u.label + ' ' + u.type + '</span></div>' +
      '<div class="rec-acts">' +
        '<button class="primary" onclick="reconcile(' + i + ',\'cooked\')">Cooked it</button>' +
        '<button onclick="reconcile(' + i + ',\'not\')">Didn\'t</button>' +
        '<button onclick="reconcile(' + i + ',\'other\')">Ate out</button>' +
      '</div></div>';
  }).join('');
  el.innerHTML =
    '<div class="rec-card"><div class="rec-head">' +
      '<strong>' + unreconciled.length + ' meal' + (unreconciled.length > 1 ? 's' : '') +
        ' rolled past unconfirmed</strong>' +
      '<span>Tell us what happened and the pantry catches up. Nothing is deducted until you do.</span>' +
    '</div>' + rows + '</div>';
}

function reconcile(i, outcome) {
  var u = unreconciled[i];
  if (!u) { return; }
  if (outcome === 'cooked') {
    var r = recipeById(u.recipe);
    if (r) {
      var used = deductRecipe(r);
      cookLog.push({ date:u.date || todayKey(), recipe:r.id, rescued:used.rescued });
    }
  }
  unreconciled.splice(i, 1);
  renderAll();
  showToast(outcome === 'cooked'
    ? '\u2705 Logged — ingredients deducted from your pantry.'
    : 'Logged — nothing deducted.');
}

// ═══════════════ ROLLING DAYS ═══════════════
// Always today plus the next two. At midnight the first day drops off and a new
// third day is built from the approved files.
function rollDay(departingDate) {
  // Reconcile before dropping. A meal still 'pending' at midnight is queued as a
  // question rather than silently discarded — dropping it would leave its
  // ingredients in the pantry after they were eaten, drifting inventory in the
  // optimistic direction one day at a time.
  // departingDate is passed when catching up on days the app was closed.
  var departing = departingDate || dateFor(0);
  plan.slice(0, 3).forEach(function(entry, i) {
    queueUnreconciled(entry, MEAL_TYPES[i], departing);
  });
  plan.splice(0, 3);
  // The new third day is planned around what the two days already shown set aside. Those two
  // days are left as they are: changing meals someone has already seen, overnight, would surprise.
  var res = reservationsExcept(-1);
  var used = plan.map(function(e){ return e.recipe; });
  MEAL_TYPES.forEach(function(type) {
    var pick = pickRecipe(type, 2, res, used);
    if (pick) {
      plan.push({ recipe:pick.id, status:'pending' });
      reserveRecipe(pick, res);
      used.push(pick.id);
    } else {
      // Nothing compliant at all: flag the slot rather than break a restriction.
      plan.push({ recipe:recipes.filter(function(r){ return r.type === type; })[0].id, status:'pending', dietBlocked:true });
    }
  });
  currentDay = 1;
  dayOffset++;
}

function scheduleMidnight() {
  var now = new Date();
  var next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 2);
  setTimeout(function() {
    if (catchUp() > 0) {
      renderAll();
      showToast('New day — the plan rolled forward.');
    }
    scheduleMidnight();
  }, next - now);
}

// Prototype-only control, outside the phone frame.
function simulateMidnight() {
  rollDay();
  renderAll();
  showToast('Simulated midnight — the plan rolled forward.');
}

// ═══════════════ INIT ═══════════════
function renderDietStrip() {
  var strip = document.getElementById('dietStrip');
  if (!strip) return;
  var active = activeDietLabels();
  if (!active.length) { strip.innerHTML = ''; strip.style.display = 'none'; return; }
  strip.style.display = 'flex';
  strip.innerHTML = '<span>Filtering for</span>' +
    active.map(function(l){ return '<span class="diet-pill">' + l + '</span>'; }).join('');
}

function renderGreeting() {
  var el = document.getElementById('greet');
  if (!el) return;
  var now = new Date(), h = now.getHours();
  var part = h < 12 ? 'morning' : (h < 17 ? 'afternoon' : 'evening');
  el.textContent = now.toLocaleDateString(undefined, { weekday:'long' }) + ' ' + part + (settings.name ? ', ' + settings.name : '');
}

function renderAll() {
  renderGreeting();
  renderDaySelector();
  renderReconcile();
  renderBanner();
  renderDietStrip();
  renderMeals();
  renderAlloc();
  renderPantry();
  renderProfile();
  var hh = document.getElementById('hhArrow');
  if (hh) { hh.innerHTML = settings.household + ' &rsaquo;'; }
  var da = document.getElementById('dietArrow');
  if (da) {
    var n = activeDietLabels().length;
    da.innerHTML = (n ? n + ' active ' : '') + '&rsaquo;';
  }
  saveState();
}

// ═══════════════ PROFILE ═══════════════
// Counted only from the user's own cook log, so nothing here is an estimate. There is no
// money figure: the app has no prices to base one on.
function cookStreak() {
  var days = {};
  cookLog.forEach(function(c) { days[c.date] = true; });
  var d = new Date();
  if (!days[todayKey(d)]) d = addDays(d, -1);      // today isn't over yet
  var n = 0;
  while (days[todayKey(d)]) { n++; d = addDays(d, -1); }
  return n;
}
function ladderHTML(value, steps, fmt) {
  var next = null;
  var rungs = steps.map(function(s) {
    var cls = value >= s ? 'done' : (next === null ? (next = s, 'next') : '');
    return '<div class="rung ' + cls + '">' + fmt(s) + '</div>';
  }).join('');
  return { rungs:rungs, next:next };
}
function renderProfile() {
  var head = document.getElementById('profileHead');
  if (!head) return;
  var since = settings.since ? parseKey(settings.since).toLocaleDateString(undefined, { month:'short', year:'numeric' }) : '';
  head.innerHTML =
    '<div class="profile-avatar">' + esc(settings.name ? settings.name.charAt(0).toUpperCase() : '🥕') + '</div>' +
    '<div class="profile-name">' + esc(settings.name || 'Your kitchen') + '</div>' +
    '<div class="profile-sub">Household of ' + settings.household + (since ? ' &middot; planning since ' + since : '') + '</div>';

  var cooked = cookLog.length;
  var streak = cookStreak();
  var rescued = cookLog.reduce(function(s, c) { return s + (c.rescued || 0); }, 0);
  document.getElementById('profileStats').innerHTML =
    '<div class="profile-stat"><div class="num">' + cooked + '</div><div class="label">Meals<br>cooked</div></div>' +
    '<div class="profile-stat"><div class="num">' + streak + '</div><div class="label">Day<br>streak</div></div>' +
    '<div class="profile-stat"><div class="num">' + rescued + '</div><div class="label">Used before<br>they turned</div></div>';

  var r = ladderHTML(rescued, [10, 25, 50, 100], function(s) { return s; });
  var st = ladderHTML(streak, [7, 14, 30, 60, 180], function(s) { return s < 30 ? (s / 7) + ' wk' : (s / 30) + ' mo'; });
  var rPrev = r.next === null ? 100 : [0, 10, 25, 50][[10, 25, 50, 100].indexOf(r.next)];
  var sPrev = st.next === null ? 180 : [0, 7, 14, 30, 60][[7, 14, 30, 60, 180].indexOf(st.next)];
  var rPct = r.next === null ? 100 : Math.round((rescued - rPrev) / (r.next - rPrev) * 100);
  var sPct = st.next === null ? 100 : Math.round((streak - sPrev) / (st.next - sPrev) * 100);

  var rWit = !cooked ? 'Cook something from the plan and this starts counting every ingredient you use before its window closes.'
    : rescued < 10 ? rescued + ' ingredient' + (rescued === 1 ? '' : 's') + ' used while still in their prime. The crisper drawer thanks you.'
    : 'That\'s ' + rescued + ' things that didn\'t end up as a science experiment at the back of the fridge.';
  var sWit = !streak ? (cooked ? 'No meal logged today or yesterday. The streak is resting, not gone forever.' : 'Mark a meal cooked to start a streak.')
    : streak < 7 ? streak + ' day' + (streak === 1 ? '' : 's') + ' in a row. Momentum smells like garlic.'
    : streak + ' days straight. The takeout menus are starting to feel ignored.';

  document.getElementById('profileRewards').innerHTML =
    '<div class="section-label">Food rescued</div>' +
    '<div class="reward-card"><div class="reward-head"><div class="reward-icon coin">🥬</div><div>' +
      '<div class="t">' + (r.next === null ? 'Every milestone reached' : 'Next milestone: ' + r.next + ' ingredients') + '</div>' +
      '<div class="s">' + rescued + ' so far' + (r.next === null ? '' : ' &middot; ' + (r.next - rescued) + ' to go') + '</div></div></div>' +
      '<div class="progress-track"><div class="progress-fill leaf" style="width:' + rPct + '%;"></div></div>' +
      '<div class="ladder">' + r.rungs + '</div><p class="witty">' + rWit + '</p></div>' +
    '<div class="section-label">Cooking streak</div>' +
    '<div class="reward-card"><div class="reward-head"><div class="reward-icon flame">🔥</div><div>' +
      '<div class="t">' + (streak ? streak + '-day streak' : 'No streak yet') + '</div>' +
      '<div class="s">' + (st.next === null ? 'Six months. Legendary.' : 'Next badge at ' + st.next + ' days') + '</div></div></div>' +
      '<div class="progress-track"><div class="progress-fill amber" style="width:' + sPct + '%;"></div></div>' +
      '<div class="ladder">' + st.rungs + '</div><p class="witty">' + sWit + '</p></div>';
}

// ═══════════════ ADD & EDIT FOOD ═══════════════
// How often each ingredient appears in the approved recipes, and the unit they most often use,
// so the add screen can suggest common foods and a sensible unit. Read from recipes.js.
var ING_USE = {}, ING_UNIT = {};
(window.WTF_RECIPES || []).forEach(function(r) {
  r.ing.forEach(function(line) {
    (line.items || []).forEach(function(id) {
      ING_USE[id] = (ING_USE[id] || 0) + 1;
      if (line.qty !== undefined && line.qty !== null && line.items.length === 1) {
        var u = line.unit || 'ea';                     // "2 large eggs" counts eggs
        ING_UNIT[id] = ING_UNIT[id] || {};
        ING_UNIT[id][u] = (ING_UNIT[id][u] || 0) + 1;
      }
    });
  });
});
function defaultUnit(id) {
  var u = ING_UNIT[id], best = 'ea', n = 0;
  for (var k in u) { if (UNITS.indexOf(k) > -1 && u[k] > n) { best = k; n = u[k]; } }
  return best;
}
var ING_RX = {};
INGREDIENTS.forEach(function(i) {
  try { ING_RX[i.id] = new RegExp(i.match, 'i'); } catch (e) { ING_RX[i.id] = null; } // older Safari can't read every pattern
});

function searchIngredients(q) {
  q = q.trim().toLowerCase();
  var pool = INGREDIENTS.filter(function(i) { return !i.staple; });
  if (!q) {
    return pool.slice().sort(function(a, b) { return (ING_USE[b.id] || 0) - (ING_USE[a.id] || 0); }).slice(0, 24);
  }
  return pool.filter(function(i) {
    return i.name.toLowerCase().indexOf(q) > -1 || (ING_RX[i.id] && ING_RX[i.id].test(q));
  }).sort(function(a, b) {
    var sa = a.name.toLowerCase().indexOf(q) === 0 ? 1 : 0, sb = b.name.toLowerCase().indexOf(q) === 0 ? 1 : 0;
    return (sb - sa) || ((ING_USE[b.id] || 0) - (ING_USE[a.id] || 0));
  }).slice(0, 30);
}
function stapleMatch(q) {
  q = q.trim().toLowerCase();
  if (!q) return null;
  var hit = null;
  INGREDIENTS.forEach(function(i) {
    if (!hit && i.staple && (i.name.toLowerCase().indexOf(q) > -1 || (ING_RX[i.id] && ING_RX[i.id].test(q)))) hit = i;
  });
  return hit;
}

var draft = null;       // the item being added or edited
var justAdded = [];     // names added in this session of the add screen

function openAddItem() {
  draft = { id:null, ing:null, query:'' };
  justAdded = [];
  closeDetail();
  openItemScreen();
}
function openEditItem(entryId) {
  var e = entryById(entryId);
  if (!e) return;
  var y = todayKey(addDays(new Date(), -1));
  draft = { id:e.id, ing:e.ing, zone:e.zone, qty:e.qty === null ? '' : String(e.qty), unit:e.unit || defaultUnit(e.ing),
            when: !e.bought ? 'unknown' : (e.bought === todayKey() ? 'today' : (e.bought === y ? 'yesterday' : 'date')),
            date:e.bought || '', expires:e.expires || '' };
  justAdded = [];
  openItemScreen();
}
function openItemScreen() {
  document.getElementById('subBackLabel').textContent = 'Back';
  document.getElementById('subScreen').dataset.which = 'item';
  renderItemScreen();
  document.getElementById('subScreen').classList.add('open');
  document.getElementById('fab').style.display = 'none';
}

function renderItemScreen() {
  var title = document.getElementById('subTitle'), body = document.getElementById('subBody');
  if (!draft.ing) {
    title.textContent = 'Add food';
    body.innerHTML =
      (justAdded.length ? '<div class="added-strip">✓ Added ' + esc(justAdded.join(', ')) + '. Add more, or tap Done.</div>' : '') +
      '<input class="field search" id="itemSearch" type="search" placeholder="Search: chicken, spinach, feta…" ' +
        'autocomplete="off" value="' + esc(draft.query) + '" oninput="draft.query=this.value;renderItemResults()">' +
      '<div id="itemResults"></div>' +
      '<p class="field-hint">Staples like oil, salt, flour and spices are assumed on hand, so there\'s no need to add them.</p>' +
      (justAdded.length ? '<div class="actions"><button class="btn primary" onclick="closeSub()">Done</button></div>' : '');
    renderItemResults();
    // On a computer, put the cursor in the search box, but only once the screen has finished
    // sliding in, and without letting the browser scroll anything to reveal it. Focusing it
    // mid-slide made the browser scroll the phone frame sideways, hiding Back and the list.
    setTimeout(function() {
      var s = document.getElementById('itemSearch');
      if (s && window.matchMedia('(hover: hover)').matches) {
        try { s.focus({ preventScroll:true }); } catch (e) { s.focus(); }
      }
    }, 400);
    return;
  }
  var ing = ingById(draft.ing);
  title.textContent = draft.id ? 'Edit ' + ing.name.toLowerCase() : ing.name;
  var whens = [['today','Today'], ['yesterday','Yesterday'], ['date','Pick a date'], ['unknown','Don\'t know']];
  body.innerHTML =
    (draft.id ? '' : '<p class="sub-intro">Adding to your kitchen. <a href="#" onclick="draft.ing=null;renderItemScreen();return false;">Pick something else</a></p>') +
    '<div class="field-label">Where is it?</div>' +
    '<div class="seg">' + ZONES.map(function(z) {
      return '<button class="' + (draft.zone === z.key ? 'on' : '') + '" onclick="draft.zone=\'' + z.key + '\';renderItemScreen()">' + z.label + '</button>';
    }).join('') + '</div>' +
    '<div class="field-label">How much? <span>optional</span></div>' +
    '<div class="qty-row"><input class="field" id="itemQty" type="number" inputmode="decimal" min="0" step="any" placeholder="Not sure" value="' + esc(draft.qty) + '" ' +
      'oninput="draft.qty=this.value;updateItemPreview()">' +
      '<select class="field" onchange="draft.unit=this.value;updateItemPreview()">' + UNITS.map(function(u) {
        return '<option' + (draft.unit === u ? ' selected' : '') + '>' + u + '</option>';
      }).join('') + '</select></div>' +
    '<p class="field-hint">Leave it blank if you\'re not sure. The plan will ask you to check rather than guess.</p>' +
    '<div class="field-label' + (draft.askWhen && !draftReady() ? ' attention' : '') + '" id="whenLabel">When did you buy it?' +
      (draft.askWhen && !draftReady()
        ? ' <span class="need">' + (draft.when === 'date' ? 'Pick the date, or choose "Don\'t know".' : 'Choose one to add it. "Don\'t know" is fine.') + '</span>'
        : '') + '</div>' +
    '<div class="seg wrap">' + whens.map(function(w) {
      return '<button class="' + (draft.when === w[0] ? 'on' : '') + '" onclick="draft.when=\'' + w[0] + '\';renderItemScreen()">' + w[1] + '</button>';
    }).join('') + '</div>' +
    (draft.when === 'date' ? '<input class="field" type="date" max="' + todayKey() + '" value="' + esc(draft.date) + '" oninput="draft.date=this.value;updateItemPreview()">' : '') +
    '<div class="field-label">Printed use-by date <span>optional</span></div>' +
    '<input class="field" type="date" value="' + esc(draft.expires) + '" oninput="draft.expires=this.value;updateItemPreview()">' +
    '<p class="field-hint">If the package has a date, it beats any estimate.</p>' +
    '<div class="preview" id="itemPreview"></div>' +
    '<div class="actions">' +
      '<button class="btn primary" id="itemSave" onclick="saveItem()">' + (draft.id ? 'Save' : 'Add to ' + zoneLabel(draft.zone).toLowerCase()) + '</button>' +
      (draft.id ? '<button class="btn quiet" onclick="removeItem()">Remove</button>' : '') +
    '</div>';
  updateItemPreview();
}

function renderItemResults() {
  var box = document.getElementById('itemResults');
  if (!box) return;
  var list = searchIngredients(draft.query);
  var staple = stapleMatch(draft.query);
  box.innerHTML = (draft.query.trim() ? '' : '<div class="field-label">Common in the recipes</div>') +
    (staple && list.length ? '<p class="field-hint" style="margin:0 0 8px;">' + esc(staple.name) + ' is a staple, so it\'s assumed on hand. Close matches:</p>' : '') +
    (list.length ? '<div class="pick-list">' + list.map(function(i) {
      var have = entriesFor(i.id).filter(inStock).length;
      return '<button class="pick" onclick="pickIngredient(\'' + i.id + '\')"><span>' + esc(i.name) + '</span>' +
        '<small>' + (have ? have + ' in your kitchen' : zoneLabel(i.zone).toLowerCase()) + '</small></button>';
    }).join('') + '</div>'
    : '<p class="field-hint">' + (staple ? esc(staple.name) + ' is a staple, so it\'s assumed on hand.'
        : 'Nothing called that in the approved recipes. Only foods the recipes use can be planned around.') + '</p>');
}

function pickIngredient(id) {
  var ing = ingById(id);
  draft.ing = id; draft.zone = ing.zone; draft.qty = ''; draft.unit = defaultUnit(id);
  draft.when = null; draft.date = ''; draft.expires = '';
  renderItemScreen();
}

// The purchase date the draft describes. Never filled in on the user's behalf: until they pick
// an answer (including "don't know") there is no date and the item can't be saved.
function draftBought() {
  if (draft.when === 'today') return todayKey();
  if (draft.when === 'yesterday') return todayKey(addDays(new Date(), -1));
  if (draft.when === 'date') return draft.date || null;
  return null;
}
function draftEntry() {
  var q = draft.qty === '' ? null : parseFloat(draft.qty);
  if (q !== null && (isNaN(q) || q < 0)) q = null;
  return { id:draft.id || newEntryId(), ing:draft.ing, zone:draft.zone, qty:q, unit:q === null ? null : draft.unit,
           bought:draftBought(), expires:draft.expires || null };
}
function draftReady() {
  return draft.when === 'today' || draft.when === 'yesterday' || draft.when === 'unknown' || (draft.when === 'date' && !!draft.date);
}
function updateItemPreview() {
  var box = document.getElementById('itemPreview'), btn = document.getElementById('itemSave');
  if (!box) return;
  if (!draftReady()) {
    box.innerHTML = '<span class="field-hint">Say when you bought it, even if the answer is "don\'t know", to see the freshness estimate.</span>';
    return;
  }
  var lbl = document.getElementById('whenLabel');
  if (lbl && draft.askWhen) { draft.askWhen = false; renderItemScreen(); return; }
  var e = draftEntry(), f = freshness(e);
  box.innerHTML = '<div class="preview-head">' + chipHTML(f.cls, f.text) + '<b>Freshness estimate</b></div>' +
    '<div class="ingredient-basis">' + esc(basisLine(e)) + '</div>';
}

function saveItem() {
  // The purchase date is the user's answer, never filled in for them. If they haven't given
  // one yet, point at the question rather than silently refusing.
  if (!draftReady()) {
    draft.askWhen = true;
    renderItemScreen();
    // Scroll only the form: scrollIntoView would also nudge the sliding screens sideways.
    var lbl = document.getElementById('whenLabel'), body = document.getElementById('subBody');
    if (lbl && body) body.scrollTop = Math.max(0, lbl.offsetTop - body.offsetTop - 60);
    return;
  }
  var e = draftEntry(), name = ingName(e.ing);
  if (draft.id) {
    var old = entryById(draft.id);
    for (var k in e) old[k] = e[k];
    closeSub();
    renderAll();
    showToast('Saved ' + name.toLowerCase() + '.');
    return;
  }
  pantry.push(e);
  openZones[e.zone] = true;
  justAdded.push(name.toLowerCase());
  draft = { id:null, ing:null, query:'' };
  renderAll();
  renderItemScreen();
}
function removeItem() {
  var e = entryById(draft.id);
  if (!e) return;
  if (!confirm('Remove ' + ingName(e.ing).toLowerCase() + ' from your kitchen?')) return;
  pantry.splice(pantry.indexOf(e), 1);
  closeSub();
  renderAll();
  showToast('Removed ' + ingName(e.ing).toLowerCase() + '.');
}

// ═══════════════ RECEIPT UPLOAD & OCR ═══════════════
// Tesseract.js is loaded on demand — only when the user actually taps "Upload receipt".
// The flow: snap/choose → OCR → parse → review sheet → confirm to add.
// Nothing enters the pantry without the user reviewing every line first.

var receiptItems = [];   // extracted lines awaiting review

function handleReceiptFile(input) {
  if (!input.files || !input.files[0]) return;
  var file = input.files[0];
  var statusEl = document.getElementById('receiptStatus');
  var resultsEl = document.getElementById('receiptResults');
  var uploadArea = document.getElementById('receiptUploadArea');

  uploadArea.style.display = 'none';
  statusEl.style.display = 'block';
  statusEl.innerHTML =
    '<div class="receipt-progress">' +
      '<div class="spinner"></div>' +
      '<div><strong>Reading your receipt…</strong>' +
        '<p class="receipt-step" id="receiptStep">Loading text-recognition engine</p>' +
      '</div>' +
    '</div>';

  loadTesseract(function() {
    var step = document.getElementById('receiptStep');
    if (step) step.textContent = 'Scanning text…';

    Tesseract.recognize(file, 'eng', {
      logger: function(m) {
        if (m.status === 'recognizing text' && step) {
          step.textContent = 'Scanning… ' + Math.round((m.progress || 0) * 100) + '%';
        }
      }
    }).then(function(result) {
      parseReceiptText(result.data.text);
      renderReceiptReview();
    }).catch(function() {
      statusEl.innerHTML =
        '<div class="note-card" style="border-left-color:var(--tomato);">' +
          '<strong>Couldn’t read this receipt.</strong><br>' +
          'Try a clearer photo with good lighting and the full receipt visible.' +
        '</div>' +
        '<div class="actions"><button class="btn primary" onclick="resetReceipt()">Try again</button></div>';
    });
  });
}

function loadTesseract(cb) {
  if (window.Tesseract) { cb(); return; }
  var s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js';
  s.onload = cb;
  s.onerror = function() {
    var el = document.getElementById('receiptStatus');
    if (el) {
      el.innerHTML =
        '<div class="note-card" style="border-left-color:var(--tomato);">' +
          '<strong>Couldn’t load the text-recognition library.</strong><br>' +
          'Check your internet connection and try again.' +
        '</div>' +
        '<div class="actions"><button class="btn primary" onclick="resetReceipt()">Try again</button></div>';
    }
  };
  document.head.appendChild(s);
}

function parseReceiptText(text) {
  receiptItems = [];
  var lines = text.split('\n');

  // Try to find a date on the receipt (MM/DD/YYYY or DD/MM/YYYY or similar)
  var dateMatch = text.match(/(\d{1,2})[\/\-](\d{1,2})[\/\-](20\d{2}|\d{2})/);
  var receiptDate = null;
  if (dateMatch) {
    var y = dateMatch[3].length === 2 ? '20' + dateMatch[3] : dateMatch[3];
    var m = dateMatch[1].padStart(2, '0');
    var d = dateMatch[2].padStart(2, '0');
    if (+m >= 1 && +m <= 12 && +d >= 1 && +d <= 31) {
      receiptDate = y + '-' + m + '-' + d;
    }
  }
  // Fall back to today if no date found
  if (!receiptDate) receiptDate = todayKey();

  lines.forEach(function(raw) {
    var line = raw.trim();
    if (!line || line.length < 2) return;

    // Skip pure-noise lines
    if (/^[-=_*#.]+$/.test(line) || /^\d+$/.test(line)) return;
    // Skip lines that are only a price
    if (/^\$?\d+\.\d{2}$/.test(line)) return;

    var lower = line.toLowerCase();
    var isNonFood = /^(sub\s*total|total|tax|change|cash|credit|debit|visa|master|amex|card|balance|savings|thank|receipt|store|tel|phone|date|time|#|cashier|terminal|transaction|trans|ref|member|loyalty|points|discount|coupon|you saved|welcome|come again)/i.test(lower);

    var match = matchReceiptLine(line);

    receiptItems.push({
      raw: line,
      ing: match ? match.id : null,
      ingName: match ? match.name : null,
      confidence: match ? (match.exact ? 'exact_match' : 'probable') : (isNonFood ? 'non_food' : 'unrecognized'),
      zone: match ? (ingById(match.id) || {}).zone || 'fridge' : 'fridge',
      include: !!match,
      date: receiptDate
    });
  });
}

function matchReceiptLine(line) {
  // Strip prices, weights, quantities to isolate the product name
  var cleaned = line
    .replace(/\$?\d+\.\d{2}/g, '')         // prices
    .replace(/\d+\s*(oz|lb|kg|g|ml|l|ct|pk|ea)\b/gi, '')  // weights
    .replace(/[^a-zA-Z\s]/g, ' ')           // non-alpha
    .replace(/\s+/g, ' ').trim().toLowerCase();

  if (!cleaned || cleaned.length < 2) return null;

  var best = null, bestScore = 0;

  INGREDIENTS.forEach(function(ing) {
    if (ing.staple) return;  // staples are assumed on-hand
    var name = ing.name.toLowerCase();
    var score = 0;

    // Exact match
    if (cleaned === name) { score = 100; }
    // Name appears inside the OCR text
    else if (cleaned.indexOf(name) > -1) { score = 80; }
    // OCR text appears inside the ingredient name
    else if (name.indexOf(cleaned) > -1 && cleaned.length >= 3) { score = 60; }
    // Regex alias match from the recipe file
    else if (ING_RX[ing.id] && ING_RX[ing.id].test(cleaned)) { score = 70; }
    // Word-overlap fallback
    else {
      var words = cleaned.split(' ').filter(function(w) { return w.length > 2; });
      if (words.length) {
        var nameWords = name.split(/[\s,]+/);
        var hits = words.filter(function(w) {
          return nameWords.some(function(nw) { return nw.indexOf(w) > -1 || w.indexOf(nw) > -1; });
        });
        if (hits.length > 0 && hits.length >= Math.ceil(Math.min(words.length, nameWords.length) * 0.5)) {
          score = 30 + Math.round(hits.length / Math.max(words.length, nameWords.length) * 30);
        }
      }
    }

    if (score > bestScore) { bestScore = score; best = { id:ing.id, name:ing.name, exact:score >= 70 }; }
  });

  return bestScore >= 30 ? best : null;
}

function renderReceiptReview() {
  var statusEl = document.getElementById('receiptStatus');
  var resultsEl = document.getElementById('receiptResults');

  var matched = receiptItems.filter(function(r) { return r.ing; });
  var unrecognized = receiptItems.filter(function(r) { return !r.ing && r.confidence !== 'non_food'; });

  statusEl.style.display = 'block';
  statusEl.innerHTML =
    '<div class="receipt-summary">' +
      '<strong>' + matched.length + ' food item' + (matched.length !== 1 ? 's' : '') + ' found</strong>' +
      (unrecognized.length ? '<br><span style="color:var(--ink-soft);">' + unrecognized.length + ' line' + (unrecognized.length !== 1 ? 's' : '') + ' couldn’t be matched</span>' : '') +
    '</div>';

  var html = '';

  if (matched.length) {
    html += '<div class="section-label" style="margin-top:0;">Matched items — review before adding</div>';
    matched.forEach(function(item, i) {
      var idx = receiptItems.indexOf(item);
      var confClass = item.confidence === 'exact_match' ? 'exact' : 'probable';
      var confLabel = item.confidence === 'exact_match' ? 'exact' : 'probable';
      html +=
        '<div class="receipt-item">' +
          '<div class="ri-check"><input type="checkbox"' + (item.include ? ' checked' : '') + ' onchange="toggleReceiptItem(' + idx + ',this.checked)"></div>' +
          '<div class="ri-body">' +
            '<div><span class="ri-name">' + esc(item.ingName) + '</span><span class="ri-conf ' + confClass + '">' + confLabel + '</span></div>' +
            '<div class="ri-raw">' + esc(item.raw) + '</div>' +
            '<div class="receipt-zone-pick">' +
              ZONES.map(function(z) {
                return '<button class="' + (item.zone === z.key ? 'active' : '') + '" onclick="setReceiptZone(' + idx + ',\'' + z.key + '\')">' + z.label + '</button>';
              }).join('') +
            '</div>' +
          '</div>' +
        '</div>';
    });
  }

  // Show non-food / unrecognized lines greyed out (visible but not checkable)
  var others = receiptItems.filter(function(r) { return !r.ing; });
  if (others.length) {
    html += '<div class="section-label">Other lines on the receipt</div>';
    others.forEach(function(item) {
      var tag = item.confidence === 'non_food' ? 'non-food' : 'not matched';
      html +=
        '<div class="receipt-item greyed">' +
          '<div class="ri-body"><div class="ri-raw">' + esc(item.raw) + '</div>' +
          '<div style="font-size:11px;color:var(--ink-soft);">' + tag + '</div></div>' +
        '</div>';
    });
  }

  if (matched.length) {
    var selected = receiptItems.filter(function(r) { return r.include; }).length;
    html +=
      '<div class="actions" style="margin-top:var(--s8);">' +
        '<button class="btn primary" onclick="confirmReceipt()">Add ' + selected + ' item' + (selected !== 1 ? 's' : '') + ' to pantry</button>' +
      '</div>' +
      '<div class="actions"><button class="btn" onclick="resetReceipt()">Cancel</button></div>';
  } else {
    html +=
      '<div class="note-card" style="margin-top:var(--s6);border-left-color:var(--amber);">' +
        'No food items could be matched from this receipt. Try a clearer photo, or add items manually from the Pantry tab.' +
      '</div>' +
      '<div class="actions"><button class="btn primary" onclick="resetReceipt()">Try another</button></div>';
  }

  resultsEl.style.display = 'block';
  resultsEl.innerHTML = html;
}

function toggleReceiptItem(idx, checked) {
  receiptItems[idx].include = checked;
  // Update the confirm button count
  var selected = receiptItems.filter(function(r) { return r.include; }).length;
  var btn = document.querySelector('#receiptResults .btn.primary');
  if (btn && selected > 0) { btn.textContent = 'Add ' + selected + ' item' + (selected !== 1 ? 's' : '') + ' to pantry'; }
}

function setReceiptZone(idx, zone) {
  receiptItems[idx].zone = zone;
  renderReceiptReview();
}

function confirmReceipt() {
  var added = [];
  receiptItems.forEach(function(item) {
    if (!item.include || !item.ing) return;
    var ing = ingById(item.ing);
    if (!ing) return;
    pantry.push({
      id: newEntryId(),
      ing: item.ing,
      zone: item.zone,
      qty: null,
      unit: null,
      bought: item.date,
      expires: null
    });
    openZones[item.zone] = true;
    added.push(ing.name.toLowerCase());
  });
  receiptItems = [];
  closeSub();
  if (planBuiltEmpty && !pantryEmpty()) {
    planKitchen(true);
  }
  renderAll();
  if (added.length) {
    showToast('Added ' + added.length + ' item' + (added.length !== 1 ? 's' : '') + ' from receipt.');
  }
}

function resetReceipt() {
  receiptItems = [];
  openSub('receipt');
}

// ═══════════════ FIRST-TIME SETUP ═══════════════
// Three short steps: a name, the household, and how to start. Nothing about the kitchen is
// assumed: "Add my own food" starts with an empty pantry.
var setupStep = 1;
function showSetup() { setupStep = 1; renderSetup(); document.getElementById('setup').classList.add('open'); }
function renderSetup() {
  var el = document.getElementById('setupBody');
  var dots = '<div class="setup-dots">' + [1,2,3].map(function(n) { return '<i class="' + (n === setupStep ? 'on' : '') + '"></i>'; }).join('') + '</div>';
  if (setupStep === 1) {
    el.innerHTML = dots +
      '<div class="setup-mark"><img src="logo-setup.webp" alt="What the Fridge"></div>' +
      '<h2>What the Fridge</h2>' +
      '<p class="setup-lede">Three days of breakfast, lunch and dinner, planned around what\'s already in your kitchen. Less "what are we eating?", less forgotten spinach.</p>' +
      '<div class="field-label">What should we call you? <span>optional</span></div>' +
      '<input class="field" id="setupName" maxlength="30" placeholder="Your first name" value="' + esc(settings.name) + '" oninput="settings.name=this.value.trim()">' +
      '<div class="actions"><button class="btn primary" onclick="setupStep=2;renderSetup()">Next</button></div>';
    return;
  }
  if (setupStep === 2) {
    var d = [['vegetarian','Vegetarian'], ['dairyFree','Dairy-free'], ['nutFree','Nut-free'], ['porkFree','No pork']];
    el.innerHTML = dots +
      '<h2>Who\'s eating?</h2>' +
      '<p class="setup-lede">How many people you\'re cooking for.</p>' +
      '<div class="stepper">' +
        '<button class="step-btn" onclick="settings.household=Math.max(1,settings.household-1);renderSetup()"' + (settings.household <= 1 ? ' disabled' : '') + '>&minus;</button>' +
        '<div><div class="val">' + settings.household + '</div><div class="lbl">' + (settings.household === 1 ? 'person' : 'people') + '</div></div>' +
        '<button class="step-btn" onclick="settings.household=Math.min(8,settings.household+1);renderSetup()"' + (settings.household >= 8 ? ' disabled' : '') + '>+</button>' +
      '</div>' +
      '<div class="field-label">Anything off the menu?</div>' +
      '<div>' + d.map(function(x) {
        return '<div class="toggle-row"><div class="tr-name">' + x[1] + '</div>' +
          '<button class="switch' + (settings.dietary[x[0]] ? ' on' : '') + '" onclick="settings.dietary.' + x[0] + '=!settings.dietary.' + x[0] + ';renderSetup()"></button></div>';
      }).join('') + '</div>' +
      '<p class="field-hint">These filter recipes by the tags in the recipe file. They are <b>not</b> allergy-safe, since nothing checks individual ingredients or labels.</p>' +
      '<div class="actions"><button class="btn primary" onclick="setupStep=3;renderSetup()">Next</button>' +
        '<button class="btn quiet" onclick="setupStep=1;renderSetup()">Back</button></div>';
    return;
  }
  el.innerHTML = dots +
    '<h2>How do you want to start?</h2>' +
    '<button class="start-card" onclick="finishSetup(\'own\')"><b>Add my own food</b>' +
      '<span>Start with an empty kitchen and add what you have. A rough count is fine.</span></button>' +
    '<button class="start-card" onclick="finishSetup(\'sample\')"><b>Look around with a sample kitchen</b>' +
      '<span>About 35 everyday foods, so you can see how planning works. Start over any time from Profile.</span></button>' +
    '<div class="actions"><button class="btn quiet" onclick="setupStep=2;renderSetup()">Back</button></div>';
}
function finishSetup(mode) {
  settings.since = todayKey();
  pantry = mode === 'sample' ? samplePantry() : [];
  plan = [];
  unreconciled = []; cookLog = []; currentDay = 1;
  planKitchen(false);
  renderAll();
  document.getElementById('setup').classList.remove('open');
  if (mode === 'own') { switchTab('pantryTab'); openAddItem(); }
  else { showToast('Welcome! This is a sample kitchen. Swap in your own food from the Pantry tab.'); }
}

// ═══════════════ SAVED STATE ═══════════════
// Everything the user changes is kept in this browser's localStorage, so a refresh or a closed
// tab loses nothing. It never leaves the device. The recipe catalog is not saved; it always
// comes from the approved file built into this page.
var STORE_KEY = 'wtf-state-v2';       // v1 (prototype10's web build) had a different pantry shape
var lastSeen = null;                  // calendar day (YYYY-MM-DD) the saved state belongs to

function saveState() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify({
      lastSeen:lastSeen || todayKey(), settings:settings, pantry:pantry, plan:plan,
      prefs:prefs, unreconciled:unreconciled, cookLog:cookLog, dayOffset:dayOffset,
      planSig:planSig, planBuiltEmpty:planBuiltEmpty
    }));
  } catch (e) { /* private mode or storage full — the app still works, it just won't remember */ }
}

// Returns false when there is nothing usable saved, i.e. a first visit.
function loadState() {
  var s = null;
  try { s = JSON.parse(localStorage.getItem(STORE_KEY)); } catch (e) { s = null; }
  lastSeen = todayKey();
  if (!s || !s.plan || !s.pantry || !s.settings || !s.settings.since) { return false; }

  // A saved plan that names a recipe this build doesn't have is rebuilt rather than shown
  // half-broken. The pantry and settings are kept.
  var valid = s.plan.length === 9 && s.plan.every(function(e) { return e && recipeById(e.recipe); });

  settings = s.settings;
  pantry = s.pantry.filter(function(e) { return ingById(e.ing); });
  plan = valid ? s.plan : [];
  planSig = valid ? (s.planSig || null) : null;
  planBuiltEmpty = valid ? !!s.planBuiltEmpty : false;
  prefs = s.prefs || {};
  cookLog = s.cookLog || [];
  unreconciled = (s.unreconciled || []).filter(function(u) { return recipeById(u.recipe); });
  dayOffset = s.dayOffset || 0;
  lastSeen = s.lastSeen || todayKey();
  catchUp();
  return true;
}

// Catch up on days that passed while the app was closed or asleep. Each missed day rolls the
// horizon the same way midnight would, so unconfirmed meals are queued as questions rather than
// lost. After three rolls the whole old plan has been queued; rolling further would only queue
// meals nobody saw. Purchase dates are real calendar dates, so nothing else needs adjusting.
function catchUp() {
  var missed = daysBetween(lastSeen, todayKey());
  if (missed > 0) {
    var start = parseKey(lastSeen);
    for (var i = 0; i < Math.min(missed, 3); i++) { rollDay(addDays(start, i)); }
  }
  lastSeen = todayKey();
  return Math.max(missed, 0);
}

// A home-screen app is usually resumed, not reloaded, so check the date on return too.
document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'visible' && catchUp() > 0) {
    renderAll();
    showToast('New day — the plan rolled forward.');
  }
});

function loadSampleKitchen() {
  if (pantry.length && !confirm('Replace everything in your kitchen with the sample food?')) { return; }
  pantry = samplePantry();
  closeDetail(); closeSub();
  planKitchen(true);
  renderAll();
  showToast('Sample kitchen loaded, and the plan rebuilt around it.');
}
function startOver() {
  if (!confirm('Start over? This clears your kitchen, plan and history from this browser.')) { return; }
  try { localStorage.removeItem(STORE_KEY); } catch (e) {}
  settings.name = ''; settings.since = null; settings.household = 2;
  settings.dietary = { vegetarian:false, dairyFree:false, nutFree:false, porkFree:false };
  pantry = []; plan = []; planSig = null; prefs = {}; unreconciled = []; cookLog = []; dayOffset = 0; currentDay = 1;
  planKitchen(false);
  closeDetail(); closeSub(); switchTab('planTab');
  renderAll();
  showSetup();
}

// The phone frame is never meant to scroll: its sliding screens are moved with transforms. If a
// browser scrolls it anyway (to reveal a focused field, say), the screens slide out of view and
// Back can't be reached, so snap it straight back.
(function() {
  var frame = document.getElementById('app');
  frame.addEventListener('scroll', function() {
    if (frame.scrollLeft || frame.scrollTop) { frame.scrollLeft = 0; frame.scrollTop = 0; }
  });
})();

var returning = loadState();
if (plan.length !== 9) { planKitchen(plan.length > 0); }
renderAll();
if (!returning) { showSetup(); }
scheduleMidnight();

// Offline support and home-screen install. Only works when served over http(s),
// e.g. from GitHub Pages — opening the file directly skips it harmlessly.
if ('serviceWorker' in navigator && location.protocol.indexOf('http') === 0) {
  navigator.serviceWorker.register('sw.js').catch(function() {});
}
