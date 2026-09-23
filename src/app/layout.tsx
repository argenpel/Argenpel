import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Argenpel",
    template: "%s | Argenpel",
  },
  description: "Sitio institucional y catálogo de productos de Argenpel.",
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
