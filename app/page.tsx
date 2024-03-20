import Link from 'next/link';
import content from './content.json'

export default function Home() {
  return (
    <main className='mt-24 mx-auto w-11/12 md:max-w-2xl'>
      <header>
        <h1 className='text-xl font-bold'>{content.name}</h1>
        <p className='opacity-65'>{content.subtitle}</p>
      </header>

      <p className='mt-10 text-pretty whitespace-pre-line md:whitespace-pre'>
        {content.description}
      </p>
      <section className='mt-10'>
        <ul className='flex gap-3'>
          {content.links.map(({ name, url }) => (
            <li key={name} className='mb-3'>
              <Link className='text-pretty opacity-65 hover:opacity-100' href={url}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

    </main>
  );
}
