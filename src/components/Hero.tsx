import { motion, useReducedMotion } from 'framer-motion';

export type ImpactStat = {
  label: string;
  value: string;
  detail?: string;
};

interface HeroProps {
  name: string;
  title: string;
  statement: string;
  stats: ImpactStat[];
}

export function Hero({ name, title, statement, stats }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: prefersReducedMotion ? 0 : i * 0.08, duration: 0.4, ease: 'easeOut' }
    })
  };

  return (
    <section
      id="hero"
      className="angled-surface relative overflow-hidden rounded-3xl border border-slate-100/70 bg-white/80 p-8 shadow-md"
    >
      <div className="absolute -left-36 top-0 h-64 w-64 rotate-6 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="absolute -right-20 bottom-0 h-72 w-72 -rotate-6 rounded-full bg-secondary/10 blur-3xl" aria-hidden />

      <motion.div
        className="relative grid gap-6 md:grid-cols-[1.7fr,1.1fr] md:items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Jahresgespräch 2025</p>
          <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">{name}</h1>
          <p className="text-lg font-semibold text-slate-800">{title}</p>
          <p className="text-base leading-relaxed text-slate-700">{statement}</p>

          <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-slate-600">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">Architecture</span>
            <span className="rounded-full bg-secondary/10 px-3 py-1 text-secondary">Delivery</span>
            <span className="rounded-full bg-slate-900 px-3 py-1 text-white">Platform Thinking</span>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#lead-project"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm transition hover:border-primary hover:bg-primary/5"
            >
              Leitprojekt ansehen
              <span aria-hidden>↘</span>
            </a>
            <a
              href="#vision"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Roadmap 2026
              <span aria-hidden>🗺️</span>
            </a>
          </div>
        </div>

        <div className="grid gap-3 rounded-2xl border border-slate-100 bg-white/90 p-4 shadow-sm">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="rounded-xl border border-slate-100 bg-gradient-to-r from-slate-50 to-white px-4 py-3"
              custom={index}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
              <p className="text-xl font-bold text-slate-900">{stat.value}</p>
              {stat.detail ? <p className="text-sm text-slate-700">{stat.detail}</p> : null}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
