import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  description?: string;
  eyebrow?: string;
  children: ReactNode;
}

const variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export function Section({ id, title, description, eyebrow, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      className="section-gradient angled-surface rounded-3xl border border-slate-100/70 p-8 shadow-sm"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow ?? 'Abschnitt'}</p>
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{title}</h2>
          {description ? <p className="max-w-3xl text-sm text-slate-600">{description}</p> : null}
        </div>
      </div>
      <div className="grid gap-4 md:gap-6">{children}</div>
    </motion.section>
  );
}
