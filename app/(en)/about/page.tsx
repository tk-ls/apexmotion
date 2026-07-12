import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";
import { dictionaries } from "@/lib/i18n";

export const metadata: Metadata = {
  title: dictionaries.en.meta.about.title,
  description: dictionaries.en.meta.about.description,
};

export default function Page() {
  return <AboutPage lang="en" />;
}
