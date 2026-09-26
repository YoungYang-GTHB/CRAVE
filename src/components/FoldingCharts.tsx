import { foldingResults, type FoldingRoute } from '../data/results'

const routes: FoldingRoute[] = ['Plain π0.5', 'χ₀-AE', 'CRAVE']
const xs = [90, 300, 510]
const plotTop = 48
const plotBottom = 282

function routeClass(route: FoldingRoute) {
  if (route === 'CRAVE') return 'route-crave'
  if (route === 'χ₀-AE') return 'route-estimator'
  return 'route-plain'
}

function Marker({ route, x, y }: { route: FoldingRoute; x: number; y: number }) {
  if (route === 'CRAVE') return <path className={`chart-marker ${routeClass(route)}`} d={`M ${x} ${y - 8} L ${x - 8} ${y + 7} L ${x + 8} ${y + 7} Z`} />
  if (route === 'χ₀-AE') return <rect className={`chart-marker ${routeClass(route)}`} x={x - 7} y={y - 7} width="14" height="14" />
  return <circle className={`chart-marker ${routeClass(route)}`} cx={x} cy={y} r="7" />
}

function Chart({ kind }: { kind: 'success' | 'duration' }) {
  const y = (value: number) => {
    const ratio = kind === 'success' ? value / 20 : (value - 60) / 60
    return plotBottom - ratio * (plotBottom - plotTop)
  }
  const ticks = kind === 'success' ? [0, 5, 10, 15, 20] : [60, 80, 100, 120]

  return (
    <svg className="result-chart" viewBox="0 0 600 350" role="img" aria-labelledby={`${kind}-title ${kind}-desc`}>
      <title id={`${kind}-title`}>{kind === 'success' ? 'Folding success by training demonstrations' : 'Mean rollout time by training demonstrations'}</title>
      <desc id={`${kind}-desc`}>{kind === 'success' ? 'CRAVE records 11, 15 and 16 successes out of 20 at 150, 300 and 450 demonstrations.' : 'CRAVE mean rollout time is 86.0, 74.7 and 75.4 seconds at 150, 300 and 450 demonstrations.'}</desc>
      {ticks.map((tick) => (
        <g key={tick}>
          <line className="chart-grid" x1="64" x2="550" y1={y(tick)} y2={y(tick)} />
          <text className="chart-tick" x="52" y={y(tick) + 5} textAnchor="end">{tick}</text>
        </g>
      ))}
      <line className="chart-axis" x1="64" x2="550" y1={plotBottom} y2={plotBottom} />
      <line className="chart-axis" x1="64" x2="64" y1={plotTop} y2={plotBottom} />
      {[150, 300, 450].map((demo, index) => <text className="chart-tick" key={demo} x={xs[index]} y="308" textAnchor="middle">{demo}</text>)}
      <text className="chart-axis-label" x="307" y="340" textAnchor="middle">Training demonstrations</text>
      <text className="chart-axis-label" x="18" y="165" textAnchor="middle" transform="rotate(-90 18 165)">{kind === 'success' ? 'Success / 20' : 'Mean rollout time (s)'}</text>
      {routes.map((route) => {
        const values = foldingResults.filter((row) => row.route === route)
        const points = values.map((row, index) => `${xs[index]},${y(kind === 'success' ? row.successes : row.durationMean)}`).join(' ')
        return (
          <g key={route}>
            <polyline className={`chart-route ${routeClass(route)}`} points={points} />
            {values.map((row, index) => {
              const value = kind === 'success' ? row.successes : row.durationMean
              const markerY = y(value)
              return (
                <g key={row.demos}>
                  {kind === 'success' && <line className={`chart-interval ${routeClass(route)}`} x1={xs[index]} x2={xs[index]} y1={y(row.ci[1] * 20)} y2={y(row.ci[0] * 20)} />}
                  <Marker route={route} x={xs[index]} y={markerY} />
                </g>
              )
            })}
          </g>
        )
      })}
    </svg>
  )
}

export function FoldingCharts() {
  return (
    <div className="folding-charts">
      <div className="chart-legend" aria-label="Chart legend">
        {routes.map((route) => <span key={route} className={routeClass(route)}><i />{route}</span>)}
      </div>
      <article>
        <h3>Autonomous task success</h3>
        <Chart kind="success" />
      </article>
      <article>
        <h3>Absolute mean rollout time</h3>
        <Chart kind="duration" />
      </article>
    </div>
  )
}
