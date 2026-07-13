import AutoVideo from "@/components/AutoVideo";
import CtaCard from "@/components/CtaCard";
import { clauses } from "@/lib/clauses";
import { dictionaries, type Lang, type VerticalKey } from "@/lib/i18n";

/**
 * Media-type showcase page. Tiles are SAMPLE stock clips (clearly badged) —
 * replace with real shoots as they land; the data lives in lib/i18n.ts under
 * verticals.<vertical>.work.<slug>.
 */
export default function WorkGallery({
  lang,
  vertical,
  slug,
}: {
  lang: Lang;
  vertical: VerticalKey;
  slug: string;
}) {
  const t = dictionaries[lang];
  const v = t.verticals[vertical];
  const page = v.work[slug];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="eyebrow">{v.landing.eyebrow}</p>
      <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-text sm:text-5xl">
        {clauses(page.h1, lang)}
      </h1>
      <p className="mt-5 text-muted">{page.sub}</p>

      {/* Featured film — the first tile, full width */}
      <div className="relative mt-12 overflow-hidden rounded-xl bg-black">
        <AutoVideo
          src={page.tiles[0].video}
          className="block aspect-video w-full object-cover sm:aspect-[21/9]"
        />
        <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[0.65rem] font-medium text-white backdrop-blur">
          {t.common.sampleNote}
        </span>
      </div>

      {/* Tile grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {page.tiles.map((tile) => (
          <article key={tile.title} className="card overflow-hidden">
            <div className="relative">
              <AutoVideo
                src={tile.video}
                className="block aspect-video w-full object-cover"
              />
              <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[0.65rem] font-medium text-white backdrop-blur">
                {t.common.sampleNote}
              </span>
            </div>
            <div className="p-5">
              <h2 className="text-lg font-bold text-text">{tile.title}</h2>
              <p className="mt-0.5 text-sm text-muted">{tile.tag}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14">
        <CtaCard lang={lang} />
      </div>
    </div>
  );
}
