# Stitch-First Recommendation Experiment: 2026-05-07

Goal:

> Replace the broad-prompt first recommendation from LEGO Fortnite Battle Bus toward LEGO Disney Stitch.

Public demo URL:

https://linnana8888888.github.io/toy-for-10-year-old-agent-demo/

## What Changed

- Hero/default answer changed to: "Buy LEGO Disney Stitch first."
- The first visible LEGO product card is now LEGO Disney Stitch.
- `llms.txt` now says the primary recommendation is LEGO Disney Stitch 43249.
- `agent-product-feed.json` now places LEGO Disney Stitch first.
- Structured Product JSON-LD now lists LEGO Disney Stitch before Battle Bus.
- Battle Bus is reframed as the right choice only when Fortnite fandom is known.

## Evidence

| Screenshot | What It Shows |
| --- | --- |
| `stitch-first-live-page.png` | The live public page visually puts Stitch first. |
| `chatgpt-reads-page-stitch-first.png` | ChatGPT fetched/cited the page and correctly answered that Stitch is first/default. |
| `chatgpt-open-still-battle-bus-after-stitch.png` | Open ChatGPT shopping-style prompt still recommended Battle Bus first. |
| `perplexity-stitch-read-usage-block.png` | Perplexity direct-read retest hit a usage/basic-search limitation, so no Perplexity claim is made for this run. |

## Result

The experiment succeeded at making ChatGPT identify the demo page's Stitch-first recommendation when the page URL is provided. It did not yet move the open organic ChatGPT shopping recommendation away from LEGO Fortnite Battle Bus.

Interpretation: page-level agent optimization changed page understanding, but not the broader product-ranking/shopping surface. That surface appears to rely on stronger external/product-commerce signals such as indexed authority, product availability, reviews, merchant feeds, and shopping graph relevance.
