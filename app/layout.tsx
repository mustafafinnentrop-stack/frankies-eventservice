import type { Metadata } from 'next'
import { DM_Serif_Display, Outfit } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import CookieConsent from '@/components/CookieConsent'

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-dm-serif',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Frankies Eventservice | Getränke- und Veranstaltungsservice im Sauerland',
  description:
    'Frankies Eventservice – Professioneller Getränke- und Thekenservice sowie mobile Cocktailbar für Schützenfeste, Hochzeiten und Veranstaltungen im Kreis Olpe und für alle Veranstaltungen jeder Art.',
  keywords:
    'Eventservice Sauerland, Getränkeservice Schützenfest, Thekenservice Hochzeit, Barservice Lennestadt, Eventservice Olpe, Zapfservice NRW, mobile Cocktailbar Sauerland, Cocktailbar mieten, Bulli Bar',
  authors: [{ name: 'Frankies Eventservice' }],
  robots: 'index, follow',
  alternates: { canonical: 'https://frankies-eventservice.de/' },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${dmSerifDisplay.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Frankies Eventservice',
              description:
                'Professioneller Getränke- und Thekenservice für Schützenfeste, Hochzeiten und Veranstaltungen im Sauerland.',
              telephone: '+4915142840916',
              email: 'info@frankies-eventservice.de',
              url: 'https://frankies-eventservice.de',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Hachener Str. 7',
                addressLocality: 'Lennestadt',
                addressRegion: 'NRW',
                postalCode: '57368',
                addressCountry: 'DE',
              },
              areaServed: [
                'Lennestadt', 'Olpe', 'Attendorn', 'Finnentrop',
                'Kirchhundem', 'Schmallenberg', 'Sauerland',
              ],
              serviceType: [
                'Getränkeservice', 'Thekenservice', 'Barservice',
                'Eventservice', 'Mobile Cocktailbar', 'Cocktail Catering',
              ],
              image: 'https://frankies-eventservice.de/wp-content/uploads/2026/03/preview-1.webp',
              priceRange: '€€',
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <CookieConsent />
      </body>
    </html>
  )
}
