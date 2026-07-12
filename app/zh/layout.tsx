import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SetHtmlLang from "@/components/SetHtmlLang";

export default function ChineseLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="zh contents">
      <SetHtmlLang lang="zh" />
      <Header lang="zh" />
      <main className="flex-1">{children}</main>
      <Footer lang="zh" />
    </div>
  );
}
