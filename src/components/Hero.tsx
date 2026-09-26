import { foldingFrames, taskMedia } from '../data/media'
import { links } from '../data/links'

export function Hero() {
  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero__copy">
        <h1 id="hero-title">
          <span>Recover progress</span>
          <span>from repeated robot</span>
          <span>demonstrations.</span>
        </h1>
        <p>
          CRAVE turns recurrent visual–state structure into ordinal conditions for contact-rich robot policy
          post-training—without a separately trained value or advantage estimator.
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href={links.paper} target="_blank" rel="noreferrer">
            Read the paper <span aria-hidden="true">→</span>
          </a>
          <a className="button button--secondary" href="#demos">
            Watch robot demos <span aria-hidden="true">▶</span>
          </a>
        </div>
      </div>

      <div className="hero-atlas" aria-label="Real robot demonstrations for garment folding, nail painting and ordered writing">
        <article className="hero-atlas__folding">
          <header>
            <h2>Garment folding</h2>
            <span>bimanual / deformable</span>
          </header>
          <div className="folding-strip">
            {[foldingFrames[0], foldingFrames[2], foldingFrames[5]].map((frame, index) => (
              <figure key={frame.src}>
                <img src={frame.src} alt={`Garment folding: ${frame.label}`} />
                <figcaption>
                  <span>{index + 1}</span> {frame.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </article>
        <div className="hero-atlas__secondary">
          {[taskMedia.nail, taskMedia.writing].map((task) => (
            <article key={task.title}>
              <img src={task.poster} alt={`${task.title}: ${task.descriptor}`} />
              <div>
                <h3>{task.title}</h3>
                <p>{task.descriptor}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
