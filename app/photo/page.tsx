import { sql } from '@vercel/postgres'
import Image from 'next/image'
import photo from '@/public/photos/DSC01326.jpg'


export default async function Photo(): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * FROM comentario`;
  return (
    <main className="flex min-h-screen items-center justify-center">
      {rows.map((row) => (
        <div key={row.id}>
          <Image
            className={'-z-10 h-[100vh] w-auto max-w-none'}
            alt={'test image'}
            src={photo}
            quality={75}
          />
          <p className="text-sm text-center">{row.comentario}</p>
        </div>
      ))}
    </main>
  )
}
