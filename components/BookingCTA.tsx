'use client'

import { useState } from 'react'
import BookingModal from './BookingModal'

interface Props {
  primary?: string
  secondary?: string
  calcomUrl?: string
  layout?: 'row' | 'banner'
}

const CALCOM_URL = process.env.NEXT_PUBLIC_CALCOM_URL || 'https://cal.com/frankies-eventservice/beratung'

export default function BookingCTA({ primary = 'Termin & Anfrage →', secondary, calcomUrl, layout = 'row' }: Props) {
  const [open, setOpen] = useState(false)
  const url = calcomUrl || CALCOM_URL

  if (layout === 'banner') {
    return (
      <>
        {open && <BookingModal onClose={() => setOpen(false)} />}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 400, marginBottom: '0.4rem' }}>Direkt Termin buchen</p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', fontWeight: 300 }}>Wählen Sie einen Beratungstermin in unserem Online-Kalender.</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={() => setOpen(true)} className="btn-primary">{primary}</button>
            <a href={url} target="_blank" rel="noopener noreferrer" className="btn-secondary">Kalender öffnen →</a>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {open && <BookingModal onClose={() => setOpen(false)} />}
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button onClick={() => setOpen(true)} className="btn-primary">{primary}</button>
        {secondary && <a href={url} target="_blank" rel="noopener noreferrer" className="btn-secondary">{secondary}</a>}
      </div>
    </>
  )
}
