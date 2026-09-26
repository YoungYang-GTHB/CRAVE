# CRAVE website content contract

The website must not recompute or selectively transform paper-facing metrics. The following values are copied from frozen manuscript artifacts and centralized in `src/data/results.ts`.

## Main folding study

Twenty sequential rollouts were executed for each deployed checkpoint.

| Demonstrations | Plain π0.5 | χ₀-AE | Direct CRAVE |
|---:|---:|---:|---:|
| 150 | 10/20 | 8/20 | 11/20 |
| 300 | 11/20 | 14/20 | 15/20 |
| 450 | 16/20 | 13/20 | 16/20 |

Mean observed rollout duration and successful-rollout median are copied from `folding_enriched_metrics_v1.csv`. One successful 150-demo CRAVE rollout lacks recoverable duration metadata; the website does not impute it.

## Structural diagnostic

- 300 held-out folding episodes.
- Full CRAVE reduces boundary error by 12.72 s relative to framewise assignment; paired-bootstrap interval 11.38–14.09 s.
- Removing the global decoded path increases the difference to 17.59 s; interval 16.26–18.94 s.

## Cross-task evidence

- Nail painting: outcome-independent 20-episode subset per route; four-stage mean completion is 30% for SFT and 35% for Direct CRAVE. This is completion, not binary success.
- Ordered writing: Direct CRAVE completes 16/19 unique robot rollouts after training on 55 demonstrations. The website does not surface a plain-SFT writing comparison.

## Label-construction workflow

- CRAVE automatic label construction: projected 3.7–5.6 min on 8×A100.
- Existing χ₀ Stage Advantage checkpoint inference/export: projected 66–137 min on 8×A100.
- Human progress annotation and learned-estimator training are structurally absent from CRAVE and are labelled `not required`, not measured zero.
- Stages are kept separate rather than combined into one route-level total.

## Terminology

- CRAVE recovers **progress**, not value, return or calibrated advantage.
- `recurrent` means cross-episode repeated support, not a recurrent neural network.
- Public copy does not expose internal task identifiers.
- `χ₀-AE` is an adapted Stage Advantage label-source comparator under the matched ordinal interface, not a reproduction of the full χ₀ system.
