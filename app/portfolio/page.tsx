import type { Metadata } from "next";
import Link from "next/link";
import VideoPlaceholder from "@/components/VideoPlaceholder";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "A curated selection of one-take FPV property tours and cinematic exterior films for Sydney real estate.",
};

/**
 * SAMPLE projects — replace with real shoots before launch.
 * Keep the grid curated: 6–9 of your strongest projects only.
 */
const PROJECTS = [
  { suburb: "Mosman", type: "Harbourside Residence", note: "Sample project" },
  { suburb: "Barangaroo", type: "Penthouse", note: "Sample project" },
  { suburb: "Vaucluse", type: "Estate & Grounds", note: "Sample project" },
  { suburb: "Surry Hills", type: "Warehouse Conversion", note: "Sample project" },
  { suburb: "Palm Beach", type: "Coastal Retreat", note: "Sample project" },
  { suburb: "Kellyville", type: "Development Showcase", note: "Sample project" },
];

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <p className="eyebrow">Our Work</p>
      <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-cream text-balance sm:text-6xl">
        Every property has a story.{" "}
        <span className="block">We film it in one take.</span>
      </h1>
      <p className="mt-6 max-w-xl text-muted">
        A curated selection of immersive FPV tours and cinematic exterior
        films. Best experienced with sound on.
      </p>

      {/* Featured film — your single strongest one-take tour */}
      <div className="mt-14 border-t border-line pt-14">
        <VideoPlaceholder
          label="Featured film — your strongest one-take FPV tour"
          sublabel="Full-width hero · click-to-play with poster frame"
        />
      </div>

      {/* Project grid */}
      <div className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <article key={`${project.suburb}-${project.type}`}>
            <VideoPlaceholder
              label={`${project.suburb} — ${project.type}`}
              sublabel={project.note}
            />
            <div className="mt-4 flex items-baseline justify-between border-t border-line pt-3">
              <div>
                <h2 className="font-display text-lg font-semibold text-cream">
                  {project.suburb}
                </h2>
                <p className="text-xs uppercase tracking-[0.15em] text-muted">
                  {project.type}
                </p>
              </div>
              <p className="text-xs text-muted">
                {String(i + 1).padStart(2, "0")}
              </p>
            </div>
            {/* Add a one-line result per project when available,
                e.g. "Sold prior to auction" — results sell to agents. */}
          </article>
        ))}
      </div>

      <div className="mt-20 border-t border-line pt-14">
        <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-cream text-balance sm:text-4xl">
          Want your listing to look like this?
        </h2>
        <Link href="/contact" className="btn-solid mt-8">
          Check Availability for Your Listing
        </Link>
      </div>
    </div>
  );
}
