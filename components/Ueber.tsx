import Image from 'next/image'

export default function Ueber() {
  return (
    <section id="ueber">
      <div className="section-container">
        <div className="about-grid">
          <div className="about-visual reveal-left glow-frame">
            <Image
              src="https://frankies-eventservice.de/wp-content/uploads/2026/03/Frankies_Eventservice_Logo.png"
              alt="Frankies Eventservice Logo – Getränke- und Thekenservice Lennestadt Sauerland"
              width={600}
              height={750}
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="reveal">
            <p className="section-label">Über uns</p>
            <h2 className="section-title">Aus dem Sauerland,<br />für das Sauerland</h2>
            <p className="section-text">
              Frankies Eventservice steht für zuverlässigen und professionellen
              Getränkeservice bei Veranstaltungen in der Region. Dabei wissen wir
              genau, wie ein Schützenfest abläuft und was eine gelungene
              Hochzeitsfeier ausmacht. Deshalb können Sie sich darauf verlassen,
              dass bei uns jeder Handgriff sitzt.
            </p>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 400, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
              Unser Versprechen
            </h3>
            <p className="section-text">
              Pünktlich vor Ort, sauber aufgebaut, professionell durchgeführt
              und ordentlich hinterlassen. So stellen wir sicher, dass Ihre
              Veranstaltung genau so wird, wie Sie sie sich vorstellen.
              Darüber hinaus stehen wir Ihnen auch bei der Planung beratend
              zur Seite.
            </p>
            <div className="about-stats">
              <div>
                <div className="stat-number">100%</div>
                <div className="stat-label">Einsatz</div>
              </div>
              <div>
                <div className="stat-number">24/7</div>
                <div className="stat-label">Erreichbar</div>
              </div>
              <div>
                <div className="stat-number">A–Z</div>
                <div className="stat-label">Full Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
