import { useEffect, useState } from 'react'

const navigation = [
  ['Method', '#method'],
  ['Results', '#results'],
  ['Robot demos', '#demos'],
  ['Paper', '#resources'],
] as const

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <header className="site-header">
      <div className="site-header__inner shell">
        <a className="wordmark" href="#top" aria-label="CRAVE home">
          CRAVE
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav id="site-navigation" className={`site-nav ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
          {navigation.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="site-nav__code" href="https://github.com/YoungYang-GTHB/CRAVE" target="_blank" rel="noreferrer">
            Code <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
