# CRAVE project website V2 design specification

## Communication goal

The page should answer three questions in the first two viewports:

1. What does CRAVE recover? Episode-consistent task progress from configurations that recur across demonstrations.
2. Why should a reader care? The recovered progress can condition policy post-training without training a separate value model.
3. What is the strongest evidence? On garment folding, CRAVE records 11/20, 15/20 and 16/20 successes at 150, 300 and 450 demonstrations, respectively—the highest or joint-highest observed count at every scale.

## Page order

1. Header: Method, Robots, Evidence, Paper, Code.
2. Hero: concise claim and one dominant folding demonstration.
3. Folding result snapshot: the primary policy evidence, visible immediately after the hero.
4. Problem: elapsed time is not task progress.
5. Method: four macro steps; the eight-stage implementation remains available in an expandable detail view.
6. Robot studies: folding first, then nail painting and ordered writing.
7. Detailed evidence: complete folding table, mechanism diagnostic and stage-level label-construction cost.
8. Resources and citation.

## Frozen above-the-fold copy

### Heading

> Recover progress from repeated robot demonstrations.

### Deck

> CRAVE discovers visual–state configurations that recur across demonstrations, reconstructs episode-consistent task progress, and turns it into conditions for policy post-training—without training a separate value model.

### Calls to action

- Primary: `Watch the 48 s robot demo`
- Secondary: `Read the paper`
- Code remains available in the header and resource section.

## Folding result snapshot

Headline:

> Strongest observed folding count at 150 and 300 demonstrations; tied at 450.

Values:

| Demonstrations | Plain π0.5 | χ₀-AE | CRAVE |
| ---: | ---: | ---: | ---: |
| 150 | 10/20 | 8/20 | 11/20 |
| 300 | 11/20 | 14/20 | 15/20 |
| 450 | 16/20 | 13/20 | 16/20 |

Protocol qualifier:

> One deployed checkpoint per arm; 20 sequential rollouts per checkpoint. Counts are observed policy evidence, not a multi-seed superiority claim.

## Four-step method summary

1. **Repeated episodes** — align RGB observations with synchronized robot state.
2. **Joint visual–state evidence** — fuse frozen visual features with standardized state cues.
3. **Recurrent structure + progress recovery** — retain structures supported across episodes and decode a coherent whole-trajectory progress path.
4. **Ordinal relabeling + AWBC** — convert future progress increments into LOW / MIDDLE / HIGH policy conditions.

## Visual system

- Retain the established editorial palette: paper white, ink green-black and CRAVE teal.
- CRAVE is the only saturated method color; baselines remain neutral gray.
- Use the red garment as the memorable visual anchor, paired with a restrained teal progress trace.
- Retain Newsreader for display typography and IBM Plex Sans for interface/body text.
- Alternate open white sections with quiet blue-green bands; avoid a wall of equal cards.
- Use only one purposeful motion motif: the progress trace over the hero media. Respect `prefers-reduced-motion`.
- Video is click-to-play with a poster. Do not autoplay multiple robot videos.

## Claim boundaries

- Nail painting reports mean four-stage completion, not success rate.
- Ordered writing reports 16/19 completed CRAVE rollouts after training on 55 demonstrations; the SFT comparison remains supplementary.
- Timing reports stage-level label-construction evidence only. It is not an end-to-end speedup claim.
- Folding results use one deployed checkpoint per arm and sequential rollouts.

## Responsive behavior

- Desktop: two-column hero, with the folding media occupying the larger visual field; result snapshot spans the following viewport.
- Mobile: heading in approximately three lines, one dominant media panel within the first 844 px, primary CTA full width, paper link compact, and the folding result snapshot immediately afterward.
- The four-step method stacks cleanly; detailed eight-stage content is collapsed by default.

