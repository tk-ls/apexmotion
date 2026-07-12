import Link from "next/link";
import TrustBand from "@/components/TrustBand";
import { dictionaries, href, type Lang } from "@/lib/i18n";

export default function ServicesPage({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].services;

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-cream sm:text-6xl">
          {t.h1}
        </h1>
        <p className="mt-6 max-w-xl text-muted">{t.sub}</p>

        <div className="mt-14 grid divide-y divide-line border-y border-line lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {t.packages.map((pkg) => (
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
                    {t.mostPopular}
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
                href={href(lang, "/contact")}
                className={`mt-10 whitespace-nowrap ${
                  pkg.featured ? "btn-solid" : "btn-outline"
                }`}
              >
                {t.quoteCta}
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted">
          {t.retainerPre}
          <Link
            href={href(lang, "/contact")}
            className="text-cream underline decoration-gold underline-offset-4 hover:text-gold"
          >
            {t.retainerLink}
          </Link>
          {t.retainerPost}
        </p>
      </div>

      <TrustBand lang={lang} />

      {/* Process */}
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="eyebrow">{t.processEyebrow}</p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
          {t.processHeading}
        </h2>
        <div className="mt-12 grid divide-y divide-line border-t border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {t.process.map((item) => (
            <div
              key={item.step}
              className="py-8 sm:px-8 sm:first:pl-0 sm:last:pr-0"
            >
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
