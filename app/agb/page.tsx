import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealWrapper from '@/components/RevealWrapper'

const PAGE_URL = 'https://frankies-eventservice.de/agb'

export const metadata: Metadata = {
  title: 'Allgemeine Geschäftsbedingungen (AGB) | Frankies Eventservice',
  description: 'Allgemeine Geschäftsbedingungen von Frankies Eventservice – Ihr Partner für Personalgestellung, Vermietung und Eventcatering.',
  alternates: { canonical: PAGE_URL },
  robots: { index: false, follow: true }, // Rechtstexte müssen nicht unbedingt in den Suchindex
}

export default function AGBPage() {
  return (
    <>
      <Navbar />
      <RevealWrapper>
        <main style={{ paddingTop: '100px', background: 'var(--color-bg)', minHeight: '100vh' }}>
          <section style={{ padding: '5rem 2rem 8rem' }}>
            <div className="section-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p className="section-label">Rechtliches</p>
              <h1 className="section-title" style={{ marginBottom: '3rem' }}>Allgemeine Geschäftsbedingungen (AGB)</h1>
              
              <div className="legal-text-content" style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontWeight: 300 }}>
                <p style={{ marginBottom: '2rem' }}><strong>Stand:</strong> 19. Juni 2026</p>

                <h2 style={{ color: 'var(--color-text)', fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>1. Geltungsbereich</h2>
                <p>
                  Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB“) gelten für alle Verträge über die Erbringung von Dienstleistungen und die Vermietung von Eventequipment durch Frankies Eventservice, Inhaber Mustafa Yildirim (nachfolgend „Auftragnehmer“), mit seinen Kunden (nachfolgend „Auftraggeber“). Abweichende Bedingungen des Auftraggebers werden nicht anerkannt, es sei denn, der Auftragnehmer stimmt ihrer Geltung ausdrücklich schriftlich zu.
                </p>

                <h2 style={{ color: 'var(--color-text)', fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>2. Vertragsgegenstand</h2>
                <p>
                  Der Auftragnehmer erbringt Dienstleistungen im Bereich Eventcatering, Personalgestellung (Servicepersonal, Barkeeper etc.) und vermietet Eventequipment (z.B. Hüpfburgen, Eventmöbel, Fotoboxen, Licht- und Tontechnik, Fun-Food-Module) gemäß dem jeweils individuell vereinbarten Angebot und der Auftragsbestätigung.
                </p>

                <h2 style={{ color: 'var(--color-text)', fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>3. Angebot und Vertragsschluss</h2>
                <p>
                  Angebote des Auftragnehmers sind freibleibend und unverbindlich. Ein Vertrag kommt erst durch die schriftliche Auftragsbestätigung des Auftragnehmers oder durch die Erbringung der Leistung zustande. Änderungen oder Ergänzungen des Vertrages bedürfen der Schriftform.
                </p>

                <h2 style={{ color: 'var(--color-text)', fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>4. Preise und Zahlungsbedingungen</h2>
                <p>
                  4.1. Die im Angebot genannten Preise verstehen sich als Nettopreise zuzüglich der gesetzlichen Mehrwertsteuer, sofern nicht anders ausgewiesen.<br />
                  4.2. Sofern nicht anders vereinbart, ist eine Anzahlung in Höhe von 25% des Gesamtbetrages bei Vertragsabschluss fällig. Die Restzahlung ist innerhalb von 7 Tagen nach Rechnungsstellung und Leistungserbringung ohne Abzug zu leisten.<br />
                  4.3. Bei Zahlungsverzug ist der Auftragnehmer berechtigt, Verzugszinsen in gesetzlicher Höhe zu fordern.
                </p>

                <h2 style={{ color: 'var(--color-text)', fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>5. Personalgestellung – Abgrenzung zur Arbeitnehmerüberlassung</h2>
                <p>
                  5.1. Die Erbringung von Serviceleistungen durch Personal des Auftragnehmers erfolgt im Rahmen eines Dienstvertrages. Das eingesetzte Personal bleibt in das Unternehmen des Auftragnehmers eingegliedert.<br />
                  5.2. Die fachliche und disziplinarische Weisungsbefugnis gegenüber dem Personal verbleibt ausschließlich beim Auftragnehmer. Der Auftraggeber ist nicht berechtigt, dem Personal direkte Weisungen zu erteilen, die über die im Vertrag vereinbarten Tätigkeiten hinausgehen oder die Arbeitsweise des Personals betreffen.<br />
                  5.3. Eine Arbeitnehmerüberlassung im Sinne des Arbeitnehmerüberlassungsgesetzes (AÜG) findet ausdrücklich nicht statt. Der Auftragnehmer ist nicht für die Einhaltung von arbeitsrechtlichen Vorschriften (z.B. Arbeitszeiten, Pausen) des Personals verantwortlich, die über die vertraglichen Vereinbarungen hinausgehen und in den Verantwortungsbereich des Auftraggebers fallen würden.
                </p>

                <h2 style={{ color: 'var(--color-text)', fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>6. Mietbedingungen für Eventequipment</h2>
                <p>
                  6.1. Das Mietequipment wird dem Auftraggeber für den vereinbarten Zeitraum zur Verfügung gestellt. Der Auftraggeber ist für die sachgemäße Behandlung und den Schutz des Equipments während der Mietdauer verantwortlich.<br />
                  6.2. Schäden am Mietequipment, die durch unsachgemäße Behandlung oder Fahrlässigkeit des Auftraggebers oder seiner Gäste entstehen, gehen zu Lasten des Auftraggebers. Dies gilt auch für Verlust oder Diebstahl.<br />
                  6.3. Der Auftragnehmer übernimmt keine Haftung für Schäden, die durch den Betrieb des Mietequipments entstehen, es sei denn, diese beruhen auf Vorsatz oder grober Fahrlässigkeit des Auftragnehmers.
                </p>

                <h2 style={{ color: 'var(--color-text)', fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>7. Stornierungsbedingungen</h2>
                <p>
                  7.1. Der Auftraggeber ist berechtigt, den Vertrag jederzeit vor Leistungsbeginn zu stornieren. Im Falle einer Stornierung fallen folgende Stornogebühren an:
                </p>
                <ul style={{ paddingLeft: '1.5rem', margin: '1rem 0' }}>
                  <li>Bis 60 Tage vor Leistungsbeginn: 25% des vereinbarten Gesamtpreises.</li>
                  <li>Bis 30 Tage vor Leistungsbeginn: 50% des vereinbarten Gesamtpreises.</li>
                  <li>Bis 14 Tage vor Leistungsbeginn: 75% des vereinbarten Gesamtpreises.</li>
                  <li>Weniger als 14 Tage vor Leistungsbeginn: 90% des vereinbarten Gesamtpreises.</li>
                </ul>
                <p>
                  7.2. Dem Auftraggeber bleibt der Nachweis vorbehalten, dass dem Auftragnehmer kein oder ein geringerer Schaden entstanden ist.
                </p>

                <h2 style={{ color: 'var(--color-text)', fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>8. Haftung</h2>
                <p>
                  8.1. Der Auftragnehmer haftet für Schäden, die auf einer vorsätzlichen oder grob fahrlässigen Pflichtverletzung des Auftragnehmers, seiner gesetzlichen Vertreter oder Erfüllungsgehilfen beruhen.<br />
                  8.2. Für leichte Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten), deren Erfüllung die ordnungsgemäße Durchführung des Vertrages überhaupt erst ermöglicht und auf deren Einhaltung der Auftraggeber regelmäßig vertrauen darf. In diesem Fall ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt.<br />
                  8.3. Die Haftung für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit bleibt unberührt.
                </p>

                <h2 style={{ color: 'var(--color-text)', fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>9. Datenschutz</h2>
                <p>
                  Der Auftragnehmer beachtet die geltenden Datenschutzbestimmungen. Personenbezogene Daten des Auftraggebers werden ausschließlich zur Vertragsabwicklung und zur Erfüllung gesetzlicher Pflichten erhoben, verarbeitet und genutzt.
                </p>

                <h2 style={{ color: 'var(--color-text)', fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>10. Schlussbestimmungen</h2>
                <p>
                  10.1. Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.<br />
                  10.2. Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, so wird die Wirksamkeit der übrigen Bestimmungen hiervon nicht berührt. Anstelle der unwirksamen Bestimmung tritt eine Regelung, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.<br />
                  10.3. Erfüllungsort und Gerichtsstand ist der Sitz des Auftragnehmers, sofern der Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
                </p>

                <hr style={{ margin: '3rem 0', opacity: 0.1, border: 'none', borderTop: '1px solid var(--color-gold)' }} />

                <p>
                  <strong>Frankies Eventservice</strong><br />
                  Mustafa Yildirim<br />
                  Hachener Str. 7, 57368 Lennestadt<br />
                  E-Mail: <a href="mailto:info@frankies-eventservice.de" style={{ color: 'var(--color-gold)', textDecoration: 'none' }}>info@frankies-eventservice.de</a><br />
                  Web: <a href="https://www.frankies-eventservice.de" style={{ color: 'var(--color-gold)', textDecoration: 'none' }}>www.frankies-eventservice.de</a>
                </p>
              </div>
            </div>
          </section>
        </main>
      </RevealWrapper>
      <Footer />
    </>
  )
}
