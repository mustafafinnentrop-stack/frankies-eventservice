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
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <a
                href="https://www.facebook.com/share/17zxCGQ62q/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Frankies Eventservice auf Facebook"
                style={{ color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textDecoration: 'none' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                Facebook
              </a>
              <a
                href="https://www.instagram.com/frankies_eventservice"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Frankies Eventservice auf Instagram"
                style={{ color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textDecoration: 'none' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                Instagram
              </a>
              <div className="footer-links">
                <a href="#" onClick={(e) => { e.preventDefault(); setLegal('impressum') }}>Impressum</a>
                <a href="#" onClick={(e) => { e.preventDefault(); setLegal('datenschutz') }}>Datenschutz</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {legal && <LegalOverlay id={legal} onClose={() => setLegal(null)} />}
    </>
  )
}
