/**
 * Einheitlicher Icon-Satz. Ersetzt die zuvor verwendeten Emoji, die auf jedem
 * Gerät anders rendern, sich nicht einfärben lassen und die Seite generisch
 * wirken lassen.
 *
 * Alle Pfade: 24x24 Raster, Kontur statt Fläche, Strichstärke 1.5,
 * currentColor — dadurch erben sie die Textfarbe und lassen sich per CSS
 * in Gold setzen.
 */

const P: Record<string, React.ReactNode> = {
  // Getränke
  beer: <><path d="M6 8h8v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8Z" /><path d="M14 11h2.5a2.5 2.5 0 0 1 0 5H14" /><path d="M6 8c0-2 1-3 2-3s1.2.6 2 .6S11.2 4 12 4s2 1 2 4" /></>,
  cocktail: <><path d="M4 5h16l-8 8-8-8Z" /><path d="M12 13v7" /><path d="M8 20h8" /><path d="m16 5-1.5 3" /></>,
  bamboo: <><path d="M8 3v18M16 3v18" /><path d="M5 8h6M13 8h6M5 14h6M13 14h6" /></>,

  // Anlässe
  ring: <><circle cx="12" cy="15" r="5" /><path d="m9 8 3-4 3 4" /><path d="M9 8h6" /></>,
  cake: <><path d="M4 21h16v-7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v7Z" /><path d="M12 8V5" /><path d="M4 16c2 0 2 1.5 4 1.5S12 16 12 16s2 1.5 4 1.5 2-1.5 4-1.5" /></>,
  tent: <><path d="m12 4 9 16H3l9-16Z" /><path d="M12 4v16" /><path d="m12 12 4 8M12 12l-4 8" /></>,
  building: <><path d="M5 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16" /><path d="M15 10h3a1 1 0 0 1 1 1v10" /><path d="M8 8h2M8 12h2M8 16h2" /><path d="M3 21h18" /></>,
  graduation: <><path d="m12 5 9 4-9 4-9-4 9-4Z" /><path d="M7 11v4c0 1.5 2.2 2.5 5 2.5s5-1 5-2.5v-4" /></>,
  target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" /></>,
  sparkles: <><path d="m12 4 1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6L12 4Z" /><path d="M18 15.5 18.8 18l2.2.8-2.2.8L18 22l-.8-2.4-2.2-.8 2.2-.8.8-2.5Z" /></>,

  // Ausstattung
  counter: <><path d="M3 10h18" /><path d="M5 10v10M19 10v10" /><path d="M3 20h18" /><path d="m5 10 2-5h10l2 5" /></>,
  chair: <><path d="M6 4v7h12V4" /><path d="M5 11h14" /><path d="M7 11v4h10v-4" /><path d="M7 15v5M17 15v5" /></>,
  camera: <><path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L17 6h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z" /><circle cx="12" cy="12.5" r="3.5" /></>,
  bulb: <><path d="M9 17h6" /><path d="M10 21h4" /><path d="M12 3a6 6 0 0 0-3 11.2V17h6v-2.8A6 6 0 0 0 12 3Z" /></>,
  mic: <><rect x="9" y="3" width="6" height="10" rx="3" /><path d="M6 11a6 6 0 0 0 12 0" /><path d="M12 17v4" /><path d="M9 21h6" /></>,
  snack: <><path d="M6 9h12l-1.2 11H7.2L6 9Z" /><path d="M8 9V6a4 4 0 0 1 8 0v3" /></>,
  box: <><path d="m12 3 8 4v10l-8 4-8-4V7l8-4Z" /><path d="m4 7 8 4 8-4" /><path d="M12 11v10" /></>,
  van: <><path d="M3 16V8a1 1 0 0 1 1-1h9l4 4h3a1 1 0 0 1 1 1v4" /><path d="M3 16h2M11 16h2M19 16h2" /><circle cx="7.5" cy="17" r="2" /><circle cx="16.5" cy="17" r="2" /><path d="M13 7v4" /></>,

  // Eigenschaften
  team: <><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0" /><path d="M16 5.5a3 3 0 0 1 0 5.8" /><path d="M17 14.5a6 6 0 0 1 4 5.5" /></>,
  check: <><path d="m4 12.5 5 5L20 6.5" /></>,
  bolt: <><path d="M13 3 5 14h6l-1 7 8-11h-6l1-7Z" /></>,
  gem: <><path d="m12 4 6 5-6 11L6 9l6-5Z" /><path d="M6 9h12" /><path d="m12 4-3 5 3 11 3-11-3-5Z" /></>,
  chat: <><path d="M20 15a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9Z" /></>,
  award: <><circle cx="12" cy="9" r="5.5" /><path d="m8.5 13.5-1.5 7 5-2.5 5 2.5-1.5-7" /></>,
  calendar: <><rect x="4" y="5" width="16" height="16" rx="2" /><path d="M4 10h16" /><path d="M9 3v4M15 3v4" /></>,
  champagne: <><path d="M8 3h8l-1 7a3 3 0 0 1-6 0L8 3Z" /><path d="M12 17v4" /><path d="M9 21h6" /><path d="M8 7h8" /></>,
  heart: <><path d="M12 20s-7-4.5-7-9.5A3.8 3.8 0 0 1 12 8a3.8 3.8 0 0 1 7 2.5c0 5-7 9.5-7 9.5Z" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 6.5 8.5 6 8.5-6" /></>,
  phone: <><path d="M6 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4 5.2 2 2 0 0 1 6 3Z" /></>,
  pin: <><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></>,
}

export type IconName = keyof typeof P

export default function Icon({ name, size = 24 }: { name: string; size?: number }) {
  const d = P[name]
  if (!d) return null
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      style={{ flexShrink: 0 }}
    >
      {d}
    </svg>
  )
}
