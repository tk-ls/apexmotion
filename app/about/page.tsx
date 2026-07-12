import type { Metadata } from "next";
import Link from "next/link";
import TrustBand from "@/components/TrustBand";

export const metadata: Metadata = {
  title: "The Studio",
  description:
    "Apex Motion Studios is a Sydney production studio for premium real estate media — a professional two-person crew, fully insured and CASA-compliant.",
};

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="eyebrow">The Studio</p>
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-cream text-balance sm:text-6xl">
          A production partner, not&nbsp;a&nbsp;drone&nbsp;operator.
        </h1>

        <div className="mt-14 grid gap-12 border-t border-line pt-14 md:grid-cols-2">
          <div className="space-y-5 leading-relaxed text-muted">
            <p>
              Apex Motion Studios was founded on a simple observation: the
              properties that sell fastest are the ones buyers can already
              picture themselves living in. Static photography shows a house.
              A one-take FPV tour lets a buyer{" "}
              <em className="text-cream">move through a home</em> — feeling
              its flow, its scale and its light before they ever step inside.
            </p>
            <p>
              We operate as a dedicated two-person crew on every shoot. Our
              registered operator and safety officer oversees flight planning,
              risk assessment and compliance, while our pilot focuses entirely
              on the craft — threading a single, seamless flight path through
              a property that would take a conventional videographer a full
              day of cuts to approximate.
            </p>
            <p>
              That structure is deliberate. It means agents and vendors get a
              professional production partner on-site: insured, CASA-compliant
              and accountable — with the cinematic instincts of a film crew
              and the reliability of an established supplier.
            </p>
          </div>

          <div className="space-y-10">
            <div className="border-t border-line pt-6 md:border-t-0 md:pt-0">
              <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-cream">
                Credentials
              </h2>
              <ul className="mt-5 space-y-3 text-sm text-cream/85">
                <li className="flex gap-3">
                  <span className="text-muted" aria-hidden>—</span>
                  CASA-registered operator on every shoot
                </li>
                <li className="flex gap-3">
                  <span className="text-muted" aria-hidden>—</span>
                  Dedicated safety officer &amp; documented flight planning
                </li>
                <li className="flex gap-3">
                  <span className="text-muted" aria-hidden>—</span>
                  Full public liability insurance
                </li>
                <li className="flex gap-3">
                  <span className="text-muted" aria-hidden>—</span>
                  Servicing Greater Sydney
                </li>
              </ul>
            </div>

            <div className="border-t border-line pt-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-cream">
                On every shoot
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                Pre-shoot site assessment · CASA-compliant flight plan ·
                on-site safety officer · cinematic FPV capture · high-end
                gimbal &amp; exterior aerials · colour-graded delivery within 3
                business days.
              </p>
            </div>
          </div>
        </div>
      </div>

      <TrustBand />

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-cream text-balance sm:text-4xl">
          See the work for yourself.
        </h2>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/portfolio" className="btn-outline">
            View Our Work
          </Link>
          <Link href="/contact" className="btn-solid">
            Book Your Shoot
          </Link>
        </div>
      </div>
    </>
  );
}
