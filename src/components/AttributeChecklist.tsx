import { motion } from 'framer-motion';

export type AttributeItem = {
  label: string;
  detail: string;
};

interface AttributeChecklistProps {
  items: AttributeItem[];
}

export function AttributeChecklist({ items }: AttributeChecklistProps) {
  return (
    <section
      id="arbeitsweise"
      className="section-gradient angled-surface rounded-3xl border border-slate-100/70 bg-white/90 p-8 shadow-sm"
    >
      <div className="mb-6 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Arbeitsweise & Eigenschaften</p>
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Alle Checkboxen aktiv – gelebte Haltung</h2>
        <p className="max-w-3xl text-sm text-slate-600">
          Selbstbeschreibung statt Stufen-Modell: Wie Entscheidungen getroffen, Teams geführt und Delivery abgesichert wird.
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {items.map((item, index) => (
          <motion.label
            key={item.label}
            className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.04, duration: 0.3, ease: 'easeOut' }}
          >
            <input
              type="checkbox"
              checked
              readOnly
              className="mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
            />
            <div>
              <p className="font-semibold text-slate-900">{item.label}</p>
              <p className="text-sm text-slate-600">{item.detail}</p>
            </div>
          </motion.label>
        ))}
      </div>
    </section>
  );
}
