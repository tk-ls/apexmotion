import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { dictionaries } from "@/lib/i18n";

export const metadata: Metadata = {
  title: dictionaries.en.meta.contact.title,
  description: dictionaries.en.meta.contact.description,
};

export default function Page() {
  return <ContactPage lang="en" />;
}
