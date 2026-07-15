import Link from "next/link";
import AutoVideo from "@/components/AutoVideo";
import CinemaSection from "@/components/CinemaSection";
import Reveal from "@/components/Reveal";
import TrustBand from "@/components/TrustBand";
import { clauses } from "@/lib/clauses";
import { dictionaries, href, type Lang } from "@/lib/i18n";

export default function HomePage({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].home;
  const common = dictionaries[lang].common;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Soft white light-leak — the "studio lighting" cue */}
        <div
          className="pointer-events-none absolute -top-32 right-[-10%] h-[480px] w-[640px] rounded-full bg-white/10 blur-[140px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-16 sm:px-6 sm:pt-28">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-text sm:text-6xl">
            {/* One sentence per line, hard break between them. Inside a
                sentence, \n marks an extra phone-only break point. */}
            {t.h1
              .split(/(?<=[.。])\s*/)
              .filter(Boolean)
              .map((sentence, i) => (
                <span key={i} className="block">
                  {sentence.split("\n").map((part, j, parts) => (
                    <span key={j}>
                      {clauses(part, lang)}
                      {j < parts.length - 1 && <br className="sm:hidden" />}
                    </span>
                  ))}
                </span>
              ))}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{t.sub}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={href(lang, "/contact")} className="btn-solid">
              {t.ctaPrimary}
            </Link>
            <Link href={href(lang, "/property")} className="btn-outline">
              {t.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* Screening room — sticky screen, lights dim, showreel plays */}
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
                  {clauses(t.aboutHeading, lang)}
                </h2>
                <p className="mt-6 leading-relaxed text-muted">{t.aboutP1}</p>
                <Link
                  href={href(lang, "/about")}
                  className="mt-6 inline-block text-sm font-semibold text-accent underline underline-offset-4 hover:text-accent-hover"
                >
                  {t.aboutLink}
                </Link>
              </div>
              <div className="relative overflow-hidden rounded-xl bg-black">
                <AutoVideo
                  src="/videos/feature-orbit.mp4"
                  className="block aspect-video w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Verticals */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="eyebrow">{t.verticalsEyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
            {clauses(t.verticalsHeading, lang)}
          </h2>
          <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-3">
            {t.verticals.map((vertical, i) => (
              <Reveal key={vertical.key} delay={i * 120} className="h-full">
                <Link
                  href={href(lang, `/${vertical.key}`)}
                  className="card flex h-full flex-col p-7 transition-colors hover:border-muted"
                >
                  <h3 className="text-xl font-bold text-text">
                    {vertical.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {vertical.body}
                  </p>
                  <span className="mt-5 text-sm font-semibold text-accent underline underline-offset-4">
                    {vertical.link}
                  </span>
                </Link>
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
                <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
                  {clauses(t.finalHeading, lang)}
                </h2>
                <p className="mt-2 text-sm text-muted">{t.finalNote}</p>
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
