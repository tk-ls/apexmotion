import Link from "next/link";
import TrustBand from "@/components/TrustBand";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import { dictionaries, href, type Lang } from "@/lib/i18n";

export default function HomePage({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].home;

  return (
    <>
      {/* Hero — left-aligned, oversized type, no ornament */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 sm:pt-32">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-cream sm:text-7xl">
            {t.h1}
          </h1>
          <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
            <p className="max-w-md text-lg leading-relaxed text-muted">
              {t.sub}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={href(lang, "/contact")} className="btn-solid">
                {t.ctaPrimary}
              </Link>
              <Link href={href(lang, "/portfolio")} className="btn-outline">
                {t.ctaSecondary}
              </Link>
            </div>
          </div>

          <div className="mt-16">
            {/* Hero showreel: muted autoplay, ≤15s, poster image. Replace placeholder with embed.
                21:9 letterbox ratio on larger screens — reads cinema, not slideshow. */}
            <VideoPlaceholder
              label={t.showreelLabel}
              sublabel={t.showreelSub}
              aspect="aspect-video sm:aspect-[21/9]"
            />
          </div>
        </div>
      </section>

      {/* About / value proposition */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <p className="eyebrow">{t.aboutEyebrow}</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
                {t.aboutHeading}
              </h2>
              <p className="mt-6 leading-relaxed text-muted">{t.aboutP1}</p>
              <p className="mt-4 leading-relaxed text-muted">{t.aboutP2}</p>
              <Link
                href={href(lang, "/about")}
                className="mt-8 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cream underline decoration-gold underline-offset-8 hover:text-gold"
              >
                {t.aboutLink}
              </Link>
            </div>
            <VideoPlaceholder label={t.featureLabel} sublabel={t.featureSub} />
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">{t.servicesEyebrow}</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
                {t.servicesHeading}
              </h2>
            </div>
            <Link href={href(lang, "/services")} className="btn-outline">
              {t.servicesLink}
            </Link>
          </div>
          <div className="mt-12 grid divide-y divide-line border-t border-line md:grid-cols-3 md:divide-x md:divide-y-0">
            {t.services.map((service) => (
              <div
                key={service.index}
                className="py-8 md:px-8 md:first:pl-0 md:last:pr-0"
              >
                <div className="flex items-baseline justify-between">
                  <p className="text-xs text-muted">{service.index}</p>
                  {service.featured && (
                    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-gold">
                      {t.mostPopular}
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

      <TrustBand lang={lang} />

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <h2 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-cream sm:text-5xl">
          {t.finalHeading}
        </h2>
        <div className="mt-8 flex flex-wrap items-center gap-8">
          <Link href={href(lang, "/contact")} className="btn-solid">
            {t.finalCta}
          </Link>
          <p className="max-w-xs text-sm text-muted">{t.finalNote}</p>
        </div>
      </section>
    </>
  );
}
