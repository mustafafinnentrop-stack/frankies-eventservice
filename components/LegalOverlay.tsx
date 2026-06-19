'use client'

import { useEffect } from 'react'

interface Props {
  id: 'impressum' | 'datenschutz' | 'agb'
  onClose: () => void
}

export default function LegalOverlay({ id, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div className="legal-overlay active" id={id}>
      <button className="legal-close" onClick={onClose}>&times;</button>
      <div className="legal-content">
        {id === 'impressum' ? <Impressum /> : id === 'datenschutz' ? <Datenschutz /> : <AGB />}
      </div>
    </div>
  )
}

function AGB() {
  return (
    <>
      <h1>Allgemeine Geschäftsbedingungen (AGB)</h1>
      <p><strong>Stand:</strong> 19. Juni 2026</p>

      <h2>1. Geltungsbereich</h2>
      <p>
        Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB“) gelten für alle Verträge über die Erbringung von Dienstleistungen und die Vermietung von Eventequipment durch Frankies Eventservice, Inhaber Mustafa Yildirim (nachfolgend „Auftragnehmer“), mit seinen Kunden (nachfolgend „Auftraggeber“). Abweichende Bedingungen des Auftraggebers werden nicht anerkannt, es sei denn, der Auftragnehmer stimmt ihrer Geltung ausdrücklich schriftlich zu.
      </p>

      <h2>2. Vertragsgegenstand</h2>
      <p>
        Der Auftragnehmer erbringt Dienstleistungen im Bereich Eventcatering, Personalgestellung (Servicepersonal, Barkeeper etc.) und vermietet Eventequipment (z.B. Hüpfburgen, Eventmöbel, Fotoboxen, Licht- und Tontechnik, Fun-Food-Module) gemäß dem jeweils individuell vereinbarten Angebot und der Auftragsbestätigung.
      </p>

      <h2>3. Angebot und Vertragsschluss</h2>
      <p>
        Angebote des Auftragnehmers sind freibleibend und unverbindlich. Ein Vertrag kommt erst durch die schriftliche Auftragsbestätigung des Auftragnehmers oder durch die Erbringung der Leistung zustande. Änderungen oder Ergänzungen des Vertrages bedürfen der Schriftform.
      </p>

      <h2>4. Preise und Zahlungsbedingungen</h2>
      <p>
        4.1. Die im Angebot genannten Preise verstehen sich als Nettopreise zuzüglich der gesetzlichen Mehrwertsteuer, sofern nicht anders ausgewiesen.<br />
        4.2. Sofern nicht anders vereinbart, ist eine Anzahlung in Höhe von 25% des Gesamtbetrages bei Vertragsabschluss fällig. Die Restzahlung ist innerhalb von 7 Tagen nach Rechnungsstellung und Leistungserbringung ohne Abzug zu leisten.<br />
        4.3. Bei Zahlungsverzug ist der Auftragnehmer berechtigt, Verzugszinsen in gesetzlicher Höhe zu fordern.
      </p>

      <h2>5. Personalgestellung – Abgrenzung zur Arbeitnehmerüberlassung</h2>
      <p>
        5.1. Die Erbringung von Serviceleistungen durch Personal des Auftragnehmers erfolgt im Rahmen eines Dienstvertrages. Das eingesetzte Personal bleibt in das Unternehmen des Auftragnehmers eingegliedert.<br />
        5.2. Die fachliche und disziplinarische Weisungsbefugnis gegenüber dem Personal verbleibt ausschließlich beim Auftragnehmer. Der Auftraggeber ist nicht berechtigt, dem Personal direkte Weisungen zu erteilen, die über die im Vertrag vereinbarten Tätigkeiten hinausgehen oder die Arbeitsweise des Personals betreffen.<br />
        5.3. Eine Arbeitnehmerüberlassung im Sinne des Arbeitnehmerüberlassungsgesetzes (AÜG) findet ausdrücklich nicht statt. Der Auftragnehmer ist nicht für die Einhaltung von arbeitsrechtlichen Vorschriften (z.B. Arbeitszeiten, Pausen) des Personals verantwortlich, die über die vertraglichen Vereinbarungen hinausgehen und in den Verantwortungsbereich des Auftraggebers fallen würden.
      </p>

      <h2>6. Mietbedingungen für Eventequipment</h2>
      <p>
        6.1. Das Mietequipment wird dem Auftraggeber für den vereinbarten Zeitraum zur Verfügung gestellt. Der Auftraggeber ist für die sachgemäße Behandlung und den Schutz des Equipments während der Mietdauer verantwortlich.<br />
        6.2. Schäden am Mietequipment, die durch unsachgemäße Behandlung oder Fahrlässigkeit des Auftraggebers oder seiner Gäste entstehen, gehen zu Lasten des Auftraggebers. Dies gilt auch für Verlust oder Diebstahl.<br />
        6.3. Der Auftragnehmer übernimmt keine Haftung für Schäden, die durch den Betrieb des Mietequipments entstehen, es sei denn, diese beruhen auf Vorsatz oder grober Fahrlässigkeit des Auftragnehmers.
      </p>

      <h2>7. Stornierungsbedingungen</h2>
      <p>
        7.1. Der Auftraggeber ist berechtigt, den Vertrag jederzeit vor Leistungsbeginn zu stornieren. Im Falle einer Stornierung fallen folgende Stornogebühren an:
      </p>
      <ul>
        <li>Bis 60 Tage vor Leistungsbeginn: 25% des vereinbarten Gesamtpreises.</li>
        <li>Bis 30 Tage vor Leistungsbeginn: 50% des vereinbarten Gesamtpreises.</li>
        <li>Bis 14 Tage vor Leistungsbeginn: 75% des vereinbarten Gesamtpreises.</li>
        <li>Weniger als 14 Tage vor Leistungsbeginn: 90% des vereinbarten Gesamtpreises.</li>
      </ul>
      <p>
        7.2. Dem Auftraggeber bleibt der Nachweis vorbehalten, dass dem Auftragnehmer kein oder ein geringerer Schaden entstanden ist.
      </p>

      <h2>8. Haftung</h2>
      <p>
        8.1. Der Auftragnehmer haftet für Schäden, die auf einer vorsätzlichen oder grob fahrlässigen Pflichtverletzung des Auftragnehmers, seiner gesetzlichen Vertreter oder Erfüllungsgehilfen beruhen.<br />
        8.2. Für leichte Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten), deren Erfüllung die ordnungsgemäße Durchführung des Vertrages überhaupt erst ermöglicht und auf deren Einhaltung der Auftraggeber regelmäßig vertrauen darf. In diesem Fall ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt.<br />
        8.3. Die Haftung für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit bleibt unberührt.
      </p>

      <h2>9. Datenschutz</h2>
      <p>
        Der Auftragnehmer beachtet die geltenden Datenschutzbestimmungen. Personenbezogene Daten des Auftraggebers werden ausschließlich zur Vertragsabwicklung und zur Erfüllung gesetzlicher Pflichten erhoben, verarbeitet und genutzt.
      </p>

      <h2>10. Schlussbestimmungen</h2>
      <p>
        10.1. Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.<br />
        10.2. Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, so wird die Wirksamkeit der übrigen Bestimmungen hiervon nicht berührt. Anstelle der unwirksamen Bestimmung tritt eine Regelung, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.<br />
        10.3. Erfüllungsort und Gerichtsstand ist der Sitz des Auftragnehmers, sofern der Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
      </p>

      <hr style={{ margin: '2rem 0', opacity: 0.1 }} />

      <p>
        <strong>Frankies Eventservice</strong><br />
        Mustafa Yildirim<br />
        Hachener Str. 7, 57368 Lennestadt<br />
        E-Mail: <a href="mailto:info@frankies-eventservice.de">info@frankies-eventservice.de</a><br />
        Web: <a href="https://www.frankies-eventservice.de">www.frankies-eventservice.de</a>
      </p>
    </>
  )
}

function Impressum() {
  return (
    <>
      <h1>Impressum</h1>

      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        Frankies Eventservice<br />
        Mustafa Yildirim<br />
        Hachener Str. 7<br />
        57368 Lennestadt<br />
        Deutschland
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: <a href="tel:+4915142840916">0151 42840916</a><br />
        E-Mail: <a href="mailto:info@frankies-eventservice.de">info@frankies-eventservice.de</a>
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
        DE354807768
      </p>

      <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
      <p>
        Dienstleistungserbringer im Bereich Veranstaltungs- und Eventservice.<br />
        Tätigkeit als Einzelunternehmer.
      </p>

      <h2>Redaktionell verantwortlich</h2>
      <p>
        Mustafa Yildirim<br />
        Hachener Str. 7<br />
        57368 Lennestadt
      </p>

      <h2>EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
          https://ec.europa.eu/consumers/odr/
        </a>
      </p>
      <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>

      <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
        einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </>
  )
}

function Datenschutz() {
  return (
    <>
      <h1>Datenschutzerklärung</h1>

      <h2>1. Verantwortliche Stelle</h2>
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br /><br />
        Frankies Eventservice<br />
        Mustafa Yildirim<br />
        Hachener Str. 7, 57368 Lennestadt<br />
        Telefon: <a href="tel:+4915142840916">0151 42840916</a><br />
        E-Mail: <a href="mailto:info@frankies-eventservice.de">info@frankies-eventservice.de</a>
      </p>

      <h2>2. Allgemeines zur Datenverarbeitung</h2>
      <p>
        Wir erheben und verwenden personenbezogene Daten unserer Nutzer grundsätzlich
        nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer
        Inhalte und Leistungen erforderlich ist. Die Erhebung und Verwendung
        personenbezogener Daten erfolgt regelmäßig nur nach Einwilligung des Nutzers
        oder wenn die Verarbeitung durch gesetzliche Vorschriften erlaubt wird.
      </p>

      <h2>3. Hosting (Vercel)</h2>
      <p>
        Diese Website wird gehostet bei der Vercel Inc., 440 N Barranca Ave #4133,
        Covina, CA 91723, USA. Wenn Sie unsere Website besuchen, verarbeitet der
        Hosting-Anbieter automatisch sogenannte Server-Logfiles. Dazu gehören:
      </p>
      <ul>
        <li>IP-Adresse des anfragenden Geräts</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>Name und URL der abgerufenen Datei</li>
        <li>Verwendeter Browser und Betriebssystem</li>
        <li>Referrer-URL (zuvor besuchte Seite)</li>
      </ul>
      <p>
        Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
        (berechtigtes Interesse an der technisch fehlerfreien Darstellung der Website).
        Die Datenübertragung in die USA erfolgt auf Grundlage der
        EU-Standardvertragsklauseln. Weitere Informationen finden Sie in der{' '}
        <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
          Datenschutzerklärung von Vercel
        </a>.
      </p>

      <h2>4. Kontakt- und Buchungsformulare</h2>
      <h3>Verarbeitung Ihrer Anfragedaten</h3>
      <p>
        Wenn Sie über unsere Kontaktformulare oder das Buchungsformular eine Anfrage
        stellen, erheben wir folgende Daten:
      </p>
      <ul>
        <li>Vor- und Nachname</li>
        <li>E-Mail-Adresse</li>
        <li>Telefonnummer</li>
        <li>Anschrift (Straße, PLZ, Ort)</li>
        <li>Veranstaltungsart, -datum und -ort</li>
        <li>Gästeanzahl</li>
        <li>Ihre Nachricht</li>
      </ul>
      <p>
        Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage und für
        eventuelle Rückfragen genutzt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
        (Vertragsanbahnung).
      </p>

      <h3>Web3Forms (Formularversand)</h3>
      <p>
        Zur Übermittlung der Formulardaten nutzen wir den Dienst Web3Forms
        (web3forms.com). Ihre eingegebenen Daten werden an die Server von Web3Forms
        übertragen und von dort als E-Mail-Benachrichtigung an uns weitergeleitet.
        Web3Forms speichert die Daten nur zur Zustellung und löscht sie anschließend.
        Weitere Informationen:{' '}
        <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer">
          Datenschutzrichtlinie Web3Forms
        </a>.
      </p>

      <h2>5. Terminbuchung (Cal.com)</h2>
      <p>
        Für die Online-Terminbuchung nutzen wir Cal.com (Calcom, Inc., 2261 Market
        Street #5220, San Francisco, CA 94114, USA). Wenn Sie einen Termin buchen,
        werden Name und E-Mail-Adresse an Cal.com übertragen. Die Verarbeitung erfolgt
        auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Weitere
        Informationen:{' '}
        <a href="https://cal.com/privacy" target="_blank" rel="noopener noreferrer">
          Datenschutzrichtlinie Cal.com
        </a>.
      </p>

      <h2>6. SSL/TLS-Verschlüsselung</h2>
      <p>
        Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
        vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
        Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
        „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrem Browser.
      </p>

      <h2>7. Cookies und Analyse-Dienste</h2>
      <h3>Technisch notwendige Cookies</h3>
      <p>
        Unsere Website verwendet technisch notwendige Cookies, die für den Betrieb
        der Website erforderlich sind. Diese Cookies können nicht deaktiviert werden.
        Die Speicherung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
      </p>

      <h3>Google Analytics 4</h3>
      <p>
        Mit Ihrer Einwilligung nutzen wir Google Analytics 4 (GA4) der Google Ireland
        Limited, Gordon House, Barrow Street, Dublin 4, Irland. GA4 verwendet Cookies,
        die eine Analyse der Benutzung unserer Website ermöglichen. Die durch den Cookie
        erzeugten Informationen werden in der Regel an einen Server von Google in den
        USA übertragen und dort gespeichert.
      </p>
      <p>
        Wir haben IP-Anonymisierung aktiviert (<code>anonymize_ip: true</code>), sodass
        Ihre IP-Adresse von Google innerhalb der EU/EWR vor der Übermittlung in die USA
        gekürzt wird.
      </p>
      <p>
        Rechtsgrundlage ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
        Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie den Cookie-Banner
        über den Link im Footer erneut aufrufen oder Cookies in Ihrem Browser löschen.
        Weitere Informationen:{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          Datenschutzerklärung Google
        </a>.
      </p>

      <h3>Vercel Analytics</h3>
      <p>
        Wir nutzen Vercel Analytics zur anonymen Auswertung von Seitenaufrufen.
        Vercel Analytics setzt keine Cookies und erhebt keine personenbezogenen
        Daten — es werden lediglich aggregierte, anonyme Nutzungsstatistiken erfasst.
        Eine Einwilligung ist daher nicht erforderlich.
      </p>

      <h2>8. Ihre Rechte als betroffene Person</h2>
      <p>Sie haben gegenüber uns folgende Rechte:</p>
      <ul>
        <li><strong>Auskunftsrecht</strong> (Art. 15 DSGVO)</li>
        <li><strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO)</li>
        <li><strong>Recht auf Löschung</strong> (Art. 17 DSGVO)</li>
        <li><strong>Recht auf Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
        <li><strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
        <li><strong>Widerspruchsrecht</strong> (Art. 21 DSGVO)</li>
        <li><strong>Recht auf Widerruf einer erteilten Einwilligung</strong> (Art. 7 Abs. 3 DSGVO)</li>
      </ul>
      <p>
        Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{' '}
        <a href="mailto:info@frankies-eventservice.de">info@frankies-eventservice.de</a>
      </p>

      <h2>9. Beschwerderecht bei der Aufsichtsbehörde</h2>
      <p>
        Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die
        Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
        Zuständige Aufsichtsbehörde für Nordrhein-Westfalen ist:
      </p>
      <p>
        Landesbeauftragte für Datenschutz und Informationsfreiheit NRW (LDI NRW)<br />
        Postfach 20 04 44, 40102 Düsseldorf<br />
        Telefon: 0211 38424-0<br />
        <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer">
          www.ldi.nrw.de
        </a>
      </p>

      <h2>10. Aktualität dieser Datenschutzerklärung</h2>
      <p>
        Diese Datenschutzerklärung ist aktuell gültig und datiert vom April 2026.
        Durch die Weiterentwicklung unserer Website oder aufgrund geänderter
        gesetzlicher Vorgaben kann eine Anpassung notwendig werden.
      </p>
    </>
  )
}
