"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/components/Logo";
import { dictionaries, href, type Lang } from "@/lib/i18n";

function LangSwitch({ lang, className = "" }: { lang: Lang; className?: string }) {
  const pathname = usePathname() ?? "/";
  const basePath = pathname.replace(/^\/zh(?=\/|$)/, "") || "/";
  return (
    <span
      className={`flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] ${className}`}
    >
      <Link
        href={href("en", basePath)}
        className={lang === "en" ? "text-cream" : "text-muted hover:text-cream"}
        aria-current={lang === "en" ? "true" : undefined}
      >
        EN
      </Link>
      <span className="text-line" aria-hidden>
        /
      </span>
      <Link
        href={href("zh", basePath)}
        lang="zh"
        className={lang === "zh" ? "text-cream" : "text-muted hover:text-cream"}
        aria-current={lang === "zh" ? "true" : undefined}
      >
        中文
      </Link>
    </span>
  );
}

export default function Header({ lang }: { lang: Lang }) {
  const t = dictionaries[lang];
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href={href(lang, "/")}>
          <Logo lang={lang} />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {t.nav.items.map((item) => (
            <NavLink key={item.path} lang={lang} path={item.path} label={item.label} />
          ))}
          <LangSwitch lang={lang} />
          <Link href={href(lang, "/contact")} className="btn-solid px-5 py-2.5">
            {t.nav.cta}
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border border-line text-cream md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden>{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-ink px-4 pb-6 pt-2 md:hidden">
          {t.nav.items.map((item) => (
            <MobileNavLink
              key={item.path}
              lang={lang}
              path={item.path}
              label={item.label}
              onClick={() => setOpen(false)}
            />
          ))}
          <LangSwitch lang={lang} className="border-b border-line py-4" />
          <Link
            href={href(lang, "/contact")}
            onClick={() => setOpen(false)}
            className="btn-solid mt-5 w-full"
          >
            {t.nav.cta}
          </Link>
        </nav>
      )}
    </header>
  );
}

function NavLink({ lang, path, label }: { lang: Lang; path: string; label: string }) {
  const pathname = usePathname();
  const target = href(lang, path);
  return (
    <Link
      href={target}
      className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors hover:text-cream ${
        pathname === target ? "text-cream" : "text-muted"
      }`}
    >
      {label}
    </Link>
  );
}

function MobileNavLink({
  lang,
  path,
  label,
  onClick,
}: {
  lang: Lang;
  path: string;
  label: string;
  onClick: () => void;
}) {
  const pathname = usePathname();
  const target = href(lang, path);
  return (
    <Link
      href={target}
      onClick={onClick}
      className={`block border-b border-line py-4 text-sm uppercase tracking-[0.2em] ${
        pathname === target ? "text-cream" : "text-muted"
      }`}
    >
      {label}
    </Link>
  );
}
