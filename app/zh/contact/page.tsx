import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { dictionaries } from "@/lib/i18n";

export const metadata: Metadata = {
  title: { absolute: dictionaries.zh.meta.contact.title },
  description: dictionaries.zh.meta.contact.description,
};

export default function Page() {
  return <ContactPage lang="zh" />;
}
