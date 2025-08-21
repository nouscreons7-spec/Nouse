import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getContent(contentType) {
  try {
    const res = await client.getEntries({ content_type: contentType,  include: 3, });

    return res.items;
  } catch (error) {
    console.error("❌ Error fetching Contentful data:", error.message);
    return [];
  }
}

const client2 = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID_SECONDARY,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN_SECONDARY,
});

export async function getContent2(contentType) {
  try {
    const res = await client2.getEntries({ content_type: contentType,  include: 3, });
  
    return res.items;
  } catch (error) {
    console.error("❌ Error fetching Contentful data:", error.message);
    return [];
  }
}