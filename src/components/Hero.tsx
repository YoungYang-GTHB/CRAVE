import { useRef, useState } from 'react'
import { taskMedia } from '../data/media'
import { links } from '../data/links'

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoActive, setVideoActive] = useState(false)

  function playDemo() {
    setVideoActive(true)
    videoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    void videoRef.current?.play()
  }

  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero__copy">
        <span className="eyebrow">Learning from repeated demonstrations</span>
        <h1 id="hero-title">
          Recover progress from repeated robot demonstrations.
        </h1>
        <p>
          CRAVE discovers visual–state configurations that recur across demonstrations, reconstructs episode-consistent
          task progress, and turns it into conditions for policy post-training—without training a separate value model.
        </p>
        <div className="hero__actions">
          <button className="button button--primary" type="button" onClick={playDemo}>
            <span aria-hidden="true">▶</span> Watch the 48 s robot demo
          </button>
          <a className="hero__paper-link" href={links.paper} target="_blank" rel="noreferrer">
            Read the paper <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <figure className={`hero-media ${videoActive ? 'is-active' : ''}`} id="hero-video">
        <div className="hero-media__frame">
          <video
            ref={videoRef}
            controls={videoActive}
            playsInline
            preload="metadata"
            poster={taskMedia.folding.poster}
            onPlay={() => setVideoActive(true)}
            aria-label="CRAVE garment-folding robot demonstration"
          >
            <source src={taskMedia.folding.video} type="video/mp4" />
            Your browser does not support HTML video.
          </video>
          {!videoActive && (
            <button className="hero-media__play" type="button" onClick={playDemo} aria-label="Play the 48 second garment-folding demonstration">
              <span aria-hidden="true">▶</span>
            </button>
          )}
          <span className="hero-media__label">Garment folding · real robot</span>
          <div className="hero-progress" aria-hidden="true">
            <span><i />grasp</span>
            <span><i />align</span>
            <span><i />complete</span>
          </div>
        </div>
        <figcaption>One of three contact-rich robot studies.</figcaption>
      </figure>
    </section>
  )
}
