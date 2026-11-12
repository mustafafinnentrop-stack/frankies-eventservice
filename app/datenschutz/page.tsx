import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import { CinematicFooter } from '@/components/ui/motion-footer'
import RevealWrapper from '@/components/RevealWrapper'

const PAGE_URL = 'https://frankies-eventservice.de/datenschutz'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Frankies Eventservice',
  description: 'Datenschutzerklärung von Frankies Eventservice – Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.',
  alternates: { canonical: PAGE_URL },
  robots: { index: false, follow: true }, // Rechtstexte müssen nicht unbedingt in den Suchindex
}

// Gleiche Inline-Stile wie auf /agb, damit alle Rechtsseiten identisch aussehen.
const H2 = {
  color: 'var(--color-text)',
  fontSize: '1.5rem',
  marginTop: '2.5rem',
  marginBottom: '1rem',
  fontFamily: 'var(--font-display)',
} as const
const H3 = {
  color: 'var(--color-text)',
  fontSize: '1.1rem',
  marginTop: '1.75rem',
  marginBottom: '0.75rem',
  fontFamily: 'var(--font-display)',
  fontWeight: 400,
} as const
const UL = { paddingLeft: '1.5rem', margin: '1rem 0' } as const
const LINK = { color: 'var(--color-gold)', textDecoration: 'none' } as const

export default function DatenschutzPage() {
  return (
    <>
      <Navbar />
      <div className="content-layer">
        <RevealWrapper>
        <main style={{ paddingTop: '100px', background: 'var(--color-bg)', minHeight: '100vh' }}>
          <section style={{ padding: '5rem 2rem 8rem' }}>
            <div className="section-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p className="section-label">Rechtliches</p>
              <h1 className="section-title" style={{ marginBottom: '3rem' }}>Datenschutzerklärung</h1>

              <div className="legal-text-content" style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontWeight: 300 }}>
                <h2 style={H2}>1. Verantwortliche Stelle</h2>
                <p>
                  Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br /><br />
                  Frankies Eventservice<br />
                  Mustafa Yildirim<br />
                  Hachener Str. 7, 57368 Lennestadt<br />
                  Telefon: <a href="tel:+4915142840916" style={LINK}>0151 42840916</a><br />
                  E-Mail: <a href="mailto:info@frankies-eventservice.de" style={LINK}>info@frankies-eventservice.de</a>
                </p>

                <h2 style={H2}>2. Allgemeines zur Datenverarbeitung</h2>
                <p>
                  Wir erheben und verwenden personenbezogene Daten unserer Nutzer grundsätzlich
                  nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer
                  Inhalte und Leistungen erforderlich ist. Die Erhebung und Verwendung
                  personenbezogener Daten erfolgt regelmäßig nur nach Einwilligung des Nutzers
                  oder wenn die Verarbeitung durch gesetzliche Vorschriften erlaubt wird.
                </p>

                <h2 style={H2}>3. Hosting (Vercel)</h2>
                <p>
                  Diese Website wird gehostet bei der Vercel Inc., 440 N Barranca Ave #4133,
                  Covina, CA 91723, USA. Wenn Sie unsere Website besuchen, verarbeitet der
                  Hosting-Anbieter automatisch sogenannte Server-Logfiles. Dazu gehören:
                </p>
                <ul style={UL}>
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
                  <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={LINK}>
                    Datenschutzerklärung von Vercel
                  </a>.
                </p>

                <h2 style={H2}>4. Kontakt- und Buchungsformulare</h2>
                <h3 style={H3}>Verarbeitung Ihrer Anfragedaten</h3>
                <p>
                  Wenn Sie über unsere Kontaktformulare oder das Buchungsformular eine Anfrage
                  stellen, erheben wir folgende Daten:
                </p>
                <ul style={UL}>
                  <li>Vor- und Nachname</li>
                  <li>E-Mail-Adresse</li>
                  <li>Telefonnummer</li>
                  <li>Anschrift (Straße, PLZ, Ort)</li>
                  <li>Veranstaltungsart, -datum und -ort</li>
                  <li>Gästeanzahl</li>
                  <li>Gewünschte Leistungen und Pakete</li>
                  <li>Ihre Nachricht</li>
                </ul>
                <p>
                  Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage und für
                  eventuelle Rückfragen genutzt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
                  (Vertragsanbahnung).
                </p>

                <h3 style={H3}>Web3Forms (Formularversand)</h3>
                <p>
                  Zur Übermittlung der Formulardaten nutzen wir den Dienst Web3Forms
                  (web3forms.com). Ihre eingegebenen Daten werden an die Server von Web3Forms
                  übertragen und von dort als E-Mail-Benachrichtigung an uns weitergeleitet.
                  Web3Forms speichert die Daten nur zur Zustellung und löscht sie anschließend.
                  Weitere Informationen:{' '}
                  <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer" style={LINK}>
                    Datenschutzrichtlinie Web3Forms
                  </a>.
                </p>

                <h2 style={H2}>5. Terminbuchung (Cal.com)</h2>
                <p>
                  Für die Online-Terminbuchung nutzen wir Cal.com (Calcom, Inc., 2261 Market
                  Street #5220, San Francisco, CA 94114, USA). Wenn Sie einen Termin buchen,
                  werden Name und E-Mail-Adresse an Cal.com übertragen. Die Verarbeitung erfolgt
                  auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Weitere
                  Informationen:{' '}
                  <a href="https://cal.com/privacy" target="_blank" rel="noopener noreferrer" style={LINK}>
                    Datenschutzrichtlinie Cal.com
                  </a>.
                </p>

                <h2 style={H2}>6. SSL/TLS-Verschlüsselung</h2>
                <p>
                  Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
                  vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
                  Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
                  „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrem Browser.
                </p>

                <h2 style={H2}>7. Cookies und Analyse-Dienste</h2>
                <h3 style={H3}>Technisch notwendige Cookies</h3>
                <p>
                  Unsere Website verwendet technisch notwendige Cookies, die für den Betrieb
                  der Website erforderlich sind. Diese Cookies können nicht deaktiviert werden.
                  Die Speicherung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                </p>

                <h3 style={H3}>Google Analytics 4</h3>
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
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={LINK}>
                    Datenschutzerklärung Google
                  </a>.
                </p>

                {/* Mess-Pixel von OpenAI (12.11.2026). Was hier steht, ist am
                    lokalen Build im Browser gemessen: welche Cookies gesetzt
                    werden und was beim Absenden einer Anfrage uebertragen
                    wird. Die Angaben zu Gesellschaften, Verantwortlichkeit
                    und Standardvertragsklauseln stammen aus OpenAIs
                    Bedingungen, gelesen ueber die Websuche — die Originalseiten
                    liessen sich nicht automatisch abrufen. Vor einer
                    Aenderung am Pixel muss dieser Abschnitt mitgeaendert
                    werden. */}
                <h3 style={H3}>OpenAI Measurement Pixel (Conversion-Tracking)</h3>
                <p>
                  Zur Erfolgsmessung unserer Anzeigen in ChatGPT (Conversion-Tracking) setzen
                  wir mit Ihrer Einwilligung das Measurement Pixel von OpenAI ein. Empfänger
                  der Daten ist OpenAI. Nach den Bedingungen von OpenAI verarbeitet die OpenAI
                  Ireland Limited (Dublin, Irland) die Daten von Nutzern aus dem Europäischen
                  Wirtschaftsraum; eine Übermittlung an die OpenAI OpCo, LLC in den USA ist
                  möglich.
                </p>
                <p>
                  Das Skript wird erst nach Ihrer Einwilligung in der Kategorie „Marketing“
                  geladen. Beim Laden einer Seite werden IP-Adresse, Angaben zu Browser und
                  Betriebssystem, die Adresse der aufgerufenen Seite (ohne Parameter) und der
                  Zeitpunkt an OpenAI übermittelt. Dabei werden folgende Cookies gesetzt:
                </p>
                <ul style={UL}>
                  <li><code>__oppref</code> (30 Tage): Klick-ID der Anzeige. Wird nur bei Aufruf über eine Anzeige in ChatGPT gesetzt.</li>
                  <li><code>__obref</code> (1 Jahr): zufällige Browser-ID für diese Website.</li>
                  <li><code>__oaiq_consent</code> (30 Tage) sowie die Einträge <code>oaiq_consent</code> (localStorage) und <code>oaiq_cs</code> (sessionStorage): Status Ihrer Einwilligung.</li>
                  <li><code>__cf_bm</code> (30 Minuten) und <code>_cfuvid</code> (Sitzung): Cookies von Cloudflare unter bzrcdn.openai.com, dem CDN, von dem das Skript geladen wird; Schutz vor automatisierten Zugriffen.</li>
                </ul>
                <p>
                  Beim Absenden einer Anfrage über eines unserer Formulare wird ein
                  Conversion-Ereignis an OpenAI übermittelt. Dabei ist die Funktion „Automatic
                  Advanced Matching“ aktiv: E-Mail-Adresse, Telefonnummer und Name aus dem
                  Formular werden in Ihrem Browser gehasht (SHA-256) und an OpenAI übermittelt,
                  der angegebene Ort ungehasht. Der Hashwert enthält die Angabe nicht im
                  Klartext. OpenAI kann ihn jedoch mit den Daten eigener Nutzer abgleichen und
                  so feststellen, ob eine Anfrage auf eine unserer Anzeigen zurückgeht.
                  Nachricht, Anlass, Datum und Gästezahl werden nicht übermittelt.
                </p>
                <p>
                  Dasselbe Conversion-Ereignis wird zusätzlich serverseitig über die
                  Conversions API an OpenAI übermittelt. Dabei werden IP-Adresse,
                  Browserkennung (User-Agent), Klick-ID und Browser-ID weitergegeben, keine
                  Angaben aus dem Formular. Auch diese Übermittlung erfolgt nur mit Ihrer
                  Einwilligung in der Kategorie „Marketing“.
                </p>
                <p>
                  Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und
                  § 25 Abs. 1 TDDDG. Sie können sie jederzeit über das Symbol unten links auf
                  jeder Seite widerrufen (Art. 7 Abs. 3 DSGVO). Dann werden die Cookies auf
                  unserer Domain gelöscht, und das Skript wird nicht mehr geladen. OpenAI
                  verarbeitet die Daten nach eigenen Angaben in eigener Verantwortung und
                  nicht in unserem Auftrag. Für die Übermittlung in die USA verweist OpenAI
                  auf die Standardvertragsklauseln der Europäischen Kommission. Die
                  Speicherdauer der gemeldeten Ereignisse bei OpenAI richtet sich nach den
                  Bedingungen von OpenAI. Weitere Informationen:{' '}
                  <a href="https://openai.com/policies/conversion-terms/" target="_blank" rel="noopener noreferrer" style={LINK}>
                    Conversion Terms von OpenAI
                  </a>{' '}
                  und{' '}
                  <a href="https://openai.com/policies/" target="_blank" rel="noopener noreferrer" style={LINK}>
                    Richtlinien von OpenAI
                  </a>.
                </p>

                <h3 style={H3}>Vercel Analytics</h3>
                <p>
                  Wir nutzen Vercel Analytics zur anonymen Auswertung von Seitenaufrufen.
                  Vercel Analytics setzt keine Cookies und erhebt keine personenbezogenen
                  Daten — es werden lediglich aggregierte, anonyme Nutzungsstatistiken erfasst.
                  Eine Einwilligung ist daher nicht erforderlich.
                </p>

                <h2 style={H2}>8. Ihre Rechte als betroffene Person</h2>
                <p>Sie haben gegenüber uns folgende Rechte:</p>
                <ul style={UL}>
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
                  <a href="mailto:info@frankies-eventservice.de" style={LINK}>info@frankies-eventservice.de</a>
                </p>

                <h2 style={H2}>9. Beschwerderecht bei der Aufsichtsbehörde</h2>
                <p>
                  Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die
                  Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
                  Zuständige Aufsichtsbehörde für Nordrhein-Westfalen ist:
                </p>
                <p>
                  Landesbeauftragte für Datenschutz und Informationsfreiheit NRW (LDI NRW)<br />
                  Postfach 20 04 44, 40102 Düsseldorf<br />
                  Telefon: 0211 38424-0<br />
                  <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer" style={LINK}>
                    www.ldi.nrw.de
                  </a>
                </p>

                <h2 style={H2}>10. Aktualität dieser Datenschutzerklärung</h2>
                <p>
                  Diese Datenschutzerklärung ist aktuell gültig und datiert vom November 2026.
                  Durch die Weiterentwicklung unserer Website oder aufgrund geänderter
                  gesetzlicher Vorgaben kann eine Anpassung notwendig werden.
                </p>
              </div>
            </div>
          </section>
        </main>
        </RevealWrapper>
      </div>
      <CinematicFooter />
    </>
  )
}
