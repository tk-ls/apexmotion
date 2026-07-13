import Link from "next/link";
import Check from "@/components/Check";
import { dictionaries, href, type Lang } from "@/lib/i18n";

/** Landing page after a successful form submission (formsubmit _next). */
export default function ThanksPage({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].contact;

  return (
    <div className="mx-auto flex max-w-6xl flex-col items-start px-4 py-32 sm:px-6">
      <span
        className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent"
        aria-hidden
      >
        <Check className="h-4 w-4" />
      </span>
      <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-text sm:text-5xl">
        {t.thanksTitle}
      </h1>
      <p className="mt-5 max-w-xl text-muted">{t.thanksBody}</p>
      <Link href={href(lang, "/")} className="btn-solid mt-8">
        {t.thanksBack}
      </Link>
    </div>
  );
}
