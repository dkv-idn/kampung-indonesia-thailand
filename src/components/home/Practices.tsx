import { ArrowRight } from "lucide-react";
import education from "@/assets/practice-education.jpg";
import community from "@/assets/practice-community.jpg";

const PRACTICES = [
  {
    title: "International Education",
    image: education,
    alt: "International students walking together through a university corridor",
    description:
      "Helping educational institutions build international partnerships, mobility programs, knowledge exchange, and institutional capacity.",
    topics: [
      "Internationalization Strategy",
      "Partnership Development",
      "Student & Faculty Mobility",
      "International Internships",
      "Benchmarking",
      "Institutional Development",
    ],
    action: "Explore International Education",
  },
  {
    title: "International Community Development",
    image: community,
    alt: "Community members and young facilitators meeting in a village hall",
    description:
      "Connecting institutions with communities and local development priorities through collaborative programs.",
    topics: [
      "Community Development",
      "University–Community Engagement",
      "Youth Development",
      "Service Learning",
      "Civil Society Development",
      "Capacity Building",
    ],
    action: "Explore Community Development",
  },
];

export function Practices() {
  return (
    <section id="what-we-do" className="section-y">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="label-kicker">What We Do</p>
          <h2 className="display-2 mt-4 text-balance">Two practices. One shared mission.</h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {PRACTICES.map((practice) => (
            <article key={practice.title} className="card-soft hover-zoom group overflow-hidden">
              <div className="media-frame aspect-[16/10] rounded-none">
                <img
                  src={practice.image}
                  alt={practice.alt}
                  width={1200}
                  height={912}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-7 md:p-9">
                <h3 className="display-3 text-balance">{practice.title}</h3>
                <p className="mt-4 leading-relaxed text-ink-soft">{practice.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {practice.topics.map((topic) => (
                    <li key={topic} className="chip text-[0.8125rem]">
                      {topic}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-primary"
                >
                  {practice.action}
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
