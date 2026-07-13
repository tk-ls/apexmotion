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
 * Full-screen "screening room": the section pins while you scroll through it,
 * the room lights dim to black, and the screen brightens and starts playing.
 *
 * The placeholder clip lives at /public/videos/showreel-placeholder.mp4
 * (Mixkit free license). Swap the file for the real showreel when it exists —
 * keep it muted, looped, and under ~20 MB (Cloudflare Pages file limit is 25 MB).
 */
export default function CinemaSection({
  eyebrow,
  caption,
}: {
  eyebrow: string;
  caption: string;
}) {
  const wrapRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isPlaying = useRef(false);
  const reducedMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [videoOk, setVideoOk] = useState(true);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = wrapRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const runway = rect.height - window.innerHeight;
        const p = Math.min(1, Math.max(0, -rect.top / (runway || 1)));
        setProgress(p);

        const v = videoRef.current;
        if (!v) return;
        const shouldPlay = p > 0.12 && p < 0.98;
        if (shouldPlay && !isPlaying.current) {
          isPlaying.current = true;
          v.play().catch(() => {});
        } else if (!shouldPlay && isPlaying.current) {
          isPlaying.current = false;
          v.pause();
        }
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Room lights: fully lit at the top of the section, black by 40% scroll.
  const dim = Math.min(1, progress / 0.4);
  // Screen: eases up from 92% scale and 40% brightness as the lights go down.
  const rise = Math.min(1, progress / 0.5);
  const scale = reducedMotion ? 1 : 0.92 + 0.08 * rise;
  const brightness = 0.4 + 0.6 * rise;
  // Interpolate the room from page charcoal (#141311) to pure black.
  const room = `rgb(${Math.round(20 * (1 - dim))}, ${Math.round(19 * (1 - dim))}, ${Math.round(17 * (1 - dim))})`;

  return (
    <section ref={wrapRef} className="relative h-[220vh]">
      <div
        className="sticky top-0 flex h-screen flex-col items-center justify-center gap-6 overflow-hidden px-4"
        style={{ backgroundColor: room }}
      >
        <p className="eyebrow" style={{ opacity: 1 - dim * 0.6 }}>
          {eyebrow}
        </p>

        <div
          className="w-[min(92vw,64rem)] overflow-hidden rounded-xl bg-black ring-1 ring-white/10"
          style={{
            transform: `scale(${scale})`,
            filter: `brightness(${brightness})`,
            boxShadow: `0 0 ${90 * dim}px rgba(255, 90, 0, ${0.18 * dim})`,
          }}
        >
          {videoOk ? (
            <video
              ref={videoRef}
              className="aspect-video w-full object-cover"
              src="/videos/showreel-placeholder.mp4"
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
