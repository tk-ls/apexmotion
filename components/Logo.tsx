import { dictionaries, type Lang } from "@/lib/i18n";

/** Single source of truth for the wordmark — used in Header and Footer. */
export default function Logo({ lang = "en" }: { lang?: Lang }) {
  const { primary, secondary } = dictionaries[lang].logo;
  return (
    <span className="flex items-baseline gap-2">
      <span className="font-display text-lg font-semibold tracking-tight text-cream">
        {primary}
      </span>
      <span className="text-[0.6rem] font-medium uppercase tracking-[0.35em] text-muted">
        {secondary}
      </span>
    </span>
  );
}
