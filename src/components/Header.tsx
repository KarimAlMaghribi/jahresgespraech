const navItems = [
  { id: 'hero', label: 'Hero' },
  { id: 'lead-project', label: 'Regressystem' },
  { id: 'gesamt-timeline', label: 'Timeline' },
  { id: 'strategic-delivery', label: 'Strategic Delivery' },
  { id: 'controlling', label: 'Controlling Tool' },
  { id: 'genai', label: 'GenAI & Plattform' },
  { id: 'arbeitsweise', label: 'Arbeitsweise' }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Jahresrückblick 2025</p>
          <h1 className="text-lg font-bold text-slate-900">Karim Rakia · Architektur & Delivery</h1>
        </div>
        <nav className="hidden items-center gap-3 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-primary/10 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
