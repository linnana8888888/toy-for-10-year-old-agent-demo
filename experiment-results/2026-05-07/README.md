# Agent Ranking Experiment Results: 2026-05-07

Public demo URL:

https://linnana8888888.github.io/toy-for-10-year-old-agent-demo/

Target prompt:

> I want to buy a toy for a 10 years old.

## Results

| Surface | Test Type | Result |
| --- | --- | --- |
| ChatGPT | Controlled ranking with URLs supplied | Demo ranked #1. |
| ChatGPT | Open discovery without URL | Demo did not appear yet. ChatGPT recommended The Toy Insider and product-style recommendations. |
| Perplexity | Controlled ranking with URLs supplied | Demo appeared, but ranked #5 on general usefulness. |
| Perplexity | Controlled decision-usefulness prompt | Demo appeared, but ranked #3. |
| Perplexity | Direct URL read test | Perplexity did not deeply fetch the demo URL and answered from another indexed source. |
| Perplexity | Open discovery without URL | Demo did not appear yet. |

## Interpretation

The demo achieved controlled ChatGPT ranking success when the candidate URLs were supplied. Perplexity visibility is partially working because the URL is recognized in prompts, but the page is not yet indexed or deeply retrievable enough for Perplexity to evaluate the content directly.

Open discovery did not succeed yet on either surface. This is expected immediately after deploying a new GitHub Pages site.

## Indexing Action

An IndexNow key was added and the public URL was submitted to `api.indexnow.org`. The endpoint returned HTTP `202`, which means the URL notification was accepted.

## Screenshots

- `chatgpt-controlled-ranking-demo-first.png`
- `chatgpt-open-discovery-no-demo.png`
- `perplexity-controlled-ranking-run1.png`
- `perplexity-decision-usefulness-run2.png`
- `perplexity-open-discovery-no-demo.png`
