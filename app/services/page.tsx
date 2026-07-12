import type { Metadata } from "next";
import Link from "next/link";
import TrustBand from "@/components/TrustBand";

export const metadata: Metadata = {
  title: "Services & Packages",
  description:
    "Per-property packages for real estate campaigns: cinematic exteriors, one-take FPV tours, and full campaign suites. Fully insured and CASA-compliant.",
};

const PACKAGES = [
  {
    index: "01",
    name: "Signature Exteriors",
    tagline: "The commanding first impression",
    includes: [
      "Cinematic exterior drone aerials",
      "High-end gimbal photography",
      "Edited highlight photo set",
      "Colour-graded 60-second exterior film",
      "Delivery within 3 business days",
    ],
  },
  {
    index: "02",
    name: "The Immersive Tour",
    tagline: "Our signature one-take FPV experience",
    featured: true,
    includes: [
      "Everything in Signature Exteriors",
      "One-take indoor FPV tour",
      "Agent-branded final edit",
      "Vertical cuts for Instagram & TikTok",
      "Licensed soundtrack & sound design",
      "Delivery within 3 business days",
    ],
  },
  {
    index: "03",
    name: "The Campaign Suite",
    tagline: "The complete flagship campaign",
    includes: [
      "Everything in The Immersive Tour",
      "Twilight exterior shoot",
      "Lifestyle & location b-roll",
      "Priority 48-hour turnaround",
      "Dedicated campaign consultation",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="eyebrow">Services &amp; Packages</p>
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-cream text-balance sm:text-6xl">
          Per-property packages, built&nbsp;for&nbsp;campaigns.
        </h1>
        <p className="mt-6 max-w-xl text-muted">
          Simple, per-listing pricing that scales with the property — no hourly
          rates, no surprises. Every package is quoted to the campaign.
        </p>

        <div className="mt-14 grid divide-y divide-line border-y border-line lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.index}
              className={`flex flex-col py-10 lg:px-8 ${
                pkg.featured ? "lg:bg-panel" : ""
              }`}
            >
              <div className="flex items-baseline justify-between">
                <p className="text-xs text-muted">{pkg.index}</p>
                {pkg.featured && (
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-gold">
                    Most Popular
                  </p>
                )}
              </div>
              <h2 className="mt-4 font-display text-2xl font-semibold text-cream">
                {pkg.name}
              </h2>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted">
                {pkg.tagline}
              </p>
              <ul className="mt-8 flex-1 space-y-3 text-sm text-cream/85">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-muted" aria-hidden>
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-10 whitespace-nowrap ${
                  pkg.featured ? "btn-solid" : "btn-outline"
                }`}
              >
                Request a Quote
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted">
          Multi-listing and agency retainer packages available —{" "}
          <Link
            href="/contact"
            className="text-cream underline decoration-gold underline-offset-4 hover:text-gold"
          >
            talk to us about your pipeline
          </Link>
          .
        </p>
      </div>

      <TrustBand />

      {/* Process */}
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="eyebrow">How It Works</p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-cream text-balance sm:text-4xl">
          From enquiry to campaign-ready in days.
        </h2>
        <div className="mt-12 grid divide-y divide-line border-t border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            {
              step: "01",
              title: "Enquire",
              body: "Send the property address and your campaign timeline. We confirm availability and a tailored quote within one business day.",
            },
            {
              step: "02",
              title: "We Shoot",
              body: "Our two-person crew handles everything on-site — flight planning, safety checks and capture — typically in a single session.",
            },
            {
              step: "03",
              title: "You Launch",
              body: "Campaign-ready films, verticals and photography delivered within 3 business days (48 hours on Campaign Suite).",
            },
          ].map((item) => (
            <div key={item.step} className="py-8 sm:px-8 sm:first:pl-0 sm:last:pr-0">
              <p className="text-xs text-muted">{item.step}</p>
              <h3 className="mt-3 font-display text-xl font-semibold text-cream">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
