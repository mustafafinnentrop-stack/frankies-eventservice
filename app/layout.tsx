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

const SITE_URL = 'https://frankies-eventservice.de'
const OG_IMAGE = `${SITE_URL}/wp-content/uploads/2026/03/preview-1.webp`

export const metadata: Metadata = {
  title: 'Frankies Eventservice | Getränke- und Veranstaltungsservice im Sauerland',
  description:
    'Frankies Eventservice – Professioneller Getränke- und Thekenservice sowie mobile Cocktailbar für Schützenfeste, Hochzeiten und Veranstaltungen im Kreis Olpe und für alle Veranstaltungen jeder Art.',
  keywords:
    'Eventservice Sauerland, Getränkeservice Schützenfest, Thekenservice Hochzeit, Barservice Lennestadt, Eventservice Olpe, Zapfservice NRW, mobile Cocktailbar Sauerland, Cocktailbar mieten, Bulli Bar',
  authors: [{ name: 'Frankies Eventservice' }],
  robots: 'index, follow',
  alternates: { canonical: `${SITE_URL}/` },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: `${SITE_URL}/`,
    siteName: 'Frankies Eventservice',
    title: 'Frankies Eventservice | Getränke- und Veranstaltungsservice im Sauerland',
    description:
      'Professioneller Getränke- und Thekenservice sowie mobile Cocktailbar für Schützenfeste, Hochzeiten und Veranstaltungen im Sauerland.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Frankies Eventservice – Mobile Cocktailbar und Thekenservice im Sauerland' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frankies Eventservice | Getränke- und Veranstaltungsservice im Sauerland',
    description:
      'Professioneller Getränke- und Thekenservice sowie mobile Cocktailbar für Schützenfeste, Hochzeiten und Veranstaltungen im Sauerland.',
    images: [OG_IMAGE],
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
              url: SITE_URL,
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Hachener Str. 7',
                addressLocality: 'Lennestadt',
                addressRegion: 'NRW',
                postalCode: '57368',
                addressCountry: 'DE',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 51.1218,
                longitude: 8.0648,
              },
              areaServed: [
                'Lennestadt', 'Olpe', 'Attendorn', 'Finnentrop',
                'Kirchhundem', 'Schmallenberg', 'Sauerland',
              ],
              serviceType: [
                'Getränkeservice', 'Thekenservice', 'Barservice',
                'Eventservice', 'Mobile Cocktailbar', 'Cocktail Catering',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Leistungen',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile Cocktailbar', url: `${SITE_URL}/cocktailbar-lennestadt` } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Getränkeservice Schützenfest', url: `${SITE_URL}/getraenkeservice-schuetzenfest` } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Thekenservice Hochzeit', url: `${SITE_URL}/hochzeit-sauerland` } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Eventservice Kreis Olpe', url: `${SITE_URL}/eventservice-kreis-olpe` } },
                ],
              },
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '+4915142840916',
                  contactType: 'customer service',
                  availableLanguage: 'German',
                },
                {
                  '@type': 'ContactPoint',
                  telephone: '+4915142840916',
                  contactType: 'customer service',
                  contactOption: 'WhatsApp',
                  availableLanguage: 'German',
                },
              ],
              sameAs: [
                'https://www.facebook.com/share/17zxCGQ62q/',
                'https://www.instagram.com/frankies_eventservice',
              ],
              image: OG_IMAGE,
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
