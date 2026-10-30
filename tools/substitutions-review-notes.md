# Substitutions table — notes for review

**Status: draft. Not wired into the app, not approved.** `tools/substitutions.csv` holds 73 rows;
this file says how they were chosen, what was deliberately left out, and the four things the team
has to decide before any of it ships.

## Why a table and not a prompt

The Worker that reads receipts could just as easily be asked "what works instead of berries?", and
it would answer well most of the time. The reason not to do that is in the spec: the agent
*"does not invent a substitution or a variant the recipe file doesn't already offer,"* and under
what it cannot do, *"invent a substitution, variant, or recipe not in the approved file."*

A table keeps the existing property that every suggestion traces to something a reviewer approved —
the same guarantee that makes the 579 recipes defensible. It also means a wrong suggestion is a
wrong row somebody can fix, not an output nobody can reproduce.

This is already on the roadmap as a deferred P1: *"Controlled substitutions. The agent proposing a
specific ingredient swap to rescue an otherwise-infeasible meal, with the swap and its effect shown
explicitly."* The phrase **"and its effect shown explicitly"** is what the `diet` column and the
`note` column are for.

Claude still earns its keep here — drafting candidate rows across 579 recipes is exactly the kind of
work it is good at. It just happens before review rather than at dinner time.

## How rows were chosen

- **Only swaps a competent cook would accept without hesitation**, in the contexts named. Nothing
  speculative, nothing clever.
- **Context-scoped, never global.** Banana for berries is right on honey toast and wrong in a
  vinaigrette. `contexts` is what stops that, so it is never blank and never `*`.
- **Nothing where the ingredient is doing structural work.** No substitutions for flour, eggs,
  baking powder or baking soda, and butter is restricted to cooking contexts. Baking is chemistry;
  a plausible-sounding swap there produces something inedible rather than something different.
- **Nothing where the ingredient is the point of the dish.** No stand-in for sesame oil, miso,
  gochujang, mushrooms or smoked paprika. If you replace those you have cooked a different meal,
  and the recipe's name stops being true.
- **Direction matters, so rows are not automatically reciprocal.** Only 14 of the pairs go both
  ways. Kale for spinach needs "give it longer"; spinach for kale needs "add it at the end". Same
  pair, different advice.

## The nut-free trap

This is the one that could actually hurt somebody, and it is why the `diet` column exists.

Dietary tags are derived from a recipe's required ingredients. Substitute an ingredient and the tag
line no longer describes what Ren would actually cook. The dangerous direction is a swap that
**removes** a property the household has set:

| row | effect |
|---|---|
| `tahini → peanut-butter` | a sesame dressing is often nut-free; with peanut butter it is **not** |
| `tofu → paneer` | a dairy-free curry stops being dairy-free |

The spec already concedes the filter *"is not allergy-safe, and the app must not imply that it is."*
A substitution the app offered would make it worse than limited — it would be actively misleading,
because Ren would reasonably read a suggestion from the app as compatible with the restriction she
set.

**So RULE 3 in the CSV is the one that matters: a row whose `diet` starts with `-` must never be
offered to a household with that restriction.** Those rows exist so the app can recognise and
suppress them. If the team would rather not carry that risk at all, delete the two rows — the table
works fine without them.

The `+` rows run the other way and are safe: they let a dairy-free household cook something that
would otherwise be excluded.

## What the numbers say

- **73 rows**, covering **66 ingredients**, all ids validated against `ingredients.csv`.
- **64 rows can actually fire.** The other nine are in the STAPLES block — their `for` is marked
  `staple=1`, so the app never reports it missing and the row can never trigger as a rescue.
- **555 of 579 recipes** contain at least one ingredient with a live stand-in. That is the ceiling
  on reach, not a prediction: a row only fires when the recipe is in a matching context, the
  ingredient is genuinely missing, and the replacement is genuinely in the pantry.

## Four decisions for the team

**1. Nothing maps recipes to contexts yet — this blocks everything.**
The table is context-scoped, but no recipe carries a context today. Without that mapping the file
cannot be applied at all. Options: add a `contexts` column to the recipe build and derive it from
title and method keywords (cheap, roughly right, needs spot-checking); or hand-tag 579 recipes
(accurate, slow). A middle path: derive it, then review only the rows where a substitution would
actually fire. **This is the real work; the table itself was the easy half.**

**2. Does this belong in v1 at all, or stay P1?**
It is currently forbidden by the knowledge boundary, so shipping it needs that text changed, not
just a feature merged. Same pattern as dietary filtering and preferences — the decision should be
made deliberately rather than arrive with a PR.

**3. Keep or drop the nine staple rows?**
They cannot rescue a missing ingredient. Two of them (`butter → olive-oil`, `butter → vegetable-oil`)
have a second use for dairy-free households. Keep for that, or drop them as dead weight.

**4. How many swaps per meal?**
The CSV proposes one. Two stand-ins in one dish stops being the recipe, and the further it drifts
the less the stated prep time and dietary tags mean.

## If it ships, the build should enforce

The same way `build-recipes.ps1` already throws on a bad `counts_as`:

1. `for` and `use` both resolve to recipe-matchable ids (`pantry_only != 1`).
2. `contexts` non-empty, every value in the vocabulary.
3. `diet` tokens are `+`/`-` followed by `V`, `DF`, `NF` or `PF`.
4. No duplicate `for,use` pair.
5. `for != use`.

A validator covering all five was run against this draft and every row passes.

## What Ren should see

Not "we substituted banana." The swap is Ren's to accept, so it should read as an option with its
cost attached — the ingredient, the stand-in, and what changes:

> **Missing: berries.** You have bananas — the approved list offers them here.
> *Slice thin. Sweeter than berries, so go easy on the honey.*

And where a tag changes, it says so in the same breath, or it is not offered at all.
