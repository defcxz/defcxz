'use client'

import { motion } from 'framer-motion'
import Loading from '@/app/components/Loader/page'
import { Suspense } from 'react'
import photos from '@/app/photography/content.json'
import Image from 'next/image'

export default function Photo() {

  return (
    <main className="grid grid-cols-1 lg:grid-cols-4 gap-5 px-5 lg:px-24 xl:px-60 items-center justify-center pt-[7rem]">
      {photos.fotografias.map((photo, index) =>
        <motion.div
          className={'mb-5 lg:mb-0'}
          key={index}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.2 * index, duration: 1.5}}
        >
          <figure>
            <Suspense fallback={<Loading/>}>
              <Image
                className={'w-full h-auto lg:object-cover lg:aspect-square lg:hover:scale-125 lg:hover:z-50 lg:transition-all lg:duration-500 lg:ease-in-out'}
                src={photo.url_foto}
                alt={photo.titulo}
                width={'500'}
                height={'500'}
              />
            </Suspense>
            <figcaption className={'text-xs'}>
              {photo.titulo} —— <i>{photo.fecha}</i>
            </figcaption>
          </figure>
        </motion.div>
      )}
    </main>
  )
}
