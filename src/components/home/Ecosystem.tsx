import {
  Building2,
  Cpu,
  Globe2,
  HeartHandshake,
  Landmark,
  Library,
  School,
} from "lucide-react";

const GROUPS = [
  { label: "Universities & Schools", icon: School },
  { label: "Communities & Civil Society", icon: HeartHandshake },
  { label: "Government & Diplomatic Institutions", icon: Landmark },
  { label: "Research & Knowledge Institutions", icon: Library },
  { label: "Technology & Industry", icon: Cpu },
  { label: "Regional & International Networks", icon: Globe2 },
  { label: "Development Partners", icon: Building2 },
];

export function Ecosystem() {
  return (
    <section className="section-y bg-surface">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="label-kicker">Who We Work With</p>
          <h2 className="display-2 mt-4 text-balance">Built through complementary capabilities.</h2>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map(({ label, icon: Icon }) => (
            <li
              key={label}
              className="card-soft flex min-w-0 items-center gap-4 bg-card px-6 py-5"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="min-w-0 text-[0.9375rem] font-medium">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
