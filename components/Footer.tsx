import Link from "next/link";
import Logo from "@/components/Logo";
import { dictionaries, href, type Lang } from "@/lib/i18n";

export default function Footer({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].footer;

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-b border-line py-6">
          {t.badges.map((badge) => (
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
            <Logo lang={lang} />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              {t.blurb}
            </p>
          </div>

          <nav className="text-sm">
            <p className="eyebrow mb-4">{t.explore}</p>
            <ul className="space-y-2">
              {t.exploreLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={href(lang, link.path)}
                    className="text-cream/80 hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-sm">
            <p className="eyebrow mb-4">{t.contact}</p>
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
              <li className="text-muted">{t.servicing}</li>
            </ul>
          </div>
        </div>

        <p className="border-t border-line py-6 text-xs uppercase tracking-[0.2em] text-muted">
          © {new Date().getFullYear()} {t.rights} {/* TODO: add ABN */}
        </p>
      </div>
    </footer>
  );
}
