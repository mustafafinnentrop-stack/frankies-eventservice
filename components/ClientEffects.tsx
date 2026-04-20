'use client'

import { useEffect } from 'react'

export default function ClientEffects() {
  useEffect(() => {
    // Cursor glow trail
    const cursorGlow = document.createElement('div')
    cursorGlow.className = 'cursor-glow'
    document.body.appendChild(cursorGlow)

    const onMouseMove = (e: MouseEvent) => {
      cursorGlow.style.left = e.clientX + 'px'
      cursorGlow.style.top = e.clientY + 'px'
    }
    document.addEventListener('mousemove', onMouseMove)

    // Magnetic effect on buttons
    const buttons = document.querySelectorAll<HTMLElement>('.btn-primary, .btn-secondary, .nav-cta')
    const magneticHandlers: Array<{ el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = []

    buttons.forEach((btn) => {
      const move = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`
      }
      const leave = () => { btn.style.transform = '' }
      btn.addEventListener('mousemove', move)
      btn.addEventListener('mouseleave', leave)
      magneticHandlers.push({ el: btn, move, leave })
    })

    // Tilt on service cards
    const cards = document.querySelectorAll<HTMLElement>('.service-card')
    const tiltHandlers: Array<{ el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = []

    cards.forEach((card) => {
      const move = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        const rotX = (y - 0.5) * -8
        const rotY = (x - 0.5) * 8
        card.style.transform = `translateY(-8px) rotateX(${rotX}deg) rotateY(${rotY}deg)`
      }
      const leave = () => { card.style.transform = '' }
      card.addEventListener('mousemove', move)
      card.addEventListener('mouseleave', leave)
      tiltHandlers.push({ el: card, move, leave })
    })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      if (cursorGlow.parentNode) cursorGlow.parentNode.removeChild(cursorGlow)
      magneticHandlers.forEach(({ el, move, leave }) => {
        el.removeEventListener('mousemove', move)
        el.removeEventListener('mouseleave', leave)
      })
      tiltHandlers.forEach(({ el, move, leave }) => {
        el.removeEventListener('mousemove', move)
        el.removeEventListener('mouseleave', leave)
      })
    }
  }, [])

  return null
}
