import '@notion-render/client/dist/theme.css'
import { fetchPageBlocks, fetchPageBySlug, notion } from "@/app/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import { notFound } from "next/navigation";
import * as React from "react";
import Link from "next/link";
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Metadata } from 'next';

type Props = {
  params: {
    slug: string
  }
}

export const runtime = 'edge';

export const generateMetadata = async (
  props: Props
): Promise<Metadata> => {
  const { params } = props
  const post = await fetchPageBySlug(params.slug)
  const title = (post?.properties.Title as { title: { plain_text: string }[] }).title[0].plain_text;
  return {
    title: title + ' - Mario G.',
  };
};
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
    <main className='mt-24 mx-auto w-11/12 md:max-w-2xl'>
      <header>
        <Link href={'/blog'} className='flex gap-3'>
          {'<'}
          <h1 className='text-xl font-bold'>Blog</h1>
        </Link>
      </header>
      <div className='flex items-center mt-5 justify-between'>
        <h2 className='text-lg font-bold'>{title}</h2>
        <p className='opacity-65'>{formattedDate}</p>
      </div>
      <div className='notion-render mt-10' dangerouslySetInnerHTML={{__html: html}}></div>
    </main>
  );
}
