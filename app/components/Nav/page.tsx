'use client'

import { usePathname } from "next/navigation";
import Link from 'next/link'

export default function Navbar() {
  const pathname = usePathname();

  if(pathname === '/') {
    return null
  }

  return (
    <nav className='fixed top-0 w-screen z-[100] backdrop-blur-lg'>
      <Link href={'/'}>
        <p className='text-md my-4 mx-auto w-11/12 md:w-5/6'>
          home
        </p>
      </Link>
    </nav>
  )
}

