import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { baseOpenGraph } from "@/lib/metadata";
import { isIndexable, siteDescription, siteUrl } from "@/lib/site";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Argenpel",
    template: "%s | Argenpel",
  },
  description: siteDescription,
  openGraph: {
    ...baseOpenGraph,
    title: "Argenpel",
    description: siteDescription,
  },
  robots: isIndexable ? undefined : { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} bg-surface text-ink antialiased`}>
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
