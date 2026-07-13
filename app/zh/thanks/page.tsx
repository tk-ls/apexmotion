import type { Metadata } from "next";
import ThanksPage from "@/components/pages/ThanksPage";

export const metadata: Metadata = {
  title: { absolute: "已收到询价 | 一鸣惊人传媒" },
  robots: { index: false },
};

export default function Page() {
  return <ThanksPage lang="zh" />;
}
