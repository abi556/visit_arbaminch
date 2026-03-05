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
  metadataBase: new URL('https://visitarbaminch.et'), // Replace with actual domain
  title: {
    default: 'Arba Minch — Between Two Great Waters | Official Tourism Guide',
    template: '%s | Visit Arba Minch'
  },
  description:
    'The ultimate guide to Arba Minch, Ethiopia. Discover the 40 Springs, Nech Sar National Park, Lake Chamo Crocodile Market, and the rich culture of the Gamo and Dorze people.',
  keywords: [
    'Arba Minch',
    'Ethiopia Tourism',
    'Rift Valley',
    'Nech Sar National Park',
    'Lake Chamo',
    'Lake Abaya',
    'Dorze Village',
    'Gamo Highlands',
    'Arba Minch Hotels',
    'African Safari Ethiopia'
  ],
  icons: {
    icon: '/images/fav.png',
    apple: '/images/fav.png',
  },
  openGraph: {
    title: 'Arba Minch — Heaven of Rift Valley',
    description: 'Explore the natural wonders and cultural heritage of Arba Minch, Ethiopia.',
    url: 'https://visitarbaminch.et',
    siteName: 'Visit Arba Minch',
    images: [
      {
        url: '/images/cover.png',
        width: 1200,
        height: 630,
        alt: 'Arba Minch Landscapes and Wildlife',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arba Minch — Heaven of Rift Valley',
    description: 'The ultimate guide to Arba Minch, Ethiopia.',
    images: ['/images/cover.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
