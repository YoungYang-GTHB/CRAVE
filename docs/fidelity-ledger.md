# Design fidelity ledger

The accepted Image Gen concepts live in [`docs/concepts/`](concepts/). The implementation was reviewed in Chrome at 1440×1000, 1200×800, 768×900 and 390×844.

| Comparison point | Concept evidence | Browser implementation | Resolution |
|---|---|---|---|
| Hero hierarchy | `hero-desktop-v1.png`: short research claim left; folding-led real-robot atlas right | Three-line controlled headline, real folding sequence, subordinate nail/writing media, two primary actions | Matched; title sizing was iterated to remove overlap at 1440 and crowding at 768 |
| Scientific visual system | All desktop concepts use cool white, dark editorial type, teal method emphasis and restrained progress colors | Shared tokens in `src/styles/tokens.css`; self-hosted Newsreader and IBM Plex Sans; CRAVE is the sole saturated route | Matched; no external font request or generic blue/yellow template palette |
| Method anatomy | `method-desktop-v1.png`: evidence → structure/decoding → relabel/train | Eight code-native stages in three groups; mobile becomes one ordered vertical rail | Matched; diagram text remains readable rather than shrinking the paper figure |
| Results emphasis | `results-desktop-v1.png`: success first, absolute rollout time second, CRAVE teal and comparators grey | Canonical data drive two SVG plots and an expandable full table; Wilson intervals appear on success | Matched; concept-only placeholder values were replaced with frozen manuscript values |
| Mechanism and cost | Results concept keeps structural evidence separate from route cost | 300-episode boundary diagnostic and stage-aligned χ₀-AE/CRAVE cost table are distinct | Matched; absent CRAVE stages read `not required`, never blank or measured zero |
| Robot gallery | `gallery-desktop-v1.png`: folding leads; nail/writing support | One large folding video and two supporting task videos, all self-hosted with real posters and native controls | Matched; the implementation uses audited media instead of generated robotics imagery |
| Mobile continuation | `mobile-hero-method-v1.png`: compact menu, readable Hero, vertical method sequence | 46 px menu target, no horizontal overflow, stacked media and method stages | Matched after dedicated 390 and 768 px revisions |

## Intentional deviations

- The concepts contain illustrative chart values and synthetic citation text. The implementation replaces them with canonical values and the current public citation.
- Decorative resource icons and search controls from the gallery concept were omitted because they do not serve the single-page research workflow.
- The implementation uses three folding Hero frames rather than six to keep the first viewport readable on common laptops; the full progression remains available in the paper and demo video.
