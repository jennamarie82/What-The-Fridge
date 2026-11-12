# Role and Industry — What the Fridge

Source: CLAUDE.md (Version 1.9, Team Group 3), Group 3 User Story doc, Meal Planning Agent Blueprint
Last updated: 2026-09-18

## Purpose statement

What should we eat over the next three days, using what we already bought, without another grocery trip?

Ren keeps the household fed and the kitchen running — choosing what to cook each day, stretching what's already in the fridge, and keeping grocery runs to a minimum. This matters because when meal decisions pile up or food goes to waste, it costs the household time, money, and daily peace of mind.

What the Fridge turns the "what are we eating?" question into a quick, informed choice grounded in what's actually on hand — for breakfast, lunch, and dinner. The agent does not decide for Ren; it handles the recipe-search and ingredient-matching work so Ren can focus on the judgment calls.

## AI leverage

Per the Meal Planning Agent Blueprint's leverage framework:

- **Primary — Acceleration.** Compresses recipe search and ingredient cross-referencing from roughly 20 minutes per planning session to under 5.
- **Secondary — Augmentation.** Surfaces freshness estimates and cross-meal ingredient coordination Ren would not reliably calculate unaided.

Not Automation: Ren still decides and still cooks. Not Amplification: this serves one household, not a scaled operation.

## Role: Ren, the meal planner

**Domain:** Household grocery and meal management (domestic, not a commercial food-service setting)

| Responsibility area | Recurring task | Input | Output | Frequency | User of output |
|---|---|---|---|---|---|
| Inventory tracking | Log what's in the kitchen | Receipt photos, manual counts | Current ingredient list with dates | After each grocery trip + weekly spot-check | Ren (for planning) |
| Meal planning | Plan three days of breakfast, lunch, and dinner | Inventory, recipe files, household preferences | Three-day meal plan (B/L/D) with feasibility notes | Every 3 days | Ren + household |
| Freshness management | Check what needs using soon | Purchase dates, shelf-life norms | Priority list of expiring items | Continuous (surfaced at planning time) | Ren |
| Grocery decision | Decide whether a shopping trip is needed | Plan gaps, pantry state | Go / no-go decision + shortfall list | After each plan | Ren |
| Cooking execution | Prepare the meal, confirm what was made | Approved plan, recipe instructions | Cooked-log entry, inventory deduction | Daily | Ren |

## Division of labor

The agent supports inventory tracking, meal planning, and freshness management. Grocery decisions and cooking execution stay fully with Ren — the agent may inform them, but Ren owns them.

| | Ren (human) owns | Agent owns |
|---|---|---|
| Inventory | Enters the initial inventory; photographs and uploads a receipt after each shopping trip; confirms low-confidence reads | Reads manual entries and receipt uploads; extracts items and purchase dates; holds flagged items out of inventory until confirmed |
| Freshness | Reviews and can override any freshness estimate before cooking; remains responsible for the outcome | Estimates a freshness window from purchase date and the norms in `shelf-life-norms.md`, accounting for storage zone; treats any undated item as unknown, never assumed fresh; always shows the estimate's basis |
| Meal planning | Reviews suggested meals for practicality and household appetite | Generates a three-day breakfast/lunch/dinner plan from `Combined_Recipe_Database.md`, with ingredients used, ingredients missing, and prep time per meal; coordinates ingredients across meals so a scarce item is never allocated twice |
| Approval | Accepts, modifies, or rejects each suggested meal; records what was actually cooked | Records Ren's decision; deducts inventory only after Ren confirms a meal was cooked — never on a schedule, and never for a meal that was swapped or skipped |
| Household settings | Sets household size and any dietary restrictions | Scales every recipe to the household size; applies dietary restrictions as a hard filter on which approved recipes may be suggested. Does not treat tag-level filtering as allergy safety |
| Shopping | Executes any grocery purchase | Does not generate a grocery list, place an order, or access any grocery account or retailer |

**Boundary rule:** If the agent proposes a recipe from an unapproved source, invents a quantity or purchase/expiry date, applies a freshness estimate to an ingredient with no known purchase date, hides the basis for a freshness estimate, silently double-allocates a scarce ingredient across meals, or states that Ren approved a plan without confirmation, work stops until the team investigates.
