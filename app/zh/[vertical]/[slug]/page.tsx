import type { Metadata } from "next";
import PackagesPage from "@/components/pages/PackagesPage";
import WorkGallery from "@/components/pages/WorkGallery";
import { VERTICAL_KEYS, dictionaries, type VerticalKey } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return VERTICAL_KEYS.flatMap((vertical) =>
    [...dictionaries.zh.verticals[vertical].workOrder, "packages"].map(
      (slug) => ({ vertical, slug }),
    ),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ vertical: VerticalKey; slug: string }>;
}): Promise<Metadata> {
  const { vertical, slug } = await params;
  const v = dictionaries.zh.verticals[vertical];
  const t = slug === "packages" ? v.packages : v.work[slug];
  return { title: { absolute: t.title }, description: t.description };
}

export default async function Page({
  params,
}: {
  params: Promise<{ vertical: VerticalKey; slug: string }>;
}) {
  const { vertical, slug } = await params;
  if (slug === "packages") {
    return <PackagesPage lang="zh" vertical={vertical} />;
  }
  return <WorkGallery lang="zh" vertical={vertical} slug={slug} />;
}
