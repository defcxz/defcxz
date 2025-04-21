import Image from 'next/image'

export default function Footer() {
    return (
        <Image
            src='/logo.svg'
            alt='footer-logo'
            width={10}
            height={10}
            className='my-20 w-11 h-11 mx-auto dark:invert'/>
    )
}
