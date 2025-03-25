"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Play, Pause, SquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ManufacturingServices = () => {
  const banners = [
    { link: "/manufacturing/pcba", img: "/Homepage/PCBA (Printed Circuit Board Assembly).jpg", title: "PCBA (Printed Circuit Board Assembly)", subtitle: "Our PCBA services ensure high-quality, reliable circuit boards for your electronic products, with precision and efficiency.", dtitle: "Engineering" },
    { link: "/manufacturing/test-fixture", img: "/Homepage/Test Fixtures.jpg", title: "Test Fixtures", subtitle: "We design and build custom test fixtures to ensure your products meet the highest standards of quality and reliability.", dtitle: "Electronic" },
    { link: "/manufacturing/box-build", img: "/Homepage/Box Build.jpg", title: "Box Build", subtitle: "From components to finished products, our box build services deliver complete assembly solutions for your manufacturing needs.", dtitle: "Manufacturing" },
  ];
  const sectionVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", staggerChildren: 0.3 } } };
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
    <section id="Manufacturing" className="py-16 md:py-32 shadow-2xl bg-gradient-to-r from-pink-300/10 via-purple-200 to-indigo-400/10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="md:flex justify-between items-center">
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-left mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>Manufacturing Services</motion.h2>
          <Link href="/">
            <motion.button className="flex gap-3 group border px-4 sm:px-6 py-2 sm:py-3 mt-5 md:mt-0 rounded-md text-gray-900 shadow-lg hover:scale-105 duration-300 ease-in-out" variants={sectionVariants}>
              Learn More <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
            </motion.button>
          </Link>
        </div>
        <motion.p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl my-4 sm:mb-10 mt-5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>Sunkey Design Systems provides comprehensive manufacturing services to support your product development needs.</motion.p>
        <section className="relative w-full overflow-hidden rounded-xl">
          <div className="relative flex w-full h-full group">
            <motion.div className="flex w-full rounded-xl" initial={{ x: "100%" }} animate={{ x: `-${index * 100}%` }} transition={{ type: "spring", stiffness: 50, damping: 10 }}>
              {banners.map((banner, i) => (
                <div key={i} className="w-full flex-shrink-0 relative rounded-xl">
                  <img loading="lazy" src={banner.img} alt={banner.title} className="w-full h-[300px] sm:h-[400px] md:h-[550px] object-cover rounded-xl" />
                  <div className="absolute rounded-xl inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"></div>
                  <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-10 md:px-20 2xl:px-40 text-white">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-medium mb-4 sm:mb-6">{banner.title}</h2>
                    <p className="line-clamp-3 md:line-clamp-none mt-2 sm:mt-4 text-lg sm:text-xl md:text-2xl 2xl:text-3xl">{banner.subtitle}</p>
                    <Link href={banner.link}>
                      <button className="group-hover:translate-x-5 duration-300 hover:bg-blue-500 hover:text-white mt-6 sm:mt-10 bg-white py-2 sm:py-3 px-4 sm:px-6 md:py-4 md:px-10 rounded-md font-semibold text-sm sm:text-base md:text-lg text-black flex items-center gap-2 sm:gap-4">Read More <span><SquareArrowOutUpRight /></span></button>
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="flex items-center mt-6 sm:mt-10 justify-center gap-4 sm:gap-8 md:gap-16 lg:gap-32">
            <div className="flex gap-2">
              <Button onClick={prevSlide} className="bg-white"><ArrowLeft className="text-black font-bold w-5 h-5 sm:w-6 sm:h-6" /></Button>
              <Button onClick={nextSlide} className="bg-white"><ArrowRight className="text-black font-bold w-5 h-5 sm:w-6 sm:h-6" /></Button>
            </div>
            <div className="flex">
              {banners.map((_, i) => (
                <button key={i} onClick={() => setIndex(i)} className={`w-8 sm:w-12 md:w-24 h-1 rounded-full ${i === index ? "bg-black" : "bg-white"}`}></button>
              ))}
            </div>
            <Button variant="outline" onClick={() => setIsPlaying(!isPlaying)} className="bg-white border rounded-md">
              {isPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-black" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5 text-black" />}
            </Button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ManufacturingServices;