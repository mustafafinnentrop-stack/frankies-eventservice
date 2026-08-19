import Image from 'next/image'

export default function Ueber() {
  return (
    <section id="ueber">
      <div className="section-container">
        <div className="reveal grid-text">
          <p className="section-label">Über uns</p>
          <h2 className="section-title">Aus dem Sauerland,<br />für das Sauerland</h2>
          
          <div className="about-visual glow-frame" style={{ maxWidth: '600px', margin: '0 auto 3rem', aspectRatio: '4/5' }}>
            <Image
              src="/team.webp"
              alt="Das Team von Frankies Eventservice hinter der Theke"
              width={600}
              height={750}
              sizes="(max-width: 768px) 100vw, 600px" quality={60}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <p className="section-text">
            Frankies Eventservice steht für zuverlässigen und professionellen
            Getränkeservice bei Veranstaltungen in der Region. Dabei wissen wir
            genau, wie ein Schützenfest abläuft und was eine gelungene
            Hochzeitsfeier ausmacht. Woher wir das wissen: rund 20 Veranstaltungen
            allein in dieser Saison — vom Schützenfest Marmecke bis zur
            Firmenfeier bei Schneider Haustechnik.
          </p>
          
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 400, marginTop: '2rem', marginBottom: '0.75rem' }}>
            Unser Versprechen
          </h3>
          <p className="section-text">
            Pünktlich vor Ort, sauber aufgebaut, professionell durchgeführt
            und ordentlich hinterlassen. So stellen wir sicher, dass Ihre
            Veranstaltung genau so wird, wie Sie sie sich vorstellen.
            Darüber hinaus stehen wir Ihnen auch bei der Planung beratend
            zur Seite.
          </p>

          <div className="about-facts">
            <div>
              <div className="fact-label">Sitz</div>
              <div className="fact-value">Lennestadt, Kreis Olpe</div>
            </div>
            <div>
              <div className="fact-label">Einsatzgebiet</div>
              <div className="fact-value">Kreis Olpe &amp; Sauerland</div>
            </div>
            <div>
              <div className="fact-label">Anfragen</div>
              <div className="fact-value">Antwort binnen 24 Stunden</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
