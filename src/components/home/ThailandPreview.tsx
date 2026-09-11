import { ArrowUpRight } from "lucide-react";
import thEducation from "@/assets/th-education.jpg";
import thPartnerships from "@/assets/th-partnerships.jpg";
import thCommunity from "@/assets/th-community.jpg";
import thHalal from "@/assets/th-halal.jpg";

const CARDS = [
  {
    label: "Education",
    image: thEducation,
    alt: "Teachers and students working together in a Thai classroom",
    text: "Working with schools and universities on mobility, exchange, and international programme design.",
  },
  {
    label: "Partnerships",
    image: thPartnerships,
    alt: "Two institutional representatives meeting in an office",
    text: "Building institutional agreements between Indonesian and Thai organisations.",
  },
  {
    label: "Community Development",
    image: thCommunity,
    alt: "Volunteers organising supplies in a community centre",
    text: "Collaborating with local communities on development priorities they define themselves.",
  },
  {
    label: "Halal & Muslim Community Engagement",
    image: thHalal,
    alt: "Halal food market stalls with vendors and customers",
    text: "Connecting Muslim community networks, halal ecosystems, and cross-border knowledge.",
  },
];

export function ThailandPreview() {
  return (
    <section id="thailand" className="section-y">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="label-kicker">Kampung Indonesia Thailand</p>
          <h2 className="display-2 mt-4 text-balance">Our first platform in action.</h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card) => (
            <a
              key={card.label}
              href="#thailand"
              className="card-soft hover-zoom group flex flex-col overflow-hidden"
            >
              <div className="media-frame aspect-[4/5] rounded-none">
                <img
                  src={card.image}
                  alt={card.alt}
                  width={900}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-balance font-display text-lg tracking-tight">{card.label}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {card.text}
                </p>
                <ArrowUpRight
                  className="mt-5 h-5 w-5 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
