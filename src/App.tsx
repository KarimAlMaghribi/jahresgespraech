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

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-slate-900">
      <Header />

      <main className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 md:gap-12 md:px-8 lg:py-16">
        <section className="section-gradient rounded-3xl border border-slate-100 p-8 text-slate-900 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl space-y-4">
              <Badge color="primary">Jahresgespräch 2025</Badge>
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">Gemeinsam erfolgreich – Rückblick und nächste Schritte</h2>
              <p className="text-lg text-slate-700">
                Die folgenden Abschnitte fassen unsere wichtigsten Projekte, geschäftlichen Highlights und die geplanten Prioritäten
                für das kommende Jahr zusammen. Nutze die Navigation, um direkt zu den Themen zu springen.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary" />Wachstum</span>
                <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-secondary" />Teamwork</span>
                <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-slate-400" />Transparenz</span>
              </div>
            </div>
            <PrintButton />
          </div>
        </section>

        <Section
          id="projects"
          title="Projekt-Highlights"
          description="Was wir geliefert haben, wie wir Risiken reduziert und Kundennutzen gesteigert haben."
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Card title="Digitale Services" subtitle="Neue Self-Service-Funktionen" badge="Live" badgeColor="primary">
              <ul className="space-y-2 text-slate-700">
                {listItem('Launch des Kundenportals mit 30% weniger Support-Anfragen in den ersten 8 Wochen.')}
                {listItem('Barrierearme UI-Komponenten auf Basis von Tailwind und Design Tokens eingeführt.')}
                {listItem('Automatisierte Release-Pipeline verkürzt die Time-to-Market um 2 Tage je Deployment.')}
              </ul>
            </Card>
            <Card title="Plattform-Stabilität" subtitle="Verlässlichkeit und Sicherheit" badge="Stabil" badgeColor="secondary">
              <ul className="space-y-2 text-slate-700">
                {listItem('99,95% Verfügbarkeit trotz 20% mehr Traffic während saisonaler Peaks.')}
                {listItem('Observability-Stack konsolidiert; MTTR von 45 auf 22 Minuten reduziert.')}
                {listItem('Security-Gates in CI/CD integriert, inklusive SBOM-Prüfungen und Secrets-Scanning.')}
              </ul>
            </Card>
          </div>
        </Section>

        <Section
          id="business"
          title="Business-Impact"
          description="Kennzahlen, die wir gemeinsam bewegt haben und der Nutzen für unsere Kund:innen."
        >
          <div className="grid gap-4 md:grid-cols-3">
            <Card title="Umsatztreiber" badge="+14%" badgeColor="primary">
              <p>
                Durch gezielte Bundles und Promotions erzielten wir einen zweistelligen Mehrumsatz im B2B-Segment. Upsell-Strecken
                wurden datenbasiert optimiert.
              </p>
            </Card>
            <Card title="Kosten & Effizienz" badge="-18%" badgeColor="secondary">
              <p>
                Infrastrukturkosten pro Kunde sanken dank Rightsizing und Container-Autopilot deutlich. Supportkosten reduzierten sich
                durch bessere Self-Service-Quoten.
              </p>
            </Card>
            <Card title="Kundenzufriedenheit" badge="+9 NPS" badgeColor="primary">
              <p>
                Verbesserte Reaktionszeiten, klarere Statusseiten und proaktive Kommunikation sorgten für spürbar höhere
                Zufriedenheit und Wiederkaufsraten.
              </p>
            </Card>
          </div>
        </Section>

        <Section
          id="growth"
          title="Wachstum & Lernen"
          description="Wie wir Fähigkeiten ausgebaut und Wissen geteilt haben."
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Card title="Team-Enablement" badge="Mentoring" badgeColor="secondary">
              <ul className="space-y-2">
                {listItem('Pairing-Programm mit wöchentlichen Lernzielen etabliert (Frontend/Backend).')}
                {listItem('Guild-Meetups zu Accessibility und Observability mit über 40 Teilnehmenden.')}
                {listItem('Dokumentation konsolidiert – Playbooks für Oncall, Deployments und Rollbacks aktualisiert.')}
              </ul>
            </Card>
            <Card title="Persönliche Entwicklung" badge="Focus" badgeColor="primary">
              <ul className="space-y-2">
                {listItem('Vertiefung in Architektur-Reviews und Moderation von Postmortems.')}
                {listItem('Zertifizierungskurs in Cloud-Security abgeschlossen und Inhalte ins Team getragen.')}
                {listItem('Regelmäßiges Feedback eingeholt und in Roadmap-Planungen eingearbeitet.')}
              </ul>
            </Card>
          </div>
        </Section>

        <Section
          id="engagement"
          title="Team & Zusammenarbeit"
          description="Was unsere Zusammenarbeit stark macht und wo wir nachgeschärft haben."
        >
          <div className="grid gap-4 md:grid-cols-3">
            <Card title="Transparenz" badge="Rituale" badgeColor="secondary">
              <p>Wöchentliche Demos und Decision-Logs sorgen dafür, dass alle Stakeholder mitgenommen werden.</p>
            </Card>
            <Card title="Gesund arbeiten" badge="Balance" badgeColor="primary">
              <p>Oncall-Rotation entzerrt, Fokuszeiten geblockt und Meeting-Slots gestrafft, um Burnout vorzubeugen.</p>
            </Card>
            <Card title="Kundennähe" badge="Feedback" badgeColor="secondary">
              <p>Regelmäßige Interviews und Journey-Tests bringen Customer Voice direkt in die Priorisierung.</p>
            </Card>
          </div>
        </Section>

        <Section
          id="outlook"
          title="Ausblick 2026"
          description="Worauf wir uns fokussieren, um Wirkung und Geschwindigkeit weiter zu steigern."
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Card title="Lieferziele" badge="Next" badgeColor="primary">
              <ul className="space-y-2">
                {listItem('Feature-Toggles breit einsetzen, um Releases inkrementell und risikoarm auszurollen.')}
                {listItem('Experiment-Framework für A/B-Tests aufbauen und KPIs früh validieren.')}
                {listItem('Service-Katalog mit SLOs veröffentlichen, um Ownership und Zuverlässigkeit zu stärken.')}
              </ul>
            </Card>
            <Card title="Team-Health" badge="People" badgeColor="secondary">
              <ul className="space-y-2">
                {listItem('Rotierende Moderation für Retros einführen und Action Items konsequent tracken.')}
                {listItem('Weiterbildungspfade für Full-Stack- und Plattform-Kompetenzen klarer beschreiben.')}
                {listItem('Gemeinsame Offsites zur Strategie- und Roadmap-Arbeit mit Product & Design planen.')}
              </ul>
            </Card>
          </div>
        </Section>
      </main>
    </div>
  );
}
