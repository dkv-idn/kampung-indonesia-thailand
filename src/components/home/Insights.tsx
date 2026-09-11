import { ArrowUpRight } from "lucide-react";
import insight1 from "@/assets/insight-1.jpg";
import insight2 from "@/assets/insight-2.jpg";
import insight3 from "@/assets/insight-3.jpg";

/**
 * Placeholder editorial entries for design purposes only.
 * Replace with real published articles before launch.
 */
const ARTICLES = [
  {
    category: "Country Insight",
    title: "Why Thailand is the first Kampung Indonesia country platform",
    date: "Placeholder date",
    read: "5 min read",
    image: insight1,
    alt: "Field notes and maps on a wooden desk",
  },
  {
    category: "Perspective",
    title: "Designing mobility programmes that communities actually benefit from",
    date: "Placeholder date",
    read: "7 min read",
    image: insight2,
    alt: "Students collaborating in a digital skills workshop",
  },
  {
    category: "Field Story",
    title: "What local leadership looks like in a village-rooted platform",
    date: "Placeholder date",
    read: "4 min read",
    image: insight3,
    alt: "Aerial view of an Indonesian village surrounded by rice fields",
  },
];

export function Insights() {
  return (
    <section id="insights" className="section-y">
      <div className="shell">
        <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <div className="max-w-2xl">
            <p className="label-kicker">Insights</p>
            <h2 className="display-2 mt-4 text-balance">
              Ideas, stories, and lessons from the field.
            </h2>
          </div>
          <a href="#insights" className="btn-base btn-outline">
            View all insights
          </a>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {ARTICLES.map((article) => (
            <a
              key={article.title}
              href="#insights"
              className="hover-zoom group flex flex-col"
              data-placeholder-content="true"
            >
              <div className="media-frame aspect-[4/3]">
                <img
                  src={article.image}
                  alt={article.alt}
                  width={1000}
                  height={750}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-5 text-xs font-bold tracking-[0.14em] text-primary uppercase">
                {article.category}
              </p>
              <h3 className="mt-3 text-balance font-display text-xl leading-snug tracking-tight">
                {article.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                {article.date} · {article.read}
              </p>
              <ArrowUpRight
                className="mt-4 h-5 w-5 text-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden
              />
            </a>
          ))}
        </div>

        <p className="mt-10 text-xs text-muted-foreground">
          Article entries shown above are placeholders for design purposes and must be replaced with
          published content.
        </p>
      </div>
    </section>
  );
}
