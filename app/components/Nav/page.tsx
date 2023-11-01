import Image from 'next/image'
import logo from '@/public/logo.svg'
export default function Nav() {
  return (
    <nav className={'fixed p-4 backdrop-blur w-100'}>
      <div className={'invert w-10 h-10'}>
        <Image
          src={logo}
          alt="logo"
          width={100}
          height={100}
        />
      </div>
    </nav>
  )
}
