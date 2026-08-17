'use client'

import React, { useEffect, useRef } from 'react'

// Das Stylesheet, das Lenis selbst mitliefert. Es schaltet unter anderem
// scroll-behavior: smooth ab, solange Lenis laeuft — sonst wuerden sich das
// weiche Scrollen von Lenis und das des Browsers gegenseitig stoeren.
import 'lenis/dist/lenis.css'

/*
  Parallax fuer den Hero — Technik und Ablauf aus der Vorlage (Osmo).

  Uebernommen ist der komplette Mechanismus: eine GSAP-Timeline mit
  ScrollTrigger, deren Trigger das Element [data-parallax-layers] ist,
  start "0% 0%", end "100% 0%", scrub 0, und eine Layer-Tabelle, die pro
  data-parallax-layer ein yPercent setzt. Alle Tweens laufen ab dem zweiten
  mit "<" gleichzeitig. Das ist Zeile fuer Zeile die Vorlage.

  Drei Dinge weichen ab, jeweils mit Grund:

  1) Layer-Tabelle. Die Vorlage hat vier Ebenen (70/55/40/10), das sind vier
     freigestellte Berg-Grafiken. Dieser Hero hat zwei Ebenen: das Foto und
     den Textblock. Es sind also die Werte "1" und "3" der Tabelle belegt,
     "2" und "4" bleiben leer und laufen ins Leere — deshalb sind sie hier
     nicht aufgefuehrt.

  2) Der Wert fuer die Foto-Ebene. Die Vorlage faehrt die hinterste Ebene mit
     yPercent 70. Das geht hier nicht, und zwar rechnerisch nicht: Das Foto
     ist eine fixierte, formatfuellende Ebene — das war die Vorgabe, damit es
     wie beim Footer stehen bleibt und verschwindet. Eine solche Ebene der
     Hoehe H = V + 2*ueberstand darf hoechstens um den Ueberstand wandern,
     sonst laeuft eine Kante ins Bild. Aus (V + 2*u) * P/100 <= u folgt
     u >= V*P/(100 - 2P), und das hat ab P = 50 keine Loesung mehr. Bei
     P = 70 gibt es also keinen Ueberstand, der reicht. Mit u = 22vh ist
     P = 14 der groesste Wert, der sauber bleibt.

  3) Lenis. Die Vorlage startet zusaetzlich eine Lenis-Instanz fuer weiches
     Scrollen. Das ist unten drin, das Paket liegt als "lenis" im Projekt —
     "@studio-freight/lenis" ist derselbe Code unter dem alten Namen, ein
     zweites Mal installiert laege die Bibliothek doppelt im Bundle.

  gsap und ScrollTrigger werden nachgeladen statt statisch importiert.
  Statisch landen sie im ersten Client-Bundle und kosteten gemessen rund
  1000ms auf dem Handy, obwohl der Effekt erst beim Scrollen gebraucht wird.
  Am Verhalten aendert das nichts.
*/
export function HeroParallax({ children }: { children: React.ReactNode }) {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let aufraeumen: (() => void) | undefined
    let abgebrochen = false

    // Wer im Betriebssystem weniger Bewegung eingestellt hat, bekommt keine.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    ;(async () => {
      const [{ default: gsap }, { ScrollTrigger }, { default: Lenis }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
        import('lenis'),
      ])
      if (abgebrochen) return

      gsap.registerPlugin(ScrollTrigger)

      const triggerElement = parallaxRef.current?.querySelector('[data-parallax-layers]')

      if (triggerElement) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            start: '0% 0%',
            end: '100% 0%',
            scrub: 0,
          },
        })

        const layers = [
          { layer: '1', yPercent: 14 },
          { layer: '3', yPercent: 40 },
        ]

        layers.forEach((layerObj, idx) => {
          tl.to(
            triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
            {
              yPercent: layerObj.yPercent,
              ease: 'none',
            },
            idx === 0 ? undefined : '<'
          )
        })
      }

      const lenis = new Lenis()
      lenis.on('scroll', ScrollTrigger.update)
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
      })
      gsap.ticker.lagSmoothing(0)

      aufraeumen = () => {
        ScrollTrigger.getAll().forEach((st) => st.kill())
        // Die Vorlage ruft das ohne Pruefung auf; querySelector kann aber
        // null liefern, und dafuer hat killTweensOf keinen Typ.
        if (triggerElement) gsap.killTweensOf(triggerElement)
        lenis.destroy()
      }
    })()

    return () => {
      abgebrochen = true
      aufraeumen?.()
    }
  }, [])

  return (
    <div className="parallax" ref={parallaxRef}>
      {children}
    </div>
  )
}
