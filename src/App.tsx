import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProblemTimeline } from './components/ProblemTimeline'
import { MethodPipeline } from './components/MethodPipeline'
import { Results } from './components/Results'
import { RobotGallery } from './components/RobotGallery'
import { Resources } from './components/Resources'

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div id="top" />
      <Header />
      <main id="main">
        <Hero />
        <ProblemTimeline />
        <MethodPipeline />
        <Results />
        <RobotGallery />
        <Resources />
      </main>
      <footer className="footer shell">
        <a className="wordmark" href="#top">CRAVE</a>
        <p>Recovering progress from repeated demonstrations.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  )
}

export default App
