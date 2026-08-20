import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { CinematicFooter } from '@/components/ui/motion-footer'
import Testimonials from '@/components/Testimonials'
import RevealWrapper from '@/components/RevealWrapper'
import BookingCTA from '@/components/BookingCTA'
import { FLATS, IMMER_DABEI, flatName, proCocktail, euro, euroGenau, STEUER_HINWEIS } from '@/components/preise-daten'
import CocktailbarScrollHero from '@/components/CocktailbarScrollHero'
import Icon from '@/components/Icon'

const PAGE_URL = 'https://frankies-eventservice.de/cocktailbar-lennestadt'
const OG_IMAGE = 'https://frankies-eventservice.de/og/cocktailbar.jpg'

export const metadata: Metadata = {
  title: 'Mobile Cocktailbar Lennestadt | Frankies Eventservice',
  description: 'Mobile Cocktailbar in Lennestadt und Kreis Olpe mieten. Mit unserer Bambustheke kommen wir direkt zu Ihnen – für Hochzeiten, Geburtstage, JGA und Firmenfeiern.',
  keywords: 'mobile Cocktailbar Lennestadt, Cocktailbar mieten Kreis Olpe, Bambustheke, Cocktailbar Hochzeit Sauerland, JGA Cocktailbar, Barkeeper mieten NRW',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: PAGE_URL,
    siteName: 'Frankies Eventservice',
    title: 'Mobile Cocktailbar Lennestadt | Bambustheke & Barservice – Frankies Eventservice',
    description: 'Mobile Cocktailbar in Lennestadt und Kreis Olpe mieten. Mit unserer Bambustheke kommen wir direkt zu Ihnen.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Mobile Cocktailbar mit Bambustheke – Frankies Eventservice' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Cocktailbar Lennestadt | Bambustheke & Barservice – Frankies Eventservice',
    description: 'Mobile Cocktailbar in Lennestadt und Kreis Olpe mieten. Mit unserer Bambustheke kommen wir direkt zu Ihnen.',
    images: [OG_IMAGE],
  },
}

const faq = [
  { q: 'Wie weit im Voraus sollte ich buchen?', a: 'Für Hochzeiten und größere Events empfehlen wir 3–6 Monate im Voraus. Für Geburtstage oder kleinere Feiern reichen oft 4–6 Wochen. Bei kurzfristigen Anfragen einfach anrufen.' },
    {
    q: 'Wie viel Platz braucht die Bar?',
    a: 'Mit Pavillon 3 × 3 Meter, ohne Pavillon 2 × 2 Meter. Mehr nicht — die Bar läuft komplett autark und braucht für die normalen Flats weder Strom- noch Wasseranschluss. Erst bei größeren Veranstaltungen ist beides sinnvoll.',
  },
  {
    q: 'Was kostet die mobile Cocktailbar?',
    // Aus FLATS erzeugt, damit die Antwort nicht von den Paketkarten
    // abweichen kann. Die Zahlen stehen nur in preise-daten.ts.
    a: `${FLATS.map((f) => `${f.anzahl} Cocktails mit ${f.stunden} Stunden Ausschank: ${euro(f.preis)}`).join('; ')}. Jeweils ${STEUER_HINWEIS} und inklusive aller Zutaten, Bambustheke, Gläser, Barkeeper sowie Auf- und Abbau. Für mehr als ${FLATS[FLATS.length - 1].anzahl} Cocktails oder mehrtägige Veranstaltungen rechnen wir individuell.`,
  },
  { q: 'Welche Cocktails gibt es?', a: 'Klassiker wie Mojito, Aperol Spritz, Hugo und Caipirinha plus individuelle Kreationen. Alkoholfreie Alternativen sind selbstverständlich verfügbar.' },
  { q: 'Wie viel Platz braucht die Bambustheke?', a: 'Ca. 3×2 Meter plus Zufahrt für die Anlieferung. Wir klären das bei der Voranfrage — wir passen uns an Ihre Location an.' },
  { q: 'Bringt ihr auch Gläser und Zutaten mit?', a: 'Ja — Gläser, Shaker, Zutaten und alle nötigen Utensilien sind dabei. Sie müssen sich um nichts kümmern.' },
  { q: 'Kommt ihr auch bei Außen-Events?', a: 'Ja. Garten, Wiese, Hof, Festzelt — wir sind vollständig mobil. Bei extremem Wetter besprechen wir das vorab.' },
]


const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile Cocktailbar Lennestadt',
  description: 'Mobile Cocktailbar mit Bambustheke für Hochzeiten, JGA, Geburtstage und Firmenfeiern im Kreis Olpe und Sauerland.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Frankies Eventservice',
    telephone: '+4915142840916',
    url: 'https://frankies-eventservice.de',
  },
  areaServed: ['Lennestadt', 'Finnentrop', 'Kirchhundem', 'Attendorn', 'Olpe', 'Wenden', 'Drolshagen', 'Sauerland'],
  serviceType: 'Mobile Cocktailbar',
  url: PAGE_URL,
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export default function CocktailbarLennestadt() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <div className="content-layer">
        <RevealWrapper>
        {/* Hero aus der Vorlage scroll-expansion-hero: das Medium zieht
            beim Scrollen auf. Steht ausserhalb von <main>, weil es die
            volle Bildschirmhoehe braucht. */}
        <CocktailbarScrollHero />

        <main>

          {/* Deckende Ebene: schiebt sich beim Scrollen ueber das
              fixierte Hintergrundfoto, siehe .below-hero in globals.css. */}
          <div className="below-hero">


          {/* Image + Features */}
          <section className="section-block">
            <div className="section-container">
              <div className="cocktail-grid">
                <div className="cocktail-visual reveal-left glow-frame">
                  <Image src="/bambustheke.webp" alt="Mobile Cocktailbar mit Bambustheke für Events in Lennestadt" width={600} height={750} priority sizes="(max-width: 768px) 100vw, 600px" quality={60} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="reveal grid-text">
                  <p className="section-label" style={{ margin: '0 auto 1rem' }}>Einzigartiges Flair</p>
                  <h2 className="section-title" style={{ margin: '0 auto 1.5rem' }}>Cocktailbar mieten<br />im Kreis Olpe</h2>
                  <p className="section-text">Frankies Eventservice bietet vollständige mobile Cocktailbars für alle Veranstaltungen in Lennestadt, Finnentrop, Kirchhundem, Attendorn und dem gesamten Kreis Olpe. Wir bauen die komplette Bar bei Ihnen vor Ort auf — drinnen wie draußen.</p>
                  <p className="section-text" style={{ marginTop: '1rem' }}>Die stylische Bambustheke sorgt für einzigartiges Ambiente — Hochzeitsfeier, JGA, Geburtstag oder Firmenfeier. Unsere erfahrenen Barkeeper bereiten frische Cocktailkreationen direkt bei Ihnen zu.</p>
                  <div className="cocktail-features stagger-children reveal" style={{ marginTop: '2rem' }}>
                    <div className="cocktail-feature"><span className="cocktail-feature-icon"><Icon name="van" /></span><div><strong>Voll mobil</strong><span>Wir kommen zu Ihrer Location</span></div></div>
                    <div className="cocktail-feature"><span className="cocktail-feature-icon"><Icon name="bamboo" /></span><div><strong>Bambustheke</strong><span>Stilvolle Theke mit Urlaubsflair</span></div></div>
                    <div className="cocktail-feature"><span className="cocktail-feature-icon"><Icon name="cocktail" /></span><div><strong>Frische Cocktails</strong><span>Klassiker &amp; Kreationen</span></div></div>
                    <div className="cocktail-feature"><span className="cocktail-feature-icon"><Icon name="pin" /></span><div><strong>Mobiler Service</strong><span>±25 km um Lennestadt</span></div></div>
                  </div>
                  <div style={{ marginTop: '2rem' }}>
                    <BookingCTA primary="Termin vereinbaren" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Packages */}
          <section className="section-block section-block--alt">
            <div className="section-container">
              <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                <p className="section-label">Unsere Pakete</p>
                <h2 className="section-title" style={{ margin: '0 auto 1rem' }}>Das passende Paket für Ihre Feier</h2>
                <p className="section-text" style={{ margin: '0 auto' }}>
                  Feste Pauschalen, keine Überraschung am Ende. Alle Zutaten, Theke, Gläser,
                  Barkeeper sowie Auf- und Abbau sind enthalten. Je größer das Paket, desto
                  günstiger der einzelne Cocktail.
                </p>
              </div>
              <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))', gap: '1.5rem', justifyContent: 'center' }}>
                {FLATS.map(f => (
                  <div key={f.anzahl} className={`flat-karte${f.beliebt ? ' beliebt' : ''}`}>
                    {f.beliebt && <span className="flat-marke">Am häufigsten gebucht</span>}
                    <p className="flat-anzahl">{f.anzahl} Cocktails</p>
                    <p className="flat-preis">{euro(f.preis)}</p>
                    {/* Der Preis je Cocktail wird gerechnet, nicht gepflegt.
                        Er macht die Staffelung sichtbar: 8,50 € beim
                        kleinsten, 7,00 € beim groessten Paket. */}
                    <p className="flat-je">{euroGenau(proCocktail(f))} pro Cocktail · {f.stunden} Stunden Ausschank</p>
                    <ul className="flat-liste">
                      {IMMER_DABEI.map(h => (
                        <li key={h}>
                          <span><Icon name="check" size={15} /></span>{h}
                        </li>
                      ))}
                    </ul>
                    <p className="flat-fuer">Ideal für: {f.fuer}</p>
                    <BookingCTA primary={`${flatName(f)} anfragen`} pkg={flatName(f)} />
                  </div>
                ))}
              </div>
              <p className="reveal" style={{ textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '2rem', fontWeight: 300 }}>
                Alle Preise sind Pauschalen {STEUER_HINWEIS}, inklusive Anfahrt im Kreis Olpe. Die Bar läuft
                komplett autark — weder Strom- noch Wasseranschluss nötig; erst bei größeren
                Events ist beides sinnvoll. Platzbedarf: 3 × 3 Meter mit Pavillon,
                2 × 2 Meter ohne. Mehr als 200 Cocktails, mehrere Tage oder eine
                Sonderwunsch-Karte? Dann rechnen wir Ihnen das persönlich aus.
              </p>
            </div>
          </section>

          {/* Booking Banner */}
          <section style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, rgba(200,164,78,0.07) 0%, var(--color-bg) 100%)', borderTop: '1px solid rgba(200,164,78,0.12)', borderBottom: '1px solid rgba(200,164,78,0.12)' }}>
            <div className="section-container reveal">
              <BookingCTA layout="banner" primary="Angebot anfordern" />
            </div>
          </section>

          {/* Occasions */}
          <section className="section-block section-block--alt">
            <div className="section-container">
              <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                <p className="section-label">Für jeden Anlass</p>
                <h2 className="section-title" style={{ margin: '0 auto 1rem' }}>Ideal für Ihre Feier</h2>
              </div>
              <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))', gap: '1.5rem', justifyContent: 'center' }}>
                {[
                  { icon: 'ring', title: 'Hochzeiten', text: 'Stilvoller Sektempfang oder Late-Night-Cocktailservice.' },
                  { icon: 'sparkles', title: 'Junggesellenabschied', text: 'Unvergesslicher JGA mit frischen Cocktails und Urlaubsflair.' },
                  { icon: 'cake', title: 'Geburtstage', text: 'Runder Geburtstag oder Gartenparty — wir machen das Highlight.' },
                  { icon: 'building', title: 'Firmenfeiern', text: 'Sommerfest, Jubiläum oder Weihnachtsfeier.' },
                  { icon: 'target', title: 'Schützenfeste', text: 'Cocktail-Highlight neben dem klassischen Ausschank.' },
                  { icon: 'tent', title: 'Dorf- &amp; Vereinsfeste', text: 'Kompletter Thekenservice mit Cocktail-Bar.' },
                ].map(item => (
                  <div key={item.title} style={{ background: 'var(--color-surface-2)', border: '1px solid rgba(200,164,78,0.1)', padding: '2rem' }}>
                    <div style={{ color: 'var(--color-gold)', marginBottom: '1rem' }}><Icon name={item.icon} size={28} /></div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 400, marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: item.title }} />
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.7, fontWeight: 300 }} dangerouslySetInnerHTML={{ __html: item.text }} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="section-block">
            <div className="section-container">
              <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p className="section-label">In 4 Schritten</p>
                <h2 className="section-title" style={{ margin: '0 auto' }}>So läuft es ab</h2>
              </div>
              <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))', gap: '2rem' }}>
                {[
                  { num: '01', title: 'Anfrage', text: 'Formular ausfüllen oder direkt anrufen — kostenlos und unverbindlich.' },
                  { num: '02', title: 'Angebot', text: 'Individuelles Angebot mit Cocktailkarte innerhalb von 24h.' },
                  { num: '03', title: 'Aufbau', text: 'Wir bauen auf — die Bambustheke steht in 45 Minuten.' },
                  { num: '04', title: 'Genießen', text: 'Profi-Barkeeper servieren — Sie feiern entspannt.' },
                ].map(s => (
                  <div key={s.num} style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(200,164,78,0.2)' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--color-gold)', lineHeight: 1, marginBottom: '0.5rem' }}>{s.num}</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 400, marginBottom: '0.4rem' }}>{s.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6, fontWeight: 300 }}>{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="section-block section-block--alt">
            <div className="section-container" style={{ maxWidth: '720px' }}>
              <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p className="section-label">Häufige Fragen</p>
                <h2 className="section-title" style={{ margin: '0 auto' }}>FAQ Cocktailbar</h2>
              </div>
              <div className="reveal">
                {faq.map((item, i) => (
                  <details key={i} style={{ borderTop: '1px solid rgba(200,164,78,0.12)', padding: '1.25rem 0' }}>
                    <summary style={{ cursor: 'pointer', fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 400, listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                      {item.q}<span style={{ color: 'var(--color-gold)', flexShrink: 0 }}>+</span>
                    </summary>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: 1.75, fontWeight: 300, marginTop: '0.75rem', paddingRight: '2rem' }}>{item.a}</p>
                  </details>
                ))}
                <div style={{ borderTop: '1px solid rgba(200,164,78,0.12)' }} />
              </div>
            </div>
          </section>

          {/* Coverage */}
          <Testimonials />

          <section className="section-block" style={{ textAlign: 'center' }}>
            <div className="section-container reveal">
              <p className="section-label">Einsatzgebiet</p>
              <h2 className="section-title" style={{ margin: '0 auto 1rem' }}>Wir kommen zu Ihnen</h2>
              <p className="section-text" style={{ margin: '0 auto 1.5rem' }}>
                Im Umkreis von ca. 25 km um Lennestadt — bei weiter entfernten Events sprechen Sie uns einfach an.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
                {['Lennestadt', 'Finnentrop', 'Kirchhundem', 'Attendorn', 'Olpe', 'Wenden', 'Drolshagen', 'Schmallenberg', 'Eslohe', 'Plettenberg'].map(ort => (
                  <span key={ort} style={{ padding: '0.5rem 1.1rem', border: '1px solid rgba(200,164,78,0.2)', fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>{ort}</span>
                ))}
              </div>
              <BookingCTA primary="Jetzt anfragen" secondary="Jetzt anrufen" calcomUrl="tel:+4915142840916" />
            </div>
          </section>

          <section style={{ padding: '3rem 2rem', background: 'var(--color-surface)' }}>
            <div className="section-container" style={{ textAlign: 'center' }}>
              <p className="section-label" style={{ marginBottom: '1.5rem' }}>Weitere Leistungen</p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {[
                  { href: '/getraenkeservice-schuetzenfest', label: 'Getränkeservice Schützenfest' },
                  { href: '/hochzeit-sauerland', label: 'Thekenservice Hochzeit' },
                  { href: '/eventservice-kreis-olpe', label: 'Eventservice Kreis Olpe' },
                  { href: '/', label: '← Startseite' },
                ].map(l => <a key={l.href} href={l.href} style={{ padding: '0.7rem 1.4rem', border: '1px solid rgba(200,164,78,0.2)', color: 'var(--color-text-muted)', fontSize: '0.8rem', textDecoration: 'none', letterSpacing: '0.05em' }}>{l.label}</a>)}
              </div>
            </div>
          </section>

          </div>

        </main>
        </RevealWrapper>
      </div>
      <CinematicFooter />
    </>
  )
}
