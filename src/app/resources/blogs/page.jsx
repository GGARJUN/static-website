"use server"
import { client } from "@/lib/createClient";
import { groq } from "next-sanity";
import BlogPost from "./Components/BlogPost";




async function getData() {
  const query = groq`
  *[_type == 'post']{
    ...,
    author->,
      categories[]->,
      tags[]->,
  } | order(_createdAt desc)
    `;

  const posts = await client.fetch(query);

  return posts;
}


export default async function BlogPage() { 
  const posts = await getData()
  
  return (
    <div>
      <BlogPost posts={posts}/>
    </div>
  )
}


