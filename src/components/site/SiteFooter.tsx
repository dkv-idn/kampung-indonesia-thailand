import { Globe, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";

const GROUPS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Platform",
    links: [
      { label: "About", href: "#about" },
      { label: "What We Do", href: "#what-we-do" },
      { label: "Countries", href: "#countries" },
      { label: "Impact", href: "#impact" },
    ],
  },
  {
    title: "Work With Us",
    links: [
      { label: "Partnerships", href: "#partnerships" },
      { label: "Programs", href: "#what-we-do" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Knowledge",
    links: [
      { label: "Insights", href: "#insights" },
      { label: "Research", href: "#insights" },
      { label: "Stories", href: "#insights" },
    ],
  },
  {
    title: "Country Platforms",
    links: [{ label: "Thailand", href: "#thailand" }],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="shell py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              An international education and community development platform connecting Indonesia
              with communities, institutions, and opportunities across the world.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#contact"
                aria-label="LinkedIn"
                className="btn-base btn-outline h-10 w-10 p-0"
              >
                <Linkedin className="h-4 w-4" aria-hidden />
              </a>
              <a
                href="#contact"
                aria-label="Instagram"
                className="btn-base btn-outline h-10 w-10 p-0"
              >
                <Instagram className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {GROUPS.map((group) => (
              <div key={group.title} className="min-w-0">
                <h3 className="text-[0.8125rem] font-semibold tracking-wide">{group.title}</h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="min-w-0">
              <h3 className="text-[0.8125rem] font-semibold tracking-wide">Follow</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="#contact"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-3 border-t border-border pt-8 text-sm text-muted-foreground sm:grid-cols-2">
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            <span>Institutional contact address — to be confirmed (Jakarta, Indonesia)</span>
          </p>
          <p className="flex items-start gap-2 sm:justify-self-end">
            <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            <span>contact@kampungindonesia.org (placeholder)</span>
          </p>
        </div>

        <div className="mt-8 grid gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <p>© {new Date().getFullYear()} Kampung Indonesia. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#contact" className="transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              Terms
            </a>
            <span className="inline-flex items-center gap-1.5">
              <Globe className="h-4 w-4" aria-hidden />
              English
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
