import Link from 'next/link';
import Image from 'next/image';
import Pug from '@/public/pug.gif';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white select-none">
      <div className="container text-center flex flex-col items-center justify-center gap-5 px-4 py-16">
        <div>
          <Image src={Pug}
                 alt="Pug"
                 width={500}
                 height={500}
          />
          <p className="font-light tracking-wide sm:text-[1rem] mt-5">
            This page does not exist.
          </p>
          <Link href={"/"}>
            <p className='text-bold underline'>Go back home.</p>
          </Link>
        </div>
      </div>
    </main>
  )
}
