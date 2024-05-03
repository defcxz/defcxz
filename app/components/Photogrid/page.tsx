'use client'

import { motion } from 'framer-motion'
import photos from '@/app/photo/photography.json'
import Image from 'next/image'
import '@/styles/animations.css'

export default function Photo() {
  return (
    <>
      {photos.fotografias.sort((a, b) => b.id - a.id).map((photo, index) =>
        <motion.div
          key={index}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.2 * index, duration: 1.5}}
          >
          <figure className='mb-10'>
            <Image
              className='img h-auto w-80 md:w-100 mx-auto md:hover:scale-150 transition-transform duration-300 ease-in-out cursor-pointer'
              src={photo.url_foto}
              alt={photo.titulo}
              width={'500'}
              height={'500'}
            />
            <figcaption className={'text-xs text-center mt-2'}>
              {photo.titulo} — {photo.fecha}
            </figcaption>
          </figure>
        </motion.div>
      )}
    </>
  )
}
