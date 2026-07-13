import Link from "next/link";
import { clauses } from "@/lib/clauses";
import { dictionaries, href, type Lang } from "@/lib/i18n";

export default function ServicesPage({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].services;

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-text sm:text-5xl">
          {clauses(t.h1, lang)}
        </h1>
        <p className="mt-5 text-muted">{t.sub}</p>

        <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-3">
          {t.packages.map((pkg) => (
            <div
              key={pkg.index}
              className={`card relative flex flex-col p-8 ${
                pkg.featured ? "ring-2 ring-accent" : ""
              }`}
            >
              {pkg.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-3 py-1 text-xs font-semibold text-bg">
                  {t.mostPopular}
                </span>
              )}
              <h2 className="text-2xl font-bold text-text">{pkg.name}</h2>
              <p className="mt-1 text-sm text-muted">{pkg.tagline}</p>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-text">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs text-accent"
                      aria-hidden
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={href(lang, "/contact")}
                className={`mt-8 whitespace-nowrap ${
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
            className="font-semibold text-accent hover:text-accent-hover"
          >
            {t.retainerLink}
          </Link>
          {t.retainerPost}
        </p>
      </div>

      {/* Process */}
      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <p className="eyebrow">{t.processEyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
          {clauses(t.processHeading, lang)}
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {t.process.map((item, i) => (
            <div key={item.step}>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-bg">
                {i + 1}
              </span>
              <h3 className="mt-4 text-xl font-bold text-text">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
