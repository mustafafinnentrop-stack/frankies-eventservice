import type { Metadata } from 'next'
import ServiceContent from './ServiceContent'

const PAGE_URL = 'https://frankies-eventservice.de/service'
const OG_IMAGE = 'https://frankies-eventservice.de/og/service.jpg'

export const metadata: Metadata = {
  title: 'Service-Pakete & Portfolio | Eventservice aus einer Hand – Frankies Eventservice',
  description: 'Professioneller Eventservice im Sauerland: Servicepersonal, Getränkeservice, mobile Cocktailbar, Hüpfburgen, Fotoboxen, Eventmöbel und Licht- & Tontechnik. Alles aus einer Hand.',
  keywords: 'Eventservice Sauerland, Servicepersonal Kreis Olpe, Getränkeservice Lennestadt, Hüpfburg mieten Sauerland, Fotobox mieten NRW, mobile Cocktailbar Sauerland, Eventmöbel mieten',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: PAGE_URL,
    siteName: 'Frankies Eventservice',
    title: 'Service-Pakete & Portfolio | Eventservice aus einer Hand – Frankies Eventservice',
    description: 'Professioneller Eventservice im Sauerland: Servicepersonal, Getränkeservice, mobile Cocktailbar, Hüpfburgen, Fotoboxen, Eventmöbel und Licht- & Tontechnik.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Frankies Eventservice – Service-Pakete und Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Service-Pakete & Portfolio | Frankies Eventservice',
    description: 'Professioneller Eventservice im Sauerland – alles aus einer Hand.',
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
}

export default function ServicePage() {
  return <ServiceContent />
}
