import { motion } from 'framer-motion';

export type RoadmapStep = {
  label: string;
  items: string[];
};

interface RoadmapProps {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  steps: RoadmapStep[];
}

export function Roadmap({ id, eyebrow, title, description, steps }: RoadmapProps) {
  return (
    <section id={id} className="section-gradient angled-surface rounded-3xl border border-slate-100/70 p-8 shadow-sm">
      <div className="mb-6 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{title}</h2>
        <p className="max-w-3xl text-sm text-slate-600">{description}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={step.label}
            className="card-shadow rounded-2xl border border-slate-100 bg-white/90 p-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.05, duration: 0.4, ease: 'easeOut' }}
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                {step.label}
              </span>
              <span className="text-sm font-semibold text-slate-500">2026</span>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              {step.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
