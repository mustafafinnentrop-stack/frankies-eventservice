import { AnimatedReviewCards } from '@/components/ui/animated-review-card'

/* Ausschliesslich echte Google-Bewertungen von Frankies-Eventservice.
   Stand: 5,0 aus 2 Rezensionen. Kommt eine neue dazu, ist das hier eine
   Zeile mehr — nichts anderes muss angefasst werden.
   Kein Avatar-Bild: Die Profilbilder liegen bei Google und duerfen nicht
   von dort eingebunden werden. Die Komponente zeigt dann den Anfangs-
   buchstaben, das ist ihr eingebauter Rueckfall. */
const BEWERTUNGEN = [
  {
    id: 'carol-ann-stoecker',
    name: 'Carol-Ann Stöcker',
    avatar: '',
    text:
      'Sehr guter, zuverlässiger Service. Die Cocktails waren sehr lecker und die Bar, ' +
      'die aufgebaut wurde war modern und top ausgestattet. Alles autark, man muss sich ' +
      'um nichts kümmern. Der Chef und die Angestellte wären super freundlich. Definitiv ' +
      'eine Empfehlung!!! Wir würden euch jederzeit wieder buchen.',
    rating: 5,
  },
  {
    id: 'stefan-hoberg',
    name: 'Stefan Hoberg',
    avatar: '',
    // Diese Bewertung hat bei Google keinen Text, nur die Sterne. Das wird so
    // benannt, statt einen Text zu erfinden.
    text: 'Hat Frankies Eventservice bei Google mit der vollen Punktzahl bewertet — ohne Kommentar.',
    rating: 5,
  },
]

const GOOGLE_PROFIL =
  'https://www.google.com/search?q=Frankies-Eventservice&kgmid=/g/11z1_pnp_3'

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
            als viele, die niemand nachschauen kann. */}
        <p className="section-text" style={{ marginBottom: '0.5rem' }}>
          <a
            href={GOOGLE_PROFIL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--color-gold)', textDecoration: 'none', fontWeight: 500 }}
          >
            5,0 ★★★★★ aus 2 Google-Bewertungen — bei Google nachlesen
          </a>
        </p>

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

        <p className="section-text" style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
          Karte ziehen oder warten — die Bewertungen wechseln von selbst.
        </p>
      </div>
    </section>
  )
}
