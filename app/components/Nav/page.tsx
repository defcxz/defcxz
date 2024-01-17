'use client'
import { usePathname } from "next/navigation";
export default function Navbar() {

  const pathname = usePathname();

  let paths = [
    {
      path: '/',
      title: ''
    },
    {
      path: '/photo',
      title: 'Photo'
    },
    {
      path: '/photo/admin',
      title: 'Admin Panel'
    },
  ]
  let titlePage = pathname === '/' ? '' : paths.find((path) => path.path === pathname)?.title;

  return (
    <nav className={'flex gap-3 items-center fixed pt-5 pb-5 md:px-60 w-screen bg-gradient-to-b from-black sm:justify-start justify-center ...'}>
      <p
        className={'font-bold text-2xl'}
        style={{
          textShadow: '#fff 0 0 10px'
        }}
      >
        mg.
      </p>
      <p hidden={pathname === '/'} className={'text-3xl'}>/</p>
      <p className={'tracking-wider mt-1 text-lg'}>{titlePage}</p>
    </nav>
  )
}

