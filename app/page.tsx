import Link from 'next/link';

export default function Home() {
  return (
    <main className={'flex min-h-[100dvh] items-center justify-center select-none'}>
      <div className="container py-16 ">
        <h1
          className="flex justify-center px-3 font-bold text-[4rem]">
          マリオ
        </h1>
        <div
          className={'text-center mt-5'}
        >
          <Link href={'https://github.com/defcxz'} target='_blank' className={'font-bold italic mx-2 underline'}>
            Software Engineer.
          </Link>
          <br></br>
          <Link href={'/photography'} className={'font-bold italic mx-2 underline'}>
            Photographer
          </Link> wannabe.
        </div>
      </div>
    </main>
  );
}
