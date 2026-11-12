import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { CinematicFooter } from '@/components/ui/motion-footer'
import StartseiteEffekte from '@/components/startseite/StartseiteEffekte'
import { WINTER_MIT_SCHUSS, WINTER_OHNE_ALKOHOL, WINTER_HINWEISE, WINTER_SAISON_TEXT, WINTER_ANLAESSE, type WinterGetraenk } from '@/components/winterbar-daten'
import '@/components/startseite/startseite.css'

const PAGE_URL = 'https://frankies-eventservice.de/winterbar'

export const metadata: Metadata = {
  title: 'Winterbar mieten: heiße Cocktails & Punsch | Frankies',
  description:
    'Die Winterbar von Frankies Eventservice aus Lennestadt: Hot Aperol, Glühgin, Punsch und Kakao, mit und ohne Alkohol, für Ihr Fest im Sauerland. Jetzt anfragen.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: PAGE_URL,
    siteName: 'Frankies Eventservice',
    title: 'Winterbar mieten: heiße Cocktails & Punsch | Frankies',
    description: 'Hot Aperol, Glühgin, Punsch und Kakao an unserer mobilen Bambustheke. Für Ihr Fest im Sauerland.',
    images: [{ url: 'https://frankies-eventservice.de/og/winterbar.jpg', width: 1200, height: 630, alt: 'Frankies Winterbar: heiße Cocktails und Punsch' }],
  },
}

/*
  Winterbar (30.10.2026). Die mobile Bambustheke im Winterbanner mit
  heissen Cocktails und Punsch. Getraenke, Beschreibungen und Preise kommen
  ausschliesslich aus components/winterbar-daten.ts (woertlich aus der
  Karte des Betreibers). Fotos vom Betreiber, ohne Metadaten.
  Gestaltung wie die Startseite: Kopflinie, Nummer, grosse Ueberschrift,
  gemeinsames Zweispalten-Raster.
*/
function Karte({ titel, eintraege }: { titel: string; eintraege: WinterGetraenk[] }) {
  return (
    <div className="sn-wk">
      <h3 className="sn-wk-titel">{titel}</h3>
      <ul>
        {eintraege.map((g) => (
          <li key={g.name}>
            <div className="sn-wk-zeile">
              <span className="sn-wk-name">
                {g.name}
                {g.neu && <span className="sn-wk-neu">Neu</span>}
              </span>
              <span className="sn-wk-preis">{g.preis} €</span>
            </div>
            <p>{g.beschreibung}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function WinterbarSeite() {
  return (
    <>
      <Navbar />
      <div className="content-layer sn">
        <StartseiteEffekte />

        <section className="sn-leistungen sn-seite sn-winter" aria-labelledby="winterbar-titel">
          <div className="sn-top">
            <span className="sn-eyebrow">Winterbar</span>
            <span className="sn-note">Saison {WINTER_SAISON_TEXT}</span>
          </div>
          <div className="sn-winter-hero">
            <div>
              <h1 id="winterbar-titel" className="sn-h1">Die Winterbar.<br /><em>Heiß serviert.</em></h1>
              <p className="sn-winter-lead">
                Unsere mobile Bambustheke im Winterkleid: heiße Cocktails, Punsch und Kakao, mit und ohne Alkohol.
                Für {WINTER_ANLAESSE}. Wir bauen auf, schenken aus und räumen wieder ab.
              </p>
              <div className="sn-hero-cta">
                <Link className="sn-submit sn-hero-angebot" href="/kontakt/winterbar">Winterbar anfragen <span aria-hidden="true">↗</span></Link>
                <a className="sn-link" href="#karte">Zur Getränkekarte <span aria-hidden="true">↓</span></a>
              </div>
            </div>
            <figure className="sn-winter-bild">
              <Image
                src="/winterbar-theke.webp"
                alt="Die Winterbar von Frankies Eventservice: Bambustheke mit Winterbanner, Punschkesseln und Getränkekarte"
                width={1600}
                height={1200}
                priority
                sizes="(max-width: 800px) 100vw, 50vw"
                quality={60}
              />
            </figure>
          </div>
        </section>

        <section className="sn-leistungen" id="karte" aria-labelledby="karte-titel">
          <div className="sn-top sn-reveal">
            <span className="sn-eyebrow">01 / Getränkekarte</span>
            <span className="sn-note">Mit Schuss · Ohne Alkohol</span>
          </div>
          <div className="sn-heading sn-reveal">
            <h2 id="karte-titel">Was in den Becher kommt.<br /><em>Heiß, süß, mit Schuss.</em></h2>
          </div>
          <div className="sn-winter-karte sn-reveal">
            <Karte titel="Mit Schuss" eintraege={WINTER_MIT_SCHUSS} />
            <div>
              <Karte titel="Ohne Alkohol" eintraege={WINTER_OHNE_ALKOHOL} />
              <figure className="sn-winter-detail">
                <Image
                  src="/winterbar-kakao.webp"
                  alt="Hot Chocolate im Winterbecher mit Sahne und bunten Mini-Marshmallows"
                  width={900}
                  height={1200}
                  sizes="(max-width: 800px) 100vw, 40vw"
                  quality={60}
                />
              </figure>
            </div>
          </div>
          <div className="sn-winter-hinweise">
            {WINTER_HINWEISE.map((h) => <p key={h}>{h}</p>)}
          </div>
        </section>

        {/* So laeuft ein Winterbar-Abend (09.11.2026). Nur Belegtes: Karte,
            Saison und Anlaesse aus winterbar-daten.ts, Klaerung von Strom und
            Platz aus den FAQ der Startseite, Alkohol ab 18 aus der Karte. */}
        <section className="sn-leistungen" id="ablauf" aria-labelledby="winter-ablauf-titel">
          <div className="sn-top sn-reveal">
            <span className="sn-eyebrow">02 / So läuft es</span>
            <span className="sn-note">Aufbau · Ausschank · Abbau</span>
          </div>
          <div className="sn-heading sn-reveal">
            <h2 id="winter-ablauf-titel">Ein Winterbar-Abend,<br /><em>von vorne bis hinten.</em></h2>
          </div>
          <div className="sn-winter-ablauf sn-reveal">
            <div>
              <h3>Vorher</h3>
              <p>Sie sagen uns Datum, Ort und Gästezahl. Wir klären, was Ihr Platz bieten muss, etwa Strom für die Theke, und wie viel Karte Sie wollen: alle zwölf Getränke oder eine Auswahl für Ihren Anlass. Innerhalb von 24 Stunden haben Sie ein Angebot.</p>
            </div>
            <div>
              <h3>Am Tag</h3>
              <p>Wir bauen die Bambustheke im Winterbanner auf, stellen die Kessel an und schenken aus: Hot Aperol, Glühgin und Punsch mit Schuss für die Erwachsenen, Kakao mit Marshmallows und Kinderpunsch für alle anderen. Alkohol gibt es bei uns nur an Gäste ab 18, das sagen wir vorher und halten uns daran.</p>
            </div>
            <div>
              <h3>Danach</h3>
              <p>Wir räumen ab, nehmen alles wieder mit, und Sie haben am nächsten Morgen keinen Stapel Becher auf dem Hof. Buchbar von {WINTER_SAISON_TEXT}, für {WINTER_ANLAESSE}.</p>
            </div>
          </div>
        </section>

        <section className="sn-leistungen sn-winter-ende" aria-labelledby="winter-anfrage-titel">
          <div className="sn-top sn-reveal">
            <span className="sn-eyebrow">03 / Anfragen</span>
            <Link className="sn-link" href="/cocktailbar-lennestadt">Zur Cocktailbar <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="sn-winter-hero sn-reveal">
            <h2 id="winter-anfrage-titel">Ihr Fest<br />mit Winterbar?<br /><em>Fragen Sie an.</em></h2>
            <div>
              <p className="sn-winter-lead">Buchbar von {WINTER_SAISON_TEXT}. Grundsätzlich gelten die Preise unserer Karte. Sagen Sie uns Datum, Ort und Gästezahl, Sie bekommen innerhalb von 24 Stunden ein Angebot.</p>
              <div className="sn-hero-cta">
                <Link className="sn-submit sn-hero-angebot" href="/kontakt/winterbar">Winterbar anfragen <span aria-hidden="true">↗</span></Link>
                <a className="sn-link" href="tel:+4915142840916">Direkt anrufen <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <CinematicFooter />
    </>
  )
}
