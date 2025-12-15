import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export type ImpactItem = {
  title: string;
  subtitle?: string;
  badge?: string;
  icon?: string;
  points?: string[];
  detail?: string;
};

interface ImpactSectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  columns?: 2 | 3;
  items: ImpactItem[];
  footer?: ReactNode;
}

export function ImpactSection({ id, eyebrow, title, description, columns = 2, items, footer }: ImpactSectionProps) {
  const columnClass = columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2';

  return (
    <section id={id} className="section-gradient angled-surface rounded-3xl border border-slate-100/70 p-8 shadow-sm">
      <div className="mb-6 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{title}</h2>
        <p className="max-w-3xl text-sm text-slate-600">{description}</p>
      </div>

      {items.length > 0 ? (
        <div className={`grid gap-4 ${columnClass}`}>
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              className="card-shadow relative overflow-hidden rounded-2xl border border-slate-100 bg-white/90 p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.05, duration: 0.4, ease: 'easeOut' }}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-70" aria-hidden />
              <div className="mb-3 flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  {item.icon ? <span className="text-2xl" aria-hidden>{item.icon}</span> : null}
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    {item.subtitle ? <p className="text-sm text-slate-600">{item.subtitle}</p> : null}
                  </div>
                </div>
                {item.badge ? (
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    {item.badge}
                  </span>
                ) : null}
              </div>
              {item.detail ? <p className="mb-2 text-sm text-slate-700">{item.detail}</p> : null}
              {item.points ? (
                <ul className="space-y-2 text-sm text-slate-700">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </motion.div>
          ))}
        </div>
      ) : null}

      {footer ? <div className="mt-6">{footer}</div> : null}
    </section>
  );
}
