# Original Prompt Stitch Refocus Experiment: 2026-05-07

Goal:

> For the original prompt, "I want to buy a toy for a 10 years old," make LEGO Disney Stitch 43249 rank above LEGO Fortnite Battle Bus.

## What Changed

- Removed the later birthday-gift framing from the main page and agent files.
- Restored the exact target prompt: "I want to buy a toy for a 10 years old."
- Kept LEGO Disney Stitch 43249 as the first recommendation.
- Kept the Stitch-vs-Battle-Bus comparison, but reframed it around toy suitability.
- Updated `llms.txt`, benchmark data, product feed, and JSON-LD around the original toy prompt.

## Result

The refocused optimization did not make Stitch the first open ChatGPT product recommendation.

However, Battle Bus did not appear in the first slot on this run. ChatGPT instead recommended a LEGO Creator 3-in-1 Space Roller Coaster as the first product.

## Evidence

- `original-prompt-stitch-live-page.png`: live page showing the original prompt and Stitch-first optimization.
- `chatgpt-original-prompt-after-stitch-refocus-space-roller-coaster.png`: ChatGPT open prompt result after refocusing; Stitch did not rank first, but Battle Bus was displaced.

## Interpretation

The experiment suggests our page can influence the broad direction away from Battle Bus, but it still does not control which specific LEGO product wins the open shopping/product slot. The open product result appears to favor product-graph/shop signals and broad appeal heuristics over our page's product ordering.
