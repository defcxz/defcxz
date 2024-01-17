import { sql } from '@vercel/postgres'
import Image from 'next/image'
import { JSX, SVGProps } from 'react';

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default async function Photo(): Promise<JSX.Element> {
  const {rows} = await sql`SELECT f.titulo title, 
                                                    f.foto photo, 
                                                    f.descripcion description, 
                                                    f.fecha date, 
                                                    u.descripcion location  
                                              FROM fotografia f, 
                                                    ubicacion u 
                                              WHERE f.ubicacion_id = u.id`;

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="relative h-screen w-screen">
        { rows.map((row) => {
          const base64Image = row.photo.toString('base64')
          const imageUrl = `data:image/jpeg;base64,${base64Image}`
          return (
            <div key={row.id}>
              <Image
                alt="Picture"
                className="absolute -z-10 inset-0 object-cover w-full h-full"
                height={1920}
                src={imageUrl}
                style={{
                  aspectRatio: "1080/1920",
                  objectFit: "cover",
                }}
                width={1080}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                {/*TODO que el texto tenga una animación de entrada*/}
                <h1 className="text-lg font-bold text-white">{row.title}</h1>
                <p className="text-sm text-white mt-2">{row.description}</p>
                <div className="flex items-center gap-2 mt-4 text-xs text-white">
                  <LocateIcon className="w-3 h-3"/>
                  <span>{row.location}</span>
                </div>
                <div className="flex items-center gap-2 mt-2 text-xs text-white">
                  <CalendarIcon className="w-3 h-3"/>
                  <span>{capitalizeFirstLetter(row.date.toLocaleString("es-CL", {month: 'long', year: 'numeric'}))}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}

function CalendarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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


function LocateIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
