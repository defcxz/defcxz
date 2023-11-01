import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import og from '../public/og.jpeg'
import { Noto_Sans_JP  } from "@next/font/google";

import Nav from './components/Nav/page'
import Footer from './components/Footer/page'
import '../styles/globals.css'

let title = 'Mario G. | defcxz';
let desc = 'My humble space on the internet. ✨';
export const metadata: Metadata = {
  metadataBase: new URL('https://defcxz.vercel.app'),

  title: title,
  description: desc,

  openGraph: {
    url: 'https://defcxz.vercel.app',
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

const noto = Noto_Sans_JP({
  display: 'swap',
  subsets: ['latin-ext'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${noto.className} bg-slate-950`} >
        {/*<Nav/>*/}
        {children}
        <Analytics/>
        {/*<Footer/>*/}
      </body>
    </html>
  )
}
