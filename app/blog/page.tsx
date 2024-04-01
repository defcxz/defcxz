import { fetchPages } from '@/app/lib/notion'
import Link from 'next/link'
import { format } from 'date-fns'
import * as React from "react";
import { es } from "date-fns/locale";
import { Metadata } from "next";
import photos from "@/app/photography/photography.json";

export const metadata: Metadata = {
  metadataBase: new URL('https://def.works/blog'),

  title: 'Blog - Mario G.',
  description: 'My writings.',

  openGraph: {
    url: 'https://def.works/blog',
    title: 'Blog - Mario G.',
    description: 'My writings',
    images: [
      {
        url: photos.fotografias[0].url_foto,
        alt: 'og image',
      },
    ],
  },

  twitter: {
    creator: '@defcxz',
    site: '@defcxz',
    card: 'summary_large_image',
    title: 'Blog - Mario G.',
    description: 'My writings',
    images: [
      {
        url: photos.fotografias[0].url_foto,
        alt: 'og image',
      },
    ]
  },
}

export default async function Blog() {
  const pages = await fetchPages().then((pages) => pages)

  return (
    <main className='mt-24 mx-auto w-11/12 md:max-w-2xl'>
      <div>
        <header>
          <h1 className='text-xl font-bold'>Blog</h1>
        </header>
        <div className='mt-10 flex flex-col gap-3'>
          {pages.map((page) => {
            const title = (page.properties.Title as { title: { plain_text: string }[] }).title[0].plain_text;
            const slug = (page.properties.Slug as { rich_text: { plain_text: string }[] }).rich_text[0].plain_text;
            const formattedDate = format(new Date((page.properties.Created as { created_time: string }).created_time), 'MMMM dd, yyyy', { locale: es });

            return (
              <div className='p-4 border-stone-400 dark:border-stone-600 border-[1px] rounded content-center'>
                <Link className='flex justify-between items-center hover:font-bold' key={page.id} href={`/blog/${slug}`}>
                  <h2 className='text-lg'>{title}</h2>
                  <p className='text-xs opacity-65'>{formattedDate}</p>
                </Link>
              </div>
            );
          })}
          {pages.length === 0 && <p className='text-center'>Nothing here yet. Come back soon!</p>}
        </div>
      </div>
    </main>
  )
}
