"use client";

import dynamic from "next/dynamic";
import { Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import { SquareArrowOutUpRight } from "lucide-react";
import { FaArrowDown, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

const About = dynamic(() => import("./Components/About"));
const ClientReview = dynamic(() => import("./Components/ClientReview"));
const CallUs = dynamic(() => import("./Components/CallUs"));
const FAQ = dynamic(() => import("./Components/FAQ"));
const Approach = dynamic(() => import("./Components/Approach"));


const PartnerDetails = () => {
      // Function to scroll down to the next section
      const scrollToNextSection = () => {
        const nextSection = document.getElementById("next-section");
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

  const banners = [
    { img: "https://img.freepik.com/free-photo/colleagues-working-project-discussing-details_114579-2817.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Our Partners", },
  ];

  return (
    <div>
      <div className="w-full h-[700px] relative flex">
        <motion.div className="flex w-full h-full" >
          {banners.map((banner, i) => (
            <div key={i} className="w-full flex-shrink-0 h-full relative ">
              <Image priority src={banner.img} alt={banner.title} fill className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"></div>
              <div className="absolute inset-0 flex flex-col  justify-center items-start 2xl:px-40 md:px-20 px-10 text-white">
                <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-medium mb-6 duration-500">
                  <Highlight>{banner.title}</Highlight>
                </h1>
                <button className="border duration-300 hover:bg-white text-white mt-6 bg-transparent md:py-3 md:px-8 py-3 px-6 rounded-md font-semibold md:text-lg hover:text-black flex items-center gap-4">
                  Read More <SquareArrowOutUpRight />
                </button>
              </div>
            </div>
          ))}
        </motion.div>
        <div className="absolute bottom-6 w-full cursor-pointer text-white flex justify-between items-center px-20">
          <div className="flex items-center gap-3" onClick={scrollToNextSection}>
            <FaArrowDown className="animate-bounce duration-800 ease-in-out" />
            <h2 className="font-semibold">SCROLL TO EXPLORE</h2>
          </div>
          <div className="flex items-center gap-10">
            <FaFacebookF />
            <FaXTwitter />
            <FaLinkedinIn />
          </div>
        </div>
      </div>


      <div>
        <div id="next-section" className=" py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <About />
          </div>
        </div>

        <div className="py-20  bg-gray-100 ">
          <div className="">
            <Approach />
          </div>
        </div>
        <div className="">

          <ClientReview />
          <CallUs />
        </div>

        <div className="py-20 bg-gradient-to-r from-pink-100 via-blue-200 to-indigo-100 ">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FAQ />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartnerDetails
