# Prompt: eventbook-Einbindung auf frankies-eventservice.de

Zum Weitergeben an jeden, der die Website nachbaut oder verändert. Stand: 8. September 2026.

---

Frankies Eventservice (Lennestadt) hat ein Anbieterprofil im Branchenverzeichnis eventbook.com:
https://www.eventbook.com/de/providers/frankies-eventservice-lennestadt — Status: zahlender Premium-Partner. eventbook stellt dafür zwei Grafiken bereit: ein Siegel („Recommended by eventbook.com – Premium Partner", mit fünf Sternen) und das Wortmarken-Logo „eventbook.com", beide weiß auf transparentem Grund.

**So ist es auf der Website eingebaut:**

1. Bewertungs-Sektion „Echte Stimmen, echte Feiern": Unter der Zeile „5,0 ★★★★★ aus 2 Google-Bewertungen" steht das Siegel, 200 px breit, verlinkt auf das Profil. Beides zusammen bildet eine Vertrauenszeile; auf schmalen Bildschirmen untereinander.
2. Footer: Siegel (180 px) und Logo (150 px) nebeneinander über den Links Impressum/Datenschutz, beide auf das Profil verlinkt, gedämpft dargestellt und bei Berührung voll sichtbar.
3. Beide Grafiken liegen auf dem eigenen Server (`/eventbook-badge.png`, `/eventbook-logo.svg`), nicht als Hotlink auf images.eventbook.com. Grund: Ein fremd gehostetes Bild sendet bei jedem Seitenaufruf die IP-Adresse des Besuchers an eventbook — vor jeder Einwilligung. Die Seite lädt sonst nichts von Dritten ohne Zustimmung, das soll so bleiben.
4. Alle Links öffnen in einem neuen Tab und tragen `rel="noopener noreferrer"`, dazu Alt-Text und aria-label. Profil-Adresse und Bildpfade stehen an einer einzigen Stelle im Code (`components/eventbook-daten.ts`).

**Was der Link SEO-technisch ist — und was nicht:**

- Der Link zeigt von frankies-eventservice.de **zu** eventbook. Das ist ein Backlink für eventbook, nicht für Frankies. eventbooks eigener Werbetext sagt es offen: „Jedes Widget enthält einen do-follow Link auf dein Profil bei eventbook."
- Umgekehrt verlinkt das eventbook-Profil **nicht** auf frankies-eventservice.de. Laut eventbook ist „Verlinkung deiner Webseite nur im Enterprise-Paket verfügbar" — im Premium-Paket also nicht. Die ausgehenden Links, die eventbook in Profilen überhaupt setzt, tragen `rel="nofollow"`.
- Das Siegel verbessert deshalb nicht die Auffindbarkeit von frankies-eventservice.de bei Google. Es ist ein Vertrauenssignal für Besucher, die bereits auf der Seite sind — nicht mehr, nicht weniger.
- Das Profil hat derzeit 0 Bewertungen; das Siegel zeigt fünf Sterne (eventbooks Standarddesign für Premium-Partner).
