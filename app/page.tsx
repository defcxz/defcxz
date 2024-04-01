import content from './content.json'
import Link from 'next/link';

const links = [
  { name: 'blog', href: '/blog' },
  { name: 'projects', href: '/projects' },
  { name: 'photo', href: '/photography' },
  { name: 'contact', href: 'mailto:hi@def.works'},
  { name: 'ig', href: 'https://www.instagram.com/defcxz' },
]

export default function Home() {
  return (
    <main className='mt-24 mx-auto w-11/12 md:max-w-2xl'>
      <header>
        <h1 className='text-xl font-bold'>{content.name}</h1>
        <p className='opacity-65'>{content.subtitle}</p>
      </header>

      <p className='mt-10 text-pretty whitespace-pre-wrap'>
        {content.description}
      </p>
      <section className='mt-10'>
        <ul className='flex gap-3'>
          {links.map(({ name, href }) => (
            <li key={name} className='mb-3'>
              <Link className='text-pretty opacity-65 hover:opacity-100' href={href}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

    </main>
  );
}
