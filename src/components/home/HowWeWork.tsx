const STEPS = [
  { title: "Connect", text: "Establish trusted relationships with local and international partners." },
  { title: "Understand", text: "Study institutional priorities, community needs, and local context." },
  { title: "Co-Design", text: "Shape programmes together rather than importing ready-made models." },
  { title: "Implement", text: "Deliver activities with local leadership and shared responsibility." },
  { title: "Measure", text: "Track outputs and outcomes honestly, without inflating results." },
  { title: "Strengthen", text: "Reinforce institutional and community capacity beyond the programme." },
  { title: "Replicate", text: "Adapt what works to new contexts where strong foundations exist." },
];

export function HowWeWork() {
  return (
    <section className="section-y border-t border-border">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="label-kicker">Our Development Model</p>
          <h2 className="display-2 mt-4 text-balance">From connection to sustainable impact.</h2>
        </div>

        <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li key={step.title} className="relative min-w-0">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-primary tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-border" aria-hidden />
              </div>
              <h3 className="mt-4 font-display text-xl tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
