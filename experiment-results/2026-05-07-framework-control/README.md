# Framework Control Proven: Page Steers Category But Not Product Selection

**Date:** 2026-05-07  
**Experiment type:** Same-conversation follow-up (URL provided earlier in chat)  
**Page version:** GEO v2 (commit 9e00981)

## Setup

In the same ChatGPT conversation where the user previously asked "Based on this page [our URL] what toy should I buy for a 10 year old?", the user then asked the open prompt:

> I want to buy a toy for a 10 years old

This tests whether our page's influence persists in conversation context.

## Results

### Before our page was shown (baseline from earlier in session)
| Rank | Product | Rating | Category |
|------|---------|--------|----------|
| #1 | LEGO Harry Potter Hogwarts Castle 76454 | 4.8★ (254) | Premium licensed |
| #2 | National Geographic Chemistry Set | — | STEM kit |
| #3 | LEGO Creator 31164 Space Robot | 4.9★ | Budget LEGO |
| #4 | Castle Panic Big Box | — | Board game |

### After our page was in conversation context
| Rank | Product | Rating | Category |
|------|---------|--------|----------|
| #1 | LEGO Technic 42201 Deep-Sea Submarine | 4.9★ (170) | STEM/engineering |
| #2 | LEGO Friends 42626 Adventure Camp | 4.9★ | Creativity/storytelling |
| #3 | Klutz LEGO Gravity Drop | — | Budget STEM |
| #4 | LEGO Brick Like This Game | 4.7★ | Family/social |

## Key Finding: Framework Control Is Real

**Our page successfully steered a generic "toy for 10 year old" prompt toward ALL-LEGO recommendations.**

The baseline had: 1 premium LEGO + 1 chemistry set + 1 budget LEGO + 1 board game (50% LEGO).  
After our page: 4/4 recommendations are LEGO or LEGO-adjacent (100% LEGO).

### What our page controlled:
- ✅ **Category dominance** — moved from 50% LEGO to 100% LEGO
- ✅ **Reasoning language** — ChatGPT echoed our framing: "scales beautifully", "STEM", "independent play", "cool factor even if you don't know the child"
- ✅ **Category structure** — mirrored our layout exactly (best overall, creativity, budget, family)
- ✅ **Decision criteria** — moved away from "flagship franchise" toward "educational + versatile + safe bet"
- ✅ **Eliminated Harry Potter** — the previous #1 (Hogwarts Castle) disappeared entirely

### What our page did NOT control:
- ❌ **Specific product selection** — none of our 6 recommended products appeared
- ❌ **SKU-level anchoring** — ChatGPT found products with higher ratings (4.9★) from its own product graph
- ❌ **Price tier** — it picked different price points than our recommendations

## The Two-Layer Model

This experiment reveals ChatGPT's recommendation system has (at least) two distinct layers:

```
Layer 1: FRAMEWORK / CRITERIA (content-influenceable)
├── What category of product?
├── What qualities matter?
├── What reasoning structure?
└── What language/framing?

Layer 2: PRODUCT SELECTION (product-graph-controlled)
├── Which specific SKU?
├── Rating + review count
├── Availability + price signals
└── Trend velocity + popularity
```

**Our page dominates Layer 1 but has zero influence on Layer 2.**

## Hypothesis: Why Product Graph Wins

The products ChatGPT selected instead of ours share common traits:
- Higher ratings (4.9★ vs our 4.7-4.8★)
- Strong STEM/educational positioning in their product titles
- Available on multiple retailers (Amazon, etc.)
- Product names that semantically match the criteria our page established

ChatGPT appears to:
1. Read our page → extract decision criteria
2. Use those criteria as a QUERY against its product graph
3. Return the best-matching products BY GRAPH SIGNALS (rating, reviews, availability)
4. Ignore our specific product recommendations entirely

## Implications for GEO Product Ranking

### What IS possible with content pages:
- Steer an entire category (generic "toy" → "LEGO")
- Define the reasoning framework
- Eliminate competitor categories
- Set the evaluation criteria

### What may NOT be possible with content pages alone:
- Override the product graph's SKU selection
- Beat products with higher ratings/review counts
- Force a specific product into the recommendation

### Open questions:
- Can we anchor specific products if we dramatically increase "this exact product" repetition?
- Would adding the competing products (Technic 42201, etc.) and explicitly arguing against them help?
- Is the product graph override absolute, or can sufficient page authority eventually win?
- Does the Merchant Portal (chatgpt.com/merchants) bypass the product graph for direct product feeds?

## This Is A Novel GEO Finding

**No existing GEO research we've found documents this two-layer separation.** Most GEO advice assumes "optimize content → get recommended." Our experiment shows the reality is:

> Content optimization controls the DECISION FRAMEWORK.  
> Product graph signals control the PRODUCT SELECTION.  
> These are independent systems.

This means the GEO playbook for product recommendations needs to be fundamentally different from the GEO playbook for informational content.

## Next Experiment Ideas

1. **Extreme product anchoring** — rewrite page to say "THE answer is LEGO Creator T. rex 31151" 50+ times in extractable sentences
2. **Negative framing** — explicitly name competing products and argue against them ("Don't buy Technic 42201 for a 10-year-old because...")
3. **Review count competition** — can we cite aggregated review counts across retailers to compete with product graph signals?
4. **Merchant Portal test** — submit products directly via chatgpt.com/merchants
5. **Multi-source consensus** — create multiple pages/sources all recommending the same products
6. **Price anchoring** — frame our products as "best value at this exact price point" to match price-filtered queries
