import { Client } from '@notionhq/client';
import React from "react";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";


export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});



export const fetchPages = (async () => {
  const res = await notion.databases
    .query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: "Status",
        status: {
          equals: "Publicado",
        }
      },
      sorts: [
        {
          property: "Created",
          direction: "ascending"
        }
      ]
    });
  return res.results as PageObjectResponse[];
});


export const fetchPageBySlug = (async (slug: string) => {
  const res = await notion.databases
    .query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: "Slug",
        rich_text: {
          equals: slug,
        },
      },
    });
  return res.results[0] as PageObjectResponse;
});

export const fetchPageBlocks = async (pageId: string) => {
  const res = await notion.blocks.children
    .list({ block_id: pageId });
  return res.results as BlockObjectResponse[];
};
