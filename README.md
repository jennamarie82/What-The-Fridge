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
| `index.html` | The whole app: one self-contained page |
| `recipe-images/` | One photo per approved recipe |
| `manifest.webmanifest`, `icons/` | Home-screen install |
| `sw.js` | Offline support: caches the app and any photos already viewed |

## Updating the site

Edit `index.html`, commit, and push. GitHub Pages republishes in about a minute. After a large
change, bump `VERSION` in `sw.js` so installed copies drop their old cache.
