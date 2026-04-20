'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <a href="#hero" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollTo('hero') }}>
          Frankies<span>Eventservice</span>
        </a>
        <ul className="nav-links">
          <li><a href="#leistungen" onClick={(e) => { e.preventDefault(); scrollTo('leistungen') }}>Leistungen</a></li>
          <li><a href="#cocktailbar" onClick={(e) => { e.preventDefault(); scrollTo('cocktailbar') }}>Cocktailbar</a></li>
          <li><a href="#ueber" onClick={(e) => { e.preventDefault(); scrollTo('ueber') }}>Über uns</a></li>
          <li><a href="#ablauf" onClick={(e) => { e.preventDefault(); scrollTo('ablauf') }}>Ablauf</a></li>
          <li><a href="#region" onClick={(e) => { e.preventDefault(); scrollTo('region') }}>Region</a></li>
          <li>
            <a href="#kontakt" className="nav-cta" onClick={(e) => { e.preventDefault(); scrollTo('kontakt') }}>
              Kontakt
            </a>
          </li>
        </ul>
        <button
          className="mobile-toggle"
          aria-label="Menü öffnen"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${mobileOpen ? ' active' : ''}`}>
        {['leistungen', 'cocktailbar', 'ueber', 'ablauf', 'region', 'kontakt'].map((id) => (
          <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id) }}>
            {id === 'ueber' ? 'Über uns' : id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>
    </>
  )
}
