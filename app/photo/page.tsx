import Image from 'next/image'
import photos from './photo.json'

export default function Photo() {
  return (
    <main className="flex min-h-screen items-center justify-center content-around select-none">
      <p className={'text-white w-[20vw]'}>col 1</p>
      <Image
        className={'w-[40vw]'}
        alt={'Image'}
        src={photos[0].ruta}
        width={100}
        height={100}
      />
      <p className={'text-white w-[20vw]'}>col 3</p>
    </main>
  )
}
