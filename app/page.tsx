import Link from 'next/link';

const links = [
  { name: 'projects', href: '/projects' },
  { name: 'photo', href: '/photography' },
  { name: 'contact', href: 'mailto:hi@def.works'},
  { name: 'ig', href: 'https://www.instagram.com/defcxz' },
  { name: 'blog (soon)', href: '' }
]

export default function Home() {
  return (
    <main className='mt-24 mx-auto w-10/12 md:max-w-2xl'>
      <header>
        <h1 className='text-xl font-bold'>Mario Gómez U.</h1>
        <p className='opacity-65'>Software Engineer</p>
      </header>

      <p className='mt-10 text-pretty'>
        Inspired by the constant evolution of technology, I am a guy based on Santiago, Chile, who loves to learn new things and apply craft innovation-driven products and solutions.
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
