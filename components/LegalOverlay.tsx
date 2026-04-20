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
        Telefon: 0151 42840916<br />
        E-Mail: <a href="mailto:info@frankies-eventservice.de">info@frankies-eventservice.de</a>
      </p>
      <h2>Umsatzsteuer</h2>
      <p>
        Umsatzsteuer wird nicht ausgewiesen, da der Verkäufer Kleinunternehmer
        im Sinne des UStG ist.
      </p>
      <h2>EU-Streitschlichtung</h2>
      <p>
        Plattform der EU-Kommission zur Online-Streitbeilegung:{' '}
        <a href="https://ec.europa.eu/odr" target="_blank" rel="noopener">
          https://ec.europa.eu/odr
        </a>
      </p>
      <h2>Verbraucherstreitbeilegung</h2>
      <p>
        Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
      </p>
    </>
  )
}

function Datenschutz() {
  return (
    <>
      <h1>Datenschutzerklärung</h1>

      <h2>1. Datenschutz auf einen Blick</h2>
      <h3>Allgemeine Hinweise</h3>
      <p>
        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
        Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
        Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
        identifiziert werden können. Ausführliche Informationen zum Thema
        Datenschutz entnehmen Sie der nachfolgenden Datenschutzerklärung.
      </p>

      <h3>Datenerfassung auf dieser Website</h3>
      <p>
        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
        Dessen Kontaktdaten können Sie dem folgenden Abschnitt entnehmen.
        Darüber hinaus werden Ihre Daten zum Teil automatisch beim Besuch der
        Website durch unsere IT-Systeme erfasst. Dabei handelt es sich vor allem
        um technische Daten wie beispielsweise Internetbrowser, Betriebssystem
        oder Uhrzeit des Seitenaufrufs.
      </p>

      <h2>2. Verantwortliche Stelle</h2>
      <p>
        Frankies Eventservice<br />
        Mustafa Yildirim<br />
        Hachener Str. 7<br />
        57368 Lennestadt<br />
        E-Mail: <a href="mailto:info@frankies-eventservice.de">info@frankies-eventservice.de</a><br />
        Telefon: 0151 42840916
      </p>
      <p>
        Verantwortliche Stelle ist die natürliche oder juristische Person, die
        allein oder gemeinsam mit anderen über die Zwecke und Mittel der
        Verarbeitung von personenbezogenen Daten entscheidet.
      </p>

      <h2>3. Hosting</h2>
      <p>
        Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina,
        CA 91723, USA gehostet. Wenn Sie unsere Website besuchen, erfasst der
        Server automatisch Informationen in sogenannten Server-Logfiles. Die
        Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
      </p>

      <h2>4. Allgemeine Hinweise und Pflichtinformationen</h2>
      <h3>Datenschutz</h3>
      <p>
        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
        sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
        entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
        Datenschutzerklärung.
      </p>

      <h3>Ihre Rechte</h3>
      <p>
        Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft,
        Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten. Außerdem
        haben Sie das Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
        Falls Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie
        diese jederzeit für die Zukunft widerrufen. Des Weiteren steht Ihnen ein
        Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
      </p>

      <h3>Widerruf Ihrer Einwilligung</h3>
      <p>
        Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung
        möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen.
        Dazu reicht eine formlose Mitteilung per E-Mail an uns.
      </p>

      <h2>5. Cookies</h2>
      <h3>Technisch notwendige Cookies</h3>
      <p>
        Bestimmte Cookies sind erforderlich, damit die Website korrekt funktioniert.
        Diese werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, da
        der Websitebetreiber ein berechtigtes Interesse an der technisch fehlerfreien
        Bereitstellung seiner Website hat.
      </p>

      <h2>6. Kontaktformular</h2>
      <p>
        Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
        Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen
        Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
        Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne
        Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf
        Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
      </p>
    </>
  )
}
