import type { Metadata } from 'next'
import Head from 'next/head'
import './globals.css'

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
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <title>Ojasvi Doye</title>
        <meta name="description" content="Personal portfolio" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
