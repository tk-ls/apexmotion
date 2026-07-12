import type { Metadata } from "next";
import ServicesPage from "@/components/pages/ServicesPage";
import { dictionaries } from "@/lib/i18n";

export const metadata: Metadata = {
  title: dictionaries.en.meta.services.title,
  description: dictionaries.en.meta.services.description,
};

export default function Page() {
  return <ServicesPage lang="en" />;
}
