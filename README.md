# What the Fridge (WTF)

A three-day breakfast, lunch and dinner planner built around what's already in the fridge.
BUS 860 *Managing Intelligence* · Group 3.

**Try it:** open the GitHub Pages link for this repository. On an iPhone, open it in Safari and choose
**Share → Add to Home Screen** to install it like an app.

## What it does

- A short first-time setup (name, household size, dietary filters), then either an empty kitchen
  to fill or a sample kitchen to look around.
- Add, edit and remove food in the fridge, freezer and cupboard. You pick from the ingredients the
  approved recipes use, so typing "scallions" finds Green onions. Quantity is optional, and the
  purchase date is always your answer, including "don't know".
- Estimates freshness from the purchase date (or a printed use-by date you enter) and the shelf-life
  norms for where the food is kept, and always shows the basis. Food with no date, or no matching
  norm, stays "unknown" and is never assumed fresh.
- Plans today plus the next two days (breakfast, lunch and dinner). This build still plans from the
  18 recipes modelled in the prototype; planning from all 300 is the next step.
- Checks across all nine meals so a scarce ingredient isn't promised to two of them. Where an amount
  isn't recorded it asks you to check, rather than guessing.
- Swap, skip or mark a meal cooked. Ingredients are deducted only when you confirm a meal was cooked,
  and Undo puts back exactly what was taken.
- Profile counts real activity only: meals cooked, your cooking streak, and ingredients used before
  their window closed.

## Your data

Everything is saved in your own browser (`localStorage`). Nothing is sent to a server, and each
person or device has its own copy. **Profile → Start over** clears it; **Load the sample kitchen**
swaps in the demo food.

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

The build also writes `tools/ingredient-review.csv`, which lists every recipe ingredient line next to
the food it was linked to, with blank `looks_right` and `comment` columns for checking.

## Updating the site

Make changes on a branch, open a pull request, and merge once a teammate approves. GitHub Pages
republishes about a minute after the merge. Code and data are fetched fresh on each open, so installed
copies pick up changes on their own.
