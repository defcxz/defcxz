import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { GeistSans } from 'geist/font'
import Nav from '@/app/components/Nav/page'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Mario G. | defcxz',
  description: 'My humble space on the internet. ✨',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Nav/>
        {children}
        <Analytics/>
      </body>
    </html>
  )
}
