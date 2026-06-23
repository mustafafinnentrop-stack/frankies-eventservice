import type { Metadata } from 'next'
import ServiceContent from './ServiceContent'

const PAGE_URL = 'https://frankies-eventservice.de/service'

export const metadata: Metadata = {
  title: 'Service-Pakete & Portfolio | Frankies Eventservice',
  description: 'Entdecken Sie unsere umfassenden Event-Service-Pakete: Personalgestellung, Getränkeservice, Hüpfburgen, Eventmöbel, Fotoboxen und professionelle Licht- & Tontechnik.',
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
}

export default function ServicePage() {
  return <ServiceContent />
}
