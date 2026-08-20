import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Entwürfe: Startseite',
  robots: { index: false, follow: false },
}

/*
  Uebersicht der drei Startseiten-Entwuerfe. Nicht verlinkt, nicht in der
  sitemap, noindex — nur zum Ansehen und Vergleichen.
*/
const ENTWUERFE = [
  { nr: '1', name: 'Ruhig', text: 'Reduziert und redaktionell. Nummerierte Kapitel, Haarlinien, ein einziges Foto — die Typografie trägt.' },
  { nr: '2', name: 'Bildgetrieben', text: 'Die Fotos und das Video tragen die Seite. Vollbild-Hero, Fotokarten, Zitat über dem Teamfoto.' },
  { nr: '3', name: 'Markant', text: 'Übergroße Typografie, Laufband, Bento-Raster — und eine komplett goldene Preissektion als Bruch.' },
]

export default function EntwurfUebersicht() {
  return (
    <div className="sx-seite" style={{ minHeight: '100vh', padding: 'clamp(4rem, 12vh, 8rem) 1.5rem' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '1rem' }}>
          Entwurf — nicht im Index
        </p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
          Startseite: drei Entwürfe
        </h1>
        <p style={{ fontWeight: 300, lineHeight: 1.75, color: 'var(--color-text-muted)', marginBottom: '3rem', maxWidth: '58ch' }}>
          Drei komplette Startseiten mit echten Inhalten — gleiche Marke, drei
          verschiedene Formsprachen. Jede ist in voller Länge gebaut, auch fürs Handy.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {ENTWUERFE.map((e) => (
            <Link
              key={e.nr}
              href={`/entwurf/seite/${e.nr}`}
              style={{
                display: 'grid', gridTemplateColumns: '3rem 1fr', gap: '1.25rem',
                padding: '1.5rem', textDecoration: 'none',
                background: 'var(--color-surface)', border: '1px solid rgba(200,164,78,0.2)',
              }}
            >
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', lineHeight: 1, color: 'var(--color-gold)' }}>{e.nr}</span>
              <span>
                <strong style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.3rem', color: 'var(--color-text)', marginBottom: '0.3rem' }}>
                  {e.name}
                </strong>
                <span style={{ fontWeight: 300, fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>{e.text}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
