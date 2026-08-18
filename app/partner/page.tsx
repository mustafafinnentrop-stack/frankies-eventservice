import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import { CinematicFooter } from '@/components/ui/motion-footer'
import RevealWrapper from '@/components/RevealWrapper'
import PartnerForm from '@/components/PartnerForm'

/*
  Partnerseite. Aufbau nach der vom Betreiber geschickten Referenz:
  Einstieg, drei Vorteile, vier Partner-Typen, Provisions-Kasten,
  Formular, FAQ. Inhalte sind Frankies' eigene — die einzige Zahl
  ("bis zu 10%") stammt vom Betreiber. Keine festen Saetze je Kategorie,
  weil es die nicht gibt: die Hoehe haengt am einzelnen Auftrag.
*/
const PAGE_URL = 'https://frankies-eventservice.de/partner'

export const metadata: Metadata = {
  title: 'Partner werden | Frankies Eventservice',
  description: 'Empfehlen Sie Frankies Eventservice weiter und erhalten Sie bis zu 10% Provision pro vermitteltem Auftrag. Für Locations, Vereine, Eventdienstleister und private Empfehlungen im Sauerland.',
  keywords: 'Partnerprogramm Eventservice, Provision Vermittlung Event, Cocktailbar vermitteln, Eventpartner Sauerland, Kooperation Eventlocation Kreis Olpe',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: PAGE_URL,
    siteName: 'Frankies Eventservice',
    title: 'Partner werden | Bis zu 10% Provision – Frankies Eventservice',
    description: 'Sie vermitteln einen Auftrag, wir übernehmen die Arbeit — Sie erhalten bis zu 10% Provision.',
    images: [{ url: 'https://frankies-eventservice.de/og/home.jpg', width: 1200, height: 630, alt: 'Frankies Eventservice Partnerprogramm' }],
  },
}

const VORTEILE = [
  {
    titel: 'Bis zu 10% Provision',
    text: 'Für jede erfolgreiche Vermittlung — die Höhe hängt an Art und Umfang des Auftrags und wird vorher klar vereinbart.',
  },
  {
    titel: 'Gegenseitige Empfehlung',
    text: 'Wir empfehlen unsere Partner ebenso weiter. Wer uns eine Location oder einen DJ vermittelt, taucht bei passenden Anfragen auch bei uns auf.',
  },
  {
    titel: 'Kein Aufwand für Sie',
    text: 'Sie stellen nur den Kontakt her. Angebot, Planung und Durchführung übernehmen wir — ob Thekenservice oder komplette Cocktailbar. Sie hören von uns, sobald die Provision fällig ist.',
  },
]

const TYPEN = [
  {
    name: 'Eventlocations & Gastronomie',
    zeilen: ['Ihre Gäste fragen nach Getränkeservice oder Cocktailbar', 'Wir bringen Theke, Zapfanlage oder die Bambustheke mit', 'Ihre Location bleibt der Gastgeber'],
  },
  {
    name: 'Vereine & Festausschüsse',
    zeilen: ['Sie kennen die Feste in der Umgebung', 'Thekenservice und Zapfanlage für Schützen- und Dorffeste', 'Für den Abend danach die mobile Cocktailbar'],
  },
  {
    name: 'Eventdienstleister',
    zeilen: ['DJ, Fotograf, Verleih, Hochzeitsplanung', 'Ihre Kunden brauchen oft auch Getränke, Theke oder Cocktailbar', 'Wir empfehlen Sie im Gegenzug weiter'],
  },
  {
    name: 'Private Empfehlungen',
    zeilen: ['Auch ohne Firma oder Verein', 'Hochzeit, Geburtstag, JGA oder Firmenfeier', 'Cocktailbar oder Thekenservice — Provision gilt für beides'],
  },
]

const FAQ = [
  {
    q: 'Wie hoch ist die Provision genau?',
    a: 'Bis zu 10% des Auftragswerts. Die genaue Höhe hängt an Art und Umfang des vermittelten Auftrags — ein Schützenfest über vier Tage ist etwas anderes als eine Cocktailbar für einen Abend. Wir legen die Höhe vor der Vermittlung gemeinsam fest, nicht danach.',
  },
  {
    q: 'Gilt die Provision auch für die mobile Cocktailbar?',
    a: 'Ja — für jede Leistung, die daraus wird. Die mobile Cocktailbar mit Bambustheke ist sogar das, was am häufigsten vermittelt wird: Hochzeiten, Geburtstage, JGA und Firmenfeiern. Genauso für Thekenservice, Getränkecatering, Servicepersonal und Kaffeestation.',
  },
  {
    q: 'Wann wird die Provision ausgezahlt?',
    a: 'Sobald der vermittelte Auftrag durchgeführt und bezahlt ist. Sie müssen nichts nachhalten — wir melden uns bei Ihnen.',
  },
  {
    q: 'Gibt es eine Mindestanzahl an Vermittlungen?',
    a: 'Nein. Auch eine einzelne Empfehlung zählt. Es gibt keine Verpflichtung, keine Laufzeit und nichts zu kündigen.',
  },
  {
    q: 'Wie funktioniert die Vermittlung konkret?',
    a: 'Sie stellen den Kontakt her — per Anruf, E-Mail oder indem Sie unsere Nummer weitergeben und uns kurz Bescheid sagen. Alles Weitere übernehmen wir: Angebot, Planung, Durchführung. Kommt der Auftrag zustande, erhalten Sie Ihre Provision.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function PartnerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <div className="content-layer">
        <RevealWrapper>
        <main style={{ paddingTop: '100px', background: 'var(--color-bg)' }}>

          {/* Einstieg */}
          <section style={{ padding: '5rem 2rem 3rem' }}>
            <div className="section-container" style={{ textAlign: 'center' }}>
              <p className="section-label reveal">Partnerprogramm</p>
              <h1 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 400, lineHeight: 1.1, marginBottom: '1.5rem', color: 'var(--color-text)' }}>
                Sie empfehlen uns —<br />wir zahlen Provision
              </h1>
              <p className="reveal" style={{ fontSize: '1.05rem', fontWeight: 300, color: 'var(--color-text-muted)', maxWidth: '640px', margin: '0 auto', lineHeight: 1.8 }}>
                Sie kennen jemanden, der ein Fest plant? Stellen Sie den Kontakt her.
                Wir übernehmen Thekenservice, Getränke und Personal — oder bringen die
                mobile Cocktailbar mit Bambustheke. Sie erhalten bis zu 10% Provision
                für den vermittelten Auftrag.
              </p>
            </div>
          </section>

          {/* Drei Vorteile — Haarlinien-Liste, dieselbe Formensprache wie
              die Leistungen auf der Startseite */}
          <section className="section-block" style={{ paddingTop: '2rem' }}>
            <div className="section-container">
              <ul className="partner-vorteile">
                {VORTEILE.map((v, i) => (
                  <li key={v.titel}>
                    <span className="partner-nr">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h2>{v.titel}</h2>
                      <p>{v.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Fuer wen */}
          <section className="section-block section-block--alt">
            <div className="section-container">
              <p className="section-label">Für wen ist das?</p>
              <h2 className="section-title" style={{ margin: '0 auto 3rem' }}>Vier Wege, Partner zu werden</h2>
              <ul className="referenz-grid stagger-children reveal" style={{ marginTop: 0 }}>
                {TYPEN.map(t => (
                  <li key={t.name} className="referenz-card reveal">
                    <h3>{t.name}</h3>
                    <ul className="partner-punkte">
                      {t.zeilen.map(z => <li key={z}>{z}</li>)}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Provisionsmodell */}
          <section className="section-block" style={{ textAlign: 'center' }}>
            <div className="section-container">
              <p className="section-label">Unser Provisionsmodell</p>
              <p className="partner-zahl" aria-hidden="true">10<span>%</span></p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem,2.4vw,2rem)', color: 'var(--color-text)', margin: '0.5rem 0 1.25rem' }}>
                bis zu zehn Prozent pro vermitteltem Auftrag
              </p>
              <p style={{ fontSize: '0.95rem', fontWeight: 300, color: 'var(--color-text-muted)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.8 }}>
                Die Höhe hängt an Art und Umfang des Auftrags und wird vor der
                Vermittlung vereinbart — nicht danach. Fällig, sobald der Auftrag
                durchgeführt und bezahlt ist.
              </p>
            </div>
          </section>

          {/* Formular */}
          <section className="section-block section-block--alt">
            <div className="section-container" style={{ maxWidth: '820px', textAlign: 'center' }}>
              <p className="section-label">Jetzt bewerben</p>
              <h2 className="section-title" style={{ margin: '0 auto 1rem' }}>Partner werden</h2>
              <p style={{ fontSize: '0.95rem', fontWeight: 300, color: 'var(--color-text-muted)', maxWidth: '560px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
                Kurz ausfüllen — wir melden uns innerhalb von 24 Stunden.
                Oder direkt anrufen: <a href="tel:+4915142840916" style={{ color: 'var(--color-gold)', textDecoration: 'none' }}>0151 42840916</a>
              </p>
              <PartnerForm />
            </div>
          </section>

          {/* FAQ */}
          <section className="section-block">
            <div className="section-container" style={{ maxWidth: '760px' }}>
              <p className="section-label">FAQ</p>
              <h2 className="section-title" style={{ margin: '0 auto 3rem' }}>Häufige Fragen<br />zum Partnerprogramm</h2>
              <div className="partner-faq">
                {FAQ.map(f => (
                  <details key={f.q}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

        </main>
        </RevealWrapper>
      </div>
      <CinematicFooter />
    </>
  )
}
