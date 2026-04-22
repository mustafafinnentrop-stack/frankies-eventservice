'use client'

import { useEffect } from 'react'

interface Props {
  id: 'impressum' | 'datenschutz'
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
        {id === 'impressum' ? <Impressum /> : <Datenschutz />}
      </div>
    </div>
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

      <h2>Umsatzsteuer</h2>
      <p>
        Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerregelung).
        Eine Umsatzsteuer-Identifikationsnummer liegt daher nicht vor.
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

      <h2>7. Cookies</h2>
      <p>
        Unsere Website verwendet ausschließlich technisch notwendige Cookies, die
        für den Betrieb der Website erforderlich sind. Es werden keine Werbe- oder
        Tracking-Cookies eingesetzt. Die Speicherung dieser Cookies erfolgt auf
        Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
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
