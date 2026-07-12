/** Single source of truth for the wordmark — used in Header and Footer. */
export default function Logo() {
  return (
    <span className="flex items-baseline gap-2">
      <span className="font-display text-lg font-semibold tracking-tight text-cream">
        APEX MOTION
      </span>
      <span className="text-[0.6rem] font-medium uppercase tracking-[0.35em] text-muted">
        Studios
      </span>
    </span>
  );
}
