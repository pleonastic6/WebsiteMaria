const services = [
  ['Stress und Erschöpfung', 'Wenn der Alltag nur noch funktioniert, aber innerlich kaum noch Luft bleibt.'],
  ['Ängste und innere Unruhe', 'Für Situationen, Gedanken oder Körperreaktionen, die plötzlich zu groß werden.'],
  ['Selbstwert und Beziehungen', 'Wenn alte Muster immer wieder auftauchen — im Kontakt mit anderen oder mit sich selbst.']
];

const steps = [
  ['01', 'Kurzer Erstkontakt', 'Eine Nachricht oder ein Anruf reicht. Details müssen nicht per E-Mail geklärt werden.'],
  ['02', 'Erstes Gespräch', 'Wir schauen gemeinsam, worum es gerade geht und ob die Zusammenarbeit passend ist.'],
  ['03', 'Gemeinsames Verstehen', 'In den ersten Sitzungen entsteht ein klares Bild von Belastungen, Mustern und Zielen.'],
  ['04', 'Weiterer Weg', 'Danach besprechen wir transparent, welche Form der Begleitung sinnvoll ist.']
];

const faqs = [
  ['Muss ich schon genau wissen, was los ist?', 'Nein. Oft beginnt Therapie genau damit, Dinge sortierbar zu machen.'],
  ['Was schreibe ich in die erste Nachricht?', 'Name, Kontaktmöglichkeit und ein kurzer Satz zum Anliegen reichen. Bitte keine ausführlichen sensiblen Gesundheitsdaten per unverschlüsselter E-Mail.'],
  ['Wie läuft die Kostenklärung?', 'Das hängt von Versicherung und Zulassung ab. Die Angaben auf dieser Demo-Seite sind Platzhalter und müssen vor Veröffentlichung ersetzt werden.']
];

const app = document.querySelector('#app');
if (!app) throw new Error('App container missing');

app.innerHTML = `
  <div class="demo-notice" role="note" aria-label="Demo-Hinweis" data-demo-notice>
    <b>Demo</b><span>Platzhalter für eine psychologische Praxis — Inhalte vor Veröffentlichung prüfen.</span>
    <button class="demo-close" type="button" aria-label="Hinweis schließen" data-demo-close>×</button>
  </div>

  <header class="site-header" data-header>
    <a class="brand" href="#top" aria-label="Zur Startseite">
      <span class="brand-script">Lena Hoffmann</span>
      <span class="brand-sub">Psychologische Praxis</span>
    </a>
    <button class="nav-toggle" aria-label="Navigation öffnen" aria-expanded="false" data-nav-toggle><span></span><span></span></button>
    <nav class="nav" data-nav aria-label="Hauptnavigation">
      <a href="#ueber-mich">Über mich</a>
      <a href="#angebot">Angebot</a>
      <a href="#ablauf">Ablauf</a>
      <a href="#kontakt">Kontakt</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero">
      <div class="hero-image" aria-hidden="true"></div>
      <div class="hero-overlay"></div>
      <div class="hero-inner reveal">
        <p class="eyebrow">Psychologische Psychotherapie · München</p>
        <h1>Raum für das, was gerade schwer ist.</h1>
        <p class="hero-text">Eine ruhige Praxis für Erwachsene, die Stress, Angst, Erschöpfung oder Beziehungsthemen nicht länger alleine sortieren möchten.</p>
        <a class="button light" href="#kontakt">Erstgespräch anfragen</a>
      </div>
    </section>

    <section class="welcome section-pad reveal" aria-label="Einführung">
      <div class="portrait-panel" aria-hidden="true">
        <span class="portrait-window"></span>
        <span class="portrait-shadow"></span>
      </div>
      <div class="welcome-copy">
        <p class="eyebrow muted">Schön, dass Sie da sind</p>
        <h2>Manchmal braucht es zuerst keinen Plan. Nur einen Ort, an dem man anfangen kann.</h2>
        <div class="botanical-mark" aria-hidden="true">⌇</div>
        <p>In meiner Arbeit geht es nicht darum, Menschen schneller wieder „funktionieren“ zu lassen. Es geht darum, Belastungen verständlich zu machen, Handlungsspielräume zurückzugewinnen und wieder freundlicher mit sich selbst in Kontakt zu kommen.</p>
      </div>
    </section>

    <section id="angebot" class="offer section-pad">
      <p class="eyebrow muted reveal">Angebot</p>
      <h2 class="center reveal">Themen, mit denen Menschen häufig kommen</h2>
      <div class="offer-list">
        ${services.map(([title, text]) => `
          <article class="offer-item reveal">
            <h3>${title}</h3>
            <p>${text}</p>
            <a href="#kontakt">Anfragen <span aria-hidden="true">→</span></a>
          </article>
        `).join('')}
      </div>
    </section>

    <section id="ablauf" class="process section-pad">
      <div class="process-head reveal">
        <p class="eyebrow muted">Ablauf</p>
        <h2>Was passiert nach der ersten Nachricht?</h2>
      </div>
      <div class="process-list">
        ${steps.map(([number, title, text]) => `
          <article class="process-row reveal">
            <span>${number}</span>
            <h3>${title}</h3>
            <p>${text}</p>
          </article>
        `).join('')}
      </div>
    </section>

    <section id="ueber-mich" class="about-band">
      <div class="section-pad about-grid">
        <div class="about-copy reveal">
          <p class="eyebrow">Über mich</p>
          <h2>Fachlich klar. Menschlich zugewandt.</h2>
          <p>Ich bin approbierte Psychologische Psychotherapeutin mit Schwerpunkt Verhaltenstherapie. Ich arbeite strukturiert, aber nicht nach Schema F — jede Therapie beginnt mit der Frage, was für diesen Menschen gerade wirklich hilfreich ist.</p>
        </div>
        <div class="qualification-card reveal">
          <p>Approbierte Psychologische Psychotherapeutin</p>
          <p>Verhaltenstherapie · [Institut Platzhalter]</p>
          <p>Psychotherapeutenkammer [Bundesland Platzhalter]</p>
          <p>Praxis in München-Schwabing · [Platzhalter]</p>
        </div>
      </div>
    </section>

    <section class="faq section-pad">
      <p class="eyebrow muted reveal">Vor dem ersten Gespräch</p>
      <div class="faq-list">
        ${faqs.map(([question, answer]) => `
          <details class="faq-item reveal">
            <summary>${question}</summary>
            <p>${answer}</p>
          </details>
        `).join('')}
      </div>
    </section>

    <section id="kontakt" class="contact-hero">
      <div class="contact-bg" aria-hidden="true"></div>
      <div class="contact-intro reveal">
        <p class="eyebrow">Kontakt</p>
        <h2>Der erste Schritt darf klein sein.</h2>
        <p>Schreiben Sie kurz, worum es ungefähr geht. Alles Weitere klären wir in Ruhe.</p>
      </div>
      <form class="contact-form reveal" data-contact-form novalidate>
        <label>Name<input name="name" autocomplete="name" required aria-required="true"></label>
        <label>E-Mail oder Telefon<input name="contact" autocomplete="email" required aria-required="true"></label>
        <label>Nachricht<textarea name="message" rows="5" required aria-required="true"></textarea></label>
        <label class="checkbox"><input type="checkbox" required aria-required="true">Datenschutzhinweise gelesen und Kontaktaufnahme einverstanden.</label>
        <button class="button filled" type="submit">Nachricht senden</button>
        <p class="form-note" role="status" data-form-note>Demo-Formular: Es werden keine Daten übermittelt.</p>
      </form>
    </section>
  </main>

  <footer class="site-footer">
    <p>© 2026 Dr. Lena Hoffmann · Demo mit Platzhalterdaten</p>
    <nav aria-label="Rechtliches">
      <a href="./impressum.html">Impressum</a>
      <a href="./datenschutz.html">Datenschutz</a>
      <a href="#kontakt">Kontakt</a>
    </nav>
  </footer>
`;

const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const header = document.querySelector('[data-header]');

navToggle?.addEventListener('click', () => {
  const isOpen = nav?.classList.toggle('is-open') ?? false;
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

window.addEventListener('scroll', () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 30);
});

document.querySelector('[data-demo-close]')?.addEventListener('click', () => {
  document.querySelector('[data-demo-notice]')?.remove();
});

const form = document.querySelector('[data-contact-form]');
const formNote = document.querySelector('[data-form-note]');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  formNote.textContent = 'Danke — in der echten Website würde jetzt eine sichere Anfrage ausgelöst.';
  form.reset();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
