import type { NextConfig } from 'next'

/*
  Sicherheits-Header fuer alle Seiten. Die Seite ist rein statisch: keine
  API-Routen, keine Server Actions, keine Datenbank. Die Content-Security-
  Policy erlaubt deshalb nur, was die Seite tatsaechlich braucht:
  - Skripte/Verbindungen zu Google Analytics (laedt erst nach Einwilligung
    im Cookie-Fenster) und zum Formulardienst Web3Forms
  - eigene Bilder, Videos, Schriften (next/font liefert sie selbst aus)
  - Inline-Skripte und -Styles muessen erlaubt bleiben: Next.js schreibt
    seine Hydrations-Daten als Inline-Script, das Consent-Script laeuft
    vor dem ersten Rendern, und die Komponenten setzen style-Attribute.
  Fremde Skript-Hosts, Einbettung in fremde Seiten (Clickjacking), Plugins
  und Umleitungen von Formularzielen sind damit unterbunden.
*/
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com",
  "font-src 'self' data:",
  "media-src 'self'",
  "connect-src 'self' https://api.web3forms.com https://www.google-analytics.com https://*.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://stats.g.doubleclick.net",
  "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join('; ')

const SICHERHEITS_HEADER = [
  { key: 'Content-Security-Policy', value: CSP },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()' },
]

const nextConfig: NextConfig = {
  // Kein "X-Powered-By: Next.js" — verraet nur die Technik, nuetzt niemandem.
  poweredByHeader: false,
  images: {
    /*
      Der Bildoptimierer nimmt jede Breite aus deviceSizes und jede
      Qualitaet 1-100 als Adresse an. Ohne Grenzen kann ein Skript pro Foto
      Hunderte Varianten anfordern und damit das Vercel-Kontingent fuer
      Bildtransformationen leeren. Erlaubt sind nur die im Code benutzten
      Qualitaeten; fertige Varianten bleiben einen Tag im Cache statt 60 s.
    */
    qualities: [55, 60, 62, 75],
    minimumCacheTTL: 86400,
    /*
      Kein Foto im Projekt ist breiter als 1.200 px (Hintergrund 2.560 px laeuft
      per CSS). Die Standardstufen 2048 und 3840 erzeugen deshalb nur Adressen
      auf dieselbe Volldatei — und SEO-Crawler messen genau diese groesste
      Kandidatin. Die Liste endet darum bei 1920.
    */
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'frankies-eventservice.de',
      },
    ],
  },

  /*
    Die beiden Logo-Dateien liegen bewusst unverlinkt im Projekt: Sie werden
    per fester Adresse in E-Mail-Signaturen eingebunden, tauchen aber auf
    keiner Seite auf. Damit sie deshalb nicht ueber die Google-Bildersuche
    wieder sichtbar werden, bekommen sie noindex mit.

    Warum als Header und nicht per robots.txt: robots.txt ist oeffentlich
    lesbar — ein Disallow dort wuerde die Adressen erst recht bekannt machen.
    Der Header wirkt still und ohne Verzeichnis.
  */
  /* Der Entwurf wurde unter /entwurf begutachtet und ist jetzt die
     Startseite. Wer den alten Link noch hat, landet richtig. */
  async redirects() {
    return [{ source: '/entwurf', destination: '/', permanent: false }]
  },

  async headers() {
    return [
      { source: '/(.*)', headers: SICHERHEITS_HEADER },
      {
        source: '/:datei(logo-frankies-eventservice(?:-signatur)?\\.png)',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
    ]
  },
}

export default nextConfig
