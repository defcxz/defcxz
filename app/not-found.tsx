import Image from 'next/image'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white select-none">
      <div className="container flex flex-col items-center justify-center gap-5 px-4 py-16 ">
        <Image
          priority={true}
          width={500}
          height={500}
          src={'https://media.tenor.com/laSBfhRhTEYAAAAd/guy-arguing.gif'}
          alt={'lol'}
        />
        <div>
          <p className="font-light tracking-wide sm:text-[1rem]">
            This page does not exist. :p
          </p>
        </div>
      </div>
    </main>
  )
}
