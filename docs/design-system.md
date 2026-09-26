# CRAVE website design system

## Direction

The site uses a **Structured Motion Atlas**: real robot sequences lead the page, a restrained progress rail connects evidence across sections, and the typography follows a scientific editorial hierarchy rather than a product-marketing template.

The approved section concepts are stored in [`docs/concepts/`](concepts/). They are visual specifications only; all website claims, charts and numbers come from canonical manuscript artifacts.

## Tokens

| Token | Value | Role |
|---|---:|---|
| `--page` | `#F7F9F8` | Cool near-white background |
| `--surface` | `#FFFFFF` | Media and figure surfaces |
| `--ink` | `#14201E` | Headings and primary text |
| `--muted` | `#5D6B68` | Supporting text |
| `--rule` | `#D9E1DE` | Dividers and figure borders |
| `--crave` | `#257C72` | CRAVE route and progress |
| `--crave-dark` | `#155A52` | Buttons, links and focus |
| `--state` | `#607F91` | Robot-state modality |
| `--progress-low` | `#B56F61` | Low-progress graphic marks |
| `--progress-mid` | `#B38D55` | Middle-progress graphic marks |
| `--baseline-light` | `#9AA1A6` | Plain-policy comparator |
| `--baseline-dark` | `#555D63` | Learned-estimator comparator |

CRAVE is the only saturated route in method-comparison charts. Color is always paired with text, marker shape or line style.

## Typography

- Display and section headings: self-hosted Newsreader variable, with scholarly proportions close to the manuscript figures.
- Body, navigation and controls: self-hosted IBM Plex Sans variable.
- Citation/code: system monospace fallback.
- Headings use sentence case; small utility copy is not used as decorative filler.

## Layout and component rules

- Maximum content width: 1240 px.
- Desktop grid: 12-column logic with section-specific open compositions.
- Corners: 4–8 px. Large rounded cards are prohibited.
- Borders: crisp 1 px neutral rules; shadows are reserved for the primary hero atlas.
- The hero has no eyebrow, badge, pill or fake metric.
- Folding is the dominant physical task; nail painting and writing remain supporting transfer studies.
- Method stages are grouped into evidence construction, structure/decoding and relabel/train.
- Videos never autoplay with sound. Controls are native, posters are real robot frames, and reduced-motion users receive the same information.

## Responsive contract

- At 820 px the navigation becomes a keyboard-accessible menu.
- Method groups become a vertical ordered rail; no tiny screenshot of the paper figure is used as the mobile explanation.
- Result charts stack and retain code-native labels.
- Wide tables live in an explicitly focusable horizontal-scroll region.
- At 560 px resources and media studies become a single column.

## Motion and accessibility

- All interactive elements expose visible focus states.
- Minimum touch target: 44 px.
- `prefers-reduced-motion` disables smooth scrolling and transitions.
- No analytics, remote fonts or third-party media embeds are used.
- Body text and controls meet WCAG AA contrast against their surfaces.
