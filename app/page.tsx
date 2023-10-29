import Image from 'next/image'
import logo from '../public/logo.svg'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white select-none">
      <div className="container flex flex-col items-center justify-center gap-5 px-4 py-16 ">
        <Image
          className={'w-20 h-20'}
          src={logo}
          alt={'Logo'}
          priority={true}
          style={{
            filter: 'invert(1)',
          }}
        />
        <div>
          <h2 className="font-light tracking-wide sm:text-[1rem]">
            Under construction. Come back later! ✨
          </h2>
        </div>
      </div>
    </main>
  )
}
