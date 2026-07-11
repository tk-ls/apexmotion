type VideoPlaceholderProps = {
  label: string;
  sublabel?: string;
  /** Tailwind aspect class, e.g. "aspect-video" (default) or "aspect-[9/16]" */
  aspect?: string;
};

/**
 * Placeholder for a hosted video embed (Vimeo Pro / Mux recommended).
 *
 * To go live, replace this component's contents with the embed iframe, e.g.:
 *   <iframe
 *     src="https://player.vimeo.com/video/VIDEO_ID?dnt=1"
 *     className="absolute inset-0 h-full w-full"
 *     allow="fullscreen; picture-in-picture"
 *     loading="lazy"
 *   />
 * Always lazy-load below-the-fold videos and use a poster image.
 */
export default function VideoPlaceholder({
  label,
  sublabel,
  aspect = "aspect-video",
}: VideoPlaceholderProps) {
  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden border border-line bg-panel`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
        <span
          className="flex h-12 w-12 items-center justify-center border border-cream/40 text-sm text-cream"
          aria-hidden
        >
          ▶
        </span>
        <p className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-cream">
          {label}
        </p>
        {sublabel && (
          <p className="text-[0.6rem] uppercase tracking-[0.2em] text-muted">
            {sublabel}
          </p>
        )}
      </div>
    </div>
  );
}
