'use client'

import {motion} from 'framer-motion'
import photos from '@/app/photography/content.json'
import Image from 'next/image'
import logo from "@/public/logo.svg";

export default function Photo() {

  return (
    <main className="grid grid-cols-1 lg:grid-cols-4 gap-5 px-5 lg:px-20 items-center justify-center pt-[7rem]">
      {photos.fotografias.map((photo, index) =>
        <motion.div
          className={'mb-5 lg:mb-0'}
          key={index}
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          transition={{ duration: 1.5}}
        >
          <figure>
            <Image
              className={'w-full h-auto'}
              src={photo.url_foto}
              alt={photo.titulo}
              width={'500'}
              height={'500'}
            />
            <figcaption className={'text-xs'}>
              {photo.titulo} —— <i>{photo.fecha}</i>
            </figcaption>
          </figure>

        </motion.div>
      )}
      <div
        className={'h-[100dvh] lg:h-auto flex justify-center items-center'}
      //   style={{
      //     gridRow: '5',
      //     gridColumn: '1 / span 4',
      // }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5}}

        >
          <p className={'text-center text-white px-10'}>
            These are some of my favorite photos, hopefully the next time you visit this page there will be more. ✨
          </p>
          <Image src={logo}
                 alt={'logo'}
                 className={'invert w-16 mx-auto my-16'}
          />
        </motion.div>
      </div>
    </main>
  )
}
