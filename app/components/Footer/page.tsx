import Image from 'next/image'

export default function Footer() {
  return(
    <footer className='mt-20 dark:invert'>
      <Image src='/logo.svg' alt='footer-logo' width={10} height={10} className='w-11 h-11 mx-auto'/>
    </footer>
  )
}
