import { Client } from '@notionhq/client';
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const revalidate = 0;

export async function getStaticProps() {
  const pages = await fetchPages();

  return {
    props: {
      pages,
    },
    revalidate,
  };
}

export async function getStaticPaths() {
  const pages = await fetchPages();
  const paths = pages.map((page) => ({
    params: { slug: (page.properties.Slug as { rich_text: { plain_text: string }[] }).rich_text[0].plain_text},
  }));

  return { paths, fallback: false };
}

export async function fetchPages() {
  const res = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: "Status",
      status: {
        equals: "Publicado",
      },
    },
    sorts: [
      {
        property: "Created",
        direction: "ascending",
      },
    ],
  });
  return res.results as PageObjectResponse[];
}

export async function fetchPageBySlug(slug: string) {
  const res = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: "Slug",
      rich_text: {
        equals: slug,
      },
    },
  });
  return res.results[0] as PageObjectResponse;
}

export async function fetchPageBlocks(pageId: string) {
  const res = await notion.blocks.children.list({ block_id: pageId });
  return res.results as BlockObjectResponse[];
}
