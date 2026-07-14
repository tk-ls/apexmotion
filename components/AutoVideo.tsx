"use client";

import { useEffect, useRef } from "react";

/**
 * Muted looping video that plays only while in the viewport — keeps pages
 * with several clips cheap to render. Swap the placeholder stock files in
 * /public/videos for real shoots (or hosted Vimeo/Mux embeds) at launch.
 */
export default function AutoVideo({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.35 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      // Every clip ships a first-frame jpg next to it (mobile browsers
      // won't paint a frame of an unplayed video, so without a poster the
      // box sits black until playback starts).
      poster={src.replace(/\.mp4$/, ".jpg")}
      muted
      loop
      playsInline
      preload="metadata"
      className={className}
    />
  );
}
