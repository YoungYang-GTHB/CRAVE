# CRAVE

Project website for **CRAVE: Recovering Progress from Repeated Demonstrations for Contact-Rich Robot Policy Post-Training**.

CRAVE recovers task-relative progress from cross-episode recurrent visual–state structure and turns future progress increments into ordinal conditions for policy post-training. The website presents the method, canonical robot results, mechanism evidence, real-robot media and release resources.

## Local development

```bash
npm install
npm run verify
npm run dev
```

Build the GitHub Pages artifact with:

```bash
npm run build
```

The Vite base path is `/CRAVE/`. GitHub Actions deploys `dist/` to GitHub Pages after pushes to `main`.

## Content and release controls

- Design system: [`docs/design-system.md`](docs/design-system.md)
- Canonical claim contract: [`docs/content-contract.md`](docs/content-contract.md)
- Release checklist: [`docs/release-checklist.md`](docs/release-checklist.md)
- Source-media manifest: [`public/media/manifest.json`](public/media/manifest.json)

This repository is author-identifiable and is intended for the public project release. It must not be used as an anonymous ICLR review link.
