import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import { CinematicFooter } from '@/components/ui/motion-footer'
import StartseiteEffekte from '@/components/startseite/StartseiteEffekte'
import { REFERENZEN, type Referenz } from '@/components/referenzen-daten'
import '@/components/startseite/startseite.css'

const PAGE_URL = 'https://frankies-eventservice.de/einsaetze'

export const metadata: Metadata = {
  title: 'Unsere Einsätze | Frankies Eventservice',
  description:
    'Schützenfeste, Firmenfeiern, Hochzeiten, Cocktailbar: Wo Frankies Eventservice aus Lennestadt schon mit angepackt hat — mit echten Zahlen, und was als Nächstes ansteht.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: PAGE_URL,
    siteName: 'Frankies Eventservice',
    title: 'Unsere Einsätze | Frankies Eventservice',
    description: 'Wo Frankies Eventservice schon mit angepackt hat — Schützenfeste, Firmenfeiern, Hochzeiten, Cocktailbar. Mit echten Zahlen.',
    images: [{ url: 'https://frankies-eventservice.de/og/home.jpg', width: 1200, height: 630, alt: 'Frankies Eventservice im Einsatz' }],
  },
}

/*
  Alle Einsaetze aus components/referenzen-daten.ts, in der Reihenfolge
  der Datei: erst Gelaufenes, dann Gebuchtes als "Steht an". Die Startseite
  zeigt eine Auswahl von vier, hier steht die ganze Liste. Ein neuer
  Einsatz ist ein Eintrag in der Datendatei — diese Seite muss dafuer nicht
  angefasst werden.
*/
function zerlegen(r: Referenz) {
  // "Schuetzenfest Berghausen" -> Art "Schuetzenfest", Name "Berghausen";
  // "Hochzeit auf Schloss Melschede" -> Art "Hochzeit", Name "Schloss Melschede".
  const [art, ...rest] = r.ort.split(' ')
  const name = rest.join(' ').replace(/^auf /, '')
  return { art, name: name || r.ort }
}

export default function EinsaetzeSeite() {
  const gelaufen = REFERENZEN.filter((r) => !r.geplant)
  const geplant = REFERENZEN.filter((r) => r.geplant)

  const Liste = ({ eintraege, offset }: { eintraege: Referenz[]; offset: number }) => (
    <div>
      {eintraege.map((r, i) => {
        const { art, name } = zerlegen(r)
        return (
          <details className="sn-case sn-reveal" key={r.ort}>
            <summary>
              <span className="sn-case-index">{String(offset + i + 1).padStart(2, '0')}</span>
              <div>
                <span className="sn-case-type">{art}{r.geplant ? ' · Steht an' : ''}</span>
                <h3>{name}</h3>
              </div>
              <span className="sn-case-scope">{r.leistungen.join(' · ')}</span>
              <span className="sn-case-arrow" aria-hidden="true">↗</span>
            </summary>
            <div className="sn-case-body">
              <p>{r.geplant ? 'Gebucht — dieser Einsatz steht noch an.' : 'Durchgeführt mit eigener Mannschaft und eigenem Equipment.'}</p>
              <dl>
                <div><dt>Veranstaltung</dt><dd>{r.ort}</dd></div>
                <div><dt>Unser Einsatz</dt><dd>{r.leistungen.join(' · ')}</dd></div>
                {r.zahlen?.map((z) => (
                  <div key={z.was}><dt>{z.was}</dt><dd>{z.wert}</dd></div>
                ))}
              </dl>
            </div>
          </details>
        )
      })}
    </div>
  )

  return (
    <>
      <Navbar />
      <div className="content-layer sn">
        <StartseiteEffekte />
        <section className="sn-einsaetze sn-seite" aria-labelledby="einsaetze-titel">
          <div className="sn-top">
            <span className="sn-eyebrow">Unsere Einsätze</span>
            <span className="sn-note">Lennestadt · Kreis Olpe · Sauerland</span>
          </div>
          <div className="sn-einsaetze-heading">
            <h1 id="einsaetze-titel" className="sn-h1">Wo wir schon<br /><em>mit angepackt haben.</em></h1>
            <p>Echte Veranstaltungen, echte Zahlen.<br />Was gelaufen ist — und was als Nächstes ansteht.</p>
          </div>
          <Liste eintraege={gelaufen} offset={0} />

          {geplant.length > 0 && (
            <>
              <div className="sn-top sn-reveal" style={{ marginTop: '70px' }}>
                <span className="sn-eyebrow">Steht an</span>
                <span className="sn-note">Gebucht, noch nicht gelaufen.</span>
              </div>
              <Liste eintraege={geplant} offset={gelaufen.length} />
            </>
          )}

          <div className="sn-owner sn-reveal" style={{ marginTop: '70px' }}>
            <p>Ihr Fest soll das nächste sein?</p>
            <div>
              <span className="sn-owner-name">Mustafa Yildirim</span>
              <span className="sn-owner-role">Inhaber · Frankies Eventservice</span>
            </div>
            <a className="sn-link" href="tel:+4915142840916">Direkt anrufen <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </div>
      <CinematicFooter />
    </>
  )
}
