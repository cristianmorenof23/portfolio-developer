/* eslint-disable @next/next/no-css-tags */
import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import FlyonuiScript from "@/components/FlyonuiScript";
import Head from "next/head";
import Script from "next/script"; // 🔥 Importa Script

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Cristian Moreno",
  description: "Portfolio Full stack Developer Cristian Moreno",
  icons: "/cristianmorenocontact.jpg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="/waves.min.css" />
      </Head>
      <body className={outfit.className}>
        {children}

        {/* Script optimizado con Next.js */}
        <Script src="/path/to/waves.min.js" strategy="lazyOnload" />
        
        <FlyonuiScript />
      </body>
    </html>
  );
}
