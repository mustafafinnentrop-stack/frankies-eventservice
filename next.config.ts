import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
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
      {
        source: '/:datei(logo-frankies-eventservice(?:-signatur)?\\.png)',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
    ]
  },
}

export default nextConfig
