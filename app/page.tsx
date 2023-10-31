import React from 'react'

export default function Home(): React.ReactElement {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center select-none">
      <div className="container flex flex-col items-center justify-center px-4 py-16 ">
        <p className="animate-pulse font-regular tracking-wide text-5xl text-orange-400" style={{textShadow: "#ff9b71 1px 0 20px"}}>
          マリオ
        </p>
      </div>
    </main>
  )
}
