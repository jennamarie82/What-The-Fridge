# User Stories — What the Fridge

Source: CLAUDE.md (Version 1.9, Team Group 3)
Last updated: 2026-09-18

Version 1.6 rewrote these stories in situated form — each one names a specific moment, a concrete inventory, and the decision Ren is actually trying to make. Scope also widened from dinner-only to breakfast, lunch, and dinner.

## NOTICE — Spot what's about to turn

As Ren, opening the fridge on Sunday evening with chicken thighs bought Thursday, half a bag of spinach from last week, and a dozen eggs picked up yesterday, I want the agent to flag which items need using in the next three days and which are still fine, so I can plan meals around what's about to expire rather than forgetting it in the back of the fridge.

## UNDERSTAND — See a feasible three-day plan

As Ren, choosing meals for Monday through Wednesday with a limited inventory and no time for a grocery run, I want a three-day plan covering breakfast, lunch, and dinner that tells me which on-hand ingredients each meal uses, what's missing, and how long each takes to prepare, so I can pick feasible meals for the whole day without spending twenty minutes cross-referencing recipes myself.

## ACT — Adjust and confirm as the week unfolds

As Ren, looking at a suggested Wednesday lunch that uses an ingredient I already used for Monday's dinner, I want to swap just that meal for a different option without losing the rest of the plan, and then confirm what I actually prepared so the inventory stays accurate as the week unfolds.

---

## What changed from the earlier version

The v1.0–v1.5 stories were written in generic form ("As the person responsible for meal planning, I want..."). They were correct but abstract — they didn't test whether the agent handles a real inventory on a real evening.

The v1.6 rewrite also surfaced a requirement the generic stories missed: the ACT story now describes an ingredient used twice across different meals, which is the cross-meal double-allocation problem now covered by its own standard in the living spec.

## Still not covered by a story

Three behaviours now in the prototype have no story behind them, which is usually a sign the team built ahead of its own understanding of the need. Worth writing before Exercise 4:

- **Setting a dietary restriction.** What is the moment Ren does this, and what does she expect to happen to a plan she has already looked at?
- **Household size changing.** Guests for dinner, or a child away for the week — does Ren expect the whole plan to rescale, or just one meal?
- **The day rolling over.** What does Ren expect to find on Tuesday morning if she never confirmed Monday's dinner?
