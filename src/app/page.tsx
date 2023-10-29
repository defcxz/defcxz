import Image from "next/image";
import logo from "../../public/Recurso 1.png";
// import Link from "next/link";

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
          {/*<h1 className="text-5xl font-bold tracking-wider sm:text-[2rem]">*/}
          {/*  Mario G.*/}
          {/*</h1>*/}
          <h2 className="font-light tracking-wide sm:text-[1rem]">
            {/*Web dev. Aspirant*/}
            Under construction. Come back later! ✨
          </h2>
        </div>
      </div>
    </main>
  );
}


