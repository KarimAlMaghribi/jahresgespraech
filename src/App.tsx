import { motion } from 'framer-motion';
import { Badge } from './components/Badge';
import { Card } from './components/Card';
import { Header } from './components/Header';
import { PrintButton } from './components/PrintButton';
import { Section } from './components/Section';

const listItem = (text: string) => (
  <li className="flex items-start gap-2">
    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
    <span>{text}</span>
  </li>
);

const projectHighlights = [
  {
    title: 'AFM API 2.0 technisch vorangetrieben',
    subtitle: 'Stabilität, Sicherheit und Klarheit in der Integration',
    icon: '✅',
    badge: 'Delivery',
    badgeColor: 'primary' as const,
    items: [
      'Neue API-Governance (Versionierung, Breaking-Change-Gates) etabliert und dokumentiert.',
      'Performance durch Caching-Strategie und schlanke Payloads messbar verbessert.',
      'Stakeholder-Sessions geführt, um Verantwortlichkeiten und Roadmap transparent zu machen.'
    ]
  },
  {
    title: 'Regressystem neu gebaut',
    subtitle: 'Rust + React + OpenAI + Vektor-DB + SharePoint/PDF',
    icon: '🛠️',
    badge: 'Architecture',
    badgeColor: 'secondary' as const,
    items: [
      'End-to-end Lösung konzipiert und umgesetzt – von Daten-Ingestion bis UI.',
      'Rust-Services für Reliability & Speed, Vektor-DB für schnelle Ähnlichkeitssuche.',
      'Governance für AI-Einsatz (Prompt-Templates, Rollback-Strategien, Logging) definiert.'
    ]
  },
  {
    title: 'Decision Engine mit RAG-Architektur',
    subtitle: 'Kognitive Suche auf Basis vektorisierter Wissensquellen',
    icon: '🧠',
    badge: 'Innovation',
    badgeColor: 'primary' as const,
    items: [
      'Wissensquellen harmonisiert und vektorisiert, inkl. Relevanz-Scoring.',
      'Guardrails & Evaluations implementiert, um Antwortqualität zu sichern.',
      'Tech-Demos vorbereitet, um Business-Mehrwert sichtbar zu machen.'
    ]
  },
  {
    title: 'Controlling Tool betreut & neu ausgerichtet',
    subtitle: 'Neue Architektur für Skalierung und Wartbarkeit',
    icon: '💼',
    badge: 'Reliability',
    badgeColor: 'secondary' as const,
    items: [
      'Architektur-Review durchgeführt, kritische Pfade gehärtet und dokumentiert.',
      'Automatisierte Checks und Deployments ergänzt, um Run-Kosten zu senken.',
      'Regelmäßige Syncs mit Controlling-Team, um Feature-Prioritäten zu alignen.'
    ]
  }
];

const stakeholderMoves = [
  {
    title: 'Generali: Tool-Vorstellung initiiert',
    detail: 'Aktiv auf den Kunden zugegangen, Mehrwert-Demo vorbereitet und Folgeworkshops platziert.',
    impact: 'Impact',
    icon: '🤝'
  },
  {
    title: 'Plattformökonomie-Gespräche',
    detail: 'Austausch mit Mohamad Amara & Michael Gutbier über skalierbare Plattform-Ideen und Monetarisierung.',
    impact: 'Strategie',
    icon: '💡'
  }
];

const techFocus = [
  {
    title: 'DevOps & Containerisierung',
    icon: '🔧',
    items: ['Docker Swarm, Portainer & Secrets aufgebaut', 'CI/CD-Stages mit Security- und Drift-Checks ergänzt', 'Observability & Dashboards für Services etabliert']
  },
  {
    title: 'Cyber Security',
    icon: '🔐',
    items: ['OAuth2-Flows, Zero-Trust-Prinzipien und Token-Handling vertieft', 'Security-Gates & Policy-as-Code evaluiert', 'Praktische Playbooks für sichere Integration erstellt']
  },
  {
    title: 'Rust',
    icon: '🦀',
    items: ['Microservice-Schnittstellen und Error-Handling strukturiert', 'Performance-Tuning mit async & tracing', 'Team-Enablement durch Pairing & Codebeispiele']
  }
];

const engagement = [
  {
    title: 'Vorlesung Universität Leipzig',
    detail: 'Wissensweitergabe zu moderner Softwarearchitektur und AI-gestützter Entwicklung.',
    badge: 'Wissensweitergabe',
    icon: '📚'
  },
  {
    title: 'Codebuzz Leipzig mitorganisiert',
    detail: 'Community-Repräsentanz für adesso, Austausch zwischen Engineering-Teams gestärkt.',
    badge: 'Community',
    icon: '🧑‍🤝‍🧑'
  },
  {
    title: 'Hohe Verlässlichkeit',
    detail: 'Volle Auslastung, kaum Krankheit, Ø > 40h/Woche – klare Priorisierung und Präsenz.',
    badge: 'Delivery-Power',
    icon: '💪'
  }
];

const outlook = [
  'Architekturverantwortung weiter ausbauen und Entscheidungswege beschleunigen.',
  'Plattform-Idee konkretisieren und mit Business-Ownership verankern.',
  'Sichtbarkeit von Tech-Beiträgen erhöhen (Demos, Lightning Talks, Playbooks).',
  'Community & Lehre fortführen (Codebuzz, Universität Leipzig).',
  'Gezielte Weiterbildung in Security & Plattformarchitektur einplanen.'
];

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-slate-900">
      <Header />

      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:gap-12 md:px-8 lg:py-16">
        <motion.section
          id="intro"
          className="angled-surface relative overflow-hidden rounded-3xl border border-slate-100/70 bg-white/70 p-8 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="absolute -left-40 top-0 h-64 w-64 rotate-6 rounded-full bg-primary/5 blur-3xl" aria-hidden />
          <div className="absolute -right-24 bottom-0 h-64 w-64 -rotate-6 rounded-full bg-secondary/5 blur-3xl" aria-hidden />
          <div className="relative grid gap-6 md:grid-cols-[2fr,1fr] md:items-start">
            <div className="space-y-4">
              <Badge color="primary">Jahresrückblick 2025 – Karim Rakia</Badge>
              <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                Fokus auf Delivery, Architektur und Wirkung
              </h2>
              <p className="text-lg leading-relaxed text-slate-700">
                2025 war geprägt von tiefem technischen Ownership, klaren Entscheidungen und hohem Engagement. Die Seite zeigt,
                wie ich Projekte vorangetrieben, Stakeholder überzeugt und unsere technologische Basis gestärkt habe – bereit,
                Verantwortung weiter zu skalieren.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-slate-700">
                <Badge color="secondary">Delivery</Badge>
                <Badge color="neutral">Architektur</Badge>
                <Badge color="neutral">Wirkung & Ownership</Badge>
              </div>
              <div className="flex flex-wrap gap-3">
                <PrintButton />
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white px-4 py-2 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/5"
                >
                  Zu den Projekten
                  <span aria-hidden>↘</span>
                </a>
              </div>
            </div>
            <div className="grid gap-3 rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-sm">
              <div className="flex items-center justify-between rounded-xl bg-primary/5 px-4 py-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary">Delivery & Architektur</p>
                  <p className="text-sm text-slate-700">AFM API 2.0, Decision Engine, Regressystem</p>
                </div>
                <span className="text-2xl" aria-hidden>
                  🚀
                </span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-secondary/5 px-4 py-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-secondary">Stakeholder</p>
                  <p className="text-sm text-slate-700">Generali, Plattformökonomie-Austausch</p>
                </div>
                <span className="text-2xl" aria-hidden>
                  🤝
                </span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Engagement</p>
                  <p className="text-sm text-slate-700">Vorlesung, Codebuzz, volle Auslastung</p>
                </div>
                <span className="text-2xl" aria-hidden>
                  🌟
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        <Section
          id="projects"
          eyebrow="Beiträge & Projekte"
          title="Architektur-getriebene Delivery"
          description="Highlights, die Technik, Strategie und Wirkung zusammenbringen."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {projectHighlights.map((project) => (
              <Card
                key={project.title}
                title={project.title}
                subtitle={project.subtitle}
                badge={project.badge}
                badgeColor={project.badgeColor}
                icon={project.icon}
              >
                <ul className="space-y-2 text-slate-700">{project.items.map((item) => listItem(item))}</ul>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="stakeholder"
          eyebrow="Business & Stakeholder"
          title="Wirkung über Technologie hinaus"
          description="Initiativen, die Türen öffnen und Vertrauen aufbauen."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {stakeholderMoves.map((move) => (
              <div
                key={move.title}
                className="card-shadow relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary to-secondary" aria-hidden />
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl" aria-hidden>
                        {move.icon}
                      </span>
                      <Badge color="primary">{move.impact}</Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{move.title}</h3>
                    <p className="text-sm text-slate-700">{move.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="tech"
          eyebrow="Technologische Weiterentwicklung"
          title="Tiefe, Fokus und Lernkurve"
          description="Schwerpunkte 2025 – mit Blick auf Skalierbarkeit, Sicherheit und Geschwindigkeit."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {techFocus.map((topic) => (
              <Card key={topic.title} title={topic.title} icon={topic.icon} badge="Growth" badgeColor="primary">
                <ul className="space-y-2">{topic.items.map((item) => listItem(item))}</ul>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="engagement"
          eyebrow="Engagement & Außenwirkung"
          title="Leadership sichtbar machen"
          description="Initiativen, die Team, Community und Kund:innen stärken."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {engagement.map((item) => (
              <Card key={item.title} title={item.title} subtitle={item.detail} badge={item.badge} badgeColor="secondary" icon={item.icon}>
                <p>
                  <span className="font-semibold text-primary">Wirkung:</span> Verantwortung gezeigt, Austausch gefördert und
                  Präsenz bewiesen.
                </p>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="outlook"
          eyebrow="Ausblick 2026"
          title="Nächste Schritte und Ambitionen"
          description="Vision, um die Senior-Rolle weiter zu untermauern."
        >
          <div className="card-shadow rounded-2xl border border-slate-100 bg-white/90 p-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-2xl" aria-hidden>
                🔭
              </span>
              <h3 className="text-xl font-semibold text-slate-900">Fokussierte Roadmap</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">{outlook.map((item) => listItem(item))}</ul>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-500">
              Print-optimiert: Mit einem Klick auf „Als PDF speichern“ direkt exportierbar.
            </p>
          </div>
        </Section>
      </main>
    </div>
  );
}
