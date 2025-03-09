import { client, urlFor } from '@/lib/createClient';
import BlogBanner from '@/pages/Resources/Blog/Components/BlogBanner';
import { groq } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';

export const getPostsByTag = async (tag) => {
    const query = groq`
        *[_type == "post" && references(*[_type == "tag" && slug.current == $tag]._id)] | order(publishedAt desc) {
            title,
            description,
            slug,
            mainImage,
            publishedAt
        }
    `;
    return await client.fetch(query, { tag });
};

export default async function TagPage({ params }) {
    const posts = await getPostsByTag(params.slug);

    return (
        <div>
            <BlogBanner />
            <div className="container mx-auto py-32 px-6">
                <h1 className="text-4xl font-bold text-center text-blue-900 mb-14">Posts Tagged: {params.slug}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <Link key={post.slug.current} href={`/blog/${post.slug.current}`}>
                                <div className="bg-white rounded-xl shadow-xl p-4 hover:shadow-2xl transition">
                                    {post.mainImage && (
                                        <Image
                                            src={urlFor(post.mainImage).url()}
                                            width={300}
                                            height={300}
                                            alt={post.title}
                                            className="w-full h-[300px] object-cover rounded-lg"
                                        />
                                    )}
                                    <div className='p-6'>
                                        <h2 className="text-3xl font-semibold text-blue-800 mt-2 line-clamp-1">{post.title}</h2>
                                        <p className="text-sm mt-2 text-gray-500">{new Date(post.publishedAt).toDateString()}</p>
                                        <p className='mt-5 text-md font-medium line-clamp-3'>{post.description}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p className="text-gray-500">No posts found for this tag.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
