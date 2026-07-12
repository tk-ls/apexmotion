import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";
import { dictionaries } from "@/lib/i18n";

export const metadata: Metadata = {
  title: { absolute: dictionaries.zh.meta.about.title },
  description: dictionaries.zh.meta.about.description,
};

export default function Page() {
  return <AboutPage lang="zh" />;
}
