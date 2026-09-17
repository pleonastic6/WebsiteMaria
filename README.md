# Psychologin Website Prototype

Warme, professionelle Website-Vorlage für eine psychologische Praxis.

## Lokal starten

```bash
npm install
npm run dev
```

Aktuell läuft der Dev-Server hier auf:

- http://localhost:5188/
- LAN: http://192.168.68.83:5188/

## Build prüfen

```bash
npm run build
```

## GitHub Pages

Die Seite ist so vorbereitet, dass GitHub Pages sie direkt aus `main` / repo root ausliefern kann. Deshalb lädt `index.html` die Dateien relativ (`./src/main.js`, `./src/styles.css`) und es gibt eine `.nojekyll`.

Live-URL:

- https://pleonastic6.github.io/WebsiteMaria/

## Inhalte ersetzen vor Livegang

- Name, Ort, Telefon, E-Mail
- echte Qualifikation, Kammer, Berufsordnung, Versicherung
- Kosten-/Kassenstatus
- echtes Portrait / Praxisfotos
- Impressum und Datenschutzerklärung juristisch prüfen
- Kontaktformular an DSGVO-konformen Versand anbinden

Die Demo ist absichtlich auf `noindex,nofollow`, damit Platzhalter nicht indexiert werden.
