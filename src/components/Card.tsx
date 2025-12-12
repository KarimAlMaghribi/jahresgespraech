import { ReactNode } from 'react';
import { Badge } from './Badge';

type CardProps = {
  title: string;
  subtitle?: string;
  badge?: string;
  badgeColor?: 'primary' | 'secondary' | 'neutral';
  icon?: string;
  children: ReactNode;
};

export function Card({ title, subtitle, badge, badgeColor = 'neutral', icon, children }: CardProps) {
  return (
    <div className="card-shadow relative overflow-hidden rounded-2xl border border-slate-100 bg-white/90 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-80" aria-hidden />
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          {icon ? <span className="text-2xl" aria-hidden>{icon}</span> : null}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            {subtitle ? <p className="mt-1 text-sm text-slate-600">{subtitle}</p> : null}
          </div>
        </div>
        {badge ? <Badge color={badgeColor}>{badge}</Badge> : null}
      </div>
      <div className="space-y-3 text-sm text-slate-700">{children}</div>
    </div>
  );
}
