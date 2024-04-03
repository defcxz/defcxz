import '@notion-render/client/dist/theme.css'
import { fetchPageBlocks, fetchPageBySlug, notion } from "@/app/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import { notFound } from "next/navigation";
import * as React from "react";
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import {Suspense} from "react";


export default async function Page({ params }: { params: { slug: string } }) {
  const post = await fetchPageBySlug(params.slug);
  if (!post) notFound();

  const blocks = await fetchPageBlocks(post.id);

  const renderer = new NotionRenderer({
    client: notion,
  });

  const html = await renderer.render(...blocks);

  const title = (post.properties.Title as { title: { plain_text: string }[] }).title[0].plain_text;
  const created_time = (post.properties.Created as { created_time: string }).created_time;

  const formattedDate = format(new Date(created_time), 'MMMM dd, yyyy', { locale: es });

  return (
    <>
      <head>
        <title>{title}</title>
      </head>
      <main className='mt-24 mx-auto w-10/12 md:max-w-2xl'>
        <div className='flex items-center mt-5 justify-between'>
          <h2 className='text-lg font-bold'>{title}</h2>
          <p className='opacity-65'>{formattedDate}</p>
        </div>
        <div className='notion-render mt-10' dangerouslySetInnerHTML={{__html: html}}></div>
      </main>
    </>
  );
}
