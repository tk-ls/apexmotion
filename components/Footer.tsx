import Link from "next/link";

const TRUST_BADGES = [
  "CASA-Registered Operator",
  "Fully Insured",
  "Safety Officer On-Site",
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-b border-line py-6">
          {TRUST_BADGES.map((badge) => (
            <span
              key={badge}
              className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-muted"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold text-cream">
              APEX MOTION{" "}
              <span className="text-[0.6rem] font-sans uppercase tracking-[0.35em] text-muted">
                Studios
              </span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              Immersive FPV property films and cinematic exterior photography
              for Sydney&rsquo;s premium real estate.
            </p>
          </div>

          <nav className="text-sm">
            <p className="eyebrow mb-4">Explore</p>
            <ul className="space-y-2">
              <li>
                <Link href="/portfolio" className="text-cream/80 hover:text-cream">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-cream/80 hover:text-cream">
                  Services &amp; Packages
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-cream/80 hover:text-cream">
                  The Studio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-cream/80 hover:text-cream">
                  Book a Shoot
                </Link>
              </li>
            </ul>
          </nav>

          <div className="text-sm">
            <p className="eyebrow mb-4">Contact</p>
            {/* TODO: Replace placeholder contact details before launch */}
            <ul className="space-y-2 text-cream/80">
              <li>
                <a
                  href="mailto:hello@apexmotionstudios.com.au"
                  className="hover:text-cream"
                >
                  hello@apexmotionstudios.com.au
                </a>
              </li>
              <li>
                <a href="tel:+61400000000" className="hover:text-cream">
                  0400 000 000
                </a>
              </li>
              <li className="text-muted">Servicing Greater Sydney</li>
            </ul>
          </div>
        </div>

        <p className="border-t border-line py-6 text-xs uppercase tracking-[0.2em] text-muted">
          © {new Date().getFullYear()} Apex Motion Studios {/* TODO: add ABN */}
        </p>
      </div>
    </footer>
  );
}
