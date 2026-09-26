import { foldingFrames } from '../data/media'

const timelineFrames = [foldingFrames[0], foldingFrames[1], foldingFrames[2], foldingFrames[3], foldingFrames[5]]

export function ProblemTimeline() {
  return (
    <section className="problem section shell" id="problem" aria-labelledby="problem-title">
      <div className="section-intro section-intro--wide">
        <h2 id="problem-title">Frequency is not progress.</h2>
        <p>
          Long holds and repeated frames dominate behavior-cloning data. Brief grasp, contact and alignment transitions can
          matter more than their frame count suggests.
        </p>
      </div>

      <div className="timeline-panel">
        <div className="timeline-panel__frames">
          {timelineFrames.map((frame, index) => (
            <figure key={frame.src} className={index === 1 || index === 3 ? 'is-transition' : ''}>
              <img src={frame.src} alt={frame.label} />
              <figcaption>{index === 1 || index === 3 ? 'brief transition' : 'long hold'}</figcaption>
            </figure>
          ))}
        </div>
        <div className="timeline-track timeline-track--time">
          <span>normalized time</span>
          <svg viewBox="0 0 900 56" role="img" aria-label="Normalized time rises uniformly through holds and transitions">
            <path d="M12 46 L888 8" />
          </svg>
        </div>
        <div className="timeline-track timeline-track--progress">
          <span>recovered progress</span>
          <svg viewBox="0 0 900 66" role="img" aria-label="Recovered progress remains stable during holds and changes at transitions">
            <path d="M12 56 L185 55 L270 32 L470 32 L555 18 L760 18 L888 6" />
            <circle cx="270" cy="32" r="5" />
            <circle cx="555" cy="18" r="5" />
          </svg>
        </div>
      </div>
    </section>
  )
}
