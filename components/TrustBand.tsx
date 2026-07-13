import { dictionaries, type Lang } from "@/lib/i18n";

export default function TrustBand({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].trust;

  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-text sm:text-4xl">
          {t.heading}
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {t.items.map((item) => (
            <div key={item.index} className="card p-6">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent"
                aria-hidden
              >
                ✓
              </span>
              <p className="mt-4 font-semibold text-text">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
