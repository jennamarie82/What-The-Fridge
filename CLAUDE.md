# What the Fridge - Living Spec

Version: 1.19 (2026-11-26). What changed in each version is listed under "Version history" at the end; earlier versions are kept in `governance/history/`.
Team: Group 3
App name: What the Fridge (wordmark: **WTF**)

What the Fridge is a phone web app that plans a household's next three days of meals from 579 approved recipes, around the food already in the kitchen, using what is closest to the end of its freshness window first. Ren, the household's planner, decides; the app does the searching and matching.

### Reading this spec

- **What is current.** "Current app" describes the app as it is now. Sections headed "History" and notes about prototypes (prototype7 to prototype10, earlier versions built before the app went live on 2026-10-01) are kept for the record; where a feature was later removed or changed, the note says so.
- **Status words.** *Ratified*: the team agreed it belongs in v1. *Decided*: the team settled an open question. *Deferred*: not in v1. *Open*: still to settle.
- **The agent and the app** are the same thing: "the agent" is the app's planning behaviour.
- **NOTICE, UNDERSTAND, ACT** are the three steps of Ren's use (spot what's about to turn, see a feasible plan, adjust and confirm); "the ACT step" means Ren confirming or changing a meal.
- **Exercise 4** is the BUS 860 course milestone at which the team commits v1.
- **Claude** means two different things: Claude in the app is the Anthropic model that reads receipt and shelf photos; Claude as the team's assistant helped build the app and keeps the Build and Fix Log.
- **Where files live.** Paths under `knowledge/`, `deliverables/` and `governance/` are in the team's Shared Drive folder ("this folder"). The app, the 579-recipe database (`knowledge/Combined_Recipe_Database.md`), `tools/`, `worker/` and `supabase/` are in the GitHub repository `jennamarie82/What-The-Fridge`.
- **Terms.** *PR #n*: a numbered pull request, the reviewed change that put a feature live. *Worker*: the team's small Cloudflare Worker service that passes a photo to Claude and returns what it read. *Supabase*: the database service that holds signed-in accounts; *row-level security* is its rule that each person reads and writes only their own record; the *anon key* is the public key the app uses, which works only within those rules. *localStorage*: the browser's own storage on Ren's device. *Service worker*: the browser helper that keeps an offline copy. *Tesseract.js*: on-phone text reading, used only when the Worker can't be reached.

## Purpose and user

Ren keeps the household fed and the kitchen running — choosing what to cook each day, stretching what's already in the fridge, and keeping grocery runs to a minimum. This matters because when meal decisions pile up or food goes to waste, it costs the household time, money, and daily peace of mind.

What the Fridge supports Ren by turning the "what are we eating?" question into a quick, informed choice grounded in what's actually on hand — for breakfast, lunch, and dinner, or whichever of them the household chooses to plan. The agent does not decide for Ren; it handles the recipe-search and ingredient-matching work so Ren can focus on the judgment calls — what the family actually wants to eat.

Primary leverage: **Acceleration** — the agent compresses the time Ren spends searching recipes and cross-referencing ingredients from ~20 minutes to under 5 minutes. Secondary leverage: **Augmentation** — it surfaces freshness estimates and cross-meal ingredient coordination Ren might not calculate on her own.

### Role map

| Responsibility area | Recurring task | Input | Output | Frequency | User of output |
|---|---|---|---|---|---|
| Inventory tracking | Log what's in the kitchen | Receipt photos, manual counts | Current ingredient list with dates | After each grocery trip + weekly spot-check | Ren (for planning) |
| Meal planning | Plan three days of the meals the household chose (any of breakfast, lunch, dinner) | Inventory, recipe file, household preferences | Three-day meal plan with feasibility notes | Every 3 days | Ren + household |
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
| 1 | Approved recipe database | `knowledge/Combined_Recipe_Database.md` **in the app repository** (github.com/jennamarie82/What-The-Fridge) | 579 recipes (113 breakfast, 168 lunch, 298 dinner) with ingredients, instructions and a dietary tag line each | Yes — expanded from 300 to 579 on 2026-10-29 (PR #14). The earlier 300-recipe copy that sat in this folder's `knowledge/` was moved to `knowledge/superseded/Combined_Recipe_Database_300-recipes_superseded-2026-10-29.md`, with a pointer note left in its place |
| 2 | Role and industry context | `knowledge/role-and-industry.md` | Ren's role map, AI leverage type, human-vs.-agent division of labor, boundary rule | Yes — updated to v1.6 on 2026-09-18 |
| 3 | User stories | `knowledge/stories.md` | NOTICE / UNDERSTAND / ACT stories in situated form | Yes — updated to v1.6 on 2026-09-18 |
| 4 | Market research | `knowledge/three_day_no_shop_recipe_app_research.pdf` | Competitive landscape, five friction points, value proposition, north-star metric | Yes |
| 5 | Visual / UX design direction | `knowledge/recipe_app_visual_layout_feature_recommendations.pdf` | Design principles, competitive visual patterns, navigation structure, personality direction | Yes |
| 6 | Agent blueprint | `knowledge/Meal_Planning_Agent_Blueprint.pdf` | AI leverage types (Acceleration, Augmentation, Automation, Amplification), assessment framework, scoping | Yes |
| 7 | User story detail | `knowledge/Group 3 - User Story (1).docx` | Expanded user story documentation for Group 3 | Yes |
| 8 | Shelf-life norms reference | `knowledge/shelf-life-norms.md` | Default shelf-life windows by food category, sourced from USDA/FDA guidelines, used by agent for freshness estimation | Yes — the 248-row version from the app repository (`knowledge/shelf-life-norms.md`, commit 2a54392) adopted by the team on 2026-11-20, so foods added to the food list get a freshness estimate. The earlier 78-row copy was moved to `knowledge/superseded/shelf-life-norms_78-rows_superseded-2026-11-20.md`. The app reads the windows from `tools/shelf-life.csv` (app repository; 160 norms in days, transcribed from this file, the opened window where it gives both); 415 of the 639 foods get an estimate where they are usually kept (PR #45) |
| 9 | Synthetic user interviews | `knowledge/synthetic-interviews.md` | Five AI-generated interview scenarios exploring diverse user needs and edge cases | Yes (new) |
| 10 | Recipe image manifest | `knowledge/recipe-image-manifest-300.csv` | Maps recipes 1–300 to their photos. The app repository's `recipe-images/` now holds all 579, named by title slug; the manifest has not been extended | Partly — covers the first 300 only |
| 11 | Food list | `tools/ingredients.csv` (app repository) | 639 foods: every food a recipe line links to, plus about 320 pantry-only foods (frozen fruit and vegetables, pasta shapes, squash, snacks, cans, jars, spices and other everyday items) that can be stocked and recognised on receipts and photos but never change how a recipe is read | Yes — 201 pantry-only foods added 2026-11-20 (PR #43) |
| 12 | Nutrition and servings estimates | `tools/nutrition.csv`, `tools/servings.csv` (app repository) | Typical per-100 g values per food, and an estimated serving count per recipe. Not from an approved source: they drive the labelled nutrition estimates and the scaling of recipe amounts (open assumptions #17, #25) | Yes — all 579 recipes |
| 13 | Ingredient families | `tools/families.csv`, `tools/family-review.csv` (app repository) | 54 parent categories holding 238 foods (Tomatoes, Cheese, Onions…), used only to group foods in pantry search and the waste breakdown. A family never lets one food count as another in a recipe. `family-review.csv` proposes how each family member the planner can't use today could be routed (counts_as or a stand-in); it is checked by the build but **not wired** (open assumption #30) | Yes — 2026-11-22 (PR #52) |
| 14 | Ingredient stand-ins | `tools/substitutions.csv` (app repository) | 78 rows, each naming a food a recipe asks for, a food that can stand in for it, and in which kinds of recipe; since 2026-11-26 (PR #56) also the extra cooking time a stand-in needs (raw rice for cooked rice, for example). The app offers a stand-in only from this file and always states the swap | Yes — in use since 2026-11-19 (PR #39, at the team's request); **all 78 rows reviewed 2026-11-26** and the review accepted by the team (open assumption #33) |

### Input 1: Ingredient inventory

Inventory reaches the agent two ways:

1. **Manual entry.** Ren adds food with the + button → Add manually, picking from the food list (`tools/ingredients.csv`), with an optional quantity and a purchase date that is always Ren's answer ("don't know" included). The inventory is kept in the browser's own storage on Ren's device, not in a file (resolves open assumption #1). When Ren signs in, the inventory is also saved to Ren's own account (see "Accounts and saved data," below).
2. **Receipt photo.** After a grocery trip, Ren chooses + → Scan a receipt (camera) or Upload a receipt photo (camera roll). The photo goes to the team's Cloudflare Worker, which sends it to Claude (Anthropic) to read; Claude returns each printed line, a plain grocery name ("GRN ONION" → "green onions"), whether it is food, any printed quantity or weight, and the purchase date. The app matches the names to the food list and shows **every line** on a review screen: matched foods pre-ticked with a fridge / freezer / cupboard choice, non-food lines unticked, unmatched lines with a "pick ingredient" option. Nothing enters the inventory until Ren confirms, and Ren can correct any line first: change the food it was matched to, its amount and unit, mark a non-food line as a food, or add something the read missed (PR #44, 2026-11-20). If the Worker can't be reached, the app reads the receipt on the phone (Tesseract.js) and the same review applies. Built 2026-10-16 to 2026-10-21 (PRs #11, #13); this answers open assumption #2.
3. **Shelf photos ("Snap your shelves").** To set up a pantry quickly, Ren photographs the fridge, freezer or cupboard (from first-time setup or + → Snap your shelves). The photo goes through the same Worker to Claude, which lists only the foods it can clearly see, with a visible count, the form (fresh, frozen, canned, dried, packaged) and whether it is sure. Rules agreed by the team on 2026-11-12 (built in PR #34, the Worker's pantry mode in PR #32):
   - Nothing is added until Ren ticks it. Only items Claude was sure of, and whose food match is trusted, start ticked; the rest wait for Ren.
   - A photo can't show when food was bought, so no purchase date is guessed. Ren answers once for the whole list: **This week** (counted as bought 6 days ago, the safe end of the week, so no estimate makes food look fresher than it might be), **Older** or **Not sure** (both added undated, with no freshness estimate).
   - Counts and printed package sizes are estimates Ren can change on the review list. A printed size is assumed full until Ren changes it. As with receipts, Ren can change the food an item was matched to, its amount and unit, or add a food the photo missed (PR #44).
   - Claude does not guess what is inside closed or unlabelled containers and never says whether food is still good.
   - The place is the one Ren photographed, not the food's usual home.

For each item, the agent tracks a quantity where known and a purchase date (from a receipt) or an expiry date (if Ren states one directly). A missing value stays missing: if neither Ren nor a receipt establishes an item's quantity or purchase date, the agent treats it as unknown — it does not guess a quantity, invent a purchase date, or apply a freshness estimate to an item it has no date for.

Coverage: the agent's knowledge of Ren's ingredients comes only from what Ren typed and from receipt photos Ren uploads. It still has no access to Ren's grocery account, loyalty card, or retailer purchase history, and no refrigerator sensor — a receipt only reaches the agent because Ren photographed and uploaded it.

A receipt or shelf photo leaves the device only when Ren chooses to send one: it goes to Claude through the Worker to be read and is not stored by the app. The app says so in About, on the receipt and shelf-photo screens and in the Pantry. The only other data that may leave the device is Ren's own saved data, and only after Ren signs in (see "Accounts and saved data"). The Anthropic API key is a Cloudflare secret, never in the repository or the app; the Worker answers only the app's own site, and the Claude Console workspace's monthly spend limit caps the cost (open assumption #24).

Smallest useful snapshot first: perishables, opened packages, cooked leftovers, and proteins matter most to a three-day plan. Shelf-stable pantry staples (see the recipe file's assumed staples below) matter less and can be reported more loosely.

### Input 2: Recipe database

- The approved recipe source: `knowledge/Combined_Recipe_Database.md` in the app repository. A curated file of 579 recipes — 113 breakfast, 168 lunch, 298 dinner — each with ingredients, numbered instructions, a stated total time, and a dietary tag line. Recipes are numbered 1 to 579 in one continuous sequence and are never renumbered, so a recipe number is a stable identifier. Approved by the team on 2026-09-18 with 300 recipes (superseding the 28-recipe and 12-recipe files now held in `knowledge/superseded/`) and expanded on 2026-10-29: 279 recipes from the expansion pool were added as #301–579; 21 that duplicated an existing dish were not taken, and no existing recipe or photo changed (PR #14). The build (`tools/build-recipes.ps1`) reads the repository copy and checks every recipe in the master directory is parsed.
- The agent must not draw recipes from any other source — not a live recipe API, not a general web search, not an invented recipe — unless the team names a replacement here. AI-generated recipes and a web recipe API were discussed on 2026-10-13 and are **not built**; adding either requires amending this section first (open assumption #27).
- The agent may only use what a recipe entry actually states: its ingredients (with quantity where the file gives one), its category, and its total time. The agent does not invent a substitution or a variant the recipe file doesn't already offer.
- The recipe file assumes a fixed set of pantry staples are on hand (oils, condiments, aromatics/spices — see that file's "Standard Pantry Staples Assumed On Hand" section) rather than requiring Ren to list them in the inventory.
- **Distribution and timing.** 113 breakfast, 168 lunch, 298 dinner. The original 40 recipes are all 30 minutes or less; the newer entries include longer classics, and each states its real prep-plus-cook time rather than a compressed one. The agent must respect the stated time when a meal has to be quick: on weekdays it stays within the household's own cook-time limit for each meal (see Scope).
- **Servings are not stated.** The database gives no serving counts or nutrition. Both are estimated in `tools/servings.csv` and `tools/nutrition.csv`, labelled as estimates wherever they appear, and the serving estimates are what recipe amounts are scaled from.
- **Dietary tags are part of the source.** Each recipe lists the restrictions it *satisfies* (Vegetarian, Dairy-free, Nut-free, Pork-free). An absent tag means the recipe contains that item in a required ingredient. The agent reads these rather than inferring them — see "Dietary restrictions," below.
- **One photo per recipe.** 579 images in the app repository's `recipe-images/`, named as a slug of the recipe title (the manifest in `knowledge/` covers the first 300).
- Any further expansion follows the same rule: the team approves the new recipes into this file before the agent may use them. Criteria, approved 2026-11-26 (open assumption #6): a new recipe (1) is approved by the team before it is added; (2) is not a duplicate of a dish already in the file; (3) states its ingredients with quantities, numbered steps, a real total time and a dietary tag line; (4) has a photo; (5) takes the next number in sequence, never reusing or renumbering one; and (6) passes the build with every ingredient line linked to a food.

### Accounts and saved data

**Decided by the team on 2026-11-20; live since 2026-11-20** (branch `feat/accounts`; code in `account.js`, database setup in `supabase/setup.sql`, team setup steps in `supabase/README.md`). Tested on the live site: signed-out visitors are refused by the database; a team member received the emailed code, signed in on a phone, saw the kitchen saved to the account, opened it on a second device, and saw a cooked meal carry across. Testers had lost their pantry and history when a browser was cleared, when they switched to an iPad, or between Safari and the home-screen app on the same iPhone, which keep separate storage. Accounts let Ren reach the same kitchen from any browser or device. Without signing in, everything stays in the browser as described under Input 1.

How it works:

- **Optional.** Ren can keep using the app without an account, exactly as today. No saved data leaves the device unless Ren signs in (photos Ren chooses to send to be read are covered under Input 1).
- **Sign-in with an email code.** Ren enters an email address and types the 6-digit code Supabase sends. A code is used rather than a sign-in link because on an iPhone a link opens Safari, not the home-screen app, and the sign-in would not carry over. No passwords are stored by the app or the team.
- **Where the data lives.** In the team's Supabase project, in the **Canada (Central)** region. Each person has one saved record holding the same data the browser holds today: settings and household answers, pantry, plan, recipe preferences, the unconfirmed-meal queue, the cooking log and the waste log, plus the email address Ren signs in with. Receipt and shelf photos are still never stored by the app.
- **Each person sees only their own data.** Row-level security rules in the database allow a signed-in person to read and write only their own record. This is enforced by the database, not only by the app. The one exception is the team member who holds the Supabase dashboard, who can see every record there; they open it only to deal with a request from the account's owner, and the app says so.
- **Keys.** The app holds the project address and Supabase's public "anon" key, which is designed to be public and only works within the security rules; a teammate adds it, not Claude. The project's secret service key never goes in the repository, the app, a screenshot or anywhere a user can read it, the same rule as the Anthropic key.
- **Offline copy and syncing.** The browser keeps a copy so the app works offline. Changes save to the account shortly after they are made, and the latest saved data loads on sign-in on any device.
- **Two devices at once.** For a single household the most recent save wins for the pantry, plan and settings. The cooking and waste logs are merged, never overwritten, so no history is lost.
- **First sign-in.** If the device already holds data, Ren is asked whether to upload it to the account. It is never uploaded without Ren's say-so.
- **Signing out and deleting.** Signing out leaves the account's data in place. Settings › Account & Support › Account offers "Delete my account and data", which removes the saved record and the account. The app says plainly what is stored, where, and how to delete it, in About and on the sign-in screen.
- **Not included.** One account is one person's kitchen. Two people sharing a household pantry stays deferred (P1 — Household sharing).

**Sign-in emails.** Supabase's built-in email can only send a link, which on an iPhone opens Safari rather than the home-screen app, and its templates can't be edited without the team's own sender. So the codes are sent from a Gmail account created for the app, **whatthefridge.teamren@gmail.com** (created 2026-11-20), connected to Supabase as its email sender with a Gmail app password. The app password is typed into Supabase by the team and kept nowhere else; it never goes in the repository, the app, a screenshot or a message, and Claude never handles it. The account sends as "What the Fridge"; Gmail allows about 500 emails a day, and Supabase's own rate limit applies on top. Its login is kept with the team's other shared logins so the app doesn't depend on one person.

**Who holds what (decided 2026-11-26).** One team member, the owner of the GitHub repository, holds the Supabase dashboard and the Gmail login, and answers deletion requests that arrive by email; anyone can also delete their own account in the app at any time. The privacy wording was ratified by the team on 2026-11-26, after three corrections: it now says that other people using the app can't see a person's data but the dashboard holder can (and opens it only to deal with that person's request); that photos are sent to Claude (Anthropic) to be read and aren't stored by the app, rather than "never stored"; and that the account stores the person's email address. The ratified text is in Settings › Account, About › Privacy, the Pantry storage note and the page footer.

### Knowledge boundaries

**The agent CAN:**
- Read a grocery receipt photo (through Claude, with an on-phone fallback) to extract item names, quantities and the purchase date, for Ren to review
- Read a photo of Ren's fridge, freezer or cupboard (through Claude) to list the foods clearly visible, for Ren to review
- Estimate a freshness window from a purchase date and the norms in `knowledge/shelf-life-norms.md`
- Match inventory ingredients to the 579 approved recipes across all three meal categories (breakfast, lunch, dinner), counting a variety toward the recipe food it stands in for (penne as dry pasta, acorn squash as butternut squash)
- Scale recipe amounts to the household from estimated servings, and plan dinner leftovers as the next day's lunch when the household eats leftovers
- Read each recipe's dietary tag line from the approved file and filter on it
- Track quantity where Ren or a receipt provides it
- Treat the recipe file's standard pantry staples as available without requiring Ren to list them
- Coordinate ingredient usage across meals within the same three-day plan to prevent double-allocation of scarce items
- Offer, for a food Ren picks, the other foods on hand that share an approved recipe with it, and the approved recipes that use both (guided pairing)
- Group related foods into families for pantry search and the waste breakdown — never to count one food as another in a recipe
- Offer a stand-in for a missing ingredient only from `tools/substitutions.csv`, always stating the swap and any extra cooking time

**The agent CANNOT:**
- Access Ren's grocery account, loyalty card, or retailer purchase history
- Use any recipe source not approved by the team in this spec
- Invent a substitution, variant, or recipe not in the approved file
- Guess a quantity, fabricate a purchase date, or estimate freshness for an undated item
- Access a refrigerator sensor or any automatic inventory feed
- Determine actual food safety — freshness estimates are approximations, not safety guarantees
- Send any of Ren's data off the device other than a receipt or shelf photo Ren chooses to send to be read and, only after Ren signs in, Ren's own saved data to Ren's account (see "Accounts and saved data")
- Read or change anyone else's saved data

**Source boundary:** All ingredient knowledge comes from Ren's manual entries, uploaded receipt photos and shelf photos (read by Claude through the team's Worker, then confirmed by Ren). Data loaded from Ren's account is Ren's own earlier entries, not a new source. All recipe knowledge comes from `knowledge/Combined_Recipe_Database.md`. Shelf-life estimation uses the norms in `knowledge/shelf-life-norms.md`. Ren's own settings — household size, dietary restrictions, which meals to plan, whether the household eats leftovers, weekday cook-time limits, staples kept, and recipe likes, dislikes and favourites — are also inputs; they only filter, order or scale recipes from the approved file and never add one (ratified 2026-11-26, open assumptions #15 and #19). No other source is authorized.

**Household data the app holds — ratified 2026-11-26 and now named inside the source boundary above.** The note below records why it was raised. Several kinds of data sat outside the boundary and had to be brought inside it or removed before v1 was committed: the recipe preference store (like / not-for-us / favourite), the dietary restriction settings, household size, and — since 2026-10-29 — the meal choices from the setup questionnaire (which meals to plan, whether the household eats leftovers, and a weekday cook-time limit per meal). None of them introduce a recipe — they only filter, reorder, or scale what the approved files already contain — but they are inputs the agent reads, and the spec should say so explicitly rather than leaving them undocumented. Since 2026-11-20, a signed-in Ren's copies of all of these are also stored in Ren's account (see "Accounts and saved data"). Estimated nutrition and estimated servings are a different case: recipe data the approved files do not contain (open assumptions #17 and #25).

## What good looks like

### Meal plan standard

Every three-day plan states, for each planned meal (breakfast, lunch, and dinner, or the subset the household chose): which ingredients from Ren's inventory it uses (in amounts scaled to the household), which ingredients are still missing, the estimated preparation time, and — for each dated ingredient — the freshness estimate the agent used and its basis.

Checkable example: "Day 1 Dinner — Garlic Butter Shrimp & Spinach Pasta: uses shrimp and spinach (spinach: purchased Sept 15, typical shelf life 5–7 days refrigerated — estimated use-by Sept 21). Missing: parmesan. Estimated prep time: 20 minutes."

A leftovers lunch says so ("Lunch · leftovers from last night's dinner"), uses no further ingredients, and follows its dinner if that dinner is swapped or skipped.

### Cross-meal coordination standard

When the same ingredient appears in multiple meals within a three-day plan, the agent must verify the total quantity needed does not exceed what's on hand. If it does, the agent flags the conflict at plan-generation time and suggests an alternative meal, rather than silently double-allocating a scarce ingredient.

Checkable example: If the plan assigns chicken breast to both Tuesday lunch (Caprese Chicken Ciabatta) and Tuesday dinner (Sheet Pan Chicken Fajitas), and Ren's inventory shows 1 lb total, the agent must flag that 1 lb is likely insufficient for both and suggest a swap.

### Receipt-reading standard

When the agent reads a receipt photo, it shows Ren every extracted line and the purchase date, and does not add anything to inventory until Ren confirms it. Since 2026-10-21 this is met by reviewing every line rather than by a confidence threshold: matched foods arrive ticked (Ren can untick or change storage), non-food lines arrive unticked, and unmatched lines can be assigned a food by hand. Tested on a 21-line sample receipt: 7 of 7 foods matched and 10 of 10 non-food lines excluded. Since 2026-11-20 (PR #44) every line can also be corrected before saving: a different food, amount or unit, a non-food line turned into a food, or a missed item added. The same applies to shelf photos.

### Must never

- Apply a freshness estimate to an ingredient with no known purchase date. An undated item stays flagged as unknown, not assumed fresh.
- Hide the basis for a freshness estimate. Every dated ingredient's purchase date and the shelf-life assumption used must appear alongside it.
- Send a grocery list anywhere or place an order. (Showing Ren, in the app, what the plan is short of — the "What to pick up" list — is allowed: kept by team decision on 2026-11-26, open assumption #32. It is built only from the approved recipes and Ren's kitchen, and nothing is ordered or sent.)
- Use a recipe source the team has not approved.
- Report that Ren approved a plan when Ren has not confirmed it.
- Present a low-confidence receipt read as confirmed without Ren's review.
- Assign the same scarce ingredient to multiple meals without verifying that the total quantity on hand is sufficient.
- Put the Anthropic API key in the repository, the app, a screenshot, or anywhere a user can read it. It lives only as a Cloudflare secret.
- Put the Supabase service key in the repository, the app, a screenshot, or anywhere a user can read it. Only the public anon key, limited by the security rules, goes in the app.
- Let one account read or change another account's saved data.
- Upload a device's data to an account without Ren choosing to, or keep a person's saved data after they ask for it to be deleted.

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
- **Day-and-meal navigation.** The Plan tab organizes by day (Day 1, Day 2, Day 3), each showing the household's planned meals (up to breakfast, lunch, and dinner; a leftovers lunch is marked as such) in a vertically scrollable layout. The next upcoming meal is spotlighted at the top.
- **Delight: waste-reduction streaks and stats.** **Ratified 2026-11-26** (open assumption #4). Since 2026-11-21 there is one milestone, **Food rescued**, on the Settings screen: a count of ingredients Ren cooked in the last two days of their estimated window, with a ladder of steps. The cooking-frequency ladder and the stat tiles were removed (PRs #47, #50), because how often Ren cooks is not what the app is for. The Food rescued card also holds the "rescued · got away" line and, one tap away, "Where food is going" (what was thrown out, why, and whether it was ever planned). Logging a loss never reduces the rescued count. It draws only from Ren's own cooking and waste logs — no new data source, no money figure, and no claim of a verified saving.

### Current app

**The live app is the public GitHub repository `jennamarie82/What-The-Fridge`, published at https://jennamarie82.github.io/What-The-Fridge/.** Changes go through a branch and a pull request with one teammate's approval. Every change made in Claude or on GitHub is recorded in the Build and Fix Log (see Governance). Settings › Account & Support › About shows the version a phone is running. (The tab once called Profile is now Settings, in two sections: Preferences — household size, meals & cooking, dietary preferences, staples — and Account & Support — account, About, Send feedback.) `deliverables/prototype10.html` and `deliverables/web/` are superseded by the repository; the history below is kept for reference.

What the app does as of 2026-11-24, beyond prototype10:

- **All 579 recipes are planned from the database itself.** Each ingredient line is linked to the food list by the build (`tools/build-recipes.ps1`), not hand-mapped, so every recipe takes part in feasibility, deduction and Swap; all 4,303 lines link to a food. This retires the 18-recipe sample (defect 5, open assumption #21).
- **Setup questionnaire** (built 2026-10-29, branch `meal-preferences`, pending merge): name; household size and dietary filters; which meals to plan (any of breakfast, lunch, dinner, at least one); whether the household eats leftovers; and a weekday cook-time limit for each chosen meal. The same controls live under Settings › Preferences › Meals & cooking. Existing users keep the earlier behaviour: all three meals, no leftovers, 20/30-minute limits.
- **Leftovers lunch** (same branch): when the household eats leftovers, each dinner is planned for the household twice over and the next day's lunch is its leftovers — nothing to cook, nothing further deducted. Swapping or skipping the dinner carries the lunch along; "Cook something else" gives that lunch its own meal.
- **Weekday cook-time limits** (PR #6, made per-household on `meal-preferences`): Monday to Friday each meal stays within the household's limit (defaults: breakfast 20 minutes, lunch 30); a slower meal is used only when nothing within the limit fits. Weekends are not limited.
- **Recipe amounts scale to the household** from each recipe's estimated servings (on `meal-preferences`), doubled for a dinner that makes the next lunch. The meal screen shows the recipe's own wording with the scaled amount beside it; the kitchen check, set-asides and Accept use the scaled amount. This restores the prototype8 behaviour ("Serving sizes follow household size") on a stated basis.
- **Estimated nutrition per serving** at the bottom of every recipe (PR #8, extended to all 579 on 2026-10-29): calories, protein, carbs, fat, fibre and sodium, labelled as an estimate.
- **Snap your shelves** (PR #34, 2026-11-12): photos of the fridge, freezer and cupboard, read by Claude through the Worker's pantry mode (PR #32), set up a pantry with every item reviewed. Offered first in setup and in the + menu. Rules under Input 1.
- **Adding food:** the + button offers Scan a receipt, Upload a receipt photo, or Add manually (PR #11). Receipts are read by Claude through the team's Worker, with every line reviewed before anything is added (PR #13; see Input 1).
- **Pantry-only foods** (PR #12, extended by PR #43 on 2026-11-20): about 320 everyday foods (frozen fruit and vegetables, pasta shapes, squash, milk alternatives, snacks, cans, jars, spices and others) can be stocked and recognised on receipts without changing how any recipe is read. A variety counts toward the recipe food it stands in for; one no recipe uses is labelled "not in recipes yet".
- **Installed copies stay current** (on `meal-preferences`): app files load with a version number and the offline helper checks for changes on every open.
- **Pantry search** (PR #15, completed on `meal-preferences`): a search button on the Pantry finds stocked items by name, grouped by fridge, freezer and cupboard. PR #15 shipped without its page markup and reverted part of `index.html` (see blindspot 15); both are repaired on `meal-preferences`. Since 2026-11-22 search also finds a food by its family ("cheese" finds Gouda) and says which family matched (PR #52).

Added 2026-11-19 to 2026-11-26 (PRs #39–#56):

- **Survey feedback** (PR #39, 2026-11-20): every change to the plan leaves a short note of what changed, with Undo; each new day opens with a summary of yesterday, settles any unanswered meal, then plans today; **"What to pick up"** lists what the plan is short of, meal by meal, plus a few foods that would make more recipes cookable (shown only in the app; nothing is sent or ordered; open assumption #32); **stand-ins** let a meal one or two items short be offered with the swap stated, from `tools/substitutions.csv` only (knowledge item 14); and Ren chooses which staples the household keeps.
- **Back button, Settings and welcome** (PR #40): a Back button inside the app, the Profile tab renamed Settings, and a first screen that says what WTF is for.
- **Start with tomorrow** (PR #56, 2026-11-26): when the kitchen is nearly empty and nothing in the plan can be cooked yet, the Plan tab leads with tomorrow's breakfast and lunch, chosen to use the household's food and need the fewest extras, with what each meal is missing.
- **Food added after the plan** (PR #56): adding food to the pantry after a plan was made is now noticed; the Plan tab names what was added and offers to re-plan. Using food up does not trigger it.
- **Stand-in cooking time** (PR #56): a stand-in that needs cooking (raw rice for cooked rice) adds its time to the meal, so weekday time limits and every displayed time include it.

- **Correcting a scan before saving** (PR #44): on the receipt and shelf-photo review, every line can be given a different food, amount or unit; a not-food line can be marked as food; and a food the read missed can be added. See Input 1.
- **More foods, and more freshness estimates** (PRs #43, #45): 201 pantry-only foods were added (food list 438 → 639), chosen by testing common supermarket names, which also fixed wrong matches such as potato chips read as Potatoes and ice cream as Heavy cream. With the 248-row norms adopted (knowledge item 8), 415 of the 639 foods get an estimate where they are usually kept; 188 still have no guide and say so. Recipes are read exactly as before.
- **Practical amounts** (PR #51): a recipe scaled to the household is rounded to what a cook measures — counted foods whole (onions, lemons, avocados and similar by the half), cups and spoons to kitchen fractions, pounds to the quarter, grams and millilitres whole. The rounded amount is the one shown, checked against the pantry and deducted on cooking, so the three always agree. Pantry amounts show as kitchen fractions ("1⅓ cups"), and a scaled count names its food ("→ 4 eggs").
- **Finished things are hidden, not deleted** (PR #48): a cooked or skipped meal leaves its day, and a line at the bottom ("Breakfast cooked · Lunch skipped — Show") reopens it with Undo for as long as the day is on the plan; a day with everything done says so. Used-up food is left out of the Pantry's zone lists but kept, so undoing a cooked meal still puts its quantities back.
- **Guided pairing** (PR #49): from a Needs-attention item ("Pair it with…") or a meal ("Or pick two foods from your kitchen"), Ren picks a food and then a second one, and is shown approved recipes that use both. Only foods that share a recipe with the first are offered, so no pairing can come up empty. It searches the approved recipes only, measures gaps against what the rest of the plan has set aside, asks before planning food past its estimated window or replacing a meal Ren picked herself, and can be undone.
- **Ingredient families** (PR #52): related foods are grouped (cherry and sun-dried tomatoes as Tomatoes) in pantry search and in the waste breakdown ("Tomatoes, 3 times", with the kinds listed). Grouping only: a family never counts one food as another in a recipe. See knowledge item 13.
- **Release cleanup** (PRs #46, #47, #50, #53, 2026-11-21 to 2026-11-24). Removed: the "Where everything goes" allocation table on Plan (it only displayed the allocation; the cross-meal check itself is unchanged), the Reminders screen (it existed to say no reminders are sent; About now says that an unmarked meal is asked about on the next open), the Upload-receipt row in Settings (it stays behind the + button), the Cooking regularly milestone and the three stat tiles, and the demo controls (Simulate midnight, Load sample kitchen, Start over). Simulate midnight stays under About › Testing tools, which is off by default. Someone who chose the sample kitchen at setup sees "Leave the sample kitchen" in Settings while it is loaded. The mission is shown at the top of setup and in About from one shared text. The waste breakdown ("Where food is going") now opens inside the Food rescued card. A hidden notice was catching taps on the tab bar and could trigger its Undo by accident; fixed (PR #46).

History — presentation, carried forward from prototype7:

- Day-and-meal navigation, each day showing breakfast, lunch, and dinner, with the next meal spotlighted.
- Real stock food photography on every meal card and detail hero — 300 images in `deliverables/recipe-images/`, one per approved recipe, 1280×720 WebP. A meal resolves its own photo from its name; where no approved photo exists the card falls back to a gradient rather than borrowing another dish's image.
- Warm background (`#FFF8F0`), card and tab transitions, freshness chips pairing an icon with a word.
- The **WTF** wordmark in leaf green at the top right of the Plan and Pantry screens.
- Savings milestones and a cooking-streak ladder on Profile, with playful reinforcement copy. (Since 2026-11-21 only the Food rescued milestone remains; see "Delight," above.)
- Per-recipe **like / not-for-us / favourite** controls (see "Recipe preferences," below).

Behaviour added in prototype8 — the prototype became stateful:

- **The pantry holds live quantities.** Marking a meal cooked deducts its ingredients; Swap and Skip deduct nothing. Accepting is reversible, so a wrong tap can be undone.
- **Swap proposes a real alternative.** It picks the approved recipe of the same meal type that shares the most ingredients and that the pantry can best cover, then recomputes the allocation table and the feasibility banner. (The table was removed on 2026-11-21; the allocation it displayed is still computed and enforced.)
- **Feasibility is computed, not asserted.** "No grocery trip required" is now the result of comparing what the remaining meals need against what is on hand; when it does not hold, the banner names the specific gaps. This is what makes the cross-meal coordination standard above enforceable rather than aspirational.
- **Storage zones work.** Fridge, freezer and cupboard expand to show their contents with live quantities, and items read "out" once used up. (Since 2026-11-22 used-up items are left out of the lists instead, and kept so Undo can restore them.)
- **Three Profile sub-screens** — household size, dietary preferences, notification reminders. (The reminders screen was removed on 2026-11-21; see Current app.)
- **A rolling three-day horizon.** Always today plus the next two days, relabelled daily; just after midnight the past day drops off and a new third day is built from the approved files.
- **Calories and simple nutrition** per recipe, on the card and in detail.
- **Serving sizes follow household size.** Changing it rescales every displayed quantity and everything deducted on cooking.

Behaviour added in prototype9:

- **Dietary restrictions actually filter** (see "Dietary restrictions," below).

Behaviour added in prototype10 — the midnight roll stopped losing meals:

- **An unconfirmed meal survives the roll.** A meal that leaves the three-day horizon still `pending` is queued and surfaced on the Plan tab as a question — cooked it / didn't / ate out — rather than being discarded with its ingredients never deducted. The roll itself still deducts nothing; only Ren's answer does. This closes blindspot 9. See `knowledge/skills/day-roll-reconciliation/SKILL.md`.
- **Mediterranean Chickpea Salad's prep time corrected** from 15 minutes to the 10 mins the approved database states.

Web build, added 2026-10-01 — `deliverables/web/` is prototype10 made publishable as a website (GitHub Pages), the folder that goes into the public repository. It contains only the app, not `knowledge/` or `governance/`:

- **State survives a reload.** Plan, pantry, settings, preferences and the unconfirmed-meal queue are saved in the browser's own storage (`localStorage`) and never leave the device. Each browser has its own copy; there is no shared household data. (Since 2026-11-20 a signed-in Ren's data is also saved to Ren's account. See "Accounts and saved data.")
- **Days missed while the app was closed are caught up honestly.** On open (or resume), each missed day rolls the horizon exactly as midnight would, so unconfirmed meals are queued as questions, never assumed cooked. Pantry `ago` values advance by the real days elapsed so a displayed purchase date stays fixed; undated items stay undated. "Simulate midnight" still rolls without ageing, so it never shifts a purchase date.
- **Installable on iPhone.** A manifest, icons and an offline service worker let Ren choose Share → Add to Home Screen. On a phone the mock device frame is dropped and the app fills the screen. This is a working answer to open assumption #5 (wrapped web app), pending the team's decision.
- **Demo controls** (Simulate midnight, Reset to sample data) sit on Profile, since the desktop footer is hidden on a phone. (Removed from the published app on 2026-11-21. Simulate midnight remains under About › Testing tools, off by default.)

Updated 2026-09-18 for the combined recipe database:

- All 300 recipes have a photo, and the prototype resolves any of them by title slug.
- Recipe titles, ids and dietary tags are now taken from the database rather than hand-written. Nine recipes were renamed where the database spells out "and" in place of "&", and five dietary tags were corrected against the file — Mediterranean Chickpea Salad and Tuscan White Bean and Spinach Soup, for instance, both count as containing dairy because the database makes the cheese a required ingredient rather than an optional garnish.

Known defects and gaps:

1. ~~An unapproved recipe in the sample data~~ — **resolved in prototype8.** "Avocado & Black Bean Wrap" was replaced with Quick Black Bean and Rice Burrito Bowl, and every catalogued recipe traces to the approved database.
2. **Ingredient rows still lack thumbnails.** The visual direction calls for a small illustration beside each ingredient name; the detail view still shows text and a freshness chip only.
3. **Nutrition figures are estimates.** The approved database carries no nutrition data, so the numbers shown are indicative and labelled as such in the app. Since 2026-10-29 they are computed for all 579 recipes from `tools/nutrition.csv` (typical values; ten core foods checked against USDA FoodData Central within 15%) and `tools/servings.csv`. See open assumptions #17 and #25.
4. ~~**Four recipes contradict the database on whether an ingredient is optional.**~~ **Settled in the database's favour** — the app now reads every recipe from the database, so those ingredients are required as the database states (open assumption #23). Original note: Veggie Scramble (feta), Mediterranean Chickpea Salad (feta), Garlic Butter Shrimp and Spinach Pasta (parmesan) and High-Protein Greek Yogurt and Berry Parfait (nuts) each mark an ingredient `optional:true` that the approved database lists as required and uses in a numbered step — which is why the database withholds the corresponding dietary tag. The dietary filter is unaffected (the contains-tag still blocks correctly); feasibility is not, since the app believes an ingredient the recipe needs can be dropped. Open — the fix changes behaviour, because those recipes become infeasible without the cheese, so the team should decide rather than find-and-replace.
5. ~~**The prototype models 18 of the 300 recipes.**~~ **Resolved** — all 579 are generated from the database (see Current app). Original note: Only a recipe with ingredients mapped to pantry items and quantities can participate in deduction, feasibility and swap, and that mapping is hand-authored. The consequence is visible under stacked restrictions: with vegetarian, dairy-free and nut-free all on, the 18-recipe sample holds just one compliant lunch and one compliant dinner, so the same meal repeats across all three days. The full database has 62 recipes satisfying all four restrictions, so this is an artefact of the sample, not of the product — but a demo will show it. See open assumption #21.

### Recipe preferences

**Ratified 2026-11-26** (built in prototype7; open assumption #15). Ren can mark any recipe **liked**, **not for us**, or **favourite**. A disliked recipe is swapped out of the plan and not suggested again; a favourite is resurfaced more often.

This is a per-user preference store; the source boundary above now names it. It does not pull forward the deferred P1 item "Saved/imported recipes," since it adds no recipe. Two rules apply: preferences only ever filter or reorder recipes drawn from the approved files — they never introduce a new recipe — and a disliked recipe must remain recoverable, since a mis-tap should not permanently narrow the household's options.

### Dietary restrictions

**Ratified 2026-11-26** (built in prototype9; open assumption #18). This pulls forward part of the deferred P1 item "Dietary/allergy profile"; the allergy part stays deferred.

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
- Produce a three-day meal plan covering the meals the household chose (any of breakfast, lunch, and dinner), and state its feasibility plainly — zero purchases required, or a clear explanation of the shortfall if not.
- When the household eats leftovers, plan each dinner for twice the household and make the next day's lunch its leftovers.
- For each meal, list ingredients used, ingredients missing, and estimated prep time.
- Coordinate ingredient usage across all meals in the plan to prevent double-allocation of scarce items.
- Let Ren accept, modify, or reject each suggested meal, and replan without discarding the meals unaffected by the change.
- Record what Ren actually prepared, for comparison against the plan. Ingredients are only deducted from inventory after Ren confirms a meal was actually cooked — never on a schedule.
- Keep each weekday meal within the household's cook-time limit for that meal (defaults: breakfast ≤ 20 minutes, lunch ≤ 30), using a slower recipe only when nothing within the limit fits; weekends are not limited.
- Hold a rolling three-day horizon: always today plus the next two days, rolling forward daily rather than running to a fixed end date.
- Scale every recipe to the household size Ren sets, both in what is displayed and in what is deducted when a meal is cooked — from each recipe's estimated servings, since the database states none, and labelled as an estimate.
- Ask, on first use, who is eating, any dietary restrictions, which meals to plan, whether the household eats leftovers, and how long weekday meals can take; and let Ren change any of it later.
- Apply Ren's dietary restrictions as a hard filter on which approved recipes may be suggested (see "Dietary restrictions," above).
- Let Ren set up the pantry from photos of the fridge, freezer and cupboard, reviewed item by item (see Input 1, shelf photos).
- Let Ren correct any line of a receipt or shelf-photo read — food, amount, unit — or add a missed item, before anything is saved.
- Round scaled recipe amounts to practical measures, and use the rounded amount for display, the kitchen check and deduction alike.
- Let Ren sign in with an email code, so the pantry, plan and history are kept across browsers and devices; using the app without an account stays possible (see "Accounts and saved data"). Live since 2026-11-20, ratified 2026-11-26.

### Version 1 does not

- Track inventory automatically from anywhere other than what Ren enters or a receipt Ren uploads.
- Send a grocery list or order anything. It shows Ren, in the app, what the plan is short of ("What to pick up", open assumption #32); the shopping decision stays Ren's.
- Access any grocery account or retailer.
- Purchase groceries.
- Guarantee food safety. A freshness window is a stated estimate from purchase date and general shelf-life norms, not a verified check of an ingredient's actual condition, and Ren can always override or reject it.

### Deferred beyond version 1

Not built now; may return in a later version:

- **P1 — Saved/imported recipes.** A personal library of favorited or imported recipes, beyond the single approved file. Any additional recipe source still needs separate team approval under "Input 2: Recipe database" before the agent may use it.
- **P1 — Household sharing.** More than one person using or editing the same household's plan. Accounts (decided 2026-11-20) are one person each; sharing one pantry between accounts stays deferred.
- **P1 — Controlled substitutions.** PULLED FORWARD 2026-11-19 (PR #39, at the team's request): the agent offers a stand-in to rescue a meal one or two items short, only from `tools/substitutions.csv`, with the swap stated. The table's rows were reviewed on 2026-11-26 (open assumption #33).
- **P1 — Leftover-to-lunch bridge.** PULLED FORWARD 2026-10-29 (live; ratified with the setup questions on 2026-11-26) in a simpler form than first described: the dinner is planned for twice the household and the next day's lunch is its leftovers, so no separate leftover inventory is tracked. What remains deferred is tracking actual leftover portions (for a dinner that made more or less than planned).
- **P1 — AI-generated recipes and a web recipe API.** Discussed 2026-10-13 (Claude writing a recipe from what is in the pantry, or pulling recipes from a licensed API, labelled and checked by the app against diet, time and pantry). Not built. Either needs an amendment to "Input 2: Recipe database" first, since both are recipe sources outside the approved file.
- **P1 — Dietary/allergy profile.** PARTIALLY PULLED FORWARD — recipe-level dietary filtering is built in prototype9 (see "Dietary restrictions," above) and awaits ratification. What remains deferred is the part that matters most for safety: ingredient-level allergen data, so an allergy can be treated as a genuine hard constraint rather than a tag match.
- **P1 — Onboarding flow.** PULLED FORWARD — a five-step setup questionnaire (name; household and diet; meals and leftovers; weekday cook times; empty or sample kitchen) is built (2026-10-29, pending merge) and awaits ratification. Reduces the cold-start problem identified in synthetic interviews (see `knowledge/synthetic-interviews.md`, Scenarios 3 and 5).
- **P2 — Nutrition optimization** beyond what a recipe entry already states.
- **P2 — Retail integration**, e.g., importing purchases from a retailer account instead of a receipt photo Ren takes.
- **Deferred indefinitely — a social feed or community feature.** Not aligned with a single-household planning tool.

### Deliverable

An iPhone app. Built as a web app installable from Safari (Share → Add to Home Screen), live on GitHub Pages since 2026-10-01, with server-side pieces kept to two: the Cloudflare Worker that reads receipt and shelf photos, and the Supabase project that holds signed-in accounts and their saved data (live since 2026-11-20). The team ratified this as the v1 build approach on 2026-11-26 (open assumption #5); the plan is produced and shown in the app.

The information architecture, screen inventory, and visual identity tokens are documented in `deliverables/design-spec.md` (extracted from the living spec to keep this document focused on the agent's behavior and boundaries, not implementation detail). The design spec implements the voice and visual direction defined under "What good looks like" above and must not contradict any rule in this spec.

## Governance

### Ren's authority

Ren reviews every suggested plan before preparing any meal and can override, modify, or reject any meal. Ren does not manually approve each ingredient's freshness. Instead, the agent estimates a freshness window from the ingredient's purchase date (from a receipt upload or Ren's manual entry) and the shelf-life norms documented in `knowledge/shelf-life-norms.md`. An ingredient with no known purchase date is treated as unknown, never as assumed fresh. The agent's freshness estimate is a stated approximation, not a food-safety determination — it must always show its basis (purchase date + shelf-life assumption) so Ren can see and dispute it before cooking.

Ren approves, modifies, or rejects each meal suggestion. The agent records Ren's decision and what Ren actually prepared.

### Stop-work conditions

If the agent proposes a recipe from an unapproved source (i.e., not from `knowledge/Combined_Recipe_Database.md`), invents a purchase date or an expiry date, applies a freshness estimate to an ingredient with no known purchase date, hides the basis for a freshness estimate, states that Ren approved a plan without confirmation, silently double-allocates a scarce ingredient across meals, shows or changes one account's saved data for another person, or exposes the Supabase service key or the Anthropic API key, work stops until the team investigates.

### Accountability and review cadence

The team (not Ren alone) is accountable for the agent's output quality. Ren makes meal decisions; the team ensures the agent's recommendations are grounded in approved sources and accurate data. This spec is reviewed at the start of each working session and updated when understanding changes. A superseded version moves to `governance/history/` before this file is edited. Findings and resolutions from any stop-work investigation are logged in `governance/history/`.

**Build and Fix Log.** Every change made to the app in Claude or on GitHub — requests, errors found and fixed, commits and merges, and what is still open — is recorded in the team's Build and Fix Log: the Google Doc "What the Fridge: Build and Fix Log" in this folder (1 October 2026) and its continuation, the Claude doc "What the Fridge: Build and Fix Log (continued)" (from 8 October 2026, requests 20 onward).

### Checks applied

The team applies four checks before committing any version of this spec:

- **Evidence:** Ren confirmed spending ~20 minutes per planning session searching recipes and checking ingredients; estimates food waste at approximately $30–50/month from forgotten perishables. (Not measured: these figures were not tracked during the course and remain Ren's estimates, not validated data. Closed on 2026-11-26, open assumption #8.)
- **Use:** Ren committed to using the app for three consecutive planning cycles during the pilot to test whether it actually changes behavior.
- **Boundaries:** Team confirmed that a three-day plan covering breakfast, lunch, and dinner is the target scope for v1; since 2026-10-29 a household may plan a subset of those meals. The approved source supports this with 579 recipes across all three meal types (113 breakfast, 168 lunch, 298 dinner) — ample for a three-day rotation without repetition, including under dietary restrictions and weekday time limits.
- **Completion:** Done 2026-11-26 — the whole team re-read the spec, and an independent cold read was conducted. See below.

### Blindspot pass

Conducted 2026-09-17 by the team. Risks identified:

1. **Receipt in a non-English language.** The agent has no defined behavior for non-English receipts. Status: **decided 2026-11-26** — v1 supports English receipts only; others go through the same line-by-line review (open assumption #9).
2. **Double-allocation of a scarce ingredient.** If two or more meals in the same plan share a critical ingredient and the inventory has only enough for one, the agent must catch this at plan-generation time, not after Ren accepts. Status: addressed in spec ("Coordinate ingredient usage across all meals in the plan to prevent double-allocation").
3. **Inventory too limited for any feasible plan.** If Ren's inventory can't support a full three-day meal plan, the agent must say so plainly rather than stretching or inventing. Status: addressed ("state its feasibility plainly — zero purchases required, or a clear explanation of the shortfall if not").
4. **Blurry or partial receipt photo.** If the receipt photo is too blurry to read or partially cut off, the agent should flag the entire receipt as unreadable rather than silently guessing at items. Status: **decided 2026-11-26** — no separate flow: unreadable lines come back unmatched and every line is reviewed before saving (open assumption #10, blindspot 14).
5. **Ren forgets to log a cooked meal.** Inventory drifts from reality if Ren doesn't confirm what was cooked. Status: **decided** — no reminder is sent. The notification screen that once held a "Did you cook it?" toggle was removed on 2026-11-21; instead, a day that passes with an unmarked meal is asked about the next time the app opens, and nothing leaves the pantry until Ren answers (About says so). **Decided 2026-11-26:** no reminder in v1 (open assumption #11).
6. **Shelf-life norms vary by storage method.** The same ingredient (e.g., chicken) has very different shelf life fresh vs. frozen. The agent must account for the storage location Ren reports, not apply a single default. Status: addressed — `knowledge/shelf-life-norms.md` provides separate fridge/freezer/pantry norms per item, and the Pantry screen tracks storage zones.
7. **Breakfast recipe pool was thin.** Originally only 3 breakfast recipes. Status: resolved — the combined database carries 113 breakfast recipes (41 before the 2026-10-29 expansion), well beyond a three-day rotation.

Added 2026-09-18, after prototype8 and prototype9 made the app stateful:

8. **Dietary filtering could be mistaken for allergy safety.** Filtering matches recipe-level tags. A household could reasonably read "nut-free" as a guarantee when it is really a tag match over a small curated file, with no ingredient-level or label-level checking behind it. Status: **closed 2026-11-26** — the team ratified recipe-level filtering (open assumption #18). The app offers no allergy option and says on both the setup and Dietary screens that the filters are not allergy-safe.
9. **The midnight roll discards a day regardless of what happened on it.** If Ren never confirmed Monday's meals, Monday still disappears at midnight and its ingredients are never deducted — inventory silently drifts in the optimistic direction. Status: **addressed in prototype10** — the roll now queues any meal still `pending` and asks Ren what happened, deducting only on the answer. The roll itself never deducts and never assumes. What remains open is risk 5's other half: whether a nudge reaches Ren before the roll rather than after it.
10. **A restriction can shrink the compliant pool below three distinct meals.** With several restrictions on, the approved files may not hold enough compliant recipes to fill three days without repeating. Status: addressed for now — the agent repeats a compliant meal rather than leaving an empty slot, and flags the slot only when nothing compliant exists at all. Whether repetition is acceptable to the household is a question for the pilot.

Added 2026-10-29, after the web app gained AI receipt reading, scaling and the setup questionnaire:

11. **Receipt photos leave the device.** Reading a receipt with Claude sends the photo to Anthropic through the team's Worker. Status: addressed in the app — only a photo Ren chooses to scan is sent, nothing is stored by the app, and About, the receipt screen and the Pantry say so. Still open: the team's ratification (open assumption #24).
12. **The API key can leak.** On 2026-10-21 the key was first saved in Cloudflare as a readable variable and appeared in a screenshot. Status: **resolved** — the exposed key was deleted (confirmed 2026-10-29), a new key is stored as a Cloudflare secret, and the Console workspace has a monthly spend limit, so any future leak's cost is capped.
13. **A wrong serving estimate scales a recipe wrongly.** Amounts and deductions now follow `tools/servings.csv`, which is estimated, not stated. For example Turmeric Tofu Scramble was estimated at 1 serving, so a household of 2 was planned 2 blocks of tofu. Status: **reduced** — on 2026-10-29 all 579 estimates were re-checked against realistic portions (about 150–250 g meat or fish, 75–100 g dry pasta, 2–3 eggs per person) and each recipe's total calories; 173 changed (the tofu scramble now serves 2). Two calorie errors were fixed at the same time: lines naming two foods ("4 chicken thighs and 4 drumsticks") had been skipped, and canned lentils were counted at dry weight. Recipes with implausible calories per serving fell from 90 to 43, most of them genuinely light or rich dishes. The figures remain estimates (open assumption #25).
14. **Blurry, partial or non-English receipts.** (Updates risks 1 and 4.) Status: partly addressed — Claude reads what is printed and returns nothing it can't read; whatever it returns goes through the same line-by-line review, and an unreadable photo yields "no food items could be matched" rather than guesses. Untested on non-English receipts; v1 supports English receipts only (decided 2026-11-26).
15. **A pull request built on an old copy can undo merged work.** PR #15 (pantry search, merged 2026-10-29) was made from an `index.html` that predated PRs #11 and #13, so merging it removed the + menu, unhooked the Profile receipt link and reverted the receipt-photo privacy wording on the live site; it also left out its own markup, so a tab switch raised an error. Status: repaired on `meal-preferences` (pending merge). Process fix for the team: before approving a pull request, check the "Files changed" view for lines it *removes*, and pull the latest `main` into a branch before opening its pull request.

Added 2026-11-20, with the decision to add accounts:

16. **Saved data leaves the device.** Signed-in data (pantry, plan, preferences, dietary settings, cooking and waste logs) is stored by Supabase. Status: addressed and live (2026-11-20) — optional, Canada region, per-person security rules (confirmed on the live site: a signed-out visitor is refused), upload only with Ren's say-so, deletion in Settings › Account, and plain disclosure in About and on the Account screen. Dashboard access, deletion requests and the privacy wording were decided on 2026-11-26 (open assumption #28); the accounts feature itself still awaits the team's ratification.
17. **Two devices change the same kitchen at once.** The most recent save would overwrite the other device's pantry or plan changes. Status: designed — the latest save wins for pantry, plan and settings, and the cooking and waste logs are merged so no history is lost. Whether that is good enough is a question for the pilot.
18. **Sign-in can fail quietly on an iPhone.** A sign-in link opens Safari rather than the home-screen app, and Supabase's built-in email sends only a few emails an hour and can't be edited to carry a code. Status: addressed — a 6-digit code instead of a link, sent from the team's own Gmail sender (whatthefridge.teamren@gmail.com).
19. **Shelf photos read as more certain than they are.** A photo misses hidden and boxed food, can't show a purchase date, and the food matcher can pair a phrase with the wrong food (yeast with Bread in testing). Status: addressed — only sure, trusted matches start ticked, no date is guessed, and amounts are editable (Input 1, shelf photos). Since 2026-11-20 the matched food itself can be changed too (PR #44).

Added 2026-11-26, after the changes of 2026-11-20 to 2026-11-24:

20. **Rounding changes what a meal deducts.** Practical amounts (PR #51) round a scaled amount to something measurable, so a meal may check and deduct slightly more or less than the exact scaled estimate (one whole egg rather than 0.67). Status: addressed by design — the rounded amount is the one shown, checked and deducted, so the pantry matches what Ren was told; cooking and undoing all nine sample meals restored every quantity exactly. The servings behind the scaling remain estimates (open assumption #25).
21. **Hiding finished things could hide a mistake.** Cooked and skipped meals and used-up food are now hidden (PR #48). Status: addressed — hidden, not deleted: the day's "Show" line reopens finished meals with Undo, and used-up entries are kept so Undo restores their quantities.
22. **Earlier sample-kitchen users have no way out of it.** "Leave the sample kitchen" shows only when the setup choice was recorded, which started on 2026-11-21 (PR #47). Someone who chose the sample kitchen before then, with no account, has no control left to clear it (Start over was removed). Status: **closed 2026-11-26, no change** — found in the 2026-11-26 review. The team confirmed the sample kitchen before 2026-11-21 was used only in the team's own controlled testing, so no real user is affected.

### Cold read

**Conducted 2026-11-26.** The spec (v1.19) was given to a reader with no prior context — an AI reader (Claude, in a fresh session given only this file, with no access to the project, the app or the conversation that produced it) — and asked to explain, from the spec alone: (1) who Ren is and what Ren needs, (2) what the agent produces, (3) what the agent won't do, (4) how to tell if the agent is working correctly. The same day, every team member re-read the spec. The reader answered all four correctly, and said the Purpose, stories, Must never and Meal plan standard sections explain themselves well. It flagged 16 places that slowed an outsider down. Addressed in v1.19:

- Undefined terms ("Exercise 4", PR numbers, Worker, Supabase, row-level security, anon key, localStorage, ratification, NOTICE / UNDERSTAND / ACT, the two meanings of "Claude"): a "Reading this spec" section at the top.
- A changelog-heavy opening: the version notes moved to "Version history" at the end, and the spec now opens with what the app is.
- Hard to tell current from historical text: the reading notes say which sections are history; removed features are marked where they appear.
- Unclear where files live (Shared Drive vs repository): stated in the reading notes.
- The household data note still read as pending, and the evidence figures as an assumption to track: both updated.
- The Must never rule on grocery lists contradicted the app's "What to pick up" list: the team decided to keep the list and the rule now says what is and isn't allowed (open assumption #32).
- Open assumptions #22 and #23 out of order: fixed.

Left as they are: older figures inside the History sections (for example "300 images", "18 of 300"), which are true of the time they describe. A cold read by a person outside the team would still be worthwhile before any wider release.

### Open assumptions

| # | Assumption | Location in spec | Status | Resolve by |
|---|---|---|---|---|
| 1 | Inventory file format and location | Knowledge > Input 1 | **Resolved** — the inventory lives in the browser's storage on Ren's device; there is no inventory file. Since 2026-11-20 it is also saved to a signed-in Ren's account (#28) | — |
| 2 | Receipt intake format and misread-item flow | Knowledge > Input 1 | **Ratified 2026-11-26** — camera or camera-roll photo, read by Claude (on-phone fallback), every line reviewed, correctable and confirmed by Ren | — |
| 3 | Profile tab vs. fixed assumptions for v1 | Scope > Deliverable (design-spec) | **Ratified 2026-11-26** — the Settings tab (Preferences; Account & Support), as tidied 2026-11-22 (PR #50) | — |
| 4 | Streaks/stats view in scope or deferred | What good looks like > Voice and visual | **Ratified 2026-11-26** — one milestone, Food rescued, with the waste breakdown inside it (cooking ladder and stat tiles removed 2026-11-21) | — |
| 5 | Build approach (native vs. wrapped web app) | Scope > Deliverable | **Ratified 2026-11-26** — a home-screen web app on GitHub Pages (live since 2026-10-01), with a Cloudflare Worker for photos and Supabase for optional accounts | — |
| 6 | Recipe file as v1 seed; expansion criteria | Knowledge > Input 2 | **Expanded** to 579 on 2026-10-29 (duplicates of existing dishes not taken). **Criteria written down and approved 2026-11-26** (see "Any further expansion" under Input 2) | — |
| 7 | Receipt-reading confidence threshold | What good looks like > Receipt-reading standard | **Replaced** by reviewing every line before anything is added (2026-10-21) | — |
| 8 | Evidence figures (planning time, waste $) | Governance > Checks applied | **Closed 2026-11-26, not measured** — the planning-time and waste figures were not tracked during the course; they remain Ren's estimates, stated as such under Checks applied | — |
| 9 | Non-English receipt handling | Governance > Blindspot pass | **Decided 2026-11-26:** v1 supports English receipts only. A receipt in another language goes through the same line-by-line review, so nothing is added without Ren checking it | — |
| 10 | Blurry/partial receipt failure flow | Governance > Blindspot pass | **Decided 2026-11-26:** no separate flow in v1. Lines Claude can't read come back unmatched, an unreadable photo yields "no food items could be matched", and every line is reviewed before saving | — |
| 11 | Cooked-meal reminder mechanism | Governance > Blindspot pass | **Decided 2026-11-26:** no reminders in v1. Unmarked meals are asked about the next time the app opens, and nothing leaves the pantry until Ren answers. Push reminders are a later idea | — |
| 12 | Breakfast recipe expansion timeline | Knowledge > Input 2 | Resolved — expanded file created | — |
| 13 | Onboarding flow design | Scope > Deferred (P1) | **Ratified 2026-11-26** — the five-step setup questionnaire (built 2026-10-29) | — |
| 14 | Shelf-life norms accuracy for edge-case items | Knowledge > shelf-life-norms.md | **Accepted for v1 2026-11-26** — the 248-row file was adopted 2026-11-20; 188 of 639 foods (mostly sauces, specialty flours and grains, frozen snacks) still have no norm and show "no estimate". **Accepted for v1 on 2026-11-26:** saying "no estimate" follows the rule never to guess; coverage is reviewed during the pilot | During pilot |
| 15 | Recipe preferences (like / not-for-us / favourite) in scope; source boundary extended to cover a preference store | What good looks like > Recipe preferences | **Ratified 2026-11-26** — preferences only filter or reorder approved recipes, and a dislike can be undone; the source boundary now names them | — |
| 16 | Unapproved recipe in prototype sample data ("Avocado & Black Bean Wrap") | What good looks like > Current prototype | **Resolved in prototype8** — replaced with Quick Black Bean & Rice Burrito Bowl; all 18 catalogued recipes trace to an approved file | — |
| 17 | Nutrition data has no approved source — the recipe files carry none, so the figures shown are estimates | What good looks like > Current app | **Ratified 2026-11-26 as labelled estimates** — computed for all 579 recipes from typical food values (`tools/nutrition.csv`) and always shown as an estimate | — |
| 18 | Dietary filtering in scope for v1; and whether recipe-level tags are a defensible basis for it | What good looks like > Dietary restrictions | **Ratified 2026-11-26** — recipe-level filtering, with the app stating on the setup and Dietary screens that it is not allergy-safe | — |
| 19 | Household size, dietary settings and (since 2026-10-29) meal choices, leftovers and weekday cook times are agent inputs the source boundary does not yet authorize | Knowledge > Source boundary | **Ratified 2026-11-26** — named inside the source boundary as Ren's own settings, which only filter, order or scale approved recipes | — |
| 20 | Rolling three-day horizon replaces a fixed plan; behaviour of the midnight roll on a partly-cooked day | Scope > Version 1 (P0) does | **Resolved, ratified 2026-11-26** — unconfirmed meals are carried forward as a question (prototype10); since PR #39 each new day opens with a summary of yesterday, answers are settled first, and the plan is fitted around them | — |
| 21 | The prototype models 18 of 300 recipes, because pantry-ingredient mapping is hand-authored | What good looks like > Current app | **Resolved** — the mapping is generated from the database by the build; all 579 recipes take part | — |
| 22 | Recipe times now range beyond 30 minutes; the agent must respect the stated time when a meal has to be quick | Knowledge > Input 2 | **Ratified 2026-11-26** — weekday limits per meal from the household's answers (defaults: breakfast 20, lunch 30 minutes); weekends unlimited | — |
| 23 | Four catalogued recipes mark an ingredient optional that the database treats as required | What good looks like > Current app (defect 4) | **Resolved in the database's favour** — recipes are read from the database, so those ingredients are required | — |
| 24 | Receipt photos are sent to Claude (Anthropic) through the team's Cloudflare Worker to be read | Knowledge > Input 1 | **Ratified 2026-11-26** — receipt photos Ren chooses to send are read by Claude through the Worker and not stored by the app; disclosed in the app; monthly spend limit in place | — |
| 25 | Estimated servings per recipe (`tools/servings.csv`) drive both the nutrition figures and the scaling of recipe amounts | Knowledge > Input 2 | **Ratified 2026-11-26 as labelled estimates** — all 579 re-checked on 2026-10-29 (173 changed; see blindspot 13); scaled amounts rounded to practical measures since PR #51 | — |
| 26 | The Shared Drive copy of `knowledge/Combined_Recipe_Database.md` was the earlier 300-recipe version; the 579-recipe repository copy is the one the app is built from | Knowledge reference, item 1 | **Resolved 2026-10-29** — the Shared Drive copy was moved to `knowledge/superseded/`, leaving the repository copy as the single approved source | — |
| 27 | AI-generated recipes or a web recipe API | Scope > Deferred (P1) | **Decided 2026-11-26:** deferred beyond v1. v1 uses only the approved recipe file; any new recipe source needs Input 2 amended first | — |
| 28 | Accounts and saved data through Supabase (email code, Canada region, per-person security rules) | Knowledge > Accounts and saved data | **Decided, built and live 2026-11-20** (branch `feat/accounts`, merged). Project created and set up by the team; tested on the live site (code email, sign-in, saving, a second device and syncing all worked). Sign-in codes sent from whatthefridge.teamren@gmail.com (created 2026-11-20). **Settled 2026-11-26:** the repository owner holds the Supabase dashboard and the Gmail login and answers emailed deletion requests; the privacy wording was corrected and ratified by the team (see "Who holds what"). Accounts ratified as a v1 feature on 2026-11-26 | — |
| 29 | Shelf photos are sent to Claude (Anthropic) through the team's Worker to be read, under the rules agreed on 2026-11-12 | Knowledge > Input 1 (shelf photos) | **Agreed 2026-11-12, built** (PRs #32, #34), **ratified 2026-11-26**. Tested on a real pantry photo; time saved on setup not measured | — |
| 30 | Routing family members the planner can't use today (`tools/family-review.csv`: 12 by counts_as, 43 by an approved stand-in, 22 none) | Knowledge reference, item 13 | **Decided 2026-11-26: left out of v1.** Families stay grouping-only; the routing proposal stays a draft for a later version (it would also need `substitutions.csv` rule 1 relaxed for pantry-only foods) | — |
| 31 | Guided pairing, hiding finished meals and used-up food, and practical (rounded) amounts | Current app | **Built 2026-11-22 (PRs #48, #49, #51), ratified 2026-11-26.** All three work only within the approved recipes and Ren's own entries; none adds a data source | — |
| 32 | The "What to pick up" list (PR #39, 2026-11-20) shows what the plan is short of, against a Must never that said "Generate a grocery list" | What good looks like > Must never; Scope > Version 1 does not | **Decided 2026-11-26: kept.** Found by the cold read. The rule now forbids sending a list or ordering, and allows showing Ren, in the app, what the plan is short of | — |
| 33 | The stand-in table (`tools/substitutions.csv`, 78 rows) has been used by the app since 2026-11-19, but its rows are still the draft | Knowledge reference, item 14; Scope > Deferred (Controlled substitutions) | **Reviewed and closed 2026-11-26.** Found while bringing the spec up to date. At the team's request Claude checked all 78 rows for food sense and diet effects, and the team accepted the review. One note was corrected (Dijon to yellow mustard: milder, not sharper). Measured in the app: the two rows that remove a dietary property (tofu to paneer, tahini to peanut butter) are never offered to a dairy-free or nut-free household, and the 10 meat stand-ins are never offered to a vegetarian one. Any new or changed row needs the same review | — |

### Version history

Superseded versions are kept in `governance/history/` (v1.0 to v1.18).

- **v1.19 (2026-11-26)** — The team's decisions of 26 Nov. Accounts: the repository owner holds the Supabase dashboard and the Gmail login and answers emailed deletion requests, and the corrected privacy wording is ratified. Open items: thirteen ratified; #9 and #10 (English receipts only), #11 (no reminders), #14 ("no estimate" accepted) and #27 (AI recipes deferred) decided; #30 family routing left out of v1; #32 "What to pick up" kept; #6 expansion criteria written; #8 closed as not measured; blindspot 22 closed. Cold read conducted, and its findings addressed (the reading notes at the top, this history, the household data note, the grocery-list rule). Also describes PRs #39, #40 and #56 (survey feedback, Settings, start with tomorrow), adds knowledge item 14 (stand-ins), and records #33: the stand-in rows reviewed and the review accepted.
- **v1.18 (2026-11-26)** — Brought the spec up to the live app as of 2026-11-24 (PRs #43–#53): correcting scanned items, a larger food list and more freshness estimates, the release cleanup, hiding finished meals, guided pairing, ingredient families and practical amounts.
- **v1.17 (2026-11-20)** — Adopted the 248-row shelf-life norms file.
- **v1.16 (2026-11-20)** — Accounts marked live and tested.
- **v1.15 (2026-11-20)** — Recorded the team's sign-in email sender.
- **v1.14 (2026-11-20)** — Added accounts and saved data (Supabase), and the shelf-photo rules agreed on 2026-11-12.
- **v1.0 to v1.13 (2026-09-17 to 2026-10-29)** — From the first spec to the live app with all 579 recipes; each is in `governance/history/`.

---

*Folder structure beside this spec: `knowledge/` (primary material, including `knowledge/skills/` — the agent capabilities, seven written as of 2026-09-19), `deliverables/` (prototypes and design spec), `governance/history/` (superseded spec versions). The app itself — code, the 579-recipe database, photos, the build tools and the receipt and shelf-photo Worker — is in the GitHub repository `jennamarie82/What-The-Fridge`. The Supabase database setup (table and security rules) is kept there too, in `supabase/`; the Supabase project itself is in the team's Supabase account.*
