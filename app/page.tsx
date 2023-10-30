import React from 'react'


export default function Home(): React.ReactElement {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white select-none">
      <div className="container flex flex-col items-center justify-center gap-5 px-4 py-16 ">
        <p className="font-bold tracking-wide sm:text-[3rem]">
          マリオ
        </p>
        {/*Nota mental: Inspirarme en los videos de ese tipo que */}
        {/*hace reviews de cámaras re cinemáticas*/}
      </div>
    </main>
  )
}
