const PAIRS = [
  ["Indonesia", "Host Countries"],
  ["Institutions", "Communities"],
  ["Knowledge", "Practice"],
  ["Local Experience", "International Opportunities"],
  ["Education", "Development"],
];

export function Connections() {
  return (
    <section className="section-y bg-surface">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="label-kicker">The Connections We Build</p>
          <h2 className="display-2 mt-4 text-balance">
            Turning fragmented connections into meaningful collaboration.
          </h2>
        </div>

        <ul className="mt-12 divide-y divide-border border-y border-border">
          {PAIRS.map(([left, right], i) => (
            <li
              key={left}
              className="group grid grid-cols-1 items-center gap-3 py-6 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:gap-6 md:py-8"
            >
              <span className="flex min-w-0 items-baseline gap-4">
                <span className="text-xs font-semibold text-muted-foreground tabular-nums">
                  0{i + 1}
                </span>
                <span className="font-display text-xl tracking-tight md:text-2xl">{left}</span>
              </span>
              <span className="flex items-center gap-2" aria-hidden>
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="h-px w-10 bg-primary/45 transition-all duration-500 group-hover:w-16 sm:w-16" />
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <span className="min-w-0 font-display text-xl tracking-tight text-ink-soft sm:text-right md:text-2xl">
                {right}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
