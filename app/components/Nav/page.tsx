'use client'

import { usePathname } from "next/navigation";
import Link from 'next/link'

export default function Navbar() {
  const pathname = usePathname();
  let actualRoute = '/ ';

  if (pathname.startsWith('/blog')) {
    actualRoute = actualRoute + 'blog';
  }
  else if (pathname.startsWith('/projects')) {
    actualRoute = actualRoute + 'projects';
  }
  else if (pathname.startsWith('/photography')) {
    actualRoute = actualRoute + 'photography';
  }
  else {
    actualRoute = '';
  }

  return (
    <nav className='fixed top-0 z-[100] backdrop-blur-lg p-5 rounded-xl mt-3 ml-3 md:ml-[10%]'>
      <Link href={'/'}>
        <p className='text-md'>
          home {actualRoute}
        </p>
      </Link>
    </nav>
  )
}

