// ═══════════════ SETTINGS ═══════════════
var settings = {
  household: 2,
  dietary: { vegetarian:false, dairyFree:false, nutFree:false, porkFree:false },
  notify:  { cooked:true, expiry:true, planReady:false }
};

// ═══════════════ PANTRY ═══════════════
// qty is live and changes when Ren marks a meal cooked.
// `ago` = days since purchase, `life` = typical shelf life in days for its storage zone.
// Both null means no date on record — the item stays "unknown", never assumed fresh.
var pantry = [
  { id:'eggs',       name:'Eggs',                   qty:12,   unit:'ea',    zone:'fridge',   ago:4,    life:28,  note:'3–5 weeks in shell' },
  { id:'spinach',    name:'Spinach',                qty:200,  unit:'g',     zone:'fridge',   ago:3,    life:6,   note:'5–7 days refrigerated' },
  { id:'chicken',    name:'Chicken breast',         qty:24,   unit:'oz',    zone:'fridge',   ago:1,    life:2,   note:'1–2 days, fresh poultry' },
  { id:'asparagus',  name:'Asparagus',              qty:1,    unit:'bunch', zone:'fridge',   ago:3,    life:5,   note:'3–5 days refrigerated' },
  { id:'shrimp',     name:'Shrimp (thawed)',        qty:8,    unit:'oz',    zone:'fridge',   ago:1,    life:2,   note:'1–2 days once thawed' },
  { id:'lemon',      name:'Lemons',                 qty:2,    unit:'ea',    zone:'fridge',   ago:4,    life:21,  note:'2–4 weeks refrigerated' },
  { id:'cucumber',   name:'Cucumber',               qty:1,    unit:'ea',    zone:'fridge',   ago:2,    life:7,   note:'about 1 week' },
  { id:'tomatoes',   name:'Cherry tomatoes',        qty:2,    unit:'cup',   zone:'fridge',   ago:3,    life:6,   note:'5–7 days' },
  { id:'rice',       name:'Cooked rice',            qty:3,    unit:'cup',   zone:'fridge',   ago:2,    life:4,   note:'leftovers, 3–4 days' },
  { id:'yogurt',     name:'Greek yogurt',           qty:500,  unit:'g',     zone:'fridge',   ago:2,    life:14,  note:'1–2 weeks' },
  { id:'milk',       name:'Milk',                   qty:1000, unit:'ml',    zone:'fridge',   ago:3,    life:8,   note:'5–7 days past printed date' },
  { id:'mozzarella', name:'Fresh mozzarella',       qty:8,    unit:'oz',    zone:'fridge',   ago:3,    life:7,   note:'1 week once opened' },
  { id:'salsa',      name:'Salsa',                  qty:2,    unit:'cup',   zone:'fridge',   ago:6,    life:14,  note:'2 weeks once opened' },
  { id:'cheese',     name:'Shredded cheese',        qty:200,  unit:'g',     zone:'fridge',   ago:6,    life:25,  note:'3–4 weeks' },
  { id:'mystery',    name:'Container of something', qty:1,    unit:'ea',    zone:'fridge',   ago:null, life:null, note:null },
  { id:'berries',    name:'Mixed berries',          qty:2,    unit:'cup',   zone:'freezer',  ago:8,    life:240, note:'6–8 months frozen' },
  { id:'peas',       name:'Peas & carrots',         qty:500,  unit:'g',     zone:'freezer',  ago:20,   life:300, note:'8–12 months frozen' },
  { id:'avocado',    name:'Avocados',               qty:2,    unit:'ea',    zone:'cupboard', ago:4,    life:5,   note:'ripening on the counter' },
  { id:'banana',     name:'Bananas',                qty:3,    unit:'ea',    zone:'cupboard', ago:2,    life:5,   note:'3–5 days on the counter' },
  { id:'ciabatta',   name:'Ciabatta rolls',         qty:4,    unit:'ea',    zone:'cupboard', ago:2,    life:3,   note:'best within 2–3 days' },
  { id:'onion',      name:'Red onion',              qty:1,    unit:'ea',    zone:'cupboard', ago:4,    life:30,  note:'weeks while whole' },
  { id:'tortilla',   name:'Whole wheat tortillas',  qty:6,    unit:'ea',    zone:'cupboard', ago:5,    life:60,  note:'check the printed date' },
  { id:'oats',       name:'Rolled oats',            qty:500,  unit:'g',     zone:'cupboard', ago:20,   life:365, note:'shelf-stable' },
  { id:'pb',         name:'Peanut butter',          qty:32,   unit:'tbsp',  zone:'cupboard', ago:30,   life:365, note:'shelf-stable' },
  { id:'chickpeas',  name:'Chickpeas',              qty:2,    unit:'can',   zone:'cupboard', ago:40,   life:730, note:'shelf-stable' },
  { id:'blackbeans', name:'Black beans',            qty:2,    unit:'can',   zone:'cupboard', ago:40,   life:730, note:'shelf-stable' },
  { id:'spaghetti',  name:'Whole wheat spaghetti',  qty:12,   unit:'oz',    zone:'cupboard', ago:25,   life:540, note:'shelf-stable' },
  { id:'pork',       name:'Pork chops',             qty:4,    unit:'ea',    zone:'fridge',   ago:1,    life:4,   note:'3–5 days refrigerated' },
  { id:'bellpepper', name:'Bell peppers',           qty:2,    unit:'ea',    zone:'fridge',   ago:3,    life:9,   note:'1–2 weeks refrigerated' },
  { id:'quinoa',     name:'Quinoa',                 qty:400,  unit:'g',     zone:'cupboard', ago:30,   life:540, note:'shelf-stable' },
  { id:'corn',       name:'Sweet corn',             qty:2,    unit:'can',   zone:'cupboard', ago:40,   life:730, note:'shelf-stable' }
];

// ═══════════════ DIETARY RULES ═══════════════
// Each recipe carries tags for what it actually contains, from its REQUIRED
// ingredients and staples only — an optional garnish never disqualifies a recipe,
// it is simply dropped when a restriction is on.
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
// constraint, not a ranking preference — nut-free in particular is an allergy.
function violatesDiet(recipe) {
  var blocked = activeBlocks();
  return (recipe.tags || []).some(function(t) { return blocked.indexOf(t) > -1; });
}
// Optional extras are hidden rather than blocking the recipe.
function visibleNeeds(recipe) {
  var blocked = activeBlocks();
  return (recipe.needs || []).filter(function(n) { return !(n.tag && blocked.indexOf(n.tag) > -1); });
}

// ═══════════════ RECIPE CATALOG ═══════════════
// Every recipe here comes from the approved source: knowledge/Combined_Recipe_Database.md
// `id` is the slug of the recipe title and doubles as the image filename.
// Dietary tags are derived from the database's own Dietary line, inverted:
// the file lists what a recipe SATISFIES, these list what it CONTAINS.
// `ing` quantities are PER SERVING — the app multiplies by household size.
// `needs` are ingredients not tracked in the pantry; optional ones don't block feasibility.
// `nutri` is an illustrative estimate — the approved recipe files carry no nutrition data.
var recipes = [
  // ── breakfast ──
  { id:'spinach-egg-and-avocado-breakfast-wrap', name:'Spinach, Egg and Avocado Breakfast Wrap', type:'breakfast', time:'10 min',
    tags:[],
    ing:[{id:'eggs',qty:1},{id:'spinach',qty:30},{id:'avocado',qty:0.5},{id:'tortilla',qty:1}],
    needs:[], staples:'Olive oil, salt, pepper', nutri:{kcal:340,p:18,c:28,f:18},
    note:'Quick and protein-packed. Uses the avocado at peak ripeness.' },

  { id:'high-protein-greek-yogurt-and-berry-parfait', name:'High-Protein Greek Yogurt and Berry Parfait', type:'breakfast', time:'5 min',
    tags:['dairy','nuts'],
    ing:[{id:'yogurt',qty:150},{id:'berries',qty:0.5}],
    needs:[{name:'Chopped nuts',optional:true,tag:'nuts'}], staples:'Honey, cinnamon', nutri:{kcal:260,p:20,c:28,f:6},
    note:'No cooking at all. The frozen berries thaw into the yogurt overnight.' },

  { id:'peanut-butter-banana-oatmeal', name:'Peanut Butter Banana Oatmeal', type:'breakfast', time:'10 min',
    tags:['nuts'],
    ing:[{id:'oats',qty:50},{id:'banana',qty:0.5},{id:'pb',qty:2},{id:'milk',qty:120}],
    needs:[], staples:'Cinnamon, maple syrup', nutri:{kcal:420,p:14,c:52,f:18},
    note:'Uses up a banana before it turns. Ready in one pot.' },

  { id:'veggie-scramble-with-feta-and-herbs', name:'Veggie Scramble with Feta and Herbs', type:'breakfast', time:'10 min',
    tags:['dairy'],
    ing:[{id:'eggs',qty:2},{id:'tomatoes',qty:0.25},{id:'onion',qty:0.15}],
    needs:[{name:'Feta cheese',optional:true,tag:'dairy'}], staples:'Olive oil, herbs, salt, pepper', nutri:{kcal:290,p:19,c:7,f:20},
    note:'A fast way to clear soft tomatoes and a bit of onion.' },

  { id:'savory-oatmeal-with-soft-egg-and-scallions', name:'Savory Oatmeal with Soft Egg and Scallions', type:'breakfast', time:'15 min',
    tags:[],
    ing:[{id:'oats',qty:50},{id:'eggs',qty:1}],
    needs:[{name:'Scallions',optional:true}], staples:'Soy sauce, sesame oil', nutri:{kcal:330,p:15,c:40,f:12},
    note:'Savoury rather than sweet, if the household is tired of sweet breakfasts.' },

  // ── lunch ──
  { id:'mediterranean-chickpea-salad', name:'Mediterranean Chickpea Salad', type:'lunch', time:'10 min',
    tags:['dairy'],
    ing:[{id:'chickpeas',qty:0.5},{id:'cucumber',qty:0.5},{id:'tomatoes',qty:0.5},{id:'onion',qty:0.25}],
    needs:[{name:'Feta cheese',optional:true,tag:'dairy'}], staples:'Olive oil, lemon, oregano', nutri:{kcal:310,p:12,c:38,f:12},
    note:'A packable, no-cook lunch that uses the tomatoes before they go.' },

  { id:'caprese-chicken-ciabatta-sandwich', name:'Caprese Chicken Ciabatta Sandwich', type:'lunch', time:'10 min',
    tags:['meat','dairy'],
    ing:[{id:'chicken',qty:3},{id:'mozzarella',qty:2},{id:'tomatoes',qty:0.25},{id:'ciabatta',qty:1}],
    needs:[], staples:'Basil, olive oil, balsamic', nutri:{kcal:480,p:38,c:42,f:16},
    note:'Uses the ciabatta while it is still good, and leftover cooked chicken.' },

  { id:'quick-black-bean-and-rice-burrito-bowl', name:'Quick Black Bean and Rice Burrito Bowl', type:'lunch', time:'10 min',
    tags:['dairy'],
    ing:[{id:'blackbeans',qty:0.5},{id:'rice',qty:0.5},{id:'salsa',qty:0.25},{id:'cheese',qty:30},{id:'avocado',qty:0.25}],
    needs:[], staples:'Lime, cumin, salt', nutri:{kcal:430,p:16,c:58,f:14},
    note:'Assembles cold or warm, and moves the cooked rice along.' },

  { id:'southwestern-mason-jar-quinoa-salad', name:'Southwestern Mason Jar Quinoa Salad', type:'lunch', time:'15 min',
    tags:[],
    ing:[{id:'quinoa',qty:60},{id:'blackbeans',qty:0.25},{id:'corn',qty:0.25},{id:'bellpepper',qty:0.5}],
    needs:[{name:'Fresh cilantro',optional:true}], staples:'Lime, olive oil, cumin, salt', nutri:{kcal:360,p:13,c:54,f:10},
    note:'Layers in a jar and keeps for days. Entirely plant-based.' },

  { id:'healthy-egg-salad-lettuce-boats', name:'Healthy Egg Salad Lettuce Boats', type:'lunch', time:'15 min',
    tags:['dairy'],
    ing:[{id:'eggs',qty:1.5},{id:'yogurt',qty:30}],
    needs:[{name:'Romaine lettuce',optional:false}], staples:'Dijon, green onion, salt, pepper', nutri:{kcal:220,p:15,c:6,f:15},
    note:'Greek yogurt instead of mayo. Pack the leaves separately.' },

  { id:'sesame-peanut-noodle-bowl', name:'Sesame Peanut Noodle Bowl', type:'lunch', time:'15 min',
    tags:['nuts'],
    ing:[{id:'spaghetti',qty:2},{id:'pb',qty:2},{id:'cucumber',qty:0.25}],
    needs:[], staples:'Soy sauce, sesame oil, lime', nutri:{kcal:400,p:14,c:52,f:16},
    note:'Eaten cold, so it keeps well in a lunch container.' },

  // ── dinner ──
  { id:'sheet-pan-garlic-lemon-chicken-and-asparagus', name:'Sheet Pan Garlic Lemon Chicken and Asparagus', type:'dinner', time:'25 min',
    tags:['meat'],
    ing:[{id:'chicken',qty:8},{id:'asparagus',qty:0.5},{id:'lemon',qty:0.5}],
    needs:[], staples:'Garlic, olive oil, salt, pepper', nutri:{kcal:380,p:46,c:10,f:16},
    note:'The asparagus and chicken both need using. One pan, minimal cleanup.' },

  { id:'garlic-butter-shrimp-and-spinach-pasta', name:'Garlic Butter Shrimp and Spinach Pasta', type:'dinner', time:'20 min',
    tags:['fish','dairy'],
    ing:[{id:'shrimp',qty:4},{id:'spinach',qty:60},{id:'spaghetti',qty:3}],
    needs:[{name:'Parmesan',optional:true,tag:'dairy'}], staples:'Butter, garlic, olive oil', nutri:{kcal:450,p:32,c:48,f:12},
    note:'Thawed shrimp will not wait. This finishes the spinach too.' },

  { id:'easy-egg-and-veggie-fried-rice', name:'Easy Egg and Veggie Fried Rice', type:'dinner', time:'15 min',
    tags:[],
    ing:[{id:'rice',qty:1},{id:'eggs',qty:1},{id:'peas',qty:100}],
    needs:[], staples:'Soy sauce, sesame oil, garlic', nutri:{kcal:400,p:16,c:56,f:12},
    note:'Day-old rice fries better than fresh. Clears the freezer veg too.' },

  { id:'skillet-caprese-chicken', name:'Skillet Caprese Chicken', type:'dinner', time:'25 min',
    tags:['meat','dairy'],
    ing:[{id:'chicken',qty:6},{id:'mozzarella',qty:2},{id:'tomatoes',qty:0.5}],
    needs:[], staples:'Olive oil, basil, marinara', nutri:{kcal:420,p:44,c:8,f:22},
    note:'One skillet. Good when the mozzarella needs using.' },

  { id:'honey-mustard-glazed-pork-chops', name:'Honey Mustard Glazed Pork Chops', type:'dinner', time:'20 min',
    tags:['meat','pork'],
    ing:[{id:'pork',qty:1},{id:'bellpepper',qty:0.5}],
    needs:[{name:'Green beans',optional:true}], staples:'Dijon, honey, garlic powder, olive oil', nutri:{kcal:410,p:38,c:14,f:22},
    note:'Thin-cut chops sear fast. The glaze is three cupboard staples.' },

  { id:'15-minute-tomato-spinach-tortellini', name:'15-Minute Tomato Spinach Tortellini', type:'dinner', time:'15 min',
    tags:['dairy'],
    ing:[{id:'spinach',qty:60},{id:'tomatoes',qty:0.5}],
    needs:[{name:'Cheese tortellini',optional:false,tag:'dairy'}], staples:'Marinara, parmesan', nutri:{kcal:460,p:18,c:58,f:18},
    note:'Fastest dinner in the file, but the tortellini has to be on hand.' },

  { id:'tuscan-white-bean-and-spinach-soup', name:'Tuscan White Bean and Spinach Soup', type:'dinner', time:'20 min',
    tags:['dairy'],
    ing:[{id:'spinach',qty:50},{id:'tomatoes',qty:0.25}],
    needs:[{name:'Cannellini beans',optional:false},{name:'Vegetable broth',optional:false}], staples:'Garlic, olive oil', nutri:{kcal:300,p:15,c:42,f:8},
    note:'Warming and cheap, but needs beans and broth from the cupboard.' }
];

// ═══════════════ PLAN ═══════════════
// Three days x breakfast / lunch / dinner. status: pending | accepted | skipped
var plan = [
  { recipe:'spinach-egg-and-avocado-breakfast-wrap',       status:'pending' },
  { recipe:'mediterranean-chickpea-salad',             status:'pending' },
  { recipe:'sheet-pan-garlic-lemon-chicken-and-asparagus', status:'pending' },
  { recipe:'peanut-butter-banana-oatmeal',             status:'pending' },
  { recipe:'caprese-chicken-ciabatta-sandwich',        status:'pending' },
  { recipe:'garlic-butter-shrimp-and-spinach-pasta',       status:'pending' },
  { recipe:'high-protein-greek-yogurt-and-berry-parfait',  status:'pending' },
  { recipe:'quick-black-bean-and-rice-burrito-bowl',       status:'pending' },
  { recipe:'easy-egg-and-veggie-fried-rice',               status:'pending' }
];

var MEAL_TYPES = ['breakfast','lunch','dinner'];
var currentDay = 1;              // 1..3
var currentTab = 'planTab';
var dayOffset  = 0;              // advanced by the midnight roll
var unreconciled = [];           // meals that left the horizon still unconfirmed

// ═══════════════ HELPERS ═══════════════
function recipeById(id) { for (var i=0;i<recipes.length;i++) { if (recipes[i].id === id) return recipes[i]; } return null; }
function pantryById(id) { for (var i=0;i<pantry.length;i++)  { if (pantry[i].id === id)  return pantry[i];  } return null; }
function planIndex(day, type) { return (day - 1) * 3 + MEAL_TYPES.indexOf(type); }

function round2(n) { return Math.round(n * 100) / 100; }

function fmtQty(qty, unit) {
  var n = round2(qty);
  var s = (n % 1 === 0) ? String(n) : String(n);
  if (!unit || unit === 'ea') { return s; }
  return s + ' ' + unit;
}

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
function fmtDate(d) { return d.toLocaleDateString(undefined, { month:'short', day:'numeric' }); }

// ─── freshness ───
function freshness(item) {
  if (item.ago === null || item.life === null) { return { known:false, cls:'unknown', text:'unknown' }; }
  var left = item.life - item.ago;
  var cls, text;
  if (left <= 0)      { cls = 'now';  text = 'past window'; }
  else if (left <= 1) { cls = 'now';  text = 'today'; }
  else if (left <= 3) { cls = 'soon'; text = left + ' days'; }
  else                { cls = 'ok';   text = 'fine'; }
  return { known:true, left:left, cls:cls, text:text };
}
function boughtLine(item) {
  if (item.ago === null) { return 'No purchase date on record — no freshness estimate possible.'; }
  var d = new Date(); d.setDate(d.getDate() - item.ago);
  var f = freshness(item);
  var use = new Date(); use.setDate(use.getDate() + f.left);
  return 'Bought ' + fmtDate(d) + ' · ' + item.note + ' · through ' + fmtDate(use);
}

// ─── requirements & feasibility ───
function requiredFor(recipe, id) {
  for (var i=0;i<recipe.ing.length;i++) { if (recipe.ing[i].id === id) return recipe.ing[i].qty * settings.household; }
  return 0;
}
// Totals still to be cooked (pending meals only — accepted meals are already deducted).
function pendingTotals() {
  var totals = {};
  plan.forEach(function(entry) {
    if (entry.status !== 'pending') return;
    var r = recipeById(entry.recipe);
    if (!r) return;
    r.ing.forEach(function(i) {
      totals[i.id] = (totals[i.id] || 0) + i.qty * settings.household;
    });
  });
  return totals;
}
function shortfalls() {
  var totals = pendingTotals(), out = [];
  for (var id in totals) {
    var p = pantryById(id);
    if (!p) continue;
    if (round2(totals[id]) > round2(p.qty)) {
      out.push({ item:p, need:round2(totals[id]), have:round2(p.qty) });
    }
  }
  // required (non-optional) ingredients the pantry does not track at all
  plan.forEach(function(entry) {
    if (entry.status !== 'pending') return;
    var r = recipeById(entry.recipe);
    visibleNeeds(r).forEach(function(n) {
      if (n.optional) return;
      if (!out.some(function(o){ return o.missingName === n.name; })) {
        out.push({ missingName:n.name, recipe:r.name });
      }
    });
  });
  return out;
}
function optionalMissing() {
  var names = [];
  plan.forEach(function(entry) {
    if (entry.status === 'skipped') return;
    var r = recipeById(entry.recipe);
    visibleNeeds(r).forEach(function(n) { if (n.optional && names.indexOf(n.name) === -1) names.push(n.name); });
  });
  return names;
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

function renderBanner() {
  var el = document.getElementById('banner');
  var short = shortfalls();
  var pendingCount = plan.filter(function(e){ return e.status === 'pending'; }).length;

  if (short.length === 0) {
    var opt = optionalMissing();
    el.className = 'banner';
    el.innerHTML =
      '<span class="tick"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5.5 5.5L20 7"/></svg></span>' +
      '<div class="text"><strong>No grocery trip required</strong><span>' +
        (pendingCount ? pendingCount + ' meals still to cook, all covered by what you have.' : 'Every meal in this plan is logged. Nice work.') +
        (opt.length ? ' Optional extras missing: ' + opt.join(', ') + '.' : '') +
      '</span></div>';
  } else {
    var lines = short.map(function(s) {
      if (s.missingName) { return s.missingName + ' (not in your pantry)'; }
      return s.item.name + ': need ' + fmtQty(s.need, s.item.unit) + ', have ' + fmtQty(s.have, s.item.unit);
    });
    el.className = 'banner short';
    el.innerHTML =
      '<span class="tick"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round"><path d="M12 7v6"/><path d="M12 17h.01"/></svg></span>' +
      '<div class="text"><strong>' + short.length + ' shortfall' + (short.length > 1 ? 's' : '') + ' in this plan</strong>' +
      '<span>' + lines.join(' · ') + '. Swap a meal or shop for the gap.</span></div>';
  }
}

function mealChips(recipe) {
  // Surface the most urgent ingredient this recipe uses.
  var out = [], urgent = null;
  recipe.ing.forEach(function(i) {
    var p = pantryById(i.id); if (!p) return;
    var f = freshness(p);
    if (!f.known) return;
    if (!urgent || f.left < urgent.f.left) { urgent = { p:p, f:f }; }
  });
  if (urgent && urgent.f.left <= 3) {
    out.push({ cls:urgent.f.cls, text:'uses ' + urgent.p.name.toLowerCase().split(' ')[0] + ' · ' + urgent.f.text });
  } else {
    out.push({ cls:'ok', text:'all in window' });
  }
  var req = (recipe.needs || []).filter(function(n){ return !n.optional; });
  if (req.length) { out.push({ cls:'now', text:'needs ' + req[0].name.toLowerCase() }); }
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

    var chips = mealChips(r).map(function(c) { return chipHTML(c.cls, c.text); }).join('');
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
        '<p class="meta">' + r.type.charAt(0).toUpperCase() + r.type.slice(1) + ' · ' + r.time +
          ' · serves ' + settings.household + ' · ' + r.nutri.kcal + ' kcal</p>' +
        '<div class="chip-row">' + chips + '</div>' +
      '</div>';

    container.appendChild(card);
  });
}

function renderAlloc() {
  var body = document.getElementById('allocBody');
  if (!body) return;
  var ids = [];
  plan.forEach(function(entry) {
    if (entry.status === 'skipped') return;
    var r = recipeById(entry.recipe);
    r.ing.forEach(function(i) { if (ids.indexOf(i.id) === -1) ids.push(i.id); });
  });
  var rows = ids.map(function(id) {
    var p = pantryById(id);
    var cells = '';
    for (var d=1; d<=3; d++) {
      var tot = 0;
      MEAL_TYPES.forEach(function(t) {
        var e = plan[planIndex(d,t)];
        if (e.status === 'skipped') return;
        tot += requiredFor(recipeById(e.recipe), id);
      });
      cells += tot > 0 ? '<td>' + fmtQty(tot, p.unit) + '</td>' : '<td class="nil">&mdash;</td>';
    }
    return '<tr><td>' + p.name + '</td>' + cells + '</tr>';
  }).join('');
  body.innerHTML = rows;
}

// ═══════════════ PANTRY RENDERING ═══════════════
function renderPantry() {
  var att = document.getElementById('pantryAttention');
  var zones = document.getElementById('pantryZones');

  var attention = pantry.filter(function(p) {
    if (p.qty <= 0) return false;
    var f = freshness(p);
    return !f.known || f.left <= 3;
  }).sort(function(a,b) {
    var fa = freshness(a), fb = freshness(b);
    if (!fa.known) return 1;
    if (!fb.known) return -1;
    return fa.left - fb.left;
  });

  att.innerHTML = attention.map(function(p) {
    var f = freshness(p);
    return '<div class="pantry-item">' +
      '<div>' +
        '<div class="name">' + p.name + '</div>' +
        '<div class="qty">' + fmtQty(p.qty, p.unit) + ' · ' + p.zone + '</div>' +
        '<div class="basis">' + boughtLine(p) + '</div>' +
      '</div>' + chipHTML(f.cls, f.text) +
    '</div>';
  }).join('') || '<p class="pantry-note" style="margin-top:0;">Nothing needs urgent attention. Rare and beautiful.</p>';

  var ZONES = [
    { key:'fridge',   label:'Fridge' },
    { key:'freezer',  label:'Freezer' },
    { key:'cupboard', label:'Cupboard' }
  ];
  zones.innerHTML = ZONES.map(function(z) {
    var items = pantry.filter(function(p) { return p.zone === z.key; });
    var inStock = items.filter(function(p) { return p.qty > 0; }).length;
    var open = openZones[z.key];
    var lines = items.map(function(p) {
      var f = freshness(p);
      return '<div class="zone-line' + (p.qty <= 0 ? ' out' : '') + '">' +
        '<div><div class="zl-name">' + p.name + '</div>' +
        '<div class="zl-sub">' + (f.known ? p.note : 'no date on record — freshness unknown') + '</div></div>' +
        '<div class="zl-qty">' + (p.qty > 0 ? fmtQty(p.qty, p.unit) : 'out') + '</div>' +
      '</div>';
    }).join('');
    return '<div class="zone-row' + (open ? ' open' : '') + '" onclick="toggleZone(\'' + z.key + '\')">' +
        '<span class="zone-name">' + z.label + '</span>' +
        '<span class="zone-count">' + inStock + ' items <span class="caret">&rsaquo;</span></span>' +
      '</div>' +
      (open ? '<div class="zone-items">' + lines + '</div>' : '');
  }).join('');
}

var openZones = { fridge:false, freezer:false, cupboard:false };
function toggleZone(key) { openZones[key] = !openZones[key]; renderPantry(); }

// ═══════════════ DETAIL VIEW ═══════════════
var detailIndex = null;

function openDetail(idx) {
  detailIndex = idx;
  var entry = plan[idx];
  var r = recipeById(entry.recipe);
  var overlay = document.getElementById('detailOverlay');

  document.getElementById('detailHero').style.background = heroFor(r);
  document.getElementById('detailTitle').textContent = r.name;
  var day = Math.floor(idx / 3);
  document.getElementById('detailBackLabel').textContent = dayLabel(day) + ' · ' + r.type;

  var html = ratingBarHTML(r.id) +
    '<div class="detail-facts">' +
      '<div class="detail-fact">⏱ ' + r.time + '</div>' +
      '<div class="detail-fact">👤 Serves ' + settings.household + '</div>' +
    '</div>' +
    '<div class="nutri">' +
      '<div class="nutri-cell"><div class="n">' + r.nutri.kcal + '</div><div class="l">kcal</div></div>' +
      '<div class="nutri-cell"><div class="n">' + r.nutri.p + 'g</div><div class="l">protein</div></div>' +
      '<div class="nutri-cell"><div class="n">' + r.nutri.c + 'g</div><div class="l">carbs</div></div>' +
      '<div class="nutri-cell"><div class="n">' + r.nutri.f + 'g</div><div class="l">fat</div></div>' +
    '</div>' +
    '<p class="nutri-note">Estimated per serving. Nutrition is not in the approved recipe files — treat as indicative.</p>' +
    '<div class="section-label" style="margin-top:0;">From your kitchen &middot; for ' + settings.household + '</div>' +
    '<div class="ingredient-card">';

  r.ing.forEach(function(i) {
    var p = pantryById(i.id);
    var need = i.qty * settings.household;
    var f = freshness(p);
    var enough = p.qty >= need;
    html += '<div class="ingredient-row">' +
      '<div>' +
        '<div class="ingredient-name">' + p.name + ' — ' + fmtQty(need, p.unit) + '</div>' +
        '<div class="ingredient-basis">' + boughtLine(p) +
          (enough ? '' : ' · <b>only ' + fmtQty(p.qty, p.unit) + ' on hand</b>') +
        '</div>' +
      '</div>' + chipHTML(enough ? f.cls : 'now', enough ? f.text : 'short') +
    '</div>';
  });
  html += '<div class="ingredient-row"><div>' +
      '<div class="ingredient-name">' + r.staples + '</div>' +
      '<div class="ingredient-basis">Assumed on hand — standard staples in the recipe file</div>' +
    '</div></div></div>';

  visibleNeeds(r).forEach(function(n) {
    html += '<div class="missing-callout"><b>Missing: ' + n.name + '</b><span>' +
      (n.optional ? 'Not on your list — the dish works fine without it.' : 'Required for this recipe. Swap the meal or pick it up.') +
      '</span></div>';
  });

  if (entry.dietBlocked) {
    html += '<div class="missing-callout"><b>Doesn\'t fit your dietary settings</b><span>' +
      'This is ' + (r.tags || []).join(' / ') + ', and nothing else of this type in the approved recipe files fits ' +
      activeDietLabels().join(' + ') + '. Relax a restriction or add an approved recipe that works.</span></div>' +
      '<div class="actions"><button class="btn ghost" onclick="switchTab(\'profileTab\');openSub(\'dietary\');">Review dietary settings</button></div>';
  } else if (entry.status === 'accepted') {
    html += '<div class="actions">' +
        '<button class="btn ghost" onclick="undoAccept(' + idx + ')">Undo — put ingredients back</button>' +
      '</div>' +
      '<p class="detail-note">Marked cooked. The ingredients above have been deducted from your pantry.</p>';
  } else if (entry.status === 'skipped') {
    html += '<div class="actions">' +
        '<button class="btn primary" onclick="unskip(' + idx + ')">Put it back on the plan</button>' +
      '</div>' +
      '<p class="detail-note">Skipped. Nothing was deducted from your pantry.</p>';
  } else {
    html += '<div class="actions">' +
        '<button class="btn primary" onclick="acceptMeal(' + idx + ')">Accept</button>' +
        '<button class="btn ghost" onclick="swapMeal(' + idx + ')">Swap</button>' +
        '<button class="btn quiet" onclick="skipMeal(' + idx + ')">Skip</button>' +
      '</div>' +
      '<p class="detail-note">' + r.note + '<br><br>' +
        'Accepting deducts these ingredients from your pantry. Swap and Skip do not. ' +
        'Freshness windows are estimates from purchase dates and the norms in <i>shelf-life-norms.md</i> — not a check of the food itself.' +
      '</p>';
  }

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

  r.ing.forEach(function(i) {
    var p = pantryById(i.id);
    if (!p) return;
    p.qty = round2(Math.max(0, p.qty - i.qty * settings.household));
  });
  entry.status = 'accepted';

  closeDetail();
  renderAll();
  showToast('✅ Cooked — ingredients deducted from your pantry.');
}

function undoAccept(idx) {
  var entry = plan[idx];
  if (entry.status !== 'accepted') return;
  var r = recipeById(entry.recipe);
  r.ing.forEach(function(i) {
    var p = pantryById(i.id);
    if (!p) return;
    p.qty = round2(p.qty + i.qty * settings.household);
  });
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

// Picks the approved recipe of the same meal type that shares the most ingredients
// with the current one, preferring what the pantry can actually cover.
// Dietary restrictions are applied as a hard filter, never as a ranking nudge.
function bestAlternative(idx, current, allowRepeat) {
  var inPlan = plan.map(function(e, i) { return i === idx ? null : e.recipe; });

  var candidates = recipes.filter(function(r) {
    if (r.type !== current.type) return false;
    if (r.id === current.id) return false;
    if (!allowRepeat && inPlan.indexOf(r.id) > -1) return false;
    if (getPref(r.id).vote === 'down') return false;
    if (violatesDiet(r)) return false;
    return true;
  });
  if (!candidates.length) return null;

  var curIds = current.ing.map(function(i){ return i.id; });
  candidates.forEach(function(r) {
    var shared = r.ing.filter(function(i){ return curIds.indexOf(i.id) > -1; }).length;
    var covered = r.ing.filter(function(i) {
      var p = pantryById(i.id);
      return p && p.qty >= i.qty * settings.household;
    }).length;
    var gaps = (r.needs || []).filter(function(n){ return !n.optional; }).length;
    r._score = shared * 3 + covered * 2 - gaps * 4 + (getPref(r.id).fav ? 5 : 0);
  });
  candidates.sort(function(a,b){ return b._score - a._score; });
  return candidates[0];
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

  var shared = pick.ing.filter(function(i){ return current.ing.some(function(c){ return c.id === i.id; }); })
                       .map(function(i){ return pantryById(i.id).name.toLowerCase(); });
  showToast((silent ? 'Replaced with ' : 'Swapped to ') + pick.name +
            (shared.length ? ' — still uses ' + shared.slice(0,2).join(' & ') : ''));
}

// Applied whenever a dietary preference changes. Any pending meal that breaks a
// restriction is swapped for a compliant one. Meals already marked cooked are left
// alone — the food is eaten; rewriting history would be dishonest.
// If nothing in the approved files fits, the slot is flagged rather than filled
// with something that breaks the restriction.
function enforceDiet() {
  var swapped = [], stuck = [];

  plan.forEach(function(entry, idx) {
    if (entry.status !== 'pending') return;
    var r = recipeById(entry.recipe);
    if (!violatesDiet(r)) { delete entry.dietBlocked; return; }

    // Prefer something not already in the plan; if the compliant pool is that
    // small, repeating a compliant meal beats leaving a dead slot.
    var pick = bestAlternative(idx, r) || bestAlternative(idx, r, true);
    if (pick) {
      entry.recipe = pick.id;
      delete entry.dietBlocked;
      swapped.push(r.name + ' → ' + pick.name);
    } else {
      entry.dietBlocked = true;
      stuck.push(r.type);
    }
  });

  renderAll();
  return { swapped:swapped, stuck:stuck };
}

// ═══════════════ SETTINGS SUB-SCREENS ═══════════════
function openSub(which) {
  var title = '', body = '';

  if (which === 'household') {
    title = 'Household size';
    body =
      '<p class="sub-intro">Every recipe in the plan is scaled to this number, and the pantry deducts the scaled amount when you mark a meal cooked.</p>' +
      '<div class="stepper">' +
        '<button class="step-btn" onclick="setHousehold(-1)"' + (settings.household <= 1 ? ' disabled' : '') + '>&minus;</button>' +
        '<div><div class="val">' + settings.household + '</div><div class="lbl">people</div></div>' +
        '<button class="step-btn" onclick="setHousehold(1)"' + (settings.household >= 8 ? ' disabled' : '') + '>+</button>' +
      '</div>' +
      '<div class="note-card">Raising this can create shortfalls — the plan will say so plainly on the Plan tab rather than quietly stretching what you have.</div>';
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
      '<div class="note-card">Whether a reminder ships in version 1 is still an open question in the spec (blindspot #5). This screen is here to test whether Ren would want one at all.</div>';
  }

  document.getElementById('subTitle').textContent = title;
  document.getElementById('subBody').innerHTML = body;
  document.getElementById('subScreen').classList.add('open');
  document.getElementById('fab').style.display = 'none';
  document.getElementById('subScreen').dataset.which = which;
}
function closeSub() {
  document.getElementById('subScreen').classList.remove('open');
}
function setHousehold(delta) {
  settings.household = Math.min(8, Math.max(1, settings.household + delta));
  document.getElementById('hhArrow').innerHTML = settings.household + ' &rsaquo;';
  openSub('household');
  renderAll();
  showToast('Serving size now ' + settings.household + ' — plan and pantry updated.');
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
function queueUnreconciled(entry, type, label) {
  if (!entry || entry.status !== 'pending' || entry.dietBlocked) { return; }
  unreconciled.push({ recipe:entry.recipe, type:type, label:label });
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
      r.ing.forEach(function(ing) {
        var p = pantryById(ing.id);
        if (!p) { return; }
        p.qty = round2(Math.max(0, p.qty - ing.qty * settings.household));
      });
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
  var departing = fmtDate(departingDate || dateFor(0));
  plan.slice(0, 3).forEach(function(entry, i) {
    queueUnreconciled(entry, MEAL_TYPES[i], departing);
  });
  plan.splice(0, 3);
  var used = plan.map(function(e){ return e.recipe; });
  MEAL_TYPES.forEach(function(type) {
    var pool = recipes.filter(function(r) {
      return r.type === type && used.indexOf(r.id) === -1 &&
             getPref(r.id).vote !== 'down' && !violatesDiet(r);
    });
    pool.sort(function(a,b) {
      var fa = getPref(a.id).fav ? 1 : 0, fb = getPref(b.id).fav ? 1 : 0;
      if (fa !== fb) return fb - fa;
      var ca = a.ing.filter(function(i){ var p = pantryById(i.id); return p && p.qty >= i.qty * settings.household; }).length;
      var cb = b.ing.filter(function(i){ var p = pantryById(i.id); return p && p.qty >= i.qty * settings.household; }).length;
      return cb - ca;
    });
    // If nothing compliant is left, the slot is flagged rather than filled with
    // something that breaks a restriction.
    var relaxed = recipes.filter(function(r){ return r.type === type && !violatesDiet(r) && getPref(r.id).vote !== 'down'; });
    var pick = pool[0] || relaxed[0];
    if (pick) {
      plan.push({ recipe:pick.id, status:'pending' });
      used.push(pick.id);
    } else {
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
  el.textContent = now.toLocaleDateString(undefined, { weekday:'long' }) + ' ' + part + ', Ren';
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
  var hh = document.getElementById('hhArrow');
  if (hh) { hh.innerHTML = settings.household + ' &rsaquo;'; }
  var da = document.getElementById('dietArrow');
  if (da) {
    var n = activeDietLabels().length;
    da.innerHTML = (n ? n + ' active ' : '') + '&rsaquo;';
  }
  saveState();
}

// ═══════════════ SAVED STATE ═══════════════
// Everything Ren changes is kept in this browser's localStorage so a refresh or a
// closed tab loses nothing. It never leaves the device. The recipe catalog is not
// saved — it always comes from the approved file built into this page.
var STORE_KEY = 'wtf-state-v1';
var SAMPLE = JSON.stringify({ settings:settings, pantry:pantry, plan:plan });
var lastSeen = null;               // calendar day (YYYY-MM-DD) the saved state belongs to

function todayKey(d) {
  d = d || new Date();
  return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
}
function daysBetween(fromKey, toKey) {
  var a = fromKey.split('-'), b = toKey.split('-');
  return Math.round((new Date(b[0], b[1] - 1, b[2]) - new Date(a[0], a[1] - 1, a[2])) / 86400000);
}

// `ago` is counted from today, so it has to grow by one each real day for the
// displayed purchase date to stay put. Undated items stay undated.
function ageDays(n) {
  pantry.forEach(function(p) { if (p.ago !== null) { p.ago += n; } });
}

function saveState() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify({
      lastSeen:lastSeen || todayKey(), settings:settings, pantry:pantry, plan:plan,
      prefs:prefs, unreconciled:unreconciled, dayOffset:dayOffset
    }));
  } catch (e) { /* private mode or storage full — the app still works, it just won't remember */ }
}

function loadState() {
  var s = null;
  try { s = JSON.parse(localStorage.getItem(STORE_KEY)); } catch (e) { s = null; }
  if (!s || !s.plan || !s.pantry || !s.settings) { lastSeen = todayKey(); return; }

  // A saved plan that names a recipe this build doesn't model is discarded rather
  // than shown half-broken; Ren starts again from the sample.
  var valid = s.plan.length === 9 && s.plan.every(function(e) { return e && recipeById(e.recipe); });
  if (!valid) { lastSeen = todayKey(); return; }

  settings = s.settings;
  pantry = s.pantry;
  plan = s.plan;
  prefs = s.prefs || {};
  unreconciled = (s.unreconciled || []).filter(function(u) { return recipeById(u.recipe); });
  dayOffset = s.dayOffset || 0;
  lastSeen = s.lastSeen || todayKey();
  catchUp();
}

// Catch up on days that passed while the app was closed or asleep. Each missed day
// rolls the horizon the same way midnight would, so unconfirmed meals are queued as
// questions rather than lost. After three rolls the whole old plan has been queued;
// rolling further would only queue meals Ren never saw. Returns the days missed.
function catchUp() {
  var missed = daysBetween(lastSeen, todayKey());
  if (missed > 0) {
    var a = lastSeen.split('-');
    for (var i = 0; i < Math.min(missed, 3); i++) {
      rollDay(new Date(a[0], a[1] - 1, +a[2] + i));
    }
    ageDays(missed);
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

function resetState() {
  if (!confirm('Reset to the sample pantry and plan? Your saved changes in this browser will be cleared.')) { return; }
  try { localStorage.removeItem(STORE_KEY); } catch (e) {}
  var s = JSON.parse(SAMPLE);
  settings = s.settings; pantry = s.pantry; plan = s.plan;
  prefs = {}; unreconciled = []; dayOffset = 0; currentDay = 1;
  lastSeen = todayKey();
  closeDetail(); closeSub();
  renderAll();
  showToast('Back to the sample pantry and plan.');
}

loadState();
renderAll();
scheduleMidnight();

// Offline support and home-screen install. Only works when served over http(s),
// e.g. from GitHub Pages — opening the file directly skips it harmlessly.
if ('serviceWorker' in navigator && location.protocol.indexOf('http') === 0) {
  navigator.serviceWorker.register('sw.js').catch(function() {});
}
