'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'

const GA_ID = 'G-MCG3V1FK4Y'
const SPEICHER = 'cookie-consent'

/*
  Cookie-Einwilligung mit Auswahl pro Kategorie.

  Vorher war das eine Ja/Nein-Entscheidung. Das ist zu grob: wer die
  Reichweitenmessung erlauben, aber keine Werbesignale senden will, hatte
  keine Wahl. Jetzt gibt es je Kategorie einen Schalter und einen Knopf
  "Auswahl speichern" — dazu weiterhin "Alle akzeptieren" und "Nur
  notwendige" gleich gross nebeneinander, damit Zustimmen und Ablehnen
  denselben Aufwand kosten.

  WAS DIE SEITE TATSAECHLICH LAEDT (im Code nachgezaehlt, nicht geraten):

    - Google Analytics 4 (GA_ID) — der einzige echte Drittanbieter.
    - Vercel Analytics — laeuft ohne Cookies und ohne wiedererkennbare
      Kennung, braucht daher keine Einwilligung.
    - Schriften: next/font/google liefert sie beim Bauen mit aus, es geht
      keine Anfrage an Google.
    - Cal.com und der Blog sind reine Links, keine Einbettung.
    - Web3Forms bekommt nur beim Absenden des Formulars Daten — vom
      Nutzer ausgeloest, deshalb technisch notwendig.
    - Der YouTube-Zweig in scroll-expansion-hero.tsx ist toter Code: die
      Videos liegen als MP4 in public/.

  Daraus folgen genau drei Kategorien, und keine erfundene vierte.
*/

type Auswahl = { statistik: boolean; marketing: boolean }
const KEINE: Auswahl = { statistik: false, marketing: false }
const ALLE: Auswahl = { statistik: true, marketing: true }

type Kategorie = {
  id: 'notwendig' | 'statistik' | 'marketing'
  titel: string
  zweck: string
  eintraege: { name: string; dauer: string; was: string }[]
}

const KATEGORIEN: Kategorie[] = [
  {
    id: 'notwendig',
    titel: 'Technisch notwendig',
    zweck: 'Damit die Seite funktioniert und Ihre Entscheidung hier erhalten bleibt. Lässt sich nicht abschalten — ohne diese Speicherung müssten wir Sie bei jedem Besuch neu fragen.',
    eintraege: [
      { name: 'cookie-consent', dauer: 'bis zum Widerruf', was: 'Ihre Auswahl in diesem Fenster. Liegt im localStorage Ihres Browsers, wird nicht an uns übertragen.' },
      { name: 'Formularversand', dauer: 'kein Cookie', was: 'Beim Absenden des Anfrageformulars gehen Ihre Angaben an unseren Versanddienst Web3Forms. Nur dann, und nur auf Ihren Klick.' },
    ],
  },
  {
    id: 'statistik',
    titel: 'Statistik',
    zweck: 'Zeigt uns, welche Seiten gelesen werden und worüber Besucher zu uns finden. Danach richten wir aus, woran wir arbeiten.',
    eintraege: [
      { name: '_ga', dauer: '2 Jahre', was: 'Google Analytics: unterscheidet Besucher voneinander. IP-Adresse wird gekürzt.' },
      { name: `_ga_${GA_ID.replace('G-', '')}`, dauer: '2 Jahre', was: 'Google Analytics: hält den Zustand Ihrer Sitzung.' },
    ],
  },
  {
    id: 'marketing',
    titel: 'Marketing',
    zweck: 'Erlaubt Google, Ihren Besuch für Werbezwecke auszuwerten. Offen gesagt: Wir schalten derzeit keine Werbung, es ist also aktuell nichts angeschlossen, was diese Signale nutzt. Der Schalter steht trotzdem hier, damit die Antwort schon feststeht, falls sich das ändert.',
    eintraege: [
      { name: 'ad_storage, ad_user_data, ad_personalization', dauer: 'kein eigenes Cookie', was: 'Einwilligungssignale, die wir an Google senden. Stehen ohne Ihre Zustimmung auf „verweigert".' },
    ],
  },
]

function setzeAttribut(gesetzt: boolean) {
  document.documentElement.dataset.cookieConsent = gesetzt ? 'set' : 'none'
}

function lesen(): Auswahl | null {
  try {
    const roh = localStorage.getItem(SPEICHER)
    if (roh === null) return null
    // Alte Fassung kannte nur 'accepted'/'declined'. Diese Wahl bleibt
    // gueltig — wer damals zugestimmt hat, wird nicht neu gefragt.
    if (roh === 'accepted') return ALLE
    if (roh === 'declined') return KEINE
    const o = JSON.parse(roh)
    return { statistik: !!o.statistik, marketing: !!o.marketing }
  } catch {
    return null
  }
}

function loescheGoogleCookies() {
  const basis = location.hostname.replace(/^www\./, '')
  for (const roh of document.cookie.split(';')) {
    const name = roh.trim().split('=')[0]
    if (!/^(_ga|_gid|_gat|_gcl)/.test(name)) continue
    // Google setzt auf die Basisdomain; die Varianten decken localhost
    // und Vorschau-Domains mit ab.
    for (const d of ['', `; domain=${location.hostname}`, `; domain=.${basis}`]) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d}`
    }
  }
}

function Schalter({ an, aus, gesperrt, label }: { an: boolean; aus: () => void; gesperrt?: boolean; label: string }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={an}
      aria-label={label}
      disabled={gesperrt}
      onClick={aus}
      className={`cookie-schieber${an ? ' an' : ''}${gesperrt ? ' gesperrt' : ''}`}
    >
      <span className="cookie-schieber-knopf" />
    </button>
  )
}

export default function CookieConsent() {
  const [offen, setOffen] = useState(false)
  const [entschieden, setEntschieden] = useState(false)
  const [wahl, setWahl] = useState<Auswahl>(KEINE)
  // Steuert, ob gtag.js ueberhaupt angefordert wird. Vorher lud es
  // immer — auch gegen die Ablehnung — und schickte cookielose Pings an
  // Google, also Datenuebertragung ohne Einwilligung.
  const [googleGeladen, setGoogleGeladen] = useState(false)

  useEffect(() => {
    const gespeichert = lesen()
    if (!gespeichert) return
    setWahl(gespeichert)
    setEntschieden(true)
    if (gespeichert.statistik || gespeichert.marketing) setGoogleGeladen(true)
  }, [])

  const uebernehmen = (neu: Auswahl) => {
    localStorage.setItem(SPEICHER, JSON.stringify(neu))
    setWahl(neu)
    setEntschieden(true)
    setOffen(false)
    setzeAttribut(true)

    const braucht = neu.statistik || neu.marketing
    const w = window as unknown as { gtag?: (...a: unknown[]) => void }
    w.gtag?.('consent', 'update', {
      analytics_storage: neu.statistik ? 'granted' : 'denied',
      ad_storage: neu.marketing ? 'granted' : 'denied',
      ad_user_data: neu.marketing ? 'granted' : 'denied',
      ad_personalization: neu.marketing ? 'granted' : 'denied',
    })

    if (braucht) { setGoogleGeladen(true); return }

    loescheGoogleCookies()
    // Lief Google in dieser Sitzung bereits, ist Neuladen der einzige
    // Weg, der es sicher beendet. Der gespeicherte Eintrag sorgt dafuer,
    // dass es danach nicht wieder startet.
    if (googleGeladen) location.reload()
  }

  const umschalten = (id: 'statistik' | 'marketing') =>
    setWahl((v) => ({ ...v, [id]: !v[id] }))

  const wieder = () => { setWahl(lesen() ?? KEINE); setOffen(true); setzeAttribut(false) }

  return (
    <>
      {/* Laeuft im Head, vor dem ersten Bild: blendet das Fenster fuer
          Wiederkehrer aus, bevor es aufblitzt, und setzt den
          Consent-Standard, bevor gtag.js ueberhaupt laden koennte.
          Laedt selbst nichts von aussen. */}
      <Script id="ga-consent-default" strategy="beforeInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;

        var w = { statistik: false, marketing: false }, gesetzt = false;
        try {
          var roh = localStorage.getItem('${SPEICHER}');
          if (roh !== null) {
            gesetzt = true;
            if (roh === 'accepted') w = { statistik: true, marketing: true };
            else if (roh !== 'declined') {
              var o = JSON.parse(roh);
              w = { statistik: !!o.statistik, marketing: !!o.marketing };
            }
          }
        } catch (e) {}

        document.documentElement.dataset.cookieConsent = gesetzt ? 'set' : 'none';

        gtag('consent', 'default', {
          analytics_storage: w.statistik ? 'granted' : 'denied',
          ad_storage: w.marketing ? 'granted' : 'denied',
          ad_user_data: w.marketing ? 'granted' : 'denied',
          ad_personalization: w.marketing ? 'granted' : 'denied'
        });
      `}</Script>

      {googleGeladen && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-config" strategy="afterInteractive">{`
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { anonymize_ip: true });
          `}</Script>
        </>
      )}

      {/* Steht immer im ausgelieferten HTML und wird per CSS versteckt
          (html[data-cookie-consent='set']). Wuerde er erst nach der
          Hydration gerendert, erschiene er gemessen nach rund 3,3
          Sekunden und waere damit das groesste zuletzt gezeichnete
          Element — also der LCP-Wert, den Google bewertet. */}
      <div className="cookie-banner" role="dialog" aria-labelledby="cookie-titel">
          <div className="cookie-banner-inner">
            {/* Nur dieser Teil scrollt. Die Knoepfe stehen bewusst
                ausserhalb: mit drei Kategorien wurde das Fenster auf dem
                iPhone 699px hoch, und "Alle akzeptieren" wie "Nur
                notwendige" lagen gemessen ausserhalb des Sichtfelds —
                erreichbar nur, wer im Banner scrollt. */}
            <div className="cookie-banner-scroll">
            <h2 id="cookie-titel">Privatsphäre-Einstellungen</h2>
            <p>
              Diese Seite setzt von sich aus keine Cookies. Nur wenn Sie unten zustimmen,
              messen wir mit Google Analytics, wie die Seite genutzt wird. Sie entscheiden
              für jede Kategorie einzeln — und können das jederzeit über das Keks-Symbol
              unten links wieder ändern.
            </p>

            <ul className="cookie-kategorien">
              {KATEGORIEN.map((k) => {
                const notwendig = k.id === 'notwendig'
                const an = notwendig ? true : wahl[k.id as 'statistik' | 'marketing']
                return (
                  <li key={k.id}>
                    <div className="cookie-kat-kopf">
                      <span className="cookie-kat-titel">
                        {k.titel}
                        {notwendig && <em>immer aktiv</em>}
                      </span>
                      <Schalter
                        an={an}
                        gesperrt={notwendig}
                        label={k.titel}
                        aus={() => !notwendig && umschalten(k.id as 'statistik' | 'marketing')}
                      />
                    </div>
                    <p>{k.zweck}</p>
                    <details>
                      <summary>Was genau wird gespeichert?</summary>
                      <ul>
                        {k.eintraege.map((e) => (
                          <li key={e.name}>
                            <strong>{e.name}</strong> · {e.dauer}
                            <span>{e.was}</span>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                )
              })}
            </ul>

            <p className="cookie-rechtliches">
              <a href="/datenschutz">Datenschutzerklärung</a>
              <a href="/impressum">Impressum</a>
            </p>
            </div>

            <div className="cookie-banner-aktionen">
              {/* Zustimmen und Ablehnen stehen gleich gross nebeneinander.
                  Ein Ablehnen, das schwerer zu finden ist als das
                  Zustimmen, ist keine freie Entscheidung. */}
              <button onClick={() => uebernehmen(ALLE)} className="btn-primary">
                Alle akzeptieren
              </button>
              <button onClick={() => uebernehmen(KEINE)} className="btn-secondary">
                Nur notwendige
              </button>
              <button onClick={() => uebernehmen(wahl)} className="btn-secondary cookie-speichern">
                Auswahl speichern
              </button>
            </div>
          </div>
      </div>

      {entschieden && !offen && (
        <button
          type="button"
          className="cookie-schalter"
          onClick={wieder}
          aria-label="Privatsphäre-Einstellungen ändern"
          title="Privatsphäre-Einstellungen ändern"
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
