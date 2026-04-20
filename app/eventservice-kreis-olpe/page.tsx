import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Eventservice Kreis Olpe | Getränke- & Veranstaltungsservice – Frankies Eventservice',
  description: 'Ihr Eventservice im Kreis Olpe und Sauerland. Professioneller Getränke- und Thekenservice für alle Veranstaltungen jeder Art – zuverlässig, flexibel und erfahren.',
  alternates: { canonical: 'https://frankies-eventservice.de/eventservice-kreis-olpe' },
}

export default function EventserviceKreisOlpe() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', background: 'var(--color-bg)', minHeight: '100vh' }}>

        <section style={{ padding: '5rem 2rem 4rem', background: 'var(--color-surface)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '1rem' }}>
              Kreis Olpe &amp; Sauerland
            </p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 400, lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Eventservice im<br />Kreis Olpe
            </h1>
            <p style={{ fontSize: '1.05rem', fontWeight: 300, color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
              Von Lennestadt bis Attendorn — Frankies Eventservice ist Ihr Ansprechpartner für professionellen Getränke- und Thekenservice im gesamten Kreis Olpe und Sauerland.
            </p>
            <a href="tel:+4915142840916" style={{ display: 'inline-block', background: 'var(--color-gold)', color: 'var(--color-bg)', padding: '1rem 2.5rem', fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Jetzt anfragen
            </a>
          </div>
        </section>

        <section style={{ padding: '5rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 400, marginBottom: '1.5rem' }}>
            Veranstaltungsservice für alle Anlässe
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '1.5rem' }}>
            Egal ob Schützenfest, Hochzeit, Vereinsjubiläum, Firmenfeier oder Dorffest — wir bieten Ihnen einen zuverlässigen und professionellen Getränkeservice für Veranstaltungen jeder Art und jeder Größe im Kreis Olpe.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '2.5rem' }}>
            Mit Sitz in Lennestadt sind wir schnell vor Ort — in Olpe, Attendorn, Finnentrop, Kirchhundem, Wenden, Drolshagen und allen weiteren Gemeinden des Kreises. Wir kennen die Region und ihre Veranstaltungskultur.
          </p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 400, marginBottom: '1rem' }}>
            Unser Einsatzgebiet
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem' }}>
            {['Lennestadt', 'Olpe', 'Attendorn', 'Finnentrop', 'Kirchhundem', 'Wenden', 'Drolshagen', 'Schmallenberg', 'Plettenberg', 'Meschede', 'Kreuztal'].map(ort => (
              <span key={ort} style={{ padding: '0.5rem 1.25rem', border: '1px solid rgba(200,164,78,0.2)', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                {ort}
              </span>
            ))}
          </div>

          <div style={{ padding: '2rem', background: 'var(--color-surface)', border: '1px solid rgba(200,164,78,0.15)', marginBottom: '2.5rem' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Kontakt & Adresse</p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.8, fontWeight: 300 }}>
              Frankies Eventservice · Mustafa Yildirim<br />
              Hachener Str. 7 · 57368 Lennestadt<br />
              <a href="tel:+4915142840916" style={{ color: 'var(--color-gold)' }}>0151 42840916</a> ·{' '}
              <a href="mailto:info@frankies-eventservice.de" style={{ color: 'var(--color-gold)' }}>info@frankies-eventservice.de</a>
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:+4915142840916" style={{ display: 'inline-block', background: 'var(--color-gold)', color: 'var(--color-bg)', padding: '1rem 2rem', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
              0151 42840916
            </a>
            <a href="/" style={{ display: 'inline-block', border: '1px solid rgba(200,164,78,0.3)', color: 'var(--color-text)', padding: '1rem 2rem', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
              ← Zur Startseite
            </a>
          </div>
        </section>

        <section style={{ padding: '3rem 2rem 5rem', background: 'var(--color-surface)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '1.5rem' }}>Spezifische Leistungen</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {[
                { href: '/cocktailbar-lennestadt', label: 'Mobile Cocktailbar Lennestadt' },
                { href: '/getraenkeservice-schuetzenfest', label: 'Getränkeservice Schützenfest' },
                { href: '/hochzeit-sauerland', label: 'Thekenservice Hochzeit' },
              ].map(link => (
                <a key={link.href} href={link.href} style={{ padding: '0.6rem 1.25rem', border: '1px solid rgba(200,164,78,0.2)', color: 'var(--color-text-muted)', fontSize: '0.8rem', textDecoration: 'none', letterSpacing: '0.05em' }}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
