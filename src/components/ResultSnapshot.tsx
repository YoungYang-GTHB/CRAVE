import { foldingResults, type FoldingRoute } from '../data/results'

const routes: FoldingRoute[] = ['Plain π0.5', 'χ₀-AE', 'CRAVE']
const scales = [150, 300, 450] as const

export function ResultSnapshot() {
  return (
    <section className="result-snapshot" aria-labelledby="snapshot-title">
      <div className="shell">
        <header className="result-snapshot__header">
          <div>
            <span className="eyebrow">Folding performance</span>
            <h2 id="snapshot-title">Strongest observed folding count at 150 and 300 demonstrations; tied at 450.</h2>
          </div>
          <p>One deployed checkpoint per arm · 20 sequential rollouts.</p>
        </header>
        <div className="snapshot-grid">
          {scales.map((scale) => (
            <article key={scale}>
              <h3><strong>{scale}</strong> demonstrations</h3>
              <div className="snapshot-routes">
                {routes.map((route) => {
                  const row = foldingResults.find((result) => result.demos === scale && result.route === route)!
                  return (
                    <div className={route === 'CRAVE' ? 'is-crave' : ''} key={route}>
                      <span>{route}</span>
                      <div className="snapshot-dots" aria-hidden="true">
                        {Array.from({ length: 20 }, (_, index) => <i className={index < row.successes ? 'is-filled' : ''} key={index} />)}
                      </div>
                      <strong>{row.successes}/20</strong>
                    </div>
                  )
                })}
              </div>
            </article>
          ))}
        </div>
        <p className="snapshot-note">Observed single-checkpoint policy evidence; the counts are not a multi-seed superiority claim.</p>
      </div>
    </section>
  )
}
