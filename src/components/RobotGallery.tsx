import { taskMedia } from '../data/media'
import { taskEvidence } from '../data/results'

const tasks = [taskMedia.folding, taskMedia.nail, taskMedia.writing]

export function RobotGallery() {
  return (
    <section className="gallery section" id="demos" aria-labelledby="gallery-title">
      <div className="shell">
        <div className="section-intro section-intro--wide">
          <h2 id="gallery-title">Three contact-rich tasks. One relabeling route.</h2>
          <p>
            The same offline route spans deformable-object manipulation, fine tool–surface contact and ordered precision
            writing. Each evaluation keeps its own task-specific endpoint.
          </p>
        </div>
        <div className="media-grid">
          {tasks.map((task, index) => (
            <article className={`media-study ${index === 0 ? 'media-study--lead' : ''}`} key={task.title}>
              <video controls playsInline preload="metadata" poster={task.poster} aria-label={`${task.title} robot demonstration`}>
                <source src={task.video} type="video/mp4" />
                Your browser does not support HTML video.
              </video>
              <div className="media-study__copy">
                <h3>{task.title}</h3>
                <p>{task.descriptor}</p>
                <strong>{task.evidence}</strong>
                {task.title === 'Nail painting' && <small>Mean four-stage completion: SFT {taskEvidence.nail.sftCompletion}% · CRAVE {taskEvidence.nail.craveCompletion}%.</small>}
                {task.title === 'Ordered writing' && <small>CRAVE completes {taskEvidence.writing.successes} of {taskEvidence.writing.trials} unique rollouts after training on {taskEvidence.writing.demonstrations} demonstrations.</small>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
