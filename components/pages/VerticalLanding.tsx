import Link from "next/link";
import AutoVideo from "@/components/AutoVideo";
import CtaCard from "@/components/CtaCard";
import { clauses } from "@/lib/clauses";
import { dictionaries, href, type Lang, type VerticalKey } from "@/lib/i18n";

export default function VerticalLanding({
  lang,
  vertical,
}: {
  lang: Lang;
  vertical: VerticalKey;
}) {
  const t = dictionaries[lang];
  const v = t.verticals[vertical];
  const base = `/${vertical}`;

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="eyebrow">{v.landing.eyebrow}</p>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-text sm:text-5xl">
          {clauses(v.landing.h1, lang)}
        </h1>
        <p className="mt-5 text-muted">{v.landing.sub}</p>

        {/* Pitch + sample film */}
        <div className="mt-12 grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-5 leading-relaxed text-muted">
            <p>{v.landing.p1}</p>
            <p>{v.landing.p2}</p>
          </div>
          <div className="relative overflow-hidden rounded-xl bg-black">
            <AutoVideo
              src={v.landing.video}
              className="block aspect-video w-full object-cover"
            />
            <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[0.65rem] font-medium text-white backdrop-blur">
              {t.common.sampleNote}
            </span>
          </div>
        </div>
      </div>

      {/* Work categories */}
      <div className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
            {clauses(v.landing.workHeading, lang)}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {v.workOrder.map((slug) => {
              const page = v.work[slug];
              return (
                <Link
                  key={slug}
                  href={href(lang, `${base}/${slug}`)}
                  className="card group overflow-hidden transition-colors hover:border-muted"
                >
                  <div className="relative">
                    <AutoVideo
                      src={page.tiles[0].video}
                      className="block aspect-video w-full object-cover"
                    />
                    <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[0.65rem] font-medium text-white backdrop-blur">
                      {t.common.sampleNote}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-text">{page.label}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {page.sub}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Packages strip */}
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="card flex flex-col items-start gap-6 p-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
              {clauses(v.landing.packagesTitle, lang)}
            </h2>
            <p className="mt-2 text-sm text-muted">{v.landing.packagesBlurb}</p>
          </div>
          <Link
            href={href(lang, `${base}/packages`)}
            className="btn-outline shrink-0"
          >
            {v.landing.packagesLink}
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <CtaCard lang={lang} />
      </div>
    </>
  );
}
