export default function Leistungen() {
  return (
    <section id="leistungen">
      <div className="section-container">
        <div className="reveal grid-text">
          <p className="section-label" style={{ margin: '0 auto 1rem' }}>Unsere Leistungen</p>
          <h2 className="section-title" style={{ margin: '0 auto 1.5rem' }}>Professioneller Service<br />für jeden Anlass</h2>
          <p className="section-text" style={{ margin: '0 auto 3rem' }}>
            Von der Planung bis zur Durchführung: Wir übernehmen den kompletten Getränkeservice
            für Ihre Veranstaltung. Mit jahrelanger Erfahrung, professionellem Personal und
            hochwertigen Getränken sorgen wir dafür, dass Ihre Gäste begeistert sind.
          </p>
        </div>
        <div className="services-grid stagger-children reveal">
          <div className="service-card reveal">
            <div className="service-icon">🍺</div>
            <h3>Schützenfeste</h3>
            <p>
              Wir übernehmen den kompletten Thekenservice bei Ihrem Schützenfest.
              Dabei sorgt unser eingespieltes Team für professionellen Zapfbetrieb
              und einen reibungslosen Ablauf — von Freitag bis Montag.
            </p>
          </div>
          <div className="service-card reveal">
            <div className="service-icon">🥂</div>
            <h3>Hochzeiten &amp; Feiern</h3>
            <p>
              Ihr besonderer Tag verdient besonderen Service. Deshalb kümmern wir uns
              um den gesamten Ausschank, während Sie entspannt mit Ihren Gästen feiern.
              So bleibt Ihnen mehr Zeit für die schönen Momente.
            </p>
          </div>
          <div className="service-card reveal">
            <div className="service-icon">🍹</div>
            <h3>Mobile Cocktailbar</h3>
            <p>
              Wir kommen direkt zu Ihnen — mit einer stylischen Bambustheke
              und frisch zubereiteten Cocktails. Auf diese Weise wird
              jede Feier zu einem unvergesslichen Erlebnis.
            </p>
          </div>
          <div className="service-card reveal">
            <div className="service-icon">🎪</div>
            <h3>Firmen- &amp; Vereinsfeste</h3>
            <p>
              Ob Betriebsfeier, Vereinsjubiläum oder Dorffest — bei uns bekommen
              Sie erfahrenes Personal und professionellen Getränkeausschank.
              Darüber hinaus passen wir uns flexibel an Ihre Wünsche an.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
