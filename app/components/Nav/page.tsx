'use client'

import { usePathname } from "next/navigation";
import Link from 'next/link'

export default function Navbar() {
  const pathname = usePathname();

  if(pathname === '/') {
    return null
  }

  return (
    <nav className={'fixed py-5 pl-7 md:pl-56 z-[100]'}>
      <Link href={'/'}>
        <p
          className={'text-2xl'}
          style={{
            textShadow: '#fff 0 0 10px'
          }}
        >
          {'<'}
        </p>
      </Link>
    </nav>
  )
}

