'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const EVENT_TYPES = ['Hochzeit', 'Schützenfest', 'Geburtstag', 'Firmenfeier', 'JGA', 'Vereinsfest', 'Dorffest', 'Sonstiges']
const GUEST_COUNTS = ['bis 50', '50–100', '100–200', '200–300', '300+']
const PACKAGES = [
  { key: 'Flat 30', sub: '30 Cocktails · 1,5 Std' },
  { key: 'Flat 50', sub: '50 Cocktails · 2,5 Std' },
  { key: 'Flat 100', sub: '100 Cocktails · 3,5 Std' },
  { key: 'Individuell', sub: 'Ab 100 Cocktails · nach Absprache' },
]

const CALCOM_URL = process.env.NEXT_PUBLIC_CALCOM_URL || 'https://cal.com/frankies.digital/15min'
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ''

interface FormState {
  cocktailPackage: string
  eventType: string
  guestCount: string
  eventDate: string
  eventLocation: string
  firstName: string
  lastName: string
  email: string
  phone: string
  street: string
  zip: string
  city: string
  message: string
}

const EMPTY: FormState = {
  cocktailPackage: '',
  eventType: '', guestCount: '', eventDate: '', eventLocation: '',
  firstName: '', lastName: '', email: '', phone: '',
  street: '', zip: '', city: '', message: '',
}

interface Props {
  onClose: () => void
  initialPackage?: string
}

export default function BookingModal({ onClose, initialPackage }: Props) {
  const [mounted, setMounted] = useState(false)
  const [step, setStep] = useState<1 | 2>(1)
  const [form, setForm] = useState<FormState>({ ...EMPTY, cocktailPackage: initialPackage || '' })
  const [sending, setSending] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => { setMounted(true) }, [])

  const set = (k: keyof FormState, v: string) => setForm(p => ({ ...p, [k]: v }))

  const showPackages = initialPackage !== undefined
  const step1OK = !!(
    form.eventType &&
    form.guestCount &&
    form.eventDate &&
    form.eventLocation &&
    (!showPackages || form.cocktailPackage)
  )
  const step2OK = !!(form.firstName && form.lastName && form.email && form.phone && form.street && form.zip && form.city)

  const calUrl = `${CALCOM_URL}?name=${encodeURIComponent(form.firstName + ' ' + form.lastName)}&email=${encodeURIComponent(form.email)}&notes=${encodeURIComponent(`${form.eventType}, ${form.guestCount} Gäste, ${form.eventLocation}, ${form.eventDate}`)}`

  const submit = async () => {
    setSending(true)
    setError('')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          botcheck: false,
          subject: `Buchungsanfrage: ${form.eventType} — ${form.firstName} ${form.lastName}`,
          from_name: 'Frankies Eventservice Booking',
          ...(form.cocktailPackage ? { 'Cocktailbar-Paket': form.cocktailPackage } : {}),
          'Art der Veranstaltung': form.eventType,
          'Anzahl Gäste': form.guestCount,
          'Datum': form.eventDate,
          'Veranstaltungsort': form.eventLocation,
          'Name': `${form.firstName} ${form.lastName}`,
          'E-Mail': form.email,
          'Telefon': form.phone,
          'Adresse': `${form.street}, ${form.zip} ${form.city}`,
          'Nachricht': form.message || '–',
        }),
      })
      const data = await res.json()
      if (!data.success) throw new Error(data.message || 'Unbekannter Fehler')
      setDone(true)
    } catch (err) {
      const msg = err instanceof Error ? err.message : ''
      setError(`Fehler beim Senden${msg ? `: ${msg}` : ''}. Bitte rufen Sie uns direkt an: 0151 42840916`)
    } finally {
      setSending(false)
    }
  }

  if (!mounted) return null

  const modal = (
    <div
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(6px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        style={{ background: 'var(--color-surface)', border: '1px solid rgba(200,164,78,0.22)', maxWidth: '560px', width: '100%', maxHeight: '90vh', overflowY: 'auto', position: 'relative' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ padding: '1.75rem 2rem 1.25rem', borderBottom: '1px solid rgba(200,164,78,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <p style={labelStyle}>
              {done ? 'Abgeschlossen' : `Schritt ${step} von 2`}
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 400, margin: 0 }}>
              {done ? 'Anfrage gesendet ✓' : step === 1 ? 'Ihre Veranstaltung' : 'Ihre Kontaktdaten'}
            </h2>
          </div>
          <button onClick={onClose} aria-label="Schließen" style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', fontSize: '1.8rem', cursor: 'pointer', lineHeight: 1, padding: 0, marginTop: '-4px' }}>×</button>
        </div>

        <div style={{ padding: '2rem' }}>

          {/* DONE */}
          {done && (
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: 64, height: 64, border: '2px solid var(--color-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.5rem', color: 'var(--color-gold)' }}>✓</div>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '0.5rem', fontSize: '1rem' }}>
                Vielen Dank, <strong style={{ color: 'var(--color-text)' }}>{form.firstName}</strong>!<br />
                Wir melden uns innerhalb von 24 Stunden bei Ihnen.
              </p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Möchten Sie bereits jetzt einen Beratungstermin in unserem Kalender buchen?
              </p>
              <a href={calUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'block', textAlign: 'center', marginBottom: '1rem' }}>
                Termin im Kalender buchen
              </a>
              <button onClick={onClose} className="btn-secondary" style={{ width: '100%' }}>
                Fenster schließen
              </button>
            </div>
          )}

          {/* STEP 1 */}
          {!done && step === 1 && (
            <div>
              {showPackages && (
                <>
                  <p style={labelStyle}>Cocktailbar-Paket *</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {PACKAGES.map(pkg => (
                      <button
                        key={pkg.key}
                        type="button"
                        onClick={() => set('cocktailPackage', pkg.key)}
                        style={{ ...chipStyle, ...(form.cocktailPackage === pkg.key ? chipActiveStyle : {}), flexDirection: 'column', alignItems: 'flex-start', padding: '0.6rem 1rem' }}
                      >
                        <span style={{ fontWeight: 500 }}>{pkg.key}</span>
                        <span style={{ fontSize: '0.72rem', opacity: 0.7 }}>{pkg.sub}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}

              <p style={labelStyle}>Art der Veranstaltung *</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {EVENT_TYPES.map(t => (
                  <button key={t} type="button" onClick={() => set('eventType', t)} style={{ ...chipStyle, ...(form.eventType === t ? chipActiveStyle : {}) }}>
                    {t}
                  </button>
                ))}
              </div>

              <p style={labelStyle}>Anzahl Gäste *</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {GUEST_COUNTS.map(g => (
                  <button key={g} type="button" onClick={() => set('guestCount', g)} style={{ ...chipStyle, ...(form.guestCount === g ? chipActiveStyle : {}) }}>
                    {g}
                  </button>
                ))}
              </div>

              <p style={labelStyle}>Wunschdatum *</p>
              <input type="date" value={form.eventDate} onChange={e => set('eventDate', e.target.value)} style={inputStyle} min={new Date().toISOString().split('T')[0]} />

              <p style={labelStyle}>Veranstaltungsort *</p>
              <input type="text" placeholder="z.B. Festzelt Kirchhundem" value={form.eventLocation} onChange={e => set('eventLocation', e.target.value)} style={inputStyle} />

              <button type="button" onClick={() => setStep(2)} disabled={!step1OK} className="btn-primary" style={{ width: '100%', marginTop: '0.5rem', opacity: step1OK ? 1 : 0.4, cursor: step1OK ? 'pointer' : 'not-allowed' }}>
                Weiter zu Ihren Daten
              </button>
            </div>
          )}

          {/* STEP 2 */}
          {!done && step === 2 && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <p style={labelStyle}>Vorname *</p>
                  <input type="text" placeholder="Max" value={form.firstName} onChange={e => set('firstName', e.target.value)} style={inputStyle} />
                </div>
                <div>
                  <p style={labelStyle}>Nachname *</p>
                  <input type="text" placeholder="Muster" value={form.lastName} onChange={e => set('lastName', e.target.value)} style={inputStyle} />
                </div>
              </div>

              <p style={labelStyle}>E-Mail *</p>
              <input type="email" placeholder="max@beispiel.de" value={form.email} onChange={e => set('email', e.target.value)} style={inputStyle} />

              <p style={labelStyle}>Telefon *</p>
              <input type="tel" placeholder="+49 151 234 567" value={form.phone} onChange={e => set('phone', e.target.value)} style={inputStyle} />

              <p style={labelStyle}>Straße &amp; Hausnummer *</p>
              <input type="text" placeholder="Musterstraße 7" value={form.street} onChange={e => set('street', e.target.value)} style={inputStyle} />

              <div style={{ display: 'grid', gridTemplateColumns: '5rem 1fr', gap: '0.75rem' }}>
                <div>
                  <p style={labelStyle}>PLZ *</p>
                  <input type="text" placeholder="57368" value={form.zip} onChange={e => set('zip', e.target.value)} style={inputStyle} maxLength={5} />
                </div>
                <div>
                  <p style={labelStyle}>Ort *</p>
                  <input type="text" placeholder="Lennestadt" value={form.city} onChange={e => set('city', e.target.value)} style={inputStyle} />
                </div>
              </div>

              <p style={labelStyle}>Nachricht (optional)</p>
              <textarea placeholder="Besondere Wünsche, Fragen..." value={form.message} onChange={e => set('message', e.target.value)} rows={3} style={{ ...inputStyle, resize: 'vertical' }} />

              {error && <p style={{ color: '#e07070', fontSize: '0.85rem', marginBottom: '1rem' }}>{error}</p>}

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.25rem' }}>
                <button type="button" onClick={() => setStep(1)} className="btn-secondary" style={{ flex: '0 0 auto', padding: '1rem 1.25rem' }}>← Zurück</button>
                <button type="button" onClick={submit} disabled={!step2OK || sending} className="btn-primary" style={{ flex: 1, opacity: step2OK && !sending ? 1 : 0.4, cursor: step2OK && !sending ? 'pointer' : 'not-allowed' }}>
                  {sending ? 'Wird gesendet...' : 'Anfrage absenden ✓'}
                </button>
              </div>
              <p style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', marginTop: '0.75rem', textAlign: 'center' }}>
                * Pflichtfelder. Daten werden nur zur Bearbeitung Ihrer Anfrage genutzt.
              </p>
            </div>
          )}
        </div>

        {/* Progress bar */}
        {!done && (
          <div style={{ padding: '0 2rem 1.25rem', display: 'flex', gap: '0.4rem' }}>
            <div style={{ height: 2, flex: 1, background: 'var(--color-gold)' }} />
            <div style={{ height: 2, flex: 1, background: step === 2 ? 'var(--color-gold)' : 'rgba(200,164,78,0.2)', transition: 'background 0.4s' }} />
          </div>
        )}
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}

const labelStyle: React.CSSProperties = {
  fontSize: '0.68rem', letterSpacing: '0.16em', textTransform: 'uppercase',
  color: 'var(--color-text-muted)', marginBottom: '0.4rem', marginTop: 0,
}

const inputStyle: React.CSSProperties = {
  display: 'block', width: '100%', padding: '0.75rem 1rem', background: 'var(--color-surface-2)',
  border: '1px solid rgba(200,164,78,0.15)', color: 'var(--color-text)', fontSize: '0.9rem',
  marginBottom: '1rem', outline: 'none', boxSizing: 'border-box',
  fontFamily: 'var(--font-body, system-ui)',
}

const chipStyle: React.CSSProperties = {
  padding: '0.45rem 1rem', fontSize: '0.82rem', cursor: 'pointer',
  background: 'transparent', color: 'var(--color-text-muted)',
  border: '1px solid rgba(200,164,78,0.22)', transition: 'all 0.15s',
  fontFamily: 'var(--font-body, system-ui)',
  display: 'inline-flex',
}

const chipActiveStyle: React.CSSProperties = {
  background: 'var(--color-gold)', color: 'var(--color-bg)',
  border: '1px solid var(--color-gold)',
}
