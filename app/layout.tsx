import type { Metadata } from "next";
import { Inter, Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import { dictionaries } from "@/lib/i18n";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// CJK fallback for the /zh pages — next/font serves this as unicode-range
// slices, so English visitors download nothing extra.
const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: dictionaries.en.meta.home.title,
    template: "%s | Apex Motion Studios",
  },
  description: dictionaries.en.meta.home.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${inter.variable} ${notoSansSC.variable} h-full antialiased`}
      // Inline so the very first paint is already dark — even if the
      // stylesheet is still revalidating there is no white flash.
      style={{ backgroundColor: "#121212", color: "#f2f2f2", colorScheme: "dark" }}
    >
      <body className="flex min-h-full flex-col bg-bg text-text">
        {children}
      </body>
    </html>
  );
}
