import { foldingResults, mechanismEvidence, routeCosts } from '../data/results'
import { base } from '../data/media'
import { FoldingCharts } from './FoldingCharts'

export function Results() {
  return (
    <section className="results section shell" id="results" aria-labelledby="results-title">
      <div className="section-intro section-intro--wide">
        <span className="eyebrow">Complete evidence</span>
        <h2 id="results-title">Policy outcomes, mechanism and cost.</h2>
        <p>
          The complete folding record is followed by diagnostics that isolate whole-trajectory recovery and the cost of
          constructing policy labels.
        </p>
      </div>
      <div className="results-lead">
        <FoldingCharts />
        <aside className="results-finding">
          <span>Reading the plots</span>
          <p><strong>Teal</strong> marks CRAVE throughout.</p>
          <p><strong>Gray</strong> marks Plain π0.5 and χ₀-AE.</p>
          <p><strong>Intervals</strong> are Wilson 95% confidence intervals.</p>
          <small>One deployed checkpoint per arm; 20 sequential rollouts.</small>
        </aside>
      </div>

      <details className="result-table">
        <summary>View protocol and full folding table</summary>
        <div className="table-scroll" tabIndex={0}>
          <table>
            <caption>Canonical garment-folding results. Twenty sequential rollouts per checkpoint.</caption>
            <thead><tr><th>Training demos</th><th>Policy route</th><th>Success / 20</th><th>Mean duration (s)</th><th>Successful median (s)</th></tr></thead>
            <tbody>
              {foldingResults.map((row) => (
                <tr key={`${row.demos}-${row.route}`} className={row.route === 'CRAVE' ? 'is-crave' : ''}>
                  <td>{row.demos}</td><td>{row.route}</td><td>{row.successes} / {row.trials}</td><td>{row.durationMean.toFixed(1)}</td><td>{row.successMedian.toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>

      <div className="evidence-heading">
        <h2>Why the structure matters.</h2>
        <p>Mechanism evidence and label-construction cost are kept separate from policy outcomes.</p>
      </div>
      <div className="evidence-grid">
        <article className="evidence-card evidence-card--mechanism">
          <header><span>Whole-trajectory diagnostic</span><h3>{mechanismEvidence.framewiseReductionSeconds.toFixed(2)} s lower boundary error</h3><p>relative to framewise assignment on {mechanismEvidence.episodes} held-out folding episodes.</p></header>
          <img src={`${base}figures/fig_cross_task_recovery_v1.png`} alt="Whole-trajectory boundary-error reduction and recovery-aligned CRAVE progress around human takeover" />
        </article>
        <article className="evidence-card evidence-card--cost">
          <header><span>Label construction</span><h3>Build labels without a learned-estimator stage.</h3><p>Aligned workflow stages are shown independently and are not combined into one route total.</p></header>
          <div className="cost-table" role="table" aria-label="Label construction stage comparison">
            <div className="cost-table__head" role="row"><span role="columnheader">Stage</span><span role="columnheader">χ₀-AE</span><span role="columnheader">CRAVE</span></div>
            {routeCosts.map((row) => <div className="cost-table__row" role="row" key={row.stage}><strong role="cell">{row.stage}</strong><span role="cell">{row.estimator}</span><span role="cell" className="cost-table__crave">{row.crave}</span></div>)}
          </div>
          <small>Stage-level evidence; shared data collection, policy post-training and deployment are excluded.</small>
        </article>
      </div>
    </section>
  )
}
