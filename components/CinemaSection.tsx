"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(callback: () => void) {
  const mql = window.matchMedia(REDUCED_MOTION_QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function useReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false,
  );
}

/**
 * "Screening room": the screen block is position-sticky inside a tall black
 * section. It enters at the top of the section (immediately visible, even on
 * phones where the screen is much shorter than the viewport), rides up until
 * it is centred, pins there while the room scrolls past and the lights dim,
 * then un-pins and leaves with the bottom of the section.
 *
 * The placeholder clip lives at /public/videos/showreel-placeholder.mp4
 * (Mixkit free license). Swap the file for the real showreel when it exists —
 * keep it muted, looped, and under ~20 MB (Cloudflare Pages file limit is 25 MB).
 */
export default function CinemaSection({
  eyebrow,
  caption,
  hint,
}: {
  eyebrow: string;
  caption: string;
  hint: string;
}) {
  const wrapRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isPlaying = useRef(false);
  const primed = useRef(false);
  const reducedMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [topOffset, setTopOffset] = useState(0);
  const [videoOk, setVideoOk] = useState(true);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = wrapRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const runway = rect.height - window.innerHeight;
        const p = Math.min(1, Math.max(0, -rect.top / (runway || 1)));
        setProgress(p);

        // Sticky offset that centres the screen block in the viewport
        const block = stickyRef.current;
        if (block) {
          setTopOffset(
            Math.max(16, (window.innerHeight - block.offsetHeight) / 2),
          );
        }

        const v = videoRef.current;
        if (!v) return;
        // The showreel is ~18 MB, so don't touch it on page load. Start
        // buffering only once the visitor actually scrolls toward the
        // section — that leaves a full hero of runway before playback.
        if (
          !primed.current &&
          window.scrollY > 40 &&
          rect.top < window.innerHeight * 1.5
        ) {
          primed.current = true;
          v.preload = "auto";
          v.load();
        }
        // Only roll the film once the screen is essentially at full
        // brightness — nobody should watch a dark video.
        const shouldPlay = p >= 0.32 && p < 0.985;
        if (shouldPlay && !isPlaying.current) {
          isPlaying.current = true;
          v.play().catch(() => {});
        } else if (!shouldPlay && isPlaying.current) {
          isPlaying.current = false;
          v.pause();
        }
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Lights out and screen fully bright by 35% scroll, then a long plateau —
  // most of the section's runway shows the film at full brightness, so
  // there's no exact spot to hunt for.
  const dim = Math.min(1, progress / 0.35);
  const scale = reducedMotion ? 1 : 0.92 + 0.08 * dim;
  const brightness = 0.4 + 0.6 * dim;
  const hintVisible = videoOk && progress < 0.32;
  // Interpolate the room from page charcoal (#121212) to pure black.
  const room = `rgb(${Math.round(18 * (1 - dim))}, ${Math.round(18 * (1 - dim))}, ${Math.round(18 * (1 - dim))})`;

  return (
    <section
      ref={wrapRef}
      className="relative h-[220vh]"
      style={{ backgroundColor: room }}
    >
      <div
        ref={stickyRef}
        className="sticky flex flex-col items-center gap-6 px-4 py-6"
        style={{ top: topOffset }}
      >
        <p className="eyebrow" style={{ opacity: 1 - dim * 0.6 }}>
          {eyebrow}
        </p>

        {/* No outline on the screen — in a dark room the image floats,
            like a real cinema. isolate/transform-gpu avoid Safari seams. */}
        <div
          className="relative isolate w-[min(92vw,64rem)] transform-gpu overflow-hidden rounded-xl bg-black"
          style={{
            transform: `scale(${scale})`,
            filter: `brightness(${brightness})`,
            boxShadow: `0 0 ${90 * dim}px rgba(255, 255, 255, ${0.1 * dim})`,
          }}
        >
          {/* Video is slightly oversized (~10px) so the frame crops its
              edges — hides browser video-layer edge artifacts */}
          {videoOk ? (
            <video
              ref={videoRef}
              className="block aspect-video w-full scale-[1.01] bg-black object-cover"
              src="/videos/showreel-placeholder.mp4"
              poster="/videos/showreel-placeholder.jpg"
              muted
              loop
              playsInline
              preload="metadata"
              onError={() => setVideoOk(false)}
            />
          ) : (
            <div className="flex aspect-video w-full items-center justify-center">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-sm text-white ring-1 ring-white/40"
                aria-hidden
              >
                ▶
              </span>
            </div>
          )}

          {/* "Keep scrolling" watermark — visible until the lights are out */}
          <div
            className="pointer-events-none absolute inset-0 flex items-end justify-center pb-6 transition-opacity duration-500"
            style={{ opacity: hintVisible ? 1 : 0 }}
            aria-hidden={!hintVisible}
          >
            <span className="flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
              {hint}
              <span className="animate-bounce" aria-hidden>
                ↓
              </span>
            </span>
          </div>
        </div>

        <p
          className="text-sm font-medium text-white/70"
          style={{ opacity: dim }}
        >
          {caption}
        </p>
      </div>
    </section>
  );
}
