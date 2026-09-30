import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
    type: "website",
    locale: "es_AR",
    siteName: "Argenpel",
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
      </body>
    </html>
  );
}
