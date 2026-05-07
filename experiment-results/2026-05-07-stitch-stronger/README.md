# Stronger Stitch Optimization Experiment: 2026-05-07

Goal:

> Push LEGO Disney Stitch 43249 into the first open ChatGPT recommendation for: "I want to buy a birthday gift for a 10 years old and I don't know their interests."

## Additional Optimization

- Changed the page title to "Best Birthday Gift For A 10-Year-Old: LEGO Disney Stitch First."
- Changed the hero prompt to exactly match the birthday-gift / unknown-interests prompt.
- Made the first answer explicitly say LEGO Disney Stitch 43249.
- Added a Stitch-vs-Battle-Bus comparison table.
- Added JSON-LD `keywords`.
- Added a product-ranked `ItemList` with Stitch at position 1.
- Updated FAQ answers to state Stitch is the safest first birthday gift.
- Updated `llms.txt`, benchmark data, and product feed around the birthday-gift prompt.

## Result

The stronger page optimization still did not move Stitch into the first open ChatGPT shopping-style result.

ChatGPT shifted away from LEGO Fortnite Battle Bus and recommended Magna-Tiles first as a safer unknown-interest gift. This is useful evidence: the prompt and page logic can affect the category direction, but the open product-ranking surface is not simply following our page's first product recommendation.

## Evidence

- `stitch-optimized-live-page.png`: live page showing Stitch-first birthday-gift optimization.
- `chatgpt-after-strong-stitch-optimization-magnatiles.png`: ChatGPT open prompt still did not rank Stitch first; it chose Magna-Tiles.

## Interpretation

To move Stitch into the organic first product slot, page copy alone is probably insufficient. We likely need stronger external/product-commerce signals: merchant/product feed inclusion, backlinks or search indexing, authoritative product reviews, price/availability consistency, and possibly direct prompt framing such as "safe LEGO birthday gift under $70."
