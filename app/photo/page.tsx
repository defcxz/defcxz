import { sql } from '@vercel/postgres'
import Image from 'next/image'
import photo from '@/public/photos/DSC01326.jpg'


export default async function Photo(): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * FROM comentario`;
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden">
      {rows.map((row) => (
        <div key={row.id}>
          <Image
            className={'top-0 left-0 -z-10 h-[100vh] w-auto max-w-none'}
            alt={'test image'}
            src={photo}
          />
          <p className="text-sm">{row.comentario}</p>
        </div>
      ))}
    </main>
  )
}
