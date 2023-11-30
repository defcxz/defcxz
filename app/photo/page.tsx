import Image from 'next/image'
import photos from './photo.json'

export default function Photo() {
  return (
    <main className="flex mx-72 min-h-screen items-center justify-center select-none">
      <p className={'text-white'}>col 1</p>
      <Image
        className={'w-full'}
        alt={'Image'}
        src={photos[0].ruta}
        width={1000}
        height={1000}
      />
      <p className={'text-white'}>col 3</p>
    </main>
  )
}
