'use client'

import LogoLoop from './LogoLoop'

const eventTypes = [
  { node: <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'var(--color-text-muted)', whiteSpace: 'nowrap' as const }}><span style={{ color: 'var(--color-gold)' }}>✦</span> Schützenfest</span> },
  { node: <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'var(--color-text-muted)', whiteSpace: 'nowrap' as const }}><span style={{ color: 'var(--color-gold)' }}>✦</span> Hochzeit</span> },
  { node: <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'var(--color-text-muted)', whiteSpace: 'nowrap' as const }}><span style={{ color: 'var(--color-gold)' }}>✦</span> Mobile Cocktailbar</span> },
  { node: <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'var(--color-text-muted)', whiteSpace: 'nowrap' as const }}><span style={{ color: 'var(--color-gold)' }}>✦</span> Firmenfeier</span> },
  { node: <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'var(--color-text-muted)', whiteSpace: 'nowrap' as const }}><span style={{ color: 'var(--color-gold)' }}>✦</span> JGA</span> },
  { node: <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'var(--color-text-muted)', whiteSpace: 'nowrap' as const }}><span style={{ color: 'var(--color-gold)' }}>✦</span> Vereinsfest</span> },
  { node: <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'var(--color-text-muted)', whiteSpace: 'nowrap' as const }}><span style={{ color: 'var(--color-gold)' }}>✦</span> Dorffest</span> },
  { node: <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'var(--color-text-muted)', whiteSpace: 'nowrap' as const }}><span style={{ color: 'var(--color-gold)' }}>✦</span> Geburtstag</span> },
  { node: <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'var(--color-text-muted)', whiteSpace: 'nowrap' as const }}><span style={{ color: 'var(--color-gold)' }}>✦</span> Sommerfest</span> },
  { node: <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'var(--color-text-muted)', whiteSpace: 'nowrap' as const }}><span style={{ color: 'var(--color-gold)' }}>✦</span> Jubiläum</span> },
  { node: <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'var(--color-text-muted)', whiteSpace: 'nowrap' as const }}><span style={{ color: 'var(--color-gold)' }}>✦</span> Bulli-Bar</span> },
]

export default function EventStrip() {
  return (
    <div style={{
      borderTop: '1px solid rgba(200,164,78,0.1)',
      borderBottom: '1px solid rgba(200,164,78,0.1)',
      padding: '1.25rem 0',
      overflow: 'hidden',
      background: 'var(--color-surface)',
    }}>
      <LogoLoop
        logos={eventTypes}
        speed={60}
        direction="left"
        logoHeight={18}
        gap={48}
        hoverSpeed={0}
        fadeOut
        fadeOutColor="#161616"
        ariaLabel="Veranstaltungsarten"
      />
    </div>
  )
}
