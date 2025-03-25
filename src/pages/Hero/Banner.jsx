"use client";
import { Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Play, Pause, SquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaArrowDown, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const banners = [
  {
    onClick: () => {
      const nextSection = document.getElementById("Engineering");
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    },
    img: "/Homepage/Engineering Design Service.jpg",
    title: "Innovative Engineering",
    subtitle: "Solutions for a Smarter Future",
    dtitle: "Engineering",
    href: "/"
  },
  {
    onClick: () => {
      const nextSection = document.getElementById("Electronic");
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    },
    img: "/Homepage/Electronic Design.jpg",
    title: "Cutting-Edge Technology",
    subtitle: "Empowering the Next Generation",
    dtitle: "Electronic",
    href: "/"
  },
  {
    onClick: () => {
      const nextSection = document.getElementById("Manufacturing");
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    },
    img: "/Homepage/Manufacturing - Banner.jpg",
    title: "Sustainable Solutions",
    subtitle: "Building a Greener Tomorrow",
    dtitle: "Manufacturing",
    href: "/"
  },
  {
    onClick: () => {
      const nextSection = document.getElementById("IoT");
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    },
    img: "/Homepage/IOT - Banner.jpg",
    title: "Smart Automation",
    subtitle: "Enhancing Efficiency & Productivity",
    dtitle: "Internet of Things",
    href: "/"
  }
];

let Engineering = () => {
  const nextSection = document.getElementById("Engineering");
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
};


const Banner = () => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Function to move to the next slide
  const nextSlide = () => setIndex((prev) => (prev + 1) % banners.length);

  // Auto-slide effect
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [index, isPlaying]);

  // Function to scroll down to the next section
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="relative flex w-full h-full group">
        <motion.div
          className="flex w-full h-full"
          initial={{ x: "100%" }}
          animate={{ x: `-${index * 100}%` }}
          transition={{ type: "spring", stiffness: 50, damping: 10 }}
        >
          {banners.map((banner, i) => (
            <div key={i} className="w-full flex-shrink-0 h-full relative">
              <img src={banner.img} alt={banner.title} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-start 2xl:px-40 md:px-20 px-10 text-white">
                {i === 0 ? (
                  <h1 className="text-4xl sm:text-5xl 2xl:text-7xl font-medium mb-6 duration-500">
                    <Highlight>{banner.title}</Highlight>
                    <br />
                    <span className="mt-6 font-normal block text-3xl md:text-5xl">{banner.subtitle}</span>
                  </h1>
                ) : (
                  <h2 className="text-4xl sm:text-5xl 2xl:text-7xl font-medium mb-6 duration-500">
                    <Highlight>{banner.title}</Highlight>
                    <br />
                    <span className="mt-6 font-normal block text-3xl md:text-5xl">{banner.subtitle}</span>
                  </h2>
                )}
                {/* <Link href={banner.href}> */}
                <button onClick={banner.onClick}
                  className="border duration-300 hover:bg-white text-white mt-6 bg-transparent md:py-3 md:px-8 py-3 px-6 rounded-md font-semibold md:text-lg hover:text-black flex items-center gap-4"
                >
                  Read More <SquareArrowOutUpRight />
                </button>
                {/* </Link> */}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Play/Pause Button */}
        <Button
          varient="outline"
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute hover:bg-white hover:text-black z-50 bottom-5 2xl:left-[60%] xl:left-[70%] left-[90%] bg-transparent border rounded-md hidden md:block"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </Button>

        {/* Navigation Buttons */}
        <div className="absolute bottom-6 z-50 2xl:left-[32%] xl:left-[30%] left-[5%] justify-start items-start hidden md:flex gap-8">
          {banners.map((_, i) => (
            <div key={i} onClick={() => setIndex(i)} className="flex flex-col justify-start items-start gap-1 cursor-pointer">
              <p className="text-white">{_.dtitle}</p>
              <button className={`w-full h-[2px] rounded-full ${i === index ? "bg-white" : "bg-gray-500"}`}></button>
            </div>
          ))}
        </div>

        {/* Scroll Down Button */}
        <div className="absolute bottom-6 cursor-pointer w-full text-white md:hidden xl:flex justify-between items-center px-5 xl:px-20">
          <div className="flex items-center gap-3 cursor-pointer" onClick={scrollToNextSection}>
            <FaArrowDown className="animate-bounce duration-800 ease-in-out" />
            <h2 className="font-semibold">SCROLL TO EXPLORE</h2>
          </div>
          <div className="md:flex items-center gap-5 hidden">
            <Link href={"https://www.linkedin.com/company/sunkey-design-systems/"} target="_blank" className="hover:bg-blue-500 p-2  rounded-full  hover:scale-110 transition-all duration-300">
              <FaFacebookF />
            </Link>

            <Link href={"https://www.linkedin.com/company/sunkey-design-systems/"} target="_blank" className="hover:bg-blue-500 p-2  rounded-full  hover:scale-110 transition-all duration-300">
              <FaXTwitter />
            </Link>

            <Link href={"https://www.linkedin.com/company/sunkey-design-systems/"} target="_blank" className="hover:bg-blue-500 p-2  rounded-full  hover:scale-110 transition-all duration-300">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
