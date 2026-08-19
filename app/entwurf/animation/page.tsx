import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import AnimationEntwuerfe from '@/components/entwuerfe/AnimationEntwuerfe'

export const metadata: Metadata = {
  title: 'Entwurf: Animationen',
  robots: { index: false, follow: false },
}

/*
  Entwurfsseite zum Ansehen, nicht zum Verlinken. Sie steht bewusst nicht in
  der sitemap und traegt robots noindex.

  Der Inhalt liegt in .content-layer. Ohne das legt sich der fixierte
  Abdunkler aus globals.css (body::before, 72 % Schwarz) darueber und die
  Seite kaeme deutlich zu dunkel an — genau der Fehler von den letzten
  Entwurfsseiten.
*/
export default function EntwurfAnimation() {
  return (
    <>
      <Navbar />
      <main className="content-layer">
        <AnimationEntwuerfe />
      </main>
    </>
  )
}
