import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import './globals.css'
import { GeistSans } from 'geist/font'

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
        {children}
        <Analytics/>
      </body>
    </html>
  )
}
