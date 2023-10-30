import React from 'react'
import Image from 'next/image'

export default function Home(): React.ReactElement {
  // Priorizar la carga de la imagen del logo
  const priorityImage = React.useMemo(() => {
    return <Image
      priority={true}
      width={100}
      height={100}
      src={'https://storage.googleapis.com/def-bucket-01/logo.svg'}
      alt={'Logo'}
      quality={5}
      placeholder={'empty'}
      style={{
        filter: 'invert(1)',
      }}
    />
  }, [])

  // Lazy loading de otros elementos
  const lazyLoadedContent = React.useMemo(() => {
    return <div>
      <p className="font-light tracking-wide sm:text-[1rem]">
        Under construction. Come back later! ✨
      </p>
    </div>
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white select-none">
      <div className="container flex flex-col items-center justify-center gap-5 px-4 py-16 ">
        {priorityImage}
        {lazyLoadedContent}
      </div>
    </main>
  )
}
