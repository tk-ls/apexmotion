import type { Metadata } from "next";
import VerticalLanding from "@/components/pages/VerticalLanding";
import { VERTICAL_KEYS, dictionaries, type VerticalKey } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return VERTICAL_KEYS.map((vertical) => ({ vertical }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ vertical: VerticalKey }>;
}): Promise<Metadata> {
  const { vertical } = await params;
  const t = dictionaries.zh.verticals[vertical].landing;
  return { title: { absolute: t.title }, description: t.description };
}

export default async function Page({
  params,
}: {
  params: Promise<{ vertical: VerticalKey }>;
}) {
  const { vertical } = await params;
  return <VerticalLanding lang="zh" vertical={vertical} />;
}
