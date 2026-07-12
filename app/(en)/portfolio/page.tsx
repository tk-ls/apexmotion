import type { Metadata } from "next";
import PortfolioPage from "@/components/pages/PortfolioPage";
import { dictionaries } from "@/lib/i18n";

export const metadata: Metadata = {
  title: dictionaries.en.meta.portfolio.title,
  description: dictionaries.en.meta.portfolio.description,
};

export default function Page() {
  return <PortfolioPage lang="en" />;
}
