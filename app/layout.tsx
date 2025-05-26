import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: 'Ojasvi Doye',
  description: 'Personal portfolio',
  generator: 'Next.js',
    icons: {
    icon: '/favicon.png', 
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <title>Ojasvi Doye</title>
        <meta name="description" content="Personal portfolio" />
      </Head>
      <body className="bg-zinc-950">{children}</body>
    </html>
  );
}
