import type { Metadata } from 'next'
import LeistungenA from '@/components/entwuerfe/LeistungenA'
import LeistungenB from '@/components/entwuerfe/LeistungenB'
import LeistungenC from '@/components/entwuerfe/LeistungenC'
import './entwuerfe.css'

/*
  Entwurfsseite. Nicht verlinkt, nicht im Index, nicht in der sitemap.
  Sie existiert nur, damit drei Varianten der Leistungen-Sektion
  nebeneinander zu sehen sind, bevor eine davon auf die Startseite kommt.
  Wird geloescht, sobald entschieden ist.
*/
export const metadata: Metadata = {
  title: 'Entwürfe Leistungen',
  robots: { index: false, follow: false },
}

export default function EntwurfLeistungen() {
  return (
    /* .content-layer hebt den Inhalt ueber body::before — das ist ein
       fixierter Schleier mit 72% Schwarz, der auf den echten Seiten das
       Hintergrundfoto abdunkelt. Ohne ihn liegt der Entwurf darunter und
       wird um 72% abgedunkelt dargestellt. */
    <main className="content-layer" style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      <p className="ent-marke">Entwurf A — Editorial-Liste</p>
      <LeistungenA />

      <p className="ent-marke">Entwurf B — Foto-Raster</p>
      <LeistungenB />

      <p className="ent-marke">Entwurf C — Sticky-Split</p>
      <LeistungenC />
    </main>
  )
}
