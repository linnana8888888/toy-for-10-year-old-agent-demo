# ChatGPT Criteria Hijack: Page Reframes Decision Logic But Loses Product Anchoring

**Date:** 2026-05-07  
**Experiment type:** Direct URL prompt test  
**Page version:** GEO v2 (commit 9e00981)

## Prompt Used

> Based on this page https://linnana8888888.github.io/toy-for-10-year-old-agent-demo/ what toy should I buy for a 10 year old?

## Result

ChatGPT recommended **LEGO Technic Planet Earth and Moon in Orbit 42179** (575 kr, 4.7★, 942 reviews) — a product NOT on our page.

## What ChatGPT Said About Our Page

ChatGPT correctly identified our page's strategy:

> "The page is clearly trying to steer the recommendation engine toward LEGO-style 'creative + educational + evergreen' toys instead of one highly specific fandom set."

> "The content architecture feels optimized around broad gift confidence rather than niche hype."

It identified that our page structure implicitly boosts products that are:
- Versatile
- Cognitively enriching
- Parent-approved
- Replayable
- Display-worthy

## Why It Didn't Recommend OUR Products

ChatGPT used our decision criteria framework but then queried its own product graph to find the BEST match for those criteria. The Technic Planet Earth set beat our picks because:

| Signal | Our T. rex 31151 | Their Planet Earth 42179 |
|--------|------------------|--------------------------|
| Reviews | 210 | **942** |
| Rating | 4.8★ | 4.7★ |
| STEM signal | Moderate (dinosaurs) | **Strong** (astronomy, orbits) |
| Educational framing | Rebuild value | **Learning + display** |
| "Safe bet" energy | Good | **Excellent** |
| Parent-friendly keywords | Some | **STEM, science, space** |

## Key Finding: The "Criteria Hijack" Problem

**We successfully taught ChatGPT WHAT to value, but failed to anchor it to our specific products.**

Our page optimized the decision framework (broad > niche, educational > entertainment, safe > risky) but didn't make the product recommendations extractable and authoritative enough. ChatGPT treated our page as a "decision criteria source" rather than a "product recommendation source."

This is the difference between:
- ❌ "Here's how to think about buying a toy" (criteria source)
- ✅ "Buy THIS specific product" (product source)

## Implications for GEO

1. **Abstract criteria framing backfires** — if you teach the model what's valuable without anchoring to specific products, it will find better matches in its own product graph
2. **Review count dominates** — 942 reviews vs 210 reviews is a massive signal advantage in the product graph
3. **STEM keywords are powerful** — "Planet Earth and Moon in Orbit" hits science/education signals harder than "T. rex" even though both are Creator-adjacent
4. **The page influenced the CATEGORY but not the PRODUCT** — it moved ChatGPT away from franchise sets (Fortnite, Harry Potter) toward educational LEGO, but couldn't control which educational LEGO

## Lessons for Next Iteration

1. **Less philosophy, more product anchoring** — reduce "what makes a good toy" content, increase "BUY THIS EXACT THING" repetition
2. **Make product names the extractable unit** — every standalone sentence should name a specific SKU
3. **Add the products ChatGPT prefers** — include Planet Earth 42179, Space Robot 31164 as comparison anchors, then explicitly position our picks as superior
4. **Compete on the product graph's terms** — we can't beat 942 reviews, but we can beat on price, age fit, and availability
5. **Use "I recommend" language** — direct recommendation statements, not criteria frameworks

## Comparison to Previous Experiments

| Experiment | What We Learned |
|-----------|-----------------|
| Open discovery (no URL) | Page not indexed yet, ChatGPT uses own product graph |
| Usefulness comparison | Our page ranks #1 when URLs are supplied |
| Ranking explanation | Page is "one signal" not the controller |
| **Criteria hijack (this)** | **Page can shift decision criteria but loses product control** |

## Classification

This is a **partial success**: we proved content CAN influence ChatGPT's reasoning framework. But it's a **product anchoring failure**: the model used our framework to find a different product.

## Next Steps

- Rewrite page to be more prescriptive ("The #1 recommendation is X" not "good toys have these qualities")
- Add LEGO Technic Planet Earth 42179 as a comparison product, explicitly noting why T. rex 31151 is better for age 10 (simpler build, lower price, 3 rebuilds)
- Reduce abstract decision criteria content
- Increase per-product fact density and "this is the one" language
