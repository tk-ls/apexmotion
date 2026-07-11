const ASSURANCES = [
  {
    index: "01",
    title: "CASA-Registered Operator",
    body: "Every flight is conducted under our registered operator and dedicated safety officer — no regulatory surprises, no cancelled shoots.",
  },
  {
    index: "02",
    title: "Full Public Liability Insurance",
    body: "Comprehensive cover on every job means zero liability exposure for your agency or your vendor.",
  },
  {
    index: "03",
    title: "A Two-Person Professional Crew",
    body: "Pilot plus safety officer on every shoot — a production partner your clients can trust on-site at their most valuable asset.",
  },
];

export default function TrustBand() {
  return (
    <section className="border-y border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="eyebrow">Trust &amp; Compliance</p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
          Flown by professionals. Backed by certification.
        </h2>
        <div className="mt-12 grid divide-y divide-line border-t border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {ASSURANCES.map((item) => (
            <div key={item.index} className="py-8 sm:px-8 sm:first:pl-0 sm:last:pr-0">
              <p className="text-xs text-muted">{item.index}</p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.15em] text-cream">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
