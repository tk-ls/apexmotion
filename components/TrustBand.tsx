import { dictionaries, type Lang } from "@/lib/i18n";

export default function TrustBand({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].trust;

  return (
    <section className="border-y border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
          {t.heading}
        </h2>
        <div className="mt-12 grid divide-y divide-line border-t border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {t.items.map((item) => (
            <div
              key={item.index}
              className="py-8 sm:px-8 sm:first:pl-0 sm:last:pr-0"
            >
              <p className="text-xs text-muted">{item.index}</p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.15em] text-cream">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
