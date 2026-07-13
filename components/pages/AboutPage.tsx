import Link from "next/link";
import { clauses } from "@/lib/clauses";
import { dictionaries, href, type Lang } from "@/lib/i18n";

export default function AboutPage({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].about;

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-text sm:text-5xl">
          {clauses(t.h1, lang)}
        </h1>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div className="space-y-5 leading-relaxed text-muted">
            <p>
              {t.p1a}
              <em className="font-medium not-italic text-text">{t.p1em}</em>
              {t.p1b}
            </p>
            <p>{t.p2}</p>
            <p>{t.p3}</p>
          </div>

          <div className="card h-fit p-7">
            <h2 className="font-bold text-text">{t.credentialsHeading}</h2>
            <ul className="mt-4 space-y-3 text-sm text-text">
              {t.credentials.map((item) => (
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
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="card flex flex-col items-start gap-6 p-10 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="max-w-xl text-2xl font-bold tracking-tight text-text sm:text-3xl">
            {clauses(t.closingHeading, lang)}
          </h2>
          <div className="flex shrink-0 flex-wrap gap-4">
            <Link href={href(lang, "/portfolio")} className="btn-outline">
              {t.closingWork}
            </Link>
            <Link href={href(lang, "/contact")} className="btn-solid">
              {t.closingBook}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
