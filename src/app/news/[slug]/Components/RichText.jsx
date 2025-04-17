import { urlFor } from "@/lib/createClient";
import Image from "next/image";
import Link from "next/link";

export const RichText = {
  types: {
    image: ({ value }) => (
      <div className="flex justify-center py-6">
        <Image
          src={urlFor(value).url()}
          alt="Post Image"
          width={700}
          height={700}
          className="object-contain rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>
    ),
  },

  listItem: {
    bullet: ({ children }) => (
      <li className="ml-10 py-2  text-lg text-blue-700 dark:text-blue-400 font-medium">
       🌟 {children}
      </li>
    ),
    number: ({ children }) => (
      <ol className="mt-4 list-decimal pl-6 space-y-2 text-lg text-blue-800 dark:text-blue-300 font-semibold">
        {children}
      </ol>
    ),
  },

  block: {
    h1: ({ children }) => (
      <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 dark:text-blue-300 leading-tight py-8">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-4xl font-bold text-blue-800 dark:text-blue-300 leading-snug py-6 border-b border-blue-500 dark:border-blue-700">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-3xl font-semibold text-blue-700 dark:text-blue-300 py-5">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-2xl font-medium text-blue-600 dark:text-blue-300 py-4">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-lg text-gray-800 mt-2 dark:text-gray-300 leading-relaxed">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-600 pl-5 italic text-lg text-blue-900 dark:text-blue-200 py-4 my-6 bg-blue-100 dark:bg-blue-800 rounded-lg shadow-md">
        {children}
      </blockquote>
    ),
  },

  marks: {
    link: ({ children, value }) => {
      const rel = value?.href.startsWith("http") ? "noopener noreferrer" : undefined;
      return (
        <Link
          href={value.href}
          target={rel ? "_blank" : "_self"}
          rel={rel}
          className="text-blue-600 dark:text-blue-400 font-semibold underline hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-200"
        >
          {children}
        </Link>
      );
    },
  },
};
