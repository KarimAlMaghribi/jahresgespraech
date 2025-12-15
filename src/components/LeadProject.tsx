import { motion, useReducedMotion } from 'framer-motion';

export type Step = {
  title: string;
  detail: string;
  emphasis?: string;
};

export type StackItem = {
  label: string;
  note?: string;
};

interface LeadProjectProps {
  title: string;
  subtitle: string;
  badge: string;
  href?: string;
  steps: Step[];
  stack: StackItem[];
  highlights: { label: string; value: string }[];
}

export function LeadProject({ title, subtitle, badge, href, steps, stack, highlights }: LeadProjectProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="lead-project"
      className="relative overflow-hidden rounded-3xl border border-slate-100/70 bg-slate-900 text-white shadow-lg"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-slate-900 to-secondary/30" aria-hidden />
      <div className="relative grid gap-8 p-8 lg:grid-cols-[1.2fr,0.8fr] lg:gap-10 lg:p-10">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              {badge}
            </span>
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm font-semibold text-white underline decoration-primary decoration-2 underline-offset-4 transition hover:text-primary"
              >
                Live-Demo öffnen ↗
              </a>
            ) : null}
          </div>
          <h2 className="text-3xl font-bold leading-tight lg:text-4xl">{title}</h2>
          <p className="text-lg text-slate-100">{subtitle}</p>

          <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-slate-100 lg:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="space-y-1 rounded-xl bg-white/5 p-3">
                <p className="text-xs uppercase tracking-[0.2em] text-primary/80">{item.label}</p>
                <p className="text-lg font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Problem → Lösung → Wirkung</p>
            <div className="grid gap-4 md:grid-cols-3">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: prefersReducedMotion ? 0 : index * 0.08, duration: 0.4, ease: 'easeOut' }}
                  className="relative rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="absolute -left-3 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-slate-900">
                    {index + 1}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="text-sm text-slate-100">{step.detail}</p>
                  {step.emphasis ? <p className="mt-2 text-xs font-semibold uppercase text-primary">{step.emphasis}</p> : null}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Architektur & Stack</p>
          <div className="flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item.label}
                className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white"
              >
                {item.label}
              </span>
            ))}
          </div>
          <div className="space-y-2 text-sm text-slate-100">
            <p className="text-base font-semibold text-white">Pipeline & Betrieb</p>
            <ul className="space-y-2 text-sm text-slate-100">
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                Modular, mandantenfähig und pipeline-basiert – vorbereitet für neue Produkte.
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                Betrieb inkl. Monitoring, Prompt-Governance und Rollback-Strategien verantwortet.
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                Basis für Plattform- und Produktdenken: schnelle Integration neuer Use Cases.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
