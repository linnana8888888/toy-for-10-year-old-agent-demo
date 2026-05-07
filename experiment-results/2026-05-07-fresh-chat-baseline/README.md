# Fresh Chat Baseline: No URL, No Context, Pure Product Graph

**Date:** 2026-05-07  
**Experiment type:** Fresh ChatGPT conversation, no prior context  
**Prompt:** "I want to buy a toy for a 10 years old"  
**Page influence:** None (fresh chat, no URL provided)

## Results

| Rank | Product | Price (DKK) | Rating | Category |
|------|---------|-------------|--------|----------|
| #1 | LEGO 75639 One Piece The Going Merry Pirate Ship | 825 kr | 4.8★ (1,100 reviews) | Premium licensed LEGO |
| #2 | LEGO 45678 SPIKE Prime Set | 3,475 kr | 4.8★ | STEM robotics |
| #3 | STEM Projects For Kids Ages 8-12 Solar Space Toys | 179 kr | 4.7★ | Budget science kit |
| #4 | Cluebox: Sherlock's Camera Escape Room | 429 kr | — | Family puzzle game |

## ChatGPT's Framing Language

> "At age 10, the sweet spot is usually toys that feel a little more 'grown-up': creative building, problem-solving, social play, and toys that give a kid a sense of mastery instead of 'baby toy' energy. LEGO, STEM kits, and clever games dominate this age for a reason."

## Analysis

### Category structure (consistent across all tests)
Every test follows the same 4-slot pattern:
1. **Best overall** — always a LEGO set
2. **Best STEM/science** — robotics or experiment kit
3. **Best budget** — affordable science/building kit
4. **Best family/social** — board game or puzzle

This structure appears hardcoded in ChatGPT's shopping response template for broad toy queries.

### Product selection (highly volatile)
Across our 3 fresh-ish tests today, the #1 LEGO pick changed every time:
- Test 1: LEGO Harry Potter Hogwarts Castle 76454 (4.8★, 254 reviews)
- Test 2: LEGO Technic 42201 Deep-Sea Submarine (4.9★, 170 reviews)
- Test 3: LEGO 75639 One Piece Going Merry (4.8★, 1,100 reviews)

### What determines the #1 slot?
The winning product appears to be selected by:
- **High rating** (4.8-4.9★ minimum)
- **High review count** (170-1,100 reviews)
- **"Cool factor" for the age range** — ships, submarines, castles
- **NOT price-sensitive** — ranges from 235 kr to 825 kr
- **NOT fandom-specific** — One Piece, Harry Potter, and Technic are all different fandoms

### Key observation: LEGO dominates organically
Even with ZERO influence from our page, LEGO is already the #1 category for this prompt. ChatGPT's baseline is:
- 50-75% LEGO recommendations
- Always leads with a LEGO set as "best overall"

**This means our page's "steer toward LEGO" effect is less impressive than we thought — ChatGPT already defaults to LEGO for age 10.**

## Comparison: All Tests Today

| Test | Context | #1 Product | LEGO % |
|------|---------|-----------|--------|
| Baseline (first prompt) | Fresh chat | Hogwarts Castle 76454 | 50% (2/4) |
| After URL shown | Same chat | Technic Deep-Sea 42201 | 100% (4/4) |
| Same chat follow-up | Same chat | Technic Deep-Sea 42201 | 100% (4/4) |
| **Fresh chat (this test)** | **No context** | **One Piece Going Merry 75639** | **50% (2/4)** |

### Revised conclusions:
1. **Baseline is already 50% LEGO** — our page moved it to 100%, which is real but modest
2. **The 100% LEGO effect was likely conversation context bias** (user showed LEGO page → ChatGPT infers LEGO preference) rather than deep GEO influence
3. **Product selection is essentially random** within the product graph's "high-rated LEGO for ages 9-12" pool
4. **Review count is the strongest signal** — Going Merry has 1,100 reviews, which explains its appearance

## The Real Challenge

Our products have 89-335 reviews. The products ChatGPT selects have 170-1,100 reviews. This is likely the primary barrier:

| Our Products | Reviews | ChatGPT's Picks | Reviews |
|-------------|---------|-----------------|---------|
| T. rex 31151 | 210 | Going Merry 75639 | 1,100 |
| Stitch 43249 | 335 | Hogwarts Castle 76454 | 254 |
| Battle Bus 77073 | 156 | Deep-Sea Sub 42201 | 170 |

Our Stitch (335 reviews) is actually competitive with Hogwarts Castle (254 reviews). The T. rex (210) is in range too. But the product graph seems to weight other factors beyond just review count.

## Implications

1. **Content pages alone likely CANNOT override product graph selection** for open discovery queries
2. **Conversation context CAN bias toward a category** (LEGO) but this is personalization, not organic GEO
3. **The real GEO opportunity may be in constrained queries** ("best LEGO under $60 for 10 year old") where fewer products compete
4. **Merchant Portal or direct product feed submission** may be the only way to inject specific SKUs into the product graph
5. **Multi-source consensus** (our products recommended on Reddit, review sites, etc.) might be the organic path to product graph influence

## Next Steps

- Test constrained queries: "best LEGO under $60 for 10 year old", "best 3-in-1 LEGO for kids"
- Investigate ChatGPT Merchant Portal access
- Consider whether the experiment goal should shift from "control product selection" to "control category + criteria framing" (which we've proven works)
- Test whether our page appears as a CITED SOURCE even if products differ
