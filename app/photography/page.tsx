import Image from 'next/image'
import photos from './content.json'

export default function Photo() {
  return (
    <main className="flex items-center justify-center">
      {photos.fotografias.map((photo, index) => (
        <div key={index} className="relative h-[100dvh] w-screen overflow-hidden">
          <div>
            <Image
              alt="Picture"
              className="absolute -z-10 inset-0 sm:w-full md:w-auto md:h-[100vh] md:mx-auto md:aspect-auto"
              height={1920}
              src={photo.url_foto}
              style={{
                aspectRatio: "1080/1920",
                objectFit: "cover",
              }}
              width={1080}
              />
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:w-100 md:w-1/2">
              <h1 className="text-lg font-bold text-white drop-shadow">{photo.titulo}</h1>
              <p className="text-sm text-white mt-2 drop-shadow">{photo.descripcion}</p>
              <div className="flex items-center gap-2 mt-4 text-xs text-white drop-shadow">
                <LocateIcon className="w-3 h-3" />
                <span>{photo.ubicacion}</span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-xs text-white">
                <CalendarIcon className="w-3 h-3" />
                <span>{photo.fecha}</span>
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