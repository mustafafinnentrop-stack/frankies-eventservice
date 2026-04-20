'use client'

import { useState } from 'react'
import LegalOverlay from './LegalOverlay'

export default function Footer() {
  const [legal, setLegal] = useState<'impressum' | 'datenschutz' | null>(null)

  return (
    <>
      <footer>
        <div className="footer-inner">
          <p className="footer-copy">
            &copy; 2026 Frankies Eventservice — Mustafa Yildirim. Alle Rechte vorbehalten.
          </p>
          <div className="footer-links">
            <a href="#" onClick={(e) => { e.preventDefault(); setLegal('impressum') }}>Impressum</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setLegal('datenschutz') }}>Datenschutz</a>
          </div>
        </div>
      </footer>

      {legal && <LegalOverlay id={legal} onClose={() => setLegal(null)} />}
    </>
  )
}
