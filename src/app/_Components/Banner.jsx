// "use client";

// import { Highlight } from "@/components/ui/hero-highlight";
// import { motion } from "framer-motion";
// import { FiArrowUpRight } from "react-icons/fi";
// import { RiContactsFill } from "react-icons/ri";
// import { FaArrowDown } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaLinkedinIn } from "react-icons/fa";

// const Banner = () => {
//   return (
//     <section
//       className="relative  bg-cover  text-white "
//       style={{ backgroundImage: "url('/Banner.png')" }}
//     >
//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80 "></div>

//       <div className="flex flex-col justify-center gap-10 h-screen  container mx-auto px-4 sm:px-6 lg:px-12 items-start  relative z-10">
//         {/* Animated Title */}
//         <motion.h1
//           className="text-4xl md:text-7xl  font font-medium mb-6"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//         >

//           <Highlight className="">
//             Innovative Engineering
//           </Highlight>
//           <br className="" /><span className="mt-2 block text-4xl md:text-7xl">Solutions for a Smarter Future</span>
//         </motion.h1>



//         {/* <div className="flex justify-center items-center gap-5">
//           <motion.button
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             viewport={{ once: true }} className="flex justify-between items-center border px-10 rounded-full font-bold bg-white/10 p-1">Get Started
//             <span className="text-black font-bold bg-white p-2 rounded-full relative left-9"><FiArrowUpRight size={20} /></span>
//           </motion.button>

//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             viewport={{ once: true }} 
//             className="border-l-2 border-gray-400  h-12 relative "/>

//           <motion.div initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             viewport={{ once: true }} className="flex items-center gap-3">
//             <div className="bg-white/20 border p-3  rounded-full">
//               <RiContactsFill size={16} />
//             </div>
//             <h2 className="text-lg font-bold tracking-wide">Contact With Us</h2>
//           </motion.div>
//         </div> */}
//       </div>

//       {/* <div className="absolute bottom-10 w-full px-20 ">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center gap-3">
//             <FaArrowDown className="animate-bounce duration-800 ease-in-out" />
//             <h2 className="font-semibold">SCROLL TO EXPLORE</h2>
//           </div>
//           <div className="flex items-center gap-10">
//             <FaFacebookF />
//             <FaXTwitter />
//             <FaLinkedinIn />
//           </div>
//         </div>
//       </div> */}
//       {/* <motion.h2
//             className="mt-8 mx-auto w-32 animate-pulse"
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
//             viewport={{ once: true }}
//           >SUNKEY</motion.h2> */}
//     </section>
//   );
// };

// export default Banner;



"use client";

import { Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Play, Pause, SquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaArrowDown, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";


const banners = [
  {
    img: "/banner1.png",
    title: "Innovative Engineering",
    subtitle: "Solutions for a Smarter Future",
    dtitle: "Engineering"
  },
  {
    img: "/banner2.jpg",
    title: "Cutting-Edge Technology",
    subtitle: "Empowering the Next Generation",
    dtitle: "Electronic"
  },
  {
    img: "/banner3.jpg",
    title: "Sustainable Solutions",
    subtitle: "Building a Greener Tomorrow",
    dtitle: "Manufacturing"
  },
  {
    img: "/banner4.jpg",
    title: "Smart Automation",
    subtitle: "Enhancing Efficiency & Productivity",
    dtitle: "Internet of Things"
  },
];

const Banner = () => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = () => setIndex((prev) => (prev + 1) % banners.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + banners.length) % banners.length);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [index, isPlaying]);

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
              <img
                src={banner.img}
                alt={banner.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-start 2xl:px-40 md:px-20 px-10 text-white">
                <h1 className="text-4xl md:text-5xl 2xl:text-7xl font-medium mb-6 group-hover:scale-105 duration-500">
                  <Highlight>{banner.title}</Highlight>
                  <br />
                  <span className="mt-4 block text-4xl md:text-5xl 2xl:text-7xl">
                    {banner.subtitle}
                  </span>
                </h1>
                <button className="group-hover:translate-x-5 duration-300 hover:bg-blue-500 hover:text-white mt-6 bg-white md:py-4 md:px-10 py-3 px-6 rounded-md font-semibold md:text-lg text-black flex items-center gap-4">Read More <span><SquareArrowOutUpRight /></span></button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>


      <Button
        varient="outline"
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute bottom-5 2xl:left-[60%] md:left-[70%] left-[85%] bg-transparent border rounded-md hidden md:block"
      >
        {isPlaying ? <Pause className=" w-5 h-5" /> : <Play className=" w-5 h-5" />}
      </Button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 2xl:left-[32%] md:left-[30%] left-[5%] justify-start items-start md:flex gap-8 hidden md:block">
        {banners.map((_, i) => (
          <div key={i} onClick={() => setIndex(i)} className="flex flex-col justify-start items-start gap-1 cursor-pointer">
            <p className="text-white ">{_.dtitle}</p>
            <button className={`w-full h-[2px] rounded-full ${i === index ? "bg-white" : "bg-gray-500"}`}></button>
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 w-full px-10 text-white ">
        <div className="flex justify-between items-center">
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
      </div>

    </section>
  );
};

export default Banner;
