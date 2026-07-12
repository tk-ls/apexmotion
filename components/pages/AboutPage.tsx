import Link from "next/link";
import TrustBand from "@/components/TrustBand";
import { dictionaries, href, type Lang } from "@/lib/i18n";

export default function AboutPage({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].about;

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-cream sm:text-6xl">
          {t.h1}
        </h1>

        <div className="mt-14 grid gap-12 border-t border-line pt-14 md:grid-cols-2">
          <div className="space-y-5 leading-relaxed text-muted">
            <p>
              {t.p1a}
              <em className="text-cream">{t.p1em}</em>
              {t.p1b}
            </p>
            <p>{t.p2}</p>
            <p>{t.p3}</p>
          </div>

          <div className="space-y-10">
            <div className="border-t border-line pt-6 md:border-t-0 md:pt-0">
              <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-cream">
                {t.credentialsHeading}
              </h2>
              <ul className="mt-5 space-y-3 text-sm text-cream/85">
                {t.credentials.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-muted" aria-hidden>
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-line pt-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-cream">
                {t.everyShootHeading}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                {t.everyShootBody}
              </p>
            </div>
          </div>
        </div>
      </div>

      <TrustBand lang={lang} />

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
          {t.closingHeading}
        </h2>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href={href(lang, "/portfolio")} className="btn-outline">
            {t.closingWork}
          </Link>
          <Link href={href(lang, "/contact")} className="btn-solid">
            {t.closingBook}
          </Link>
        </div>
      </div>
    </>
  );
}
