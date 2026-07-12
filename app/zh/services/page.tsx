import type { Metadata } from "next";
import ServicesPage from "@/components/pages/ServicesPage";
import { dictionaries } from "@/lib/i18n";

export const metadata: Metadata = {
  title: { absolute: dictionaries.zh.meta.services.title },
  description: dictionaries.zh.meta.services.description,
};

export default function Page() {
  return <ServicesPage lang="zh" />;
}
