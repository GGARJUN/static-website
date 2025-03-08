"use server"
import { client } from "@/lib/createClient";
import { groq } from "next-sanity";
import { urlFor } from "@/lib/createClient";
import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowDown, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Blogs from "@/pages/Resources/Blog/page";


async function getData() {
  const query = groq`
  *[_type == 'post']{
    ...,
    author->,
      categories[]->,
  } | order(_createdAt asc)
    `;

  const posts = await client.fetch(query);

  return posts;
}


export default async function BlogPage() { 
  const posts = await getData()


  return (
    <div>
      <Blogs posts={posts}/>
    </div>
  )
}


