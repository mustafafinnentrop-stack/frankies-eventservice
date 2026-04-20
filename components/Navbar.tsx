'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const services = [
  { href: '/cocktailbar-lennestadt', label: 'Mobile Cocktailbar' },
  { href: '/getraenkeservice-schuetzenfest', label: 'Getränkeservice Schützenfest' },
  { href: '/hochzeit-sauerland', label: 'Thekenservice Hochzeit' },
  { href: '/eventservice-kreis-olpe', label: 'Eventservice Kreis Olpe' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    if (!isHome) {
      window.location.href = `/#${id}`
      return
    }
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const href = (id: string) => isHome ? `#${id}` : `/#${id}`

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <a href="/" className="nav-logo">
          Frankies<span>Eventservice</span>
        </a>

        <ul className="nav-links">
          <li
            style={{ position: 'relative' }}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <a href={href('leistungen')} onClick={(e) => { e.preventDefault(); scrollTo('leistungen') }}>
              Leistungen ▾
            </a>
            {dropdownOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'var(--color-surface)',
                border: '1px solid rgba(200,164,78,0.18)',
                minWidth: '240px',
                padding: '0.4rem 0',
                zIndex: 300,
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }}>
                {services.map(s => (
                  <a
                    key={s.href}
                    href={s.href}
                    style={{
                      display: 'block',
                      padding: '0.65rem 1.25rem',
                      fontSize: '0.78rem',
                      color: 'var(--color-text-muted)',
                      textDecoration: 'none',
                      letterSpacing: '0.04em',
                      whiteSpace: 'nowrap',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = 'var(--color-gold)')}
                    onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = 'var(--color-text-muted)')}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </li>
          <li><a href={href('cocktailbar')} onClick={(e) => { e.preventDefault(); scrollTo('cocktailbar') }}>Cocktailbar</a></li>
          <li><a href={href('ueber')} onClick={(e) => { e.preventDefault(); scrollTo('ueber') }}>Über uns</a></li>
          <li><a href={href('ablauf')} onClick={(e) => { e.preventDefault(); scrollTo('ablauf') }}>Ablauf</a></li>
          <li><a href={href('region')} onClick={(e) => { e.preventDefault(); scrollTo('region') }}>Region</a></li>
          <li>
            <a href={href('kontakt')} className="nav-cta" onClick={(e) => { e.preventDefault(); scrollTo('kontakt') }}>
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
        {['leistungen', 'cocktailbar', 'ueber', 'ablauf', 'region'].map((id) => (
          <a key={id} href={href(id)} onClick={(e) => { e.preventDefault(); scrollTo(id) }}>
            {id === 'ueber' ? 'Über uns' : id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
        <div style={{ borderTop: '1px solid rgba(200,164,78,0.12)', margin: '0.5rem 0 0' }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--color-gold)', padding: '0.75rem 1.5rem 0.25rem', textTransform: 'uppercase' }}>
            Leistungen
          </p>
          {services.map(s => (
            <a key={s.href} href={s.href} onClick={() => setMobileOpen(false)}>
              {s.label}
            </a>
          ))}
        </div>
        <a href={href('kontakt')} onClick={(e) => { e.preventDefault(); scrollTo('kontakt') }}>
          Kontakt
        </a>
      </div>
    </>
  )
}
