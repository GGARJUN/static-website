"use server"
import { client } from "@/lib/createClient";
import { groq } from "next-sanity";
import NewsPost from "./Components/NewsPost";

async function getData() {
  const query = groq`
  *[_type == 'news']{
    ...,
    author->,
      newsTags[]->,
  } | order(_createdAt desc)
    `;

  const posts = await client.fetch(query);

  return posts;
}


export default async function NewsPage() { 
  const posts = await getData()


  return (
    <div>
      <NewsPost posts={posts}/>
    </div>
  )
}