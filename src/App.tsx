import { Hero } from './components/Hero';
import { ImpactSection } from './components/ImpactSection';
import { Header } from './components/Header';
import { Timeline } from './components/Timeline';
import { Section } from './components/Section';
import { RegressStory } from './components/RegressStory';
import { AttributeChecklist } from './components/AttributeChecklist';

const impactStats = [
  {
    label: 'Regressystem',
    value: 'MVP in Wochen → produktiv nach 4 Monaten',
    detail: 'Gestopptes Projekt mit Stefan (PO) neu entschieden, gebaut und an Allianz übergeben.'
  },
  {
    label: 'Betrieb & Sicherheit',
    value: 'Pentest ohne Findings',
    detail: 'Architektur, Monitoring, Prompt-Governance, Rollbacks und Dokumentation bereitgestellt.'
  },
  {
    label: 'Auslastung & Fokus',
    value: '>226h Mehrarbeit · volle Auslastung 2025',
    detail: 'Priorisiert auf Delivery, kaum Krankheitstage, klare Transparenz für Stakeholder.'
  }
];

const regressPhases = [
  {
    phase: 'Neustart',
    title: 'Projektstopp abgewendet',
    detail: 'Allianz-Anforderungen konnten zunächst nicht bedient werden. Entscheidung: Neustart als MVP, statt Abschaltung.',
    outcome: 'Ownership übernommen, Erwartungen klar neu gesteckt.',
    meta: 'Woche 0'
  },
  {
    phase: 'MVP-Entscheidung',
    title: 'In Tagen abgestimmt mit Stefan (PO)',
    detail: 'Schlanke Architektur entworfen: Rust-Services, React-UI, Vektor-DB, PDF/SharePoint-Ingestion, Azure OpenAI.',
    outcome: 'Storyline abgestimmt, Erfolgskriterien messbar gemacht.',
    meta: 'Woche 1'
  },
  {
    phase: 'Umsetzung',
    title: 'MVP in wenigen Wochen umgesetzt',
    detail: 'Pipelines, UI und Betrieb parallel gebaut. Frühe Demos mit Allianz, Feedback unmittelbar eingearbeitet.',
    outcome: 'Vertrauen gewonnen – Weiterentwicklung freigegeben.',
    meta: 'Woche 2–6'
  },
  {
    phase: 'Produktionsreife',
    title: 'Pentest bestanden, Übergabe erfolgt',
    detail: 'Nach vier Monaten produktionsfähig, Pentest ohne Sicherheitslücken, Dokumente & Testlauf für Allianz bereitgestellt.',
    outcome: 'Tool akzeptiert, Betrieb und Weiterentwicklung gesichert.',
    meta: 'Monat 4'
  }
];

const regressHighlights = [
  { label: 'Governance', value: 'Prompt-Templates, Logging, Rollbacks' },
  { label: 'Plattform', value: 'Mandantenfähig, pipeline-basiert' },
  { label: 'Betrieb', value: 'Monitoring, Observability, Runbooks' }
];

const companyTimeline = [
  {
    title: 'Jan – Okt 2025',
    detail: 'API 2.0 mit AFM Quality gehärtet, Controlling Tool im laufenden Betrieb stabil gehalten.',
    meta: 'Stabilisierung'
  },
  {
    title: 'Okt – Dez 2025',
    detail: 'Regressystem von MVP zu Produktion geführt, API 2.0 Beratung, Controlling Tool weitergeführt.',
    meta: 'Delivery & Scale'
  }
];

const strategicDelivery = [
  {
    title: 'API 2.0 / AFM Quality',
    subtitle: 'Integration entschlackt, Risiken reduziert',
    badge: 'Delivery',
    icon: '✅',
    points: [
      'Versionierung, Gates für Breaking Changes und klare Dokumentation etabliert.',
      'Performance durch Caching-Strategie und schlanke Payloads verbessert.',
      'Quality-Sessions mit AFM, Verantwortung transparent gemacht.'
    ]
  },
  {
    title: 'Decision Engine',
    subtitle: 'RAG + Vektor-DB als Entscheidungsschicht',
    badge: 'Architecture',
    icon: '🧠',
    points: [
      'Relevanz-Scoring, Guardrails und Evaluations integriert.',
      'Harmonisierte Wissensquellen, schnelle Antwortqualität.',
      'Tech-Demos mit Businessfokus vorbereitet.'
    ]
  },
  {
    title: 'Controlling Tool',
    subtitle: 'Regelbetrieb und Sicherheit abgesichert',
    badge: 'Reliability',
    icon: '💼',
    points: [
      'Frontend-Code-Reviews mit Dima, Deployments für stabilen Betrieb.',
      'Architektur und Run-Kosten transparent gemacht.',
      'Testlauf für neue Vision vorbereitet – koppelt perspektivisch ans Regressystem.'
    ]
  }
];

const controllingDetails = [
  'Regelmäßige Reviews mit Dima, Frontend-Qualität und Build-Pipeline gehärtet.',
  'Deployments und Betrieb gesichert, klare Verantwortlichkeiten kommuniziert.',
  'Vision mit Jonathan: Vektorisierung als Basis für Prompt-Analysen, mögliche Kopplung mit Regressystem – Testlauf vorbereitet.'
];

const genAIItems = [
  {
    title: 'Prompt-Pipelines & Governance',
    subtitle: 'End-to-End-Flows statt nur Vektoren',
    badge: 'AI Delivery',
    icon: '🧭',
    points: [
      'Guardrails, Logging und Rollback-fähige Templates etabliert.',
      'Evaluations integriert, um Qualität messbar zu halten.',
      'Anbindung an Direktion kommuniziert – Nutzung sicher und nachvollziehbar.'
    ]
  },
  {
    title: 'Plattformökonomie vorstellen',
    subtitle: 'Regressystem als Keimzelle für Produkte',
    badge: 'Story',
    icon: '🌐',
    points: [
      'Idee bei Mohamad Amara, Moritz Moll, Michael Gutbier platziert.',
      'Präsentations-Webseite gebaut und geteilt: https://sepromarketplace.vercel.app/.',
      'Monetarisierungspfad diskutiert, Anschluss an Allianz vorbereitet.'
    ]
  }
];

const attributes = [
  { label: 'Ownership', detail: 'Übernehme Architektur, Betrieb und Kommunikation in einer Hand.' },
  { label: 'Entscheidungsstärke', detail: 'Treffe Entscheidungen schnell, sichtbar und dokumentiert – wie beim Regressystem-MVP.' },
  { label: 'Struktur & Storytelling', detail: 'Komplexe Themen in Phasen und Leitfragen übersetzen, um Stakeholder mitzunehmen.' },
  { label: 'Delivery-Fokus', detail: 'Arbeite sichtbar mit klaren Demos, Prototypen und Produktionsübergaben.' },
  { label: 'Sicherheit & Governance', detail: 'Pentest-fähige Lösungen mit Guardrails, Logging und Runbooks bereitstellen.' },
  { label: 'Team Enablement', detail: 'Reviews, Pairing und Beispielcode, um Geschwindigkeit und Qualität zu erhöhen.' },
  { label: 'Plattformdenken', detail: 'Stelle Wiederverwendung und Mandantenfähigkeit über Einzel-Features.' },
  { label: 'Direktionsnähe', detail: 'Entscheidungen und Fortschritt transparent an Management und PO zurückspielen.' }
];

function Footer() {
  return (
    <footer className="mt-8 rounded-3xl border border-slate-100 bg-white/90 p-6 text-sm text-slate-600 shadow-sm">
      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
        <p className="font-semibold text-slate-900">Kontext</p>
        <p>Gespräch mit Dr. Marco Peisker · Jahresgespräch 2025 · Fokus: Regressystem als Referenz.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-slate-900">
      <Header />
      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:gap-12 md:px-8 lg:py-16">
        {/* 1. Hero */}
        <Hero
          name="Karim Rakia"
          title="Architektur & Delivery 2025"
          statement="Leitprojekt Regressystem neu entschieden, in Wochen als MVP gebaut und nach vier Monaten produktionsreif übergeben. Fokus auf Wirkung, Plattformdenken und Governance."
          stats={impactStats}
        />

        {/* 2. Leitprojekt Regressystem */}
        <RegressStory
          phases={regressPhases}
          highlights={regressHighlights}
          decision="Abbruch verhindert – MVP-Storyline mit Stefan (PO) abgestimmt, Allianz früh eingebunden."
          emphasis="Pipeline, UI und Betrieb parallel aufgebaut. Pentest ohne Findings, Übergabe an Allianz dokumentiert."
        />

        {/* 3. Zeitliche Gesamt-Timeline */}
        <Timeline
          id="gesamt-timeline"
          eyebrow="Timeline"
          title="Jahresverlauf 2025"
          description="Klare Phasen: Stabilisierung der Bestandsprojekte, dann Fokussierung auf Regressystem und API-Beratung."
          items={companyTimeline}
        />

        {/* 4. Strategic Delivery */}
        <ImpactSection
          id="strategic-delivery"
          eyebrow="Strategic Delivery"
          title="API, Decision Engine, Controlling – kompakt"
          description="Schlüsselinitiativen, die Stabilität, Sicherheit und Geschwindigkeit sichern."
          columns={3}
          items={strategicDelivery}
        />

        {/* 5. Controlling Tool */}
        <Section
          id="controlling"
          eyebrow="Controlling Tool"
          title="Betrieb gesichert, Vision vorbereitet"
          description="Regelmäßige Reviews, Deployments und eine neue Vision, die Analyse und Regressystem koppeln kann."
        >
          <div className="grid gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-700">
              Das Tool bleibt im laufenden Betrieb stabil: Deployments sichern Verfügbarkeit, die Architektur ist dokumentiert, und
              Code-Reviews halten die Frontend-Qualität hoch. Zusammen mit Jonathan entsteht eine neue Vision, die Daten nicht nur
              vektorisiert, sondern für Prompt-Analysen nutzt und perspektivisch ans Regressystem andockt. Testlauf ist vorbereitet.
            </p>
            <ul className="grid gap-2 text-sm text-slate-700 md:grid-cols-2">
              {controllingDetails.map((detail) => (
                <li key={detail} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* 6. GenAI & Plattformansatz */}
        <ImpactSection
          id="genai"
          eyebrow="GenAI & Plattform"
          title="End-to-End AI-Flows und Plattformökonomie"
          description="Governance, Prompt-Pipelines und Monetarisierungspfad – abgestimmt mit Direktion und Business Leads."
          items={genAIItems}
        />

        {/* 7. Arbeitsweise & Eigenschaften */}
        <AttributeChecklist items={attributes} />

        {/* 8. Footer */}
        <Footer />
      </main>
    </div>
  );
}
