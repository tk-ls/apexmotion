import Link from "next/link";
import { clauses } from "@/lib/clauses";
import { dictionaries, href, type Lang } from "@/lib/i18n";

/** Closing enquiry card shared by the vertical pages. */
export default function CtaCard({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].common;
  return (
    <div className="card flex flex-col items-start gap-6 p-10 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
          {clauses(t.ctaHeading, lang)}
        </h2>
        <p className="mt-2 text-sm text-muted">{t.ctaNote}</p>
      </div>
      <Link href={href(lang, "/contact")} className="btn-solid shrink-0">
        {t.ctaButton}
      </Link>
    </div>
  );
}
