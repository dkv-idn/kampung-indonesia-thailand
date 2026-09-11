const LAYERS = [
  {
    title: "Activities",
    items: [
      "International Education",
      "Mobility",
      "Capacity Development",
      "Institutional Cooperation",
      "Community Initiatives",
      "Knowledge Exchange",
    ],
  },
  {
    title: "Outputs",
    items: [
      "People Engaged",
      "Institutions Connected",
      "Programs Delivered",
      "Communities Involved",
      "Knowledge Exchanged",
    ],
  },
  {
    title: "Outcomes",
    items: [
      "Expanded International Opportunities",
      "Stronger Institutional Capacity",
      "Greater Cross-Cultural Understanding",
      "New Partnerships",
      "Stronger Community Networks",
      "Improved Access to Knowledge",
    ],
  },
];

export function ImpactFramework() {
  return (
    <section id="impact" className="section-y bg-surface">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="label-kicker">Impact</p>
          <h2 className="display-2 mt-4 text-balance">
            Success is more than the number of events.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {LAYERS.map((layer, i) => (
            <div key={layer.title} className="card-soft bg-card p-7 md:p-8">
              <div className="flex items-baseline gap-3">
                <span className="text-xs font-bold text-primary tabular-nums">0{i + 1}</span>
                <h3 className="font-display text-xl tracking-tight">{layer.title}</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {layer.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.9375rem] leading-relaxed text-ink-soft"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60"
                      aria-hidden
                    />
                    <span className="min-w-0">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-border bg-card p-8 md:p-12">
          <p className="label-kicker">Long-Term Impact</p>
          <p className="display-3 mt-4 max-w-4xl text-balance">
            Stronger connections between Indonesia and the world through institutions, communities,
            knowledge, and people.
          </p>
        </div>
      </div>
    </section>
  );
}
