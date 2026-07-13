import { dictionaries, type Lang } from "@/lib/i18n";

/** Single source of truth for the wordmark — used in Header and Footer. */
export default function Logo({ lang = "en" }: { lang?: Lang }) {
  const { primary, secondary } = dictionaries[lang].logo;
  return (
    <span className="flex items-baseline gap-1.5">
      <span className="text-lg font-extrabold tracking-tight text-text">
        {primary}
      </span>
      <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-muted">
        {secondary}
      </span>
    </span>
  );
}
