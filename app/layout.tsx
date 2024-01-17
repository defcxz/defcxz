import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Noto_Serif_JP  } from 'next/font/google'
import Navbar from './components/Nav/page'
import og from '../public/og.jpeg'

import '../styles/globals.css'

let metadataTitle = 'Mario G. | defcxz';
let desc = 'My humble space on the internet. ✨';
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

const noto = Noto_Serif_JP({
  weight: ['300', '400', '900'],
  subsets: ['latin'],
})

export default function RootLayout({ children } : { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body className={`${noto.className}`}>
      <Navbar/>
        {children}
      <Analytics/>
      <SpeedInsights/>
    </body>
    </html>
  )
}
