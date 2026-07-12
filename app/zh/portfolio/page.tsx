import type { Metadata } from "next";
import PortfolioPage from "@/components/pages/PortfolioPage";
import { dictionaries } from "@/lib/i18n";

export const metadata: Metadata = {
  title: { absolute: dictionaries.zh.meta.portfolio.title },
  description: dictionaries.zh.meta.portfolio.description,
};

export default function Page() {
  return <PortfolioPage lang="zh" />;
}
