// Shown in About and the page footer so anyone can tell which build their phone is running.
// Change it with each release, together with ?v= on the files in index.html.
var APP_VERSION = '2026-11-20 (freshness for more foods)';

// ═══════════════ SETTINGS ═══════════════
var settings = {
  name: '',                       // what the app calls the user; blank is fine
  since: null,                    // YYYY-MM-DD the household was set up; null until setup is finished
  household: 2,
  dietary: { vegetarian:false, dairyFree:false, nutFree:false, porkFree:false },
  noStaples: {},                  // staples the household doesn't keep: { id:true } (Settings > Staples you keep)
  testTools: false,               // About > Testing tools: shows Simulate midnight in Settings
  // From the setup questionnaire (Profile > Meals & cooking to change):
  meals:     { breakfast:true, lunch:true, dinner:true },   // which meals to plan
  leftovers: false,                                          // dinner covers the next day's lunch
  times:     { breakfast:20, lunch:30, dinner:null }         // weekday cook-time limit in minutes; null = any
};
// Settings saved before the questionnaire existed get its defaults, which match the old behaviour.
function fillMealSettings(s) {
  if (!s.meals) s.meals = { breakfast:true, lunch:true, dinner:true };
  if (s.leftovers === undefined) s.leftovers = false;
  if (!s.times) s.times = { breakfast:20, lunch:30, dinner:null };
  if (!s.noStaples) s.noStaples = {};
  return s;
}

// Every meal marked cooked, for the Profile stats. Nothing here is estimated: `rescued`
// counts ingredients that were still inside their freshness window when they were used.
var cookLog = [];                 // { date:'YYYY-MM-DD', recipe:id, rescued:n }
// Food Ren said went bad. The counterpart to cookLog's `rescued`: one side counts what got used
// in time, this side counts what didn't. It records Ren's own call — the app never decides that
// a thing has gone off, it only writes down that she said so.
// { date:'YYYY-MM-DD', ing:id, qty, unit, reason, daysPast, wasPlanned }
var wasteLog = [];

// ═══════════════ INGREDIENTS & SHELF-LIFE NORMS ═══════════════
// Both generated from the approved files by tools/build-recipes.ps1 — see recipes.js.
var INGREDIENTS = window.WTF_INGREDIENTS || [];
var NORMS = window.WTF_NORMS || {};
var ingIndex = {};
INGREDIENTS.forEach(function(i) { ingIndex[i.id] = i; });
function ingById(id) { return ingIndex[id] || null; }
function ingName(id) { var i = ingIndex[id]; return i ? i.name : id; }

// Families (tools/families.csv): the parent category a food belongs to, so cherry and sun-dried
// tomatoes both read as tomatoes. For grouping only — what Ren sees in the waste patterns and
// what pantry search finds. A family never lets one food count as another in a recipe; that
// still takes counts_as or an approved stand-in, because sun-dried tomatoes don't belong in a BLT.
var FAMILIES = window.WTF_FAMILIES || {};
function famOf(id) { var i = ingIndex[id]; return i && i.fam ? i.fam : null; }
function famName(fam) { return FAMILIES[fam] || fam; }

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
  // ~100 everyday items across all zones for a realistic demo kitchen.
  // [ingredient-id, zone, quantity, unit, days-since-purchase]
  var rows = [
    // ── Proteins ──
    ['eggs','fridge',12,'ea',4],             ['chicken-breast','fridge',1.5,'lb',1],
    ['chicken-thighs','fridge',1.5,'lb',1],  ['ground-beef','fridge',1,'lb',1],
    ['ground-turkey','fridge',1,'lb',1],     ['pork-chops','fridge',4,'ea',1],
    ['salmon','fridge',1,'lb',1],            ['shrimp','fridge',1,'lb',1],
    ['bacon','fridge',8,'slice',5],          ['sausage','fridge',4,'ea',2],
    ['ham','fridge',0.5,'lb',3],             ['deli-turkey','fridge',0.5,'lb',3],
    ['tofu','fridge',1,'package',5],         ['canned-tuna','cupboard',2,'can',60],

    // ── Dairy ──
    ['milk','fridge',4,'cup',3],             ['greek-yogurt','fridge',2,'cup',2],
    ['yogurt','fridge',2,'cup',4],           ['cheese','fridge',2,'cup',6],
    ['cheddar','fridge',2,'cup',10],         ['mozzarella','fridge',8,'oz',3],
    ['parmesan','fridge',1,'cup',10],        ['feta','fridge',null,null,null],
    ['cream-cheese','fridge',8,'oz',7],      ['sour-cream','fridge',1,'cup',5],
    ['heavy-cream','fridge',1,'cup',3],      ['buttermilk','fridge',2,'cup',6],

    // ── Produce (fridge) ──
    ['spinach','fridge',6,'cup',3],          ['kale','fridge',4,'cup',2],
    ['lettuce','fridge',1,'head',2],         ['broccoli','fridge',1,'head',2],
    ['cauliflower','fridge',1,'head',3],     ['asparagus','fridge',1,'bunch',3],
    ['bell-pepper','fridge',2,'ea',3],       ['carrot','fridge',1,'lb',5],
    ['celery','fridge',1,'bunch',4],         ['cucumber','fridge',1,'ea',2],
    ['zucchini','fridge',2,'ea',2],          ['mushrooms','fridge',8,'oz',2],
    ['green-beans','fridge',1,'lb',3],       ['green-onion','fridge',1,'bunch',3],
    ['cabbage','fridge',1,'head',4],         ['corn-cob','fridge',4,'ea',1],
    ['lemon','fridge',2,'ea',4],             ['lime','fridge',2,'ea',5],
    ['apples','fridge',4,'ea',5],            ['strawberries','fridge',1,'cup',2],
    ['grapes','fridge',2,'cup',4],           ['orange','fridge',3,'ea',6],
    ['cooked-rice','fridge',3,'cup',2],

    // ── Fresh herbs ──
    ['cilantro','fridge',1,'bunch',2],       ['basil','fridge',1,'bunch',2],
    ['parsley','fridge',1,'bunch',3],

    // ── Produce (counter / cupboard) ──
    ['avocado','cupboard',2,'ea',4],         ['bananas','cupboard',3,'ea',2],
    ['tomatoes','cupboard',3,'ea',2],        ['cherry-tomatoes','cupboard',2,'cup',3],
    ['onion','cupboard',3,'ea',6],           ['red-onion','cupboard',1,'ea',4],
    ['potatoes','cupboard',5,'ea',6],        ['sweet-potato','cupboard',3,'ea',5],
    ['pineapple','cupboard',1,'ea',2],       ['mango','cupboard',2,'ea',3],

    // ── Bread & bakery ──
    ['bread','cupboard',1,'package',3],      ['buns','cupboard',4,'ea',2],
    ['flour-tortillas','cupboard',6,'ea',5], ['pita','cupboard',4,'ea',7],
    ['bagels','cupboard',4,'ea',4],          ['english-muffins','cupboard',4,'ea',5],

    // ── Canned & dry goods ──
    ['pasta','cupboard',1,'lb',25],          ['rice','cupboard',4,'cup',30],
    ['brown-rice','cupboard',2,'cup',25],    ['quinoa','cupboard',2,'cup',30],
    ['oats','cupboard',5,'cup',20],          ['egg-noodles','cupboard',1,'package',35],
    ['rice-noodles','cupboard',1,'package',45],
    ['chickpeas','cupboard',2,'can',40],     ['black-beans','cupboard',2,'can',40],
    ['kidney-beans','cupboard',2,'can',50],  ['lentils','cupboard',2,'cup',60],
    ['canned-tomatoes','cupboard',2,'can',45],['tomato-paste','cupboard',1,'can',30],
    ['marinara','cupboard',1,'jar',20],      ['coconut-milk','cupboard',1,'can',30],
    ['corn','cupboard',3,'cup',40],          ['breadcrumbs','cupboard',2,'cup',40],
    ['peanut-butter','cupboard',32,'tbsp',30],

    // ── Frozen ──
    ['frozen-veg','freezer',4,'cup',20],     ['berries','freezer',2,'cup',8],
    ['peas','freezer',2,'cup',15],           ['edamame','freezer',2,'cup',12],
    ['frozen-fries','freezer',1,'lb',20],

    // ── Condiments & sauces ──
    ['salsa','fridge',2,'cup',6],            ['ketchup','fridge',1,'cup',30],
    ['mustard','fridge',0.5,'cup',30],       ['mayonnaise','fridge',1,'cup',20],
    ['bbq-sauce','fridge',1,'cup',15],       ['hoisin','fridge',0.5,'cup',20],
    ['hummus','fridge',1,'cup',5],           ['pickles','fridge',1,'jar',25],
    ['olives','cupboard',1,'jar',30],

    // ── Nuts & seeds ──
    ['almonds','cupboard',1,'cup',20],       ['walnuts','cupboard',1,'cup',20]
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

// What each ingredient contains, for deciding which OPTIONAL lines a restriction drops, and which
// pantry food a restriction keeps out of every recipe (see entriesFor). Required lines are already
// covered by the recipe's own tags from the database. The pantry-only foods that stand in for a
// recipe food (frozen salmon for salmon, oat milk for milk) are listed by what they are themselves:
// frozen salmon is fish, oat milk is not dairy.
var CONTAINS = {
  meat: ['chicken-breast','chicken-thighs','chicken-drumsticks','ground-chicken','chicken-wings','cooked-chicken','chicken',
         'ground-turkey','turkey-sausage','deli-turkey','cooked-turkey','turkey-breast','canadian-bacon','bacon','pancetta','ham',
         'pepperoni','salami','hot-dogs','sausage','smoked-sausage','ground-pork','pork-chops','pork','ribs','ground-beef',
         'corned-beef','roast-beef','beef-roast','beef-steak','ground-lamb','lamb','veal','smoked-salmon','salmon','tuna-steak',
         'canned-tuna','white-fish','shrimp','scallops','mussels','clams','crab','lobster','anchovies','fish-sauce','oyster-sauce',
         'chicken-broth','beef-broth','seafood-stock','cream-of-chicken',
         'frozen-chicken-breast','frozen-shrimp','frozen-fish-fillets','frozen-salmon','canned-salmon','chicken-sausage','pork-tenderloin'],
  dairy: ['butter','buttermilk','sour-cream','cream-cheese','heavy-cream','greek-yogurt','yogurt','milk','parmesan','feta',
          'ricotta','cottage-cheese','goat-cheese','blue-cheese','queso-fresco','mozzarella','provolone','american-cheese',
          'swiss','monterey-jack','cheddar','cheese','paneer','tortellini',
          'half-and-half','evaporated-milk','cream-of-chicken','pesto'],
  nuts:  ['peanut-butter','peanuts','almonds','walnuts','pecans','cashews',
          'pistachios','pine-nuts','almond-butter','almond-milk','pesto'],
  pork:  ['canadian-bacon','bacon','pancetta','ham','pepperoni','salami','hot-dogs','sausage','ground-pork','pork-chops','pork','ribs',
          'pork-tenderloin']
};
function ingBlocked(id, blocked) {
  return blocked.some(function(b) {
    var list = CONTAINS[b === 'fish' ? 'meat' : b];
    return list && list.indexOf(id) > -1;
  });
}
// The household setting that rules this food out ("Dairy-free"), or '' when none does.
function dietRuleFor(id) {
  for (var k in DIET_RULES) {
    if (settings.dietary[k] && ingBlocked(id, DIET_RULES[k].blocks)) return DIET_RULES[k].label;
  }
  return '';
}
// A recipe's ingredient lines as they apply to this household and kitchen: an optional line whose
// every choice is ruled out is dropped, choices that are ruled out are taken off the line, and the
// one stand-in the recipe may use (standInFor) replaces the line it stands in for. Everything that
// plans, checks, sets aside or deducts food reads lines through here.
function visibleLines(recipe) {
  syncStaples();
  var lines = dietLines(recipe), s = standInFor(recipe, lines);
  if (!s) return lines;
  return lines.reduce(function(out, line) {
    if (line !== s.line) { out.push(line); return out; }
    if (s.staple) return out;                       // the stand-in is a staple, assumed on hand
    var copy = {}; for (var k in line) copy[k] = line[k];
    delete copy.any; delete copy.all;
    copy.id = s.row.use;
    copy.sub = { forId:s.forId, use:s.row.use, note:s.row.note || '' };
    out.push(copy);
    return out;
  }, []);
}
function dietLines(recipe) {
  var blocked = activeBlocks();
  if (!blocked.length) return recipe.ing;
  var out = [];
  recipe.ing.forEach(function(line) {
    if (!line.optional) { out.push(line); return; }
    var ok = lineIds(line).filter(function(id) { return !ingBlocked(id, blocked); });
    if (!ok.length) return;
    if (ok.length === lineIds(line).length) { out.push(line); return; }
    var copy = {}; for (var k in line) copy[k] = line[k];
    delete copy.any; delete copy.all;
    if (ok.length === 1) { copy.id = ok[0]; }
    else if (line.all) { copy.all = ok; }     // still every one of what's left, not any of them
    else { copy.any = ok; }
    out.push(copy);
  });
  return out;
}

// ─── stand-ins (feedback 6C) ───
// Matching used to be exact, so a bag of rice didn't cover "cooked rice" and tomatoes didn't cover
// cherry tomatoes; a first-timer with 13 everyday foods could cook no lunch or dinner. A stand-in
// comes only from tools/substitutions.csv, never from the app's own judgement, and it is said out
// loud on the meal. The rules are the table's own:
//   3  a row that takes away a dietary property ("-DF": tofu to paneer) is never offered to a
//      household with that setting, and a stand-in the settings rule out is never used;
//   4  offered only when the food asked for isn't in the kitchen and the stand-in is (or is a
//      staple the household keeps);
//   5  one per meal: two stand-ins in one dish stops being the recipe.
// And the recipe has to be the kind of dish the row names (its contexts, from the build), because
// banana for berries is right on toast and wrong in a vinaigrette. Optional lines never get one: a
// missing extra is simply left out.
var SUBS = window.WTF_SUBS || [], SUBS_FOR = {};
SUBS.forEach(function(s) { (SUBS_FOR[s.for] = SUBS_FOR[s.for] || []).push(s); });
var DIET_CODES = { V:'vegetarian', DF:'dairyFree', NF:'nutFree', PF:'porkFree' };
function onHand(id) { return entriesFor(id).some(inStock); }
function standInFor(recipe, lines) {
  if (!SUBS.length || !recipe.ctx || !recipe.ctx.length) return null;
  lines = lines || dietLines(recipe);
  var named = {};
  recipe.all.forEach(function(l) { if (!l.staple) lineIds(l).forEach(function(id) { named[id] = true; }); });
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    if (line.optional || line.all) continue;
    var ids = lineIds(line);
    if (ids.some(onHand)) continue;
    for (var j = 0; j < ids.length; j++) {
      var rows = SUBS_FOR[ids[j]] || [];
      for (var k = 0; k < rows.length; k++) {
        var row = rows[k];
        if (named[row.use]) continue;                                   // already in the dish
        if (!row.ctx.some(function(c) { return recipe.ctx.indexOf(c) > -1; })) continue;
        if (row.diet && row.diet.charAt(0) === '-' && settings.dietary[DIET_CODES[row.diet.slice(1)]]) continue;
        if (dietRuleFor(row.use)) continue;
        if (assumedStaple(row.use)) return { line:line, row:row, forId:ids[j], staple:true };
        if (onHand(row.use)) return { line:line, row:row, forId:ids[j] };
      }
    }
  }
  return null;
}

// ═══════════════ RECIPE CATALOG ═══════════════
// Every recipe from the approved source, knowledge/Combined_Recipe_Database.md, via recipes.js
// (generated by tools/build-recipes.ps1). `id` is the slug of the title and doubles as the photo name.
// Each ingredient line keeps the database's own wording (`text`) and names the food it uses from
// the shared ingredient list (`id`, or `any` when the recipe offers a choice). Staple lines (salt,
// oil, spices...) are kept for display but never planned around: they're assumed on hand.
// Amounts are as written; amountFor() scales them to the household from each recipe's estimated
// servings (tools/servings.csv), so each line keeps a link to its recipe (`r`).
//
// Which staples are assumed is the household's call (Profile > Staples you keep, feedback 6D): a
// staple Ren says she doesn't keep is planned around like any other food. So a recipe's lines are
// worked out again whenever that list changes (syncStaples).
function assumedStaple(id) {
  var i = ingById(id);
  return !!(i && i.staple && !(settings.noStaples && settings.noStaples[id]));
}
function setLines(r, src) {
  var lines = [];
  src.ing.forEach(function(l) {
    var ids = l.items || [];
    if (!ids.length) return;
    // A staple line, or a choice where one of the options is a staple ("vinegar or lemon juice"),
    // is covered by the staples assumed on hand.
    var staple = ids.every(assumedStaple) || (l.alt && ids.some(assumedStaple));
    var foods = ids.filter(function(id) { return ingById(id) && !assumedStaple(id); });
    var line = { text:l.text, optional:!!l.optional, staple:staple };
    if (!staple) {
      // `alt` is the build's own flag, set only where a line was split on "or". Without it a
      // list line ("Dressing: 1 avocado, juice of 2 limes, …") and an "and" line ("cilantro and
      // Thai basil") both became `any`, which coverage() reads as either-or — so one of several
      // required foods was enough to mark the line covered.
      if (foods.length === 1) line.id = foods[0];
      else if (l.alt) line.any = foods;       // any ONE of these satisfies the line
      else line.all = foods;                  // every one of these is needed
      line.qty = (l.qty === undefined || l.qty === null || foods.length !== ids.length) ? null : l.qty;
      line.unit = line.qty === null ? null : (l.unit || 'ea');
    }
    lines.push(line);
  });
  r.all = lines;
  r.ing = lines.filter(function(l) { return !l.staple; });
  lines.forEach(function(l) { l.r = r; });
}
var recipes = (window.WTF_RECIPES || []).map(function(src) {
  var r = { id:src.id, n:src.n, name:src.name, type:src.type, time:src.time, mins:src.mins,
            tags:src.tags || [], ctx:src.ctx || [], steps:src.steps || [], nut:src.nut || null, src:src };
  setLines(r, src);
  return r;
});
// Re-reads every recipe's lines when the household's staples list has been replaced (a reload, an
// Undo, Start over) or changed. Cheap: an identity check, and a rebuild only when it differs.
var stapleRef = null;
function syncStaples(force) {
  if (!settings.noStaples) settings.noStaples = {};
  if (!force && settings.noStaples === stapleRef) return;
  stapleRef = settings.noStaples;
  recipes.forEach(function(r) { setLines(r, r.src); });
}

// Counts the app states about itself come from the data, never from a sentence typed once: About
// said "300 approved recipes" after there were 579, and setup offered a sample kitchen of "about
// 35 everyday foods" that held 102.
function recipeCount(type) { return recipes.filter(function(r) { return !type || r.type === type; }).length; }

// ═══════════════ PLAN ═══════════════
// Three days x breakfast / lunch / dinner, built from the kitchen by the planner below.
// status: pending | accepted | skipped
// A slot can also be { off:true } (a meal the household doesn't plan) or { leftover:true,
// recipe:<last night's dinner> } (lunch is the previous dinner's leftovers: nothing to cook or
// set aside). `ownLunch` marks a lunch someone chose to cook instead of eating leftovers.
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

// ─── the household's meal choices ───
function mealOn(type) { return !settings.meals || settings.meals[type] !== false; }
function leftoversOn() { return !!settings.leftovers && mealOn('lunch') && mealOn('dinner'); }
// The dinner a lunch's leftovers come from, or null. Later days use the dinner two slots back.
// Today's lunch uses last night's dinner, which the midnight roll has already dropped from the
// plan, so the roll keeps a note of it in `lastNight`. Without that note the leftover lunch was
// replaced by a new recipe after midnight, though double had been cooked (T2).
var lastNight = null;   // { recipe, status, date } of the dinner that left the plan at the last roll
function leftoverDinner(idx) {
  if (idx % 3 !== 1 || !leftoversOn()) return null;
  if (idx >= 3) return plan[idx - 2] || null;
  return idx === 1 ? lastNight : null;
}
// A slot with its own meal to cook (not switched off, not leftovers).
function isMealEntry(e) { return !!e && !e.off && !e.leftover; }
function usableDinner(d) { return isMealEntry(d) && d.status !== 'skipped' && !d.dietBlocked; }

function round2(n) { return Math.round(n * 100) / 100; }
// Stored quantities keep their precision. Rounding them to two places on every deduction made
// Undo drift (0.625 came back as 0.63); a millionth only clears floating-point dust.
function roundStore(n) { return Math.round(n * 1e6) / 1e6; }

// A pantry amount as a person would say it: "1⅓ cup", not "1.33 cup". Same display as a recipe.
function fmtQty(qty, unit) { return kitchenQty(qty, unit); }

// ─── practical amounts ───
// Scaling a recipe to the household gives amounts nobody can measure: half an egg, 0.63 cup, a
// third of a tortilla. practicalQty() rounds a scaled amount to what a cook would actually use,
// and amountFor() returns it, so the amount shown, the amount checked against the pantry and the
// amount deducted when the meal is cooked are the same number.
//   Counted foods: whole, at least one; the ones commonly used by the half (an onion, an
//     avocado, a lemon) go to the nearest half, at least a half.
//   Slices and stalks: whole. Cans, blocks, heads, bunches, jars: nearest half.
//   Spoons and cups: kitchen fractions, dropping to the next measure down when small.
//   Pounds: nearest quarter. Ounces, grams, millilitres: whole.
var HALVES = { onion:1, 'red-onion':1, 'bell-pepper':1, carrot:1, avocado:1, tomatoes:1, cucumber:1,
               zucchini:1, bananas:1, potatoes:1, 'sweet-potato':1, apples:1, pear:1, lemon:1, lime:1,
               orange:1, lettuce:1, cabbage:1, eggplant:1, mango:1, 'chili-peppers':1, cauliflower:1,
               broccoli:1, 'butternut-squash':1 };
var HALF_UNITS = { can:1, block:1, head:1, bunch:1, jar:1 };
// Steps a kitchen measure comes in, as fractions of one.
var MEASURE_STEPS = { cup:[0.25, 1 / 3, 0.5, 2 / 3, 0.75, 1], tbsp:[0.5, 1], tsp:[0.25, 0.5, 0.75, 1] };
function snapTo(qty, steps) {
  var whole = Math.floor(qty), part = qty - whole, best = 0;
  [0].concat(steps).forEach(function(s) { if (Math.abs(part - s) < Math.abs(part - best)) best = s; });
  return whole + best;
}
function practicalQty(qty, unit, ids) {
  if (qty === null || qty === undefined) return null;
  if (qty <= 0) return 0;
  unit = unit || 'ea';
  if (unit === 'ea') {
    var halves = (ids || []).length > 0 && (ids || []).every(function(id) { return HALVES[id]; });
    return halves ? Math.max(0.5, Math.round(qty * 2) / 2) : Math.max(1, Math.round(qty));
  }
  if (unit === 'slice' || unit === 'stalk') return Math.max(1, Math.round(qty));
  if (HALF_UNITS[unit]) return Math.max(0.5, Math.round(qty * 2) / 2);
  if (unit === 'lb') return Math.max(0.25, Math.round(qty * 4) / 4);
  if (unit === 'oz' || unit === 'g' || unit === 'ml') return Math.max(1, Math.round(qty));
  if (MEASURE_STEPS[unit]) {
    // Round in the measure it will be shown in (0.08 cup becomes 1½ tbsp), then convert back.
    var shown = unit, q = qty;
    if (shown === 'cup' && q < 0.25) { q = q * 16; shown = 'tbsp'; }
    if (shown === 'tbsp' && q < 1) { q = q * 3; shown = 'tsp'; }
    q = Math.max(MEASURE_STEPS[shown][0], snapTo(q, MEASURE_STEPS[shown]));
    return roundStore(convert(q, shown, unit));
  }
  return qty;   // kg, l and anything else: as scaled
}
// A recipe amount as a cook would measure it. Scaling a recipe to a household gave "0.67 egg" and
// "0.08 cup breadcrumbs" (T8). Spoon, cup and count amounts now read as kitchen fractions, and an
// amount too small for its measure moves to the next one down (0.08 cup is 1¼ tbsp). Grams and
// millilitres round to whole numbers. Recipe amounts reach here already rounded by practicalQty(),
// so what this shows is what the plan checks and deducts; pantry amounts use it too.
var FRACTIONS = [[0, ''], [0.25, '¼'], [1 / 3, '⅓'], [0.5, '½'], [2 / 3, '⅔'], [0.75, '¾'], [1, '']];
function kitchenQty(qty, unit) {
  if (qty === null || qty === undefined) { return 'amount not recorded'; }
  if (qty <= 0) { return (!unit || unit === 'ea') ? '0' : '0 ' + unit; }
  if (unit === 'cup' && qty < 0.25) { qty = qty * 16; unit = 'tbsp'; }
  if (unit === 'tbsp' && qty < 1) { qty = qty * 3; unit = 'tsp'; }
  if (UNIT_BASE[unit] && ['tsp', 'tbsp', 'cup', 'lb'].indexOf(unit) === -1) {
    return (qty >= 10 ? Math.round(qty) : Math.round(qty * 10) / 10) + ' ' + unit;
  }
  var whole = Math.floor(qty), part = qty - whole, best = FRACTIONS[0];
  FRACTIONS.forEach(function(f) { if (Math.abs(part - f[0]) < Math.abs(part - best[0])) best = f; });
  if (best[0] === 1) { whole++; best = FRACTIONS[0]; }
  if (!whole && !best[1]) best = FRACTIONS[1];          // never show 0 for something the recipe uses
  var s = (whole ? String(whole) : '') + best[1];
  if (!unit || unit === 'ea') return s;
  // "2 cups", "1½ cans": a word unit takes a plural past one. Abbreviations (tbsp, lb) don't.
  var plural = whole > 1 || (whole === 1 && best[1]);
  return s + ' ' + (plural && UNIT_PLURAL[unit] ? UNIT_PLURAL[unit] : unit);
}
var UNIT_PLURAL = { cup:'cups', slice:'slices', can:'cans', block:'blocks', head:'heads',
                    bunch:'bunches', stalk:'stalks', jar:'jars', clove:'cloves', piece:'pieces' };
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
  if (dayIndex === -1) return 'Yesterday';
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
function freshness(e) {
  var today = todayKey();
  var ing = ingById(e.ing);
  if (e.expires) {
    var l = daysBetween(today, e.expires);
    return status({ known:true, min:l, max:l, via:'printed' });
  }
  if (!e.bought) { return { known:false, cls:'unknown', text:'no date', via:'nodate' }; }
  var norm = ing && ing.norm ? NORMS[ing.norm] : null;
  if (!norm)             { return { known:false, cls:'unknown', text:'no estimate', via:'nonorm' }; }
  if (norm.printed)      { return { known:false, cls:'unknown', text:'check date', via:'needsprinted', norm:norm }; }
  var win = norm[e.zone];
  if (!win)              { return { known:false, cls:'unknown', text:'no estimate', via:'nozone', norm:norm }; }
  var age = daysBetween(e.bought, today);
  return status({ known:true, min:win[0] - age, max:win[1] - age, via:'norm', norm:norm });
}
// Norms are ranges ("3–7 days"), and the chip goes by the LATE end. It used to go by the early end,
// so spinach bought three days ago with a 3–7 day window said "use today" though up to four days
// were left, and 21 of the sample kitchen's 102 foods said "use today" at once (feedback 4). When
// everything is urgent nothing is. Red is now only for the last day or two of a window, and the
// words are about when to use it, never about the food's condition.
function status(f) {
  if (f.max < 0)        { f.cls = 'now';  f.text = 'past window'; }
  else if (f.max === 0) { f.cls = 'now';  f.text = 'use today'; }
  else if (f.max === 1) { f.cls = 'now';  f.text = 'use by tomorrow'; }
  else if (f.max <= 4)  { f.cls = 'soon'; f.text = 'use within ' + f.max + ' days'; }
  else                  { f.cls = 'ok';   f.text = 'no rush'; }
  return f;
}
// The same estimate seen from the day a meal is planned for. A chip on Saturday's dinner said "use
// today" on Thursday, about food the plan uses on Saturday (feedback 4). For a later day it names
// the day the window ends instead, which reads the same whichever day the plan is opened.
function freshnessOn(e, day) {
  var f = freshness(e);
  if (!day || !f.known) return f;
  var g = { known:true, min:f.min, max:f.max, via:f.via, norm:f.norm };
  if (f.max < day)            { g.cls = 'now';  g.text = 'past window by then'; }
  else if (f.max <= day + 1)  { g.cls = 'soon'; g.text = 'window ends ' + (f.max === 1 ? 'tomorrow' : dayShort(f.max)); }
  else                        { g.cls = 'ok';   g.text = 'in window'; }
  return g;
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
  // No guide for this food (or for where it's kept): say so and stop. It used to end "Add the
  // printed date for an estimate", which asked Ren to fix a gap in our data, and loose herbs
  // have no printed date to add (feedback 4).
  if (f.via === 'nonorm') {
    return bought + ' · we have no shelf-life guide for ' + name.toLowerCase() + ', so no estimate.';
  }
  if (f.via === 'nozone') {
    return bought + ' · we have no shelf-life guide for ' + name.toLowerCase() + ' kept in the ' + zoneLabel(e.zone).toLowerCase() + ', so no estimate.';
  }
  if (f.via === 'needsprinted') {
    return bought + ' · ' + f.norm.basis + '. That counts from the printed date, so add it for an estimate.';
  }
  var from = addDays(parseKey(e.bought), f.norm[e.zone][0]), to = addDays(parseKey(e.bought), f.norm[e.zone][1]);
  return bought + ' · ' + normBasis(f.norm, e.zone) + ' · estimated use-by ' +
    (todayKey(from) === todayKey(to) ? fmtDate(from) : fmtDate(from) + '–' + fmtDate(to));
}
// Soonest window end first (the late end, as the chips read), then the early end; unknowns last,
// since nothing is known about them.
function byUrgency(a, b) {
  var fa = freshness(a), fb = freshness(b);
  if (!fa.known && !fb.known) return 0;
  if (!fa.known) return 1;
  if (!fb.known) return -1;
  return (fa.max - fb.max) || (fa.min - fb.min);
}
// Whether a pantry item belongs under Needs attention: a window ending within four days (red or
// amber), or fridge and freezer food Ren could date and hasn't. Food we have no shelf-life guide
// for is left out: there is nothing to act on, and asking for a date can't fill our gap.
function needsAttention(e) {
  if (!inStock(e)) return false;
  var f = freshness(e);
  if (f.known) return f.max <= 4;
  return (f.via === 'nodate' || f.via === 'needsprinted') && e.zone !== 'cupboard';
}

// ═══════════════ STOCK ═══════════════
// What the kitchen holds of one ingredient, across every pantry entry for it.
// A variety counts toward the recipe food it stands in for: penne is Dry pasta to a recipe,
// frozen strawberries are Strawberries (`counts` in the ingredient list).
// Food the household's dietary settings rule out never counts, so it is never set aside, planned
// around or deducted. A recipe can pass Dairy-free because a line reads "milk (dairy or
// plant-based)"; the cow's milk in the fridge used to cover that line all the same.
function entriesFor(ingId) {
  var blocked = activeBlocks();
  return pantry.filter(function(p) {
    if (blocked.length && ingBlocked(p.ing, blocked)) return false;
    if (p.ing === ingId) return true;
    var i = ingIndex[p.ing];
    return !!(i && i.counts === ingId);
  });
}
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
// ({ ingId: [{qty, unit}] }). Two kinds of doubt, kept apart because they point opposite ways:
//   uncertain  a pantry entry has no quantity, or one in a unit that can't be converted, so there
//              may be MORE on hand than `known`.
//   lessThan   another meal set some aside in a unit that can't be converted (cups of egg whites
//              against eggs counted each), so there is LESS left than `known`.
// They used to share one flag, and that hid real shortfalls: one meal's egg whites in cups made
// every later egg check "check you have enough" while the plan booked 12.5 eggs against 6 (T1,
// error 47). Doubt that can only mean less must never soften a shortfall the numbers already show.
function stockOf(ingId, unit, reserved) {
  var known = 0, uncertain = false, lessThan = false, any = false;
  entriesFor(ingId).forEach(function(e) {
    if (!inStock(e)) return;
    any = true;
    var c = e.qty === null ? null : convert(e.qty, e.unit, unit);
    if (c === null) { uncertain = true; return; }
    known += c;
  });
  ((reserved && reserved[ingId]) || []).forEach(function(r) {
    var c = convert(r.qty, r.unit, unit);
    if (c === null) lessThan = true; else known -= c;
  });
  // Kept exact: rounding to two places made a third of a cup on hand (0.333…) read as 0.33,
  // short of the 0.333… a recipe asks for.
  return { any:any, known:roundStore(Math.max(0, known)), uncertain:uncertain, lessThan:lessThan };
}

function lineIds(line) { return line.any || line.all || [line.id]; }
// A food as this household needs it: "Dairy-free milk" where the setting rules out the plain one.
function foodName(id) {
  var rule = dietRuleFor(id);
  return rule ? rule + ' ' + ingName(id).toLowerCase() : ingName(id);
}
function lineName(line) { return lineIds(line).map(foodName).join(line.all ? ' and ' : ' or '); }
// How much of a line this household's meal needs: the recipe's amount scaled from its estimated
// servings to the household, doubled for a dinner that also makes the next day's lunch.
// Everything that checks, sets aside or deducts food goes through here.
function amountFor(line) {
  if (line.qty === null || line.qty === undefined) return null;
  // Rounded to a practical amount, so what is checked and deducted is what Ren measures.
  return practicalQty(line.qty * recipeScale(line.r), line.unit, lineIds(line));
}
function servingsFor(r) {
  return settings.household * (r && r.type === 'dinner' && leftoversOn() ? 2 : 1);
}
function recipeScale(r) {
  if (!r || !r.nut || !r.nut.serves) return 1;
  return servingsFor(r) / r.nut.serves;
}

// Whether the kitchen covers one recipe line, needing `amount` (null = presence only):
//   ok       enough is known to be on hand (or, for presence-only lines, some is)
//   check    some is on hand but how much isn't known, so the user should check
//   short    the known amount isn't enough (after `reserved`, if given)
//   missing  none on hand at all
var COVER_RANK = { missing:0, short:1, check:2, ok:3 };
function coverStatus(s, amount) {
  if (!s.any) return 'missing';
  if (amount === null) return 'ok';
  // Enough on the numbers: fine, unless another meal took an uncountable share of it.
  if (s.known >= amount - 1e-9) return s.lessThan ? 'check' : 'ok';
  // Not enough on the numbers: only stock of unknown size could make up the gap.
  return s.uncertain ? 'check' : 'short';
}
function coverage(line, amount, reserved) {
  var cands = lineIds(line).map(function(id) {
    var s = stockOf(id, line.unit, reserved);
    return { status:coverStatus(s, amount), id:id, stock:s,
             urgent:entriesFor(id).filter(inStock).sort(byUrgency)[0] || null };
  });
  // An ALL group needs every food on the line, so the line is only as covered as its worst part.
  if (line.all) {
    return cands.reduce(function(worst, c) {
      return !worst || COVER_RANK[c.status] < COVER_RANK[worst.status] ? c : worst;
    }, null);
  }
  // Alternatives: the best-covered option. Between equally covered ones, take the one closest to
  // turning — otherwise the line is satisfied by whichever id the recipe happened to list first,
  // and the app cooks the fresh pita while the tortillas it promised to rescue go to waste.
  cands.sort(function(a, b) {
    var d = COVER_RANK[b.status] - COVER_RANK[a.status];
    if (d) return d;
    if (a.urgent && b.urgent) return byUrgency(a.urgent, b.urgent);
    return a.urgent ? -1 : (b.urgent ? 1 : 0);
  });
  return cands[0];
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
  // An ALL group needs every food on the line, so each is drawn down. An alternative draws only
  // on the option that covered it. (No ALL group carries a quantity today, so this is a no-op
  // for them — it is here so adding one later deducts the whole line rather than one part.)
  var ids = line.all ? lineIds(line) : [coverage(line, amount).id];
  var taken = [];
  ids.forEach(function(id) {
    var es = entriesFor(id).filter(function(e) {
      return e.qty !== null && e.qty > 0 && convert(1, line.unit, e.unit) !== null;
    }).sort(byUrgency);
    var left = amount;
    es.forEach(function(e) {
      if (left <= 1e-9) return;
      var t = Math.min(e.qty, convert(left, line.unit, e.unit));
      e.qty = roundStore(e.qty - t);
      left -= convert(t, e.unit, line.unit);
      taken.push({ entry:e.id, qty:roundStore(t) });
    });
  });
  return taken;
}
function restoreTaken(taken) {
  (taken || []).forEach(function(t) {
    var e = entryById(t.entry);
    if (e && e.qty !== null) { e.qty = roundStore(e.qty + t.qty); }
  });
}
// Uses up a whole meal. Returns what was taken plus how many lines were rescued: used in the last
// RESCUE_DAYS days of their window. It used to count anything inside its window, so rice bought
// last month and eggs bought yesterday counted alike, and after 24 meals Profile said "76 used
// before they turned" (feedback 5). A rescue is food that was close to the end.
var RESCUE_DAYS = 2;
function deductRecipe(r) {
  var taken = [], rescued = 0;
  visibleLines(r).forEach(function(line) {
    var u = urgentEntryFor(line);
    if (u) { var f = freshness(u); if (f.known && f.max >= 0 && f.max <= RESCUE_DAYS) rescued++; }
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
function activeEntry(e) { return isMealEntry(e) && e.status === 'pending' && !e.dietBlocked; }
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
// what runs short because an earlier meal needs it too, and what can't be counted. `byIdx` holds
// the same verdict for each meal, so a card can never say something the banner contradicts: a card
// read "Nothing missing." while the banner listed that meal's chicken as short (feedback 2).
function planNeeds() {
  var res = {}, out = { short:[], missing:[], check:[], stale:[], byIdx:{} }, seen = {};
  function add(list, key, item) { if (!seen[key]) { seen[key] = true; list.push(item); } }
  plan.forEach(function(entry, idx) {
    if (!activeEntry(entry)) return;
    var r = recipeById(entry.recipe);
    if (!r) return;
    var day = Math.floor(idx / 3), mine = out.byIdx[idx] = { missing:[], short:[], stale:[], check:[] };
    visibleLines(r).forEach(function(line) {
      if (line.optional) return;
      var amount = amountFor(line);
      var c = coverage(line, amount, res);
      var meal = (day < 2 ? dayLabel(day).toLowerCase() : dayLabel(day)) + ' ' + r.type;   // "Saturday", not "saturday"
      if (c.status === 'missing') { mine.missing.push(lineName(line)); add(out.missing, 'm:' + lineName(line), { name:lineName(line) }); }
      else if (turnsBefore(line, day)) { mine.stale.push(ingName(c.id)); add(out.stale, 't:' + c.id + idx, { name:ingName(c.id), meal:meal }); }
      else if (c.status === 'short') { mine.short.push(ingName(c.id)); add(out.short, 's:' + c.id, { name:ingName(c.id), need:amount, have:c.stock.known, unit:line.unit, meal:meal }); }
      else if (c.status === 'check') { mine.check.push(ingName(c.id)); add(out.check, 'c:' + c.id, { name:ingName(c.id) }); }
    });
    reserveRecipe(r, res);
  });
  return out;
}
// The foods a plan is short of, each named once however many meals or reasons it comes up under.
function shortFoods(n) {
  var names = [];
  n.missing.concat(n.short, n.stale).forEach(function(x) { if (names.indexOf(x.name) === -1) names.push(x.name); });
  return names;
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
// Fills the plan one slot at a time from every approved recipe, setting food aside as it goes.
// Hard rules (never broken): a dietary restriction, a "not for us", and no recipe twice in the plan.
// Weekday time limits (below) come next: only if nothing quick enough fits is a slower meal used.
// Then, in order of weight: no missing or short ingredients; food closest to the end of its
// window used first (and earlier in the three days); weekend breakfasts of 20 minutes or less;
// favourites and likes; using more of what's on hand. A small per-day shuffle keeps equally
// good plans from repeating every day.

// Monday to Friday, each meal stays within the household's cook-time limit from setup
// (by default breakfast 20 minutes or less and lunch 30 or less). Weekends aren't limited.
function timeLimit(type, dayIdx) {
  var wd = dateFor(dayIdx).getDay();
  if (wd === 0 || wd === 6) return null;
  return (settings.times && settings.times[type]) || null;
}
function fitsTime(r, dayIdx) {
  var lim = timeLimit(r.type, dayIdx);
  return !lim || r.mins <= lim;
}

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
  // Mornings are short; on a weekday this only matters when nothing within the limit fits,
  // and then the quickest of the rest wins.
  var lim = timeLimit(r.type, dayIdx) || (r.type === 'breakfast' ? 20 : 0);
  if (lim && r.mins > lim) s -= 50 + (r.mins - lim) * 3;
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
// A weekday meal over its time limit is only picked when nothing within it fits at all.
function pickRecipe(type, dayIdx, reserved, exclude, anyTime) {
  var best = null;
  recipes.forEach(function(r) {
    if (!eligible(r, type) || exclude.indexOf(r.id) > -1) return;
    // An overnight recipe can't be ready today, whatever else fits. It used to be only marked
    // down, so when nothing else was fully covered Swap still offered this morning an overnight
    // French toast bake (T5).
    if (dayIdx === 0 && /overnight/i.test(r.time || '')) return;
    if (!anyTime && !fitsTime(r, dayIdx)) return;
    var s = scoreRecipe(r, dayIdx, reserved);
    if (!best || s.score > best.s.score) best = { r:r, s:s };
  });
  if (!best && exclude.length) return pickRecipe(type, dayIdx, reserved, [], anyTime);  // repeat rather than leave a hole
  if (!best && !anyTime) return pickRecipe(type, dayIdx, reserved, exclude, true);
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
  for (var i = 0; i < 9; i++) { if (isMealEntry(plan[i]) && plan[i].status !== 'pending') used.push(plan[i].recipe); }
  if (keep) {
    plan.forEach(function(e, i) {
      if (!isMealEntry(e) || e.status !== 'pending' || e.dietBlocked) return;
      if (!mealOn(MEAL_TYPES[i % 3]) || (leftoverDinner(i) && !e.ownLunch)) return;   // settings changed
      var r = recipeById(e.recipe);
      if (r && eligible(r, r.type) && fitsTime(r, Math.floor(i / 3)) && fullyCovered(r, res, Math.floor(i / 3))) { reserveRecipe(r, res); kept[i] = true; used.push(r.id); }
    });
  }
  for (var j = 0; j < 9; j++) {
    var e = plan[j], type = MEAL_TYPES[j % 3];
    if (!mealOn(type)) {                                   // a meal this household doesn't plan
      if (!e || !e.off) { plan[j] = { off:true, status:'off' }; changed++; }
      continue;
    }
    var src = leftoverDinner(j);
    if (src && !(e && e.ownLunch) && usableDinner(src)) {   // last night's leftovers
      if (!e || !e.leftover || e.recipe !== src.recipe) { plan[j] = { leftover:true, recipe:src.recipe, status:'pending' }; changed++; }
      continue;
    }
    if (isMealEntry(e) && (e.status !== 'pending' || kept[j])) continue;
    var pick = pickRecipe(type, Math.floor(j / 3), res, used);
    var before = e ? e.recipe : null, own = !!(e && e.ownLunch);
    if (pick) {
      plan[j] = { recipe:pick.id, status:'pending' };
      reserveRecipe(pick, res); used.push(pick.id);
    } else {
      // Nothing in the approved files fits: flag the slot rather than break a restriction.
      plan[j] = { recipe:recipes.filter(function(r) { return r.type === type; })[0].id, status:'pending', dietBlocked:true };
    }
    if (own) plan[j].ownLunch = true;
    if (plan[j].recipe !== before) changed++;
  }
  planSig = kitchenSig();
  planBuiltEmpty = pantryEmpty();
  return changed;
}

// Keeps the plan's shape in step with the household's choices and with its dinners, without
// re-planning meals that still work: a meal switched off becomes an empty slot, a lunch follows
// the dinner it's leftovers of, and a slot that now needs its own meal gets the best one.
// Run before every render, so a swapped, skipped or changed dinner carries its leftovers along.
function syncPlanShape() {
  if (plan.length !== 9) return;
  plan.forEach(function(e, j) {
    var type = MEAL_TYPES[j % 3];
    if (!mealOn(type)) { if (!e || !e.off) plan[j] = { off:true, status:'off' }; return; }
    var d = leftoverDinner(j);
    if (d && !(e && e.ownLunch) && usableDinner(d)) {
      if (!e || !e.leftover || e.recipe !== d.recipe) plan[j] = { leftover:true, recipe:d.recipe, status:'pending' };
      return;
    }
    if (isMealEntry(e)) return;
    var others = plan.map(function(x, i) { return i !== j && isMealEntry(x) ? x.recipe : null; }).filter(Boolean);
    var pick = pickRecipe(type, Math.floor(j / 3), reservationsExcept(j), others);
    plan[j] = pick ? { recipe:pick.id, status:'pending' }
                   : { recipe:recipes.filter(function(r) { return r.type === type; })[0].id, status:'pending', dietBlocked:true };
    if (e && e.ownLunch) plan[j].ownLunch = true;
  });
}
// Says what is still missing rather than "already fits": re-planning can leave gaps when nothing in
// the approved files is fully covered, and calling that a fit was untrue (T5).
function replanNow() {
  closeDetail();
  var n = 0;
  // The receipt names each meal it replaced: "Re-planned 2 meals" didn't say which (feedback 1).
  var res = track('you re-planned around your kitchen', function() { n = planKitchen(true); });
  // When nothing fits better it says so and names what to pick up, rather than pointing elsewhere
  // (feedback 2).
  var needs = planNeeds(), foods = shortFoods(needs).map(function(s) { return s.toLowerCase(); });
  var still = foods.length ? ' Still short of ' + listOf(foods, 4) + '.'
            : needs.check.length ? ' Every meal is covered, apart from amounts to check.' : ' Every meal is now covered.';
  showToast((n ? 'Re-planned ' + n + ' meal' + (n > 1 ? 's' : '') + ': see What changed.'
               : foods.length ? 'No other recipe fits better.' : 'Your plan already works with your kitchen.') + still,
    n ? { label:'Undo', ms:8000, fn:res.undo } : { label:'OK', ms:8000, fn:function() {} });
}

// ═══════════════ RECIPE IMAGERY ═══════════════
// Photos live in recipe-images/ beside this file — one per approved recipe,
// 1280x720 WebP, named as a slug of the recipe title (which is also the recipe id).
var RECIPE_IMAGE_DIR = 'recipe-images/';
var FALLBACK_HERO = 'linear-gradient(135deg,#FFF3E0 0%,#FFE0B2 40%,#FFCC80 100%)';

// The gradient sits under the photo, so a missing photo falls back to it — never to another
// dish's photo. There is deliberately no list of photo names here: the build checks every
// recipe has one, and a list kept by hand went stale the moment recipes were added.
// Single quotes only: this value is injected into a double-quoted style="" attribute.
function heroFor(recipe) {
  return "url('" + RECIPE_IMAGE_DIR + recipe.id + ".webp') center/cover no-repeat, " + FALLBACK_HERO;
}

// ═══════════════ CHIP ICONS ═══════════════
var chipSvgs = {
  ok:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5.5 5.5L20 7"/></svg>',
  soon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>',
  now:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 7v6"/><path d="M12 17h.01"/></svg>',
  unknown:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.3 9.2a2.8 2.8 0 1 1 3.6 2.7c-.7.2-1 .8-1 1.5v.4"/><path d="M12 17.5h.01"/></svg>'
};
// A toggle that a screen reader announces by name and state ("Vegetarian, switch, on"). The
// switches were bare buttons with no text, so they read as just "button" (T7).
function switchAttrs(on, label) {
  return ' role="switch" aria-checked="' + (on ? 'true' : 'false') + '" aria-label="' + esc(label) + '"';
}
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
  if (kind === 'down' && p.vote !== 'down') {
    // A disliked recipe is replaced rather than leaving a hole in the day. The message names the
    // replacement: "Replaced with X" used to be overwritten at once by "Swapping it out", so Ren
    // never saw what took the meal's place, and it showed even when nothing was swapped. The vote
    // is cast inside the swap's receipt, so Undo takes back both.
    var idx = -1;
    for (var i=0;i<plan.length;i++) { if (isMealEntry(plan[i]) && plan[i].recipe === id && plan[i].status === 'pending') { idx = i; break; } }
    closeDetail();
    var name = (recipeById(id) || { name:'it' }).name;
    var swapped = idx > -1 ? swapMeal(idx, 'you marked ' + name + ' “Not for us”', function() { p.vote = 'down'; }) : null;
    if (swapped) {
      showToast('👎 Not for us — replaced with ' + swapped.r.name + '. We won\'t suggest ' + name + ' again.',
        { label:'Undo', fn:swapped.undo });
    } else {
      p.vote = 'down';
      renderAll();
      showToast('👎 Noted — we won\'t suggest ' + name + ' again.');
    }
    return;
  }
  if (kind === 'fav') {
    p.fav = !p.fav;
    msg = p.fav ? '❤️ Favourited — this one comes back around more often.' : 'Un-favourited. Back to the regular rotation.';
  } else {
    p.vote = (p.vote === kind) ? null : kind;
    msg = p.vote === 'up' ? '👍 Noted — more like this.' : 'Rating cleared.';
  }
  var bar = document.getElementById('ratingBar');
  if (bar) { bar.outerHTML = ratingBarHTML(id); }
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
    html += '<button class="day-btn' + (currentDay === i+1 ? ' active' : '') + '" data-day="' + (i+1) + '"' +
      ' aria-label="Day ' + (i+1) + ', ' + fmtDate(dateFor(i)) + (currentDay === i+1 ? ', selected' : '') + '"' +
      ' onclick="selectDay(' + (i+1) + ')">' +
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

  // Three states, and the headline never promises what the small print takes back (feedback 2).
  // "No grocery trip required" used to sit above "Check you have enough mango, bread, carrots,
  // lettuce and 6 more": an amount the app can't compare is not an amount it has checked.
  //   covered   every meal still to cook is covered, amounts included
  //   check     nothing is missing, but some amounts can't be compared, so "probably"
  //   short     something is missing, runs short, or will be past its window by its meal
  var n = planNeeds();
  var pendingCount = plan.filter(activeEntry).length;
  var foods = shortFoods(n);
  var checks = n.check.map(function(c) { return c.name.toLowerCase(); });
  var opt = optionalMissing();
  var extras = opt.length ? ' Optional extras you don\'t have: ' + listOf(opt, 4) + '.' : '';
  // Re-planning can only replace meals the kitchen doesn't cover, so it's offered only when there
  // are some. It used to appear as "Your kitchen changed: re-plan" after a thumbs-down or a cooked
  // meal, over a plan that was already covered, with nothing for it to do.
  var replan = foods.length && pendingCount
    ? '<div class="banner-acts"><button class="btn primary small" onclick="openSub(\'shop\')">What to pick up</button>' +
      '<button class="btn ghost small" onclick="replanNow()">Re-plan</button></div>' : '';

  if (!foods.length && !checks.length) {
    el.className = 'banner';
    el.innerHTML = '<span class="tick">' + TICK_SVG + '</span>' +
      '<div class="text"><strong>No grocery trip needed</strong><span>' +
        esc((pendingCount ? pendingCount + ' meal' + (pendingCount > 1 ? 's' : '') + ' still to cook, all covered by what you have.'
                          : 'Every meal in this plan is logged. Nice work.') + extras) +
      '</span></div>';
    return;
  }
  if (!foods.length) {
    el.className = 'banner check';
    el.innerHTML = '<span class="tick">' + BANG_SVG + '</span>' +
      '<div class="text"><strong>Probably covered: check ' + checks.length + ' amount' + (checks.length > 1 ? 's' : '') + '</strong><span>' +
        esc('Everything is in your kitchen. Check you have enough ' + listOf(checks, 4) + ': your amounts are in units we ' +
            'can\'t compare with the recipes.' + extras) +
      '</span></div>';
    return;
  }
  // Shortfalls name the meal that runs out, because an earlier meal in the plan uses the same food.
  // At most two are spelled out: at a household of five the sample kitchen ran to seventeen,
  // one after another in small grey type. Each meal's card says what that meal is short of.
  var missingLine = n.missing.length ? ['Not in your kitchen: ' + listOf(n.missing.map(function(m) { return m.name.toLowerCase(); }), 6)] : [];
  var lines = n.short.map(function(s) {
      return s.name + ': ' + s.meal + ' needs ' + kitchenQty(s.need, s.unit) + ', ' + kitchenQty(s.have, s.unit) + ' left after earlier meals';
    }).concat(n.stale.map(function(s) {
      return s.name + ' will be past its estimated window by ' + s.meal;
    }));
  var more = lines.length > 2 ? lines.length - 2 : 0;
  lines = missingLine.concat(lines.slice(0, 2));
  el.className = 'banner short';
  el.innerHTML = '<span class="tick">' + BANG_SVG + '</span>' +
    '<div class="text"><strong>Short of ' + foods.length + ' food' + (foods.length > 1 ? 's' : '') + '</strong>' +
    '<span>' + esc(lines.join(' · ') + (more ? ' · and ' + more + ' more, shown on each meal' : '') +
      '. Swap or re-plan those meals, or pick up what\'s missing.' +
      (checks.length ? ' Also check ' + checks.length + ' amount' + (checks.length > 1 ? 's' : '') + ', shown on each meal.' : '')) + '</span>' + replan + '</div>';
}
function listOf(items, max) {
  if (items.length <= 1) return items.join('');
  if (items.length <= max) return items.slice(0, -1).join(', ') + ' and ' + items[items.length - 1];
  return items.slice(0, max).join(', ') + ' and ' + (items.length - max) + ' more';
}

// A meal card's chips: first its verdict, worked out exactly as the banner's (planNeeds), then the
// ingredient closest to the end of its window, seen from the meal's own day. The card used to judge
// "missing" on its own, ignoring amounts and what earlier meals set aside, so it could read
// "all in window" and "Nothing missing." beside a banner listing that meal's chicken as short. And
// "all in window" appeared when nothing in the meal had a date at all (feedback 2).
function mealChips(recipe, day, verdict) {
  var out = [];
  function names(list) { return listOf(list.map(function(s) { return s.toLowerCase(); }), 1); }
  if (verdict) {
    if (verdict.missing.length) out.push({ cls:'now', text:'needs ' + names(verdict.missing) });
    if (verdict.short.length)   out.push({ cls:'now', text:'short of ' + names(verdict.short) });
    if (verdict.stale.length)   out.push({ cls:'now', text:names(verdict.stale) + ' past window by then' });
    if (verdict.check.length)   out.push({ cls:'soon', text:'check ' + names(verdict.check) });
    if (!out.length)            out.push({ cls:'ok', text:'nothing missing' });
  }
  var s = standInFor(recipe);
  if (s) out.push({ cls:'soon', text:ingName(s.row.use).toLowerCase() + ' for ' + ingName(s.forId).toLowerCase() });
  var urgent = null;
  visibleLines(recipe).forEach(function(line) {
    var e = urgentEntryFor(line);
    if (!e) return;
    var f = freshness(e);
    if (f.known && (!urgent || f.max < urgent.f.max)) { urgent = { e:e, f:f }; }
  });
  var on = urgent ? freshnessOn(urgent.e, day || 0) : null;
  if (on && on.cls !== 'ok' && !(verdict && verdict.stale.length)) {
    out.push({ cls:on.cls, text:'uses ' + ingName(urgent.e.ing).toLowerCase() + ' · ' + on.text });
  }
  return out;
}
// Whether a meal's verdict has anything wrong with it.
function verdictClear(v) { return !!v && !v.missing.length && !v.short.length && !v.stale.length && !v.check.length; }

// Cooked and skipped meals leave the day so it shows only what is still to decide. They are not
// gone: the toast offers Undo straight away, and the line at the bottom of the day reopens them
// for as long as the day is on the plan — so a mis-tap noticed after the toast has faded can still
// be put back. Per day and not saved: a fresh visit always starts tidy.
var showDone = {};
function toggleDone(day) { showDone[day] = !showDone[day]; renderMeals(); }

function renderMeals() {
  var container = document.getElementById('mealCards');
  container.innerHTML = '';
  var spot = (currentDay === 1) ? nextMealSlot() : -1;
  var needs = planNeeds();
  var done = [], shown = 0;

  MEAL_TYPES.forEach(function(type, slot) {
    var idx = planIndex(currentDay, type);
    var entry = plan[idx];
    if (!entry || entry.off) return;                      // a meal this household doesn't plan
    var r = recipeById(entry.recipe);
    if (!r) return;
    var left = !!entry.leftover;
    if (entry.status === 'accepted' || entry.status === 'skipped') {
      done.push(type.charAt(0).toUpperCase() + type.slice(1) + ' ' +
        (entry.status === 'skipped' ? 'skipped' : left ? 'eaten' : 'cooked'));
      if (!showDone[currentDay]) return;
    }
    shown++;
    var Type = type.charAt(0).toUpperCase() + type.slice(1);

    var pref = getPref(r.id);
    var card = document.createElement('div');
    card.className = 'meal-card' + (slot === spot ? ' spotlight' : '') + (entry.status !== 'pending' ? ' done' : '') + (entry.dietBlocked ? ' blocked' : '');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', Type + ': ' + (left ? 'leftovers, ' : '') + r.name + ', ' + (left ? 'nothing to cook' : r.time) +
      (entry.status === 'accepted' ? (left ? ', eaten' : ', cooked') : entry.status === 'skipped' ? ', skipped' : ''));
    card.setAttribute('tabindex', '0');
    card.onclick = function() { openDetail(idx); };

    // A cooked or skipped meal carries its badge and no chips: they were worked out from today's
    // pantry, after the meal took its food, so a cooked dinner used to say "needs chicken".
    var verdict = needs.byIdx[idx];
    var chips = left ? chipHTML('ok', 'nothing to cook')
      : (entry.status !== 'pending' || entry.dietBlocked) ? ''
      : mealChips(r, Math.floor(idx / 3), verdict).map(function(c) { return chipHTML(c.cls, esc(c.text)); }).join('');
    // Why this meal is on the plan, on the card itself. Only while it's still Ren's to decide:
    // once cooked or skipped the reason is history, not something to act on. A meal the app changed
    // says what it was and why instead, until Ren opens it (feedback 1).
    var ch = entry.changed && entry.status === 'pending' ? entry.changed : null;
    var why = ch ? changedLine(ch)
      : (left || entry.status !== 'pending') ? '' : whyLine(r, Math.floor(idx / 3), 'card', verdict);
    var badge = '';
    if (ch)                          { badge = '<span class="state-badge changed">changed</span>'; }
    if (entry.status === 'accepted') { badge = '<span class="state-badge cooked">✓ ' + (left ? 'eaten' : 'cooked') + '</span>'; }
    if (entry.status === 'skipped')  { badge = '<span class="state-badge skipped">skipped</span>'; }
    if (entry.dietBlocked)           { badge = '<span class="state-badge blocked">⚠ doesn\'t fit</span>'; }

    card.innerHTML =
      '<div class="meal-hero" style="background:' + heroFor(r) + ';">' +
        '<span class="meal-type-badge ' + type + '">' + (left ? 'lunch · leftovers' : type) + '</span>' +
        '<span class="time-badge">' + (left ? 'reheat' : r.time) + '</span>' +
        badge +
        (pref.fav ? '<span class="fav-badge" title="Favourite">' + rateIcons.fav + '</span>' : '') +
      '</div>' +
      '<div class="meal-info">' +
        '<h4>' + r.name + '</h4>' +
        '<p class="meta">' + (left ? 'Lunch · leftovers from last night\'s dinner' : Type + ' · ' + r.time) + '</p>' +
        (why ? '<p class="meal-why' + (ch ? ' changed' : '') + '">' + esc(why) + '</p>' : '') +
        '<div class="chip-row">' + chips + '</div>' +
      '</div>';

    container.appendChild(card);
  });

  if (done.length) {
    var line = document.createElement('div');
    line.className = 'done-line';
    line.innerHTML =
      (!shown ? '<div class="done-all">All done for this day.</div>' : '') +
      '<span class="done-list">✓ ' + esc(done.join(' · ')) + '</span>' +
      '<button class="done-toggle" onclick="toggleDone(' + currentDay + ')" aria-expanded="' + !!showDone[currentDay] + '">' +
        (showDone[currentDay] ? 'Hide' : 'Show') + '</button>';
    container.appendChild(line);
  }
}

// The "Where everything goes" table that listed each ingredient's amount per day was removed:
// it repeated, as a grid of numbers, what each meal card and the feasibility banner already say,
// and it was the densest thing on the Plan tab. Cross-meal allocation itself is unchanged — it
// was never the table that enforced it, it is reserveRecipe() and reservationsExcept().

// ═══════════════ PANTRY RENDERING ═══════════════
function entryQty(e) { return e.qty === null ? 'amount not recorded' : (e.qty > 0 ? fmtQty(e.qty, e.unit) : 'used up'); }

function renderPantry() {
  var att = document.getElementById('pantryAttention');
  var zones = document.getElementById('pantryZones');

  if (!pantry.length) {
    att.innerHTML = '<div class="empty-card"><strong>Nothing here yet</strong>' +
      '<span>Add your food items with the <b>+</b> button or scan a receipt.</span>' +
      '<div style="display:flex;gap:8px;margin-top:var(--s4);flex-wrap:wrap;">' +
        '<button class="btn primary small" onclick="openAddItem()" style="margin-top:0;">Add food</button>' +
        '<button class="btn ghost small" onclick="openReceipt(\'Pantry\')" style="margin-top:0;">Scan receipt</button>' +
      '</div></div>';
    zones.innerHTML = '';
    document.getElementById('pantryNotices').innerHTML = '';   // don't leave a stale low-stock card
    return;
  }

  // Needs attention: anything within four days of the end of its window, plus fridge and freezer
  // food Ren could date and hasn't (see needsAttention).
  var attention = pantry.filter(needsAttention).sort(byUrgency);

  // Needs attention is a zone row like the three storage zones, so the tab reads as one list
  // instead of a flat block sitting above a set of rows.
  //
  // It closes like them too, which took some deciding. The spec wants the freshness flag
  // "prominent enough that skipping it takes a deliberate action", and opening by default looked
  // like the safe reading — until it was measured: the sample kitchen put 59 items in here, so
  // open-by-default just rebuilt the wall this change exists to remove, and a wall of 59 rows is
  // skimmed, not read. What has to be unmissable is the signal, not the detail. So the row itself
  // carries the worst chip in its own colour, and that is what Ren has to deliberately ignore.
  // The per-item basis is one tap away. (Judging by the late end of each window, feedback 4,
  // brought the sample kitchen's list down from 59 items.)
  var attOpen = openZones.attention;

  // Three groups, because they ask three different things of Ren.
  //
  // An item with a date close to running out and nothing planning to use it is a decision: cook
  // it or lose it. One the plan already draws on is reassurance. But an item the app can't
  // estimate at all is neither — it is a gap in the record, and no amount of urgency styling
  // changes that, because there is no urgency to report. Lumping it in with the first two made
  // the whole list look like a warning and made the genuine warnings harder to find.
  //
  // It matters more now that an undated receipt no longer invents today's date: items legitimately
  // arrive with nothing on record, and this is where Ren closes that gap.
  var plannedOn = plannedDays();
  var dated   = attention.filter(function(e) { return freshness(e).known; });
  var undated = attention.filter(function(e) { return !freshness(e).known; });
  var atRisk  = dated.filter(function(e) { return plannedOn[e.ing] === undefined; });
  var covered = dated.filter(function(e) { return plannedOn[e.ing] !== undefined; });

  // Each row says what to do about it, not only how close it is (feedback 4): cook it, freeze it,
  // or check it. Never what condition it's in: the app has only read a date.
  var todo = function(e) {
    var f = freshness(e), day = plannedOn[e.ing];
    if (f.max < 0) return 'Past its estimated window. Check it before you use it.';
    if (day !== undefined) {
      var when = day === 0 ? 'today' : day === 1 ? 'tomorrow' : 'on ' + dayLabel(day);
      return f.max < day ? 'Your plan uses it ' + when + ', after its window ends: swap or re-plan that meal.'
                         : 'Your plan uses it ' + when + '.';
    }
    if (dietRuleFor(e.ing)) return 'Your ' + dietRuleFor(e.ing) + ' setting keeps it out of meals.';
    return (f.max <= 1 ? 'Use it tonight' : 'Use it in a meal soon') + (canFreeze(e) ? ', or freeze it.' : '.');
  };
  var row = function(e, act) {
    var f = freshness(e), ruled = !!dietRuleFor(e.ing);
    return '<div class="zone-line" onclick="event.stopPropagation();openEditItem(\'' + e.id + '\')">' +
      '<div><div class="zl-name">' + esc(ingName(e.ing)) + '</div>' +
      '<div class="zl-sub">' + esc(zoneLabel(e.zone).toLowerCase() + ' · ' + basisLine(e)) + '</div>' +
      (f.known ? '<div class="zl-todo">' + esc(todo(e)) + '</div>' : '') +
      (act && f.max >= 0 && !ruled ? '<div class="zl-acts">' +
        '<button class="btn ghost small use-it" onclick="event.stopPropagation();planAround(\'' + e.id + '\')">Use it in a meal</button>' +
        '<button class="btn ghost small use-it" onclick="event.stopPropagation();openPairing(\'' + e.ing + '\')">Pair it with…</button>' +
        (canFreeze(e) ? '<button class="btn ghost small use-it" onclick="event.stopPropagation();freezeItem(\'' + e.id + '\')">Freeze it</button>' : '') +
      '</div>' : '') +
      '</div>' +
      '<div class="zl-right"><div class="zl-qty">' + entryQty(e) + '</div>' + chipHTML(f.cls, f.text) + '</div>' +
    '</div>';
  };
  var group = function(label, items, act) {
    if (!items.length) return '';
    return '<div class="zone-group">' + esc(label) + '</div>' + items.map(function(e) { return row(e, act); }).join('');
  };

  var attLines =
    group('Nothing planned uses these', atRisk, true) +
    group('Your plan uses these', covered, false) +
    group('No date, so no estimate — tap to add one', undated, false) ||
    '<div class="zone-line empty"><div class="zl-sub">Nothing needs urgent attention. Rare and beautiful.</div></div>';

  // The way out for a bad week. Sits at the end of the list, where Ren arrives having just read
  // what is about to go — not as a banner, because most days nothing has gone.
  if (attention.length) {
    attLines += '<div class="zone-line batch-cta" onclick="event.stopPropagation();openWasteBatch()">' +
      '<div class="zl-sub">Something already gone off? <b>Log several at once</b></div></div>';
  }

  // The collapsed row carries whatever is most worth acting on. Food about to turn that nothing
  // is planning to use comes first; with none of that, a gap in the record is the next most
  // useful thing to say. "All in your plan" is only honest once both are clear.
  var worst = atRisk.some(function(e) { return freshness(e).cls === 'now'; }) ? 'now' : 'soon';
  var headChip = atRisk.length  ? chipHTML(worst, atRisk.length + ' not in your plan')
               : undated.length ? chipHTML('unknown', undated.length + ' need a date')
               : dated.length   ? chipHTML('ok', 'all in your plan') : '';

  att.innerHTML =
    '<div class="zone-row attention' + (attOpen ? ' open' : '') + '" onclick="toggleZone(\'attention\')">' +
      '<span class="zone-name">Needs attention' + (headChip ? ' ' + headChip : '') + '</span>' +
      '<span class="zone-count">' + attention.length + ' item' + (attention.length === 1 ? '' : 's') +
        ' <span class="caret">&rsaquo;</span></span>' +
    '</div>' +
    (attOpen ? '<div class="zone-items">' + attLines + '</div>' : '');

  // Low-stock guidance when pantry is nearly empty. Kept outside the collapsible section so
  // closing Needs attention can't hide it.
  var notices = document.getElementById('pantryNotices');
  notices.innerHTML = '';
  var inStockCount = pantry.filter(inStock).length;
  if (inStockCount > 0 && inStockCount <= 5) {
    notices.innerHTML = '<div class="empty-card" style="margin-top:var(--s4);"><strong>Supplies running low</strong>' +
      '<span>Only ' + inStockCount + ' item' + (inStockCount === 1 ? '' : 's') + ' left. Add your food items with the <b>+</b> button or scan a receipt.</span>' +
      '<button class="btn ghost small" onclick="openSub(\'shop\')">What to pick up</button></div>';
  }

  // Used-up food is left out of the list rather than shown struck through. It is hidden, not
  // deleted: undoing a cooked meal puts quantities back by finding each entry by id, so removing
  // the entry would make Undo silently return nothing.
  zones.innerHTML = ZONES.map(function(z) {
    var items = pantry.filter(function(e) { return e.zone === z.key && inStock(e); })
      .sort(function(a, b) { return ingName(a.ing).localeCompare(ingName(b.ing)); });
    var count = items.length;
    var open = openZones[z.key];
    var lines = items.map(function(e) {
      var f = freshness(e);
      return '<div class="zone-line" onclick="event.stopPropagation();openEditItem(\'' + e.id + '\')">' +
        '<div><div class="zl-name">' + esc(ingName(e.ing)) + '</div>' +
        '<div class="zl-sub">' + esc(basisLine(e)) + '</div></div>' +
        '<div class="zl-right"><div class="zl-qty">' + entryQty(e) + '</div>' + chipHTML(f.cls, f.text) + '</div>' +
      '</div>';
    }).join('') || '<div class="zone-line empty"><div class="zl-sub">Nothing in the ' + z.label.toLowerCase() + ' right now.</div></div>';
    return '<div class="zone-row' + (open ? ' open' : '') + '" onclick="toggleZone(\'' + z.key + '\')">' +
        '<span class="zone-name">' + z.label + '</span>' +
        '<span class="zone-count">' + count + ' item' + (count === 1 ? '' : 's') + ' <span class="caret">&rsaquo;</span></span>' +
      '</div>' +
      (open ? '<div class="zone-items">' + lines + '</div>' : '');
  }).join('');
}

// Every ingredient the current plan would draw on. A meal already cooked or skipped doesn't
// count: the question is what the days still ahead will use up.
function plannedIngredientIds() {
  var out = {};
  plan.forEach(function(e) {
    if (!e || !e.recipe || e.status === 'skipped') return;
    var r = recipeById(e.recipe);
    if (!r) return;
    visibleLines(r).forEach(function(l) { lineIds(l).forEach(function(id) { out[id] = true; }); });
  });
  return out;
}
// The first day (0 = today) a meal still to cook uses each ingredient, for "Your plan uses it
// tomorrow" under Needs attention.
function plannedDays() {
  var out = {};
  plan.forEach(function(e, idx) {
    if (!activeEntry(e)) return;
    var r = recipeById(e.recipe), day = Math.floor(idx / 3);
    if (!r) return;
    visibleLines(r).forEach(function(l) {
      lineIds(l).forEach(function(id) {
        if (out[id] === undefined || day < out[id]) out[id] = day;
        var i = ingIndex[id];
        // A variety in the pantry (frozen salmon) is used by a line that names the food it counts as.
        INGREDIENTS.forEach(function(v) { if (v.counts === id && (out[v.id] === undefined || day < out[v.id])) out[v.id] = day; });
        if (i && i.counts && (out[i.counts] === undefined || day < out[i.counts])) out[i.counts] = day;
      });
    });
  });
  return out;
}

// Freezing is the other way to keep food in time, and the norms hold a freezer window for most
// fridge foods. Offered only inside the window: freezing doesn't take food back into it.
function canFreeze(e) {
  if (e.zone !== 'fridge') return false;
  var f = freshness(e), ing = ingById(e.ing), norm = ing && ing.norm ? NORMS[ing.norm] : null;
  return f.known && f.max >= 0 && !!(norm && norm.freezer && !norm.printed);
}
function freezeItem(entryId) {
  var e = entryById(entryId);
  if (!e || !canFreeze(e)) return;
  e.zone = 'freezer';
  renderAll();
  var f = freshness(e), name = ingName(e.ing).toLowerCase();
  showToast('Moved the ' + name + ' to the freezer.' + (f.known && f.via === 'norm' ? ' ' + normBasis(f.norm, 'freezer') + '.' : ''),
    { label:'Undo', fn:function() { e.zone = 'fridge'; renderAll(); showToast('The ' + name + ' is back in the fridge.'); } });
}

function recipeUses(r, ingId) {
  return visibleLines(r).some(function(l) { return lineIds(l).indexOf(ingId) > -1; });
}

// Swaps one pending meal for the best approved recipe that uses this food, so a warning about
// something about to turn becomes a change Ren can make in one tap. Only recipes the kitchen can
// actually cover are offered — suggesting a meal that needs three things she hasn't got would
// move the problem rather than solve it.
// What a recipe is short of right now, by name, ignoring optional lines.
function missingFor(r, day, reserved) {
  return visibleLines(r).filter(function(l) {
    return !l.optional && coverage(l, amountFor(l), reserved).status === 'missing';
  }).map(lineName);
}
function nameList(names) {
  if (names.length === 1) return names[0].toLowerCase();
  return names.slice(0, -1).map(function(n) { return n.toLowerCase(); }).join(', ') +
    ' and ' + names[names.length - 1].toLowerCase();
}

// Two things were wrong here.
//
// It only offered recipes the kitchen could already cover completely, and when it found none it
// said "Nothing in the approved recipes uses ground beef with what else is in your kitchen."
// Measured against a half-empty fridge that sentence was hiding this: twenty recipes use ground
// beef, none were cookable, and the closest needed two things. A dead end was being reported as
// an absence, and Ren reasonably read it as "this food is not in the recipe book".
//
// So: near misses are now offered, with the gap named, because being two items short of twenty
// recipes is a decision rather than a refusal — Ren may well have the broccoli and not have
// logged it. And when nothing can be offered, the message says which of the several possible
// reasons it actually is.
var NEAR_MISS_MAX = 2;   // beyond this it stops being a near miss and becomes a shopping list

// It also replaced meals Ren had picked herself: one tap replaced tonight's dinner, and a second
// tap, for another food, replaced that one too (feedback 1). Meals the planner chose are used
// first now; a meal Ren chose (by Swap, by "Use it in a meal", or by cooking her own lunch) is only
// replaced after she says so (`replaceChosen`).
function planAround(entryId, checked, replaceChosen) {
  var e = entryById(entryId);
  if (!e) return;
  var name = ingName(e.ing).toLowerCase();

  // Food already past the long end of its estimated window is not planned on a tap: putting it in
  // a meal would quietly tell Ren it is fine to eat, a claim the app never makes (T3). Show the
  // basis and let Ren decide, having looked at it.
  var f = freshness(e);
  if (!checked && f.known && f.max < 0) {
    showToast('Your ' + name + ' is past its estimated window (' + basisLine(e) + '). ' +
      'Only plan it if you’ve checked it yourself.',
      { label:'Plan it anyway', ms:10000, fn:function() { planAround(entryId, true); } });
    return;
  }

  var rule = dietRuleFor(e.ing);
  if (rule) { showToast('Your ' + rule + ' setting rules out ' + name + ', so the plan won’t use it.'); return; }
  var uses = recipes.filter(function(r) { return recipeUses(r, e.ing); });
  if (!uses.length) { showToast('None of our recipes use ' + name + ' yet.'); return; }
  if (plannedIngredientIds()[e.ing]) { showToast('Your plan already uses your ' + name + '.'); return; }

  var best = null, nearest = null, fitAny = false;
  function search(allowChosen) {
    best = null; nearest = null;
    plan.forEach(function(slot, idx) {
      if (!isMealEntry(slot) || slot.status !== 'pending' || slot.dietBlocked) return;
      if (slot.chosen && !allowChosen) return;
      var type = MEAL_TYPES[idx % 3], day = Math.floor(idx / 3);
      var others = plan.map(function(x, i) { return i === idx ? null : x.recipe; }).filter(Boolean);
      var reserved = reservationsExcept(idx);
      uses.forEach(function(r) {
        if (r.type !== type || !eligible(r, type) || others.indexOf(r.id) > -1) return;
        if (!fitsTime(r, day)) return;
        fitAny = true;
        var s = scoreRecipe(r, day, reserved), gaps = missingFor(r, day, reserved);
        var cand = { idx:idx, r:r, score:s.score, day:day, gaps:gaps };
        if (!gaps.length) {
          if (!best || s.score > best.score) best = cand;
        } else if (!nearest || gaps.length < nearest.gaps.length ||
                   (gaps.length === nearest.gaps.length && s.score > nearest.score)) {
          nearest = cand;
        }
      });
    });
    return best || (nearest && nearest.gaps.length <= NEAR_MISS_MAX ? nearest : null);
  }

  var pick = search(false);
  if (!pick) {
    pick = search(true);
    if (pick && !replaceChosen) {
      showToast('The best fit would replace ' + slotName(pick.idx, true) + ', ' + recipeById(plan[pick.idx].recipe).name +
        ', which you picked. Replace it with ' + pick.r.name + '?',
        { label:'Replace it', ms:10000, fn:function() { planAround(entryId, true, true); } });
      return;
    }
  }
  if (!pick) {
    if (nearest) {
      showToast(uses.length + ' recipe' + (uses.length === 1 ? '' : 's') + ' use ' + name +
        '. The closest needs ' + nameList(nearest.gaps) + '.');
    } else if (fitAny) {
      showToast('The recipes that use ' + name + ' are already on your plan.');
    } else {
      showToast('The recipes that use ' + name + ' don’t fit your settings for these three days.');
    }
    return;
  }

  // Ren is on the Pantry tab, away from the meal this replaces, so the receipt names it too and
  // the card stays marked until she opens it.
  var slot = plan[pick.idx];
  var res = track('you asked to use your ' + name, function() {
    slot.recipe = pick.r.id;
    slot.status = 'pending';
    slot.chosen = true;
    delete slot.tried;                   // a fresh rotation from the new meal
  }, { acted:pick.idx, include:true });
  showToast(slotName(pick.idx) + ' is now ' + pick.r.name + ', which uses your ' + name + '.' +
    (pick.gaps.length ? ' You’ll need ' + nameList(pick.gaps) + '.' : ''),
    { label:'Undo', fn:res.undo });
}

// ─── guided pairing ───
// Ren picks the food that most needs using, then a second food to go with it, and gets approved
// recipes that use both. The second pick is guided: only foods that actually appear with the first
// in one of our recipes are offered, so a pair with no recipe behind it can't be chosen.
//
// That choice is what makes it work. Measured across 160 random kitchens of 12 to 35 foods,
// starting from every food: picking any three, a recipe used all three about 3% of the time;
// any two, 26–29%; guided two, 89–97%. It searches the approved recipes and nothing else — a recipe
// written for the pair would need the spec amended first (open assumption #27).
var pairing = null;   // { anchor, partner, slot, choosingAnchor } — slot is a plan index or null

// In-stock food Ren could pick, most urgent first. Staples are assumed and diet-ruled food is out.
function pairStock() {
  var seen = {}, out = [];
  pantry.filter(inStock).sort(byUrgency).forEach(function(e) {
    var i = ingById(e.ing);
    if (!i || i.staple || seen[e.ing] || dietRuleFor(e.ing)) return;
    seen[e.ing] = true; out.push(e.ing);
  });
  return out;
}

// Where a recipe would go when Ren started from the Pantry: the earliest pending meal of its type
// that it fits, preferring meals the planner chose over ones Ren picked herself.
function pairSlotFor(r) {
  var fallback = -1;
  for (var i = 0; i < plan.length; i++) {
    var s = plan[i];
    if (MEAL_TYPES[i % 3] !== r.type || !isMealEntry(s) || s.status !== 'pending' || s.dietBlocked) continue;
    if (!fitsTime(r, Math.floor(i / 3))) continue;
    if (!s.chosen) return i;
    if (fallback < 0) fallback = i;
  }
  return fallback;
}

// Every approved recipe that uses the first food and could go in a slot, with what it is short of.
// Gaps are measured against what the rest of the plan already sets aside, so a pairing never
// promises food another meal is counting on.
function pairCandidates(anchor) {
  var target = pairing && pairing.slot !== null ? pairing.slot : null;
  var out = [];
  recipes.forEach(function(r) {
    if (!recipeUses(r, anchor) || !eligible(r, r.type)) return;
    var idx = target !== null ? (MEAL_TYPES[target % 3] === r.type ? target : -1) : pairSlotFor(r);
    if (idx < 0) return;
    var day = Math.floor(idx / 3);
    if (!fitsTime(r, day)) return;
    if (plan.some(function(x, i) { return i !== idx && x && x.recipe === r.id; })) return;
    var reserved = reservationsExcept(idx);
    out.push({ r:r, idx:idx, day:day, gaps:missingFor(r, day, reserved), score:scoreRecipe(r, day, reserved).score });
  });
  return out;
}

// Partners for the first food: only foods that share a recipe with it. Most cookable first, then
// the more urgent of two equally cookable partners, so pairing two things that need using wins.
function pairPartners(anchor, cands) {
  var stock = pairStock(), rows = [];
  stock.forEach(function(b, rank) {
    if (b === anchor) return;
    var both = cands.filter(function(c) { return recipeUses(c.r, b); });
    if (!both.length) return;
    rows.push({ id:b, n:both.length, rank:rank,
                fewest:Math.min.apply(null, both.map(function(c) { return c.gaps.length; })) });
  });
  rows.sort(function(a, b) { return a.fewest - b.fewest || a.rank - b.rank || b.n - a.n; });
  return rows;
}

function openPairing(anchor, slotIdx) {
  pairing = { anchor:anchor || null, partner:null, choosingAnchor:false,
              slot:(slotIdx === undefined || slotIdx === null) ? null : slotIdx };
  if (!pairing.anchor) {
    // From a meal: start with the most urgent food that has a recipe for this meal.
    var stock = pairStock();
    for (var i = 0; i < stock.length; i++) {
      if (pairPartners(stock[i], pairCandidates(stock[i])).length) { pairing.anchor = stock[i]; break; }
    }
  }
  if (!pairing.anchor) {
    pairing = null;
    showToast('Nothing in your kitchen pairs up for ' + (slotIdx !== undefined && slotIdx !== null ? slotName(slotIdx, true) : 'these three days') + ' right now.');
    return;
  }
  closeDetail();
  renderPairing();
}
function closePairing() {
  pairing = null;
  var h = document.getElementById('pairSheet');
  if (h) { h.style.display = 'none'; h.innerHTML = ''; }
}
function pairPickAnchor(id) { pairing.anchor = id; pairing.partner = null; pairing.choosingAnchor = false; renderPairing(); }
function pairPickPartner(id) { pairing.partner = id; renderPairing(); }
function pairBack() {
  pairing.confirm = null;
  if (pairing.partner) pairing.partner = null; else pairing.choosingAnchor = false;
  renderPairing();
}

function pairFoodChip(id) {
  var e = entriesFor(id).filter(inStock).sort(byUrgency)[0];
  var f = e ? freshness(e) : null;
  return f && f.known ? chipHTML(f.cls, f.text) : '';
}

function renderPairing() {
  var h = document.getElementById('pairSheet');
  if (!h || !pairing) return;
  var p = pairing, body = '';
  var where = p.slot !== null ? 'For ' + slotName(p.slot, true) : 'From your kitchen';

  if (p.choosingAnchor) {
    var options = pairStock().filter(function(id) { return pairPartners(id, pairCandidates(id)).length; }).slice(0, 15);
    body = '<div class="pair-q">Start with which food?</div>' +
      '<div class="pair-sub">Most urgent first. Only foods that pair with something else you have are listed.</div>' +
      '<div class="pair-list">' + options.map(function(id) {
        return '<button class="pair-row" onclick="pairPickAnchor(\'' + id + '\')">' +
          '<span class="pr-name">' + esc(ingName(id)) + '</span>' + pairFoodChip(id) + '</button>';
      }).join('') + '</div>';
  } else if (!p.partner) {
    var cands = pairCandidates(p.anchor), partners = pairPartners(p.anchor, cands);
    body = '<div class="pair-anchor"><span class="pr-name">' + esc(ingName(p.anchor)) + '</span>' + pairFoodChip(p.anchor) +
        '<button class="pair-change" onclick="pairing.choosingAnchor=true;renderPairing()">Change</button></div>' +
      '<div class="pair-q">Pair it with</div>' +
      (partners.length
        ? '<div class="pair-sub">Only foods that share a recipe with it. Easiest to cook first.</div>' +
          '<div class="pair-list">' + partners.slice(0, 12).map(function(x) {
            return '<button class="pair-row" onclick="pairPickPartner(\'' + x.id + '\')">' +
              '<span class="pr-name">' + esc(ingName(x.id)) + '</span>' + pairFoodChip(x.id) +
              '<span class="pr-meta">' + x.n + ' recipe' + (x.n === 1 ? '' : 's') + ' · ' +
                (x.fewest ? x.fewest + ' short' : 'nothing missing') + '</span></button>';
          }).join('') + '</div>'
        : '<div class="pair-sub">Nothing else in your kitchen shares a recipe with ' + esc(ingName(p.anchor).toLowerCase()) +
          (p.slot !== null ? ' for this meal' : '') + '. Try starting with a different food.</div>');
  } else {
    var both = pairCandidates(p.anchor).filter(function(c) { return recipeUses(c.r, p.partner); })
      .sort(function(a, b) { return a.gaps.length - b.gaps.length || b.score - a.score; });
    body = '<div class="pair-q">' + esc(ingName(p.anchor)) + ' + ' + esc(ingName(p.partner)) + '</div>' +
      '<div class="pair-list">' + both.slice(0, 8).map(function(c) {
        return '<div class="pair-recipe">' +
          '<div class="prc-name">' + esc(c.r.name) + '</div>' +
          '<div class="prc-meta">' + esc(slotName(c.idx)) + ' · ' + esc(c.r.time) + '</div>' +
          '<div class="prc-gap' + (c.gaps.length ? '' : ' ok') + '">' +
            (c.gaps.length ? 'Needs ' + esc(nameList(c.gaps)) : 'Nothing missing') + '</div>' +
          '<button class="btn primary small" onclick="placePairing(\'' + c.r.id + '\')">Add to plan</button>' +
        '</div>';
      }).join('') + '</div>';
  }

  if (p.confirm) {
    body = '<div class="pair-confirm"><div class="pair-sub">' + esc(p.confirm.text) + '</div>' +
      '<button class="btn primary" onclick="pairing.confirm=null;' + p.confirm.call + '">' + esc(p.confirm.label) + '</button>' +
      '<button class="btn quiet" onclick="pairing.confirm=null;renderPairing()">Not now</button></div>';
  }
  h.innerHTML = '<div class="waste-sheet pair-sheet">' +
      '<div class="pair-where">' + esc(where) + '</div>' + body +
      '<div class="pair-foot">' +
        ((p.partner || p.choosingAnchor) ? '<button class="btn quiet" onclick="pairBack()">Back</button>' : '') +
        '<button class="btn quiet" onclick="closePairing()">Cancel</button>' +
      '</div></div>';
  h.style.display = 'flex';
}

// Same rules as "Use it in a meal": food past its estimated window isn't planned on a tap, since
// that would quietly say it's fine to eat; and a meal Ren picked herself isn't replaced without
// asking — unless she opened this from that very meal, in which case replacing it is the request.
function placePairing(rid, checked, replaceChosen) {
  var p = pairing;
  if (!p || !p.partner) return;
  var c = pairCandidates(p.anchor).filter(function(x) { return x.r.id === rid; })[0];
  if (!c) { showToast('That recipe no longer fits — the plan has changed since.'); return; }

  // Both questions are asked inside the sheet, not in a toast: the toast sits beneath the sheet's
  // backdrop, so its button would be unreachable while the sheet is open.
  if (!checked) {
    var late = [p.anchor, p.partner].map(function(id) { return entriesFor(id).filter(inStock).sort(byUrgency)[0]; })
      .filter(function(e) { if (!e) return false; var f = freshness(e); return f.known && f.max < 0; })[0];
    if (late) {
      p.confirm = { text:'Your ' + ingName(late.ing).toLowerCase() + ' is past its estimated window (' + basisLine(late) + '). ' +
                         'Only plan it if you’ve checked it yourself.',
                    label:'Plan it anyway', call:'placePairing(\'' + rid + '\', true, ' + !!replaceChosen + ')' };
      renderPairing();
      return;
    }
  }
  var slot = plan[c.idx];
  if (slot.chosen && !replaceChosen && p.slot === null) {
    p.confirm = { text:'This would replace ' + slotName(c.idx, true) + ', ' + recipeById(slot.recipe).name +
                       ', which you picked. Replace it with ' + c.r.name + '?',
                  label:'Replace it', call:'placePairing(\'' + rid + '\', ' + !!checked + ', true)' };
    renderPairing();
    return;
  }

  var names = ingName(p.anchor).toLowerCase() + ' and ' + ingName(p.partner).toLowerCase();
  closePairing();
  var res = track('you paired your ' + names, function() {
    slot.recipe = c.r.id;
    slot.status = 'pending';
    slot.chosen = true;
    delete slot.tried;
  }, { acted:c.idx, include:true });
  showToast(slotName(c.idx) + ' is now ' + c.r.name + ', using your ' + names + '.' +
    (c.gaps.length ? ' You’ll need ' + nameList(c.gaps) + '.' : ''),
    { label:'Undo', fn:res.undo });
}

var openZones ={ attention:false, fridge:false, freezer:false, cupboard:false };
function toggleZone(key) { openZones[key] = !openZones[key]; renderPantry(); }

// ─── pantry search ───
function openPantrySearch() {
  document.getElementById('pantrySearchBar').style.display = 'flex';
  document.getElementById('pantrySearchBtn').style.display = 'none';
  document.getElementById('pantryTitleText').style.display = 'none';
  var inp = document.getElementById('pantrySearchInput');
  inp.value = '';
  inp.focus();
  document.getElementById('pantrySearchResults').style.display = 'none';
  document.getElementById('pantryNormalView').style.display = '';
}

function closePantrySearch() {
  // Called on every tab switch: if the search bar isn't on the page, there's nothing to close.
  if (!document.getElementById('pantrySearchBar')) return;
  document.getElementById('pantrySearchBar').style.display = 'none';
  document.getElementById('pantrySearchBtn').style.display = '';
  document.getElementById('pantryTitleText').style.display = '';
  document.getElementById('pantrySearchInput').value = '';
  document.getElementById('pantrySearchResults').style.display = 'none';
  document.getElementById('pantryNormalView').style.display = '';
}

function filterPantrySearch() {
  var q = document.getElementById('pantrySearchInput').value.trim().toLowerCase();
  var resultsEl = document.getElementById('pantrySearchResults');
  var normalEl = document.getElementById('pantryNormalView');

  if (!q) {
    resultsEl.style.display = 'none';
    normalEl.style.display = '';
    return;
  }

  resultsEl.style.display = '';
  normalEl.style.display = 'none';

  // filter in-stock pantry items whose name, or family's name, contains the query — so "cheese"
  // finds the Gouda and "tomato" finds the sun-dried ones
  var matches = pantry.filter(function(e) {
    if (!inStock(e)) return false;
    var f = famOf(e.ing);
    return ingName(e.ing).toLowerCase().indexOf(q) !== -1 ||
           (f && famName(f).toLowerCase().indexOf(q) !== -1);
  });

  if (!matches.length) {
    resultsEl.innerHTML = '<div class="pantry-search-empty">No items match “' + esc(q) + '”</div>';
    return;
  }

  // group by zone
  var grouped = {};
  ZONES.forEach(function(z) { grouped[z.key] = []; });
  matches.forEach(function(e) {
    if (grouped[e.zone]) grouped[e.zone].push(e);
  });

  var html = '';
  ZONES.forEach(function(z) {
    var items = grouped[z.key];
    if (!items.length) return;
    items.sort(function(a, b) { return ingName(a.ing).localeCompare(ingName(b.ing)); });
    html += '<div class="pantry-search-zone-label">' + z.label + '</div>';
    html += items.map(function(e) {
      var f = freshness(e);
      var name = ingName(e.ing);
      // highlight the matching substring. A food found by its family ("cheese" finding Gouda) has
      // nothing in its own name to highlight, so it says which family matched instead.
      var idx = name.toLowerCase().indexOf(q);
      var highlighted = idx < 0
        ? esc(name) + ' <span class="psi-fam">' + esc(famName(famOf(e.ing))) + '</span>'
        : esc(name.slice(0, idx)) + '<mark>' + esc(name.slice(idx, idx + q.length)) + '</mark>' + esc(name.slice(idx + q.length));
      return '<div class="pantry-search-item" onclick="closePantrySearch();openEditItem(\'' + e.id + '\')">' +
        '<div class="psi-left">' +
          '<div class="psi-name">' + highlighted + '</div>' +
          '<div class="psi-sub">' + entryQty(e) + ' · ' + esc(basisLine(e)) + '</div>' +
        '</div>' +
        '<div class="psi-right">' + chipHTML(f.cls, f.text) + '</div>' +
      '</div>';
    }).join('');
  });

  resultsEl.innerHTML = html;
}

// ═══════════════ DETAIL VIEW ═══════════════
var detailIndex = null;

// What the household's dietary settings change in this recipe, said just above the steps. The
// ingredient list already leaves out what a setting rules out, but the steps are the recipe's own
// words and can't be rewritten, so they still say "top with feta" or "whisk in the milk".
function dietNoteHTML(r) {
  var blocked = activeBlocks();
  if (!blocked.length) return '';
  var says = [];
  function add(s) { if (says.indexOf(s) === -1) says.push(s); }
  r.ing.forEach(function(line) {
    var ids = lineIds(line);
    var bad = ids.filter(function(id) { return ingBlocked(id, blocked); });
    if (!bad.length) return;
    var badNames = nameList(bad.map(ingName));
    if (line.optional) { add('Leave out the ' + badNames + ' where the steps mention ' + (bad.length > 1 ? 'them' : 'it') + '.'); return; }
    var ok = ids.filter(function(id) { return bad.indexOf(id) === -1; });
    if (ok.length) { add('Use the ' + nameList(ok.map(ingName)) + ' rather than the ' + badNames + '.'); return; }
    bad.forEach(function(id) {
      add('Use ' + foodName(id).toLowerCase() + ' where the recipe says ' + ingName(id).toLowerCase() + '.');
    });
  });
  if (!says.length) return '';
  return '<div class="note-card diet-note"><b>Your ' + esc(activeDietLabels().join(' and ')) + ' setting</b><br>' +
    esc(says.join(' ')) + '</div>';
}

// The numbered steps, exactly as the approved database writes them. Tap a step to tick it off
// while cooking (not saved: it resets when the screen closes).
function methodHTML(r) {
  if (!r.steps.length) return '';
  return dietNoteHTML(r) + standInNoteHTML(r) +
    '<div class="section-label">How to make it <span class="method-tip">tap a step when it\'s done</span></div>' +
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
    '<p class="field-hint">Our estimate, from the ingredient amounts and typical values, with the recipe making about ' +
      n.serves + ' serving' + (n.serves > 1 ? 's' : '') + '. Optional ingredients and anything without an amount aren\'t counted' +
      (n.cover < 100 ? ' (' + n.cover + '% of the ingredients were)' : '') + '.</p>';
}

// The amount this household's plan uses, beside the recipe's own wording, when scaling changes it.
function scaledNote(line) {
  var a = amountFor(line);
  if (a === null || Math.abs(a - line.qty) < 1e-6) return '';
  var noun = (!line.unit || line.unit === 'ea') ? countNoun(lineIds(line), a) : '';
  return ' <span class="scaled">→ ' + esc(kitchenQty(a, line.unit) + (noun ? ' ' + noun : '')) + '</span>';
}
// What a bare count is a count of, so "→ 1" reads "→ 1 egg". Only for a single plainly named food;
// a choice of foods, or a name like "Chicken (whole / pieces)", is left as the number.
function countNoun(ids, n) {
  if (ids.length !== 1) return '';
  var name = ingName(ids[0]).toLowerCase();
  if (/[(/]/.test(name)) return '';
  if (n <= 1) {
    if (/oes$/.test(name)) return name.slice(0, -2);              // tomatoes, potatoes
    if (/[^s]s$/.test(name)) return name.slice(0, -1);            // eggs, bananas
    return name;
  }
  return /s$/.test(name) ? name : name + 's';
}
// What the recipe's amounts are scaled to, in plain words, under the ingredients.
// The one caveat about freshness on this screen sits here, beside the dates it qualifies.
function scaleHint(r) {
  var fresh = ' Freshness dates are estimates from when you bought each food, not a check of the food itself.';
  if (!r.nut || !r.nut.serves) return 'Amounts as the recipe writes them.' + fresh;
  var people = settings.household, n = servingsFor(r);
  var who = people + ' ' + (people === 1 ? 'person' : 'people') + (n > people ? ', plus tomorrow\'s leftovers lunch' : '');
  return 'The recipe makes about ' + r.nut.serves + ' serving' + (r.nut.serves > 1 ? 's' : '') + ' (our estimate). ' +
    (Math.abs(n - r.nut.serves) < 1e-6 ? 'That fits your household of ' + who + ', so amounts are as written.'
      : 'Amounts are scaled for ' + who + ' (shown with →), and that\'s what the kitchen check and Cooked it use.') + fresh;
}

// One row per line of the recipe, in the recipe's own words, with what the kitchen has for it.
// For a meal still to cook, what earlier meals in the plan set aside is taken off first.
function ingredientRowsHTML(r, idx) {
  var entry = plan[idx];
  var reserved = activeEntry(entry) ? reservationsBefore(idx) : null;
  var visible = {}, s = standInFor(r);
  visibleLines(r).forEach(function(l) { visible[l.text] = l; });
  var html = '', missing = [];
  r.all.forEach(function(orig) {
    if (orig.staple) {
      html += '<div class="ingredient-row"><div><div class="ingredient-name">' + esc(orig.text) + '</div>' +
        '<div class="ingredient-basis">Staple, assumed on hand (change which in Settings &rsaquo; Staples you keep)</div></div></div>';
      return;
    }
    // A stand-in that is itself a staple takes the line off the shopping check altogether.
    if (s && s.staple && s.line.text === orig.text) {
      html += '<div class="ingredient-row"><div><div class="ingredient-name">' + esc(orig.text) + '</div>' +
        '<div class="ingredient-basis">' + esc(standInText(s)) + '</div></div>' + chipHTML('soon', 'stand-in') + '</div>';
      return;
    }
    var line = visible[orig.text];
    if (!line) return;                                  // an optional extra a restriction rules out
    var amount = amountFor(line), c = coverage(line, amount, reserved);
    var opt = line.optional && !/optional/i.test(line.text) ? ' <span class="opt">optional</span>' : '';
    if (c.status === 'missing') {
      if (!line.optional) missing.push(line);
      html += '<div class="ingredient-row"><div><div class="ingredient-name">' + esc(line.text) + opt + scaledNote(line) + '</div>' +
        '<div class="ingredient-basis">No ' + esc(lineName(line).toLowerCase()) + ' in your kitchen' +
        (line.optional ? ', and the dish works without it' : '') + '</div></div>' +
        chipHTML(line.optional ? 'unknown' : 'now', line.optional ? 'skip it' : 'missing') + '</div>';
      return;
    }
    var e = urgentEntryFor(line), f = freshnessOn(e, Math.floor(idx / 3));
    var chip = { ok:[f.cls, f.text], check:['soon', 'check amount'], short:['now', 'short'] }[c.status];
    var note = '';
    if (activeEntry(entry) && turnsBefore(line, Math.floor(idx / 3))) {
      chip = ['now', 'past window by then'];
      note = ' · <b>past its estimated window before this meal\'s day, so swap or re-plan</b>';
    }
    if (c.status === 'short') {
      note = ' · <b>' + fmtQty(c.stock.known, line.unit) + ' left' + (reserved && reserved[c.id] ? ' after earlier meals in the plan' : ' on hand') + '</b>';
    }
    if (c.status === 'check') { note = ' · <b>how much you have isn\'t recorded in a comparable unit, so check before cooking</b>'; }
    var sub = line.sub ? '<div class="ingredient-sub">' + esc(standInText({ forId:line.sub.forId, row:{ use:line.sub.use, note:line.sub.note } })) + '</div>' : '';
    html += '<div class="ingredient-row"><div>' +
        '<div class="ingredient-name">' + esc(line.text) + opt + scaledNote(line) + '</div>' + sub +
        '<div class="ingredient-basis">' + esc(e && e.ing !== c.id ? ingName(e.ing) + ' (counts as ' + ingName(c.id).toLowerCase() + ')' : ingName(c.id)) +
          ': ' + esc(basisLine(e)) + note + '</div>' +
      '</div>' + chipHTML(line.sub && c.status === 'ok' ? 'soon' : chip[0], line.sub && c.status === 'ok' ? 'stand-in' : chip[1]) + '</div>';
  });
  return { html:html, missing:missing };
}
// How a stand-in is said: the food asked for, what's used instead, where that comes from, and the
// row's own note on doing it.
function standInText(s) {
  return 'No ' + ingName(s.forId).toLowerCase() + ', so this uses your ' + ingName(s.row.use).toLowerCase() +
    (assumedStaple(s.row.use) ? ' (a staple)' : '') + ' instead, a stand-in from our list.' +
    (s.row.note ? ' ' + s.row.note : '');
}
// Said again just above the steps, which still name the food the recipe asked for.
function standInNoteHTML(r) {
  var s = standInFor(r);
  if (!s) return '';
  return '<div class="note-card diet-note"><b>Stand-in: ' + esc(ingName(s.row.use).toLowerCase()) + ' for ' +
    esc(ingName(s.forId).toLowerCase()) + '</b><br>' + esc(standInText(s)) + '</div>';
}
// A one-line reason the planner picked this meal, from the kitchen, never made up.
//
// Each branch states something the scorer actually weighed: an ingredient near the end of its
// window, Ren's own rating, full coverage from the pantry, a weekday time limit. Nothing here
// infers a reason the plan did not use, and when none of them hold it returns '' rather than
// filling the gap — a made-up justification would be worse than no line at all.
//
// It never says an ingredient is "still good". That is a claim about the food's condition, and
// the agent has only read a date Ren typed — the same reason the detail note says these windows
// are "not a check of the food itself". What it can say is which ingredient to use FIRST, which
// is arithmetic on the record. Priority, never condition. "Before it goes bad" is the same claim
// in the future tense and is avoided for the same reason: a stated spoilage date is the single
// biggest driver of food being binned while it is still fine.
//
// `where` is 'detail' for the detail view, anything else for the card. `verdict` is the meal's
// entry in planNeeds().byIdx: "Nothing missing." is said only when that verdict is clear, so the
// card, the meal screen and the banner agree (feedback 2).
function whyLine(r, dayIdx, where, verdict) {
  var urgent = null, missing = verdict ? !verdictClear(verdict) : false;
  visibleLines(r).forEach(function(line) {
    var e = urgentEntryFor(line);
    if (!e) { if (!line.optional && !verdict) missing = true; return; }
    var f = freshness(e), on = freshnessOn(e, dayIdx || 0);
    if (f.known && f.max >= (dayIdx || 0) && on.cls !== 'ok' && (!urgent || f.max < urgent.f.max)) urgent = { e:e, f:f };
  });

  if (urgent) {
    // On the card the freshness chip already reads "uses spinach · use today", so a sentence
    // saying it again is noise in the place with the least room. In the detail view the spec
    // requires the basis — the date Ren gave and the shelf-life assumption — so show it in full
    // and leave the judgement where it belongs.
    if (where === 'detail') {
      return 'Uses your ' + ingName(urgent.e.ing).toLowerCase() + '. ' + basisLine(urgent.e) +
        '. Worth a look before you cook.';
    }
    // On the card the chip has the urgency covered, so the only thing left worth adding is Ren's
    // own rating — the coverage and timing facts are what the other chips are for. Without this
    // the favourite branch below would never be reached on a card that also has an urgent chip.
    var up = getPref(r.id);
    if (up.fav) return 'One of your favourites.';
    if (up.vote === 'up') return 'You liked this one before.';
    return '';
  }

  var p = getPref(r.id);
  if (p.fav) return 'One of your favourites.';

  if (!missing) {
    var lim = (typeof dayIdx === 'number') ? timeLimit(r.type, dayIdx) : null;
    if (lim && r.mins && r.mins <= lim) { return 'Quick enough for your ' + lim + '-minute ' + r.type + '.'; }
    return where === 'detail' ? 'Nothing missing.' : '';   // the card's chip already says so
  }
  if (p.vote === 'up') return 'You liked this one before.';
  return '';
}

// A changed meal's note, shown once at the top of its screen; opening it counts as seeing it.
function seenChangeHTML(entry) {
  if (!entry.changed) return '';
  var html = '<div class="change-note">' + esc(changedLine(entry.changed)) + '</div>';
  delete entry.changed;
  saveState();
  renderMeals();                          // the card underneath drops its mark
  return html;
}

function openDetail(idx) {
  armBack();
  detailIndex = idx;
  var entry = plan[idx];
  if (!entry || entry.off) return;
  if (entry.leftover) { openLeftoverDetail(idx); return; }
  var r = recipeById(entry.recipe);
  var overlay = document.getElementById('detailOverlay');

  document.getElementById('detailHero').style.background = heroFor(r);
  document.getElementById('detailTitle').textContent = r.name;
  var day = Math.floor(idx / 3);
  document.getElementById('detailBackLabel').textContent = dayLabel(day) + ' · ' + r.type;

  var rows = ingredientRowsHTML(r, idx);
  var html = seenChangeHTML(entry) + ratingBarHTML(r.id) +
    '<div class="detail-facts">' +
      '<div class="detail-fact">⏱ ' + r.time + '</div>' +
    '</div>' +
    '<div class="section-label" style="margin-top:0;">Ingredients &middot; from your kitchen</div>' +
    '<div class="ingredient-card">' + rows.html + '</div>' +
    '<p class="field-hint">' + esc(scaleHint(r)) + '</p>';

  rows.missing.forEach(function(line) {
    html += '<div class="missing-callout"><b>Missing: ' + esc(lineName(line)) + '</b><span>Required for this recipe. Swap the meal or pick it up.</span></div>';
  });

  html += methodHTML(r);

  if (entry.dietBlocked) {
    html += '<div class="missing-callout"><b>Doesn\'t fit your dietary settings</b><span>' +
      'None of our ' + recipeCount(r.type) + ' ' + r.type + ' recipes fit ' +
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
    var why = whyLine(r, Math.floor(idx / 3), 'detail', planNeeds().byIdx[idx]);
    html += '<div class="actions">' +
        '<button class="btn primary" onclick="acceptMeal(' + idx + ')">Cooked it</button>' +
        '<button class="btn ghost" onclick="swapMeal(' + idx + ')">Swap</button>' +
        '<button class="btn quiet" onclick="skipMeal(' + idx + ')">Skip</button>' +
      '</div>' +
      '<button class="pair-cta" onclick="openPairing(null, ' + idx + ')">Or pick two foods from your kitchen</button>' +
      '<p class="detail-note">' + (why ? esc(why) + '<br><br>' : '') +
        '<b>Cooked it</b> takes what this recipe uses out of your pantry, so tap it once the meal is made. Swap and Skip take nothing.' +
      '</p>';
  }
  html += nutritionHTML(r);
  document.getElementById('detailContent').innerHTML = html;
  overlay.classList.add('open');
  document.getElementById('fab').style.display = 'none';
}

// A leftovers lunch: last night's dinner was made for the household twice over, so there's
// nothing to cook and nothing more to take from the pantry.
function openLeftoverDetail(idx) {
  var entry = plan[idx], r = recipeById(entry.recipe), day = Math.floor(idx / 3);
  document.getElementById('detailHero').style.background = heroFor(r);
  document.getElementById('detailTitle').textContent = 'Leftovers: ' + r.name;
  document.getElementById('detailBackLabel').textContent = dayLabel(day) + ' · lunch';
  var html = seenChangeHTML(entry) +
    '<div class="detail-facts"><div class="detail-fact">Reheat</div><div class="detail-fact">From ' + esc(dayLabel(day - 1).toLowerCase()) + '\'s dinner</div></div>';
  if (entry.status === 'accepted') {
    html += '<div class="actions"><button class="btn ghost" onclick="unskip(' + idx + ')">Undo</button></div>' +
      '<p class="detail-note">Marked eaten. Nothing was deducted: the ingredients were counted when the dinner was cooked.</p>';
  } else if (entry.status === 'skipped') {
    html += '<div class="actions"><button class="btn primary" onclick="unskip(' + idx + ')">Put it back on the plan</button></div>' +
      '<p class="detail-note">Skipped.</p>';
  } else {
    html += '<div class="actions">' +
        '<button class="btn primary" onclick="eatLeftovers(' + idx + ')">Eaten</button>' +
        '<button class="btn ghost" onclick="cookLunchInstead(' + idx + ')">Cook something else</button>' +
        '<button class="btn quiet" onclick="skipMeal(' + idx + ')">Skip</button>' +
      '</div>' +
      '<p class="detail-note">You eat leftovers, so ' + esc(dayLabel(day - 1).toLowerCase()) + '\'s dinner is planned for ' +
        settings.household + ' ' + (settings.household === 1 ? 'person' : 'people') + ' twice over: once for dinner and once for this lunch. ' +
        'There\'s nothing to cook, and nothing more is taken from your pantry. Change this in Settings &rsaquo; Meals &amp; cooking.</p>';
  }
  html += nutritionHTML(r);
  document.getElementById('detailContent').innerHTML = html;
  document.getElementById('detailOverlay').classList.add('open');
  document.getElementById('fab').style.display = 'none';
}
function eatLeftovers(idx) {
  plan[idx].status = 'accepted';
  closeDetail(); renderAll();
  showToast('Enjoy. Nothing deducted: dinner already counted it.');
}
// This lunch gets a meal of its own instead of the leftovers (and keeps it on later re-plans).
function cookLunchInstead(idx) {
  var others = plan.map(function(e, i) { return i !== idx && isMealEntry(e) ? e.recipe : null; }).filter(Boolean);
  var pick = pickRecipe('lunch', Math.floor(idx / 3), reservationsExcept(idx), others);
  if (!pick) { showToast('No lunch in our recipes fits your settings.'); return; }
  closeDetail();
  var res = track('you chose to cook ' + slotName(idx, true), function() {
    plan[idx] = { recipe:pick.id, status:'pending', ownLunch:true, chosen:true };
  }, { acted:idx });
  showToast('Planned ' + pick.name + ' for lunch instead.' + changeCount(res), { label:'Undo', fn:res.undo });
}

function closeDetail() {
  document.getElementById('detailOverlay').classList.remove('open');
  detailIndex = null;
  if (currentTab !== 'profileTab') { document.getElementById('fab').style.display = 'flex'; }
}

// ═══════════════ WHAT CHANGED ═══════════════
// The plan used to change underneath Ren (feedback 1). A new household size took a covered plan to
// seven gaps with only "Household of 8 saved."; turning leftovers on, a new time limit or a skipped
// dinner rewrote other days' meals with no word at all; and where there was a word it was a count
// ("swapped 1 meal out", "Re-planned 2 meals") in a toast that lasted 2.6 seconds. To find out what
// had moved, Ren had to re-read three days of cards.
//
// Now every action that can change the plan runs through track(), which compares the plan before
// and after and leaves a receipt: each meal that changed, what it was, why, and the banner's verdict
// when that moved. The receipt stays at the top of the Plan tab until Ren taps Got it, changed
// meals carry a "changed" mark until opened, and Undo puts everything back while nothing else has
// happened since.
var lastChange = null;   // { why, kind, lines:[], undo, sig, before } — the receipt on the Plan tab

function planDigest() {
  return plan.map(function(e) { return !e ? '' : e.off ? 'off' : (e.leftover ? 'L:' : '') + e.recipe + (e.dietBlocked ? '!' : ''); });
}
// "Saturday’s lunch". `mid` is for the middle of a sentence: "today’s lunch", but still "Saturday’s".
function slotName(idx, mid) {
  var d = Math.floor(idx / 3);
  var day = d === 0 ? 'Today' : d === 1 ? 'Tomorrow' : dayLabel(d);
  return (mid && d < 2 ? day.toLowerCase() : day) + '’s ' + MEAL_TYPES[idx % 3];
}
function entryLabel(e) {
  if (!e || e.off) return '';
  var r = recipeById(e.recipe);
  if (!r) return '';
  if (e.dietBlocked) return 'empty (nothing fits your settings)';
  return e.leftover ? 'leftovers of ' + r.name : r.name;
}
function bannerState() {
  if (pantryEmpty()) return 'empty';
  var n = planNeeds(), foods = shortFoods(n).length;
  return foods ? 'short of ' + foods + ' food' + (foods > 1 ? 's' : '') : n.check.length ? 'probably covered' : 'covered';
}
// Everything an action can change, for Undo.
function snapshotState() {
  return JSON.stringify({ settings:settings, pantry:pantry, plan:plan, prefs:prefs, unreconciled:unreconciled,
    cookLog:cookLog, wasteLog:wasteLog, lastNight:lastNight, planSig:planSig, planBuiltEmpty:planBuiltEmpty });
}
function restoreState(json) {
  var s = JSON.parse(json);
  settings = s.settings; pantry = s.pantry; plan = s.plan; prefs = s.prefs; unreconciled = s.unreconciled;
  cookLog = s.cookLog; wasteLog = s.wasteLog; lastNight = s.lastNight; planSig = s.planSig; planBuiltEmpty = s.planBuiltEmpty;
  syncStaples();
}
// What has to be unchanged for an Undo to be safe: if Ren has cooked, added food or changed a
// setting since, putting the old state back would quietly undo that too.
function stateSig() {
  var votes = Object.keys(prefs).filter(function(k) { return prefs[k].vote || prefs[k].fav; })
    .map(function(k) { return k + ':' + prefs[k].vote + ':' + prefs[k].fav; }).sort();
  return JSON.stringify([settings, pantry, plan.map(function(e) { return e && [e.recipe, e.status, !!e.off, !!e.leftover, !!e.dietBlocked]; }),
    unreconciled.length, cookLog.length, wasteLog.length, votes]);
}

// Runs `fn` (which changes the plan, settings or kitchen) and reports what it did.
//   why       why the meals changed, as a clause: "you skipped Friday’s dinner", "Vegetarian is on"
//   opts.acted     the slot Ren acted on directly; it isn't listed unless opts.include is set
//   opts.kind      repeated changes of one kind (stepping the household 5, 6, 7, 8) merge into one
//                  receipt measured from before the first, while nothing else happened in between;
//                  opts.mergedWhy is the reason line once two different changes share a receipt
// Returns { lines, undo } — `undo` puts everything back if nothing has changed since.
function track(why, fn, opts) {
  opts = opts || {};
  var merge = opts.kind && lastChange && lastChange.kind === opts.kind && lastChange.before && stateSig() === lastChange.sig;
  if (merge && opts.mergedWhy && lastChange.why !== why) why = opts.mergedWhy;   // several changes, one reason line
  var before = merge ? lastChange.before : { digest:planDigest(), names:plan.map(entryLabel), state:bannerState(), snap:snapshotState() };
  if (merge) plan.forEach(function(e) { if (e && e.changed && e.changed.kind === opts.kind) delete e.changed; });
  fn();
  syncPlanShape();
  var lines = [];
  planDigest().forEach(function(d, i) {
    if (d === before.digest[i] || (i === opts.acted && !opts.include)) return;
    var e = plan[i], now = entryLabel(e), was = before.names[i];
    if (!now && !was) return;
    lines.push(slotName(i) + ': ' + (now ? now : 'no longer planned') + (was ? ' (was ' + was + ')' : ''));
    if (now) e.changed = { from:was, why:why, kind:opts.kind || null };
  });
  var state = bannerState();
  if (state !== before.state && before.state !== 'empty' && state !== 'empty') {
    lines.push('The plan was ' + before.state + '; it’s now ' + state + '.');
  }
  var sig = stateSig();                   // the plan is already in its final shape (syncPlanShape above)
  if (lines.length) {
    lastChange = { why:why, kind:opts.kind || null, lines:lines, undo:before.snap, before:before, sig:sig };
  } else if (merge) {
    lastChange = null;                    // stepped back to where it started: nothing to report
  }
  renderAll();
  return { lines:lines, undo:function() { undoTo(before.snap, sig); } };
}
function undoTo(snap, sig) {
  if (stateSig() !== sig) { showToast('Can’t undo that now: the plan or kitchen has changed since.'); return; }
  restoreState(snap);
  lastChange = null;
  closeDetail();
  renderAll();
  var sub = document.getElementById('subScreen');
  if (sub.classList.contains('open') && /^(household|meals|dietary)$/.test(sub.dataset.which)) openSub(sub.dataset.which);
  showToast('Undone. Your plan is as it was.');
}
// "2 meals changed" for a toast, pointing at the receipt on the Plan tab.
function changeCount(res) {
  var n = res.lines.filter(function(l) { return l.indexOf('The plan was') !== 0; }).length;
  return n ? ' ' + n + ' meal' + (n > 1 ? 's' : '') + ' changed.' : res.lines.length ? ' ' + res.lines[0] : '';
}
function seePlanAction(res) {
  return res.lines.length ? { label:'See plan', ms:6000, fn:function() { switchTab('planTab'); } } : null;
}

function renderChanges() {
  var el = document.getElementById('changes');
  if (!el) return;
  if (!lastChange || !lastChange.lines.length) { el.innerHTML = ''; return; }
  var canUndo = lastChange.undo && stateSig() === lastChange.sig;
  el.innerHTML = '<div class="change-card"><div class="ch-head"><strong>' + esc(lastChange.title || 'What changed') + '</strong>' +
      (lastChange.why ? '<span>Because ' + esc(lastChange.why) + ':</span>' : '') + '</div>' +
    '<ul class="ch-list">' + lastChange.lines.map(function(l) { return '<li>' + esc(l) + '</li>'; }).join('') + '</ul>' +
    '<div class="ch-acts">' +
      (canUndo ? '<button class="btn ghost small" onclick="undoLastChange()">Undo</button>' : '') +
      '<button class="btn primary small" onclick="dismissChanges()">Got it</button>' +
    '</div></div>';
}
function undoLastChange() { if (lastChange && lastChange.undo) undoTo(lastChange.undo, lastChange.sig); }
function dismissChanges() {
  lastChange = null;
  plan.forEach(function(e) { if (e) delete e.changed; });
  renderAll();
}
// The line under a changed meal's name, until Ren opens it.
function changedLine(ch) {
  return (ch.from ? 'Was ' + ch.from + '. ' : '') + 'Changed because ' + ch.why + '.';
}

// ═══════════════ WHAT TO PICK UP (feedback 6B) ═══════════════
// The promise only held for a stocked kitchen: with 13 everyday foods a first-timer could cook no
// lunch or dinner, and the banner ended "shop for the gap" with no list. This is the list, in two
// parts: what the plan on screen is short of, meal by meal; and the few foods that would make the
// most other recipes cookable with what's already in the kitchen ("Buy these, unlock those").
// Both come from the recipes and the kitchen record only. Nothing is ordered or sent anywhere.

// What the current plan is short of, one row per food, with the meals that need it.
function planShortList() {
  var n = planNeeds(), rows = {}, order = [];
  function add(name, idx, detail) {
    if (!rows[name]) { rows[name] = { name:name, meals:[], detail:'' }; order.push(name); }
    var m = slotName(+idx, true);
    if (rows[name].meals.indexOf(m) === -1) rows[name].meals.push(m);
    if (detail && !rows[name].detail) rows[name].detail = detail;
  }
  var shortBy = {};
  n.short.forEach(function(s) {
    var more = s.need - s.have;
    if (more > 0) shortBy[s.name] = 'about ' + kitchenQty(more, s.unit) + ' more';
  });
  Object.keys(n.byIdx).sort(function(a, b) { return a - b; }).forEach(function(idx) {
    var v = n.byIdx[idx];
    v.missing.forEach(function(name) { add(name, idx, ''); });
    v.short.forEach(function(name) { add(name, idx, shortBy[name] || 'more than you have'); });
    v.stale.forEach(function(name) { add(name, idx, 'yours will be past its window by then'); });
  });
  return order.map(function(k) { return rows[k]; });
}

// The foods that would make the most recipes cookable, one at a time, each counted on top of the
// ones before it. Only recipes this household could be offered count (its meals, its dietary
// settings, nothing marked "Not for us"), with stand-ins and staples as the plan reads them.
// Presence only: it doesn't know how much to buy, and says so.
// The foods the plan on screen is missing outright, by id: the unlock list counts on top of them,
// since they're on the list already.
function planMissingIds() {
  var ids = [];
  plan.forEach(function(e) {
    if (!activeEntry(e)) return;
    visibleLines(recipeById(e.recipe)).forEach(function(l) {
      if (l.optional) return;
      if (l.all) { l.all.forEach(function(id) { if (!onHand(id) && ids.indexOf(id) === -1) ids.push(id); }); return; }
      if (!lineIds(l).some(onHand) && ids.indexOf(lineIds(l)[0]) === -1) ids.push(lineIds(l)[0]);
    });
  });
  return ids;
}
function unlockSuggestions(max, already) {
  var types = MEAL_TYPES.filter(mealOn), gapsBy = [];
  already = already || [];
  recipes.forEach(function(r) {
    if (types.indexOf(r.type) === -1 || !eligible(r, r.type)) return;
    var gaps = [];
    visibleLines(r).forEach(function(l) {
      if (l.optional) return;
      if (l.all) { l.all.forEach(function(id) { if (!onHand(id)) gaps.push([id]); }); return; }
      if (!lineIds(l).some(onHand)) gaps.push(lineIds(l));
    });
    // Already on the list above, or cookable as soon as it's bought: not "more".
    var open = gaps.filter(function(gap) { return !gap.some(function(id) { return already.indexOf(id) > -1; }); });
    if (open.length && gaps.length <= max + already.length) gapsBy.push({ r:r, gaps:gaps });
  });
  var buyable = function(id) { var i = ingById(id); return !!i && !i.extra && !assumedStaple(id) && !dietRuleFor(id); };
  var picked = already.slice(), out = [];
  for (var k = 0; k < max; k++) {
    var unlocks = {};
    gapsBy.forEach(function(g) {
      if (g.done) return;
      var open = g.gaps.filter(function(gap) { return !gap.some(function(id) { return picked.indexOf(id) > -1; }); });
      if (open.length !== 1) return;            // one more food has to finish it
      open[0].filter(buyable).forEach(function(id) { (unlocks[id] = unlocks[id] || []).push(g); });
    });
    var best = null;
    Object.keys(unlocks).forEach(function(id) {
      if (!best || unlocks[id].length > unlocks[best].length ||
          (unlocks[id].length === unlocks[best].length && (ING_USE[id] || 0) > (ING_USE[best] || 0))) best = id;
    });
    if (!best) break;
    picked.push(best);
    unlocks[best].forEach(function(g) { g.done = true; });
    out.push({ id:best, recipes:unlocks[best].map(function(g) { return g.r; }) });
  }
  return out;
}

var shopCache = null;   // what the screen shows, kept for Copy list
function shopHTML() {
  var need = planShortList(), more = unlockSuggestions(5, planMissingIds());
  shopCache = { need:need, more:more };
  var html = '<p class="sub-intro">A short list, so the plan works with what you have. Only foods our recipes use. ' +
    'Nothing is ordered or sent anywhere.</p>';
  html += '<div class="section-label">For this plan</div>';
  html += need.length ? '<div class="w-list">' + need.map(function(x) {
      return '<div class="shop-row"><b>' + esc(x.name) + '</b><span>' + esc((x.detail ? x.detail + ' · ' : '') + 'for ' + listOf(x.meals, 3)) + '</span></div>';
    }).join('') + '</div>'
    : '<div class="note-card" style="margin-top:0;">Nothing. Every meal still to cook is covered' +
      (planNeeds().check.length ? ', apart from amounts to check on the meals.' : '.') + '</div>';
  html += '<div class="section-label">To unlock more meals</div>';
  html += more.length ? '<div class="w-list">' + more.map(function(x, i) {
      var names = x.recipes.map(function(r) { return r.name; });
      return '<div class="shop-row"><b>' + (i ? '+ ' : '') + esc(ingName(x.id)) + '</b><span>' + x.recipes.length + ' more ' +
        (x.recipes.length === 1 ? 'recipe' : 'recipes') + ' you could cook: ' + esc(listOf(names, 2)) + '</span></div>';
    }).join('') + '</div>' +
    '<p class="field-hint">Counted on top of everything above it, one food at a time, from the recipes that fit your settings. ' +
      'It goes by what you have, not how much, so buy enough for the meal. Then tap Re-plan on the Plan tab.</p>'
    : '<div class="note-card" style="margin-top:0;">No single food would make another recipe cookable yet. ' +
      'Adding more of what you usually buy is the quickest way to more meals.</div>';
  if (need.length || more.length) {
    html += '<div class="actions"><button class="btn primary" onclick="copyShopList()">Copy list</button></div>';
  }
  return html;
}
function copyShopList() {
  if (!shopCache) return;
  var t = 'What the Fridge: to pick up\n';
  if (shopCache.need.length) t += '\nFor this plan:\n' + shopCache.need.map(function(x) { return '- ' + x.name + (x.detail ? ' (' + x.detail + ')' : ''); }).join('\n') + '\n';
  if (shopCache.more.length) t += '\nTo unlock more meals:\n' + shopCache.more.map(function(x) { return '- ' + ingName(x.id); }).join('\n') + '\n';
  var done = function() { showToast('Copied. Paste it into a note or a message.'); };
  try {
    navigator.clipboard.writeText(t).then(done, function() { showToast('Couldn’t copy here. Select the list and copy it instead.'); });
  } catch (e) { showToast('Couldn’t copy here. Select the list and copy it instead.'); }
}

// ═══════════════ ACCEPT / SWAP / SKIP ═══════════════
function acceptMeal(idx, confirmed) {
  var entry = plan[idx];
  if (entry.leftover) { eatLeftovers(idx); return; }
  if (entry.status === 'accepted') return;
  var r = recipeById(entry.recipe);

  // The button used to say "Accept", which reads like agreeing to the plan, and on a future day's
  // meal it took that meal's food out of the pantry days early (T4). It now says "Cooked it", and
  // a meal that isn't today's asks first, since cooking ahead is possible but rarely what's meant.
  var day = Math.floor(idx / 3);
  if (day > 0 && !confirmed) {
    showToast(dayLabel(day) + '’s ' + MEAL_TYPES[idx % 3] + ' isn’t until ' + (day === 1 ? 'tomorrow' : dayLabel(day)) +
      '. Cooked it already? Its ingredients come out of your pantry now.',
      { label:'Yes, cooked', ms:8000, fn:function() { acceptMeal(idx, true); } });
    return;
  }

  var used = deductRecipe(r);
  entry.taken = used.taken;
  entry.unmeasured = unmeasuredIn(r);
  entry.status = 'accepted';
  entry.cookedOn = todayKey();
  // Crossing a milestone used to happen in silence — Ren only found out if she happened to open
  // Profile later. The reaction belongs at the moment she earns it, which is here. The number is
  // already computed for the log; it just was never said out loud.
  var beforeTotal = cookLog.reduce(function(s, c) { return s + (c.rescued || 0); }, 0);
  cookLog.push({ date:entry.cookedOn, recipe:r.id, rescued:used.rescued });
  var afterTotal = beforeTotal + (used.rescued || 0);
  var crossed = null;                     // the highest rung this meal passed, if any
  rescueSteps(afterTotal).forEach(function(s) {
    if (beforeTotal < s && afterTotal >= s) { crossed = s; }
  });

  closeDetail();
  renderAll();
  var undoIdx = idx;
  var base = entry.unmeasured.length
    ? '✅ Cooked. ' + entry.unmeasured.join(', ') + ' — check amount in Pantry.'
    : '✅ Cooked — ingredients deducted.';
  if (crossed) {
    base = (crossed === 1 ? '🥬 First rescue! ' : '🥬 That’s ' + crossed + ' rescued! ') +
      (used.rescued === 1 ? 'One ingredient' : used.rescued + ' ingredients') + ' used in the last days of ' +
      (used.rescued === 1 ? 'its' : 'their') + ' window.';
  }
  showToast(base, { label:'Undo', fn:function(){ undoAccept(undoIdx); } });
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

// Skipping a dinner used to rewrite the next day's leftovers lunch with no word (feedback 1). The
// receipt now names it, and Undo puts both back.
function skipMeal(idx) {
  closeDetail();
  var res = track('you skipped ' + slotName(idx, true), function() { plan[idx].status = 'skipped'; }, { acted:idx });
  showToast('Skipped — nothing deducted.' + changeCount(res), { label:'Undo', fn:res.undo });
}
function unskip(idx) {
  closeDetail();
  var res = track('you put ' + slotName(idx, true) + ' back', function() { plan[idx].status = 'pending'; }, { acted:idx });
  showToast('Back on the plan.' + changeCount(res));
}

// Swap: the best other recipe of the same meal type for what's in the kitchen, after what the
// rest of the plan sets aside. Dietary restrictions and "not for us" are hard filters.
// Alternatives already offered for this slot are excluded alongside the rest of the plan, so Swap
// keeps moving through the pool instead of bouncing between the same two recipes. `tried` is
// cleared whenever the planner sets the slot, and reset once the pool runs out (see swapMeal).
function bestAlternative(idx, current) {
  var entry = plan[idx], day = Math.floor(idx / 3);
  var others = plan.map(function(e, i) { return i === idx ? null : e.recipe; }).filter(Boolean);

  var pick = pickRecipe(current.type, day, reservationsExcept(idx),
    others.concat((entry.tried || []).concat([current.id])));
  if (pick && pick.id !== current.id) return pick;

  // Everything this slot has been offered is used up. Clear the list and start the rotation
  // again rather than dead-ending on "nothing else fits" when alternatives do exist.
  if ((entry.tried || []).length) {
    entry.tried = [];
    pick = pickRecipe(current.type, day, reservationsExcept(idx), others.concat([current.id]));
    if (pick && pick.id !== current.id) return pick;
  }
  return null;                     // the pool really does hold nothing else for this slot
}

// Returns { r: the recipe swapped in, undo }, or null. `why` is given when the swap comes from
// somewhere else (a "Not for us"), so the receipt says so and the caller writes the toast.
function swapMeal(idx, why, pre) {
  var entry = plan[idx];
  if (entry.leftover) { cookLunchInstead(idx); return null; }
  var current = recipeById(entry.recipe);
  var pick = bestAlternative(idx, current);

  if (!pick) {
    showToast('No other ' + current.type + ' in our recipes fits your settings.');
    return null;
  }

  closeDetail();
  var res = track(why || 'you swapped ' + slotName(idx, true), function() {
    if (pre) pre();
    // Remember what this slot has shown, so the next Swap moves on. bestAlternative() clears the
    // list itself when the pool runs out, so this only ever grows within one rotation.
    entry.tried = (entry.tried || []).concat([current.id]);
    entry.recipe = pick.id;
    entry.status = 'pending';
    entry.chosen = true;                 // Ren picked this one; see planAround()
    delete entry.dietBlocked;
  }, { acted:idx });
  // The reason stays on the card and in the detail view, where Ren can read it at her own pace.
  // Swap now has an Undo: one curious tap used to lose a meal Ren liked, with no way back to it.
  if (!why) showToast('Swapped to ' + pick.name + '.' + changeCount(res), { label:'Undo', fn:res.undo });
  return { r:pick, undo:res.undo };
}

// Applied whenever a dietary preference changes. Any pending meal that breaks a restriction is
// replaced with the best compliant one. Meals already marked cooked are left alone: the food is
// eaten, and rewriting history would be dishonest. If nothing in the approved files fits, the
// slot is flagged rather than filled with something that breaks the restriction.
function enforceDiet() {
  var swapped = [], stuck = [];
  plan.forEach(function(entry, idx) {
    if (!isMealEntry(entry) || entry.status !== 'pending') return;   // leftovers follow their dinner
    var r = recipeById(entry.recipe);
    if (!violatesDiet(r) && !entry.dietBlocked) return;
    var others = plan.map(function(e, i) { return i === idx ? null : e.recipe; }).filter(Boolean);
    var pick = pickRecipe(r.type, Math.floor(idx / 3), reservationsExcept(idx), others);
    if (pick) {
      if (violatesDiet(r)) swapped.push(r.name + ' → ' + pick.name);
      entry.recipe = pick.id;
      delete entry.dietBlocked;
      delete entry.tried;          // the planner chose this slot again; Swap starts fresh
      delete entry.chosen;
    } else {
      entry.dietBlocked = true;
      stuck.push(r.type);
    }
  });
  planSig = kitchenSig();
  renderAll();
  return { swapped:swapped, stuck:stuck };
}

// Replaces any pending weekday meal over its time limit (a plan saved before the limits, or a day
// built while catching up) with the best one within it. Left alone when nothing quicker fits.
function enforceTimes() {
  var changed = 0;
  plan.forEach(function(entry, idx) {
    var day = Math.floor(idx / 3), r = isMealEntry(entry) ? recipeById(entry.recipe) : null;
    if (!r || entry.status !== 'pending' || entry.dietBlocked || fitsTime(r, day)) return;
    var others = plan.map(function(e, i) { return i === idx ? null : e.recipe; }).filter(Boolean);
    var pick = pickRecipe(r.type, day, reservationsExcept(idx), others);
    if (pick && fitsTime(pick, day)) { entry.recipe = pick.id; delete entry.tried; delete entry.chosen; changed++; }
  });
  return changed;
}
// ═══════════════ SETTINGS SUB-SCREENS ═══════════════
function openSub(which) {
  armBack();
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
      '<div class="note-card">Recipe amounts are scaled to this number. The scaled amounts are what the plan checks against ' +
      'your kitchen and what Cooked it takes out.</div>';
  }

  if (which === 'meals') {
    title = 'Meals & cooking';
    body = '<p class="sub-intro">Which meals to plan, whether you eat leftovers, and how long weekday cooking can take. Changes apply to the plan straight away; meals already cooked are left alone.</p>' +
      mealPrefsHTML('meals') + mealPrefsHTML('times');
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
    body = '<p class="sub-intro">Applied to the household, not a single meal. Turning one on swaps any planned meal that breaks it, ' +
      'and food it rules out is never used in a meal. Meals already cooked are left as they are.</p><div>' +
      d.map(function(x) {
        return '<div class="toggle-row"><div><div class="tr-name">' + x[1] + '</div><div class="tr-sub">' + x[2] + '</div></div>' +
          '<button class="switch' + (settings.dietary[x[0]] ? ' on' : '') + '"' + switchAttrs(settings.dietary[x[0]], x[1]) + ' onclick="toggleDiet(\'' + x[0] + '\')"></button></div>';
      }).join('') + '</div>' +
      '<p class="nutri-note" style="margin-top:12px;">' +
        (active.length ? 'Active: ' + active.join(', ') + '. ' : 'No restrictions set. ') +
        'Recipes that still fit: ' + fits + '.</p>' +
      '<div class="note-card"><b>Not for allergies.</b> These filters go by how each recipe is labelled. Nothing checks individual ' +
      'ingredients or package labels, so don\'t rely on them for an allergy.</div>';
  }

  if (which === 'shop') {
    title = 'What to pick up';
    body = shopHTML();
  }

  // Staples (feedback 6D). The recipes assume 36 staples are always in the kitchen, so a dish that
  // needs butter never said so to a household without any. Each is now the household's to switch
  // off; one that's off is planned around like any other food, and can be added to the pantry.
  if (which === 'staples') {
    title = 'Staples you keep';
    var off = Object.keys(settings.noStaples || {}).length;
    body = '<p class="sub-intro">Recipes assume these are always in your kitchen, so they never show up as missing. ' +
      'Switch off anything you don\'t keep: the plan then treats it like any other food, and you can add it to your pantry.</p>' +
      (off ? '<p class="nutri-note" style="margin-top:0;">' + off + ' switched off.</p>' : '') +
      STAPLE_GROUPS.map(function(g) {
        var ids = g[1].filter(function(id) { var i = ingById(id); return i && i.staple; });
        if (!ids.length) return '';
        return '<div class="field-label">' + g[0] + '</div><div>' + ids.map(function(id) {
          var keep = !settings.noStaples[id];
          return '<div class="toggle-row"><div class="tr-name">' + esc(ingName(id)) + '</div>' +
            '<button class="switch' + (keep ? ' on' : '') + '"' + switchAttrs(keep, ingName(id)) + ' onclick="toggleStaple(\'' + id + '\')"></button></div>';
        }).join('') + '</div>';
      }).join('');
  }

  // The switches that used to be here did nothing: no reminder was ever sent. A setting that looks
  // finished and changes nothing teaches people not to trust the ones that work, so this screen
  // now says plainly what happens instead.
  if (which === 'about') {
    title = 'About What the Fridge';
    body =
      '<div style="text-align:center;margin:var(--s8) 0;"><img src="logo-setup-t.webp" alt="What the Fridge" style="height:120px;width:auto;"></div>' +
      // The mission says why; How it works says what. A sentence between them ("plans three days
      // of breakfast, lunch and dinner… so nothing expires forgotten") repeated both, was wrong
      // when meals are switched off or lunch is leftovers, and promised an outcome the app can't
      // guarantee: it decides what to use first, not whether food goes off. Its one fact, the
      // three-day horizon, is now in How it works.
      MISSION_HTML +
      '<div class="note-card" style="margin-top:var(--s6);">' +
        '<strong>How it works</strong><br>' +
        'Add your groceries to the Pantry: type them in, or snap a receipt or your shelves. The planner fills today and ' +
        'the next two days with the meals you\'ve chosen in Meals &amp; cooking, from our ' + recipes.length + ' recipes, ' +
        'putting food closest to the end of its estimated window first. Mark a meal cooked and its ingredients come out of the pantry.' +
        // Moved here from the Reminders screen, which existed only to say there were no
        // reminders. This is the one part of it that described something the app does.
        ' If a day passes with a meal you didn\'t mark, the app asks what happened next time you open it, ' +
        'and nothing comes out of the pantry until you answer.' +
      '</div>' +
      '<div class="note-card" style="margin-top:var(--s4);">' +
        '<strong>Privacy</strong><br>' +
        'Your food, plan and settings are saved in this browser. If you sign in (Settings &rsaquo; Account), they are also saved ' +
        'to your account with Supabase in Canada, so you can use them on other devices; only you can see them, and you can delete ' +
        'your account and everything in it there. When you scan a receipt or photograph your shelves, the photo is sent to ' +
        'Claude (by Anthropic) to read it, and isn\'t stored by the app.' +
      '</div>' +
      // Testing tools live behind a switch here rather than in the Profile menu, where "Simulate
      // midnight" sat beside the household's real settings.
      '<div class="toggle-row" style="margin-top:var(--s8);border-radius:var(--r);"><div><div class="tr-name">Testing tools</div>' +
        '<div class="tr-sub">Adds Simulate midnight to Settings, to try the next day without waiting for it.</div></div>' +
        '<button class="switch' + (settings.testTools ? ' on' : '') + '"' + switchAttrs(!!settings.testTools, 'Testing tools') +
          ' onclick="settings.testTools=!settings.testTools;renderAll();openSub(\'about\')"></button></div>' +
      '<div style="margin-top:var(--s8);color:var(--ink-soft);font-size:13px;line-height:1.5;text-align:center;">' +
        'BUS 860 · Group 3<br>University of Alberta' +
        '<br><br>Version ' + APP_VERSION +
      '</div>';
  }

  if (which === 'account') {
    title = 'Account';
    body = typeof accountScreenHTML === 'function' ? accountScreenHTML() : '';
  }

  if (which === 'feedback') {
    title = 'Send feedback';
    body =
      '<p class="sub-intro">Help us improve What the Fridge! Your feedback goes directly to the development team.</p>' +
      '<div class="note-card" style="margin-bottom:var(--s6);">' +
        '<strong>Quick feedback</strong><br>' +
        'Tap the button below to open our short survey. It takes about 2 minutes and covers ease of use, meal planning, and feature requests.' +
      '</div>' +
      '<a class="btn primary" href="https://forms.gle/qspYBKgNkMjJNLwv8" target="_blank" rel="noopener" ' +
        'style="display:inline-flex;align-items:center;gap:6px;text-decoration:none;justify-content:center;width:100%;">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;flex-shrink:0;">' +
          '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>' +
        '</svg>' +
        'Open feedback survey' +
      '</a>' +
      '<div class="note-card" style="margin-top:var(--s6);">' +
        '<strong>What we\'re looking for</strong><br>' +
        '&bull; How easy is it to add food and plan meals?<br>' +
        '&bull; Are the recipe suggestions useful?<br>' +
        '&bull; What features would you add?<br>' +
        '&bull; Any bugs or confusing screens?' +
      '</div>';
  }

  if (which === 'receipt') {
    title = 'Upload receipt';
    body =
      '<p class="sub-intro">Take a photo of your grocery receipt or choose one from your camera roll. ' +
        'Claude reads it and suggests items to add to your pantry; you check each one first. ' +
        'Only the photo is sent, to read it.</p>' +
      '<div class="receipt-upload-area" id="receiptUploadArea">' +
        '<label class="receipt-label" for="receiptFile">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="var(--leaf)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" style="width:48px;height:48px;margin-bottom:8px;">' +
            '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>' +
          '</svg>' +
          '<span>Tap to take a photo<br>or choose from camera roll</span>' +
        '</label>' +
        '<input type="file" id="receiptFile" accept="image/*" style="display:none;" onchange="handleReceiptFile(this)">' +
      '</div>' +
      '<div id="receiptStatus" style="display:none;"></div>' +
      '<div id="receiptResults" style="display:none;"></div>';
  }

  if (which === 'shelves') {
    title = 'Snap your shelves';
    body =
      '<p class="sub-intro">Take one photo of each place you keep food. Claude lists the food it can ' +
        'clearly see, and you check every item before it\'s added. Only the photo is sent, to read it; ' +
        'it isn\'t stored.</p>' +
      '<div class="shelf-areas" id="shelfAreas">' + shelfAreasHTML() + '</div>' +
      '<p class="field-hint">For the best list, open the door wide, step back so a whole shelf fits, ' +
        'and use good light. Food behind other food or in closed containers won\'t be seen, so add those after.</p>' +
      '<div id="receiptStatus" style="display:none;"></div>' +
      '<div id="receiptResults" style="display:none;"></div>';
  }

  document.getElementById('subBackLabel').textContent = (which === 'receipt' || which === 'shelves') ? receiptBack
    : which === 'shop' ? (currentTab === 'pantryTab' ? 'Pantry' : 'Plan') : 'Settings';
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
// A new household size changes how much every meal needs, so the plan's cover can change though no
// meal does: 5 to 8 took the sample plan from 1 gap to 7 with only "Household of 8 saved." The
// receipt now says so (feedback 1). Steps in a row merge into one receipt, from the size before.
function setHousehold(delta) {
  var n = Math.min(8, Math.max(1, settings.household + delta));
  if (n === settings.household) return;
  var res = track('your household is now ' + n, function() { settings.household = n; }, { kind:'household' });
  openSub('household');
  showToast('Household of ' + n + ' saved.' + changeCount(res), seePlanAction(res));
}
// Water is the one staple not offered: nobody runs out of it.
var STAPLE_GROUPS = [
  ['Oils and fats', ['olive-oil', 'vegetable-oil', 'coconut-oil', 'sesame-oil', 'butter']],
  ['Fresh', ['garlic', 'ginger']],
  ['Spices and dried herbs', ['salt', 'black-pepper', 'garlic-powder', 'onion-powder', 'paprika', 'chili-powder', 'cumin',
                              'cinnamon', 'red-pepper-flakes', 'oregano', 'thyme', 'italian-seasoning']],
  ['Sauces and vinegars', ['soy-sauce', 'hot-sauce', 'dijon', 'white-vinegar', 'red-wine-vinegar', 'rice-vinegar', 'balsamic-glaze']],
  ['Baking and sweet', ['flour', 'sugar', 'brown-sugar', 'honey', 'maple-syrup', 'baking-powder', 'baking-soda', 'cornstarch', 'vanilla']]
];
function toggleStaple(id) {
  var keep = !!settings.noStaples[id], name = ingName(id).toLowerCase();
  var res = track(keep ? 'you keep ' + name + ' again' : 'you don’t keep ' + name, function() {
    var ns = {};
    for (var k in settings.noStaples) ns[k] = settings.noStaples[k];
    if (keep) delete ns[id]; else ns[id] = true;
    settings.noStaples = ns;              // a new object, so syncStaples re-reads every recipe
    syncStaples();
  }, { kind:'staples', mergedWhy:'you changed which staples you keep' });
  openSub('staples');
  showToast((keep ? 'Assuming you have ' : 'No longer assuming you have ') + name + '.' + changeCount(res), seePlanAction(res));
}
function toggleDiet(key) {
  var result = null, label = DIET_RULES[key].label, on = !settings.dietary[key];
  var now = Object.keys(DIET_RULES).filter(function(k) { return k === key ? on : settings.dietary[k]; })
    .map(function(k) { return DIET_RULES[k].label; });
  // The meals swapped, by name, are in the receipt: the toast used to give only a count. Toggles
  // in a row share one receipt, so its reason names every setting now on.
  var res = track('you changed your dietary settings (now ' + (now.length ? now.join(' + ') : 'none') + ')', function() {
    settings.dietary[key] = on;
    result = enforceDiet();
  }, { kind:'diet' });
  openSub('dietary');
  if (result.stuck.length) {
    showToast('⚠ No ' + listOf(result.stuck, 3) + ' in our recipes fits — see What changed.', seePlanAction(res));
  } else {
    showToast(label + (on ? ' on.' : ' off.') + (changeCount(res) || (on ? ' Your plan already fits.' : '')), seePlanAction(res));
  }
}

// ═══════════════ TABS / TOAST / ALLOCATION ═══════════════
// ═══════════════ GOING BACK ═══════════════
// The browser's Back button left the site instead of returning to the previous screen, and a
// home-screen install has no browser Back at all. Now:
//   - goBack() steps back one screen: the open sheet, meal, settings page or search first, then
//     the previous tab, then the previous setup step;
//   - each tab shows a Back button (top left) whenever there's a previous tab to return to;
//   - the browser's or phone's Back does the same, and only leaves the site once there's nowhere
//     left to go back to inside the app.
var tabHistory = [];      // tabs left behind, most recent last
var goingBack = false;
var TAB_NAMES = { planTab:'Plan', pantryTab:'Pantry', profileTab:'Settings' };

function setupOpen() { return document.getElementById('setup').classList.contains('open'); }
function canGoBack() {
  if (setupOpen()) return setupStep > 1;
  return document.getElementById('wasteReasons').style.display !== 'none' ||
    document.getElementById('addSheet').classList.contains('open') ||
    document.getElementById('detailOverlay').classList.contains('open') ||
    document.getElementById('subScreen').classList.contains('open') ||
    document.getElementById('pantrySearchBar').style.display !== 'none' ||
    tabHistory.length > 0;
}
function goBack() {
  if (setupOpen()) { if (setupStep > 1) { setupStep--; renderSetup(); } return; }
  if (document.getElementById('wasteReasons').style.display !== 'none') { closeWasteReasons(); return; }
  if (document.getElementById('addSheet').classList.contains('open')) { closeAddSheet(); return; }
  if (document.getElementById('detailOverlay').classList.contains('open')) { closeDetail(); return; }
  if (document.getElementById('subScreen').classList.contains('open')) { closeSub(); return; }
  if (document.getElementById('pantrySearchBar').style.display !== 'none') { closePantrySearch(); return; }
  if (tabHistory.length) {
    goingBack = true;
    switchTab(tabHistory.pop());
    goingBack = false;
  }
}
function renderBackBar() {
  var bar = document.getElementById('backBar');
  if (!bar) return;
  var to = tabHistory[tabHistory.length - 1];
  bar.style.display = to ? '' : 'none';
  if (to) document.getElementById('backBarLabel').textContent = TAB_NAMES[to] || 'Back';
}
// The browser's Back. One extra history entry ("app") sits on top of the page's own ("base"), so
// Back lands on "base" instead of leaving. If there's somewhere to go back to in the app, it goes
// there and the "app" entry is put back; if not, it carries on out of the site, as Back meant.
(function() {
  if (!window.history || !history.pushState) return;
  // A reload keeps the entries it already has, so they're only added on a fresh visit.
  if (!(history.state && history.state.wtf)) {
    history.replaceState({ wtf:'base' }, '');
    history.pushState({ wtf:'app' }, '');
  }
  window.addEventListener('popstate', function(e) {
    if (!e.state || e.state.wtf !== 'base') return;
    if (canGoBack()) { goBack(); history.pushState({ wtf:'app' }, ''); }
    else { history.back(); }
  });
})();
// When there was nowhere to leave to (the app opened in a fresh tab), Back stays on "base". Put the
// "app" entry back as soon as Ren moves to another screen, so the next Back is caught again.
function armBack() {
  if (window.history && history.pushState && history.state && history.state.wtf === 'base') history.pushState({ wtf:'app' }, '');
}

function switchTab(tabId) {
  armBack();
  if (!goingBack && currentTab !== tabId) {
    tabHistory.push(currentTab);
    if (tabHistory.length > 20) tabHistory.shift();
  }
  document.querySelectorAll('.tab-content').forEach(function(c) { c.classList.remove('active'); });
  document.querySelectorAll('.tabs .tab').forEach(function(t) { t.classList.remove('active'); });
  document.getElementById(tabId).classList.add('active');
  document.querySelector('[data-tab="' + tabId + '"]').classList.add('active');
  currentTab = tabId;
  document.getElementById('fab').style.display = (tabId === 'profileTab') ? 'none' : 'flex';
  document.getElementById('mainView').scrollTop = 0;
  closeDetail();
  closeSub();
  closePantrySearch();
  renderBackBar();
}

function showToast(msg, action) {
  var toast = document.getElementById('toast');
  toast.innerHTML = '';
  var span = document.createElement('span');
  span.textContent = msg;
  toast.appendChild(span);
  if (action) {
    var btn = document.createElement('button');
    btn.className = 'toast-action';
    btn.textContent = action.label;
    btn.onclick = function(e) { e.stopPropagation(); clearTimeout(toast._t); toast.classList.remove('show'); action.fn(); };
    toast.appendChild(btn);
  }
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(function() { toast.classList.remove('show'); }, (action && action.ms) || (action ? 5000 : 2600));
}

// ═══════════════ UNCONFIRMED MEALS ═══════════════
// A meal that leaves the horizon still 'pending' is ambiguous, not resolved: it may
// have been cooked and never logged, or never cooked at all. Those have opposite
// inventory consequences, so the roll carries the question forward instead of
// guessing. Nothing is deducted until Ren answers.
// See knowledge/skills/day-roll-reconciliation/SKILL.md.
function queueUnreconciled(entry, type, day) {
  // Leftovers and unplanned meals have nothing of their own to deduct, so there's nothing to ask.
  if (!isMealEntry(entry) || entry.status !== 'pending' || entry.dietBlocked) { return; }
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

// The plan for today was built before yesterday was settled, so a late "Cooked it" could take food
// today's meals had set aside, and nothing said so (feedback 5). Now the answer is settled first and
// the plan is fitted around it: any meal still to cook that the answer left short is replaced, if a
// covered alternative exists, and the receipt names it. Meals Ren chose herself are left for her to
// decide; the banner and the card say what they're short of.
function gapCount(v) { return v ? v.missing.length + v.short.length + v.stale.length : 0; }
function reconcile(i, outcome) {
  var u = unreconciled[i];
  if (!u) { return; }
  var r = recipeById(u.recipe), name = r ? r.name : 'that meal';
  var why = outcome === 'cooked' ? 'you cooked ' + name + ' on ' + u.label : 'you didn’t cook ' + name + ' on ' + u.label;
  var res = track(why, function() { settleAnswer(u, i, outcome, r); });
  showToast((outcome === 'cooked' ? '✅ Logged — ingredients deducted from your pantry.' : 'Logged — nothing deducted.') + changeCount(res),
    { label:'Undo', fn:res.undo });
}
function settleAnswer(u, i, outcome, r) {
  if (outcome === 'cooked' && r) {
    var before = planNeeds().byIdx;
    var used = deductRecipe(r);
    cookLog.push({ date:u.date || todayKey(), recipe:r.id, rescued:used.rescued });
    var after = planNeeds().byIdx;
    plan.forEach(function(e, idx) {
      if (!activeEntry(e) || e.chosen || gapCount(after[idx]) <= gapCount(before[idx])) return;
      var day = Math.floor(idx / 3), reserved = reservationsExcept(idx);
      var others = plan.map(function(x, j) { return j === idx || !isMealEntry(x) ? null : x.recipe; }).filter(Boolean);
      var pick = pickRecipe(MEAL_TYPES[idx % 3], day, reserved, others.concat([e.recipe]));
      if (pick && fullyCovered(pick, reserved, day)) { e.recipe = pick.id; delete e.tried; }
    });
  }
  // Last night's dinner didn't happen, so there are no leftovers for today's lunch: drop the note,
  // and the lunch gets a meal of its own (syncPlanShape, run by track).
  if (outcome !== 'cooked' && lastNight && u.type === 'dinner' && u.recipe === lastNight.recipe && u.date === lastNight.date) {
    lastNight = null;
  }
  unreconciled.splice(i, 1);
}

// ═══════════════ ROLLING DAYS ═══════════════
// Always today plus the next two. At midnight the first day drops off and a new
// third day is built from the approved files.
// `recap` (optional) tallies what happened to the departing day's meals, for the day summary.
function rollDay(departingDate, recap) {
  // Reconcile before dropping. A meal still 'pending' at midnight is queued as a
  // question rather than silently discarded — dropping it would leave its
  // ingredients in the pantry after they were eaten, drifting inventory in the
  // optimistic direction one day at a time.
  // departingDate is passed when catching up on days the app was closed.
  var departing = departingDate || dateFor(0);
  var gone = [];
  plan.slice(0, 3).forEach(function(entry, i) {
    if (recap && isMealEntry(entry)) {
      if (entry.status === 'accepted') recap.cooked++;
      else if (entry.status === 'skipped') recap.skipped++;
      else if (!entry.dietBlocked) recap.toConfirm++;
    }
    if (isMealEntry(entry)) gone.push(entry.recipe);
    queueUnreconciled(entry, MEAL_TYPES[i], departing);
  });
  // Keep a note of the departing dinner so today's lunch can still be its leftovers. A dinner that
  // was never confirmed stays usable until Ren answers the rolled-past question (see reconcile()).
  var dinner = plan[2];
  lastNight = usableDinner(dinner) ? { recipe:dinner.recipe, status:dinner.status, date:todayKey(departing) } : null;
  plan.splice(0, 3);
  // The new third day is planned around what the two days already shown set aside. Those two
  // days are left as they are: changing meals someone has already seen, overnight, would surprise.
  var res = reservationsExcept(-1);
  // Yesterday's meals and any still waiting on "did you cook it?" are kept off the new day: the same
  // meal used to sit in the question and on the new plan at once (feedback 5).
  var used = plan.filter(isMealEntry).map(function(e){ return e.recipe; })
    .concat(gone, unreconciled.map(function(u) { return u.recipe; }));
  MEAL_TYPES.forEach(function(type) {
    if (!mealOn(type)) { plan.push({ off:true, status:'off' }); return; }
    if (type === 'lunch' && leftoversOn() && usableDinner(plan[5])) {     // yesterday's (day 2's) dinner
      plan.push({ leftover:true, recipe:plan[5].recipe, status:'pending' });
      return;
    }
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

// ─── the day summary ───
// The day used to open with one toast, "New day — the plan rolled forward", or with nothing at all,
// so each morning Ren had to work out what had happened overnight (feedback 5). Now it opens with a
// summary in the What changed card: how yesterday went, what still needs an answer (the questions
// sit right below it), the day that was added, and any meal changed to fit a weekday limit.
function newRecap() { return { cooked:0, skipped:0, toConfirm:0, days:0 }; }
function dayReceipt(recap, timeLines) {
  var parts = [];
  if (recap.cooked)    parts.push(recap.cooked + ' cooked');
  if (recap.skipped)   parts.push(recap.skipped + ' skipped');
  if (recap.toConfirm) parts.push(recap.toConfirm + ' to confirm below');
  var lines = [(recap.days > 1 ? 'The last ' + recap.days + ' days' : 'Yesterday') + ': ' + (parts.length ? parts.join(', ') : 'nothing logged') + '.'];
  var added = plan.slice(6, 9).filter(isMealEntry).map(function(e) { return recipeById(e.recipe).name; });
  if (added.length) lines.push(dayLabel(2) + '’s meals were added: ' + listOf(added, 3) + '.');
  lines = lines.concat(timeLines || []);
  lastChange = { title:'It’s ' + dateFor(0).toLocaleDateString(undefined, { weekday:'long' }), why:'', kind:'day', lines:lines, undo:null, sig:null };
}
// enforceTimes() with each replaced meal named, for the day summary.
function enforceTimesNamed() {
  var before = plan.map(entryLabel), lines = [];
  enforceTimes();
  plan.forEach(function(e, i) {
    var now = entryLabel(e);
    if (now && now !== before[i]) {
      lines.push(slotName(i) + ': ' + now + ' (was ' + before[i] + '), to fit your weekday ' + MEAL_TYPES[i % 3] + ' time');
      e.changed = { from:before[i], why:'it didn’t fit your weekday ' + MEAL_TYPES[i % 3] + ' time', kind:'day' };
    }
  });
  return lines;
}

function scheduleMidnight() {
  var now = new Date();
  var next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 2);
  setTimeout(function() {
    // The day summary waits on the Plan tab; whatever Ren has open at midnight is left alone.
    if (catchUp() > 0) { renderAll(); }
    scheduleMidnight();
  }, next - now);
}

// Testing tool (About > Testing tools, and the laptop footer). It rolls the plan but not the dates.
function simulateMidnight() {
  var recap = newRecap();
  recap.days = 1;
  rollDay(null, recap);
  dayReceipt(recap, []);
  switchTab('planTab');
  renderAll();
  showToast('Simulated midnight — the plan rolled forward a day.');
}

// ═══════════════ KEYBOARD AND SCREEN-READER ACCESS ═══════════════
// Most rows that act like buttons (Profile menu, pantry rows, Back, the photo buttons) are divs or
// labels with a click handler, so a keyboard couldn't reach them and a screen reader didn't say
// they could be pressed (T7). Each is given a button role and a tab stop as it appears, and Enter
// or Space presses it. Real <button>s already work and are left alone; the add-food backdrop only
// closes the sheet, so it isn't one.
function markClickables() {
  var els = document.querySelectorAll('[onclick]:not(button):not(a):not(input):not(select):not(textarea):not(.add-sheet-backdrop), ' +
    'label[for].add-option, label[for].shelf-area, label[for].receipt-label');
  for (var i = 0; i < els.length; i++) {
    var el = els[i];
    if (!el.hasAttribute('role')) el.setAttribute('role', 'button');
    if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0');
  }
}
document.addEventListener('keydown', function(e) {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  var el = e.target;
  if (!el || !el.getAttribute || el.getAttribute('role') !== 'button' || el.tagName === 'BUTTON') return;
  e.preventDefault();
  el.click();
});
if (window.MutationObserver) {
  new MutationObserver(markClickables).observe(document.body, { childList:true, subtree:true });
}
markClickables();

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
  syncStaples();
  syncPlanShape();
  renderGreeting();
  renderDaySelector();
  renderChanges();
  renderReconcile();
  renderBanner();
  renderDietStrip();
  renderMeals();
  renderPantry();
  renderProfile();
  var hh = document.getElementById('hhArrow');
  if (hh) { hh.innerHTML = settings.household + ' &rsaquo;'; }
  var ma = document.getElementById('mealsArrow');
  if (ma) { ma.innerHTML = esc(mealsSummary()) + (leftoversOn() ? ' · leftovers' : '') + ' &rsaquo;'; }
  var da = document.getElementById('dietArrow');
  if (da) {
    var n = activeDietLabels().length;
    da.innerHTML = (n ? n + ' active ' : '') + '&rsaquo;';
  }
  renderBackBar();
  var sa = document.getElementById('staplesArrow');
  if (sa) {
    var off = Object.keys(settings.noStaples || {}).length;
    sa.innerHTML = (off ? off + ' not kept ' : '') + '&rsaquo;';
  }
  var tt = document.getElementById('testTools');
  if (tt) { tt.style.display = settings.testTools ? '' : 'none'; }
  var ls = document.getElementById('leaveSampleRow');
  if (ls) { ls.style.display = settings.sample ? '' : 'none'; }
  saveState();
}

// ═══════════════ PROFILE ═══════════════
// Counted only from the user's own cook log, so nothing here is an estimate. There is no
// money figure: the app has no prices to base one on.
// Ingredients rescued inside a window, so the headline number stops being only cumulative. A
// running total of 340 and one of 360 feel identical; "34 in the last 30 days" still says
// something, and says it honestly on a quiet month too.
function rescuedIn(daysBack, offset) {
  var from = todayKey(addDays(new Date(), -(daysBack + (offset || 0))));
  var to   = todayKey(addDays(new Date(), -(offset || 0)));
  return cookLog.reduce(function(s, c) {
    return (c.date > from && c.date <= to) ? s + (c.rescued || 0) : s;
  }, 0);
}

// The best any 30-day stretch has ever managed, so "best yet" is a fact rather than a flourish.
function bestRescueWindow() {
  if (!cookLog.length) return 0;
  var ends = {}, best = 0;
  cookLog.forEach(function(c) { ends[c.date] = true; });
  Object.keys(ends).forEach(function(end) {
    var from = todayKey(addDays(parseKey(end), -30));
    var sum = cookLog.reduce(function(s, c) {
      return (c.date > from && c.date <= end) ? s + (c.rescued || 0) : s;
    }, 0);
    if (sum > best) best = sum;
  });
  return best;
}
function ladderHTML(value, steps, fmt, dates) {
  var next = null;
  var rungs = steps.map(function(s) {
    var cls = value >= s ? 'done' : (next === null ? (next = s, 'next') : '');
    var when = dates && dates[s] ? '<span class="rung-when">' + esc(fmtKey(dates[s])) + '</span>' : '';
    return '<div class="rung ' + cls + '">' + fmt(s) + when + '</div>';
  }).join('');
  return { rungs:rungs, next:next };
}

// ─── food-rescued milestones ───
// The ladder used to stop at 100 and say "Every milestone reached", which at a measured 4.4
// ingredients a cooked meal is about four and a half weeks in — the motivator went flat exactly
// when someone had proved they were sticking with it. Adding a few more rungs only moves that
// cliff, so past the fixed list it rolls on in steps of 250 and there is always a next one.
var RESCUE_STEPS = [1, 10, 25, 50, 100, 200, 350, 500];
var RESCUE_ROLL = 250;

function rescueSteps(value) {
  var steps = RESCUE_STEPS.slice(), last = steps[steps.length - 1];
  while (value >= last) { last += RESCUE_ROLL; steps.push(last); }
  return steps;
}

// A phone fits about five rungs. Early on that is the whole ladder; later it becomes a window
// that keeps the last couple reached in view alongside what is coming.
function ladderWindow(steps, value) {
  var nextIdx = steps.length - 1;
  for (var i = 0; i < steps.length; i++) { if (value < steps[i]) { nextIdx = i; break; } }
  var start = Math.max(0, Math.min(nextIdx - 2, steps.length - 5));
  return steps.slice(start, start + 5);
}

// When each milestone was passed, read back out of cookLog. No new field: every cooked meal
// already records its date and how many ingredients it used in time, so this works for logs
// written long before the ladder existed.
function milestoneDates(steps) {
  var out = {}, run = 0, i = 0;
  cookLog.slice().sort(function(a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : 0; })
    .forEach(function(c) {
      run += (c.rescued || 0);
      while (i < steps.length && run >= steps[i]) { out[steps[i]] = c.date; i++; }
    });
  return out;
}

function rescueStepLabel(s) { return s === 1 ? '1st' : s; }

// The dates on the rungs are facts; the pace between them is the part worth saying out loud.
// "Reached 50 on Oct 28" is a date. "25 to 50 took nine days, quicker than the fourteen before"
// is the same data telling Ren she is getting better at this.
//
// Only speaks when the gap narrowed. A slower stretch is not a failure worth a line about it —
// the dates are on the rungs either way, so nothing is being hidden, and a nudge that scolds is
// the thing this whole screen is meant not to be.
function rescuePace(steps, dates) {
  var hit = steps.filter(function(s) { return dates[s]; });
  if (hit.length < 3) return '';
  var a = hit[hit.length - 3], b = hit[hit.length - 2], c = hit[hit.length - 1];
  var dBefore = daysBetween(dates[a], dates[b]), dRecent = daysBetween(dates[b], dates[c]);
  if (dBefore <= 0 || dRecent <= 0) return '';
  // Compare rates, not elapsed days. The rungs get further apart as they climb — 50 to 100 is
  // twice the distance of 25 to 50 — so a stretch taking longer in days can still be faster
  // going. Comparing raw days would have called a genuine speed-up a slow-down.
  var before = (b - a) / dBefore, recent = (c - b) / dRecent;
  if (recent <= before) return '';
  return b + ' to ' + c + ' came faster than the stretch before it. You’re getting quicker at this.';
}
function renderProfile() {
  var head = document.getElementById('profileHead');
  if (!head) return;
  var since = settings.since ? parseKey(settings.since).toLocaleDateString(undefined, { month:'short', year:'numeric' }) : '';
  head.innerHTML =
    '<div class="profile-avatar">' + esc(settings.name ? settings.name.charAt(0).toUpperCase() : '🥕') + '</div>' +
    '<div class="profile-name">' + esc(settings.name || 'Your kitchen') + '</div>' +
    '<div class="profile-sub">Household of ' + settings.household + (since ? ' &middot; planning since ' + since : '') + '</div>';

  // The three stat tiles that sat here (meals cooked, days cooked this month, rescued) were
  // removed: two measured how often Ren cooks, which is not what the app is for, and the third
  // repeated the milestone card below it.
  var cooked = cookLog.length;
  var rescued = cookLog.reduce(function(s, c) { return s + (c.rescued || 0); }, 0);

  // The ledger line, now at the foot of the Food rescued card. Deliberately a ratio and not a
  // milestone ladder of its own: a count that only climbs is dispiriting, and the way to "win" a
  // low-waste badge is to stop logging. Logging a loss costs nothing here — it never reduces
  // `rescued`, because those ingredients really were used in time.
  var lost = wasteLog.length;
  var lost30 = wasteLog.filter(function(x) { return x.date > todayKey(addDays(new Date(), -30)); }).length;
  var ledger = !cooked && !lost ? '' :
    '<div class="profile-ledger">' +
      '<span class="led-good">' + rescued + ' rescued</span>' +
      '<span class="led-dot">·</span>' +
      '<span class="led-lost">' + lost + ' got away</span>' +
      (lost ? '<div class="led-hint">' + esc(wasteHint()) + '</div>' : '') +
    '</div>';
  // The breakdown that used to be its own Settings screen opens in place. Its open state lives in
  // wasteOpen so it stays open when the screen re-renders after an action.
  var wasteMore =
    '<button class="waste-toggle" aria-expanded="' + !!wasteOpen + '" aria-controls="wasteMore" onclick="toggleWaste()">' +
      '<span>' + (wasteOpen ? 'Hide where food is going' : 'See where food is going') +
        (lost30 && !wasteOpen ? ' <span class="wt-n">' + lost30 + ' this month</span>' : '') + '</span>' +
      '<span class="wt-arrow" aria-hidden="true">' + (wasteOpen ? '&#9652;' : '&#9662;') + '</span></button>' +
    (wasteOpen ? '<div class="waste-more" id="wasteMore">' + wasteInsightsHTML() + '</div>' : '');

  // One list of thresholds, derived once. It used to be written out three times — the ladder
  // call and two parallel arrays for the progress bar — so any change had to be made in all
  // three or the bar quietly disagreed with the rungs.
  var allSteps = rescueSteps(rescued);
  var rSteps = ladderWindow(allSteps, rescued);
  var rDates = milestoneDates(allSteps);
  var r = ladderHTML(rescued, rSteps, rescueStepLabel, rDates);

  var prevStep = function(steps, next) {
    var p = 0;
    for (var i = 0; i < steps.length; i++) { if (steps[i] === next) break; p = steps[i]; }
    return p;
  };
  var rPrev = prevStep(allSteps, r.next);
  var rPct = r.next === null ? 100 : Math.round((rescued - rPrev) / (r.next - rPrev) * 100);

  // A rescue is food used in the last two days of its window (RESCUE_DAYS), so the words say that.
  var rWit = !cooked ? 'Cook something from the plan and this counts every ingredient you use in the last two days of its window.'
    : !rescued ? 'Nothing rescued yet — use something in the last two days of its window to start the count.'
    : rescued < 10 ? rescued + ' ingredient' + (rescued === 1 ? '' : 's') + ' used with a day or two to spare. The crisper drawer thanks you.'
    : rescuePace(allSteps, rDates) ||
      'That\'s ' + rescued + ' things that didn\'t end up as a science experiment at the back of the fridge.';
  // The cumulative total stops carrying information somewhere past a few hundred — 340 and 360
  // feel the same. A 30-day window keeps saying something, including on a quiet month, which the
  // running total hides. "Best yet" is checked against every 30-day stretch in the log, so it is
  // a fact and not a flourish.
  var win30 = rescuedIn(30), prev30 = rescuedIn(30, 30), bestWin = bestRescueWindow();
  var windowLine = !rescued ? '' :
    '<div class="window-line"><b>' + win30 + '</b> in the last 30 days' +
      (prev30 ? ' &middot; ' + prev30 + ' the 30 before' : '') +
      (win30 >= bestWin && win30 > 0 && prev30 ? ' &middot; <span class="win-best">best yet</span>' : '') +
    '</div>';

  // One milestone, on purpose. A cooking-frequency badge measured how often Ren cooks, which is
  // not what the app is for; food rescued is the measure that matches the purpose stated on the
  // very first screen.
  document.getElementById('profileRewards').innerHTML =
    '<div class="section-label">Food rescued</div>' +
    '<div class="reward-card"><div class="reward-head"><div class="reward-icon coin">🥬</div><div>' +
      '<div class="t">' + (r.next === 1 ? 'Your first rescue' : 'Next milestone: ' + r.next + ' ingredients') + '</div>' +
      '<div class="s">' + (r.next === 1 ? 'Cook anything from the plan to start'
        : rescued + ' so far &middot; ' + (r.next - rescued) + ' to go') + '</div></div></div>' +
      '<div class="progress-track"><div class="progress-fill leaf" style="width:' + rPct + '%;"></div></div>' +
      '<div class="ladder">' + r.rungs + '</div>' + windowLine + '<p class="witty">' + rWit + '</p>' +
      ledger + wasteMore + '</div>';
}

// The mission, said once. The welcome screen and About both show it, and two hand-copied
// versions would drift the first time someone reworded one.
var MISSION_HTML = '<p class="setup-purpose"><span class="eyebrow">Our mission</span>WTF works to cut food waste by ' +
  'making the most of the food you already have, in delicious recipes that use what\'s closest to its date first.</p>';

var wasteOpen = false;
function toggleWaste() { wasteOpen = !wasteOpen; renderProfile(); }

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
  var ing = ingById(id);
  var u = ING_UNIT[id] || (ing && ing.counts ? ING_UNIT[ing.counts] : null), best = 'ea', n = 0;
  for (var k in u) { if (UNITS.indexOf(k) > -1 && u[k] > n) { best = k; n = u[k]; } }
  return best;
}
var ING_RX = {};
INGREDIENTS.forEach(function(i) {
  try { ING_RX[i.id] = new RegExp(i.match, 'i'); } catch (e) { ING_RX[i.id] = null; } // older Safari can't read every pattern
});

function searchIngredients(q) {
  q = q.trim().toLowerCase();
  var pool = INGREDIENTS.filter(function(i) { return !assumedStaple(i.id); });
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
    if (!hit && assumedStaple(i.id) && (i.name.toLowerCase().indexOf(q) > -1 || (ING_RX[i.id] && ING_RX[i.id].test(q)))) hit = i;
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
  draft = { id:e.id, ing:e.ing, zone:e.zone, qty:e.qty === null ? '' : String(round2(e.qty)), unit:e.unit || defaultUnit(e.ing),
            when: !e.bought ? 'unknown' : (e.bought === todayKey() ? 'today' : (e.bought === y ? 'yesterday' : 'date')),
            date:e.bought || '', expires:e.expires || '' };
  justAdded = [];
  openItemScreen();
}
function openItemScreen() {
  armBack();
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
      '<p class="field-hint">Staples like oil, salt, flour and spices are assumed on hand, so there\'s no need to add them. ' +
        'Change which in Settings &rsaquo; Staples you keep.</p>' +
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
      (draft.id ? '<button class="btn quiet" onclick="askOutcome()">Remove</button>' : '') +
    '</div>' +
    (draft.id ? '<div class="outcome" id="outcomeBox" style="display:none;">' +
      '<div class="outcome-q">What happened to it?</div>' +
      '<button class="btn ghost" onclick="finishItem(\'used\')">Used it up</button>' +
      '<button class="btn ghost" onclick="finishItem(\'waste\')">Threw it out</button>' +
      '<button class="btn quiet" onclick="finishItem(\'mistake\')">Added by mistake</button>' +
    '</div>' : '');
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
      // This exact food only: acorn squash isn't "1 butternut squash in your kitchen" here.
      var have = pantry.filter(function(p) { return p.ing === i.id && inStock(p); }).length;
      // Foods no recipe uses yet can be tracked, but the planner won't use them; say so.
      var note = i.extra && !i.counts ? ' · not in recipes yet' : '';
      return '<button class="pick" onclick="pickIngredient(\'' + i.id + '\')"><span>' + esc(i.name) + '</span>' +
        '<small>' + (have ? have + ' in your kitchen' : zoneLabel(i.zone).toLowerCase()) + note + '</small></button>';
    }).join('') + '</div>'
    : '<p class="field-hint">' + (staple ? esc(staple.name) + ' is a staple, so it\'s assumed on hand.'
        : 'Nothing by that name in our food list. Only foods the recipes use can be planned around.') + '</p>');
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
// Removing used to be one button and a confirm box, so food eaten, food binned and a typo all
// left the same way and left no trace — the rescued count had no counterpart. Now it asks which
// of the three it was. "Added by mistake" earns its place: without it, every bad receipt read
// and mistyped item would quietly inflate the waste figure.
function askOutcome() {
  var box = document.getElementById('outcomeBox');
  if (box) { box.style.display = 'block'; box.scrollIntoView({ block:'nearest' }); }
}

function finishItem(outcome) {
  var e = entryById(draft.id);
  if (!e) return;
  var name = ingName(e.ing).toLowerCase();

  if (outcome === 'waste') { logWaste(e); closeSub(); renderAll(); askWasteReason(e); return; }

  pantry.splice(pantry.indexOf(e), 1);
  closeSub();
  renderAll();
  showToast(outcome === 'used' ? 'Finished the ' + name + '.' : 'Removed ' + name + '.');
}

// How far past its estimated window it got, when there was an estimate at all. Null stays null:
// an item with no date has no "days past" and inventing one would be the same mistake as
// inventing an expiry.
function logWaste(e) {
  var f = freshness(e), past = (f.known && f.max < 0) ? -f.max : (f.known ? 0 : null);
  // Whether any meal on the plan was ever going to use this. It decides whose miss the loss was,
  // and it can only be known now — once the item is gone and the plan has rolled, it is lost.
  // (Inlined rather than sharing a helper so this branch doesn't collide with the pantry work.)
  var wasPlanned = false;
  plan.forEach(function(p) {
    if (wasPlanned || !p || !p.recipe || p.status === 'skipped') return;
    var r = recipeById(p.recipe);
    if (r && visibleLines(r).some(function(l) { return lineIds(l).indexOf(e.ing) > -1; })) wasPlanned = true;
  });
  wasteLog.push({ date:todayKey(), ing:e.ing, qty:e.qty, unit:e.unit,
                  reason:null, daysPast:past, wasPlanned:wasPlanned });
  pantry.splice(pantry.indexOf(e), 1);
}

// What used to be its own "Where food is going" screen, now opened in place inside the Food
// rescued card. The rescues and the losses are one story, so they sit together; the detail
// stays one tap away rather than crowding the milestone.
function wasteInsightsHTML() {
  var h = '';
  var w = wasteStats();
  if (!w.total) {
    h = '<p class="sub-intro">Nothing logged as thrown out yet.</p>' +
      '<div class="note-card">When something does go, mark it <b>Threw it out</b> in the Pantry — or use ' +
      '<b>Log several at once</b> under Needs attention. This then shows which foods keep getting away ' +
      'and why, which is the part worth knowing before the next shop.</div>';
  } else {
    var dir = w.prev30 === 0 ? '' : w.last30 < w.prev30 ? ' <span class="w-better">down from ' + w.prev30 + '</span>'
            : w.last30 > w.prev30 ? ' <span class="w-worse">up from ' + w.prev30 + '</span>'
            : ' &middot; same as the 30 before';
    h =
      '<p class="sub-intro">Everything here is what you told the app went bad. It is a record to act on, ' +
      'not a score — nothing here counts against you.</p>' +

      '<div class="w-head"><div class="w-big">' + w.last30 + '</div>' +
        '<div class="w-cap">thrown out in the last 30 days' + dir + '</div>' +
        '<div class="w-cap">against <b>' + w.rescued30 + '</b> rescued just in time</div></div>';

    // Repeat offenders first: the one thing on this page that changes what Ren buys next week.
    var repeats = w.ings.filter(function(x) { return x.n > 1; });
    h += '<div class="section-label">Keeps getting away</div>';
    h += repeats.length
      ? '<div class="w-list">' + repeats.slice(0, 6).map(function(x) {
          // Which kinds, when a family covers more than one, so "Tomatoes" isn't a mystery.
          return '<div class="w-row"><span class="w-name">' + esc(x.name) +
              (x.kinds.length > 1 ? '<span class="w-kinds">' + esc(x.kinds.map(ingName).join(', ')) + '</span>' : '') + '</span>' +
            '<span class="w-n">' + x.n + ' times</span></div>';
        }).join('') + '</div>'
      : '<div class="note-card">Nothing has gone twice yet. No pattern to fix — just bad luck so far.</div>';

    if (w.reasons.length) {
      h += '<div class="section-label">Why</div><div class="w-list">' +
        w.reasons.slice(0, 5).map(function(r) {
          return '<div class="w-row"><span class="w-name">' + esc(wasteReasonLabel(r.key)) + '</span>' +
            '<span class="w-n">' + r.n + '</span></div>';
        }).join('') +
        (w.unsaid ? '<div class="w-row quiet"><span class="w-name">Not said</span><span class="w-n">' + w.unsaid + '</span></div>' : '') +
        '</div>';
    }

    // The honest half. If most of what was lost was never in a plan, the planner missed it.
    if (w.planned + w.unplanned) {
      var share = Math.round(w.unplanned / (w.planned + w.unplanned) * 100);
      h += '<div class="section-label">Whose miss</div>' +
        '<div class="w-split"><div class="w-bar"><div class="w-bar-fill" style="width:' + share + '%;"></div></div>' +
          '<div class="w-cap"><b>' + w.unplanned + '</b> of ' + (w.planned + w.unplanned) +
          ' were never in a plan — the planner never found a meal for them. ' +
          '<b>' + w.planned + '</b> were on the plan and didn’t get cooked.</div></div>';
    }

    if (w.dated) {
      h += '<div class="section-label">How late</div><div class="w-list">' +
        '<div class="w-row"><span class="w-name">Still inside its window</span><span class="w-n">' + w.late.same + '</span></div>' +
        '<div class="w-row"><span class="w-name">A day or three past</span><span class="w-n">' + w.late.few + '</span></div>' +
        '<div class="w-row"><span class="w-name">More than three days past</span><span class="w-n">' + w.late.week + '</span></div>' +
        '</div><p class="field-hint">Things going by a day are a planning problem. Things going by a week are a ' +
        'forgetting problem, and the two need different fixes.</p>';
    }
  }
  return h;
}

// The reason is the only part of a waste entry that can change anything later, so it is asked
// once, right after, in four taps or none. Skipping is fine — a logged loss with no reason still
// counts, and nagging for it would make logging feel like a punishment.
// What the log is for. A tally on its own just tells Ren she wasted food, which she knew; the
// repeat offender and the reason behind it are the parts she can act on next shop.
// A waste entry's group: its family when it has one, otherwise the food itself.
function wasteKey(id) { var f = famOf(id); return f ? 'fam:' + f : id; }
function wasteKeyName(key) { return key.indexOf('fam:') === 0 ? famName(key.slice(4)) : ingName(key); }

function wasteHint() {
  var byReason = {}, unplanned = 0;
  wasteLog.forEach(function(w) {
    if (w.reason) byReason[w.reason] = (byReason[w.reason] || 0) + 1;
    if (w.wasPlanned === false) unplanned++;
  });
  var top = function(counts) {
    var best = null;
    Object.keys(counts).forEach(function(k) { if (!best || counts[k] > counts[best]) best = k; });
    return best;
  };

  // The planner's share comes first. When most of what was lost was never in a plan at all, the
  // miss is the app's, and telling Ren to buy less would be both wrong and a little insulting.
  if (unplanned >= 2 && unplanned >= wasteLog.length / 2) {
    return unplanned + ' of these were never in a plan — that one’s on the planner, not you.';
  }

  var why = top(byReason);
  if (why === 'notime') {
    return 'Mostly three days not stretching far enough. Fewer perishables per shop would help more than planning harder.';
  }

  // Grouped by family the same way as the breakdown, so the hint and the list never disagree.
  var worst = wasteStats().ings[0];
  if (worst && worst.n > 1) {
    var tail = why === 'toomuch' ? ' Try buying half as much.'
             : why === 'forgot'  ? ' Worth putting on day 1 next time.'
             : why === 'disliked'? ' Maybe mark it “not for us”.'
             : '';
    return worst.name + ' got away ' + worst.n + ' times.' + tail;
  }
  return 'Every one logged is one you’ll spot sooner next time.';
}

// `notime` matters more than it looks. Without it every reason here codes the loss as something
// Ren did — forgot, over-bought, changed her mind, picked badly — so a household that planned
// well, cooked twice and still lost six things has nothing honest to file it under, and skips.
// That empties the one field worth having exactly when the pattern is worth knowing.
var WASTE_REASONS = [
  ['notime',  'Couldn’t fit it into three days'],
  ['forgot',  'Forgot about it'],
  ['toomuch', 'Bought too much'],
  ['plans',   'Plans changed'],
  ['disliked','Nobody wanted it']
];
// ─── where food is going ───
// A monitoring view, not a scoreboard. There is no ladder and no badge here on purpose: the log
// only fills up if Ren keeps recording bad news, and the moment that costs her something she
// stops. So this is ordered by what she can do something about at the next shop, and it says
// plainly which share was the planner's miss rather than hers.
function wasteReasonLabel(key) {
  for (var i = 0; i < WASTE_REASONS.length; i++) { if (WASTE_REASONS[i][0] === key) return WASTE_REASONS[i][1]; }
  return 'Not said';
}

function wasteStats() {
  var within = function(daysBack, offset) {
    var from = todayKey(addDays(new Date(), -(daysBack + (offset || 0))));
    var to   = todayKey(addDays(new Date(), -(offset || 0)));
    return wasteLog.filter(function(w) { return w.date > from && w.date <= to; });
  };
  var byIng = {}, kinds = {}, byReason = {}, planned = 0, unplanned = 0, late = { same:0, few:0, week:0 }, dated = 0;
  wasteLog.forEach(function(w) {
    // Counted by family, so cherry tomatoes twice and tomatoes once is "tomatoes, 3 times" — the
    // pattern worth acting on — rather than two separate foods that each look like bad luck.
    var k = wasteKey(w.ing);
    byIng[k] = (byIng[k] || 0) + 1;
    (kinds[k] = kinds[k] || {})[w.ing] = true;
    byReason[w.reason || ''] = (byReason[w.reason || ''] || 0) + 1;
    if (w.wasPlanned === true) planned++; else if (w.wasPlanned === false) unplanned++;
    if (typeof w.daysPast === 'number') {
      dated++;
      if (w.daysPast <= 0) late.same++; else if (w.daysPast <= 3) late.few++; else late.week++;
    }
  });
  var rank = function(counts) {
    return Object.keys(counts).map(function(k) { return { key:k, n:counts[k] }; })
      .sort(function(a, b) { return b.n - a.n; });
  };
  return {
    total: wasteLog.length,
    last30: within(30).length, prev30: within(30, 30).length,
    ings: rank(byIng).map(function(x) {
      x.kinds = Object.keys(kinds[x.key]);
      // One kind only: its own name says more than the family's ("Gouda", not "Cheese for
      // slicing & melting").
      x.name = x.kinds.length > 1 ? wasteKeyName(x.key) : ingName(x.kinds[0]);
      return x;
    }),
    reasons: rank(byReason).filter(function(r) { return r.key; }),
    unsaid: byReason[''] || 0,
    planned: planned, unplanned: unplanned,
    late: late, dated: dated,
    // Shares rescuedIn() with the Profile's 30-day window, so both pages always agree.
    rescued30: rescuedIn(30)
  };
}

function askWasteReason(e) {
  var holder = document.getElementById('wasteReasons');
  if (!holder) { showToast('Logged the ' + ingName(e.ing).toLowerCase() + '.'); return; }
  holder.innerHTML =
    '<div class="waste-sheet">' +
      '<div class="waste-q">Why did the ' + esc(ingName(e.ing).toLowerCase()) + ' get away?</div>' +
      WASTE_REASONS.map(function(r) {
        return '<button class="btn ghost" onclick="setWasteReason(\'' + r[0] + '\')">' + esc(r[1]) + '</button>';
      }).join('') +
      '<button class="btn quiet" onclick="closeWasteReasons()">Skip</button>' +
    '</div>';
  holder.style.display = 'flex';
}
function setWasteReason(reason) {
  if (wasteLog.length) { wasteLog[wasteLog.length - 1].reason = reason; }
  closeWasteReasons();
  saveState();
  renderAll();
}
// ─── logging several at once ───
// One item at a time is fine for one item and punishing for six: open, Remove, Threw it out,
// pick a reason, repeat. Six items cost 24 taps, and they cost them on the day Ren is already
// annoyed — which is exactly the day the data is worth having. A flow that makes you repeat the
// bad news six times is the punitive thing the log was supposed to avoid.
//
// Here it is one sheet: tick what's gone, pick one reason for the lot, confirm. Six items is
// nine taps. The reason is per-batch rather than per-item because a batch is usually one story
// ("the week got away from me"); anything that needs its own reason can still go through the
// item screen.
var wasteBatch = { ids:{}, reason:null };

function openWasteBatch() {
  wasteBatch = { ids:{}, reason:null };
  renderWasteBatch();
}

function wasteBatchCandidates() {
  return pantry.filter(function(e) {
    if (!inStock(e)) return false;
    var f = freshness(e);
    return f.known ? f.min <= 3 : e.zone !== 'cupboard';
  }).sort(byUrgency);
}

function renderWasteBatch() {
  var holder = document.getElementById('wasteReasons');
  if (!holder) return;
  var items = wasteBatchCandidates();
  var picked = Object.keys(wasteBatch.ids).filter(function(k) { return wasteBatch.ids[k]; }).length;

  holder.innerHTML =
    '<div class="waste-sheet batch">' +
      '<div class="waste-q">Anything already gone?</div>' +
      '<div class="waste-sub">Tick what you threw out. Nothing here is removed until you confirm.</div>' +
      '<div class="batch-list">' +
        (items.length ? items.map(function(e) {
          var f = freshness(e), on = !!wasteBatch.ids[e.id];
          return '<label class="batch-row' + (on ? ' on' : '') + '">' +
            '<input type="checkbox"' + (on ? ' checked' : '') + ' onchange="toggleWasteBatch(\'' + e.id + '\')">' +
            '<span class="br-name">' + esc(ingName(e.ing)) + '</span>' +
            chipHTML(f.cls, f.text) +
          '</label>';
        }).join('') : '<div class="waste-sub">Nothing is near its window. Rare and beautiful.</div>') +
      '</div>' +
      (picked ? '<div class="waste-q small">Why did ' + (picked === 1 ? 'it' : 'they') + ' get away?</div>' +
        '<div class="batch-reasons">' + WASTE_REASONS.map(function(r) {
          return '<button class="btn ' + (wasteBatch.reason === r[0] ? 'primary' : 'ghost') + ' small"' +
            ' onclick="setBatchReason(\'' + r[0] + '\')">' + esc(r[1]) + '</button>';
        }).join('') + '</div>' : '') +
      '<button class="btn primary"' + (picked ? '' : ' disabled') + ' onclick="confirmWasteBatch()">' +
        (picked ? 'Log ' + picked + ' item' + (picked === 1 ? '' : 's') : 'Nothing ticked') + '</button>' +
      '<button class="btn quiet" onclick="closeWasteReasons()">Cancel</button>' +
    '</div>';
  holder.style.display = 'flex';
}
function toggleWasteBatch(id) { wasteBatch.ids[id] = !wasteBatch.ids[id]; renderWasteBatch(); }
function setBatchReason(r) { wasteBatch.reason = wasteBatch.reason === r ? null : r; renderWasteBatch(); }

function confirmWasteBatch() {
  var ids = Object.keys(wasteBatch.ids).filter(function(k) { return wasteBatch.ids[k]; });
  if (!ids.length) return;
  var reason = wasteBatch.reason, n = 0;
  ids.forEach(function(id) {
    var e = entryById(id);
    if (!e) return;
    logWaste(e);                                   // same record as the single-item path
    wasteLog[wasteLog.length - 1].reason = reason; // null when Ren skipped the question
    n++;
  });
  closeWasteReasons();
  saveState();
  renderAll();
  showToast('Logged ' + n + ' item' + (n === 1 ? '' : 's') + '.');
}

function closeWasteReasons() {
  var holder = document.getElementById('wasteReasons');
  if (holder) { holder.style.display = 'none'; holder.innerHTML = ''; }
}

// ═══════════════ RECEIPT UPLOAD & OCR ═══════════════
// Tesseract.js is loaded on demand — only when the user actually taps "Upload receipt".
// The flow: snap/choose → OCR → parse → review sheet → confirm to add.
// Nothing enters the pantry without the user reviewing every line first.

var receiptItems = [];   // extracted lines awaiting review
var receiptBack = 'Settings';  // where the receipt screen's Back goes: Settings or Pantry
// The receipt screen's review list also serves shelf photos ("Snap your shelves"): same tick-
// every-item step, same matcher. photoMode says which one is on screen.
var photoMode = 'receipt';     // 'receipt' or 'shelves'
var shelfBought = 'unsure';    // shelves only: 'week', 'older' or 'unsure', asked once for all items
var shelfCounts = {};          // shelves only: items found per area, shown on that area's button
var receiptDateNote = null;    // where the receipt's purchase date came from: { by:'receipt'|'you', raw, other }

// Opens the receipt screen from Profile or from the Pantry's Add food screen.
function openReceipt(from) {
  receiptBack = from || 'Settings';
  receiptItems = [];
  receiptDateNote = null;
  photoMode = 'receipt';
  if (receiptBack === 'Pantry' && currentTab !== 'pantryTab') { switchTab('pantryTab'); }
  openSub('receipt');
}

// Snap your shelves: one photo per place food is kept, Claude lists what it can clearly see, and
// every photo's finds collect into one review list. The agreed rules: nothing is added until it is
// ticked; a photo can't show when food was bought, so the person answers that once for everything;
// amounts are estimates they can change; and nothing here says whether food is still good.
function openShelves(from) {
  receiptBack = from || 'Pantry';
  receiptItems = [];
  photoMode = 'shelves';
  shelfBought = 'unsure';
  shelfCounts = {};
  if (currentTab !== 'pantryTab') { switchTab('pantryTab'); }
  openSub('shelves');
}
function shelfAreasHTML() {
  return ZONES.map(function(z) {
    var n = shelfCounts[z.key];
    return '<label class="shelf-area' + (n !== undefined ? ' done' : '') + '" for="shelfFile_' + z.key + '">' +
        '<b>' + z.label + '</b>' +
        '<span>' + (n === undefined ? 'Take a photo' : '✓ ' + n + ' found · add another') + '</span>' +
      '</label>' +
      '<input type="file" id="shelfFile_' + z.key + '" accept="image/*" style="display:none;" ' +
        'onchange="handleShelfFile(this,\'' + z.key + '\')">';
  }).join('');
}
function handleShelfFile(input, area) {
  if (!input.files || !input.files[0]) return;
  var file = input.files[0];
  input.value = '';
  var place = (ZONES.filter(function(z) { return z.key === area; })[0] || { label:'shelf' }).label.toLowerCase();
  var statusEl = document.getElementById('receiptStatus');
  statusEl.style.display = 'block';
  statusEl.innerHTML =
    '<div class="receipt-progress">' +
      '<div class="spinner"></div>' +
      '<div><strong>Claude is looking at your ' + esc(place) + '…</strong>' +
        '<p class="receipt-step">This usually takes 5 to 10 seconds.</p>' +
      '</div>' +
    '</div>';
  readShelfWithClaude(file, area).then(function(result) {
    shelfCounts[area] = (shelfCounts[area] || 0) + parseClaudeShelf(result, area);
    var areas = document.getElementById('shelfAreas');
    if (areas) areas.innerHTML = shelfAreasHTML();
    renderReceiptReview();
  }).catch(function() {
    // No on-phone backup here: the phone's text reader can read a receipt but can't recognise food.
    if (receiptItems.length) {
      renderReceiptReview();
      showToast('Claude couldn’t read that photo. Try it again in a moment.');
    } else {
      statusEl.innerHTML =
        '<div class="note-card" style="border-left-color:var(--amber);">Claude couldn’t read that photo. ' +
          'Check your connection and try again, or add food by hand from the Pantry tab.</div>';
    }
  });
}
function readShelfWithClaude(file, area) {
  return receiptImage(file).then(function(data) {
    var ctrl = window.AbortController ? new AbortController() : null;
    var timer = setTimeout(function() { if (ctrl) ctrl.abort(); }, 60000);
    return fetch(RECEIPT_API, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image: data, mediaType: 'image/jpeg', mode: 'pantry', area: area }),
      signal: ctrl ? ctrl.signal : undefined
    }).then(function(res) {
      clearTimeout(timer);
      if (!res.ok) throw new Error('reader ' + res.status);
      return res.json();
    });
  });
}
// Adds one photo's finds to the review list and returns how many there were. An item starts ticked
// only when Claude was sure it saw it AND it matched a food exactly; everything else waits for a
// person to tick it. The place is the one photographed, not the food's usual home: a jar of salsa
// in the fridge is in the fridge.
// The food matcher finds a food named anywhere in a phrase, which is right for typed searches but
// too loose to pre-tick what Claude reads from a photo: tested on a real cupboard photo it paired
// "bread machine yeast" with Bread, "whipped chocolate frosting" with Dark chocolate and "diced
// tomatoes with green chilies" with Fresh chili peppers. A match is trusted only when the phrase's
// main word (its last word, before any "with ...") is a word of the matched food's name: "yeast"
// isn't in "Bread", "corn" is in "Corn kernels". Shelf photos and Claude-read receipts both use it;
// untrusted matches still show, unticked, for the person to check.
function singularWord(w) { return w.replace(/ies$/, 'y').replace(/(o|s|x|ch|sh)es$/, '$1').replace(/s$/, ''); }
// Words that name a cut or a form rather than the food, and that the food list leaves out:
// "cheddar cheese" is Cheddar, "salmon fillets" is Salmon. The word before them is the food.
var FORM_WORDS = ['cheese', 'fillet', 'filet', 'loin', 'piece', 'chunk'];
function trustedMatch(phrase, ingName) {
  var words = (phrase.toLowerCase().split(/\s+with\s+/)[0].match(/[a-z]+/g) || []).map(singularWord);
  if (words.length > 1 && FORM_WORDS.indexOf(words[words.length - 1]) > -1 &&
      ingName.toLowerCase().indexOf(words[words.length - 1]) === -1) { words.pop(); }
  var head = words.length ? words[words.length - 1] : '';
  var ingWords = (ingName.toLowerCase().match(/[a-z]+/g) || []).map(singularWord);
  return !!head && ingWords.indexOf(head) > -1;
}
function parseClaudeShelf(result, area) {
  var n = 0;
  (result.items || []).forEach(function(it) {
    var name = String(it.name || '').trim();
    if (!name) return;
    var match = matchFoodName(name) || matchReceiptLine(name);
    var trusted = !!match && match.exact && trustedMatch(name, match.name);
    var unit = UNITS.indexOf(it.unit) > -1 ? it.unit : null;
    var qty = unit && typeof it.quantity === 'number' && it.quantity > 0 ? it.quantity : null;
    var sure = it.sure !== false;
    receiptItems.push({
      raw: name,
      ing: match ? match.id : null,
      ingName: match ? match.name : null,
      confidence: match ? (trusted ? 'exact_match' : 'probable') : 'unrecognized',
      zone: area,
      include: trusted && sure,
      qty: qty, unit: qty === null ? null : unit,
      date: null,
      sure: sure
    });
    n++;
  });
  return n;
}
function setShelfBought(v) {
  shelfBought = v;
  renderReceiptReview();
}
// The person can correct any amount; a blank amount is added with no amount, as typed foods are.
function setReceiptQty(idx, v) {
  var item = receiptItems[idx], n = parseFloat(v);
  if (!item) return;
  if (n > 0) { item.qty = n; item.unit = item.unit || 'ea'; }
  else { item.qty = null; item.unit = null; }
}
// The + button offers two ways in: scan a receipt (straight to the camera) or add manually.
function openAddSheet() {
  armBack();
  closeDetail();
  document.getElementById('addSheet').classList.add('open');
}
function closeAddSheet() {
  document.getElementById('addSheet').classList.remove('open');
}
// "Scan a receipt" from the + button goes straight to the camera, then reads the photo on the
// receipt screen, so the review step is the same wherever the receipt came from.
function receiptFromPantry(input) {
  if (!input.files || !input.files[0]) return;
  openReceipt('Pantry');
  handleReceiptFile(input);
}

// The receipt photo goes to the team's Cloudflare Worker (worker/receipt-reader.js), which asks
// Claude to read it. If that fails (offline, the monthly spend limit reached, an expired key), the
// on-phone reader below takes over, so scanning never just stops working.
var RECEIPT_API = 'https://wtf-receipt-reader.jennamar.workers.dev/';

function handleReceiptFile(input) {
  if (!input.files || !input.files[0]) return;
  var file = input.files[0];
  var statusEl = document.getElementById('receiptStatus');
  var uploadArea = document.getElementById('receiptUploadArea');

  uploadArea.style.display = 'none';
  statusEl.style.display = 'block';
  statusEl.innerHTML =
    '<div class="receipt-progress">' +
      '<div class="spinner"></div>' +
      '<div><strong>Reading your receipt…</strong>' +
        '<p class="receipt-step" id="receiptStep">Sending the photo to Claude</p>' +
      '</div>' +
    '</div>';

  readWithClaude(file).then(function(result) {
    parseClaudeReceipt(result);
    renderReceiptReview();
  }).catch(function() {
    readOnPhone(file, 'Claude couldn’t be reached, so the phone is reading it instead');
  });
}

// Shrinks the photo (long side 2000 px, JPEG) before sending: plenty for receipt text, and a
// fraction of a phone camera's file size.
function receiptImage(file) {
  return new Promise(function(resolve, reject) {
    var url = URL.createObjectURL(file), img = new Image();
    img.onload = function() {
      var scale = Math.min(1, 2000 / Math.max(img.naturalWidth, img.naturalHeight));
      var c = document.createElement('canvas');
      c.width = Math.round(img.naturalWidth * scale); c.height = Math.round(img.naturalHeight * scale);
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
      URL.revokeObjectURL(url);
      resolve(c.toDataURL('image/jpeg', 0.85).split(',')[1]);
    };
    img.onerror = function() { URL.revokeObjectURL(url); reject(new Error('unreadable image')); };
    img.src = url;
  });
}

function readWithClaude(file) {
  return receiptImage(file).then(function(data) {
    var ctrl = window.AbortController ? new AbortController() : null;
    var timer = setTimeout(function() { if (ctrl) ctrl.abort(); }, 60000);
    var step = document.getElementById('receiptStep');
    if (step) step.textContent = 'Claude is reading the receipt…';
    return fetch(RECEIPT_API, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image: data, mediaType: 'image/jpeg' }),
      signal: ctrl ? ctrl.signal : undefined
    }).then(function(res) {
      clearTimeout(timer);
      if (!res.ok) throw new Error('reader ' + res.status);
      return res.json();
    });
  });
}

// Claude's answer gives each line a plain grocery name ("GRN ONION" -> "green onions"); the
// app's own matcher then finds that name in the food list, as it does for typed searches.
function parseClaudeReceipt(result) {
  receiptItems = [];
  // No date printed means no date. Falling back to today used to look harmless — the receipt is
  // usually today's — but it writes a purchase date nobody supplied, and every freshness estimate
  // for that item is then computed from it. The spec calls inventing a purchase date a stop-work
  // condition, and an undated item is meant to stay flagged as unknown rather than assumed fresh.
  // The Worker already returns null here; this used to throw that away.
  var date = result.purchase_date && /^\d{4}-\d{2}-\d{2}$/.test(result.purchase_date) && result.purchase_date <= todayKey()
    ? result.purchase_date : null;
  receiptDateNote = date ? { by:'receipt' } : null;
  (result.items || []).forEach(function(it) {
    var printed = String(it.printed || it.name || '').trim();
    if (!printed) return;
    var name = String(it.name || '').trim();
    var label = name && name.toLowerCase() !== printed.toLowerCase() ? printed + ' (' + name + ')' : printed;
    if (!it.is_food) {
      receiptItems.push({ raw:label, ing:null, ingName:null, confidence:'non_food', zone:'fridge', include:false, date:date });
      return;
    }
    var match = (name && matchFoodName(name)) || matchReceiptLine(printed);
    // Pre-ticked only when the match is trusted (see trustedMatch): Claude's plain name, or the
    // printed line when it gave none, must have its main word in the food's name. A loose pairing
    // still shows, unticked, so the person decides.
    var trusted = !!match && match.exact && trustedMatch(name || printed, match.name);
    var unit = UNITS.indexOf(it.unit) > -1 ? it.unit : null;
    var qty = unit && typeof it.quantity === 'number' && it.quantity > 0 ? it.quantity : null;
    receiptItems.push({
      raw: label,
      ing: match ? match.id : null,
      ingName: match ? match.name : null,
      confidence: match ? (trusted ? 'exact_match' : 'probable') : 'unrecognized',
      zone: match ? (ingById(match.id) || {}).zone || 'fridge' : 'fridge',
      include: trusted,
      qty: qty, unit: qty === null ? null : unit,
      date: date
    });
  });
}

// A clean food name ("green onions", "frozen strawberries") matched the way recipe lines are:
// exact name first, then specific pantry foods, then the shared list top to bottom, where
// specific wordings sit above general ones ("green onions" above "onion").
function matchFoodName(name) {
  var q = name.toLowerCase().trim(), hit = null;
  INGREDIENTS.forEach(function(i) {
    var n = i.name.toLowerCase();
    if (!hit && (n === q || n === q.replace(/s$/, '') || n + 's' === q)) hit = i;
  });
  if (!hit) INGREDIENTS.forEach(function(i) { if (!hit && i.extra && ING_RX[i.id] && ING_RX[i.id].test(q)) hit = i; });
  if (!hit) INGREDIENTS.forEach(function(i) { if (!hit && !i.extra && ING_RX[i.id] && ING_RX[i.id].test(q)) hit = i; });
  // Staples the household keeps (oil, salt...) are assumed on hand and never tracked, as everywhere else.
  return hit && !assumedStaple(hit.id) ? { id:hit.id, name:hit.name, exact:true } : null;
}

// The original reader, run on the phone with Tesseract.js: the backup when Claude can't be used.
function readOnPhone(file, why) {
  var statusEl = document.getElementById('receiptStatus');
  var step = document.getElementById('receiptStep');
  if (step) step.textContent = why || 'Loading text-recognition engine';
  loadTesseract(function() {
    var step = document.getElementById('receiptStep');
    if (step) step.textContent = 'Scanning text on your phone…';

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

// A printed date, read the way the phone's reader sees it. "05/11/26" is month-first in the US and
// day-first in Canada, and the reader used to take it as May 11 every time (T6). Both readings are
// tried, a reading in the future is impossible, and of the rest the most recent wins, since
// receipts are photographed soon after shopping. When two readings survive, the other one is kept
// so the review can say the date could be read either way. Year-first dates (2026-11-05) work too.
function readReceiptDate(text) {
  var today = todayKey(), cands = [], raw = null;
  function add(y, m, d) {
    m = +m; d = +d;
    if (m < 1 || m > 12 || d < 1 || d > 31) return;
    var k = y + '-' + ('0' + m).slice(-2) + '-' + ('0' + d).slice(-2);
    if (parseKey(k).getMonth() + 1 !== m) return;              // 31/02 and the like
    if (k <= today && cands.indexOf(k) === -1) cands.push(k);
  }
  var iso = text.match(/\b(20\d{2})[\/\-](\d{1,2})[\/\-](\d{1,2})\b/);
  if (iso) { raw = iso[0]; add(iso[1], iso[2], iso[3]); }
  else {
    var m = text.match(/\b(\d{1,2})[\/\-](\d{1,2})[\/\-](20\d{2}|\d{2})\b/);
    if (!m) return null;
    raw = m[0];
    var y = m[3].length === 2 ? '20' + m[3] : m[3];
    add(y, m[1], m[2]);   // month first
    add(y, m[2], m[1]);   // day first
  }
  if (!cands.length) return null;
  cands.sort();
  return { date:cands[cands.length - 1], raw:raw, other:cands.length > 1 ? cands[0] : null };
}

function parseReceiptText(text) {
  receiptItems = [];
  var lines = text.split('\n');

  // No date on the receipt means the items go in undated — see parseClaudeReceipt(). The
  // on-phone reader gets the same rule as the Claude one.
  var read = readReceiptDate(text);
  var receiptDate = read ? read.date : null;
  receiptDateNote = read ? { by:'receipt', raw:read.raw, other:read.other } : null;

  lines.forEach(function(raw) {
    var line = raw.trim();
    if (!line || line.length < 2) return;

    // Skip pure-noise lines
    if (/^[-=_*#.]+$/.test(line) || /^\d+$/.test(line)) return;
    // Skip lines that are only a price
    if (/^\$?\d+\.\d{2}$/.test(line)) return;
    // Skip the date line: it is read separately (readReceiptDate) and isn't food
    if (/^\d{1,4}[\/\-]\d{1,2}[\/\-]\d{2,4}\b/.test(line)) return;

    var lower = line.toLowerCase();
    var isNonFood = /^(sub\s*total|total|tax|change|cash|credit|debit|visa|master|amex|card|balance|savings|thank|receipt|store|tel|phone|date|time|#|cashier|terminal|transaction|trans|ref|member|loyalty|points|discount|coupon|you saved|welcome|come again)/i.test(lower);

    var match = matchReceiptLine(line);

    receiptItems.push({
      raw: line,
      ing: match ? match.id : null,
      ingName: match ? match.name : null,
      confidence: match ? (match.exact ? 'exact_match' : 'probable') : (isNonFood ? 'non_food' : 'unrecognized'),
      zone: match ? (ingById(match.id) || {}).zone || 'fridge' : 'fridge',
      // The phone's reader sees raw receipt text ("BNLS CHKN BRST"), so the main-word check can't
      // apply here; but a fuzzy "probable" guess no longer starts ticked either.
      include: !!match && match.exact,
      date: receiptDate
    });
  });
}

// ── Receipt abbreviation dictionary ──
// Maps common Canadian grocery receipt abbreviations to ingredient IDs.
// Covers Superstore, Walmart, No Frills, Sobeys, Save-On, Independent, etc.
var RECEIPT_ABBR = {
  // Proteins
  'bnls cken brst':'chicken-breast','bnls chkn brst':'chicken-breast','cken brst':'chicken-breast',
  'chkn brst':'chicken-breast','chk brst':'chicken-breast','chicken br':'chicken-breast',
  'cken thgh':'chicken-thighs','chkn thgh':'chicken-thighs','chicken th':'chicken-thighs',
  'cken drm':'chicken-drumsticks','chkn drum':'chicken-drumsticks',
  'cken wngs':'chicken-wings','chkn wings':'chicken-wings',
  'gr bf':'ground-beef','grnd bf':'ground-beef','grnd beef':'ground-beef','ground bf':'ground-beef',
  'gr bf ln':'ground-beef','lean gr bf':'ground-beef','x ln gr bf':'ground-beef',
  'gr trky':'ground-turkey','grnd turk':'ground-turkey','grnd turkey':'ground-turkey',
  'gr pork':'ground-pork','grnd pork':'ground-pork',
  'pork chp':'pork-chops','prk chp':'pork-chops','pork loin chp':'pork-chops',
  'pork loin':'pork','prk loin':'pork',
  'bf steak':'beef-steak','bf strp':'beef-steak','bf sirloin':'beef-steak','bf ribeye':'beef-steak',
  'bf roast':'beef-roast','bf stew':'beef-roast',
  'bf saus':'sausage','pork saus':'sausage','ital saus':'sausage',
  'smk saus':'smoked-sausage','smoked saus':'smoked-sausage',
  'trky saus':'turkey-sausage',
  'deli trky':'deli-turkey','deli turk':'deli-turkey','slcd turkey':'deli-turkey',
  'cdn bacon':'canadian-bacon','can bacon':'canadian-bacon','back bacon':'canadian-bacon',
  'shlls shrimp':'shrimp','shrimp rw':'shrimp','frz shrimp':'shrimp','shrimp raw':'shrimp',
  'salmn flt':'salmon','salmn filt':'salmon','atlntc salmn':'salmon','atlantic sal':'salmon',
  'wht fish':'white-fish','cod filt':'white-fish','tilapia':'white-fish','haddock':'white-fish',
  'cnd tuna':'canned-tuna','tuna chnk':'canned-tuna','tuna lt':'canned-tuna',

  // Dairy
  'mlk 2%':'milk','mlk 1%':'milk','milk 2%':'milk','homo mlk':'milk','skim mlk':'milk',
  'whl mlk':'milk','milk homo':'milk','2% milk':'milk','1% milk':'milk',
  'grk yog':'greek-yogurt','grk yogurt':'greek-yogurt','greek yog':'greek-yogurt',
  'yogrt':'yogurt','yog':'yogurt','yogurt':'yogurt',
  'chs shred':'cheese','shrd chs':'cheese','shredded ch':'cheese',
  'cheddr':'cheddar','ched chs':'cheddar','cheddar ch':'cheddar',
  'mozza':'mozzarella','mozz':'mozzarella','mozzarella':'mozzarella',
  'parm':'parmesan','parmesan':'parmesan','parm reg':'parmesan',
  'cream chs':'cream-cheese','crm chs':'cream-cheese','philly':'cream-cheese',
  'sr cream':'sour-cream','sour crm':'sour-cream',
  'hvy cream':'heavy-cream','whp cream':'heavy-cream','heavy crm':'heavy-cream',
  'bttr':'butter','butter':'butter','marg':'butter',
  'peanut butter':'peanut-butter','pnut butter':'peanut-butter','pb':'peanut-butter',
  'eggs dz':'eggs','eggs lrg':'eggs','eggs xl':'eggs','lrg eggs':'eggs','free rng eggs':'eggs',

  // Produce
  'banan':'bananas','bananas org':'bananas','bnna':'bananas',
  'avocdo':'avocado','avocados':'avocado','hass avo':'avocado',
  'broccli':'broccoli','brcli':'broccoli','broc crwn':'broccoli',
  'crrts':'carrot','carrots':'carrot','crrt':'carrot','baby crrt':'carrot',
  'potatos':'potatoes','russet pot':'potatoes','yel pot':'potatoes','pot 5lb':'potatoes',
  'swt pot':'sweet-potato','swt potato':'sweet-potato','sweet pot':'sweet-potato',
  'bll ppr':'bell-pepper','grn ppr':'bell-pepper','red ppr':'bell-pepper','bell pep':'bell-pepper',
  'tomato':'tomatoes','tomatoe':'tomatoes','roma tom':'tomatoes','vine tom':'tomatoes',
  'chry tom':'cherry-tomatoes','grape tom':'cherry-tomatoes','cherry tom':'cherry-tomatoes',
  'cucumbr':'cucumber','cuke':'cucumber','eng cuke':'cucumber',
  'spnch':'spinach','baby spnch':'spinach','spinach org':'spinach',
  'lettce':'lettuce','romaine':'lettuce','iceberg':'lettuce','rom hearts':'lettuce',
  'celry':'celery','clry':'celery',
  'mushrooms':'mushrooms','mushrm':'mushrooms','wht mushrm':'mushrooms','button mush':'mushrooms',
  'onion ylw':'onion','onions':'onion','ylw onion':'onion','cooking onion':'onion',
  'red onion':'red-onion','rd onion':'red-onion',
  'grn onion':'green-onion','green onion':'green-onion','scallion':'green-onion',
  'grlc':'garlic','garlic':'garlic',
  'gngr':'ginger','ginger rt':'ginger','fresh ginger':'ginger',
  'lemon':'lemon','lemons':'lemon',
  'lime':'lime','limes':'lime',
  'apple':'apples','apples':'apples','gala apple':'apples','fuji apple':'apples',
  'orange':'orange','oranges':'orange','navel org':'orange',
  'strawb':'strawberries','strawberry':'strawberries','straw org':'strawberries',
  'bluebrry':'blueberries','blueberry':'blueberries','blubry':'blueberries',
  'grapes':'grapes','grape grn':'grapes','grape rd':'grapes',
  'corn cob':'corn-cob','corn ears':'corn-cob',
  'zucchni':'zucchini','zucch':'zucchini',
  'cabbage':'cabbage','cbbg':'cabbage','grn cabbage':'cabbage',
  'kale':'kale','kale org':'kale',
  'grn beans':'green-beans','green bean':'green-beans',
  'asparagus':'asparagus','asprgus':'asparagus',

  // Bakery & bread
  'bread wht':'bread','bread ww':'bread','slcd bread':'bread',
  'buns hmbgr':'buns','hmbrg buns':'buns','hotdog buns':'buns','buns hd':'buns',
  'eng muffn':'english-muffins','eng muffins':'english-muffins',
  'bagels':'bagels','bgls':'bagels',
  'tortilla flr':'flour-tortillas','flr tortilla':'flour-tortillas','wraps':'flour-tortillas',
  'tortilla crn':'corn-tortillas','crn tortilla':'corn-tortillas',
  'pita':'pita','pita brd':'pita','naan':'pita',

  // Canned & dry goods
  'chkpeas':'chickpeas','chickpeas':'chickpeas','garbanzo':'chickpeas',
  'blk beans':'black-beans','black bean':'black-beans',
  'kdny beans':'kidney-beans','kidney bean':'kidney-beans',
  'wht beans':'white-beans','cannellini':'white-beans',
  'ref beans':'refried-beans','refried bn':'refried-beans',
  'lentils':'lentils','lntls':'lentils',
  'dcd tomato':'canned-tomatoes','cnd tomato':'canned-tomatoes','tomato dcd':'canned-tomatoes',
  'tom paste':'tomato-paste','tomato pst':'tomato-paste',
  'marinara':'marinara','pasta sce':'marinara','pizza sce':'marinara',
  'pasta spag':'pasta','spaghetti':'pasta','penne':'pasta','macaroni':'pasta','rigatoni':'pasta',
  'rice wht':'rice','rice lng':'rice','basmati':'rice','jasmine rice':'rice',
  'brn rice':'brown-rice','brown rice':'brown-rice',
  'quinoa':'quinoa',
  'oats':'oats','rolled oats':'oats','qk oats':'oats','instant oat':'oats',
  'pb':'peanut-butter','pnt bttr':'peanut-butter','peanut btr':'peanut-butter',
  'crnmeal':'cornmeal','grits':'cornmeal',

  // Frozen
  'frz veg':'frozen-veg','frozen veg':'frozen-veg','frz mix veg':'frozen-veg',
  'frz berries':'berries','frz berry':'berries','frz fruit':'fresh-fruit',
  'frz fries':'frozen-fries','french fry':'frozen-fries','frz fry':'frozen-fries',

  // Condiments & sauces
  'ketchup':'ketchup','ktchp':'ketchup',
  'mayo':'mayonnaise','mayonnaise':'mayonnaise',
  'mustard':'mustard','mustrd':'mustard','yellow mstrd':'mustard',
  'soy sauce':'soy-sauce','soy sce':'soy-sauce',
  'hot sauce':'hot-sauce','hot sce':'hot-sauce','sriracha':'hot-sauce',
  'bbq sauce':'bbq-sauce','bbq sce':'bbq-sauce',
  'salsa':'salsa','salsa med':'salsa','salsa mld':'salsa',
  'hoisin':'hoisin','hoisin sce':'hoisin',
  'teriyaki':'teriyaki','teriyaki sce':'teriyaki',
  'enchilada':'enchilada-sauce','ench sce':'enchilada-sauce',
  'hummus':'hummus','hmms':'hummus',

  // Baking & staples
  'flour ap':'flour','all purp fl':'flour','flour':'flour',
  'sugar wht':'sugar','sugar':'sugar','granulated':'sugar',
  'brn sugar':'brown-sugar','brown sug':'brown-sugar',
  'bkng pwdr':'baking-powder','baking pwd':'baking-powder',
  'bkng soda':'baking-soda','baking sda':'baking-soda',
  'veg oil':'vegetable-oil','canola oil':'vegetable-oil','cooking oil':'vegetable-oil',
  'olive oil':'olive-oil','olv oil':'olive-oil','evoo':'olive-oil',
  'coconut ml':'coconut-milk','coco milk':'coconut-milk',
  'maple syr':'maple-syrup','maple syrup':'maple-syrup',
  'honey':'honey','liquid hny':'honey',
  'vanilla':'vanilla','vanilla ext':'vanilla',
  'cornstrch':'cornstarch','corn strch':'cornstarch',
  'chkn brth':'chicken-broth','chicken br':'chicken-broth','chk broth':'chicken-broth',
  'bf broth':'beef-broth','beef brth':'beef-broth',
  'veg broth':'vegetable-broth','veg brth':'vegetable-broth',

  // Snacks & misc
  'tort chips':'tortilla-chips','tortilla ch':'tortilla-chips','nachos':'tortilla-chips',
  'granola':'granola','granola bar':'granola',
  'chips':'tortilla-chips',
  'pickles':'pickles','dill pckl':'pickles',
  'olives':'olives','blk olives':'olives','grn olives':'olives',
  'tofu':'tofu','firm tofu':'tofu','extra firm':'tofu',
  'edamame':'edamame'
};

// ── Levenshtein distance (edit distance) ──
function levenshtein(a, b) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  var prev = [], curr = [], i, j;
  for (j = 0; j <= b.length; j++) prev[j] = j;
  for (i = 1; i <= a.length; i++) {
    curr[0] = i;
    for (j = 1; j <= b.length; j++) {
      curr[j] = a[i-1] === b[j-1]
        ? prev[j-1]
        : 1 + Math.min(prev[j-1], prev[j], curr[j-1]);
    }
    var tmp = prev; prev = curr; curr = tmp;
  }
  return prev[b.length];
}

function matchReceiptLine(line) {
  // Strip prices, weights, quantities to isolate the product name
  var cleaned = line
    .replace(/\$?\d+\.\d{2}/g, '')         // prices
    .replace(/\d+\s*(oz|lb|kg|g|ml|l|ct|pk|ea)\b/gi, '')  // weights
    .replace(/[^a-zA-Z\s]/g, ' ')           // non-alpha
    .replace(/\s+/g, ' ').trim().toLowerCase();

  if (!cleaned || cleaned.length < 2) return null;

  // ── PASS 0: specific pantry foods first ──
  // A named variety ("spaghetti squash", "cauliflower rice", "FZ blueberries") beats the general
  // food a later pass would find in one of its words.
  var specific = cleaned.replace(/\b(fz|frz|frzn)\b/g, 'frozen');
  for (var x = 0; x < INGREDIENTS.length; x++) {
    var xi = INGREDIENTS[x];
    if (xi.extra && ING_RX[xi.id] && ING_RX[xi.id].test(specific)) return { id:xi.id, name:xi.name, exact:true };
  }

  // ── PASS 1: abbreviation dictionary lookup ──
  // Try exact match first, then every 2- and 3-word window in the cleaned text
  if (RECEIPT_ABBR[cleaned]) {
    var abbrIng = ingById(RECEIPT_ABBR[cleaned]);
    if (abbrIng) return { id:abbrIng.id, name:abbrIng.name, exact:true };
  }
  var cWords = cleaned.split(' ');
  for (var w = 3; w >= 2; w--) {
    for (var s = 0; s <= cWords.length - w; s++) {
      var phrase = cWords.slice(s, s + w).join(' ');
      if (RECEIPT_ABBR[phrase]) {
        var phIng = ingById(RECEIPT_ABBR[phrase]);
        if (phIng) return { id:phIng.id, name:phIng.name, exact:true };
      }
    }
  }
  // Also try each single word (for items like "bananas", "tofu")
  for (var sw = 0; sw < cWords.length; sw++) {
    if (cWords[sw].length >= 4 && RECEIPT_ABBR[cWords[sw]]) {
      var swIng = ingById(RECEIPT_ABBR[cWords[sw]]);
      if (swIng) return { id:swIng.id, name:swIng.name, exact:true };
    }
  }

  // ── PASS 2: direct matching (existing logic, improved) ──
  var best = null, bestScore = 0;

  INGREDIENTS.forEach(function(ing) {
    if (assumedStaple(ing.id)) return;
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
    // Word-overlap with partial-word fuzzy matching
    else {
      var words = cleaned.split(' ').filter(function(w) { return w.length > 2; });
      if (words.length) {
        var nameWords = name.split(/[\s,]+/);
        var hits = words.filter(function(w) {
          return nameWords.some(function(nw) {
            if (nw.indexOf(w) > -1 || w.indexOf(nw) > -1) return true;
            // Fuzzy: allow 1-2 edit distance for words >= 4 chars
            if (w.length >= 4 && nw.length >= 4) {
              var dist = levenshtein(w, nw);
              return dist <= (w.length >= 6 ? 2 : 1);
            }
            return false;
          });
        });
        if (hits.length > 0 && hits.length >= Math.ceil(Math.min(words.length, nameWords.length) * 0.5)) {
          score = 30 + Math.round(hits.length / Math.max(words.length, nameWords.length) * 30);
        }
      }
    }

    // ── PASS 3: whole-string fuzzy match (Levenshtein) ──
    if (score < 50 && cleaned.length >= 4 && name.length >= 4) {
      var dist = levenshtein(cleaned, name);
      var maxLen = Math.max(cleaned.length, name.length);
      var similarity = 1 - dist / maxLen;
      if (similarity >= 0.65) {
        var fuzzyScore = Math.round(40 + similarity * 30);
        if (fuzzyScore > score) { score = fuzzyScore; }
      }
    }

    if (score > bestScore) { bestScore = score; best = { id:ing.id, name:ing.name, exact:score >= 70 }; }
  });

  return bestScore >= 30 ? best : null;
}

// Ren supplying the shopping date is not the app inventing one, so this is the one way a date
// gets filled in after the fact. Clearing the field puts the items back to undated.
function setReceiptDate(v) {
  var ok = /^\d{4}-\d{2}-\d{2}$/.test(v) && v <= todayKey() ? v : null;
  receiptItems.forEach(function(r) { r.date = ok; });
  receiptDateNote = ok ? { by:'you' } : null;
  renderReceiptReview();
}

// The purchase date every freshness estimate on this receipt will count from, always shown with
// where it came from. It used to be applied without ever being shown, so a misread date went in
// unseen (T6).
function receiptDateHTML(show) {
  if (!show) return '';
  var date = receiptItems[0] && receiptItems[0].date;
  if (!date) return '';
  var note = receiptDateNote || { by:'receipt' };
  return '<div class="receipt-nodate">' +
    '<div class="rn-q">Purchase date: ' + esc(fmtKey(date)) + (note.by === 'you' ? ' (you set it)' : ' (read from the receipt)') + '</div>' +
    '<div class="rn-s">' + (note.other
      ? 'The receipt says <b>' + esc(note.raw) + '</b>, which could also mean ' + esc(fmtKey(note.other)) + '. If that’s when you shopped, change it here.'
      : 'Freshness estimates count from this date. Change it if it’s wrong.') + '</div>' +
    '<input class="field" type="date" max="' + todayKey() + '" value="' + date + '" onchange="setReceiptDate(this.value)">' +
  '</div>';
}

function renderReceiptReview() {
  var statusEl = document.getElementById('receiptStatus');
  var resultsEl = document.getElementById('receiptResults');

  var matched = receiptItems.filter(function(r) { return r.ing; });
  var unrecognized = receiptItems.filter(function(r) { return !r.ing && r.confidence !== 'non_food'; });

  // When the receipt carried no date, say so rather than quietly filling one in, and offer the
  // one honest alternative: Ren tells us. Left blank, the items go in undated and read "no date"
  // everywhere, which is true and keeps them out of the freshness estimates.
  var undated = receiptItems.some(function(r) { return !r.date; });
  var shelves = photoMode === 'shelves';

  // A shelf photo never shows when food was bought, so ask once for everything. "This week" is
  // counted from the oldest day in the week, so no estimate makes food look fresher than it might be.
  var boughtHTML = !shelves || !matched.length ? '' :
    '<div class="receipt-nodate">' +
      '<div class="rn-q">When did you buy most of this?</div>' +
      '<div class="rn-s">A photo can’t show it. <b>This week</b> counts everything as bought 6 days ago, ' +
        'so nothing looks fresher than it might be. <b>Older</b> or <b>Not sure</b> adds it with no date ' +
        'and no freshness estimate. You can change any item later.</div>' +
      '<div class="receipt-zone-pick">' +
        [['week','This week'], ['older','Older'], ['unsure','Not sure']].map(function(o) {
          return '<button class="' + (shelfBought === o[0] ? 'active' : '') + '" onclick="setShelfBought(\'' + o[0] + '\')">' + o[1] + '</button>';
        }).join('') +
      '</div>' +
    '</div>';

  statusEl.style.display = 'block';
  statusEl.innerHTML =
    '<div class="receipt-summary">' +
      '<strong>' + matched.length + ' food item' + (matched.length !== 1 ? 's' : '') + ' found</strong>' +
      (unrecognized.length ? '<br><span style="color:var(--ink-soft);">' + unrecognized.length + (shelves ? ' seen but' : ' line' + (unrecognized.length !== 1 ? 's' : '')) + ' couldn’t be matched</span>' : '') +
      (shelves && matched.length ? '<br><span style="color:var(--ink-soft);">Only items Claude was sure of start ticked. Check the rest.</span>' : '') +
    '</div>' + boughtHTML + receiptDateHTML(!shelves && !undated && matched.length) +
    (!shelves && undated && matched.length ? '<div class="receipt-nodate">' +
      '<div class="rn-q">No date printed on this receipt.</div>' +
      '<div class="rn-s">Added without one, these show as <b>no date</b> and get no freshness estimate. ' +
        'If you know when you shopped, set it here.</div>' +
      '<input class="field" type="date" max="' + todayKey() + '" ' +
        'onchange="setReceiptDate(this.value)">' +
    '</div>' : '');

  var html = '';

  if (matched.length) {
    html += '<div class="section-label" style="margin-top:0;">Matched items — review before adding</div>';
    matched.forEach(function(item, i) {
      var idx = receiptItems.indexOf(item);
      var confClass = item.confidence === 'exact_match' ? 'exact' : item.confidence === 'manual_match' ? 'manual' : 'probable';
      var confLabel = item.confidence === 'exact_match' ? 'exact' : item.confidence === 'manual_match' ? 'you picked' : 'probable';
      html +=
        '<div class="receipt-item">' +
          '<div class="ri-check"><input type="checkbox"' + (item.include ? ' checked' : '') + ' onchange="toggleReceiptItem(' + idx + ',this.checked)"></div>' +
          '<div class="ri-body">' +
            '<div><span class="ri-name">' + esc(item.ingName) + '</span><span class="ri-conf ' + confClass + '">' + confLabel + '</span>' +
              (shelves && item.sure === false ? '<span class="ri-conf probable">not sure it’s there</span>' : '') + '</div>' +
            '<div class="ri-raw">' + (item.added ? 'Added by you' : (shelves ? 'Claude saw: ' : 'On the receipt: ') + esc(item.raw)) + '</div>' +
            // Everything a scan got wrong can be put right here before anything is saved: the food
            // itself, how much, and where it's kept.
            '<div class="ri-edit">' +
              '<label class="ri-amount">Amount <input type="number" min="0" step="any" inputmode="decimal" ' +
                'aria-label="Amount of ' + esc(item.ingName) + '" ' +
                'value="' + (item.qty || '') + '" placeholder="?" onchange="setReceiptQty(' + idx + ',this.value)"></label>' +
              '<select class="ri-unit" aria-label="Unit for ' + esc(item.ingName) + '" onchange="setReceiptUnit(' + idx + ',this.value)">' +
                UNITS.map(function(u) { return '<option value="' + u + '"' + ((item.unit || 'ea') === u ? ' selected' : '') + '>' + u + '</option>'; }).join('') +
              '</select>' +
              '<button class="btn-pick" onclick="openIngPicker(' + idx + ')">Change food</button>' +
            '</div>' +
            ingPickerHTML(idx) +
            '<div class="receipt-zone-pick">' +
              ZONES.map(function(z) {
                return '<button class="' + (item.zone === z.key ? 'active' : '') + '" onclick="setReceiptZone(' + idx + ',\'' + z.key + '\')">' + z.label + '</button>';
              }).join('') +
            '</div>' +
          '</div>' +
        '</div>';
    });
  }

  // Show non-food / unrecognized lines — unmatched ones get a correction picker
  var others = receiptItems.filter(function(r) { return !r.ing; });
  if (others.length) {
    html += '<div class="section-label">' + (shelves ? 'Seen but not matched to a food' : 'Other lines on the receipt') + '</div>';
    others.forEach(function(item) {
      var idx = receiptItems.indexOf(item);
      if (item.confidence === 'non_food') {
        // Read as not food, which can be wrong ("PC BLUE MENU" is a brand, but so is the food).
        html +=
          '<div class="receipt-item greyed">' +
            '<div class="ri-body"><div class="ri-raw">' + esc(item.raw) + '</div>' +
            '<div style="font-size:11px;color:var(--ink-soft);">non-food · ' +
              '<button class="btn-link" onclick="openIngPicker(' + idx + ')">It’s food: pick it</button></div>' +
            ingPickerHTML(idx) + '</div>' +
          '</div>';
      } else {
        // Unmatched food line — let user pick the right ingredient
        html +=
          '<div class="receipt-item unmatched">' +
            '<div class="ri-body">' +
              '<div class="ri-raw">' + (item.added ? 'Something the scan missed' : esc(item.raw)) + '</div>' +
              '<div style="font-size:11px;color:var(--amber);margin-bottom:4px;">' + (item.added ? 'choose the food' : 'not matched') + '</div>' +
              '<button class="btn-pick" onclick="openIngPicker(' + idx + ')">Pick ingredient &rarr;</button>' +
              ingPickerHTML(idx) +
            '</div>' +
          '</div>';
      }
    });
  }

  // A scan can miss food entirely (behind something else, or a line it couldn't read).
  html += '<div class="actions"><button class="btn ghost small" onclick="addMissedItem()">+ Add something it missed</button></div>';

  if (matched.length) {
    var selected = receiptItems.filter(function(r) { return r.include; }).length;
    html +=
      '<div class="actions" style="margin-top:var(--s8);">' +
        '<button class="btn primary" onclick="confirmReceipt()">Add ' + selected + ' item' + (selected !== 1 ? 's' : '') + ' to pantry</button>' +
      '</div>' +
      '<div class="actions"><button class="btn" onclick="resetReceipt()">Cancel</button></div>';
  } else if (shelves) {
    // The area buttons stay above the list, so another photo is one tap away.
    html +=
      '<div class="note-card" style="margin-top:var(--s6);border-left-color:var(--amber);">' +
        'Claude didn’t find food it could match in this photo. Try again closer and in better light, ' +
        'or add food by hand from the Pantry tab.' +
      '</div>';
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
  receiptItems[idx].zoneSet = true;       // Ren chose it, so changing the food won't move it
  renderReceiptReview();
}

function confirmReceipt() {
  var added = [], shelves = photoMode === 'shelves';
  // Shelf photos: the person's one answer sets the date for everything ("This week" = 6 days ago).
  var shelfDate = shelfBought === 'week' ? todayKey(addDays(new Date(), -6)) : null;
  receiptItems.forEach(function(item) {
    if (shelves) item.date = shelfDate;
    if (!item.include || !item.ing) return;
    var ing = ingById(item.ing);
    if (!ing) return;
    pantry.push({
      id: newEntryId(),
      ing: item.ing,
      zone: item.zone,
      qty: item.qty || null,
      unit: item.qty ? item.unit : null,
      bought: item.date,
      expires: null
    });
    openZones[item.zone] = true;
    added.push(ing.name.toLowerCase());
  });
  receiptItems = [];
  photoMode = 'receipt';
  closeSub();
  if (planBuiltEmpty && !pantryEmpty()) {
    planKitchen(true);
  }
  renderAll();
  if (added.length) {
    showToast('Added ' + added.length + ' item' + (added.length !== 1 ? 's' : '') + (shelves ? ' from your photos.' : ' from receipt.'));
  }
}

function resetReceipt() {
  if (photoMode === 'shelves') openShelves(receiptBack); else openReceipt(receiptBack);
}

// ── Receipt and shelf-photo correction ──
// One food picker per review line: for an unmatched line, a "not food" line that is food, and a
// matched line that matched the wrong food. Closed until asked for.
function ingPickerHTML(idx) {
  return '<div class="ing-picker" id="ingPicker' + idx + '" style="display:none;">' +
    '<input class="field" placeholder="Search foods…" aria-label="Search foods" oninput="filterIngPicker(' + idx + ',this.value)" style="margin:4px 0;">' +
    '<div class="ing-picker-list" id="ingPickerList' + idx + '"></div>' +
  '</div>';
}
function setReceiptUnit(idx, unit) {
  var item = receiptItems[idx];
  if (!item || UNITS.indexOf(unit) === -1) return;
  item.unit = unit;
}
// A line for food the scan missed: it starts unmatched, with its food picker open. It carries
// the receipt's date, or the shelf photo's place, like the lines around it.
function addMissedItem() {
  var shelves = photoMode === 'shelves';
  var lastArea = null;
  Object.keys(shelfCounts).forEach(function(k) { lastArea = k; });
  receiptItems.push({
    raw: '', added: true, ing: null, ingName: null, confidence: 'unrecognized',
    zone: shelves && lastArea ? lastArea : 'fridge', include: false, qty: null, unit: null,
    date: !shelves && receiptItems.length ? receiptItems[0].date : null, sure: true
  });
  renderReceiptReview();
  openIngPicker(receiptItems.length - 1);
}
function openIngPicker(idx) {
  var el = document.getElementById('ingPicker' + idx);
  if (!el) return;
  var showing = el.style.display !== 'none';
  // Close any other open pickers first
  document.querySelectorAll('.ing-picker').forEach(function(p) { p.style.display = 'none'; });
  if (showing) return;
  el.style.display = 'block';
  filterIngPicker(idx, '');
  var inp = el.querySelector('input');
  if (inp) inp.focus();
}

function filterIngPicker(idx, query) {
  var listEl = document.getElementById('ingPickerList' + idx);
  if (!listEl) return;
  var q = (query || '').toLowerCase().trim();
  var results = INGREDIENTS.filter(function(ing) {
    if (assumedStaple(ing.id)) return false;
    if (!q) return true;
    return ing.name.toLowerCase().indexOf(q) > -1 || ing.id.indexOf(q) > -1;
  });
  // Alphabetical, with foods that start with what was typed first ("milk" before "coconut milk").
  results.sort(function(a, b) {
    var an = a.name.toLowerCase(), bn = b.name.toLowerCase();
    var as = q && an.indexOf(q) === 0 ? 0 : 1, bs = q && bn.indexOf(q) === 0 ? 0 : 1;
    return as - bs || (an < bn ? -1 : an > bn ? 1 : 0);
  });
  // Show at most 30 results to keep the list manageable
  var shown = results.slice(0, 30);
  listEl.innerHTML = shown.map(function(ing) {
    return '<div class="ing-picker-row" onclick="assignReceiptIng(' + idx + ',\'' + ing.id + '\')">' + esc(ing.name) + '</div>';
  }).join('') +
  (results.length > 30 ? '<div class="ing-picker-more">' + (results.length - 30) + ' more — keep typing to narrow</div>' : '') +
  (results.length === 0 ? '<div class="ing-picker-more">No matching ingredients</div>' : '');
}

function assignReceiptIng(idx, ingId) {
  var ing = ingById(ingId), item = receiptItems[idx];
  if (!ing || !item) return;
  var wasUnplaced = !item.ing;
  item.ing = ingId;
  item.ingName = ing.name;
  item.confidence = 'manual_match';
  item.include = true;
  item.sure = true;                       // Ren has looked at it
  // A shelf photo already says where the food is; a receipt line takes the food's usual place,
  // unless Ren already chose one.
  if (photoMode !== 'shelves' && (wasUnplaced || !item.zoneSet)) item.zone = ing.zone || 'fridge';
  renderReceiptReview();
}

// ═══════════════ MEALS & COOKING (setup questionnaire and Profile) ═══════════════
// The same controls appear in first-time setup and in Profile > Meals & cooking. `part` is
// 'meals' (which meals, leftovers) or 'times' (weekday cook-time limits).
var TIME_CHOICES = { breakfast:[10, 15, 20, 30, 0], lunch:[15, 20, 30, 45, 0], dinner:[20, 30, 45, 60, 0] };
function mealPrefsHTML(part) {
  if (part === 'meals') {
    return '<div>' + MEAL_TYPES.map(function(t) {
        return '<div class="toggle-row"><div class="tr-name">' + t.charAt(0).toUpperCase() + t.slice(1) + '</div>' +
          '<button class="switch' + (mealOn(t) ? ' on' : '') + '"' + switchAttrs(mealOn(t), 'Plan ' + t) + ' onclick="setMealOn(\'' + t + '\')"></button></div>';
      }).join('') + '</div>' +
      (mealOn('lunch') && mealOn('dinner')
        ? '<div class="field-label">Do you eat leftovers?</div>' +
          '<div class="toggle-row"><div><div class="tr-name">Dinner leftovers for the next day\'s lunch</div>' +
            '<div class="tr-sub">Dinners are made for twice the household, so lunch is already made.</div></div>' +
            '<button class="switch' + (settings.leftovers ? ' on' : '') + '"' + switchAttrs(settings.leftovers, 'Dinner leftovers for the next day’s lunch') + ' onclick="setLeftovers()"></button></div>'
        : '');
  }
  return MEAL_TYPES.filter(mealOn).map(function(t) {
    var cur = settings.times[t] || 0;
    return '<div class="field-label">' + t.charAt(0).toUpperCase() + t.slice(1) + ' on weekdays</div>' +
      '<div class="seg wrap">' + TIME_CHOICES[t].map(function(m) {
        return '<button class="' + (cur === m ? 'on' : '') + '" onclick="setMealTime(\'' + t + '\',' + m + ')">' + (m ? m + ' min or less' : 'Any length') + '</button>';
      }).join('') + '</div>';
  }).join('') +
  '<p class="field-hint">Weekends aren\'t limited. If nothing quick enough fits your kitchen, the quickest of the rest is used.</p>';
}
function setMealOn(t) {
  var on = !mealOn(t);
  if (!on && MEAL_TYPES.filter(mealOn).length === 1) { showToast('Plan at least one meal a day.'); return; }
  mealPrefsChanged(t + ' is ' + (on ? 'back on the plan' : 'off the plan'), function() { settings.meals[t] = on; });
}
function setLeftovers() {
  var on = !settings.leftovers;
  mealPrefsChanged('leftovers are ' + (on ? 'on' : 'off'), function() { settings.leftovers = on; });
}
function setMealTime(t, m) {
  mealPrefsChanged('your weekday ' + t + ' limit is now ' + (m ? m + ' minutes' : 'any length'), function() { settings.times[t] = m || null; });
}
// Redraw wherever the controls are, and bring the plan in line: meals switched off empty their
// slots, leftovers follow dinners, and meals over a new time limit are swapped. Turning leftovers
// on turned two lunches into leftovers and doubled every dinner, and a new time limit swapped
// meals, all without a word (feedback 1). The receipt names each one.
function mealPrefsChanged(why, apply) {
  if (document.getElementById('setup').classList.contains('open')) { apply(); renderSetup(); return; }
  var res = track(why, function() { apply(); enforceTimes(); }, { kind:'meals', mergedWhy:'you changed Meals & cooking' });
  openSub('meals');
  showToast('Saved.' + changeCount(res), seePlanAction(res));
}
function mealsSummary() {
  var on = MEAL_TYPES.filter(mealOn);
  return on.length === 3 ? 'All three' : on.map(function(t) { return t.charAt(0).toUpperCase() + t.slice(1); }).join(' + ');
}

// ═══════════════ FIRST-TIME SETUP ═══════════════
// Five short steps: a name, the household, which meals (and leftovers), weekday cook times, and
// how to start. Nothing about the kitchen is assumed: "Add my own food" starts with an empty pantry.
var setupStep = 1;
function showSetup() { setupStep = 1; renderSetup(); document.getElementById('setup').classList.add('open'); }
function renderSetup() {
  var el = document.getElementById('setupBody');
  var dots = '<div class="setup-dots">' + [1,2,3,4,5].map(function(n) { return '<i class="' + (n === setupStep ? 'on' : '') + '"></i>'; }).join('') + '</div>';
  // Someone who already has an account (say, opening the app on an iPad) signs in instead of
  // setting up again; their kitchen loads and setup closes (account.js).
  if (setupStep === 'signin') {
    el.innerHTML =
      '<div class="setup-mark"><img src="logo-setup-t.webp" alt="What the Fridge"></div>' +
      '<h2>Sign in</h2>' +
      '<p class="setup-lede">Your kitchen, plan and history load from your account.</p>' +
      (typeof accountSignInHTML === 'function' ? accountSignInHTML('setup') : '') +
      (typeof account !== 'undefined' && account.choice ? accountChoiceHTML() : '') +
      '<div class="actions"><button class="btn quiet" onclick="setupStep=1;renderSetup()">Back</button></div>';
    return;
  }
  if (setupStep === 3) {
    el.innerHTML = dots +
      '<h2>Which meals should we plan?</h2>' +
      '<p class="setup-lede">Pick the meals you\'d like help with. The others stay off the plan.</p>' +
      mealPrefsHTML('meals') +
      '<div class="actions"><button class="btn primary" onclick="setupStep=4;renderSetup()">Next</button>' +
        '<button class="btn quiet" onclick="setupStep=2;renderSetup()">Back</button></div>';
    return;
  }
  if (setupStep === 4) {
    el.innerHTML = dots +
      '<h2>How long can you cook?</h2>' +
      '<p class="setup-lede">On a weekday, how much time can each meal take?</p>' +
      mealPrefsHTML('times') +
      '<div class="actions"><button class="btn primary" onclick="setupStep=5;renderSetup()">Next</button>' +
        '<button class="btn quiet" onclick="setupStep=3;renderSetup()">Back</button></div>';
    return;
  }
  if (setupStep === 1) {
    el.innerHTML = dots +
      '<div class="setup-mark"><img src="logo-setup-t.webp" alt="What the Fridge"></div>' +
      '<h2>What the Fridge</h2>' +
      // The purpose first, then what the app does in three lines, so a new user knows what they're
      // signing up for before the first question.
      MISSION_HTML +
      '<ul class="setup-how">' +
        '<li><b>Tell it what\'s in your kitchen.</b> Snap a receipt or your shelves, or type it in.</li>' +
        '<li><b>Get three days of meals</b> (breakfast, lunch and dinner) planned around that food.</li>' +
        '<li><b>Tap Cooked it</b> and what you used comes off your kitchen list.</li>' +
      '</ul>' +
      '<p class="setup-lede">Less "what are we eating?", less forgotten spinach.</p>' +
      '<div class="field-label">What should we call you? <span>optional</span></div>' +
      '<input class="field" id="setupName" maxlength="30" placeholder="Your first name" value="' + esc(settings.name) + '" oninput="settings.name=this.value.trim()">' +
      '<div class="actions"><button class="btn primary" onclick="setupStep=2;renderSetup()">Next</button></div>' +
      (typeof accountsReady === 'function' && accountsReady()
        ? '<div class="actions"><button class="btn quiet" onclick="setupStep=\'signin\';renderSetup()">Already have an account? Sign in</button></div>' : '');
    return;
  }
  if (setupStep === 2) {
    var d = [['vegetarian','Vegetarian'], ['dairyFree','Dairy-free'], ['nutFree','Nut-free'], ['porkFree','No pork']];
    el.innerHTML = dots +
      '<h2>Who\'s eating?</h2>' +
      '<p class="setup-lede">How many people you\'re cooking for.</p>' +
      '<div class="stepper">' +
        '<button class="step-btn" aria-label="One fewer person" onclick="settings.household=Math.max(1,settings.household-1);renderSetup()"' + (settings.household <= 1 ? ' disabled' : '') + '>&minus;</button>' +
        '<div><div class="val">' + settings.household + '</div><div class="lbl">' + (settings.household === 1 ? 'person' : 'people') + '</div></div>' +
        '<button class="step-btn" aria-label="One more person" onclick="settings.household=Math.min(8,settings.household+1);renderSetup()"' + (settings.household >= 8 ? ' disabled' : '') + '>+</button>' +
      '</div>' +
      '<div class="field-label">Anything off the menu?</div>' +
      '<div>' + d.map(function(x) {
        return '<div class="toggle-row"><div class="tr-name">' + x[1] + '</div>' +
          '<button class="switch' + (settings.dietary[x[0]] ? ' on' : '') + '"' + switchAttrs(settings.dietary[x[0]], x[1]) + ' onclick="settings.dietary.' + x[0] + '=!settings.dietary.' + x[0] + ';renderSetup()"></button></div>';
      }).join('') + '</div>' +
      '<p class="field-hint">These go by how each recipe is labelled. They are <b>not</b> allergy-safe, since nothing checks individual ingredients or package labels.</p>' +
      '<div class="actions"><button class="btn primary" onclick="setupStep=3;renderSetup()">Next</button>' +
        '<button class="btn quiet" onclick="setupStep=1;renderSetup()">Back</button></div>';
    return;
  }
  el.innerHTML = dots +
    '<h2>How do you want to start?</h2>' +
    '<button class="start-card" onclick="finishSetup(\'photos\')"><b>Snap my shelves</b>' +
      '<span>Fastest. Photograph your fridge, freezer and cupboard, then tick the food Claude finds.</span></button>' +
    '<button class="start-card" onclick="finishSetup(\'own\')"><b>Add my own food</b>' +
      '<span>Start with an empty kitchen and add what you have. A rough count is fine.</span></button>' +
    '<button class="start-card" onclick="finishSetup(\'sample\')"><b>Look around with a sample kitchen</b>' +
      '<span>A made-up kitchen of ' + samplePantry().length + ' everyday foods, so you can see how planning works. Start over any time from Settings.</span></button>' +
    '<div class="actions"><button class="btn quiet" onclick="setupStep=4;renderSetup()">Back</button></div>';
}
function finishSetup(mode) {
  settings.since = todayKey();
  settings.sample = mode === 'sample';    // shows "Leave the sample kitchen" in Settings
  pantry = mode === 'sample' ? samplePantry() : [];
  plan = [];
  unreconciled = []; cookLog = []; wasteLog = []; currentDay = 1; lastNight = null; lastChange = null;
  planKitchen(false);
  renderAll();
  document.getElementById('setup').classList.remove('open');
  if (mode === 'photos') { switchTab('pantryTab'); openShelves('Pantry'); }
  else if (mode === 'own') { switchTab('pantryTab'); openAddItem(); }
  else { showToast('Welcome! This is a sample kitchen, not your own food. Settings › Leave the sample kitchen when you want to add yours.', { ms:8000, label:'OK', fn:function() {} }); }
}

// ═══════════════ SAVED STATE ═══════════════
// Everything the user changes is kept in this browser's localStorage, so a refresh or a closed
// tab loses nothing. If Ren signs in, account.js also saves it to Ren's account (Supabase) after
// each change; without an account it never leaves the device. The recipe catalog is not saved; it always
// comes from the approved file built into this page.
var STORE_KEY = 'wtf-state-v2';       // v1 (prototype10's web build) had a different pantry shape
var lastSeen = null;                  // calendar day (YYYY-MM-DD) the saved state belongs to

function saveState() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify({
      lastSeen:lastSeen || todayKey(), settings:settings, pantry:pantry, plan:plan,
      prefs:prefs, unreconciled:unreconciled, cookLog:cookLog, wasteLog:wasteLog, dayOffset:dayOffset,
      planSig:planSig, planBuiltEmpty:planBuiltEmpty, lastNight:lastNight, lastChange:lastChange
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
  var valid = s.plan.length === 9 && s.plan.every(function(e) { return e && (e.off || recipeById(e.recipe)); });

  settings = fillMealSettings(s.settings);
  syncStaples();                          // the saved staples list decides how recipes read
  pantry = s.pantry.filter(function(e) { return ingById(e.ing); });
  plan = valid ? s.plan : [];
  planSig = valid ? (s.planSig || null) : null;
  planBuiltEmpty = valid ? !!s.planBuiltEmpty : false;
  prefs = s.prefs || {};
  cookLog = s.cookLog || [];
  wasteLog = s.wasteLog || [];
  unreconciled = (s.unreconciled || []).filter(function(u) { return recipeById(u.recipe); });
  dayOffset = s.dayOffset || 0;
  lastNight = valid && s.lastNight && recipeById(s.lastNight.recipe) ? s.lastNight : null;
  lastChange = valid && s.lastChange && s.lastChange.lines ? s.lastChange : null;
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
    var start = parseKey(lastSeen), recap = newRecap();
    recap.days = Math.min(missed, 3);
    for (var i = 0; i < recap.days; i++) { rollDay(addDays(start, i), recap); }
    // Days rolled in during catch-up were planned against the wrong weekday.
    dayReceipt(recap, enforceTimesNamed());
  }
  lastSeen = todayKey();
  return Math.max(missed, 0);
}

// A home-screen app is usually resumed, not reloaded, so check the date on return too. The day
// summary sits at the top of the Plan tab, so that's where Ren lands.
document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'visible' && catchUp() > 0) {
    // Land on the summary, unless a form is open: a half-added item shouldn't be thrown away.
    if (!document.getElementById('subScreen').classList.contains('open')) { closeDetail(); switchTab('planTab'); }
    renderAll();
  }
});

// "Load the sample kitchen" and "Start over" were demo controls and are gone from the published app.
// One part of Start over had a real job, though: it was the only way out of the sample kitchen a
// new user can pick at setup, and the welcome toast told them so. So the exit survives, shown only
// while sample food is loaded — someone using their own food never sees it.
function leaveSample() {
  if (!confirm('Leave the sample kitchen? This clears the sample food and anything you’ve added, and starts setup again with your own.')) { return; }
  resetKitchen();
}
// Clears this browser's kitchen and opens setup. Start over asks first; signing out and deleting
// an account (account.js) have already asked in their own words.
function resetKitchen() {
  try { localStorage.removeItem(STORE_KEY); } catch (e) {}
  // Testing tools stay as they were: someone testing the app starts over often, and shouldn't
  // have to dig the switch out of About each time.
  settings.name = ''; settings.since = null; settings.household = 2; settings.sample = false;
  settings.dietary = { vegetarian:false, dairyFree:false, nutFree:false, porkFree:false };
  settings.noStaples = {};
  settings.meals = { breakfast:true, lunch:true, dinner:true }; settings.leftovers = false;
  settings.times = { breakfast:20, lunch:30, dinner:null };
  pantry = []; plan = []; planSig = null; prefs = {}; unreconciled = []; cookLog = []; wasteLog = []; dayOffset = 0; currentDay = 1; lastNight = null; lastChange = null;
  planKitchen(false);
  closeDetail(); closeSub(); switchTab('planTab'); tabHistory = []; renderBackBar();
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

var versionEl = document.getElementById('appVersion');
if (versionEl) { versionEl.textContent = 'Version ' + APP_VERSION; }
var returning = loadState();
if (plan.length !== 9) { planKitchen(plan.length > 0); }
else { enforceTimes(); }
renderAll();
if (!returning) { showSetup(); }
scheduleMidnight();

// Offline support and home-screen install. Only works when served over http(s),
// e.g. from GitHub Pages — opening the file directly skips it harmlessly.
if ('serviceWorker' in navigator && location.protocol.indexOf('http') === 0) {
  navigator.serviceWorker.register('sw.js').catch(function() {});
}
