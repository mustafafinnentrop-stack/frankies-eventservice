import Image from 'next/image'
import { AnimatedReviewCards } from '@/components/ui/animated-review-card'
import { EVENTBOOK } from '@/components/eventbook-daten'

import { BEWERTUNGEN, GOOGLE_PROFIL } from './bewertungen-daten'
// Weiter von hier exportiert, damit bestehende Importe nicht brechen.
export { BEWERTUNGEN, GOOGLE_PROFIL }

export default function Testimonials() {
  return (
    <section className="section-block" id="bewertungen">
      {/* reveal + grid-text wie in allen anderen Sektionen: .section-label ist
          inline-block, die Zentrierung kommt vom Elternelement (.grid-text).
          Ohne das steht der Kicker links — im Browser nachgemessen. */}
      <div className="section-container reveal grid-text">
        <p className="section-label">Was Kunden sagen</p>
        <h2 className="section-title">Echte Stimmen,<br />echte Feiern</h2>

        {/* Die Gesamtnote nachpruefbar machen: Wer klickt, landet direkt beim
            Google-Profil. Genau das macht wenige echte Bewertungen glaubwuerdiger
            als viele, die niemand nachschauen kann. Daneben das Partnersiegel von
            eventbook.com — ebenfalls verlinkt, damit auch das nachpruefbar bleibt. */}
        <div className="vertrauen-zeile">
          <a
            href={GOOGLE_PROFIL}
            target="_blank"
            rel="noopener noreferrer"
            className="vertrauen-google"
          >
            5,0 ★★★★★ aus 2 Google-Bewertungen
          </a>
          <a
            href={EVENTBOOK.profil}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profil von Frankies Eventservice bei eventbook.com öffnen"
            className="vertrauen-siegel"
          >
            <Image
              src={EVENTBOOK.badge.src}
              alt={EVENTBOOK.badge.alt}
              width={EVENTBOOK.badge.breite}
              height={EVENTBOOK.badge.hoehe}
              sizes="200px"
              style={{ width: '200px', height: 'auto' }}
            />
          </a>
        </div>

        <AnimatedReviewCards
          reviews={BEWERTUNGEN}
          interactionType="drag"
          theme="default"
          rotateInterval={7000}
          classNames={{
            container: 'mt-2',
            card: 'shadow-[0_10px_28px_rgba(0,0,0,0.38)]',
            name: 'font-[var(--font-display)] font-normal',
            text: 'leading-relaxed',
            // Branding: Gold statt des gelben Standardsterns der Vorlage.
            activeStarColor: 'text-[#C8A44E] fill-current',
            inactiveStarColor: 'text-[#C8A44E]/25',
            avatar: 'bg-[#161616] text-[#C8A44E]',
          }}
        />
      </div>
    </section>
  )
}
