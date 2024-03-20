'use client'

import { usePathname } from "next/navigation";
import Link from 'next/link'

export default function Navbar() {
  const pathname = usePathname();

  if(pathname === '/') {
    return null
  }

  return (
    <nav className='fixed top-0 z-[100] backdrop-blur-lg p-5 rounded-xl m-3'>
      <Link href={'/'}>
        <p className='text-md'>
          home
        </p>
      </Link>
    </nav>
  )
}

