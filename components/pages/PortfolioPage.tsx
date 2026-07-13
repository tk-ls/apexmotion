import Link from "next/link";
import AutoVideo from "@/components/AutoVideo";
import { clauses } from "@/lib/clauses";
import { dictionaries, href, type Lang } from "@/lib/i18n";

/**
 * Projects are SAMPLE content (stock clips, clearly badged) — replace with
 * real shoots before launch. Keep the grid curated: 6–9 strongest projects.
 * Order matches the projects array in lib/i18n.ts.
 */
const FEATURED_VIDEO = "/videos/featured-aerial-estate.mp4";
const TILE_VIDEOS = [
  "/videos/showreel-placeholder.mp4", // Mosman — waterfront home
  "/videos/tile-apartments.mp4", // Barangaroo — apartments
  "/videos/tile-country-estate.mp4", // Vaucluse — estate & grounds
  "/videos/tile-city-buildings.mp4", // Surry Hills — urban
  "/videos/tile-bay.mp4", // Palm Beach — bay
  "/videos/tile-suburbs.mp4", // Kellyville — suburbs
];

function SampleBadge({ label }: { label: string }) {
  return (
    <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[0.65rem] font-medium text-white backdrop-blur">
      {label}
    </span>
  );
}
export default function PortfolioPage({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].portfolio;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="eyebrow">{t.eyebrow}</p>
      <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-text sm:text-5xl">
        {clauses(t.h1, lang)}
      </h1>
      <p className="mt-5 max-w-2xl text-muted">{t.sub}</p>

      {/* Featured film — replace with your single strongest one-take tour */}
      <div className="relative mt-12 overflow-hidden rounded-xl bg-black">
        <AutoVideo
          src={FEATURED_VIDEO}
          className="block aspect-video w-full object-cover sm:aspect-[21/9]"
        />
        <SampleBadge label={t.sampleNote} />
      </div>

      {/* Project grid — listing-style cards */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.projects.map((project, i) => (
          <article
            key={`${project.suburb}-${project.type}`}
            className="card overflow-hidden"
          >
            <div className="relative">
              <AutoVideo
                src={TILE_VIDEOS[i % TILE_VIDEOS.length]}
                className="block aspect-video w-full object-cover"
              />
              <SampleBadge label={t.sampleNote} />
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
          {clauses(t.closingHeading, lang)}
        </h2>
        <Link href={href(lang, "/contact")} className="btn-solid shrink-0">
          {t.closingCta}
        </Link>
      </div>
    </div>
  );
}
