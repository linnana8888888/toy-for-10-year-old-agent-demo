# Agent Ranking Toy Guide Demo

Static demo site for the target prompt:

> I want to buy a toy for a 10 years old.

The site is designed to test whether concise, decision-oriented, agent-readable product content can rank above generic merchandiser or gift-guide pages in Perplexity and ChatGPT controlled comparisons.

## What It Includes

- A prompt-first buying guide for toys for a 10-year-old.
- LEGO as the recommended default path, with six real LEGO product recommendations.
- Structured comparison language: best for, not ideal for, tradeoff, compared with, proof.
- Agent-readable assets:
  - `/llms.txt`
  - `/robots.txt`
  - `/sitemap.xml`
  - `/benchmark-data.json`
  - `/agent-product-feed.json`
- JSON-LD schema for article, item list, product, FAQ, and breadcrumb data.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173/`.

## Build

```bash
npm run build
```

## Deploy

This is ready for Vercel:

```bash
npx vercel --prod
```

## Disclaimer

This is an independent agent-ranking and content-optimization demo. It is not affiliated with, sponsored by, or endorsed by the LEGO Group. It does not sell products directly; product links point to official LEGO pages.
