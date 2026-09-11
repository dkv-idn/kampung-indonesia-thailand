import { ArrowRight } from "lucide-react";

export function ClosingInvitation() {
  return (
    <section id="contact" className="section-y bg-primary-soft">
      <div className="shell">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="display-2 text-balance">
            Building stronger connections between Indonesia and the world.
          </h2>
          <p className="lede mt-6">
            We welcome conversations with universities, schools, communities, institutions, and
            development partners who are exploring international collaboration — whether an idea is
            fully formed or just beginning.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href="#partnerships" className="btn-base btn-primary">
              Explore Partnerships
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a href="#contact" className="btn-base btn-outline">
              Contact Kampung Indonesia
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
