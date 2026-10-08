import { useEffect, useState } from 'react'
import { nav, BOOKING_URL } from '../data/content'
import { Icon } from './shared'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled || open ? 'navbar--solid' : ''}`}>
      <div className="container navbar__inner">
        <a href="#" className="logo" aria-label="Automatiza360">
          <span className="logo__mark">A</span>
          Automatiza<span className="logo__360">360</span>
        </a>

        <nav className={`navbar__links ${open ? 'is-open' : ''}`} aria-label="Principal">
          {nav.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href={BOOKING_URL} className="btn btn--primary btn--sm navbar__mobile-cta" onClick={() => setOpen(false)}>
            Reserva una llamada
          </a>
        </nav>

        <button className="navbar__toggle" onClick={() => setOpen(!open)}
          aria-label="Abrir menú" aria-expanded={open}>
          <span className="bars" data-open={open} />
        </button>
      </div>
    </header>
  )
}
