import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getContent(contentType) {
  try {
    const res = await client.getEntries({ content_type: contentType,  include: 10, });
    console.log("✅ Contentful API Response:", res.items);
    return res.items;
  } catch (error) {
    console.error("❌ Error fetching Contentful data:", error.message);
    return [];
  }
}
