export type FoldingRoute = 'Plain π0.5' | 'χ₀-AE' | 'CRAVE'

export type FoldingResult = {
  demos: 150 | 300 | 450
  route: FoldingRoute
  successes: number
  trials: number
  durationMean: number
  successMedian: number
  ci: [number, number]
}

export const foldingResults: FoldingResult[] = [
  { demos: 150, route: 'Plain π0.5', successes: 10, trials: 20, durationMean: 96.2, successMedian: 71.6, ci: [0.299, 0.701] },
  { demos: 150, route: 'χ₀-AE', successes: 8, trials: 20, durationMean: 111.9, successMedian: 61.9, ci: [0.219, 0.613] },
  { demos: 150, route: 'CRAVE', successes: 11, trials: 20, durationMean: 86.0, successMedian: 76.9, ci: [0.342, 0.742] },
  { demos: 300, route: 'Plain π0.5', successes: 11, trials: 20, durationMean: 78.0, successMedian: 60.4, ci: [0.342, 0.742] },
  { demos: 300, route: 'χ₀-AE', successes: 14, trials: 20, durationMean: 109.1, successMedian: 91.4, ci: [0.481, 0.855] },
  { demos: 300, route: 'CRAVE', successes: 15, trials: 20, durationMean: 74.7, successMedian: 58.1, ci: [0.531, 0.888] },
  { demos: 450, route: 'Plain π0.5', successes: 16, trials: 20, durationMean: 71.2, successMedian: 57.8, ci: [0.584, 0.919] },
  { demos: 450, route: 'χ₀-AE', successes: 13, trials: 20, durationMean: 89.3, successMedian: 60.1, ci: [0.433, 0.819] },
  { demos: 450, route: 'CRAVE', successes: 16, trials: 20, durationMean: 75.4, successMedian: 55.8, ci: [0.584, 0.919] },
]

export const mechanismEvidence = {
  episodes: 300,
  framewiseReductionSeconds: 12.72,
  framewiseInterval: [11.38, 14.09] as const,
  noGlobalReductionSeconds: 17.59,
  noGlobalInterval: [16.26, 18.94] as const,
}

export const taskEvidence = {
  nail: {
    trialsPerRoute: 20,
    sftCompletion: 30,
    craveCompletion: 35,
  },
  writing: {
    demonstrations: 55,
    successes: 16,
    trials: 19,
  },
}

export const routeCosts = [
  {
    stage: 'Human progress annotation',
    estimator: '309 min · playback-workload proxy',
    crave: 'not required',
  },
  {
    stage: 'Learned-estimator training',
    estimator: '3,196–3,995 min · 8×A100 projection',
    crave: 'not required',
  },
  {
    stage: 'Automatic label construction',
    estimator: '66–137 min · 8×A100 projection',
    crave: '3.7–5.6 min · 8×A100 projection',
  },
]
