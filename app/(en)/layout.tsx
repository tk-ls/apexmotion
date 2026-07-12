import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EnglishLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header lang="en" />
      <main className="flex-1">{children}</main>
      <Footer lang="en" />
    </>
  );
}
