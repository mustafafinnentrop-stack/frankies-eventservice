import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
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
  async headers() {
    return [
      {
        source: '/:datei(logo-frankies-eventservice(?:-signatur)?\\.png)',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
    ]
  },
}

export default nextConfig
