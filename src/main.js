const services = [
  {
    title: 'Erschöpfung & Stress',
    text: 'Wenn Alltag, Beruf oder Studium dauerhaft zu viel werden — und Erholung nicht mehr wirklich ankommen kann.'
  },
  {
    title: 'Ängste & innere Unruhe',
    text: 'Soziale Situationen, Gesundheit, Zukunft: Auslöser und Muster gemeinsam verstehen — und Schritte zurück in mehr Sicherheit entwickeln.'
  },
  {
    title: 'Selbstwert & Beziehungen',
    text: 'Für starke Selbstkritik, wiederkehrende Konflikte oder das Gefühl, die eigenen Bedürfnisse aus dem Blick verloren zu haben.'
  },
  {
    title: 'Lebensübergänge',
    text: 'Trennung, Verlust, neue Rollen oder schwere Entscheidungen — Begleitung ohne fertige Antworten, aber mit echter Orientierung.'
  }
];

const steps = [
  ['01', 'Kontakt aufnehmen', 'Kurze Nachricht oder Anruf. Beim Erstkontakt brauchen Sie keine Details zu schildern — Name und Rückrufnummer reichen vollständig aus.'],
  ['02', 'Erstgespräch', 'Wir klären Ihr Anliegen, Erwartungen und Rahmenbedingungen — offen für Ihre Fragen, ohne Verpflichtung.'],
  ['03', 'Probatorische Phase', 'In mehreren Sitzungen entsteht ein gemeinsames Verständnis Ihrer Situation, Geschichte und möglicher Ziele.'],
  ['04', 'Therapieplanung', 'Wir entscheiden gemeinsam und transparent über Vorgehen, Frequenz und die nächsten konkreten Schritte.']
];

const faqs = [
  ['Wie schnell bekomme ich einen Termin?', 'Aktuell sind Erstgespräche nach kurzer Voranmeldung möglich. Genaue Wartezeiten bitte direkt erfragen — diese Angabe sollte mit echten Praxisdaten ersetzt werden. [Platzhalter]'],
  ['Übernimmt die Krankenkasse die Kosten?', 'Das hängt von Zulassung und Versicherungsstatus ab. Für Privat und Beihilfe erfolgt die Abrechnung nach GOP. Gesetzlich Versicherte sollten vorab das Kostenerstattungsverfahren klären. [Platzhalter]'],
  ['Sind auch Online-Sitzungen möglich?', 'Für geeignete Themen kann nach dem Erstgespräch Videotherapie eine Option sein. Ob das auf Ihre Situation zutrifft, besprechen wir gemeinsam. [Platzhalter]'],
  ['Muss ich beim Erstkontakt schon viel erzählen?', 'Nein — Name und Rückrufmöglichkeit reichen vollständig aus. Details besprechen wir persönlich, da unverschlüsselte E-Mail für sensible Gesundheitsdaten nicht geeignet ist.']
];

const app = document.querySelector('#app');
if (!app) throw new Error('App container missing');

app.innerHTML = `
  <div class="demo-notice" role="note" aria-label="Demo-Hinweis" data-demo-notice>
    <b>Demo-Vorlage</b>
    Alle Namen, Kontaktdaten und Inhalte sind Platzhalter — nicht für den Realbetrieb geeignet.
    <button class="demo-close" type="button" aria-label="Hinweis schließen" data-demo-close>×</button>
  </div>

  <header class="site-header" data-header>
    <a class="brand" href="#top" aria-label="Zur Startseite">
      <span class="brand-mark" aria-hidden="true">LH</span>
      <span>
        <strong>Dr. Lena Hoffmann</strong>
        <small>Psychologische Praxis</small>
      </span>
    </a>
    <button class="nav-toggle" aria-label="Navigation öffnen" aria-expanded="false" data-nav-toggle>
      <span></span><span></span>
    </button>
    <nav class="nav" data-nav aria-label="Hauptnavigation">
      <a href="#angebot">Angebot</a>
      <a href="#ablauf">Ablauf</a>
      <a href="#ueber-mich">Über mich</a>
      <a href="#kosten">Kosten</a>
      <a class="nav-cta" href="#kontakt">Erstgespräch anfragen</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero section-pad">
      <div class="hero-copy reveal">
        <p class="eyebrow">Approbierte Psychologische Psychotherapeutin · Verhaltenstherapie</p>
        <h1>Wenn alles zu viel wird, braucht es einen ruhigen Ort zum Sortieren.</h1>
        <p class="lead">In meiner Münchner Praxis begleite ich Erwachsene durch anhaltenden Stress, Ängste und Erschöpfung — klar, wertschätzend und mit konkretem Blick auf Veränderung.</p>
        <div class="hero-actions">
          <a class="button primary" href="#kontakt">Erstgespräch anfragen</a>
          <a class="button ghost" href="#ablauf">Wie läuft das ab?</a>
        </div>
        <dl class="trust-row" aria-label="Praxisinformationen">
          <div><dt>Approbiert</dt><dd>Psychologische Psychotherapeutin</dd></div>
          <div><dt>Standort</dt><dd>München-Schwabing</dd></div>
          <div><dt>Termine</dt><dd>Nach Vereinbarung</dd></div>
        </dl>
      </div>
      <div class="hero-card reveal delay-1" aria-label="Praxisatmosphäre Illustration">
        <div class="portrait-card">
          <div class="portrait-light" aria-hidden="true"></div>
          <div class="portrait-botanical" aria-hidden="true"></div>
          <div class="portrait-shape"></div>
          <div class="portrait-lines" aria-hidden="true">
            <span></span><span></span><span></span>
          </div>
        </div>
        <div class="note-card" role="figure">
          <p>„Therapie beginnt oft nicht mit einer fertigen Lösung, sondern mit einem sicheren Gespräch."</p>
        </div>
      </div>
    </section>

    <section class="intro section-pad reveal" aria-label="Praxisphilosophie">
      <p>Viele kommen nicht, weil alles kaputt ist — sondern weil sie spüren, dass es so nicht weitergehen kann. Diese Praxis ist für genau diesen Moment: ruhig, klar, ohne Anpassungsdruck.</p>
    </section>

    <section id="angebot" class="section-pad split-section">
      <div class="section-heading reveal">
        <p class="eyebrow">Angebot</p>
        <h2>Unterstützung für Themen, die im Alltag leise schwer werden.</h2>
        <p>Die Schwerpunkte sind bewusst in Alltagssprache formuliert — Diagnosen können wichtig sein, aber verständliche Worte senken die Hemmschwelle zum ersten Schritt.</p>
      </div>
      <div class="service-grid">
        ${services.map((service, index) => `
          <article class="service-card reveal delay-${Math.min(index + 1, 3)}">
            <span class="service-number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span>
            <h3>${service.title}</h3>
            <p>${service.text}</p>
          </article>
        `).join('')}
      </div>
    </section>

    <section id="ablauf" class="section-pad process">
      <div class="section-heading centered reveal">
        <p class="eyebrow">Ablauf</p>
        <h2>Transparenz nimmt Unsicherheit.</h2>
        <p>Was passiert, wenn ich mich melde? Dieser Ablauf beantwortet die wichtigste Frage von Menschen, die den ersten Schritt noch abwägen.</p>
      </div>
      <div class="timeline" role="list">
        ${steps.map(([number, title, text]) => `
          <article class="step reveal" role="listitem">
            <span>${number}</span>
            <h3>${title}</h3>
            <p>${text}</p>
          </article>
        `).join('')}
      </div>
    </section>

    <section id="ueber-mich" class="section-pad about">
      <div class="about-visual reveal">
        <div class="room-card" aria-label="Praxisraum Illustration">
          <div class="room-window" aria-hidden="true"></div>
          <div class="room-light" aria-hidden="true"></div>
          <span class="sun" aria-hidden="true"></span>
          <span class="rug" aria-hidden="true"></span>
          <span class="chair one" aria-hidden="true"></span>
          <span class="chair two" aria-hidden="true"></span>
          <span class="plant" aria-hidden="true"></span>
        </div>
      </div>
      <div class="about-copy reveal delay-1">
        <p class="eyebrow">Über mich</p>
        <h2>Fachlich klar. Menschlich zugewandt.</h2>
        <p>Ich bin approbierte Psychologische Psychotherapeutin mit Schwerpunkt Verhaltenstherapie. In meiner Arbeit geht es nicht darum, Menschen zu „optimieren" — sondern Muster zu verstehen und neue Handlungsspielräume zu erschließen.</p>
        <ul class="credentials">
          <li>Approbierte Psychologische Psychotherapeutin (Deutschland)</li>
          <li>Fachkundenachweis Verhaltenstherapie, [Institut Platzhalter]</li>
          <li>Mitglied der Psychotherapeutenkammer [Bundesland Platzhalter]</li>
          <li>Ambulante Praxis- und Kliniktätigkeit seit [Jahr Platzhalter]</li>
        </ul>
      </div>
    </section>

    <section id="kosten" class="section-pad costs">
      <div class="section-heading reveal">
        <p class="eyebrow">Kosten & Rahmen</p>
        <h2>Klarheit vor dem ersten Termin.</h2>
      </div>
      <div class="cost-grid">
        <article class="cost-card reveal">
          <h3>Privat & Beihilfe</h3>
          <p>Abrechnung nach GOP. Bitte klären Sie die Erstattungshöhe vorab mit Ihrer Versicherung. [Platzhalter]</p>
        </article>
        <article class="cost-card featured reveal delay-1">
          <h3>Selbstzahler:innen</h3>
          <p>Für Menschen, die ohne Antragstellung starten möchten. Honorar und Frequenz werden transparent im Erstgespräch besprochen.</p>
        </article>
        <article class="cost-card reveal delay-2">
          <h3>Gesetzliche Kasse</h3>
          <p>Sofern keine Kassenzulassung besteht, wird hier ehrlich auf Kostenerstattung oder Alternativangebote hingewiesen. [Platzhalter]</p>
        </article>
      </div>
    </section>

    <section class="section-pad faq">
      <div class="section-heading centered reveal">
        <p class="eyebrow">Häufige Fragen</p>
        <h2>Vor dem ersten Gespräch</h2>
      </div>
      <div class="faq-list">
        ${faqs.map(([question, answer]) => `
          <details class="faq-item reveal">
            <summary>${question}</summary>
            <p>${answer}</p>
          </details>
        `).join('')}
      </div>
    </section>

    <section id="kontakt" class="section-pad contact">
      <div class="contact-panel reveal">
        <div>
          <p class="eyebrow">Kontakt</p>
          <h2>Der erste Schritt darf klein sein.</h2>
          <p>Schreiben Sie eine kurze Nachricht oder hinterlassen Sie eine Rückrufmöglichkeit. Für sensible Gesundheitsdaten ist unverschlüsselte E-Mail nicht geeignet.</p>
          <div class="contact-methods">
            <a href="tel:+498912345678">+49 89 12345678</a>
            <a href="mailto:praxis@example.de">praxis@example.de</a>
            <span>Musterstraße 12 · 80802 München</span>
          </div>
          <dl class="contact-hours">
            <dt>Sprechzeiten <small>[Platzhalter]</small></dt>
            <dd>Mo · Mi · Fr&ensp;09 – 18 Uhr</dd>
            <dd>Di · Do&emsp;&emsp;&ensp;12 – 20 Uhr</dd>
          </dl>
        </div>
        <form class="contact-form" data-contact-form novalidate>
          <label>
            Name
            <input name="name" autocomplete="name" required aria-required="true" />
          </label>
          <label>
            E-Mail oder Telefon
            <input name="contact" autocomplete="email" required aria-required="true" />
          </label>
          <label>
            Kurze Nachricht
            <textarea name="message" rows="4" required aria-required="true"></textarea>
          </label>
          <label class="checkbox">
            <input type="checkbox" required aria-required="true" />
            Ich habe die Datenschutzhinweise gelesen und stimme der Kontaktaufnahme zu.
          </label>
          <button class="button primary" type="submit">Nachricht senden</button>
          <p class="form-note" role="status" data-form-note>Demo-Formular: Es werden keine Daten übermittelt.</p>
        </form>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div>
      <strong>Dr. Lena Hoffmann</strong>
      <p>Psychologische Praxis · <span class="footer-demo">Demo-Website · Alle Daten sind Platzhalter</span></p>
    </div>
    <nav aria-label="Rechtliches">
      <a href="/impressum.html">Impressum</a>
      <a href="/datenschutz.html">Datenschutz</a>
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
  header?.classList.toggle('is-scrolled', window.scrollY > 20);
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

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
