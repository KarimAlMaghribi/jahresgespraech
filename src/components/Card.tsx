import { ReactNode } from 'react';
import { Badge } from './Badge';

type CardProps = {
  title: string;
  subtitle?: string;
  badge?: string;
  badgeColor?: 'primary' | 'secondary' | 'neutral';
  children: ReactNode;
};

export function Card({ title, subtitle, badge, badgeColor = 'neutral', children }: CardProps) {
  return (
    <div className="card-shadow rounded-2xl border border-slate-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          {subtitle ? <p className="mt-1 text-sm text-slate-600">{subtitle}</p> : null}
        </div>
        {badge ? <Badge color={badgeColor}>{badge}</Badge> : null}
      </div>
      <div className="space-y-2 text-sm text-slate-700">{children}</div>
    </div>
  );
}
