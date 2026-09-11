import { ArrowRight, MapPin } from "lucide-react";
import heroMain from "@/assets/hero-main.jpg";
import heroPortrait from "@/assets/hero-portrait.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-primary-soft blur-3xl"
      />
      <div className="shell relative grid items-center gap-12 pt-12 pb-16 md:pt-16 md:pb-24 lg:grid-cols-[minmax(0,45%)_minmax(0,55%)] lg:gap-16 lg:pt-20 lg:pb-28">
        <div className="max-w-xl">
          <p className="eyebrow">International Education &amp; Community Development Platform</p>
          <h1 className="display-1 mt-5 text-balance">
            Connecting Indonesia with communities, institutions, and opportunities across the world.
          </h1>
          <p className="lede mt-6">
            Kampung Indonesia builds locally rooted country platforms that connect education,
            communities, knowledge, and international partnerships.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#what-we-do" className="btn-base btn-primary">
              Explore Our Work
            </a>
            <a href="#thailand" className="btn-base btn-outline">
              Discover Thailand
            </a>
            <a href="#partnerships" className="btn-base btn-ghost">
              Explore Partnerships
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="media-frame aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
            <img
              src={heroMain}
              alt="Indonesian students and an international faculty member collaborating on a university campus"
              width={1280}
              height={1600}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-8 -left-2 hidden w-40 sm:block lg:-left-10 lg:w-52">
            <div className="media-frame aspect-[3/4] border-4 border-background shadow-lift">
              <img
                src={heroPortrait}
                alt="Community facilitator smiling during a village programme"
                width={912}
                height={1104}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-background/95 px-3.5 py-2 text-sm font-medium shadow-soft backdrop-blur-sm">
            <MapPin className="h-4 w-4 text-primary" aria-hidden />
            Thailand · First pilot country
          </div>
        </div>
      </div>
    </section>
  );
}
