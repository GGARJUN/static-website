"use client";
import { useState, useMemo } from "react";
import { urlFor } from "@/lib/createClient";
import { format } from "date-fns";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import Image from "next/image";
import NewsBanner from "./NewsBanner";

const NewsPost = ({ posts = [] }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTag, setSelectedTag] = useState("Tags");
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;

    // Extract unique tags
    const tags = useMemo(() => {
        const allTags = posts.flatMap((post) => post.newsTags?.map((tag) => tag.title) || []);
        return ["Tags", ...new Set(allTags)];
    }, [posts]);

    // Filter posts based on search and tag
    const filteredPosts = useMemo(() => {
        return posts.filter((post) => {
            const matchesSearch =
                post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.tags?.some((tag) => tag.title.toLowerCase().includes(searchTerm.toLowerCase()));

            const matchesTag =
                selectedTag === "Tags" || post.newsTags?.some((tag) => tag.title === selectedTag);

            return matchesSearch && matchesTag;
        });
    }, [posts, searchTerm, selectedTag]);

    // Pagination logic
    const totalPages = Math.ceil(filteredPosts.length / blogsPerPage);
    const paginatedPosts = filteredPosts.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage);

    return (
        <div>
            <NewsBanner />
            <div className="py-20 bg-white">
                <div className="container mx-auto px-5 md:px-0">
                    <h2 className="text-4xl font-bold mb-10">All News</h2>
                    {/* Search and Filter Section */}
                    <div className="">
                        {/* Search Input */}
                        <div className="w-full max-w-xl relative">
                            <Search className="absolute top-[13px] left-2 text-muted-foreground cursor-pointer" />
                            <Input
                                type="text"
                                placeholder="Search blogs..."
                                className="border bg-gray-50 px-10 py-6 rounded-md focus:ring-2 focus:ring-blue-500"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <div className="flex items-center mt-10 gap-10">
                            <h1>Filter by:</h1>
                            {/* Category Filter */}
                            {/* <div>
                                <Select onValueChange={setSelectedCategory} value={selectedCategory}>
                                    <SelectTrigger className="w-[300px] border px-4 py-6 rounded-md focus:ring-2 focus:ring-blue-500">
                                        <SelectValue placeholder="Select a category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {categories.map((category, index) => (
                                                <SelectItem key={index} value={category}>{category}</SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div> */}

                            {/* Tag Filter */}
                            <div>
                                <Select onValueChange={setSelectedTag} value={selectedTag}>
                                    <SelectTrigger className="w-[300px] border px-4 py-6 rounded-md focus:ring-2 focus:ring-blue-500">
                                        <SelectValue placeholder="Select a tag" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {tags.map((tag, index) => (
                                                <SelectItem key={index} value={tag}>{tag}</SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    {/* Blog Posts */}
                    {paginatedPosts.length === 0 ? (
                        <p className="text-center text-gray-500 mt-10">No blog posts found.</p>
                    ) : (
                        <div className="grid md:grid-cols-3 gap-8 mt-20">
                            {paginatedPosts.map((post) => (
                                <Link key={post._id} href={`/news/${post.slug.current}`} className="block group border rounded-2xl shadow-xl">
                                    <Image src={urlFor(post.mainImage).url()} alt={post.title} width={500} height={300} className="w-full h-[300px] object-cover rounded-t-2xl" />
                                    <div className="p-6">
                                        <div className="mb-3 mt-3 flex items-center justify-between gap-10">
                                            <p className="font-medium text-muted-foreground">
                                                {post?._createdAt && format(new Date(post._createdAt), "MMMM dd, yyyy")}
                                            </p>
                                            <div className=" font-medium text-md text-blue-600">
                                                {post?.newsTags.map((item) => (
                                                    <p key={item?._id}>{item?.title}</p>
                                                ))}
                                            </div>
                                        </div>
                                        <h1 className="text-2xl font-bold text-blue-950 line-clamp-1">{post.title}</h1>
                                        <p className="mt-5 line-clamp-3">{post.description}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <Pagination className="mt-20 flex justify-center">
                            <PaginationContent>
                                <PaginationItem><PaginationPrevious onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} /></PaginationItem>
                                {[...Array(totalPages)].map((_, index) => (
                                    <PaginationItem key={index}><PaginationLink onClick={() => setCurrentPage(index + 1)}>{index + 1}</PaginationLink></PaginationItem>
                                ))}
                                <PaginationItem><PaginationNext onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} /></PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NewsPost;
