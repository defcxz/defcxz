import content from './content.json';
import '@/styles/page.css';
import Link from 'next/link';

const links = [
  { name: 'projects', href: '/projects' },
  { name: 'contact', href: 'mailto:hi@def.works'},
  { name: 'ig', href: 'https://www.instagram.com/defcxz' },
]

export default function Home() {

  return (
    <main className='mt-16 mx-auto w-10/12 max-h-[100dvh] md:max-w-2xl'>
      <header>
        <h1 className='text-3xl font-bold name'>{content.name}</h1>
        <hr className='w-3/12 my-2'></hr>
        {/*<p className='opacity-65'>{content.subtitle}</p>*/}
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
