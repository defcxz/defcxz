'use client'

import { usePathname } from "next/navigation";
import Link from 'next/link'

export default function Navbar() {
  const pathname = usePathname();

  if(pathname === '/') {
    return null
  }

  let paths = [
    {
      path: '/',
      title: ''
    },
    {
      path: '/photography',
      title: 'Photography'
    },
    {
      path: '/photography/upload',
      title: 'Upload Photo'
    },
    {
      path: '/api',
      title: 'API Administration'
    }
  ]

  let titlePage = pathname === '/' ? '' : paths.find((path) => path.path === pathname)?.title;

  return (
    <nav className={'flex gap-3 items-center fixed pt-5 pb-5 md:px-60 w-screen bg-gradient-to-b from-black sm:justify-start justify-center z-[100]'}>
      <Link href={'/'}>
        <p
          className={'font-bold text-2xl'}
          style={{
            textShadow: '#fff 0 0 10px'
          }}
        >
          マリオ
        </p>
      </Link>
      <p hidden={pathname === '/'} className={'text-3xl'}>/</p>
      <p className={'tracking-wider mt-1 text-lg'}>{titlePage}</p>
    </nav>
  )
}

