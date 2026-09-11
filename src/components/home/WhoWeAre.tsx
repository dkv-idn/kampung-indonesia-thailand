import {
  BookOpen,
  Building2,
  GraduationCap,
  HeartHandshake,
  Plane,
  Users,
} from "lucide-react";

const KEYWORDS = [
  { label: "Education", icon: GraduationCap },
  { label: "Community Development", icon: Users },
  { label: "Institutional Partnerships", icon: Building2 },
  { label: "International Mobility", icon: Plane },
  { label: "Knowledge Exchange", icon: BookOpen },
  { label: "Social Impact", icon: HeartHandshake },
];

export function WhoWeAre() {
  return (
    <section id="about" className="section-y border-t border-border">
      <div className="shell grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <div>
          <p className="label-kicker">Who We Are</p>
          <h2 className="display-2 mt-4 text-balance">
            A global platform built through local relationships.
          </h2>
          <div className="rule-red mt-7" />
        </div>
        <div>
          <p className="lede">
            Kampung Indonesia connects Indonesian institutions, communities, knowledge, and people
            with partners internationally. We work at the intersection of international education
            and community development — building relationships that are grounded in local realities
            before they are scaled internationally.
          </p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Each country platform is developed with local leadership and institutional networks, so
            collaboration is credible on both sides: internationally connected, locally rooted.
          </p>

          <ul className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {KEYWORDS.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="flex items-center gap-3 border-b border-border pb-4 text-[0.9375rem] font-medium"
              >
                <Icon className="h-[1.15rem] w-[1.15rem] shrink-0 text-primary" aria-hidden />
                <span className="min-w-0">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
