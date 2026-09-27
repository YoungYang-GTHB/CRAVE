# Design fidelity ledger

The V2 concepts are [`hero-results-desktop-v2.png`](concepts/hero-results-desktop-v2.png), [`story-method-desktop-v2.png`](concepts/story-method-desktop-v2.png) and [`mobile-hero-results-v2.png`](concepts/mobile-hero-results-v2.png). The implementation was inspected in the shared Chrome instance at 1440×900, 1440×1000, 768×900 and 390×844.

| Comparison point | Accepted concept | Browser implementation | Resolution |
|---|---|---|---|
| First-view hierarchy | One claim, one folding visual and a primary video action | The claim occupies the left field; a real folding poster, progress trace and play control occupy the right | Matched; the live heading wraps to four lines at 1440 px to protect body-copy width |
| Evidence placement | Folding counts immediately follow the hero | The result snapshot starts at 795 px on desktop and directly follows the 922 px mobile hero | Matched; canonical counts replace all concept placeholders |
| Method compression | Four macro steps with the implementation detail kept secondary | Four code-native scientific diagrams appear in one row at desktop, 2×2 at tablet and one column on mobile; eight stages are expandable | Matched |
| Visual system | Paper white, green-black ink, restrained teal and editorial serif/sans typography | Shared tokens, self-hosted Newsreader/IBM Plex Sans and CRAVE-only saturated method color | Matched; no gradient decoration or generic dashboard treatment |
| Robot-study hierarchy | Folding is primary; nail painting and writing are secondary | Two-layer layout: a full-width folding study with video/copy split above, then equal-width nail-painting and writing studies below; all use audited real-robot media | Matched |
| Evidence separation | Policy outcomes, mechanism and stage cost remain distinct | Early observed-count snapshot; later full plots/table, 300-episode mechanism diagnostic and stage-aligned cost table | Matched |
| Mobile narrative | Full-width primary action, dominant folding media, result snapshot next | 46 px menu target, no horizontal page overflow, click-to-play hero media and stacked evidence rows | Matched; the video begins within the first 844 px and completes immediately below it |
| Interaction restraint | Click-to-play media and one progress-motion motif | Hero controls appear only after playback starts; the trace animation respects reduced-motion; other videos remain click-to-play | Matched |

## Above-the-fold copy diff

| Element | Accepted concept | Implementation |
|---|---|---|
| Heading | “Recover progress from repeated robot demonstrations.” | Exact match |
| Deck | “CRAVE discovers visual–state configurations that recur across demonstrations, reconstructs episode-consistent task progress, and turns it into conditions for policy post-training—without training a separate value model.” | Exact match |
| Primary action | “Watch the 48 s robot demo” | Exact match; starts the 48 s folding video |
| Secondary action | “Read the paper” | Exact match |
| Media label | “Garment folding · real robot” | Exact match |

## Intentional deviations

- The generated mobile concept uses a table for the three-scale result. The live site uses twenty-dot rows, preserving the same values while making the number of trials visually explicit.
- The live hero uses audited robot footage and native controls after playback begins; no generated robot imagery ships in the website.
- Full scientific plots and protocol qualifiers remain later on the page so the first two viewports stay legible.
