import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const itemVariants = { hidden: { opacity: 0, x: 0 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "linear" } }, hover: { boxShadow: "0 15px 25px rgba(0, 0, 0, 0.15)", transition: { duration: 0.3, ease: "linear" } } };

const design = [
  { link: "/electronic-design/design-modification-service", img: "https://cdn-icons-png.freepik.com/256/18495/18495340.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Design Modification Services", description: "Enhancing existing designs for better functionality or manufacturability.", cimg: "/Homepage/Design Modification Services.jpg" },
  { link: "/electronic-design/design-for-manufacturability", img: "https://cdn-icons-png.freepik.com/256/3696/3696791.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Design for Manufacturability", description: "Ensuring designs are optimized for efficient production.", cimg: "/Homepage/Design for Manufacturability.jpg" },
];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = () => setIndex((prev) => (prev + 1) % design.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + design.length) % design.length);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, [index, isPlaying]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div key={index} variants={itemVariants} initial="hidden" animate="visible" exit="hidden" className="relative bg-white rounded-xl shadow-md border border-blue-100 hover:border-blue-300 transition-all duration-300 group overflow-hidden">
          <div><img loading="lazy" src={design[index].cimg} alt={design[index].title} className="w-full h-64  rounded-t-xl object-cover transition-all duration-500 ease-linear" /></div>
          <div className="relative z-10 p-6">
            <div className="flex items-center justify-between mb-6">
              <motion.div className="text-blue-500" whileHover={{ rotate: 360 }} transition={{ duration: 0.6, ease: "linear" }}><Image priority src={design[index].img} alt={design[index].title} width={1000} height={1000} className="w-12" /></motion.div>
            </div>
            <h3 className="text-3xl font-semibold mb-3 text-gray-900 transition-all duration-500 ease-linear">{design[index].title}</h3>
            <p className="text-gray-600 text-md leading-relaxed transition-all duration-500 ease-linear">{design[index].description}</p>
            <Link href={design[index].link}>
              <div className="flex items-center gap-3 transition-all duration-500 ease-linear mt-6">
                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 0.6, ease: "linear" } }}><motion.button className="text-sm font-medium text-black">Learn More</motion.button></motion.div>
                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 0.6, ease: "linear" } }} className="h-5 w-5 text-black"><ArrowRight className="h-5 w-5" /></motion.div>
              </div>
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute -bottom-4 transform -translate-y-1/2 left-3 flex items-center"><Button onClick={prevSlide} className="p-2 shadow-md"><ArrowLeft className="h-6 w-6" /></Button></div>
      <div className="absolute -bottom-4 transform -translate-y-1/2 left-14 flex items-center"><Button onClick={nextSlide} className="p-2 shadow-md"><ArrowRight className="h-6 w-6" /></Button></div>
      <div className="flex justify-end items-center gap-3 mt-7 mr-5">
        {design.map((_, i) => (
          <button key={i} className={`w-6 h-1 rounded-full transition-all duration-500 ease-linear ${i === index ? "bg-black shadow-lg" : "bg-gray-400"}`} onClick={() => setIndex(i)}></button>
        ))}
        <Button onClick={() => setIsPlaying(!isPlaying)} className="ml-3">{isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}</Button>
      </div>
    </div>
  );
};

export default Slider;