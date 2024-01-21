import { Metadata } from 'next'
import Loading from './loading'
import Photography from '@/app/components/Photography/page'
import { Suspense } from 'react'
import Image from 'next/image'
import photos from './content.json'
import logo from '@/public/logo.svg'

export const metadata: Metadata = {
  metadataBase: new URL('https://def.works/photography'),

  title: 'Photography - Mario G.',
  description: 'My space for photography. 📸',

  openGraph: {
    url: 'https://def.works/photography',
    title: 'Photography - Mario G.',
    description: 'My space for photography. 📸',
    images: [
      {
        url: photos.fotografias[0].url_foto,
        alt: 'og image',
      },
    ],
  },

  twitter: {
    creator: '@defcxz',
    site: '@defcxz',
    card: 'summary_large_image',
    title: 'Photography - Mario G.',
    description: 'My space for photography. 📸',
    images: [
      {
        url: photos.fotografias[0].url_foto,
        alt: 'og image',
      },
    ]
  },
}

export default function Photo() {
  return (
    <Suspense fallback={ <Loading/> }>
      {/*<h5 className={'text-center opacity-70 pt-16'}>Mi little space of photography.</h5>*/}
      <Photography/>
      <Image src={logo}
             alt={'logo'}
             className={'invert w-12 mx-auto my-16'}
      />
    </Suspense>
  )
}
