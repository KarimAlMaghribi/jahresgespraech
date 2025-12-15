import { motion, useReducedMotion } from 'framer-motion';

export type RegressPhase = {
  phase: string;
  title: string;
  detail: string;
  outcome: string;
  meta: string;
};

export type RegressHighlight = {
  label: string;
  value: string;
};

interface RegressStoryProps {
  phases: RegressPhase[];
  highlights: RegressHighlight[];
  decision: string;
  emphasis: string;
}

export function RegressStory({ phases, highlights, decision, emphasis }: RegressStoryProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="lead-project"
      className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 text-white shadow-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-slate-900 to-secondary/30" aria-hidden />
      <div className="relative grid gap-8 p-8 lg:grid-cols-[1.2fr,0.9fr] lg:gap-10 lg:p-10">
        <div className="space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              Regressystem
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              MVP in Wochen → Produktion in 4 Monaten
            </span>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Storyline</p>
            <h2 className="text-3xl font-bold leading-tight lg:text-4xl">
              Leitprojekt und Referenz für Entscheidungsstärke
            </h2>
            <p className="text-lg text-slate-100">
              Projekt sollte gestoppt werden. Gemeinsam mit Stefan (PO) wurde in Tagen entschieden, ein MVP zu liefern, das Allianz
              schnell überzeugt. Pipeline, UI und Betrieb wurden parallel aufgebaut – mit klarer Dokumentation und Übergabe.
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-100 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Entscheidung</p>
              <p className="font-semibold text-white">{decision}</p>
              <p className="text-slate-200">{emphasis}</p>
            </div>
          </div>

          <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-slate-100 lg:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="space-y-1 rounded-xl bg-white/5 p-3">
                <p className="text-xs uppercase tracking-[0.2em] text-primary/80">{item.label}</p>
                <p className="text-lg font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Phasen & Wirkung</p>
          <div className="relative">
            <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-primary via-secondary to-primary" aria-hidden />
            <div className="space-y-4">
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.title}
                  initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: prefersReducedMotion ? 0 : index * 0.08, duration: 0.35, ease: 'easeOut' }}
                  className="relative ml-8 rounded-2xl border border-white/10 bg-white/10 p-4"
                >
                  <div className="absolute -left-4 top-5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-slate-900">
                    {index + 1}
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                      {phase.phase}
                    </span>
                    <span className="rounded-full bg-primary/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
                      {phase.meta}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white">{phase.title}</h3>
                  <p className="text-sm text-slate-100">{phase.detail}</p>
                  <p className="mt-2 text-xs font-semibold uppercase text-primary">{phase.outcome}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
