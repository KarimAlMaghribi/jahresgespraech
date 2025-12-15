import { Hero } from './components/Hero';
import { ImpactSection } from './components/ImpactSection';
import { LeadProject } from './components/LeadProject';
import { Roadmap } from './components/Roadmap';
import { Header } from './components/Header';
import { SkillPillar } from './components/SkillPillar';
import { Timeline } from './components/Timeline';

const impactStats = [
  {
    label: 'Leitprojekt',
    value: 'Regressystem als skalierbare Plattform',
    detail: 'End-to-end in kurzer Zeit: Rust, React, Docker, Azure OpenAI, Vektor-DB, SharePoint & PDF-Ingestion.'
  },
  {
    label: 'Arbeitslast & Verlässlichkeit',
    value: '>226h Mehrarbeit · volle Auslastung 2025',
    detail: 'Ø > 40h/Woche, kaum Krankheit – Priorisierung klar dokumentiert.'
  },
  {
    label: 'Ownership',
    value: 'Architektur + Betrieb + Governance',
    detail: 'Mandantenfähig, pipeline-basiert, mit Monitoring, Prompt-Governance und Rollbacks.'
  }
];

const leadSteps = [
  {
    title: 'Problem',
    detail: 'Regressfälle ohne robuste Pipeline, heterogene Quellen (PDF, SharePoint) und hoher Zeitdruck.',
    emphasis: 'Umsetzung musste in Wochen stehen'
  },
  {
    title: 'Lösung',
    detail: 'Mandantenfähige Plattform mit Rust-Services, React-UI, Vektor-Datenbank, PDF-Ingestion und Azure OpenAI.',
    emphasis: 'Modular, pipeline-basiert, containerisiert'
  },
  {
    title: 'Wirkung',
    detail: 'Plattform-ready Basis für weitere Use Cases, klare Governance und Betrieb aus einer Hand.',
    emphasis: 'Skalierbar für zukünftige Produkte'
  }
];

const leadStack = [
  { label: 'Rust' },
  { label: 'React' },
  { label: 'Docker & Swarm' },
  { label: 'Azure OpenAI' },
  { label: 'Vektor-Datenbank' },
  { label: 'PDF-Ingestion' },
  { label: 'SharePoint' },
  { label: 'Monitoring & Observability' }
];

const leadHighlights = [
  { label: 'Aufbauzeit', value: 'Wochen statt Monate' },
  { label: 'Plattform', value: 'Mandantenfähig & modular' },
  { label: 'Governance', value: 'Prompt-Templates, Rollbacks, Logging' }
];

const strategicDelivery = [
  {
    title: 'AFM API 2.0 technisch vorangetrieben',
    subtitle: 'Stabilität, Sicherheit, Klarheit in der Integration',
    badge: 'Delivery',
    icon: '✅',
    points: [
      'API-Governance etabliert (Versionierung, Breaking-Change-Gates, Dokumentation).',
      'Performance über Caching-Strategie und schlanke Payloads verbessert.',
      'Stakeholder-Sessions geführt, Verantwortlichkeiten und Roadmap transparent gemacht.'
    ]
  },
  {
    title: 'Decision Engine Architektur (RAG + Vektor-DB)',
    subtitle: 'Kognitive Suche auf harmonisierten Wissensquellen',
    badge: 'Innovation',
    icon: '🧠',
    points: [
      'Relevanz-Scoring und Guardrails gebaut, Evaluations integriert.',
      'Wissensquellen vektorisiert, um schnelle Antwortqualität sicherzustellen.',
      'Tech-Demos vorbereitet, Business-Mehrwert sichtbar gemacht.'
    ]
  },
  {
    title: 'Controlling Tool neu ausgerichtet',
    subtitle: 'Architektur für Skalierung und Wartbarkeit',
    badge: 'Reliability',
    icon: '💼',
    points: [
      'Architektur-Review durchgeführt, kritische Pfade gehärtet und dokumentiert.',
      'Automatisierte Checks und Deployments ergänzt, Run-Kosten gesenkt.',
      'Regelmäßige Syncs mit Controlling-Team zur Priorisierung.'
    ]
  }
];

const innovationItems = [
  {
    title: 'Plattformökonomische Idee eingebracht',
    subtitle: 'Regressystem als Keimzelle für Produkte',
    icon: '💡',
    detail: 'Mandantenfähige Architektur eröffnet Monetarisierung und weitere Use Cases.',
    badge: 'Ownership'
  },
  {
    title: 'RAG & Vektor-Datenbanken operationalisiert',
    subtitle: 'Saubere Guardrails, Evaluations und Governance',
    icon: '🧭',
    detail: 'Sichere AI-Nutzung durch Prompt-Templates, Logging und rollback-fähige Pipelines.',
    badge: 'Architecture'
  }
];

const businessItems = [
  {
    title: 'Generali: Tool-Vorstellung initiiert',
    subtitle: 'Eigenständig vorbereitet und Folgeworkshops platziert',
    icon: '🤝',
    detail: 'Proaktive Demo des Regressystems, um Mehrwert früh sichtbar zu machen.',
    badge: 'Business Impact'
  },
  {
    title: 'Austausch mit Business Line Lead',
    subtitle: 'Gespräche mit Mohamad Amara & Michael Gutbier',
    icon: '🗣️',
    detail: 'Plattformökonomie und Monetarisierung abgestimmt, Erwartungen synchronisiert.',
    badge: 'Strategie'
  }
];

const skills = [
  {
    title: 'DevOps & Containerisierung',
    icon: '🔧',
    items: [
      'Docker Swarm, Portainer & Secrets aufgebaut.',
      'CI/CD mit Security- und Drift-Checks erweitert.',
      'Observability und Dashboards für Services etabliert.'
    ]
  },
  {
    title: 'Cyber Security / API Security',
    icon: '🔐',
    items: [
      'OAuth2, Zero-Trust-Prinzipien und Token-Handling vertieft.',
      'Security-Gates & Policy-as-Code evaluiert.',
      'Playbooks für sichere Integration erstellt.'
    ]
  },
  {
    title: 'Rust',
    icon: '🦀',
    items: [
      'Microservice-Schnittstellen und Error-Handling strukturiert.',
      'Performance-Tuning mit async & tracing umgesetzt.',
      'Team-Enablement durch Pairing & Codebeispiele.'
    ]
  }
];

const engagement = [
  {
    title: 'Vorlesung Universität Leipzig',
    detail: 'Wissensweitergabe zu moderner Softwarearchitektur und AI-gestützter Entwicklung.',
    meta: 'Community'
  },
  {
    title: 'Codebuzz Leipzig mitorganisiert (2025/2026)',
    detail: 'adesso repräsentiert und Austausch zwischen Engineering-Teams gestärkt.',
    meta: 'Brand & Networking'
  },
  {
    title: 'Hohe Verlässlichkeit',
    detail: 'Volle Auslastung, Ø > 40h/Woche, kaum Krankheit – Präsenz und Priorität auf Delivery.',
    meta: 'Commitment'
  }
];

const roadmapSteps = [
  {
    label: 'Architekturverantwortung ausbauen',
    items: [
      'Entscheidungswege beschleunigen und Guardrails definieren.',
      'Mehr Shared Assets (Templates, Playbooks) bereitstellen.',
      'Architektur-Reviews für neue Produkte übernehmen.'
    ]
  },
  {
    label: 'Plattform konkretisieren',
    items: [
      'Regressystem als Produkt positionieren und Mandanten onboarden.',
      'Geschäftsmodelle und Monetarisierung mit Business Line finalisieren.',
      'Skalierungspfade (Security, Multi-Region) vorbereiten.'
    ]
  },
  {
    label: 'Sichtbarkeit & Community',
    items: [
      'Demos, Lightning Talks und Playbooks verstärken.',
      'Community-Engagement (Codebuzz, Universität) fortführen.',
      'Security & Plattformarchitektur gezielt vertiefen.'
    ]
  }
];

function IntroNote() {
  return (
    <section
      id="strategic-delivery"
      className="section-gradient angled-surface rounded-3xl border border-slate-100/70 p-6 text-sm text-slate-700 shadow-sm"
    >
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Storyline</p>
        <p className="text-base font-semibold text-slate-900">Regressystem als Leitprojekt – alles ordnet sich darum.</p>
        <p>
          Inhalte sind nach Wirkung und Ownership geclustert: Strategic Delivery, Innovation & Ownership, Business Impact,
          Growth & Engineering, Engagement & Sichtbarkeit sowie Vision 2026. Redundanz reduziert, Kernbotschaften klar.
        </p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-slate-900">
      <Header />
      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:gap-12 md:px-8 lg:py-16">
        <Hero
          name="Karim Rakia"
          title="Senior-Track · Architektur & Delivery"
          statement="Klare Story: Regressystem als skalierbare Plattform aufgebaut, weitere Kernprojekte stabilisiert und Business-Mehrwert sichtbar gemacht. Fokus: Wirkung, Plattformdenken und Governance."
          stats={impactStats}
        />

        <LeadProject
          title="Leitprojekt: Regressystem"
          subtitle="End-to-end aufgebaut: Rust-Services, React-UI, Vektor-DB, PDF-Ingestion, SharePoint, Azure OpenAI. Architektur, Umsetzung und Betrieb aus einer Hand."
          badge="Skalierbare Plattform"
          href="https://www.regress.adesso.claims"
          steps={leadSteps}
          stack={leadStack}
          highlights={leadHighlights}
        />

        <IntroNote />

        <ImpactSection
          id="delivery"
          eyebrow="Strategic Delivery"
          title="Architektur-getriebene Delivery"
          description="Kompakte Übersicht der Kernbeiträge – jede Karte zeigt Problem, Lösung, Wirkung im Kern zusammengefasst."
          columns={3}
          items={strategicDelivery}
        />

        <ImpactSection
          id="innovation"
          eyebrow="Innovation & Ownership"
          title="Plattformdenken und AI-Governance"
          description="Ideen und Architekturen, die über Einzelprojekte hinaus wirken."
          items={innovationItems}
        />

        <ImpactSection
          id="stakeholder"
          eyebrow="Business & Stakeholder"
          title="Wirkung über Technologie hinaus"
          description="Beziehungsarbeit und strategische Platzierung der Plattform-Idee."
          items={businessItems}
        />

        <ImpactSection
          id="growth"
          eyebrow="Growth & Engineering"
          title="Skill-Pillars statt Textwüste"
          description="Fokusfelder 2025 mit klarem Nutzen für Delivery, Security und Performance."
          footer={<SkillPillar skills={skills} />}
          items={[]}
        />

        <Timeline
          id="engagement"
          eyebrow="Engagement & Sichtbarkeit"
          title="Event-Timeline & Präsenz"
          description="Aktivitäten, die Community, Kunden und Team verbinden."
          items={engagement}
        />

        <Roadmap
          id="vision"
          eyebrow="Vision 2026"
          title="Roadmap für den nächsten Senior-Schritt"
          description="Konkrete Milestones, um Wirkung und Ownership weiter auszubauen."
          steps={roadmapSteps}
        />
      </main>
    </div>
  );
}
