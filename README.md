# Great Divergence

A statistical platform for Borsa Istanbul, TEFAS funds and world markets: when, and by how much, the stocks held by investment funds moved away from the market.

This repository holds the public site: research notes, methodology and demo charts (PNG) exported from the local analysis version. The full analysis runs locally on its own data archive; because of data providers' redistribution terms, no data, archive or result package is published here, and the site does not recalculate anything.

- `docs/` – the ready static site (GitHub Pages: Settings → Pages → Deploy from a branch → `main` → `/docs`)
- `site/` – its source (Svelte + Vite): `npm install`, then `npm run build` writes `docs/`
- `site/tools/publish_demo.py` – adds chosen demo PNGs (TR and EN) and their captions to the site

English is the default language; Turkish is one click away.

Prepared by Cem Karakütük · Not investment advice. Built to map fund-related events statistically.

---

**TR** — Borsa İstanbul, TEFAS fonları ve dünya piyasaları için istatistiksel bir platform: yatırım fonlarının portföylerindeki hisselerin piyasadan ne zaman ve ne kadar ayrıştığını inceliyor. Bu repo yalnız public siteyi içerir: araştırma yazıları, metodoloji ve yerel sürümden alınmış demo PNG'ler. Veri, arşiv ya da sonuç paketi paylaşılmaz; site yeniden hesaplama yapmaz.
