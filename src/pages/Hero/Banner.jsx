"use client";
import { Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Play, Pause, SquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaArrowDown, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
const banners = [
  { img: "/banner1.png", title: "Innovative Engineering", subtitle: "Solutions for a Smarter Future", dtitle: "Engineering" },
  { img: "/banner2.jpg", title: "Cutting-Edge Technology", subtitle: "Empowering the Next Generation", dtitle: "Electronic" },
  { img: "/banner3.jpg", title: "Sustainable Solutions", subtitle: "Building a Greener Tomorrow", dtitle: "Manufacturing" },
  { img: "/banner4.jpg", title: "Smart Automation", subtitle: "Enhancing Efficiency & Productivity", dtitle: "Internet of Things" }
];
const Banner = () => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const nextSlide = () => setIndex((prev) => (prev + 1) % banners.length);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [index, isPlaying]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="relative flex w-full h-full group">
        <motion.div className="flex w-full h-full" initial={{ x: "100%" }} animate={{ x: `-${index * 100}%` }} transition={{ type: "spring", stiffness: 50, damping: 10 }}>
          {banners.map((banner, i) => (
            <div key={i} className="w-full flex-shrink-0 h-full relative">
              <Image priority src={banner.img} alt={banner.title} width={1000} height={100} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-start 2xl:px-40 md:px-20 px-10 text-white">
                <h1 className="text-5xl 2xl:text-7xl font-medium mb-6 duration-500">
                  <Highlight>{banner.title}</Highlight>
                  <br />
                  <span className="mt-6 font-normal block text-3xl md:text-5xl ">{banner.subtitle}</span>
                </h1>
                <button className="border duration-300 hover:bg-white text-white mt-6 bg-transparent md:py-3 md:px-8 py-3 px-6 rounded-md font-semibold md:text-lg hover:text-black flex items-center gap-4">
                  Read More <SquareArrowOutUpRight />
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <Button varient="outline" onClick={() => setIsPlaying(!isPlaying)} className="absolute hover:bg-white hover:text-black z-50 bottom-5 2xl:left-[60%] md:left-[70%] left-[85%] bg-transparent border rounded-md hidden md:block">
        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
      </Button>
      <div className="absolute bottom-6 z-50 2xl:left-[32%] md:left-[30%] left-[5%] justify-start items-start md:flex gap-8 hidden md:block">
        {banners.map((_, i) => (
          <div key={i} onClick={() => setIndex(i)} className="flex flex-col justify-start items-start gap-1 cursor-pointer">
            <p className="text-white">{_.dtitle}</p>
            <button className={`w-full h-[2px] rounded-full ${i === index ? "bg-white" : "bg-gray-500"}`}></button>
          </div>
        ))}
      </div>
      <div className="absolute bottom-6 cursor-pointer w-full text-white flex justify-between items-center px-20">
        <div className="flex items-center gap-3">
          <FaArrowDown className="animate-bounce duration-800 ease-in-out" />
          <h2 className="font-semibold">SCROLL TO EXPLORE</h2>
        </div>
        <div className="flex items-center gap-10">
          <FaFacebookF />
          <FaXTwitter />
          <FaLinkedinIn />
        </div>
      </div>
    </section>
  );
};
export default Banner;
