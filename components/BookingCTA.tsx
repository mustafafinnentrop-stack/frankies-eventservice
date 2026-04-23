'use client'

import { useState } from 'react'
import BookingModal from './BookingModal'

interface Props {
  primary?: string
  secondary?: string
  calcomUrl?: string
  layout?: 'row' | 'banner'
  pkg?: string
}

const CALCOM_URL = process.env.NEXT_PUBLIC_CALCOM_URL || 'https://cal.com/frankies.digital/15min'

export default function BookingCTA({ primary = 'Unverbindlich anfragen', secondary, calcomUrl, layout = 'row', pkg }: Props) {
  const [open, setOpen] = useState(false)
  const url = calcomUrl || CALCOM_URL

  if (layout === 'banner') {
    return (
      <>
        {open && <BookingModal onClose={() => setOpen(false)} initialPackage={pkg} />}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 400, marginBottom: '0.4rem' }}>Termin sichern</p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', fontWeight: 300 }}>Kostenloses Erstgespräch — wir melden uns innerhalb von 24 Stunden.</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={() => setOpen(true)} className="btn-primary">{primary}</button>
            <a href={url} target="_blank" rel="noopener noreferrer" className="btn-secondary">Kalender öffnen</a>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {open && <BookingModal onClose={() => setOpen(false)} initialPackage={pkg} />}
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button onClick={() => setOpen(true)} className="btn-primary">{primary}</button>
        {secondary && <a href={url} target="_blank" rel="noopener noreferrer" className="btn-secondary">{secondary}</a>}
      </div>
    </>
  )
}
