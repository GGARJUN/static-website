"use client";
import dynamic from "next/dynamic";
import { Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import { SquareArrowOutUpRight } from "lucide-react";
import { FaArrowDown, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const Approach = dynamic(() => import("./Components/Approach"));
const About = dynamic(() => import("./Components/About"));
const FAQ = dynamic(() => import("./Components/FAQ"));
const WhatWeDo = dynamic(() => import("./Components/WhatWeDo"));

const WhoWeAre = () => {
  const banners = [
    { img: "https://img.freepik.com/free-photo/colleagues-working-project-discussing-details_114579-2817.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Who We Are", },
  ];
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
    }
};
  return (
    <div>
      <div className="w-full h-[650px] 2xl:h-[700px] relative flex">
        <motion.div className="flex w-full h-full" >
          {banners.map((banner, i) => (
            <div key={i} className="w-full flex-shrink-0 h-full relative ">
              <img loading="lazy" src={banner.img} alt={banner.title} className="w-full h-full fixed -z-40 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"></div>
              <div className="absolute inset-0 flex flex-col  justify-center items-start 2xl:px-40 md:px-20 px-10 text-white">
                <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-medium mb-6 duration-500">
                  <Highlight>{banner.title}</Highlight>
                </h1>
                <Link href="/">
                  <button className="border duration-300 hover:bg-white text-white mt-6 bg-transparent md:py-3 md:px-8 py-3 px-6 rounded-md font-semibold md:text-lg hover:text-black flex items-center gap-4">
                    Read More <SquareArrowOutUpRight />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
        <div className="absolute bottom-6 w-full cursor-pointer text-white flex justify-between items-center px-10 lg:px-20">
          <div className="flex items-center gap-3 cursor-pointer" onClick={scrollToNextSection}>
            <FaArrowDown className="animate-bounce duration-800 ease-in-out" />
            <h2 className="font-semibold">SCROLL TO EXPLORE</h2>
          </div>

          <div className="md:flex items-center gap-5 hidden">
            <Link href={"https://www.facebook.com/profile.php?id=61574435144838"} target="_blank" className="hover:bg-blue-500 p-2  rounded-full  hover:scale-110 transition-all duration-300">
              <FaFacebookF />
            </Link>

            <Link href={"https://www.instagram.com/sunkeydesignsystems/"} target="_blank" className="hover:bg-blue-500 p-2 text-lg  rounded-full  hover:scale-110 transition-all duration-300">
              <FaInstagram />
            </Link>

            <Link href={"https://x.com/sunkeydesign"} target="_blank" className="hover:bg-blue-500 p-2  rounded-full  hover:scale-110 transition-all duration-300">
              <FaXTwitter />
            </Link>

            <Link href={"https://www.linkedin.com/company/106414983/"} target="_blank" className="hover:bg-blue-500 p-2  rounded-full  hover:scale-110 transition-all duration-300">
              <FaLinkedinIn />
            </Link>
          </div>

        </div>
      </div>
      <div>
        <div id="next-section" className=" py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <About />
          </div>
        </div>

        <div className="py-20  bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 ">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Approach />
          </div>
        </div>

        <div className="pt-20  bg-gray-100 ">
          <div className="">
            <WhatWeDo />
          </div>
        </div>

        {/* <div className="">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          </div>
          <ClientReview />
          <CallUs />
        </div> */}

        <div className="py-20 bg-gradient-to-r from-pink-100 via-blue-200 to-indigo-100 ">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FAQ />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre
