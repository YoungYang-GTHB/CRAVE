import { useState } from 'react'
import { bibtex, links } from '../data/links'

const resources = [
  { label: 'Paper PDF', detail: 'Current public preprint', href: links.paper },
  { label: 'Supplementary', detail: 'Protocols, details and additional results', href: links.supplement },
  { label: 'OpenReview', detail: 'ICLR submission record', href: links.openreview },
  { label: 'Code', detail: 'Project repository · release in progress', href: links.code },
]

export function Resources() {
  const [copied, setCopied] = useState(false)
  async function copyCitation() {
    await navigator.clipboard.writeText(bibtex)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <section className="resources section shell" id="resources" aria-labelledby="resources-title">
      <div className="section-intro">
        <h2 id="resources-title">Read, inspect, reproduce.</h2>
        <p>The manuscript and project artifacts are collected here as release gates clear.</p>
      </div>
      <div className="resource-rail">
        {resources.map((resource) => (
          <a href={resource.href} target="_blank" rel="noreferrer" key={resource.label}>
            <span><strong>{resource.label}</strong><small>{resource.detail}</small></span>
            <b aria-hidden="true">↗</b>
          </a>
        ))}
      </div>
      <div className="citation-block">
        <div><h3>Citation</h3><p>Cite CRAVE in your work.</p></div>
        <pre><code>{bibtex}</code></pre>
        <button type="button" onClick={copyCitation} aria-live="polite">{copied ? 'Copied' : 'Copy BibTeX'}</button>
      </div>
    </section>
  )
}
