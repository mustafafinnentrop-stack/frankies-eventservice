'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'

const GA_ID = 'G-MCG3V1FK4Y'

/*
  Cookie-Einwilligung.

  Zwei Dinge sind hier anders als vorher.

  1) Der Banner steht jetzt im ausgelieferten HTML und wird per CSS
     versteckt, statt erst nach der Hydration gerendert zu werden.
     Vorher erschien er gemessen erst nach rund 3,3 Sekunden und war
     damit in der Haelfte der Messungen das groesste zuletzt gezeichnete
     Element der Seite — also der LCP-Wert, den Google bewertet. Jetzt
     zeichnet er mit dem ersten Bild.

     Gesteuert wird das ueber ein Attribut am <html>-Element, das das
     beforeInteractive-Script unten setzt. Das laeuft im Head, also vor
     dem ersten Bild — wer schon zugestimmt hat, sieht den Banner nie
     aufblitzen. Ohne JavaScript bleibt der Banner sichtbar; das ist die
     richtige Richtung, denn ohne JavaScript laedt auch kein Analytics.

  2) Die Einwilligung laesst sich jederzeit wieder aendern — ueber den
     kleinen Schalter unten links. Ein Widerruf muss so einfach sein wie
     die Zustimmung; vorher gab es dafuer keinen Weg ausser Cookies im
     Browser zu loeschen.
*/

type Zustand = 'accepted' | 'declined' | 'none'

function setzeZustand(z: Zustand) {
  document.documentElement.dataset.cookieConsent = z
}

export default function CookieConsent() {
  // Nur fuer den Schalter: der soll erst erscheinen, wenn eine
  // Entscheidung vorliegt. Vor der Hydration wissen wir die nicht, und
  // der Banner steht dann ohnehin im Weg.
  const [entschieden, setEntschieden] = useState(false)

  useEffect(() => {
    setEntschieden(localStorage.getItem('cookie-consent') !== null)
  }, [])

  const updateConsent = (granted: boolean) => {
    const w = window as unknown as { gtag?: (...args: unknown[]) => void }
    if (typeof w.gtag === 'function') {
      w.gtag('consent', 'update', {
        ad_storage: granted ? 'granted' : 'denied',
        ad_user_data: granted ? 'granted' : 'denied',
        ad_personalization: granted ? 'granted' : 'denied',
        analytics_storage: granted ? 'granted' : 'denied',
      })
    }
  }

  const entscheide = (granted: boolean) => {
    const wert = granted ? 'accepted' : 'declined'
    localStorage.setItem('cookie-consent', wert)
    setzeZustand(wert)
    setEntschieden(true)
    updateConsent(granted)
  }

  const erneutFragen = () => {
    setzeZustand('none')
    setEntschieden(false)
  }

  return (
    <>
      <Script id="ga-consent-default" strategy="beforeInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;

        var stored = null;
        try { stored = localStorage.getItem('cookie-consent'); } catch (e) {}
        var granted = stored === 'accepted';

        // Blendet den Banner aus, bevor das erste Bild gezeichnet wird.
        document.documentElement.dataset.cookieConsent = stored || 'none';

        gtag('consent', 'default', {
          ad_storage: granted ? 'granted' : 'denied',
          ad_user_data: granted ? 'granted' : 'denied',
          ad_personalization: granted ? 'granted' : 'denied',
          analytics_storage: granted ? 'granted' : 'denied',
          wait_for_update: 500
        });
      `}</Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-config" strategy="afterInteractive">{`
        gtag('js', new Date());
        gtag('config', '${GA_ID}', { anonymize_ip: true });
      `}</Script>

      <div className="cookie-banner" role="dialog" aria-label="Cookie-Einstellungen">
        <div className="cookie-banner-inner">
          <p>
            Wir nutzen Cookies und Google Analytics, um die Nutzung unserer Website zu analysieren
            und unser Angebot zu verbessern. Technisch notwendige Cookies sind immer aktiv.{' '}
            <a href="/datenschutz">Datenschutzerklärung</a>
          </p>
          <div className="cookie-banner-aktionen">
            <button onClick={() => entscheide(false)} className="btn-secondary">
              Nur notwendige
            </button>
            <button onClick={() => entscheide(true)} className="btn-primary">
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>

      {entschieden && (
        <button
          type="button"
          className="cookie-schalter"
          onClick={erneutFragen}
          aria-label="Cookie-Einstellungen ändern"
          title="Cookie-Einstellungen ändern"
        >
          {/* Keks: Kreis mit ein paar Stueckchen. 24x24-Raster und
              Strichstaerke 1.5 wie der uebrige Icon-Satz. */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="1.5"
               strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 3a9 9 0 1 0 9 9 3 3 0 0 1-4-4 3 3 0 0 1-5-5Z" />
            <path d="M9.5 11h.01M14 14.5h.01M10 16h.01M15.5 9.5h.01" />
          </svg>
        </button>
      )}
    </>
  )
}
