import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ScrollToTop from "@/components/scrollToTop";
import SkipLinks from "@/components/skipLinks";
import Header from "@/components/header";
import Breadcrumb from "@/components/breadcrumb";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Claudio Eletricista e Picheleiro",
    template: "%s | Claudio Eletricista e Picheleiro",
  },
  description:
    "Serviços profissionais de eletricista, canalização e remodelação. Instalações elétricas, canalizações, reparações e muito mais.",
  keywords: [
    "eletricista",
    "picheleiro",
    "canalização",
    "Oliveira de Azeméis",
    "instalações elétricas",
    "reparações",
  ],
  authors: [{ name: "Claudio Eletricista e Picheleiro" }],
  creator: "Claudio Eletricista e Picheleiro",
  publisher: "Claudio Eletricista e Picheleiro",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://claudioeletricista.pt",
    title: "Claudio Eletricista e Picheleiro",
    description:
      "Serviços profissionais de eletricista, canalização e remodelação.",
    siteName: "Claudio Eletricista e Picheleiro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claudio Eletricista e Picheleiro",
    description:
      "Serviços profissionais de eletricista, canalização e remodelação.",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ScrollToTop />
        <SkipLinks />
        <Header />
        <Breadcrumb />
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
