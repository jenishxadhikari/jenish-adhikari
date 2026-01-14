import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'

import { SITE_INFO } from '@/config/site'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { ThemeProvider } from '@/components/theme/theme-provider'

import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin']
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  title: {
    default: `${SITE_INFO.name} - ${SITE_INFO.jobTitle}`,
    template: `%s | ${SITE_INFO.name}`
  },
  description: SITE_INFO.description,
  keywords: SITE_INFO.keywords,

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_INFO.url,
    siteName: SITE_INFO.name,
    title: SITE_INFO.name,
    description: SITE_INFO.description,
    images: [
      {
        url: SITE_INFO.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_INFO.name} - ${SITE_INFO.jobTitle}`
      }
    ]
  },

  // Twitter / X
  twitter: {
    card: 'summary_large_image',
    title: SITE_INFO.name,
    description: SITE_INFO.description,
    images: [SITE_INFO.ogImage],
    creator: '@jenishxadhikari'
  },

  // Robots and indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.className} flex min-h-screen flex-col antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
