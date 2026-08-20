import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import HeroEntwuerfe from '@/components/entwuerfe/HeroEntwuerfe'

export const metadata: Metadata = {
  title: 'Entwurf: Hero',
  robots: { index: false, follow: false },
}

/*
  Entwurfsseite zum Ansehen, nicht zum Verlinken. Steht nicht in der
  sitemap und traegt robots noindex.

  Der Inhalt liegt in .content-layer — ohne das legt sich der fixierte
  Abdunkler aus globals.css (body::before, 72 % Schwarz) darueber.
*/
export default function EntwurfHero() {
  return (
    <>
      <Navbar />
      <main className="content-layer">
        <HeroEntwuerfe />
      </main>
    </>
  )
}
