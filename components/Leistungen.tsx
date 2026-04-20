export default function Leistungen() {
  return (
    <section id="leistungen">
      <div className="section-container">
        <div className="reveal">
          <p className="section-label">Was wir bieten</p>
          <h2 className="section-title">Getränkeservice für<br />Ihre Veranstaltung</h2>
          <p className="section-text">
            Egal ob kleines Gartenfest oder großes Schützenfest — wir übernehmen den
            kompletten Getränkeausschank. Dadurch können Sie sich voll und ganz auf
            Ihre Gäste konzentrieren. Denn wir kümmern uns um alles: von der Theke
            bis zum letzten Glas.
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
              Unser Bulli kommt direkt zu Ihnen — zusammen mit einer stylischen
              Bambustheke und frisch zubereiteten Cocktails. Auf diese Weise wird
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
