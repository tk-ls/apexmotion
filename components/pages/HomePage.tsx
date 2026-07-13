import Link from "next/link";
import CinemaSection from "@/components/CinemaSection";
import Reveal from "@/components/Reveal";
import TrustBand from "@/components/TrustBand";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import { dictionaries, href, type Lang } from "@/lib/i18n";

export default function HomePage({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].home;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Soft Leuchtorange light-leak — the "studio lighting" cue */}
        <div
          className="pointer-events-none absolute -top-32 right-[-10%] h-[480px] w-[640px] rounded-full bg-accent/15 blur-[140px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-16 sm:px-6 sm:pt-28">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-text sm:text-6xl">
            {t.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {t.sub}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={href(lang, "/contact")} className="btn-solid">
              {t.ctaPrimary}
            </Link>
            <Link href={href(lang, "/portfolio")} className="btn-outline">
              {t.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* Screening room — pins full-screen, lights dim, showreel plays */}
      <CinemaSection
        eyebrow={t.cinemaEyebrow}
        caption={t.cinemaCaption}
        hint={t.cinemaHint}
      />

      {/* About / value proposition — one paragraph; depth lives on /about */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="eyebrow">{t.aboutEyebrow}</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
                  {t.aboutHeading}
                </h2>
                <p className="mt-6 leading-relaxed text-muted">{t.aboutP1}</p>
                <Link
                  href={href(lang, "/about")}
                  className="mt-6 inline-block text-sm font-semibold text-accent hover:text-accent-hover"
                >
                  {t.aboutLink} →
                </Link>
              </div>
              <VideoPlaceholder label={t.featureLabel} sublabel={t.featureSub} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services teaser */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">{t.servicesEyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
                {t.servicesHeading}
              </h2>
            </div>
            <Link
              href={href(lang, "/services")}
              className="text-sm font-semibold text-accent hover:text-accent-hover"
            >
              {t.servicesLink} →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.services.map((service, i) => (
              <Reveal key={service.index} delay={i * 120}>
                <div
                  className={`card h-full p-7 ${service.featured ? "ring-2 ring-accent" : ""}`}
                >
                  {service.featured && (
                    <span className="mb-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-bg">
                      {t.mostPopular}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-text">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {service.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TrustBand lang={lang} />

      {/* Final CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
          <div className="card flex flex-col items-start gap-6 p-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="max-w-xl text-2xl font-bold tracking-tight text-text sm:text-3xl">
                {t.finalHeading}
              </h2>
              <p className="mt-2 max-w-md text-sm text-muted">{t.finalNote}</p>
            </div>
            <Link href={href(lang, "/contact")} className="btn-solid shrink-0">
              {t.finalCta}
            </Link>
          </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
