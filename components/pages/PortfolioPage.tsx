import Link from "next/link";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import { dictionaries, href, type Lang } from "@/lib/i18n";

/**
 * Projects are SAMPLE content — replace with real shoots before launch.
 * Keep the grid curated: 6–9 of your strongest projects only.
 */
export default function PortfolioPage({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].portfolio;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="eyebrow">{t.eyebrow}</p>
      <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-text sm:text-5xl">
        {t.h1}
      </h1>
      <p className="mt-5 max-w-2xl text-muted">{t.sub}</p>

      {/* Featured film — your single strongest one-take tour */}
      <div className="mt-12">
        <VideoPlaceholder
          label={t.featuredLabel}
          sublabel={t.featuredSub}
          aspect="aspect-video sm:aspect-[21/9]"
        />
      </div>

      {/* Project grid — listing-style cards */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.projects.map((project) => (
          <article
            key={`${project.suburb}-${project.type}`}
            className="card overflow-hidden"
          >
            <div className="[&>div]:rounded-none">
              <VideoPlaceholder
                label={`${project.suburb} — ${project.type}`}
                sublabel={t.sampleNote}
              />
            </div>
            <div className="p-5">
              <h2 className="text-lg font-bold text-text">{project.suburb}</h2>
              <p className="mt-0.5 text-sm text-muted">{project.type}</p>
              {/* Add a one-line result per project when available,
                  e.g. "Sold prior to auction" — results sell to agents. */}
            </div>
          </article>
        ))}
      </div>

      <div className="card mt-14 flex flex-col items-start gap-6 p-10 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="max-w-xl text-2xl font-bold tracking-tight text-text sm:text-3xl">
          {t.closingHeading}
        </h2>
        <Link href={href(lang, "/contact")} className="btn-solid shrink-0">
          {t.closingCta}
        </Link>
      </div>
    </div>
  );
}
