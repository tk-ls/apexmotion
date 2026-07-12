"use client";

import { useEffect } from "react";

/**
 * The root layout renders <html lang="en-AU"> for the whole site; nested
 * layouts can't override it in the App Router, so the /zh section corrects
 * the document language on the client for screen readers and search engines.
 */
export default function SetHtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = "en-AU";
    };
  }, [lang]);
  return null;
}
