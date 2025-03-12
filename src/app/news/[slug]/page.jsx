import { client, urlFor } from '@/lib/createClient';

import { groq, PortableText } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RichText } from './Components/RichText';
import { format } from 'date-fns';
import { FaArrowRight, FaFacebook, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import NewsBanner from '@/pages/Resources/News/Components/NewsBanner';


// Fetch Single Blog Data
export const getPostData = async (slug) => {
    const query = groq`
        *[_type == 'news' && slug.current == "${slug}"]{
            "currentSlug": slug.current,
            ...,
            body,
            author->,
            newsTags[]->,
        }[0]
    `;
    return await client.fetch(query);
};

// Fetch Related Posts (Matches both categories & tags)
export const getRelatedPosts = async (tags, excludeSlug) => {
    const query = groq`
        *[_type == 'news' && slug.current != $excludeSlug && (
            count(tags[@._ref in $tags]) > 0
        )] | order(publishedAt desc) [0...3] {
            title,
            "slug": slug.current,
            "mainImage": mainImage.asset->url
        }
    `;

    return await client.fetch(query, {
        tags,
        excludeSlug
    });
};

// Fetch Recent Posts
export const getRecentPosts = async () => {
    const query = groq`
        *[_type == 'news'] | order(publishedAt desc) [0...3] {
            title,
            slug,
            mainImage
        }
    `;
    return await client.fetch(query);
};

// Get All Tags with Post Count
export const getTagsWithPostCount = async () => {
    const query = groq`
        *[_type == "newsTag"]{
            _id,
            title,
            "slug": slug.current,
            "postCount": count(*[_type == "newsTags" && references(^._id)])
        } | order(postCount desc)
    `;
    return await client.fetch(query);
};


export default async function SingleNewsArticle({ params }) {
    const post = await getPostData(params.slug);
    const categories = post.categories?.map(c => c._ref) || [];
    const tags = post.tags?.map(t => t._ref) || [];

    const relatedPosts = await getRelatedPosts(categories, tags, params.slug);
    const recentPosts = await getRecentPosts();
    const allTags = await getTagsWithPostCount();


    return (
        <div className="bg-gray-50 text-gray-900">
            <NewsBanner />
            <div className="container mx-auto py-20 px-10 md:px-0">

                <div className='grid grid-cols-12 gap-10'>
                    {/* Blog Main Content */}
                    <div className=" md:col-span-9 col-span-12    rounded-lg">
                        <div className="flex flex-wrap gap-2 ">
                            {post?.newsTag?.map((item, index) => (
                                <span key={`${item?._id || index}`} className=" text-blue-600  rounded-full text-xl font-semibold">
                                    {item?.title}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-4xl font-bold text-blue-900 mt-6">{post?.title}</h1>
                        <p className="mt-4 text-lg text-gray-700">{post?.description}</p>
                        <div className='flex items-end justify-between'>
                            <div className="flex items-center gap-4 mt-6">
                                <Image
                                    src={urlFor(post?.author?.image).url()}
                                    width={50}
                                    height={50}
                                    alt="Author Image"
                                    className="w-14 h-14 rounded-full object-cover"
                                />
                                <div>
                                    <p className="text-lg font-semibold text-blue-900">{post?.author?.name}</p>
                                    <p className="text-gray-500 text-sm">{post?.author?.description}</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-end  space-x-6 text-gray-600">
                                <p className="text-sm">{post?._createdAt && format(new Date(post._createdAt), "MMMM dd, yyyy")}</p>
                                <div className='h-2 w-2 rounded-full bg-blue-600'></div>
                                <div className='flex justify-end  items-center gap-4 '>
                                    <h2>Share</h2>
                                    <div className='flex items-center gap-3 text-muted-foreground'>
                                        <FaFacebook size={24} />
                                        <FaXTwitter size={24} />
                                        <FaLinkedin size={24} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='border w-full my-10'></div>
                        <Image
                            src={urlFor(post?.mainImage).url()}
                            width={800}
                            height={450}
                            alt="Main Image"
                            className="w-full h-[400px] object-cover rounded-lg "
                        />

                        <div className="my-6">
                            <PortableText value={post?.body} components={RichText} />
                        </div>
                        <div className='border w-full'></div>
                        <h2 className='my-5 flex items-center gap-3 font-bold text-xl'>
                            TAGS: <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm font-semibold">
                                {post?.newsTags?.map(tag => tag.title).join(', ')}
                            </span>
                        </h2>

                        <div className='border w-full'></div>
                        <div className='flex justify-end  items-center gap-4 mt-5'>
                            <h2>Share</h2>
                            <div className='flex items-center gap-3 text-muted-foreground'>
                                <FaFacebook size={24} />
                                <FaXTwitter size={24} />
                                <FaLinkedin size={24} />
                            </div>
                        </div>
                    </div>


                    {/* Recent Posts */}
                    <div className='md:col-span-3 col-span-12'>
                        <div className=''>
                            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Recent Posts</h2>
                            <div className="flex flex-col gap-4">
                                {recentPosts.map((item) => (
                                    <Link key={item.slug.current} href={`/blog/${item.slug.current}`}>
                                        <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-md transition">
                                            <Image
                                                src={urlFor(item.mainImage).url()}
                                                width={80}
                                                height={80}
                                                alt="Recent Post Image"
                                                className="w-20 h-20 rounded-lg object-cover"
                                            />
                                            <div>
                                                <p className="text-lg font-medium text-blue-800 line-clamp-1">{item.title}</p>
                                                <div className="flex items-center mt-4 space-x-6 text-gray-600">
                                                    <p className="text-sm">{post?._createdAt && format(new Date(post._createdAt), "MMMM dd, yyyy")}</p>

                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            <div className='w-full  bg-slate-200 mt-10 rounded-lg p-6'>
                                <h2 className='text-2xl mb-5 '>Explore what's next in engineering</h2>
                                <button className='flex items-center gap-3 bg-blue-600 px-6 py-3 font-semibold text-white rounded-lg group'>Learn More <FaArrowRight className='group-hover:translate-x-1 transition-all duration-300' /></button>
                            </div>

                            <div className='mt-10 rounded-lg relative'>
                                <img src="https://hcltech.imgix.net/sites/default/files/sidebar-advertisement/2024-08/cloud-banner-389-507-pixel-1.webp?auto=compress&fit=crop&ixlib=php-3.3.1" alt="" className='rounded-lg' />
                                <div className='absolute top-6 left-6 '>
                                    <h2 className=' text-white text-5xl'>Strategy and solutions to make innovation a habit</h2>
                                    <button className='flex items-center gap-3 mt-5 bg-blue-600 px-6 py-3 font-semibold text-white rounded-lg group'>Learn More <FaArrowRight className='group-hover:translate-x-1 transition-all duration-300' /></button>
                                </div>
                            </div>
                            {/* All Tags */}
                            {/* <h2 className="text-2xl font-semibold text-blue-900 mt-14">Tags</h2>
                            <div className="flex flex-wrap gap-x-3 gap-y-10 mt-7">
                                {allTags.length > 0 ? (
                                    allTags.map((tag, index) => (
                                        <Link key={tag._id || index} href={`/tags/${tag.slug}`} passHref className='hover:scale-105'>
                                            <span className="cursor-pointer bg-blue-100 border border-blue-600 text-gray-900 px-5 py-3 rounded-lg text-md font-semibold hover:bg-blue-200 transition ">
                                                {tag.title} ({tag.postCount})
                                            </span>
                                        </Link>
                                    ))
                                ) : (
                                    <p className="text-gray-500">No tags found.</p>
                                )}
                            </div> */}
                        </div>
                    </div>
                </div>



                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">

                    <div>
                        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Related Posts</h2>
                        <div className="space-y-4">
                            {relatedPosts.length > 0 ? (
                                relatedPosts.map((item) => (
                                    <Link key={item.slug.current} href={`/blog/${item.slug.current}`}>
                                        <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-md transition">
                                            <Image
                                                src={urlFor(item.mainImage).url()}
                                                width={80}
                                                height={80}
                                                alt="Related Post Image"
                                                className="w-20 h-20 rounded-lg object-cover"
                                            />
                                            <p className="text-lg font-medium text-blue-800">{item.title}</p>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <p className="text-gray-500">No related posts found.</p>
                            )}
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}
