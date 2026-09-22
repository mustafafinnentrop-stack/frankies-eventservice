# Sicherheitsprüfung frankies-eventservice.de — Stand 22.09.2026

## 1. Tatsächlicher Aufbau

| Komponente | Befund |
|---|---|
| Framework | Next.js 15.5 (App Router), React 19, alle 15 Seiten statisch vorgerendert |
| Hosting | Vercel, Team „Frankies Digital“, Domains frankies-eventservice.de + www; Preview-Deployments nur mit Vercel-Login erreichbar (SSO-Schutz „alle außer eigene Domains“) |
| API-Routen, Middleware, Server Actions | **nicht vorhanden** — die Seite hat keinen eigenen Server-Code |
| Datenbank, Dateispeicher, Nutzerkonten, Admin-Bereich | **nicht vorhanden** — nichts, was jemand lesen, ändern oder löschen könnte |
| Formulare | drei Anfrageformulare (Startseite, Service-Seite, Buchungsfenster), senden per Browser an api.web3forms.com; Web3Forms leitet als E-Mail an das Postfach weiter |
| E-Mail-Versand | ausschließlich über Web3Forms (Formulare); eigenes Postfach bei STRATO (MX smtpin.rzone.de) |
| Eingebundene Dienste | Web3Forms, Cal.com (nur Link), Google Analytics 4 (lädt erst nach Einwilligung), Vercel Analytics |
| Umgebungsvariablen bei Vercel | nur `NEXT_PUBLIC_CALCOM_URL` und `NEXT_PUBLIC_WEB3FORMS_KEY` — beides Browser-Werte, keine privilegierten Zugangsdaten |

Die im Video beschriebenen Risiken (öffentlich lesbare Nutzerdaten, ungeschützte Schreibzugriffe, manipulierbare Abstimmungen, Admin-Passwort) setzen eine Datenbank oder einen Admin-Bereich voraus. Beides gibt es hier nicht; diese Punkte sind **nicht relevant**.

## 2. Geheimnisse und Git-Historie

- 137 Commits vollständig durchsucht (Muster für API-Keys, Tokens, private Schlüssel, Passwörter, UUID-Schlüssel): **keine Treffer**. Nie eine `.env`-Datei oder ähnliche Datei eingecheckt.
- Build-Ausgabe: keine Source Maps. Im ausgelieferten JavaScript stehen der Web3Forms-Zugangsschlüssel (`1dc5…c9a4`) und die Cal.com-Adresse. Beides ist **beabsichtigt öffentlich**: Der Web3Forms-Schlüssel ist ein Browser-Schlüssel, er kann nur Mails an das fest hinterlegte Postfach auslösen, den Empfänger nicht ändern und keine Einsendungen lesen. Die Google-Analytics-Kennung `G-…` im Code ist ebenfalls ein öffentlicher Wert.
- Folge: Ein Austausch von Zugangsdaten ist **nicht erforderlich**. Falls der Web3Forms-Schlüssel eines Tages für Spam missbraucht wird: neuen Schlüssel im Web3Forms-Konto erzeugen, bei Vercel unter Settings → Environment Variables den Wert von `NEXT_PUBLIC_WEB3FORMS_KEY` ersetzen, neu deployen, alten Schlüssel im Web3Forms-Konto löschen.

## 3. Befunde und Korrekturen

### Bestätigte Schwachstellen (behoben in diesem Branch)

| Befund | Fundstelle | Risiko | Korrektur | Test |
|---|---|---|---|---|
| Next.js 15.5.15 mit 24 offenen Advisories, darunter eine als **kritisch** eingestufte Remote-Code-Execution in der Bildoptimierung (AVIF) und mehrere Denial-of-Service-Wege | `package.json` | Angriff auf den Bildoptimierer `/_next/image`; die meisten weiteren Advisories betreffen Middleware/Server Actions, die hier nicht existieren | Update auf 15.5.25 (Patch-Release, kein Major-Sprung); PostCSS per `overrides` auf 8.5.28 | `npm audit --omit=dev`: 0 Schwachstellen; Build grün, Typprüfung sauber |
| Keine Sicherheits-Header außer HSTS (das setzt Vercel selbst) | `next.config.ts` | Einbettung in fremde Seiten (Clickjacking), Nachladen fremder Skripte bei einer XSS-Lücke, MIME-Sniffing | Content-Security-Policy, X-Frame-Options DENY, X-Content-Type-Options nosniff, Referrer-Policy, Permissions-Policy; `X-Powered-By` abgeschaltet | Header lokal am Produktionsbuild geprüft; alle 11 Seiten im Browser geladen: 0 CSP-Verstöße, 0 JS-Fehler (mit gesetzter Analytics-Einwilligung) |
| Bildoptimierer nahm jede Qualität 1–100 und alle Breiten an | `next.config.ts` | Ein Skript kann pro Foto Hunderte Varianten erzeugen und das Vercel-Kontingent für Bildtransformationen leeren (Hobby: Projekt wird pausiert, Pro: Kosten) | nur die genutzten Qualitäten 55/60/62/75 erlaubt; Cache für fertige Varianten 1 Tag statt 60 s; Breiten bereits auf 1920 begrenzt | `q=33` → 400, `w=3840` → 400, fremde Bildadresse → 400, `q=60` → 200 |
| Formulare ohne Bot-Falle, ohne Längengrenzen, ohne Wiederholsperre | `Anfrage.tsx`, `Kontakt.tsx`, `BookingModal.tsx` | Spam-Flut ins Postfach, Kilobyte-Texte, Doppelversand | Honeypot-Feld `botcheck` (unsichtbar; gesetzt → kein Versand, Bot sieht Erfolg), maxLength auf allen Feldern plus Kürzung vor dem Senden, 60-Sekunden-Sperre pro Browserfenster; gemeinsame Logik in `components/formular-schutz.ts` | Stub statt Web3Forms: Name 100 Zeichen, Nachricht 2000 Zeichen, `botcheck:false` im Paket; Honeypot gesetzt → 0 Requests, Erfolgsanzeige; zweiter Versand innerhalb 60 s → Hinweis statt Request; Erfolgsbild wie vorher |

### Vermutungen und allgemeine Verbesserungen (nicht im Code lösbar)

| Punkt | Einordnung | Vorbereitete Maßnahme |
|---|---|---|
| Der Web3Forms-Schlüssel kann von jedem für Mails ans Postfach benutzt werden (kein Datenabfluss, aber Spam) | inhärent bei Browser-Formulardiensten; der Honeypot fängt einfache Bots, gezielte Skripte nicht | **hCaptcha einschalten** (kostenlos, ohne eigenes Konto): Web3Forms-Dashboard → Formular → „Block Spam“ → hCaptcha aktivieren. Dann im Code das Widget einbauen (Feld `h-captcha-response`, Site-Key von Web3Forms). Das ändert die Formulare sichtbar um ein Captcha-Kästchen — deshalb noch nicht umgesetzt, Freigabe nötig. **Domain-Beschränkung** (nur Absendungen von frankies-eventservice.de) gibt es bei Web3Forms nur im Pro-Tarif. |
| Rate-Limits auf dem Server | die Seite hat keinen Server; ein Zähler im Browser bremst nur den einzelnen Browser | Vercel Firewall: bislang **keine eigene Konfiguration** (nur Vercels Basis-DDoS-Schutz). Im Pro-Tarif: Rate-Limit-Regel für `/_next/image` und für `POST`-Anfragen; in allen Tarifen: „Attack Challenge Mode“ bei laufendem Angriff einschalten (Dashboard → Firewall). |
| Kosten bei Überlastung | Tarif nicht über die API ablesbar; die Abrechnungs-API meldet „keine Kosten“, was auf **Hobby** hindeutet. Hobby: keine Nachzahlung, das Projekt wird bei Überschreiten der Kontingente pausiert (Warnung ≠ Begrenzung, aber es entstehen keine Kosten). Pro: Nachzahlung möglich | Bitte im Vercel-Dashboard prüfen: Settings → Billing. Bei Pro: „Spend Management“ mit **hartem Limit** (Projekt pausieren) statt nur Benachrichtigung aktivieren. |
| E-Mail-Absenderschutz der Domain | DNS: DMARC `p=reject` gesetzt, **aber kein SPF-Eintrag** (`v=spf1 …`). Ohne SPF hängt die Zustellung eigener Mails allein an DKIM; ist DKIM bei STRATO/Brevo nicht aktiv, lehnen Empfänger echte Mails von info@ ab | Bei STRATO (Domain-DNS) einen SPF-Eintrag setzen, der STRATO und — falls genutzt — Brevo umfasst (`v=spf1 include:_spf.strato.com include:spf.brevo.com -all`), DKIM bei STRATO und Brevo aktivieren. Vorher prüfen, ob Brevo wirklich im Einsatz ist (TXT `brevo-code` vorhanden). |
| Cookie-Einwilligung im localStorage | eigener Wert des Besuchers, wird nur gelesen, `JSON.parse` in try/catch — kein Angriffsweg | keine |
| `dangerouslySetInnerHTML` auf vier Unterseiten | ausschließlich mit festen Texten aus dem Code, keine Nutzereingabe — keine XSS-Möglichkeit | keine |

## 4. Was nicht geprüft werden konnte

- Vercel-Tarif, Spend-Management und Firewall-Regeln im Dashboard: über die API nicht lesbar bzw. nicht konfiguriert. Änderungen daran sind oben vorbereitet, aber nicht ausgeführt.
- Web3Forms-Dashboard (hCaptcha, Block-Spam, Domain-Beschränkung): kein Zugriff.
- Header auf dem Vercel-Preview: Preview-Deployments verlangen einen Vercel-Login, deshalb nur lokal am Produktionsbuild gemessen. Nach dem Merge auf der Live-Domain erneut prüfen.
- Kein Lasttest gegen die Produktionsseite (bewusst unterlassen).
