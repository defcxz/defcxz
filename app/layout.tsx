import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GeistSans } from "geist/font/sans"
import Navbar from './components/Nav/page'
import Footer from './components/Footer/page'
import og from '../public/og.jpeg'

import '../styles/globals.css'

let metadataTitle = 'Mario G.';
let desc = 'This is my little space on the Internet, there is not much to see here for now, but I hope this website will grow over time.';
export const metadata: Metadata = {
  metadataBase: new URL('https://def.works'),

  title: metadataTitle,
  description: desc,

  openGraph: {
    url: 'https://def.works',
    title: metadataTitle,
    description: desc,
    images: [
      {
        url: og.src,
        alt: 'og image',
      },
    ],
  },

  twitter: {
    creator: '@defcxz',
    site: '@defcxz',
    card: 'summary_large_image',
    title: metadataTitle,
    description: desc,
    images: [
      {
        url: og.src,
        alt: 'og image',
      },
    ]
  },
}

export default function RootLayout({ children } : { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.className}>
    <body className='selection:bg-gray-900 selection:text-gray-50 dark:selection:bg-gray-200 dark:selection:text-gray-900'>
      <Navbar/>
        {children}
      <Analytics/>
      <SpeedInsights/>
      <Footer/>
    </body>
    </html>
  )
}
