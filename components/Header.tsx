"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/components/Logo";
import { dictionaries, href, type Lang } from "@/lib/i18n";

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 10 6" fill="none" className={className} aria-hidden>
      <path
        d="M1 1l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

function LangSwitch({ lang, className = "" }: { lang: Lang; className?: string }) {
  const pathname = usePathname() ?? "/";
  const basePath = pathname.replace(/^\/zh(?=\/|$)/, "") || "/";
  return (
    <span className={`flex items-center gap-2 text-sm font-medium ${className}`}>
      <Link
        href={href("en", basePath)}
        className={lang === "en" ? "text-text" : "text-muted hover:text-text"}
        aria-current={lang === "en" ? "true" : undefined}
      >
        EN
      </Link>
      <span className="text-line" aria-hidden>
        |
      </span>
      <Link
        href={href("zh", basePath)}
        lang="zh"
        className={lang === "zh" ? "text-text" : "text-muted hover:text-text"}
        aria-current={lang === "zh" ? "true" : undefined}
      >
        中文
      </Link>
    </span>
  );
}

export default function Header({ lang }: { lang: Lang }) {
  const t = dictionaries[lang];
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const isMenuActive = (key: string) =>
    pathname.startsWith(href(lang, `/${key}`));

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href={href(lang, "/")}>
          <Logo lang={lang} />
        </Link>

        {/* Desktop nav — hover/focus dropdowns per vertical */}
        <nav className="hidden items-center gap-6 md:flex">
          {t.nav.menus.map((menu) => (
            <div key={menu.key} className="group relative">
              <button
                type="button"
                className={`flex items-center gap-1.5 py-2 text-sm font-medium transition-colors hover:text-text ${
                  isMenuActive(menu.key) ? "text-text" : "text-muted"
                }`}
              >
                {menu.label}
                <Chevron className="h-1.5 w-2.5 transition-transform group-hover:rotate-180" />
              </button>
              <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 transition-all duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <div className="card w-56 p-2 shadow-xl shadow-black/40">
                  {menu.items.map((item) => (
                    <Link
                      key={item.path}
                      href={href(lang, item.path)}
                      className={`block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-surface hover:text-text ${
                        pathname === href(lang, item.path)
                          ? "text-text"
                          : "text-muted"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {t.nav.links.map((link) => (
            <Link
              key={link.path}
              href={href(lang, link.path)}
              className={`text-sm font-medium transition-colors hover:text-text ${
                pathname === href(lang, link.path) ? "text-text" : "text-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <LangSwitch lang={lang} />
          <Link href={href(lang, "/contact")} className="btn-solid px-5 py-2.5">
            {t.nav.cta}
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-text md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <span aria-hidden>✕</span>
          ) : (
            /* SVG burger — the ☰ glyph sits below the button's centre */
            <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden>
              <path
                d="M1 3.5h14M1 8h14M1 12.5h14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav — accordion per vertical */}
      {open && (
        <nav className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-line bg-bg px-4 pb-6 pt-2 md:hidden">
          {t.nav.menus.map((menu) => (
            <div key={menu.key} className="border-b border-line">
              <button
                type="button"
                className={`flex w-full items-center justify-between py-4 text-base font-medium ${
                  isMenuActive(menu.key) ? "text-text" : "text-text/90"
                }`}
                aria-expanded={openMenu === menu.key}
                onClick={() =>
                  setOpenMenu((k) => (k === menu.key ? null : menu.key))
                }
              >
                {menu.label}
                <Chevron
                  className={`h-1.5 w-2.5 transition-transform ${
                    openMenu === menu.key ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openMenu === menu.key && (
                <div className="pb-3">
                  {menu.items.map((item) => (
                    <Link
                      key={item.path}
                      href={href(lang, item.path)}
                      onClick={() => setOpen(false)}
                      className={`block py-2.5 pl-4 text-sm ${
                        pathname === href(lang, item.path)
                          ? "text-text"
                          : "text-muted"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {t.nav.links.map((link) => (
            <Link
              key={link.path}
              href={href(lang, link.path)}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-4 text-base font-medium text-text/90"
            >
              {link.label}
            </Link>
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
