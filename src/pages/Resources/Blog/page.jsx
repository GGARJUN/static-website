"use client";
import { useState, useMemo } from "react";
import { urlFor } from "@/lib/createClient";
import { format } from "date-fns";
import Link from "next/link";
import BlogBanner from "./Components/BlogBanner";
import { Input } from "@/components/ui/input";
import { Search, SquareArrowOutUpRight } from "lucide-react";
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
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

const Blogs = ({ posts = [] }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;

    // Extract unique categories
    const categories = useMemo(() => {
        const allCategories = posts.flatMap((post) => post.categories.map((cat) => cat.title));
        return ["All", ...new Set(allCategories)];
    }, [posts]);

    // Filter posts based on search and category
    const filteredPosts = useMemo(() => {
        return posts.filter((post) => {
            const matchesSearch =
                post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.description.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesCategory =
                selectedCategory === "All" || post.categories.some((cat) => cat.title === selectedCategory);

            return matchesSearch && matchesCategory;
        });
    }, [posts, searchTerm, selectedCategory]);

    // Pagination logic
    const totalPages = Math.ceil(filteredPosts.length / blogsPerPage);
    const paginatedPosts = filteredPosts.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage);

    return (
        <div>
            <BlogBanner />
            <div className="py-20 bg-white">
                <div className="container mx-auto px-5 md:px-0">
                <h2 className="text-center text-4xl font-bold mb-10">All Blogs</h2>
                    {/* Search and Filter Section */}
                    <div className="container mx-auto px-5 md:px-0 mt-10 flex flex-col md:flex-row justify-between items-center gap-4">
                        
                        {/* Search Input */}
                        <div className="w-full max-w-xl relative">
                            <h2 className="text-lg mb-2">Search Blog</h2>
                            <Search className="absolute top-12 left-2 text-muted-foreground cursor-pointer" />
                            <Input
                                type="text"
                                placeholder="Search blogs..."
                                className="border bg-gray-50 cursor-pointer border-gray-300 px-10 py-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        {/* Category Filter */}
                        <div>
                            <h2 className="text-lg mb-2">Filter Blog</h2>
                            <Select onValueChange={setSelectedCategory} value={selectedCategory}>
                                <SelectTrigger className="w-[300px] border border-gray-300 px-4 py-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {categories.map((category, index) => (
                                            <SelectItem key={index} value={category}>
                                                {category}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {paginatedPosts.length === 0 ? (
                        <p className="text-center text-gray-500 mt-10">No blog posts found.</p>
                    ) : (
                        <div className="grid md:grid-cols-3 justify-center items-center gap-x-8 gap-y-20 mt-20">
                            {paginatedPosts.map((post) => (
                                <Link
                                    key={post?._id}
                                    href="/"
                                    className="block group border rounded-2xl shadow-xl "
                                >
                                    <img
                                        src={urlFor(post?.mainImage).url()}
                                        alt={post.title || "Blog Post Image"}
                                        property="true"
                                        className="w-[500px] h-[300px] object-cover rounded-t-2xl"
                                    />
                                    <div className="p-6">
                                        <div className="mb-7 mt-3 flex items-center gap-10">
                                            <p className="font-medium text-muted-foreground">
                                                {post?._createdAt && format(new Date(post._createdAt), "MMMM dd, yyyy")}
                                            </p>
                                            <div className="bg-blue-100 px-3 py-2 rounded-full border border-blue-500 font-medium text-sm">
                                                {post?.categories.map((item) => (
                                                    <p key={item?._id}>{item?.title}</p>
                                                ))}
                                            </div>
                                        </div>
                                        <h1 className="text-2xl font-bold text-blue-950 line-clamp-1">{post.title}</h1>
                                        <p className="mt-5 line-clamp-3">{post.description}</p>

                                        <div className="border my-5"></div>

                                        <div className="flex items-center gap-5">
                                            <img
                                                src={urlFor(post?.author?.image).url()}
                                                width={70}
                                                height={70}
                                                alt={post.title || "Blog Post Image"}
                                                className="rounded-full object-cover w-16"
                                            />
                                            <div>
                                                <h1 className="font-medium text-lg">{post?.author.name}</h1>
                                                <h1 className="text-muted-foreground font-medium">{post?.author.description}</h1>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 mt-8 justify-start text-blue-600">
                                            <button className="font-medium opacity-0 group-hover:opacity-100 duration-300 transition-all">
                                                Learn More
                                            </button>
                                            <span className="-translate-x-24 group-hover:translate-x-0 transition-transform duration-200">
                                                <SquareArrowOutUpRight size={18} />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}

                    {/* Pagination Section */}
                    {totalPages > 1 && (
                        <Pagination className="mt-20 flex justify-center">
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious
                                        href="#"
                                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                    />
                                </PaginationItem>

                                {[...Array(totalPages)].map((_, index) => (
                                    <PaginationItem key={index}>
                                        <PaginationLink
                                            href="#"
                                            isActive={currentPage === index + 1}
                                            onClick={() => setCurrentPage(index + 1)}
                                        >
                                            {index + 1}
                                        </PaginationLink>
                                    </PaginationItem>
                                ))}

                                <PaginationItem>
                                    <PaginationNext
                                        href="#"
                                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                    />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
