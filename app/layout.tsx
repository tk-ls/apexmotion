import type { Metadata } from "next";
import { Fraunces, Inter, Noto_Sans_SC, Noto_Serif_SC } from "next/font/google";
import "./globals.css";
import { dictionaries } from "@/lib/i18n";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

// CJK fallbacks for the /zh pages — next/font serves these as unicode-range
// slices, so English visitors download nothing extra.
const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  preload: false,
});

const notoSerifSC = Noto_Serif_SC({
  variable: "--font-noto-serif-sc",
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
      className={`${inter.variable} ${fraunces.variable} ${notoSansSC.variable} ${notoSerifSC.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink text-cream">
        {children}
      </body>
    </html>
  );
}
