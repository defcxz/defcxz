import { Metadata } from 'next'
import Image from 'next/image'
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
}

export default function Photo() {
  return (
    <main className="flex flex-col items-center justify-center">
      {photos.fotografias.map((photo, index) => (
        <div key={index} className="relative h-[100dvh] w-screen overflow-hidden">
          <div>
            <Image
              alt="Picture"
              className="absolute -z-10 inset-0 object-cover w-full h-full lg:w-auto lg:h-[75vh] lg:mx-auto lg:mt-[10vh]"
              height={1920}
              src={photo.url_foto}
              style={{
                aspectRatio: "1080/1920",
                objectFit: "cover",
              }}
              width={1080}
              priority={true}
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <h1 className="text-lg font-bold text-white">{photo.titulo}</h1>
              <p hidden={photo.descripcion.length == 0} className="text-sm text-white mt-2">{photo.descripcion}</p>
              <div className={'flex justify-between items-end'}>
                <div className="flex items-center gap-2 mt-4 text-xs text-white">
                  <LocateIcon className="w-3 h-3" />
                  <span>{photo.ubicacion}</span>
                </div>
                <div className="flex items-center gap-2 mt-2 text-xs text-white">
                  <span>{photo.fecha}</span>
                  <CalendarIcon className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
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
