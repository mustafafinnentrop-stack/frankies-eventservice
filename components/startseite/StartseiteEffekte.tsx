'use client'

import { useEffect } from 'react'

/*
  Zwei kleine Dinge, die nur im Browser gehen:

  1. html.sn-js — erst mit dieser Klasse blendet das Stylesheet Bausteine
     mit .sn-reveal aus. Ohne JavaScript bleibt alles sichtbar, statt fuer
     immer unsichtbar auf einen Beobachter zu warten, der nie kommt.
  2. Der Beobachter selbst: Sobald ein Baustein ins Bild kommt, bekommt er
     .is-visible und blendet einmal ein. Danach wird er nicht mehr beobachtet.
*/
export default function StartseiteEffekte() {
  useEffect(() => {
    const html = document.documentElement
    html.classList.add('sn-js')
    const ziele = document.querySelectorAll<HTMLElement>('.sn-reveal')
    if (!('IntersectionObserver' in window)) {
      ziele.forEach((el) => el.classList.add('is-visible'))
      return () => html.classList.remove('sn-js')
    }
    const beobachter = new IntersectionObserver(
      (eintraege) => {
        for (const e of eintraege) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            beobachter.unobserve(e.target)
          }
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -25px 0px' },
    )
    ziele.forEach((el) => beobachter.observe(el))
    return () => {
      beobachter.disconnect()
      html.classList.remove('sn-js')
    }
  }, [])
  return null
}
