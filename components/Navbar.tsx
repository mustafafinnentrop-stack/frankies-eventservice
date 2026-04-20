'use client'

import { usePathname, useRouter } from 'next/navigation'
import CardNav from './CardNav'

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
        { label: '0151 42840916', href: 'tel:+4915142840916', ariaLabel: 'Anrufen' },
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

  return (
    <CardNav
      logoText={<>Frankies<span>Eventservice</span></>}
      items={items}
      baseColor="#161616"
      menuColor="#F0ECE3"
      buttonBgColor="#C8A44E"
      buttonTextColor="#0C0C0C"
      ctaLabel="Anrufen"
      ctaHref={isHome ? '#kontakt' : 'tel:+4915142840916'}
      onCtaClick={handleCtaClick}
      ease="power3.out"
    />
  )
}
