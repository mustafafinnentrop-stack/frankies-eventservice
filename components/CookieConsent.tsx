'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'
import LegalOverlay from './LegalOverlay'

const GA_ID = 'G-B8C59NNPY7'

export default function CookieConsent() {
  const [consent, setConsent] = useState<'accepted' | 'declined' | null>(null)
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('cookie-consent') as 'accepted' | 'declined' | null
    if (stored) setConsent(stored)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setConsent('accepted')
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setConsent('declined')
  }

  if (!mounted) return null

  return (
    <>
      {consent === 'accepted' && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { anonymize_ip: true });
          `}</Script>
        </>
      )}

      {consent === null && (
        <div style={{
          position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9998,
          background: 'var(--color-surface)',
          borderTop: '1px solid rgba(200,164,78,0.25)',
          padding: '1.25rem 2rem',
        }}>
          <div style={{
            maxWidth: '1100px', margin: '0 auto',
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap', gap: '1rem',
          }}>
            <p style={{
              fontSize: '0.82rem', color: 'var(--color-text-muted)',
              fontWeight: 300, lineHeight: 1.6, maxWidth: '680px', margin: 0,
            }}>
              Wir nutzen Cookies und Google Analytics, um die Nutzung unserer Website zu analysieren
              und unser Angebot zu verbessern. Technisch notwendige Cookies sind immer aktiv.{' '}
              <button
                onClick={() => setShowPrivacy(true)}
                style={{ background: 'none', border: 'none', padding: 0, color: 'var(--color-gold)', cursor: 'pointer', fontSize: 'inherit', textDecoration: 'underline' }}
              >
                Datenschutzerklärung
              </button>
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexShrink: 0, flexWrap: 'wrap' }}>
              <button onClick={decline} className="btn-secondary" style={{ fontSize: '0.78rem', padding: '0.65rem 1.1rem', whiteSpace: 'nowrap' }}>
                Nur notwendige
              </button>
              <button onClick={accept} className="btn-primary" style={{ fontSize: '0.78rem', padding: '0.65rem 1.1rem', whiteSpace: 'nowrap' }}>
                Alle akzeptieren →
              </button>
            </div>
          </div>
        </div>
      )}

      {showPrivacy && <LegalOverlay id="datenschutz" onClose={() => setShowPrivacy(false)} />}
    </>
  )
}
