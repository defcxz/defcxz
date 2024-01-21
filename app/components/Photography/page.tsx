'use client'

import { motion } from 'framer-motion'
import photos from '@/app/photography/content.json'
import { useState } from 'react';

export default function Photo() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const charVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <main className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:px-20 items-center justify-center pt-[7rem]">
      {photos.fotografias.map((photo, index) =>
        <motion.div key={index}
                    className={`${expandedIndex === index ? 'transition-all duration-500 ease-in-out fixed inset-0 h-[100dvh] z-50 rounded-none' :
                      'transition-all duration-500 ease-in-out w-11/12 mx-auto lg:w-full h-36 lg:h-64 lg:hover:z-40 lg:hover:scale-110 lg:cursor-pointer rounded-3xl'}`}
                    style={{
                      backgroundImage: `url(${photo.url_foto})`,
                      backgroundBlendMode: 'darken',
                      backgroundSize: 'cover',
                      backgroundPositionY: 'center',
                    }}
                    variants={charVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1+(index * .2), duration: 1.5 }}
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
        >
          <div className={`${expandedIndex === index ? 'absolute bottom-7 w-screen' : ''}`}>
            <h1 className={'text-xl font-bold pt-20 lg:pt-48 pl-4 lg:pl-6'}>
              {photo.titulo}
            </h1>
            <p className={`w-[90%] py-2 mx-auto text-sm font-extralight ${expandedIndex === index ? '' : 'hidden'}`}>
              {photo.descripcion}
            </p>
            <div className={'flex w-[90%] mx-auto pt-2 justify-between'}>
              <div className={'flex items-center gap-2'}>
                <CalendarIcon className={'w-3 h-3'}/>
                <p className={'text-xs'}>{photo.fecha}</p>
              </div>
              <div className={'flex items-center gap-2'}>
                <p className={'text-xs'}>{photo.ubicacion}</p>
                <LocateIcon className={'w-3 h-3'}/>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </main>
  )
}


function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}


function LocateIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}
