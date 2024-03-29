import { Metadata } from 'next'
import { Suspense } from 'react'
import Loader from '../components/Loader/page'
import Photogrid from '../components/Photogrid/page'
import photos from './photography.json'

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
    <main className='mt-24 mx-auto w-11/12 md:max-w-2xl'>
      <Suspense fallback={<Loader/>}>
      <header>
        <h1 className='text-xl font-bold mb-5'>Photography</h1>
      </header>
        <Photogrid/>
        <div className={'flex flex-col justify-center items-center'}>
          <p className={'text-center dark:text-white px-10'}>
            These are some of my favorite photos, hopefully the next time you visit this page there will be more. ✨
          </p>
        </div>
      </Suspense>
    </main>
  )
}
