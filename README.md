# What the Fridge (WTF)

A three-day breakfast, lunch and dinner planner built around what's already in the fridge.
BUS 860 *Managing Intelligence* · Group 3.

**Try it:** open the GitHub Pages link for this repository. On an iPhone, open it in Safari and choose
**Share → Add to Home Screen** to install it like an app.

## What it does

- A short first-time questionnaire: name, household size and dietary filters; which meals to plan
  (any of breakfast, lunch and dinner); whether you eat leftovers; and how long each meal can take on
  a weekday. Then either an empty kitchen to fill or a sample kitchen to look around. All of it can
  be changed later under **Profile → Meals & cooking** (and Household size, Dietary preferences).
- Add, edit and remove food in the fridge, freezer and cupboard. You pick from the ingredients the
  approved recipes use, so typing "scallions" finds Green onions. Quantity is optional, and the
  purchase date is always your answer, including "don't know".
- Estimates freshness from the purchase date (or a printed use-by date you enter) and the shelf-life
  norms for where the food is kept, and always shows the basis. Food with no date, or no matching
  norm, stays "unknown" and is never assumed fresh.
- Plans today plus the next two days (the meals you chose) from the approved recipes, around what's
  actually in your kitchen. It fills one meal at a time, setting aside what each uses, so a scarce
  ingredient is never promised to two meals. Monday to Friday, each meal stays within your cook-time
  limit (by default breakfast 20 minutes or less and lunch 30 or less); a slower one is used only when
  nothing quick enough fits. It prefers meals with nothing missing, then food closest to the end of
  its window, then (on weekends) breakfasts of 20 minutes or less, then your favourites. Dietary
  restrictions and "not for us" are hard filters.
- If you eat leftovers, each dinner is made for the household twice over and the next day's lunch is
  its leftovers: nothing to cook, and nothing more taken from the pantry. Swapping or skipping the
  dinner carries the lunch along; **Cook something else** gives that lunch a meal of its own.
- Says plainly when the kitchen can't cover the plan: what's missing, which meal runs short because
  an earlier one uses the same food, and what will have turned before its meal. Where an amount isn't
  recorded in a comparable unit, it asks you to check rather than guessing. **Re-plan** replaces only
  the meals that no longer work.
- Amounts are scaled to your household from each recipe's estimated servings (`tools/servings.csv`;
  the recipe file doesn't state servings). The meal screen shows the recipe's own wording with the
  scaled amount beside it, and the scaled amount is what the kitchen check and **Accept** use.
- Each meal shows its ingredients in the recipe's own words next to what you have, then the
  numbered steps, then estimated nutrition per serving (calories, protein, carbs, fat, fibre,
  sodium). The recipe file states neither servings nor nutrition, so both are estimates and are
  labelled as such (see Recipe data).
- Swap, skip or mark a meal cooked. Ingredients are deducted only when you confirm a meal was cooked
  (converting grams, ounces, cups and spoons where that's plain arithmetic), and Undo puts back
  exactly what was taken.
- Profile counts real activity only: meals cooked, your cooking streak, and ingredients used before
  their window closed.

## Your data

Everything is saved in your own browser (`localStorage`). Nothing is sent to a server, and each
person or device has its own copy. **Profile → Start over** clears it; **Load the sample kitchen**
swaps in the demo food.

The one exception is a receipt photo someone chooses to scan. It goes to the team's Cloudflare
Worker (`worker/receipt-reader.js`), which asks Claude to read it and returns the items for review;
nothing is stored. The Anthropic API key is a Cloudflare secret, never in this repository. The
Worker only answers this site, and the Claude Console workspace's monthly spend limit caps the
cost. If the Worker can't be reached, the app reads the receipt on the phone instead (Tesseract.js).
To update the Worker, paste the file into the Worker's code editor in Cloudflare and click Deploy.

Dietary filtering works on recipe-level tags. It is **not** allergy-safe.

## Files

| Path | What it is |
|---|---|
| `index.html` | The page structure: screens, tabs and buttons |
| `styles.css` | The look: colours, spacing, cards |
| `app.js` | The behaviour: planning, pantry, freshness, saving |
| `recipes.js` | **Generated** recipe data for all 300 recipes, so don't edit it by hand (see below) |
| `recipe-images/` | One photo per approved recipe |
| `manifest.webmanifest`, `icons/` | Home-screen install |
| `sw.js` | Offline support: caches the app and any photos already viewed |
| `tools/` | The recipe build: ingredient list, shelf-life norms, build script, review sheet |

## Recipe data

`recipes.js` is built from the team's approved recipe database (`knowledge/Combined_Recipe_Database.md`
on the Shared Drive), which isn't stored in this repository. To change how an ingredient is recognised,
edit `tools/ingredients.csv` (or `tools/shelf-life.csv` for freshness windows), then rebuild:

```
powershell -ExecutionPolicy Bypass -File tools\build-recipes.ps1
```

Rows at the end of `tools/ingredients.csv` marked `pantry_only` (frozen fruit and vegetables, pasta
shapes, squash varieties and other everyday foods) can be added to the pantry and recognised on
receipts, but are never matched against recipe lines, so adding one can't change a recipe. Their
`counts_as` column names the recipe food a variety stands in for: penne counts as Dry pasta, frozen
strawberries as Strawberries. A pantry-only food with no `counts_as` is shown as "not in recipes yet".

The build also writes `tools/ingredient-review.csv`, which lists every recipe ingredient line next to
the food it was linked to, with blank `looks_right` and `comment` columns for checking.

Nutrition is estimated in the same build. `tools/nutrition.csv` holds typical values per 100 g for
each food and the weight of a cup, an item, a can and so on; `tools/servings.csv` holds an estimated
serving count for each recipe. The build turns every ingredient line into grams, adds them up and
divides by the servings, and writes `tools/nutrition-review.csv` with each line's grams and calories
so the team can spot a line that was counted wrongly.

## Updating the site

Make changes on a branch, open a pull request, and merge once a teammate approves. GitHub Pages
republishes about a minute after the merge. Code and data are fetched fresh on each open, so installed
copies pick up changes on their own.

For a release people need to see, change `APP_VERSION` at the top of `app.js` and the `?v=` number on
the three files in `index.html`. The version shows under **Profile → About** and in the page footer,
so anyone can check which build their phone is running.
