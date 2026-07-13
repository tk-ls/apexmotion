/** Straight-lined, square-capped check mark — the text ✓ glyph is too
 *  thin and curved for the minimalist look. Sized via className. */
export default function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M1.5 6.5L4.5 9.5L10.5 2.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="square"
      />
    </svg>
  );
}
