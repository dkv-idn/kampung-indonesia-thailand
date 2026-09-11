import { ArrowRight } from "lucide-react";
import thailand from "@/assets/country-thailand.jpg";

export function CountryPlatforms() {
  return (
    <section id="countries" className="section-y bg-surface-warm">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <p className="label-kicker">Global Platform</p>
            <h2 className="display-2 mt-4 text-balance">
              One platform. Multiple countries. Local contexts.
            </h2>
          </div>
          <p className="leading-relaxed text-ink-soft">
            Country platforms are established only where credible local leadership, institutional
            networks, meaningful community engagement, and sufficient capacity exist.
          </p>
        </div>

        <article className="card-soft hover-zoom group mt-12 grid overflow-hidden bg-card lg:grid-cols-2">
          <div className="media-frame aspect-[16/10] rounded-none lg:aspect-auto lg:h-full">
            <img
              src={thailand}
              alt="Bangkok skyline with temple rooftops at golden hour"
              width={1408}
              height={912}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex rounded-full bg-primary px-3 py-1 text-[0.6875rem] font-bold tracking-wide text-primary-foreground uppercase">
                First Pilot Country
              </span>
              <span className="text-sm font-medium text-muted-foreground">Thailand · 2026</span>
            </div>
            <h3 className="display-3 mt-5">Kampung Indonesia Thailand</h3>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Thailand is the first country platform used to develop, test, and refine Kampung
              Indonesia&rsquo;s international education and community development model.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#thailand" className="btn-base btn-primary">
                Explore Thailand
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </a>
              <a href="#countries" className="btn-base btn-outline">
                Learn About the Country Model
              </a>
            </div>
          </div>
        </article>

        <p className="mt-8 rounded-2xl border border-dashed border-border-strong px-6 py-5 text-center text-sm text-muted-foreground">
          Future country platforms will be developed where strong local foundations exist.
        </p>
      </div>
    </section>
  );
}
