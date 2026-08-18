import type { Metadata } from 'next'
import CocktailbarA from '@/components/entwuerfe/CocktailbarA'
import CocktailbarB from '@/components/entwuerfe/CocktailbarB'
import CocktailbarC from '@/components/entwuerfe/CocktailbarC'
import './entwuerfe-cb.css'

/*
  Entwurfsseite fuer den Teil der Cocktailbar-Sektion UNTER dem Foto.
  Das Scroll-Foto darueber bleibt in allen Varianten unveraendert — es
  stammt aus einer gelieferten Vorlage. Hier steht nur zur Wahl, was das
  bisherige "Was Sie erwartet" mit den vier Icon-Kaesten ersetzt.
  Nicht verlinkt, nicht im Index. Wird geloescht, sobald entschieden ist.
*/
export const metadata: Metadata = {
  title: 'Entwürfe Cocktailbar',
  robots: { index: false, follow: false },
}

export default function EntwurfCocktailbar() {
  return (
    /* .content-layer hebt den Inhalt ueber body::before — das ist ein
       fixierter Schleier mit 72% Schwarz, der auf den echten Seiten das
       Hintergrundfoto abdunkelt. Ohne ihn liegt der Entwurf darunter und
       wird um 72% abgedunkelt dargestellt. */
    <main className="content-layer" style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      <p className="cbent-marke">Entwurf A — Orte statt Behauptungen</p>
      <div className="cbent-block"><div className="cbent-container"><CocktailbarA /></div></div>

      <p className="cbent-marke">Entwurf B — die große Zahl</p>
      <div className="cbent-block"><div className="cbent-container"><CocktailbarB /></div></div>

      <p className="cbent-marke">Entwurf C — was dabei ist, als Liste</p>
      <div className="cbent-block"><div className="cbent-container"><CocktailbarC /></div></div>
    </main>
  )
}
