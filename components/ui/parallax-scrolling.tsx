'use client'

import { useEffect } from 'react'

/*
  Parallax fuer die Hero-Ebene.

  Was von der Vorlage uebernommen ist: die Technik. GSAP ScrollTrigger mit
  scrub, das eine Ebene ueber den Scrollweg des Triggers verschiebt.

  Was nicht uebernommen ist, und warum:
  - Das Markup der Vorlage ist eine Demo-Seite mit fest verdrahteten
    Berg-Grafiken von einem fremden CDN, der Ueberschrift "Parallax" und
    einem Fremdlogo. Als Bausteine fuer diese Seite unbrauchbar.
  - Die Vorlage bringt fuer keine ihrer Klassen CSS mit. Ohne Layout waeren
    es vier untereinander gestapelte Bilder.
  - Die Vorlage startet zusaetzlich eine eigene Lenis-Instanz. Lenis
    veraendert das Scrollverhalten der gesamten Website, nicht nur des Hero.
    Das ist eine andere Entscheidung als "Parallax im Hero" und deshalb hier
    bewusst nicht enthalten.
  - Sie importiert aus "@studio-freight/lenis" — dem alten Namen des bereits
    installierten Pakets "lenis". Neu zu installieren haette dieselbe
    Bibliothek doppelt ins Bundle gelegt.

  Bewegt wird die Foto-Ebene ueber die CSS-Variable --parallax-y, die
  .hero-backdrop::before in seinem transform verwendet. Damit bleibt das
  Foto eine reine CSS-Ebene und braucht kein zusaetzliches DOM-Element.
*/
export function HeroParallax() {
  useEffect(() => {
    const ziel = document.querySelector<HTMLElement>('.hero-backdrop')
    if (!ziel) return

    // Wer weniger Bewegung eingestellt hat, bekommt keine.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let aufraeumen: (() => void) | undefined
    let abgebrochen = false

    // gsap und ScrollTrigger erst nach dem ersten Seitenaufbau holen. Statisch
    // importiert kosteten sie gemessen rund 1000ms Ladezeit auf dem Handy,
    // obwohl der Effekt erst beim Scrollen gebraucht wird.
    ;(async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ])
      if (abgebrochen) return

      gsap.registerPlugin(ScrollTrigger)

      const tween = gsap.to(ziel, {
        '--parallax-y': '120px',
        ease: 'none',
        scrollTrigger: {
          trigger: ziel,
          start: '0% 0%',
          end: '100% 0%',
          scrub: 0,
        },
      })

      aufraeumen = () => {
        tween.scrollTrigger?.kill()
        tween.kill()
        gsap.set(ziel, { '--parallax-y': '0px' })
      }
    })()

    return () => {
      abgebrochen = true
      aufraeumen?.()
    }
  }, [])

  return null
}
