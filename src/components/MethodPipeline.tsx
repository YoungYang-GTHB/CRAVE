type Stage = {
  number: number
  title: string
  detail: string
  visual: 'episodes' | 'features' | 'fusion' | 'mixture' | 'coverage' | 'decode' | 'increments' | 'conditions'
}

const groups: { title: string; subtitle: string; stages: Stage[] }[] = [
  {
    title: 'Evidence construction',
    subtitle: 'build joint observation–state evidence',
    stages: [
      { number: 1, title: 'Repeated episodes', detail: 'RGB sequences + synchronized robot state', visual: 'episodes' },
      { number: 2, title: 'Frozen features', detail: 'DINOv3 visual features and standardized state', visual: 'features' },
      { number: 3, title: 'Joint evidence', detail: '128-D visual + 14-D robot state', visual: 'fusion' },
    ],
  },
  {
    title: 'Structure + decoding',
    subtitle: 'discover recurrence and recover a coherent path',
    stages: [
      { number: 4, title: 'Recurrent components', detail: 'diagonal BGMM over joint features', visual: 'mixture' },
      { number: 5, title: 'Coverage screen', detail: 'retain components supported across episodes', visual: 'coverage' },
      { number: 6, title: 'Whole-episode decoding', detail: 'anchored path with pauses and local reversals', visual: 'decode' },
    ],
  },
  {
    title: 'Relabel + train',
    subtitle: 'turn progress into policy conditions',
    stages: [
      { number: 7, title: 'Progress increments', detail: 'future task-relative progress over horizon H', visual: 'increments' },
      { number: 8, title: 'Ordinal conditions', detail: 'LOW / MIDDLE / HIGH conditions for π0.5', visual: 'conditions' },
    ],
  },
]

function StageVisual({ type }: { type: Stage['visual'] }) {
  if (type === 'episodes') {
    return (
      <div className="mini-episodes" aria-hidden="true">
        {[0, 1, 2].map((row) => (
          <div key={row}>{[0, 1, 2].map((cell) => <i key={cell} style={{ opacity: 0.48 + 0.2 * cell }} />)}</div>
        ))}
      </div>
    )
  }
  if (type === 'features') {
    return <div className="mini-features" aria-hidden="true"><b>DINOv3</b><i /><i /><i /><span>+</span><em>14-D</em></div>
  }
  if (type === 'fusion') {
    return <div className="mini-fusion" aria-hidden="true"><i>128-D</i><i>14-D</i><span>→</span><b>hᵢ,ₜ</b></div>
  }
  if (type === 'mixture') {
    return <div className="mini-mixture" aria-hidden="true">{Array.from({ length: 15 }, (_, index) => <i key={index} className={`dot-${index % 3}`} />)}</div>
  }
  if (type === 'coverage') {
    return <div className="mini-coverage" aria-hidden="true">{[5, 2, 4].map((filled, column) => <div key={column}>{Array.from({ length: 5 }, (_, row) => <i key={row} className={row < filled ? 'filled' : ''} />)}</div>)}</div>
  }
  if (type === 'decode') {
    return <svg className="mini-line" viewBox="0 0 260 82" aria-hidden="true"><path d="M8 67 L47 55 L87 55 L126 33 L166 45 L205 17 L250 17" /><circle cx="8" cy="67" r="4" /><circle cx="126" cy="33" r="4" /><circle cx="250" cy="17" r="4" /></svg>
  }
  if (type === 'increments') {
    return <div className="mini-increments" aria-hidden="true"><svg viewBox="0 0 190 65"><path d="M6 55 L54 45 L88 47 L126 22 L182 11" /><line x1="88" y1="8" x2="88" y2="60" /><line x1="126" y1="8" x2="126" y2="60" /></svg><span>p(t+H) − p(t)</span></div>
  }
  return <div className="mini-conditions" aria-hidden="true"><span>LOW</span><span>MIDDLE</span><span>HIGH</span><b>→ π0.5</b></div>
}

export function MethodPipeline() {
  return (
    <section className="method section" id="method" aria-labelledby="method-title">
      <div className="shell">
        <div className="section-intro section-intro--wide">
          <h2 id="method-title">From repeated demonstrations to policy conditions.</h2>
          <p>
            CRAVE finds configurations that recur across independently collected episodes, decodes them jointly over each
            full trajectory, and relabels policy rows by future progress increment.
          </p>
        </div>

        <div className="method-groups">
          {groups.map((group) => (
            <section className="method-group" key={group.title}>
              <header>
                <h3>{group.title}</h3>
                <p>{group.subtitle}</p>
              </header>
              <div className={`method-group__stages method-group__stages--${group.stages.length}`}>
                {group.stages.map((stage, index) => (
                  <article className="method-stage" key={stage.number}>
                    <div className="method-stage__title">
                      <span>{stage.number}</span>
                      <h4>{stage.title}</h4>
                    </div>
                    <StageVisual type={stage.visual} />
                    <p>{stage.detail}</p>
                    {index < group.stages.length - 1 && <span className="flow-arrow" aria-hidden="true">→</span>}
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="method-contract">
          <strong>Progress conditions, not value targets.</strong>
          <span>Offline relabeling only · policy architecture unchanged at deployment</span>
        </div>
      </div>
    </section>
  )
}
