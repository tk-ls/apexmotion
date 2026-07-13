import type { ReactNode } from "react";
import type { Lang } from "@/lib/i18n";

/**
 * Chinese text wraps at any character by default. For headings we want line
 * breaks to land at punctuation instead. CSS has no "break at punctuation"
 * control for CJK, so split the text into clauses (punctuation stays with the
 * preceding clause) and render each as an inline-block: a clause moves to the
 * next line as a unit, and only breaks internally if it can't fit on a line
 * by itself. English text is returned untouched.
 */
export function clauses(text: string, lang: Lang): ReactNode {
  if (lang !== "zh") return text;
  // Split after sentence/clause punctuation, but never between consecutive
  // punctuation marks (e.g. "——" pairs or "。」").
  const parts = text.split(/(?<=[，。？！：；、…—])(?![，。？！：；、…—」』])/);
  if (parts.length < 2) return text;
  return parts.map((part, i) => (
    <span key={i} className="inline-block">
      {part}
    </span>
  ));
}
