'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image'
import og from '@/public/og.jpeg'

export default function Photo() {
  const [fotografias, setFotografias] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/')
      .then((res) => JSON.stringify(res))
      .then((data) => {
        setFotografias(data);
      });
  }, []);

  return (
    <main className="flex h-[100dvh] overflow-hidden items-center justify-center">
      {fotografias.map((fotografia) => (
        <div key={fotografia.id} className="relative h-screen w-screen">
          <Image
            alt="Picture"
            className="absolute -z-10 inset-0 object-cover w-full h-full"
            height={1920}
            src={og}
            style={{
              aspectRatio: "1080/1920",
              objectFit: "cover",
            }}
            width={1080}
          />
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <h1 className="text-lg font-bold text-white">{fotografia.titulo}</h1>
            <p className="text-sm text-white mt-2">{fotografia.descripcion}</p>
          </div>
        </div>
      ))}
    </main>
  )
}
