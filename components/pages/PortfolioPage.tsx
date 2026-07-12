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
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <p className="eyebrow">{t.eyebrow}</p>
      <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-cream sm:text-6xl">
        {t.h1}
      </h1>
      <p className="mt-6 max-w-xl text-muted">{t.sub}</p>

      {/* Featured film — your single strongest one-take tour */}
      <div className="mt-14 border-t border-line pt-14">
        <VideoPlaceholder
          label={t.featuredLabel}
          sublabel={t.featuredSub}
          aspect="aspect-video sm:aspect-[21/9]"
        />
      </div>

      {/* Project grid */}
      <div className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {t.projects.map((project, i) => (
          <article key={`${project.suburb}-${project.type}`}>
            <VideoPlaceholder
              label={`${project.suburb} — ${project.type}`}
              sublabel={t.sampleNote}
            />
            <div className="mt-4 flex items-baseline justify-between border-t border-line pt-3">
              <div>
                <h2 className="font-display text-lg font-semibold text-cream">
                  {project.suburb}
                </h2>
                <p className="text-xs uppercase tracking-[0.15em] text-muted">
                  {project.type}
                </p>
              </div>
              <p className="text-xs text-muted">
                {String(i + 1).padStart(2, "0")}
              </p>
            </div>
            {/* Add a one-line result per project when available,
                e.g. "Sold prior to auction" — results sell to agents. */}
          </article>
        ))}
      </div>

      <div className="mt-20 border-t border-line pt-14">
        <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
          {t.closingHeading}
        </h2>
        <Link href={href(lang, "/contact")} className="btn-solid mt-8">
          {t.closingCta}
        </Link>
      </div>
    </div>
  );
}
