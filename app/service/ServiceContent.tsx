'use client'

import Navbar from '@/components/Navbar'
import Icon from '@/components/Icon'
import { CinematicFooter } from '@/components/ui/motion-footer'
import RevealWrapper from '@/components/RevealWrapper'
import BookingCTA from '@/components/BookingCTA'
import Kontakt from '@/components/Kontakt'

const portfolioItems = [
  {
    icon: 'team',
    title: 'Servicepersonal',
    text: 'Erfahrene Servicekräfte, Barkeeper und Event-Manager für einen professionellen und reibungslosen Ablauf Ihrer Veranstaltung. Wir stellen das passende Team zusammen.',
  },
  {
    icon: 'beer',
    title: 'Getränkeservice & Zapfanlage',
    text: 'Bier vom Fass, Weine, Softdrinks und Säfte mit professioneller Zapfanlage inkl. E-Kühler und CO₂-Versorgung. Lieferung, Aufbau und Abbau inklusive.',
  },
  {
    icon: 'cocktail',
    title: 'Mobile Cocktailbar',
    text: 'Unsere elegante mobile Cocktailbar mit Bambus-Teke kommt direkt zu Ihnen. Frisch gemixter Cocktailservice für Hochzeiten, Firmenfeiern und besondere Anlässe.',
  },
  {
    icon: 'tent',
    title: 'Hüpfburgen & Spielgeräte',
    text: 'Hochwertige Hüpfburgen und Spielgeräte für Kinder und Familien. Perfekt für Schützenfeste, Dorffeste, Geburtstage und Familienveranstaltungen.',
  },
  {
    icon: 'chair',
    title: 'Eventmöbel & Ausstattung',
    text: 'Stehtische, Bistrotische, Bestuhlung und stilvolle Raumausstattung. Wir statten Ihre Veranstaltung komplett aus — von der Theke bis zum letzten Stuhl.',
  },
  {
    icon: 'snack',
    title: 'Fun-Food Module',
    text: 'Slush-Eis-Maschinen, Popcornmaschinen, Candy Bar und weitere kulinarische Highlights. Sorgen Sie für Begeisterung bei Jung und Alt.',
  },
  {
    icon: 'camera',
    title: 'Fotoboxen & Foto-Mirror',
    text: 'Moderne Fotoboxen und interaktive Foto-Mirror für unvergessliche Erinnerungen. Ihre Gäste nehmen ein Stück Ihrer Feier mit nach Hause.',
  },
  {
    icon: 'bulb',
    title: 'Ambiente-Beleuchtung',
    text: 'Stimmungsvolle LED-Beleuchtung, Leuchtbuchstaben und dekorative Lichtinstallationen für die perfekte Atmosphäre bei Ihrer Veranstaltung.',
  },
  {
    icon: 'mic',
    title: 'Licht- & Tontechnik',
    text: 'Professionelle Beschallungsanlagen, DJ-Equipment, Showtechnik und Bühnenbeleuchtung. Für den perfekten Sound und die passende Stimmung.',
  },
]

const packages = [
  {
    label: 'Basic',
    title: 'Getränke & Service',
    description: 'Der solide Grundstein für Ihre Veranstaltung — professioneller Ausschank ohne Kompromisse.',
    items: [
      'Servicepersonal (2–3 Kräfte)',
      'Zapfanlage mit E-Kühler & CO₂',
      'Bier, Wein & Softdrinks',
      'Auf- und Abbau inklusive',
    ],
    note: 'Individuell kalkuliert',
    cta: 'Angebot anfordern',
    pkg: undefined,
  },
  {
    label: 'Komfort',
    title: 'Event-Komplettpaket',
    description: 'Alles, was Sie für eine rundum gelungene Feier brauchen — aus einer Hand.',
    items: [
      'Servicepersonal (3–5 Kräfte)',
      'Getränkeservice & Zapfanlage',
      'Eventmöbel & Ausstattung',
      'Ambiente-Beleuchtung',
      'Fotobox oder Foto-Mirror',
    ],
    note: 'Individuell kalkuliert',
    cta: 'Jetzt Angebot holen',
    pkg: undefined,
    highlight: true,
  },
  {
    label: 'Premium',
    title: 'Full-Service Event',
    description: 'Das Rundum-sorglos-Paket für anspruchsvolle Events — wir kümmern uns um alles.',
    items: [
      'Professionelles Serviceteam',
      'Mobile Cocktailbar mit Bambus-Teke',
      'Hüpfburg oder Fun-Food-Module',
      'Fotobox & Foto-Mirror',
      'Profi-Licht- & Tontechnik',
      'Individuelle Beratung & Planung',
    ],
    note: 'Auf Ihr Event zugeschnitten',
    cta: 'Beratung vereinbaren',
    pkg: undefined,
  },
]

const eventTypes = [
  { icon: 'sparkles', label: 'Schützenfeste' },
  { icon: 'ring', label: 'Hochzeiten' },
  { icon: 'cake', label: 'Geburtstage' },
  { icon: 'building', label: 'Firmenfeiern' },
  { icon: 'sparkles', label: 'Vereinsfeste' },
  { icon: 'tent', label: 'Dorffeste' },
  { icon: 'graduation', label: 'Abschlussfeiern' },
  { icon: 'sparkles', label: 'Sonstige Events' },
]

export default function ServiceContent() {
  return (
    <>
      <Navbar />
      <div className="content-layer">
        <RevealWrapper>
        <main style={{ paddingTop: '100px' }}>

          {/* Hero */}
          <div className="hero-backdrop">
            <section style={{ padding: '5rem 2rem 4rem' }}>
            <div className="section-container" style={{ textAlign: 'center' }}>
              <p className="section-label reveal">Service & Portfolio</p>
              <h1 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 400, lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Ihr Event aus einer Hand
              </h1>
              <p className="reveal" style={{ fontSize: '1.05rem', fontWeight: 300, color: 'var(--color-text-muted)', maxWidth: '640px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
                Von professionellem Servicepersonal über mobile Cocktailbars bis hin zu Hüpfburgen, Fotoboxen und Profi-Technik — Frankies Eventservice ist Ihr zuverlässiger Partner für unvergessliche Veranstaltungen im Sauerland und Kreis Olpe.
              </p>
              <div className="reveal">
                <BookingCTA primary="Angebot anfordern" secondary="Termin buchen" />
              </div>
            </div>
          </section>
          </div>

          {/* Deckende Ebene: schiebt sich beim Scrollen ueber das
              fixierte Hintergrundfoto, siehe .below-hero in globals.css. */}
          <div className="below-hero">


          {/* Event-Typen */}
          <section style={{ padding: '5rem 2rem' }}>
            <div className="section-container">
              <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p className="section-label">Für jeden Anlass</p>
                <h2 className="section-title" style={{ margin: '0 auto 1rem' }}>Wir sind dabei — bei jedem Event</h2>
                <p className="section-text" style={{ margin: '0 auto' }}>
                  Egal ob kleines Gartenfest oder großes Schützenfest — wir passen uns flexibel an Ihre Veranstaltung an.
                </p>
              </div>
              <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(140px, 100%), 1fr))', gap: '1rem' }}>
                {eventTypes.map(e => (
                  <div key={e.label} style={{ background: 'var(--color-surface)', border: '1px solid rgba(200,164,78,0.12)', padding: '1.5rem 1rem', textAlign: 'center' }}>
                    <div style={{ color: 'var(--color-gold)', marginBottom: '0.75rem' }}><Icon name={e.icon} size={28} /></div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', fontWeight: 300, margin: 0 }}>{e.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Portfolio */}
          <section className="section-block section-block--alt">
            <div className="section-container">
              <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                <p className="section-label">Was wir bieten</p>
                <h2 className="section-title" style={{ margin: '0 auto 1rem' }}>Unser vollständiges Portfolio</h2>
                <p className="section-text" style={{ margin: '0 auto' }}>
                  Alle Leistungen können einzeln gebucht oder zu einem individuellen Paket kombiniert werden.
                </p>
              </div>
              <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '1.5rem' }}>
                {portfolioItems.map(item => (
                  <div key={item.title} style={{ background: 'var(--color-surface-2)', border: '1px solid rgba(200,164,78,0.12)', padding: '2rem', textAlign: 'center' }}>
                    <div style={{ color: 'var(--color-gold)', marginBottom: '1rem' }}><Icon name={item.icon} size={28} /></div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 400, marginBottom: '0.75rem', color: 'var(--color-gold)' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.7, fontWeight: 300, margin: 0 }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pakete */}
          <section className="section-block">
            <div className="section-container">
              <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                <p className="section-label">Unsere Pakete</p>
                <h2 className="section-title" style={{ margin: '0 auto 1rem' }}>Fertige Pakete als Ausgangspunkt</h2>
                <p className="section-text" style={{ margin: '0 auto' }}>
                  Alle Pakete sind individuell anpassbar. Kontaktieren Sie uns für ein maßgeschneidertes Angebot.
                </p>
              </div>
              <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: '2rem', alignItems: 'start' }}>
                {packages.map(pkg => (
                  <div
                    key={pkg.title}
                    style={{
                      background: pkg.highlight ? 'rgba(200,164,78,0.07)' : 'var(--color-surface)',
                      border: pkg.highlight ? '1px solid var(--color-gold)' : '1px solid rgba(200,164,78,0.15)',
                      padding: '2.5rem',
                      position: 'relative',
                    }}
                  >
                    {pkg.highlight && (
                      <div style={{ position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)', background: 'var(--color-gold)', color: 'var(--color-bg)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '0.3rem 1rem', fontWeight: 600 }}>
                        Empfohlen
                      </div>
                    )}
                    <p style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '0.5rem' }}>{pkg.label}</p>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 400, marginBottom: '0.75rem' }}>{pkg.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '1.5rem', fontWeight: 300 }}>{pkg.description}</p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem' }}>
                      {pkg.items.map(item => (
                        <li key={item} style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', padding: '0.4rem 0', borderBottom: '1px solid rgba(200,164,78,0.08)', display: 'flex', gap: '0.75rem', alignItems: 'center', justifyContent: 'center' }}>
                          <span style={{ color: 'var(--color-gold)', flexShrink: 0, display: 'inline-flex' }}><Icon name="check" size={16} /></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(200,164,78,0.1)' }}>
                      <span style={{ fontSize: '0.8rem', letterSpacing: '0.08em', color: 'var(--color-text-muted)', fontWeight: 300 }}>{pkg.note}</span>
                      <BookingCTA primary={pkg.cta} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Warum Frankies */}
          <section className="section-block section-block--alt">
            <div className="section-container">
              <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p className="section-label">Darum Frankies</p>
                <h2 className="section-title" style={{ margin: '0 auto' }}>Warum Kunden uns wählen</h2>
              </div>
              <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))', gap: '1.5rem', justifyContent: 'center' }}>
                {[
                  { icon: 'check', title: 'Alles aus einer Hand', text: 'Ein Ansprechpartner für Personal, Equipment und Getränke — keine Koordination mehrerer Dienstleister.' },
                  { icon: 'bolt', title: 'Zuverlässig & pünktlich', text: 'Wir sind rechtzeitig vor Ort, bauen professionell auf und sorgen für einen reibungslosen Ablauf.' },
                  { icon: 'team', title: 'Erfahrenes Team', text: 'Unser Team weiß genau, worauf es ankommt. Ob Schützenfest oder Hochzeit — wir liefern Qualität.' },
                  { icon: 'gem', title: 'Transparent & fair', text: 'Klare Angebote ohne versteckte Kosten. Wir kalkulieren ehrlich und fair für Ihr Budget.' },
                ].map(item => (
                  <div key={item.title} style={{ textAlign: 'center' }}>
                    <div style={{ color: 'var(--color-gold)', marginBottom: '0.75rem' }}><Icon name={item.icon} size={28} /></div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 400, marginBottom: '0.5rem' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.7, fontWeight: 300, margin: 0 }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Kontaktformular */}
          <Kontakt />

          {/* Weitere Leistungen */}
          <section style={{ padding: '4rem 2rem', background: 'var(--color-surface)' }}>
            <div className="section-container" style={{ textAlign: 'center' }}>
              <p className="section-label" style={{ marginBottom: '1.5rem' }}>Weitere Seiten</p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {[
                  { href: '/cocktailbar-lennestadt', label: 'Mobile Cocktailbar' },
                  { href: '/getraenkeservice-schuetzenfest', label: 'Getränkeservice Schützenfest' },
                  { href: '/hochzeit-sauerland', label: 'Thekenservice Hochzeit' },
                  { href: '/eventservice-kreis-olpe', label: 'Eventservice Kreis Olpe' },
                  { href: '/', label: '← Zur Startseite' },
                ].map(link => (
                  <a key={link.href} href={link.href} style={{ padding: '0.7rem 1.4rem', border: '1px solid rgba(200,164,78,0.2)', color: 'var(--color-text-muted)', fontSize: '0.8rem', textDecoration: 'none', letterSpacing: '0.05em' }}>
                    {link.label}
                  </a>
                ))}
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
