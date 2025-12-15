import { motion } from 'framer-motion';

export type TimelineItem = {
  title: string;
  detail: string;
  meta: string;
};

interface TimelineProps {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: TimelineItem[];
}

export function Timeline({ id, eyebrow, title, description, items }: TimelineProps) {
  return (
    <section id={id} className="section-gradient angled-surface rounded-3xl border border-slate-100/70 p-8 shadow-sm">
      <div className="mb-6 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{title}</h2>
        <p className="max-w-3xl text-sm text-slate-600">{description}</p>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-secondary to-primary" aria-hidden />
        <div className="space-y-4">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              className="relative ml-10 rounded-2xl border border-slate-100 bg-white/90 p-5 shadow-sm"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.05, duration: 0.35, ease: 'easeOut' }}
            >
              <div className="absolute -left-8 top-5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                {index + 1}
              </div>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-700">{item.detail}</p>
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  {item.meta}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
