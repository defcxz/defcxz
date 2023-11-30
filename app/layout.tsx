import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Noto_Serif_JP  } from "@next/font/google";
import og from '../public/og.jpeg'

import Nav from './components/Nav/page'
import Footer from './components/Footer/page'
import '../styles/globals.css'

let title = 'Mario G. | defcxz';
let desc = 'My humble space on the internet. ✨';
export const metadata: Metadata = {
  metadataBase: new URL('https://def.works'),

  title: title,
  description: desc,

  openGraph: {
    url: 'https://def.works',
    title: title,
    description: desc,
    images: [
      {
        url: og.src,
        alt: 'og image',
      },
    ],
  },
}

const noto = Noto_Serif_JP({
  weight: ['300', '400', '900'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${noto.className}`} >
        {/*<Nav/>*/}
        {children}
        <Analytics/>
        {/*<Footer/>*/}
      </body>
    </html>
  )
}
