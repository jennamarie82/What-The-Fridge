---
name: review
description: Review the latest commit (or a named range) of What the Fridge for bugs, spec violations and dead mechanics, verifying against the running app rather than by reading. Use after committing, before opening a PR.
---

# Reviewing What the Fridge

Review the working tree's most recent commit by default. If the user names a range
(`/review HEAD~3..HEAD`) or a branch, review that instead.

## The one rule that matters

**Measure it. Do not conclude it from reading.**

Every serious miss in this codebase so far was a confident conclusion that measurement
would have overturned in a minute:

- 22 images were called stale and deleted; three prototypes referenced them.
- A cache-version warning was issued twice; `sw.js` is network-first and already handled it.
- A "pace" comparison used elapsed days between milestones whose spacing doubles, so it
  called a genuine speed-up a slow-down and reported nothing.
- "No approved recipe uses ground beef" was reported for an ingredient used by **20** recipes.

So: serve the app, drive it, and print the numbers before saying anything is true.

```bash
cd <repo> && python -m http.server 8765 --bind 127.0.0.1
```

Then use the browser tools against `http://localhost:8765/`. Call functions directly —
`coverage()`, `scoreRecipe()`, `freshness()`, `planAround()`, `wasteStats()` — with
constructed pantries and plans. `finishSetup('sample')` gives a populated kitchen.

Two traps when testing:

- The page loads `app.js?v=...` and `styles.css?v=...`, which the browser caches. Editing a
  file does **not** change what the page is running. Re-evaluate the fresh source:
  `const s = await fetch('app.js?fresh='+Date.now()).then(r=>r.text()); (0,eval)(s);`
  and inject fresh CSS as a `<style>` element.
- Screenshots can race a render. When a screenshot disagrees with the DOM, trust the DOM —
  query it and check.

## What to look for, in priority order

### 1. The spec's stop-work conditions

These are in `CLAUDE.md` and they are not style preferences. Work stops if the app:

- **invents a quantity, purchase date or expiry.** A missing value stays missing. Receipts
  with no printed date pass `null`, not today. Grep any new `todayKey()` fallback on a date
  that came from outside.
- **uses an unapproved recipe source.** Recipes come from `knowledge/Combined_Recipe_Database.md`
  and nowhere else — not a web search, not the model's memory, not an invented variant.
- **says a plan was approved when Ren has not confirmed it.**
- **states or implies it checked an ingredient's condition.**

### 2. Priority, never condition

The app may say *which food to use first* — that is arithmetic on dates Ren supplied. It may
never say food **is** good, fresh, spoiled, off, or that it **will** go bad on a date.

"Before it goes bad" is the same claim as "still good", just future-tense, and it is the more
expensive error: confusion over date labels is the single largest driver of edible food being
thrown out. Flag any new copy that states or implies a condition.

### 3. Logging a loss must never cost anything

The waste log only fills if Ren keeps recording bad news. Anything that makes honesty expensive
destroys the data it collects. Reject:

- a streak, badge, ladder or progress bar driven by waste
- waste reducing `rescued` or breaking the cooking count
- advice that blames Ren for losses where `wasPlanned === false` — those are the planner's miss

Waste belongs in the ledger line and the "Where food is going" page, as information.

### 4. Dead mechanics that read as working features

Two shipped and neither did anything:

- a variety tie-break worth 4 points where the nearest rival was 7–56 points away, so it never
  once changed a pick;
- a consecutive-day streak with rungs at 7/14/30/60/180, where a household cooking six days a
  week can never pass 6.

For any scoring, threshold or tie-break touched by the commit: **compute the range of the inputs
and show the mechanism can actually fire.** A comment saying what a line intends is not evidence.

### 5. Data semantics

- `any` vs `all` on a recipe line: `any` is alternatives, `all` is every one required.
  `coverage()` takes the best across `any` and the **worst** across `all`.
- `counts_as` in `tools/ingredients.csv` is a pantry item standing in for a recipe food.
- `tools/substitutions.csv` is **approved data that nothing reads**. If a commit starts reading
  it, that is a spec change, not a feature — say so.
- `wasPlanned`, `daysPast`, `reason` on a waste entry: `null` is a real value and must survive.

### 6. "No recipe uses X" and friends

Distinguish failures that look identical to a user:

- nothing in the database uses it
- recipes exist but the kitchen is short
- recipes exist and are already on the plan
- recipes exist but the dietary or time settings exclude them

Collapsing these into one message is how "20 recipes use ground beef" became "no approved
recipe uses ground beef".

### 7. Layout and text

Check new copy at **375px**, not at desktop width. The toast ran 644px wide inside a 351px
phone for weeks. Measure `getBoundingClientRect()` against the frame rather than eyeballing.

### 8. Ordinary correctness

Null and empty states, off-by-one, state that persists through `saveState`/`loadState` and is
cleared by `startOver()`, and anything a day roll touches.

## What to do with findings

**Fix** clear defects — a wrong comparison, a missing null guard, text that overflows.

**Report, do not fix**, anything that changes agreed behaviour: scope, wording the spec governs,
thresholds, or anything touching the stop-work list. Those are the team's call.

Report each finding as: what is wrong, the measurement that shows it, and the consequence for
Ren. No severity theatre, no padding. **"Nothing found" is a valid and useful result** — say it
plainly rather than manufacturing concerns.

Finally: if a commit changes `styles.css` or `app.js`, note that `APP_VERSION` and the `?v=`
stamps in `index.html` are hand-maintained release labels. They are cosmetic — `sw.js` is
network-first and `fresh()` revalidates — so mention them once, as a release step, not a blocker.
