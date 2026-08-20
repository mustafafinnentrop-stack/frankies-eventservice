'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'

const GA_ID = 'G-MCG3V1FK4Y'

/*
  Cookie-Einwilligung.

  Der Banner steht im ausgelieferten HTML und wird per CSS versteckt, statt
  erst nach der Hydration gerendert zu werden — sonst ist er das groesste
  zuletzt gezeichnete Element und damit der LCP-Wert, den Google bewertet
  (gemessen: erschien vorher erst nach rund 3,3 Sekunden). Gesteuert ueber
  ein Attribut am <html>-Element, das das beforeInteractive-Script setzt.

  Was die Seite tatsaechlich speichert — und nur das steht auch im Banner:

    Ohne Zustimmung:  gar kein Cookie. Nur die Auswahl selbst liegt im
                      localStorage ('cookie-consent'), das ist die
                      technisch notwendige Speicherung.
    Mit Zustimmung:   _ga und _ga_<ID> von Google Analytics (2 Jahre).
    Immer:            Vercel Analytics laeuft ohne Cookies und ohne
                      seitenuebergreifende Kennung.

  Drei Regeln, alle hier im Code nachpruefbar:

  1. gtag.js laedt erst NACH der Zustimmung (analyticsAktiv). Vorher ging
     das Script immer raus und schickte auch bei Ablehnung cookielose
     Pings an Google — Datenuebertragung ohne Einwilligung.
  2. Bei Ablehnung werden vorhandene _ga-Cookies geloescht.
  3. War Analytics in dieser Sitzung schon geladen (Widerruf nach
     Zustimmung), laedt die Seite neu — nur so ist das bereits laufende
     gtag wirklich weg.
*/

type Zustand = 'accepted' | 'declined' | 'none'

function setzeZustand(z: Zustand) {
  document.documentElement.dataset.cookieConsent = z
}

function loescheAnalyticsCookies() {
  const namen = document.cookie.split(';').map((c) => c.trim().split('=')[0])
  const basis = location.hostname.replace(/^www\./, '')
  for (const name of namen) {
    if (name !== '_ga' && !name.startsWith('_ga_') && name !== '_gid' && name !== '_gat') continue
    // Google setzt die Cookies auf die Basisdomain; die Varianten decken
    // localhost und Vorschau-Domains mit ab.
    for (const domain of ['', `; domain=${location.hostname}`, `; domain=.${basis}`]) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`
    }
  }
}

const COOKIE_LISTE = [
  { name: 'cookie-consent', art: 'Notwendig', dauer: 'bis zum Widerruf', zweck: 'Speichert Ihre Auswahl in diesem Banner (localStorage, kein Cookie im engeren Sinn). Ohne sie müssten wir bei jedem Besuch neu fragen.' },
  { name: '_ga', art: 'Statistik — nur nach Zustimmung', dauer: '2 Jahre', zweck: 'Google Analytics: unterscheidet Besucher, anonymisierte IP.' },
  { name: `_ga_${GA_ID.replace('G-', '')}`, art: 'Statistik — nur nach Zustimmung', dauer: '2 Jahre', zweck: 'Google Analytics: hält den Sitzungszustand.' },
]

export default function CookieConsent() {
  // Der Schalter unten links erscheint erst, wenn eine Entscheidung
  // vorliegt; Analytics laedt erst, wenn sie "accepted" lautet.
  const [entschieden, setEntschieden] = useState(false)
  const [analyticsAktiv, setAnalyticsAktiv] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('cookie-consent')
    setEntschieden(stored !== null)
    if (stored === 'accepted') setAnalyticsAktiv(true)
  }, [])

  const entscheide = (granted: boolean) => {
    localStorage.setItem('cookie-consent', granted ? 'accepted' : 'declined')
    setzeZustand(granted ? 'accepted' : 'declined')
    setEntschieden(true)

    if (granted) {
      const w = window as unknown as { gtag?: (...args: unknown[]) => void }
      w.gtag?.('consent', 'update', {
        ad_storage: 'granted', ad_user_data: 'granted',
        ad_personalization: 'granted', analytics_storage: 'granted',
      })
      setAnalyticsAktiv(true)
      return
    }

    loescheAnalyticsCookies()
    if (analyticsAktiv) {
      // gtag laeuft bereits in dieser Seite. Neu laden ist der einzige
      // Weg, der es sicher beendet — erst nach dem Loeschen der Cookies,
      // und der localStorage-Eintrag sorgt dafuer, dass es nach dem
      // Neuladen nicht wieder startet.
      location.reload()
    }
  }

  const erneutFragen = () => {
    setzeZustand('none')
    setEntschieden(false)
  }

  return (
    <>
      {/* Laeuft im Head, vor dem ersten Bild: blendet den Banner fuer
          Wiederkehrer aus und setzt den Consent-Mode-Standard, bevor
          gtag.js (falls zugestimmt) laedt. Laedt selbst nichts von aussen. */}
      <Script id="ga-consent-default" strategy="beforeInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;

        var stored = null;
        try { stored = localStorage.getItem('cookie-consent'); } catch (e) {}
        var granted = stored === 'accepted';

        document.documentElement.dataset.cookieConsent = stored || 'none';

        gtag('consent', 'default', {
          ad_storage: granted ? 'granted' : 'denied',
          ad_user_data: granted ? 'granted' : 'denied',
          ad_personalization: granted ? 'granted' : 'denied',
          analytics_storage: granted ? 'granted' : 'denied'
        });
      `}</Script>

      {analyticsAktiv && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-config" strategy="afterInteractive">{`
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { anonymize_ip: true });
          `}</Script>
        </>
      )}

      <div className="cookie-banner" role="dialog" aria-label="Cookie-Einstellungen">
        <div className="cookie-banner-inner">
          <p>
            Ohne Ihre Zustimmung setzt diese Seite keine Cookies — gespeichert wird nur
            Ihre Auswahl selbst. Stimmen Sie zu, misst Google Analytics die Nutzung der
            Seite (zwei Cookies, anonymisierte IP). Unsere eigene Reichweitenmessung
            (Vercel) kommt ohne Cookies aus.{' '}
            <a href="/datenschutz">Datenschutzerklärung</a>
          </p>
          <details className="cookie-details">
            <summary>Welche Cookies genau?</summary>
            <ul>
              {COOKIE_LISTE.map((c) => (
                <li key={c.name}>
                  <strong>{c.name}</strong> · {c.art} · {c.dauer}
                  <span>{c.zweck}</span>
                </li>
              ))}
            </ul>
          </details>
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
