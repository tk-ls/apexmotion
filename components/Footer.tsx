import Link from "next/link";
import Logo from "@/components/Logo";
import { dictionaries, href, type Lang } from "@/lib/i18n";

export default function Footer({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].footer;

  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-b border-line py-6">
          {t.badges.map((badge) => (
            <span
              key={badge}
              className="flex items-center gap-2 text-sm font-medium text-muted"
            >
              <span
                className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/10 text-xs text-accent"
                aria-hidden
              >
                ✓
              </span>
              {badge}
            </span>
          ))}
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-3">
          <div>
            <Logo lang={lang} />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              {t.blurb}
            </p>
          </div>

          <nav className="text-sm">
            <p className="mb-4 font-semibold text-text">{t.explore}</p>
            <ul className="space-y-2">
              {t.exploreLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={href(lang, link.path)}
                    className="text-muted hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-sm">
            <p className="mb-4 font-semibold text-text">{t.contact}</p>
            <ul className="space-y-2 text-muted">
              <li>
                <a
                  href="mailto:hi@apexmotion.com.au"
                  className="hover:text-accent"
                >
                  hi@apexmotion.com.au
                </a>
              </li>
              <li>
                <a href="tel:+61405521118" className="hover:text-accent">
                  0405 521 118
                </a>
              </li>
              <li>{t.servicing}</li>
            </ul>
          </div>
        </div>

        <p className="border-t border-line py-6 text-xs text-muted">
          © {new Date().getFullYear()} {t.rights} {/* TODO: add ABN */}
        </p>
      </div>
    </footer>
  );
}
