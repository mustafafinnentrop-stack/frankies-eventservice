'use client'

import { usePathname, useRouter } from 'next/navigation'
import CardNav from './CardNav'

const CALCOM_URL = process.env.NEXT_PUBLIC_CALCOM_URL || 'https://cal.com/frankies.digital/15min'

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const isHome = pathname === '/'

  const scrollTo = (id: string) => {
    if (!isHome) {
      router.push(`/#${id}`)
      return
    }
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const items = [
    {
      label: 'Leistungen',
      bgColor: '#1A1A1A',
      textColor: '#F0ECE3',
      links: [
        { label: 'Service-Pakete & Portfolio', href: '/service', ariaLabel: 'Service-Pakete und Portfolio' },
        { label: 'Mobile Cocktailbar', href: '/cocktailbar-lennestadt', ariaLabel: 'Mobile Cocktailbar Lennestadt' },
        { label: 'Getränkeservice Schützenfest', href: '/getraenkeservice-schuetzenfest', ariaLabel: 'Getränkeservice Schützenfest' },
        { label: 'Thekenservice Hochzeit', href: '/hochzeit-sauerland', ariaLabel: 'Thekenservice Hochzeit Sauerland' },
        { label: 'Eventservice Kreis Olpe', href: '/eventservice-kreis-olpe', ariaLabel: 'Eventservice Kreis Olpe' },
      ],
    },
    {
      label: 'Startseite',
      bgColor: '#222018',
      textColor: '#F0ECE3',
      links: [
        { label: 'Cocktailbar', ariaLabel: 'Cocktailbar Section', onClick: () => scrollTo('cocktailbar') },
        { label: 'Über uns', ariaLabel: 'Über uns Section', onClick: () => scrollTo('ueber') },
        { label: 'Ablauf', ariaLabel: 'Ablauf Section', onClick: () => scrollTo('ablauf') },
        { label: 'Region', ariaLabel: 'Region Section', onClick: () => scrollTo('region') },
      ],
    },
    {
      label: 'Kontakt',
      bgColor: '#2A2318',
      textColor: '#F0ECE3',
      links: [
        { label: 'Termin buchen', href: CALCOM_URL, ariaLabel: 'Termin buchen' },
        { label: 'Anrufen', href: 'tel:+4915142840916', ariaLabel: 'Anrufen' },
        { label: 'info@frankies-eventservice.de', href: 'mailto:info@frankies-eventservice.de', ariaLabel: 'E-Mail schreiben' },
        { label: 'Hachener Str. 7, Lennestadt', ariaLabel: 'Adresse' },
      ],
    },
  ]

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHome) {
      e.preventDefault()
      scrollTo('kontakt')
    }
  }

  // Das Logo lag als 1840x779-PNG mit 511 KB vor und wurde von CardNav als
  // einfaches <img> ohne Optimierung auf jeder Seite geladen. Angezeigt wird
  // es mit 52px Hoehe (mobil 38px), also rund 123px breit. 480px decken selbst
  // 3x-Retina ab; als WebP sind das 22 KB.
  return (
    <CardNav
      logo="/logo-frankies.webp"
      logoAlt="Frankies Eventservice"
      items={items}
      baseColor="#161616"
      menuColor="#F0ECE3"
      buttonBgColor="#C8A44E"
      buttonTextColor="#0C0C0C"
      ctaLabel="Anrufen"
      ctaHref={isHome ? '#kontakt' : 'tel:+4915142840916'}
      onCtaClick={handleCtaClick}
      secondaryCtaLabel="Termin buchen"
      secondaryCtaHref={CALCOM_URL}
      ease="power3.out"
    />
  )
}
