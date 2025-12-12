import { ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
  color?: 'primary' | 'secondary' | 'neutral';
};

const colorMap: Record<Required<BadgeProps>['color'], string> = {
  primary: 'bg-primary/10 text-primary border-primary/30',
  secondary: 'bg-secondary/10 text-secondary border-secondary/30',
  neutral: 'bg-white text-slate-700 border-slate-200'
};

export function Badge({ children, color = 'neutral' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${colorMap[color]}`}
    >
      {children}
    </span>
  );
}
