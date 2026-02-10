import React from "react"
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Space_Mono, Inter } from 'next/font/google'

import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Arba Minch — Between Two Great Waters',
  description:
    'Discover Arba Minch, Ethiopia’s gateway to the Rift Valley. Explore Nech Sar National Park, the Crocodile Market of Lake Chamo, Dorze weaving traditions, and the legendary 40 Springs.',
  keywords: [
    'Arba Minch',
    'Ethiopia tourism',
    'Rift Valley',
    'Nech Sar',
    'Lake Chamo',
    'Lake Abaya',
    'Dorze Village',
    'Crocodile Market',
  ],
  openGraph: {
    title: 'Arba Minch — Between Two Great Waters',
    description:
      'Where the Rift Valley breathes. A guide to Arba Minch, Ethiopia.',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport: Viewport = {
  themeColor: '#FAF9F6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${spaceMono.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased flex flex-col min-h-screen" suppressHydrationWarning>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
