import { Metadata } from 'next'
import Photogrid from '../components/Photogrid/page'
import Loading from '../components/Loader/page'
import { Suspense } from 'react'
import Image from 'next/image'
import logo from '@/public/logo.svg'
import photos from './content.json'

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
    <main>
      <Photogrid/>
      <div className={'mt-40 lg:mt-36 flex flex-col justify-center items-center'}>
        <p className={'text-center dark:text-white px-10'}>
          These are some of my favorite photos, hopefully the next time you visit this page there will be more. ✨
        </p>
      </div>
    </main>
  )
}
