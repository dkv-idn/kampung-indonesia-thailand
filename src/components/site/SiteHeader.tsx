import { useEffect, useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { label: "About", href: "#about" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Countries", href: "#countries" },
  { label: "Partnerships", href: "#partnerships" },
  { label: "Impact", href: "#impact" },
  { label: "Insights", href: "#insights" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/95 backdrop-blur-sm"
          : "border-b border-transparent bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="shell">
        <div className="grid h-[4.5rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:h-20">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-[0.9375rem] font-medium text-ink-soft transition-colors hover:bg-surface hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <span className="mx-2 h-6 w-px bg-border" aria-hidden />
            <button
              type="button"
              className="chip gap-1.5 px-3 py-2 text-[0.875rem]"
              aria-label="Select platform region"
            >
              <Globe className="h-4 w-4 shrink-0" aria-hidden />
              Global
            </button>
            <a href="#contact" className="btn-base btn-primary ml-1 px-5 py-2.5 text-sm">
              Contact
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="btn-base btn-outline h-11 w-11 shrink-0 p-0 lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-foreground/35"
          />
          <div className="absolute inset-x-0 top-0 max-h-[92vh] overflow-y-auto rounded-b-3xl bg-background p-5 shadow-lift">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
              <Logo compact />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="btn-base btn-outline h-11 w-11 shrink-0 p-0"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <nav className="mt-6 flex flex-col" aria-label="Mobile">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-4 font-display text-xl tracking-tight"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-6 flex flex-col gap-3 pb-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-base btn-primary w-full"
              >
                Contact Kampung Indonesia
              </a>
              <button type="button" className="btn-base btn-outline w-full">
                <Globe className="h-4 w-4" aria-hidden />
                Global · English
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
