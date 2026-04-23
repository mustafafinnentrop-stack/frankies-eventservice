'use client'

import { useState } from 'react'
import LegalOverlay from './LegalOverlay'

export default function Footer() {
  const [legal, setLegal] = useState<'impressum' | 'datenschutz' | null>(null)

  return (
    <>
      <footer>
        <div className="footer-inner" style={{ flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1.5rem', width: '100%' }}>
            <a href="/cocktailbar-lennestadt" style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textDecoration: 'none' }}>Cocktailbar Lennestadt</a>
            <a href="/getraenkeservice-schuetzenfest" style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textDecoration: 'none' }}>Getränkeservice Schützenfest</a>
            <a href="/hochzeit-sauerland" style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textDecoration: 'none' }}>Thekenservice Hochzeit</a>
            <a href="/eventservice-kreis-olpe" style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textDecoration: 'none' }}>Eventservice Kreis Olpe</a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p className="footer-copy">&copy; 2026 Frankies Eventservice — Mustafa Yildirim. Alle Rechte vorbehalten.</p>
              <p className="footer-copy" style={{ marginTop: '0.25rem' }}>Hachener Str. 7 · 57368 Lennestadt</p>
            </div>
            <div className="footer-links">
              <a href="#" onClick={(e) => { e.preventDefault(); setLegal('impressum') }}>Impressum</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setLegal('datenschutz') }}>Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>

      {legal && <LegalOverlay id={legal} onClose={() => setLegal(null)} />}
    </>
  )
}
