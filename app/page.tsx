import Link from "next/link";
import TrustBand from "@/components/TrustBand";
import VideoPlaceholder from "@/components/VideoPlaceholder";

const SERVICES = [
  {
    index: "01",
    title: "Signature Exteriors",
    body: "Cinematic exterior aerials and gimbal photography that give every listing a commanding first impression.",
  },
  {
    index: "02",
    title: "The Immersive Tour",
    body: "Our signature one-take indoor FPV flight — a single, seamless journey through the property that reveals flow, scale and light.",
    featured: true,
  },
  {
    index: "03",
    title: "The Campaign Suite",
    body: "The complete marketing package: immersive tour, twilight shoot, lifestyle b-roll and vertical cuts for social — delivered fast.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — left-aligned, oversized type, no ornament */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 sm:pt-32">
          <p className="eyebrow">Sydney · Luxury Real Estate Media</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-cream sm:text-7xl">
            Properties that sell themselves. Before the first inspection.
          </h1>
          <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
            <p className="max-w-md text-lg leading-relaxed text-muted">
              Immersive one-take drone tours and cinematic exterior
              photography for Sydney&rsquo;s most distinctive properties.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-solid">
                Check Availability
              </Link>
              <Link href="/portfolio" className="btn-outline">
                Watch Our Work
              </Link>
            </div>
          </div>

          <div className="mt-16">
            {/* Hero showreel: muted autoplay, ≤15s, poster image. Replace placeholder with embed. */}
            <VideoPlaceholder
              label="Showreel — your best 15-second FPV clip"
              sublabel="Muted autoplay · replace with Vimeo Pro or Mux embed"
            />
          </div>
        </div>
      </section>

      {/* About / value proposition */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <p className="eyebrow">The Studio</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
                Immersive visual storytelling that moves buyers — and markets.
              </h2>
              <p className="mt-6 leading-relaxed text-muted">
                Apex Motion Studios is a Sydney-based production studio
                specialising in immersive visual storytelling for premium real
                estate. Our signature one-take FPV tours carry buyers through a
                property in a single, seamless flight — revealing flow, scale
                and light in a way static photography never can.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Paired with cinematic exterior aerials, the result is a listing
                that commands attention, draws more qualified buyers to
                inspection, and helps properties sell faster. Every shoot is
                fully insured and CASA-compliant, delivered by a dedicated
                two-person crew — so agents get broadcast-quality results with
                zero operational risk.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cream underline decoration-gold underline-offset-8 hover:text-gold"
              >
                Meet the studio
              </Link>
            </div>
            <VideoPlaceholder
              label="One-take FPV tour — feature example"
              sublabel="Click-to-play · lazy-loaded"
            />
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">What We Deliver</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
                Three ways to elevate a campaign.
              </h2>
            </div>
            <Link href="/services" className="btn-outline">
              Services &amp; Packages
            </Link>
          </div>
          <div className="mt-12 grid divide-y divide-line border-t border-line md:grid-cols-3 md:divide-x md:divide-y-0">
            {SERVICES.map((service) => (
              <div
                key={service.index}
                className="py-8 md:px-8 md:first:pl-0 md:last:pr-0"
              >
                <div className="flex items-baseline justify-between">
                  <p className="text-xs text-muted">{service.index}</p>
                  {service.featured && (
                    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-gold">
                      Most Popular
                    </p>
                  )}
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-cream">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBand />

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <h2 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-cream sm:text-5xl">
          Your next listing deserves more than photos.
        </h2>
        <div className="mt-8 flex flex-wrap items-center gap-8">
          <Link href="/contact" className="btn-solid">
            Check Availability for Your Listing
          </Link>
          <p className="max-w-xs text-sm text-muted">
            Tell us about the property — we confirm availability within one
            business day.
          </p>
        </div>
      </section>
    </>
  );
}
