import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white select-none">
      <div className="container flex flex-col items-center justify-center gap-5 px-4 py-16 ">
        <div>
          <p className="font-light tracking-wide sm:text-[1rem]">
            This page does not exist. :p
          </p>
          <Link href={"/"}>
            <p className='text-bold text-center underline'>Go back home.</p>
          </Link>
        </div>
      </div>
    </main>
  )
}
