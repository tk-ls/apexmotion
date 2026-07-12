import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { dictionaries } from "@/lib/i18n";

export const metadata: Metadata = {
  title: { absolute: dictionaries.zh.meta.home.title },
  description: dictionaries.zh.meta.home.description,
};

export default function Page() {
  return <HomePage lang="zh" />;
}
