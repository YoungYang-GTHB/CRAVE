type DetailStage = {
  number: number
  title: string
  detail: string
}

const detailStages: DetailStage[] = [
  { number: 1, title: 'Repeated episodes', detail: 'RGB sequences aligned with synchronized robot state.' },
  { number: 2, title: 'Frozen visual features', detail: 'DINOv3 encodes appearance without task-specific representation training.' },
  { number: 3, title: 'Joint evidence', detail: 'Visual features are fused with standardized 14-D robot state.' },
  { number: 4, title: 'Recurrent components', detail: 'A diagonal BGMM discovers configurations shared across demonstrations.' },
  { number: 5, title: 'Coverage screen', detail: 'Components must receive support from enough distinct episodes.' },
  { number: 6, title: 'Whole-episode decoding', detail: 'An anchored path permits pauses and local reversals while preserving global coherence.' },
  { number: 7, title: 'Future progress increment', detail: 'Each policy row receives a task-relative progress change over horizon H.' },
  { number: 8, title: 'Ordinal conditions', detail: 'LOW, MIDDLE and HIGH increments condition AWBC post-training.' },
]

function EpisodeVisual() {
  return (
    <div className="macro-episodes" aria-hidden="true">
      {[0, 1, 2].map((row) => <div key={row}>{[0, 1, 2, 3].map((item) => <i key={item} />)}</div>)}
      <span>RGB</span><span>+</span><span>state</span>
    </div>
  )
}

function FusionVisual() {
  return (
    <div className="macro-fusion" aria-hidden="true">
      <div><i /><i /><i /><b>frozen visual</b></div>
      <span>+</span>
      <div className="macro-state"><i /><i /><i /><i /><i /><b>14-D state</b></div>
      <span>→</span><strong>h<sub>i,t</sub></strong>
    </div>
  )
}

function StructureVisual() {
  return (
    <div className="macro-structure" aria-hidden="true">
      <div className="macro-clusters">{Array.from({ length: 18 }, (_, index) => <i className={`cluster-${index % 3}`} key={index} />)}</div>
      <span>coverage</span>
      <svg viewBox="0 0 210 62"><path d="M5 52 C38 38, 55 45, 78 32 S120 22, 143 35 S178 18, 205 8" /><circle cx="5" cy="52" r="3" /><circle cx="205" cy="8" r="3" /></svg>
    </div>
  )
}

function ConditionsVisual() {
  return (
    <div className="macro-conditions" aria-hidden="true">
      <div><span>LOW</span><span>MIDDLE</span><span>HIGH</span></div>
      <b>→</b><strong>π0.5<small>AWBC</small></strong>
    </div>
  )
}

const macroSteps = [
  {
    number: 1,
    title: 'Repeated episodes',
    text: 'Align RGB observations with synchronized robot state.',
    visual: <EpisodeVisual />,
  },
  {
    number: 2,
    title: 'Joint visual–state evidence',
    text: 'Fuse frozen visual features with standardized state cues.',
    visual: <FusionVisual />,
  },
  {
    number: 3,
    title: 'Recurrent structure + progress',
    text: 'Keep cross-episode structure and decode a coherent trajectory path.',
    visual: <StructureVisual />,
  },
  {
    number: 4,
    title: 'Ordinal relabeling + AWBC',
    text: 'Turn future progress increments into policy conditions.',
    visual: <ConditionsVisual />,
  },
]

export function MethodPipeline() {
  return (
    <section className="method section" id="method" aria-labelledby="method-title">
      <div className="shell">
        <div className="section-intro section-intro--wide">
          <span className="eyebrow">Method</span>
          <h2 id="method-title">Recover structure before assigning labels.</h2>
          <p>
            CRAVE finds configurations that recur across independently collected demonstrations, screens them by
            cross-episode support, and decodes each full trajectory before producing policy conditions.
          </p>
        </div>

        <div className="macro-pipeline">
          {macroSteps.map((step, index) => (
            <article className="macro-step" key={step.number}>
              <header><span>{step.number}</span><h3>{step.title}</h3></header>
              <p>{step.text}</p>
              {step.visual}
              {index < macroSteps.length - 1 && <b className="macro-arrow" aria-hidden="true">→</b>}
            </article>
          ))}
        </div>

        <div className="method-contract">
          <strong>Progress conditions, not value targets.</strong>
          <span>Offline relabeling only · policy architecture unchanged at deployment</span>
        </div>

        <details className="pipeline-details">
          <summary>Explore the full eight-stage pipeline <span aria-hidden="true">↓</span></summary>
          <ol>
            {detailStages.map((stage) => (
              <li key={stage.number}>
                <span>{stage.number}</span>
                <div><h4>{stage.title}</h4><p>{stage.detail}</p></div>
              </li>
            ))}
          </ol>
        </details>
      </div>
    </section>
  )
}
