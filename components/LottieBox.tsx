'use client'

import { useImperativeHandle, useRef } from 'react'
import { LottieLight, type LottieHandle } from 'lottie-react'

export type LottieSteuerung = { nochmal: () => void }

type Props = {
  /* Dateiname ohne Pfad und Endung, z. B. "haken" fuer /lottie/haken.json */
  name: string
  groesse?: number
  wiederholen?: boolean
  ref?: React.Ref<LottieSteuerung>
}

/*
  Duenne Huelle um lottie-react.

  Zwei Entscheidungen stecken darin:

  1. LottieLight statt Lottie. Die volle Fassung bringt drei Renderer und die
     Ausdrucksauswertung mit. Unsere Dateien brauchen davon nichts — sie sind
     selbst gebaut und enthalten weder Ausdruecke noch Bilder. Die kleine
     Fassung ist rund ein Drittel so gross.

  2. src als Pfad, nicht als Import. Damit liegen die Animationsdaten in
     public/lottie/ und nicht im JavaScript-Bundle: wer das Formular nie
     abschickt, laedt die Datei auch nie. Getauscht werden kann sie spaeter
     ohne neuen Build.
*/
export default function LottieBox({ name, groesse = 160, wiederholen = false, ref }: Props) {
  const spieler = useRef<LottieHandle>(null)

  useImperativeHandle(ref, () => ({
    nochmal: () => {
      spieler.current?.stop()
      spieler.current?.play()
    },
  }), [])

  return (
    <LottieLight
      lottieRef={spieler}
      src={`/lottie/${name}.json`}
      loop={wiederholen}
      autoplay
      subscriptions={{
        /*
          Wer im Betriebssystem "Bewegung reduzieren" gesetzt hat, bekommt das
          Schlussbild statt der Bewegung. Nicht nichts — die Zeichnung traegt
          die Aussage, die Bewegung ist nur die Zugabe.
        */
        ready: () => {
          if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            spieler.current?.seek({ percent: 100 })
            spieler.current?.pause()
          }
        },
      }}
      style={{ width: groesse, height: groesse }}
      /* Rein dekorativ: die Aussage steht als Text daneben. */
      aria-hidden="true"
    />
  )
}
