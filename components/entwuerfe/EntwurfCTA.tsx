'use client'

import { useState } from 'react'
import BookingModal from '../BookingModal'

/*
  Knopfpaar der Startseiten-Entwuerfe: echtes Anfrageformular plus
  Telefonnummer. Eigene Komponente statt BookingCTA, weil die ihre
  Knoepfe zentriert — die Entwuerfe brauchen sie linksbuendig, und die
  Ausrichtung soll die umgebende Klasse bestimmen.
*/
export default function EntwurfCTA({ klasse }: { klasse?: string }) {
  const [offen, setOffen] = useState(false)
  return (
    <div className={klasse}>
      {offen && <BookingModal onClose={() => setOffen(false)} />}
      <button type="button" className="btn-primary" onClick={() => setOffen(true)}>
        Angebot anfordern
      </button>
      <a href="tel:+4915142840916" className="btn-secondary">0151 42840916</a>
    </div>
  )
}
