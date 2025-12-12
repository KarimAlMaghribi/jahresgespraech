import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function Section({ id, title, description, children }: SectionProps) {
  return (
    <section id={id} className="section-gradient rounded-3xl border border-slate-100 p-8 shadow-sm">
      <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{id}</p>
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{title}</h2>
          {description ? <p className="mt-2 max-w-3xl text-sm text-slate-600">{description}</p> : null}
        </div>
      </div>
      <div className="grid gap-4 md:gap-6">{children}</div>
    </section>
  );
}
