# What the Fridge (WTF)

A three-day breakfast, lunch and dinner planner built around what's already in the fridge.
BUS 860 *Managing Intelligence* · Group 3.

**Try it:** open the GitHub Pages link for this repository. On an iPhone, open it in Safari and choose
**Share → Add to Home Screen** to install it like an app.

## What it does

- Plans today plus the next two days (breakfast, lunch and dinner) from 300 approved recipes
  (18 of them are modelled with pantry quantities in this build).
- Shows a freshness estimate for every dated ingredient, along with the purchase date and shelf-life
  basis it's based on. Undated items stay "unknown" and are never assumed fresh.
- Checks across all nine meals so a scarce ingredient isn't promised to two of them.
- Swap, skip or mark a meal cooked. Ingredients are deducted only when you confirm a meal was cooked.
- Household size, dietary filters, and like / not-for-us / favourite ratings.

## Your data

Everything is saved in your own browser (`localStorage`). Nothing is sent to a server, and each
person or device has its own copy. **Profile → Reset to sample data** starts over.

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
