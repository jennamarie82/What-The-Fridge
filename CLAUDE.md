# What the Fridge - Living Spec

Version: 1.11
Team: Group 3
App name: What the Fridge (wordmark: **WTF**)

## Purpose and user

Ren keeps the household fed and the kitchen running — choosing what to cook each day, stretching what's already in the fridge, and keeping grocery runs to a minimum. This matters because when meal decisions pile up or food goes to waste, it costs the household time, money, and daily peace of mind.

What the Fridge supports Ren by turning the "what are we eating?" question into a quick, informed choice grounded in what's actually on hand — for breakfast, lunch, and dinner. The agent does not decide for Ren; it handles the recipe-search and ingredient-matching work so Ren can focus on the judgment calls — what the family actually wants to eat.

Primary leverage: **Acceleration** — the agent compresses the time Ren spends searching recipes and cross-referencing ingredients from ~20 minutes to under 5 minutes. Secondary leverage: **Augmentation** — it surfaces freshness estimates and cross-meal ingredient coordination Ren might not calculate on her own.

### Role map

| Responsibility area | Recurring task | Input | Output | Frequency | User of output |
|---|---|---|---|---|---|
| Inventory tracking | Log what's in the kitchen | Receipt photos, manual counts | Current ingredient list with dates | After each grocery trip + weekly spot-check | Ren (for planning) |
| Meal planning | Plan three days of breakfast, lunch, and dinner | Inventory, recipe file, household preferences | Three-day meal plan (B/L/D) with feasibility notes | Every 3 days | Ren + household |
| Freshness management | Check what needs using soon | Purchase dates, shelf-life norms | Priority list of expiring items | Continuous (surfaced at planning time) | Ren |
| Grocery decision | Decide whether a shopping trip is needed | Plan gaps, pantry state | Go / no-go decision + shortfall list | After each plan | Ren |
| Cooking execution | Prepare the meal, confirm what was made | Approved plan, recipe instructions | Cooked-log entry, inventory deduction | Daily | Ren |

The agent supports inventory tracking, meal planning, and freshness management. Grocery decisions and cooking execution stay fully with Ren — the agent may inform them, but Ren owns them.

## User stories

**NOTICE — Spot what's about to turn**
As Ren, opening the fridge on Sunday evening with chicken thighs bought Thursday, half a bag of spinach from last week, and a dozen eggs picked up yesterday, I want the agent to flag which items need using in the next three days and which are still fine, so I can plan meals around what's about to expire rather than forgetting it in the back of the fridge.

**UNDERSTAND — See a feasible three-day plan**
As Ren, choosing meals for Monday through Wednesday with a limited inventory and no time for a grocery run, I want a three-day plan covering breakfast, lunch, and dinner that tells me which on-hand ingredients each meal uses, what's missing, and how long each takes to prepare, so I can pick feasible meals for the whole day without spending twenty minutes cross-referencing recipes myself.

**ACT — Adjust and confirm as the week unfolds**
As Ren, looking at a suggested Wednesday lunch that uses an ingredient I already used for Monday's dinner, I want to swap just that meal for a different option without losing the rest of the plan, and then confirm what I actually prepared so the inventory stays accurate as the week unfolds.

## Knowledge

What the Fridge draws on two inputs, and no other source.

### Knowledge reference

| # | Item | File | What it provides | Current? |
|---|---|---|---|---|
| 1 | Approved recipe database | `knowledge/Combined_Recipe_Database.md` | 300 recipes (41 breakfast, 87 lunch, 172 dinner) with ingredients, instructions and a dietary tag line each. Supersedes the two earlier recipe files | Yes — replaced 2026-09-18 |
| 2 | Role and industry context | `knowledge/role-and-industry.md` | Ren's role map, AI leverage type, human-vs.-agent division of labor, boundary rule | Yes — updated to v1.6 on 2026-09-18 |
| 3 | User stories | `knowledge/stories.md` | NOTICE / UNDERSTAND / ACT stories in situated form | Yes — updated to v1.6 on 2026-09-18 |
| 4 | Market research | `knowledge/three_day_no_shop_recipe_app_research.pdf` | Competitive landscape, five friction points, value proposition, north-star metric | Yes |
| 5 | Visual / UX design direction | `knowledge/recipe_app_visual_layout_feature_recommendations.pdf` | Design principles, competitive visual patterns, navigation structure, personality direction | Yes |
| 6 | Agent blueprint | `knowledge/Meal_Planning_Agent_Blueprint.pdf` | AI leverage types (Acceleration, Augmentation, Automation, Amplification), assessment framework, scoping | Yes |
| 7 | User story detail | `knowledge/Group 3 - User Story (1).docx` | Expanded user story documentation for Group 3 | Yes |
| 8 | Shelf-life norms reference | `knowledge/shelf-life-norms.md` | Default shelf-life windows by food category, sourced from USDA/FDA guidelines, used by agent for freshness estimation | Yes (new) |
| 9 | Synthetic user interviews | `knowledge/synthetic-interviews.md` | Five AI-generated interview scenarios exploring diverse user needs and edge cases | Yes (new) |
| 10 | Recipe image manifest | `knowledge/recipe-image-manifest-300.csv` | Maps each of the 300 recipes to its photo in `deliverables/recipe-images/` | Yes (new) |

### Input 1: Ingredient inventory

Inventory reaches the agent two ways:

1. **Initial manual entry.** The first time Ren sets up What the Fridge (or any time before a receipt has been captured), Ren types in what's on hand. ASSUMPTION: file format and location are not yet set. Suggested: `knowledge/inventory.md`.
2. **Receipt photo upload.** After each grocery trip, Ren photographs the receipt and uploads it. The agent reads the image, extracts item names and the purchase date, and adds or updates those items in the inventory. ASSUMPTION: the receipt intake format, and how the agent surfaces a misread item or an unclear item name back to Ren for correction, are not yet set. The team must define this before Exercise 4.

For each item, the agent tracks a quantity where known and a purchase date (from a receipt) or an expiry date (if Ren states one directly). A missing value stays missing: if neither Ren nor a receipt establishes an item's quantity or purchase date, the agent treats it as unknown — it does not guess a quantity, invent a purchase date, or apply a freshness estimate to an item it has no date for.

Coverage: the agent's knowledge of Ren's ingredients comes only from what Ren typed and from receipt photos Ren uploads. It still has no access to Ren's grocery account, loyalty card, or retailer purchase history, and no refrigerator sensor — a receipt only reaches the agent because Ren photographed and uploaded it.

Smallest useful snapshot first: perishables, opened packages, cooked leftovers, and proteins matter most to a three-day plan. Shelf-stable pantry staples (see the recipe file's assumed staples below) matter less and can be reported more loosely.

### Input 2: Recipe database

- The approved recipe source: `knowledge/Combined_Recipe_Database.md`. A fixed, curated file of 300 recipes — 41 breakfast, 87 lunch, 172 dinner — each with ingredients, numbered instructions, a stated total time, and a dietary tag line. Recipes are numbered 1 to 300 in one continuous sequence and are never renumbered, so a recipe number is a stable identifier. Approved by the team on 2026-09-18, superseding the 28-recipe and 12-recipe files now held in `knowledge/superseded/`.
- The agent must not draw recipes from any other source — not a live recipe API, not a general web search, not an invented recipe — unless the team names a replacement here.
- The agent may only use what a recipe entry actually states: its ingredients (with quantity where the file gives one), its category, and its total time. The agent does not invent a substitution or a variant the recipe file doesn't already offer.
- The recipe file assumes a fixed set of pantry staples are on hand (oils, condiments, aromatics/spices — see that file's "Standard Pantry Staples Assumed On Hand" section) rather than requiring Ren to list them in the inventory.
- **Distribution and timing.** 41 breakfast, 87 lunch, 172 dinner. The original 40 recipes are all 30 minutes or less; the newer entries include longer classics, and each states its real prep-plus-cook time rather than a compressed one. The agent must respect the stated time when a meal has to be quick.
- **Dietary tags are part of the source.** Each recipe lists the restrictions it *satisfies* (Vegetarian, Dairy-free, Nut-free, Pork-free). An absent tag means the recipe contains that item in a required ingredient. The agent reads these rather than inferring them — see "Dietary restrictions," below.
- **One photo per recipe.** 300 images in `deliverables/recipe-images/`, named as a slug of the recipe title, mapped by `knowledge/recipe-image-manifest-300.csv`.
- ASSUMPTION: the 28-recipe file is a version-1 seed set, chosen for course-project scope. If the team later approves a larger source (for example, a licensed recipe API or a bigger curated file), that replacement must be named here before the agent may use it.

### Knowledge boundaries

**The agent CAN:**
- Read and parse a grocery receipt photo to extract item names and purchase dates
- Estimate a freshness window from a purchase date and the norms in `knowledge/shelf-life-norms.md`
- Match inventory ingredients to the 300 approved recipes across all three meal categories (breakfast, lunch, dinner)
- Read each recipe's dietary tag line from the approved file and filter on it
- Track quantity where Ren or a receipt provides it
- Treat the recipe file's standard pantry staples as available without requiring Ren to list them
- Coordinate ingredient usage across meals within the same three-day plan to prevent double-allocation of scarce items

**The agent CANNOT:**
- Access Ren's grocery account, loyalty card, or retailer purchase history
- Use any recipe source not approved by the team in this spec
- Invent a substitution, variant, or recipe not in the approved file
- Guess a quantity, fabricate a purchase date, or estimate freshness for an undated item
- Access a refrigerator sensor or any automatic inventory feed
- Determine actual food safety — freshness estimates are approximations, not safety guarantees

**Source boundary:** All ingredient knowledge comes from Ren's manual entries and uploaded receipt photos. All recipe knowledge comes from `knowledge/Combined_Recipe_Database.md`. Shelf-life estimation uses the norms in `knowledge/shelf-life-norms.md`. No other source is authorized.

**Household data the prototype now holds, pending ratification.** Three kinds of data sit outside the boundary above and must either be brought inside it or removed before v1 is committed: the recipe preference store (like / not-for-us / favourite), the dietary restriction settings, and household size. None of them introduce a recipe — they only filter, reorder, or scale what the approved files already contain — but they are inputs the agent reads, and the spec should say so explicitly rather than leaving them undocumented. Nutrition figures are a fourth case and a different one: they are not household data but recipe data the approved files do not contain (open assumption #17).

## What good looks like

### Meal plan standard

Every three-day plan states, for each meal (breakfast, lunch, and dinner): which ingredients from Ren's inventory it uses, which ingredients are still missing, the estimated preparation time, and — for each dated ingredient — the freshness estimate the agent used and its basis.

Checkable example: "Day 1 Dinner — Garlic Butter Shrimp & Spinach Pasta: uses shrimp and spinach (spinach: purchased Sept 15, typical shelf life 5–7 days refrigerated — estimated use-by Sept 21). Missing: parmesan. Estimated prep time: 20 minutes."

### Cross-meal coordination standard

When the same ingredient appears in multiple meals within a three-day plan, the agent must verify the total quantity needed does not exceed what's on hand. If it does, the agent flags the conflict at plan-generation time and suggests an alternative meal, rather than silently double-allocating a scarce ingredient.

Checkable example: If the plan assigns chicken breast to both Tuesday lunch (Caprese Chicken Ciabatta) and Tuesday dinner (Sheet Pan Chicken Fajitas), and Ren's inventory shows 1 lb total, the agent must flag that 1 lb is likely insufficient for both and suggest a swap.

### Receipt-reading standard

When the agent reads a receipt photo, it shows Ren every extracted item and its purchase date, flags any item it read with low confidence (ASSUMPTION: confidence threshold not yet set — team must define before Exercise 4), and does not add a flagged item to inventory until Ren confirms it.

### Must never

- Apply a freshness estimate to an ingredient with no known purchase date. An undated item stays flagged as unknown, not assumed fresh.
- Hide the basis for a freshness estimate. Every dated ingredient's purchase date and the shelf-life assumption used must appear alongside it.
- Generate a grocery list or place an order.
- Use a recipe source the team has not approved.
- Report that Ren approved a plan when Ren has not confirmed it.
- Present a low-confidence receipt read as confirmed without Ren's review.
- Assign the same scarce ingredient to multiple meals without verifying that the total quantity on hand is sufficient.

### Looks acceptable, is wrong

A three-day plan that assigns spinach to Monday's breakfast wrap, Tuesday's lunch salad, and Wednesday's dinner pasta — all drawing from the same bag — without checking whether one bag covers all three meals. Each individual suggestion looks reasonable, but the total allocation exceeds what's on hand. Without a cross-meal quantity check, the plan quietly breaks by Wednesday.

### Who catches it

Ren, at the ACT step, before preparing any meal. The agent's freshness estimate — and its basis — must be visible on every meal suggestion so Ren can catch a wrong or stale assumption and override it before cooking. The design fails if an estimate, or the fact that one is missing, is buried or left off the plan.

### Voice and visual direction

Decided with Ren on 2026-09-17, in response to the team's own note that early prototypes felt generic. These decisions govern how the app presents itself — tone, look, and what makes it satisfying to open — and do not loosen any rule above. Where a choice here would conflict with the must-never list or Governance, those win.

**Voice: playful and witty.** Meal planning shouldn't feel like a chore. Copy can be lighthearted about mystery fridge items and near-miss leftovers ("that spinach has one more day of glory left"). A joke never replaces the facts: the plain-text purchase date and shelf-life basis required above still appears next to the playful line — the voice changes the phrasing, not the disclosure. Reaffirmed 2026-09-17 against the team's separate design report (`knowledge/recipe_app_visual_layout_feature_recommendations.pdf`), which suggested a calmer "quietly optimistic" personality instead — the team is keeping playful/witty as decided with Ren; the report's influence is limited to visual tokens and structure, not tone.

**Visual style: warm, appetizing, and modern.** The prototype must make Ren feel hungry and inspired, not like she's reading a spreadsheet. Drawing on best practice from leading meal-planning apps (Mealime, Yummly, HelloFresh), the design incorporates:

- **Hero food imagery on meal cards.** Each meal suggestion leads with a generous, close-cropped food photo (or a high-fidelity illustrated placeholder) that fills the top of the card. Warm lighting, natural textures, and a shallow depth of field make the food the emotional hook. Emoji placeholders are insufficient — they read as a wireframe, not a finished product.
- **Warm color temperature.** Background tones lean warm (cream, off-white, soft amber accents) rather than clinical white. Warm tones are associated with comfort and appetite.
- **Visual hierarchy that leads with the meal, not the data.** The first thing Ren sees on the Plan tab is an appetizing meal name and image, not a feasibility banner or data table. Feasibility and allocation are accessible via scroll or tap, not occupying the prime viewport.
- **Generous spacing, large touch targets, and fluid transitions.** Cards breathe. Meal images are full-card-width hero images. Tap a card to expand into the detail view with a smooth transition.
- **Ingredient chips with micro-illustrations.** Each ingredient in the detail view carries a tiny illustration or icon alongside the freshness chip for visual texture and scannability.
- **Freshness cues: gentle nudge, not alarm.** Freshness estimates use soft, warm coloring (amber, not alarm red) and friendly phrasing. An ingredient near or past its estimated window must still be visibly distinct, and its purchase date and shelf-life basis must still be shown — gentle tone never becomes hidden information.
- **Day-and-meal navigation.** With breakfast, lunch, and dinner in scope, the Plan tab organizes by day (Day 1, Day 2, Day 3), each showing three meals in a vertically scrollable layout. The next upcoming meal is spotlighted at the top.
- **Delight: waste-reduction streaks and stats.** ASSUMPTION — built in prototype7, not yet ratified as in-scope for Exercise 4. Savings milestones and a cooking-streak ladder sit on the Profile screen, celebrating food and money saved by using up ingredients before their estimated freshness window closes. Both draw only from Ren's own cooked-log entries — no new data source, and no claim of a verified saving, just a tally of what Ren logged. The team must confirm before Exercise 4 whether this stays in v1.

### Current prototype

**`deliverables/prototype10.html` is the current prototype.** Earlier versions are superseded and kept only for reference; the full prototype history, screen inventory, state model, and visual tokens live in `deliverables/design-spec.md`.

Presentation, carried forward from prototype7:

- Day-and-meal navigation, each day showing breakfast, lunch, and dinner, with the next meal spotlighted.
- Real stock food photography on every meal card and detail hero — 300 images in `deliverables/recipe-images/`, one per approved recipe, 1280×720 WebP. A meal resolves its own photo from its name; where no approved photo exists the card falls back to a gradient rather than borrowing another dish's image.
- Warm background (`#FFF8F0`), card and tab transitions, freshness chips pairing an icon with a word.
- The **WTF** wordmark in leaf green at the top right of the Plan and Pantry screens.
- Savings milestones and a cooking-streak ladder on Profile, with playful reinforcement copy.
- Per-recipe **like / not-for-us / favourite** controls (see "Recipe preferences," below).

Behaviour added in prototype8 — the prototype became stateful:

- **The pantry holds live quantities.** Marking a meal cooked deducts its ingredients; Swap and Skip deduct nothing. Accepting is reversible, so a wrong tap can be undone.
- **Swap proposes a real alternative.** It picks the approved recipe of the same meal type that shares the most ingredients and that the pantry can best cover, then recomputes the allocation table and the feasibility banner.
- **Feasibility is computed, not asserted.** "No grocery trip required" is now the result of comparing what the remaining meals need against what is on hand; when it does not hold, the banner names the specific gaps. This is what makes the cross-meal coordination standard above enforceable rather than aspirational.
- **Storage zones work.** Fridge, freezer and cupboard expand to show their contents with live quantities, and items read "out" once used up.
- **Three Profile sub-screens** — household size, dietary preferences, notification reminders.
- **A rolling three-day horizon.** Always today plus the next two days, relabelled daily; just after midnight the past day drops off and a new third day is built from the approved files.
- **Calories and simple nutrition** per recipe, on the card and in detail.
- **Serving sizes follow household size.** Changing it rescales every displayed quantity and everything deducted on cooking.

Behaviour added in prototype9:

- **Dietary restrictions actually filter** (see "Dietary restrictions," below).

Behaviour added in prototype10 — the midnight roll stopped losing meals:

- **An unconfirmed meal survives the roll.** A meal that leaves the three-day horizon still `pending` is queued and surfaced on the Plan tab as a question — cooked it / didn't / ate out — rather than being discarded with its ingredients never deducted. The roll itself still deducts nothing; only Ren's answer does. This closes blindspot 9. See `knowledge/skills/day-roll-reconciliation/SKILL.md`.
- **Mediterranean Chickpea Salad's prep time corrected** from 15 minutes to the 10 mins the approved database states.

Web build, added 2026-10-01 — `deliverables/web/` is prototype10 made publishable as a website (GitHub Pages), the folder that goes into the public repository. It contains only the app, not `knowledge/` or `governance/`:

- **State survives a reload.** Plan, pantry, settings, preferences and the unconfirmed-meal queue are saved in the browser's own storage (`localStorage`) and never leave the device. Each browser has its own copy; there is no shared household data.
- **Days missed while the app was closed are caught up honestly.** On open (or resume), each missed day rolls the horizon exactly as midnight would, so unconfirmed meals are queued as questions, never assumed cooked. Pantry `ago` values advance by the real days elapsed so a displayed purchase date stays fixed; undated items stay undated. "Simulate midnight" still rolls without ageing, so it never shifts a purchase date.
- **Installable on iPhone.** A manifest, icons and an offline service worker let Ren choose Share → Add to Home Screen. On a phone the mock device frame is dropped and the app fills the screen. This is a working answer to open assumption #5 (wrapped web app), pending the team's decision.
- **Demo controls** (Simulate midnight, Reset to sample data) sit on Profile, since the desktop footer is hidden on a phone.

Updated 2026-09-18 for the combined recipe database:

- All 300 recipes have a photo, and the prototype resolves any of them by title slug.
- Recipe titles, ids and dietary tags are now taken from the database rather than hand-written. Nine recipes were renamed where the database spells out "and" in place of "&", and five dietary tags were corrected against the file — Mediterranean Chickpea Salad and Tuscan White Bean and Spinach Soup, for instance, both count as containing dairy because the database makes the cheese a required ingredient rather than an optional garnish.

Known defects and gaps:

1. ~~An unapproved recipe in the sample data~~ — **resolved in prototype8.** "Avocado & Black Bean Wrap" was replaced with Quick Black Bean and Rice Burrito Bowl, and every catalogued recipe traces to the approved database.
2. **Ingredient rows still lack thumbnails.** The visual direction calls for a small illustration beside each ingredient name; the detail view still shows text and a freshness chip only.
3. **Nutrition figures are estimates.** The approved database carries no nutrition data, so the numbers shown are indicative and labelled as such in the app. See open assumption #17.
4. **Four recipes contradict the database on whether an ingredient is optional.** Veggie Scramble (feta), Mediterranean Chickpea Salad (feta), Garlic Butter Shrimp and Spinach Pasta (parmesan) and High-Protein Greek Yogurt and Berry Parfait (nuts) each mark an ingredient `optional:true` that the approved database lists as required and uses in a numbered step — which is why the database withholds the corresponding dietary tag. The dietary filter is unaffected (the contains-tag still blocks correctly); feasibility is not, since the app believes an ingredient the recipe needs can be dropped. Open — the fix changes behaviour, because those recipes become infeasible without the cheese, so the team should decide rather than find-and-replace.
5. **The prototype models 18 of the 300 recipes.** Only a recipe with ingredients mapped to pantry items and quantities can participate in deduction, feasibility and swap, and that mapping is hand-authored. The consequence is visible under stacked restrictions: with vegetarian, dairy-free and nut-free all on, the 18-recipe sample holds just one compliant lunch and one compliant dinner, so the same meal repeats across all three days. The full database has 62 recipes satisfying all four restrictions, so this is an artefact of the sample, not of the product — but a demo will show it. See open assumption #21.

### Recipe preferences

ASSUMPTION — built in prototype7, not yet ratified by the team. Ren can mark any recipe **liked**, **not for us**, or **favourite**. A disliked recipe is swapped out of the plan and not suggested again; a favourite is resurfaced more often.

This introduces a per-user preference store, which is a data input the "Source boundary" above does not currently authorize, and it overlaps the deferred P1 item "Saved/imported recipes." The team must decide before Exercise 4 whether this is in scope for v1 and, if so, extend the source boundary to cover it. Two rules apply regardless: preferences only ever filter or reorder recipes drawn from the approved files — they never introduce a new recipe — and a disliked recipe must remain recoverable, since a mis-tap should not permanently narrow the household's options.

### Dietary restrictions

ASSUMPTION — built in prototype9, not yet ratified. This pulls forward part of the deferred P1 item "Dietary/allergy profile," so the team must decide before Exercise 4 whether it belongs in v1.

Ren sets restrictions on the household (vegetarian, dairy-free, nut-free, no pork). Since 2026-09-18 the tags come from the approved database itself — each recipe lists the restrictions it *satisfies*, and the agent inverts that to know what the recipe contains rather than judging for itself. A restriction is applied as a **hard filter, never a ranking preference**: a restricted recipe is not suggested, not offered by Swap, and not used to fill a new day.

Rules that hold regardless of the scope decision:

- **Tags come from required ingredients and staples only.** An optional garnish never disqualifies a recipe; it is dropped instead. A salad whose feta was always optional stays available to a dairy-free household.
- **Meals already marked cooked are never rewritten.** The food has been eaten; changing the record afterwards would be a false history.
- **When the compliant pool runs thin, repeating a compliant meal is preferred to leaving a slot empty** — but when nothing in the approved files fits, the agent says so plainly and flags the slot. It never fills a slot with something that breaks the restriction.
- **This is not allergy-safe, and the app must not imply that it is.** Filtering operates on recipe-level tags, which is adequate for a preference like "no pork" but not for an allergy, where ingredient-level checking and label reading are required. The team's own design report treats allergy exclusion as a hard constraint; until ingredient-level data exists, the app states the limitation rather than implying safety it has not earned.

## Scope and boundaries

### Version 1 (P0) does

- Take a manually supplied inventory list from Ren.
- Read a photo of a grocery receipt Ren uploads after a shopping trip, and update the inventory with the items and purchase date it finds.
- Estimate a freshness window for a dated ingredient from its purchase date and the norms in `knowledge/shelf-life-norms.md`, and show that estimate and its basis on the plan.
- Validate quantities before presenting a plan: flag an item as needing a quick check rather than silently allocating an uncertain amount.
- Produce a three-day meal plan covering breakfast, lunch, and dinner, and state its feasibility plainly — zero purchases required, or a clear explanation of the shortfall if not.
- For each meal, list ingredients used, ingredients missing, and estimated prep time.
- Coordinate ingredient usage across all meals in the plan to prevent double-allocation of scarce items.
- Let Ren accept, modify, or reject each suggested meal, and replan without discarding the meals unaffected by the change.
- Record what Ren actually prepared, for comparison against the plan. Ingredients are only deducted from inventory after Ren confirms a meal was actually cooked — never on a schedule.
- Prioritize quick-prep recipes for breakfast (≤ 20 minutes) since mornings are time-constrained, while still emphasizing healthy, whole-food options.
- Hold a rolling three-day horizon: always today plus the next two days, rolling forward daily rather than running to a fixed end date.
- Scale every recipe to the household size Ren sets, both in what is displayed and in what is deducted when a meal is cooked.
- Apply Ren's dietary restrictions as a hard filter on which approved recipes may be suggested (see "Dietary restrictions," above).

### Version 1 does not

- Track inventory automatically from anywhere other than what Ren enters or a receipt Ren uploads.
- Generate or send a grocery list.
- Access any grocery account or retailer.
- Purchase groceries.
- Guarantee food safety. A freshness window is a stated estimate from purchase date and general shelf-life norms, not a verified check of an ingredient's actual condition, and Ren can always override or reject it.

### Deferred beyond version 1

Not built now; may return in a later version:

- **P1 — Saved/imported recipes.** A personal library of favorited or imported recipes, beyond the single approved file. Any additional recipe source still needs separate team approval under "Input 2: Recipe database" before the agent may use it.
- **P1 — Household sharing.** More than one person using or editing the same household's plan.
- **P1 — Controlled substitutions.** The agent proposing a specific ingredient swap to rescue an otherwise-infeasible meal, with the swap and its effect shown explicitly.
- **P1 — Leftover-to-lunch bridge.** Suggesting that dinner leftovers become next day's lunch, reducing waste and prep time. Requires tracking portioned-out leftovers as inventory items.
- **P1 — Dietary/allergy profile.** PARTIALLY PULLED FORWARD — recipe-level dietary filtering is built in prototype9 (see "Dietary restrictions," above) and awaits ratification. What remains deferred is the part that matters most for safety: ingredient-level allergen data, so an allergy can be treated as a genuine hard constraint rather than a tag match.
- **P1 — Onboarding flow.** A guided first-use experience that walks Ren through initial inventory entry, household size, and basic preferences before generating the first plan. Reduces the cold-start problem identified in synthetic interviews (see `knowledge/synthetic-interviews.md`, Scenarios 3 and 5).
- **P2 — Nutrition optimization** beyond what a recipe entry already states.
- **P2 — Retail integration**, e.g., importing purchases from a retailer account instead of a receipt photo Ren takes.
- **Deferred indefinitely — a social feed or community feature.** Not aligned with a single-household planning tool.

### Deliverable

An iPhone app. This is the team's initial thought for version 1, not yet finalized — the exact build approach (native vs. wrapped web app) and whether a separate plan document still gets produced underneath the app are ASSUMPTIONs the team must confirm before Exercise 4.

The information architecture, screen inventory, and visual identity tokens are documented in `deliverables/design-spec.md` (extracted from the living spec to keep this document focused on the agent's behavior and boundaries, not implementation detail). The design spec implements the voice and visual direction defined under "What good looks like" above and must not contradict any rule in this spec.

## Governance

### Ren's authority

Ren reviews every suggested plan before preparing any meal and can override, modify, or reject any meal. Ren does not manually approve each ingredient's freshness. Instead, the agent estimates a freshness window from the ingredient's purchase date (from a receipt upload or Ren's manual entry) and the shelf-life norms documented in `knowledge/shelf-life-norms.md`. An ingredient with no known purchase date is treated as unknown, never as assumed fresh. The agent's freshness estimate is a stated approximation, not a food-safety determination — it must always show its basis (purchase date + shelf-life assumption) so Ren can see and dispute it before cooking.

Ren approves, modifies, or rejects each meal suggestion. The agent records Ren's decision and what Ren actually prepared.

### Stop-work conditions

If the agent proposes a recipe from an unapproved source (i.e., not from `knowledge/Combined_Recipe_Database.md`), invents a purchase date or an expiry date, applies a freshness estimate to an ingredient with no known purchase date, hides the basis for a freshness estimate, states that Ren approved a plan without confirmation, or silently double-allocates a scarce ingredient across meals, work stops until the team investigates.

### Accountability and review cadence

The team (not Ren alone) is accountable for the agent's output quality. Ren makes meal decisions; the team ensures the agent's recommendations are grounded in approved sources and accurate data. This spec is reviewed at the start of each working session and updated when understanding changes. A superseded version moves to `governance/history/` before this file is edited. Findings and resolutions from any stop-work investigation are logged in `governance/history/`.

### Checks applied

The team applies four checks before committing any version of this spec:

- **Evidence:** Ren confirmed spending ~20 minutes per planning session searching recipes and checking ingredients; estimates food waste at approximately $30–50/month from forgotten perishables. (ASSUMPTION: exact figures not yet validated with data — team should track during pilot.)
- **Use:** Ren committed to using the app for three consecutive planning cycles during the pilot to test whether it actually changes behavior.
- **Boundaries:** Team confirmed that a three-day plan covering breakfast, lunch, and dinner is the target scope for v1. The approved source supports this with 300 recipes across all three meal types (41 breakfast, 87 lunch, 172 dinner) — ample for a three-day rotation without repetition, including under dietary restrictions.
- **Completion:** PENDING — cold read not yet conducted. See below.

### Blindspot pass

Conducted 2026-09-17 by the team. Risks identified:

1. **Receipt in a non-English language.** The agent has no defined behavior for non-English receipts. Status: open — team to decide whether v1 supports English-only receipts and flags others, or defers receipt support for other languages entirely.
2. **Double-allocation of a scarce ingredient.** If two or more meals in the same plan share a critical ingredient and the inventory has only enough for one, the agent must catch this at plan-generation time, not after Ren accepts. Status: addressed in spec ("Coordinate ingredient usage across all meals in the plan to prevent double-allocation").
3. **Inventory too limited for any feasible plan.** If Ren's inventory can't support a full three-day meal plan, the agent must say so plainly rather than stretching or inventing. Status: addressed ("state its feasibility plainly — zero purchases required, or a clear explanation of the shortfall if not").
4. **Blurry or partial receipt photo.** If the receipt photo is too blurry to read or partially cut off, the agent should flag the entire receipt as unreadable rather than silently guessing at items. Status: open — team to define the failure-handling flow before Exercise 4.
5. **Ren forgets to log a cooked meal.** Inventory drifts from reality if Ren doesn't confirm what was cooked. Status: open — prototype8 adds a "Did you cook it?" toggle on the notification screen, but the reminder behind it is not built. The team still has to decide whether a nudge ships in v1.
6. **Shelf-life norms vary by storage method.** The same ingredient (e.g., chicken) has very different shelf life fresh vs. frozen. The agent must account for the storage location Ren reports, not apply a single default. Status: addressed — `knowledge/shelf-life-norms.md` provides separate fridge/freezer/pantry norms per item, and the Pantry screen tracks storage zones.
7. **Breakfast recipe pool was thin.** Originally only 3 breakfast recipes. Status: resolved — the combined database carries 41 breakfast recipes, well beyond a three-day rotation.

Added 2026-09-18, after prototype8 and prototype9 made the app stateful:

8. **Dietary filtering could be mistaken for allergy safety.** Filtering matches recipe-level tags. A household could reasonably read "nut-free" as a guarantee when it is really a tag match over a small curated file, with no ingredient-level or label-level checking behind it. Status: open — the app states the limitation on the dietary screen, but the team must decide whether to keep an allergy-shaped option at all before ingredient-level data exists. Offering one that cannot be trusted is worse than not offering it.
9. **The midnight roll discards a day regardless of what happened on it.** If Ren never confirmed Monday's meals, Monday still disappears at midnight and its ingredients are never deducted — inventory silently drifts in the optimistic direction. Status: **addressed in prototype10** — the roll now queues any meal still `pending` and asks Ren what happened, deducting only on the answer. The roll itself never deducts and never assumes. What remains open is risk 5's other half: whether a nudge reaches Ren before the roll rather than after it.
10. **A restriction can shrink the compliant pool below three distinct meals.** With several restrictions on, the approved files may not hold enough compliant recipes to fill three days without repeating. Status: addressed for now — the agent repeats a compliant meal rather than leaving an empty slot, and flags the slot only when nothing compliant exists at all. Whether repetition is acceptable to the household is a question for the pilot.

### Cold read

PENDING — not yet conducted. The team should give this spec to someone who was not part of the planning conversation and ask them to explain, from the spec alone: (1) who Ren is and what Ren needs, (2) what the agent produces, (3) what the agent won't do, (4) how to tell if the agent is working correctly. Gaps found should be addressed in the next version.

### Open assumptions

| # | Assumption | Location in spec | Status | Resolve by |
|---|---|---|---|---|
| 1 | Inventory file format and location | Knowledge > Input 1 | Open | Before Exercise 4 |
| 2 | Receipt intake format and misread-item flow | Knowledge > Input 1 | Open | Before Exercise 4 |
| 3 | Profile tab vs. fixed assumptions for v1 | Scope > Deliverable (design-spec) | Open — built in prototype8 with three sub-screens, awaiting ratification | Before Exercise 4 |
| 4 | Streaks/stats view in scope or deferred | What good looks like > Voice and visual | Open — built in prototype7, awaiting ratification | Before Exercise 4 |
| 5 | Build approach (native vs. wrapped web app) | Scope > Deliverable | Open — a home-screen web app is built in `deliverables/web/` (2026-10-01), awaiting the team's decision | Before Exercise 4 |
| 6 | Recipe file as v1 seed; expansion criteria | Knowledge > Input 2 | Open | When team considers expansion |
| 7 | Receipt-reading confidence threshold | What good looks like > Receipt-reading standard | Open | Before Exercise 4 |
| 8 | Evidence figures (planning time, waste $) | Governance > Checks applied | Open | During pilot |
| 9 | Non-English receipt handling | Governance > Blindspot pass | Open | Before Exercise 4 |
| 10 | Blurry/partial receipt failure flow | Governance > Blindspot pass | Open | Before Exercise 4 |
| 11 | Cooked-meal reminder mechanism | Governance > Blindspot pass | Open — a toggle exists in prototype8's notification screen; the reminder itself is not built | Before Exercise 4 |
| 12 | Breakfast recipe expansion timeline | Knowledge > Input 2 | Resolved — expanded file created | — |
| 13 | Onboarding flow design | Scope > Deferred (P1) | Open | Before Exercise 4 |
| 14 | Shelf-life norms accuracy for edge-case items | Knowledge > shelf-life-norms.md | Open | During pilot |
| 15 | Recipe preferences (like / not-for-us / favourite) in scope; source boundary extended to cover a preference store | What good looks like > Recipe preferences | Open — built in prototype7, awaiting ratification | Before Exercise 4 |
| 16 | Unapproved recipe in prototype sample data ("Avocado & Black Bean Wrap") | What good looks like > Current prototype | **Resolved in prototype8** — replaced with Quick Black Bean & Rice Burrito Bowl; all 18 catalogued recipes trace to an approved file | — |
| 17 | Nutrition data has no approved source — the recipe files carry none, so the figures shown are estimates | What good looks like > Current prototype | Open — either source real values or keep them labelled as indicative | Before Exercise 4 |
| 18 | Dietary filtering in scope for v1; and whether recipe-level tags are a defensible basis for it | What good looks like > Dietary restrictions | Open — built in prototype9, awaiting ratification. Not allergy-safe without ingredient-level data | Before Exercise 4 |
| 19 | Household size and dietary settings are agent inputs the source boundary does not yet authorize | Knowledge > Source boundary | Open — document them inside the boundary or remove them | Before Exercise 4 |
| 20 | Rolling three-day horizon replaces a fixed plan; behaviour of the midnight roll on a partly-cooked day | Scope > Version 1 (P0) does | Partly resolved in prototype10 — unconfirmed meals are carried forward as a question instead of discarded. Still open: whether the prompt should block the roll or queue behind it | During pilot |
| 21 | The prototype models 18 of 300 recipes, because pantry-ingredient mapping is hand-authored | What good looks like > Current prototype | Open — decide how many recipes need mapping for a credible demo, and whether the mapping should be generated from the database rather than written by hand | Before Exercise 4 |
| 23 | Four catalogued recipes mark an ingredient optional that the database treats as required | What good looks like > Current prototype (defect 4) | Open — fixing it makes those recipes infeasible without the ingredient, which is the database's position but a visible behaviour change | Before Exercise 4 |
| 22 | Recipe times now range beyond 30 minutes; the agent must respect the stated time when a meal has to be quick | Knowledge > Input 2 | Open — decide whether v1 filters by available time, and what the default ceiling is | Before Exercise 4 |

---

*Folder structure beside this spec: `knowledge/` (primary material, including `knowledge/skills/` — the agent capabilities, seven written as of 2026-09-19), `deliverables/` (prototypes and design spec), `governance/history/` (superseded spec versions).*
