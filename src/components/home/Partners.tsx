const PARTNERS = [
  {
    name: "Muhammadiyah Association of Thailand",
    role: "Local Institutional & Community Development",
  },
  {
    name: "PCIM Thailand",
    role: "Indonesia–Thailand Community & Institutional Connectivity",
  },
  {
    name: "Association of Muslim Community in ASEAN",
    role: "ASEAN Education & Regional Connectivity",
  },
  {
    name: "IDN Boarding School",
    role: "Technology, Digital Education & Future Skills",
    description:
      "IDN Boarding School strengthens the technology and digital education dimension of the Kampung Indonesia ecosystem through digital skills, technology-enabled learning, educational innovation, future-oriented competencies, and youth capacity development.",
  },
];

export function Partners() {
  return (
    <section id="partnerships" className="section-y">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="label-kicker">Strategic Development Partners</p>
          <h2 className="display-2 mt-4 text-balance">Partners strengthening the platform.</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PARTNERS.map((partner) => (
            <article key={partner.name} className="card-soft p-7 md:p-8">
              <div className="rule-red" />
              <h3 className="mt-5 text-balance font-display text-xl tracking-tight">
                {partner.name}
              </h3>
              <p className="mt-2 text-sm font-medium text-primary">{partner.role}</p>
              {partner.description && (
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {partner.description}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-surface p-7 md:p-8">
          <h3 className="text-[0.8125rem] font-bold tracking-[0.14em] text-muted-foreground uppercase">
            Institutional Ecosystem
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Kampung Indonesia operates within a wider institutional ecosystem in Indonesia and
            Thailand. Inclusion in this ecosystem does not imply formal partnership, endorsement, or
            affiliation unless an official arrangement has been established.
          </p>
        </div>
      </div>
    </section>
  );
}
