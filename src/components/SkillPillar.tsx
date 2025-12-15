export type Skill = {
  title: string;
  icon: string;
  items: string[];
};

interface SkillPillarProps {
  skills: Skill[];
}

export function SkillPillar({ skills }: SkillPillarProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {skills.map((skill) => (
        <div key={skill.title} className="card-shadow rounded-2xl border border-slate-100 bg-white/90 p-5">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-2xl" aria-hidden>
              {skill.icon}
            </span>
            <h3 className="text-lg font-semibold text-slate-900">{skill.title}</h3>
          </div>
          <ul className="space-y-2 text-sm text-slate-700">
            {skill.items.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
