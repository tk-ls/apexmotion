type VideoPlaceholderProps = {
  label: string;
  sublabel?: string;
  /** Tailwind aspect class(es), e.g. "aspect-video" (default) */
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
      className={`relative ${aspect} w-full overflow-hidden rounded-xl bg-[#0c0b0a] ring-1 ring-white/10`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <span
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-sm text-white ring-1 ring-white/40"
          aria-hidden
        >
          ▶
        </span>
        <p className="text-sm font-medium text-white/90">{label}</p>
        {sublabel && <p className="text-xs text-white/50">{sublabel}</p>}
      </div>
    </div>
  );
}
