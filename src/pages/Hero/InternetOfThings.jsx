"use client"
import { motion } from "framer-motion";
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const InternetOfThings = () => {

  const features = [
    {
      img: "https://cdn-icons-png.freepik.com/256/18706/18706183.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", name: "Industrial IoT", description: "Implementing IoT technologies to enhance industrial efficiency and productivity.", href: "/iot", cta: "Learn more", className: "col-span-3 lg:col-span-1",
      background: (
        <div className="absolute right-0 origin-top rounded-md border transition-all duration-300 ease-out  group-hover:scale-105 w-full h-full">
          <img loading="lazy" src="/industrial-iot.jpg" alt="SunKey" className="w-full h-full object-cover" />
        </div>
      ),
    },
    {
      img: "https://cdn-icons-png.freepik.com/256/3321/3321394.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", name: "Smart Homes IoT", description: "Creating smart home solutions that make living easier and more convenient.", href: "/iot", cta: "Learn more", className: "col-span-3 lg:col-span-2",
      background: (
        <div className="absolute right-0 origin-top rounded-md border transition-all duration-300 ease-out  group-hover:scale-105 w-full h-full">
          <img loading="lazy" src="/smart-home-iot.jpg" alt="SunKey" className="w-full h-full object-cover" />
        </div>
      ),
    },
    {
      img: "https://cdn-icons-png.freepik.com/256/3869/3869887.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", name: "Smart Lighting IoT", description: "Developing intelligent lighting systems for energy efficiency and ambiance.", href: "/iot", cta: "Learn more", className: "col-span-3 lg:col-span-2",
      background: (
        <div className="absolute right-0 origin-top rounded-md border transition-all duration-300 ease-out  group-hover:scale-105 w-full h-full">
          <img loading="lazy" src="/smart-lightning-iot.jpg" alt="SunKey" className="w-full h-full object-cover" />
        </div>
      ),
    },
    {
      img: "https://cdn-icons-png.freepik.com/256/13668/13668031.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", name: "Level Monitoring", description: "Providing IoT-based level monitoring solutions for various applications.", className: "col-span-3 lg:col-span-1", href: "/iot", cta: "Learn more",
      background: (
        <div className="absolute right-0 origin-top  rounded-md border transition-all duration-300 ease-out group-hover:scale-105 h-full">
          <img loading="lazy" src="/industrial-iot.jpg" alt="SunKey" className="h-full w-full object-cover" />
        </div>
      ),
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.3
      }
    },
  };

  return (
    <section id="IoT" className="py-20 shadow-2xl bg-gradient-to-r from-pink-300/10 via-blue-200 to-indigo-400/10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex justify-between items-center">
          <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-left md:text-center mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>Internet of Things</motion.h2>
          <Link href="/iot">
            <motion.button className=" flex gap-3 group border px-4 sm:px-6 py-2 sm:py-3 mt-5 md:mt-0 rounded-md text-gray-900 shadow-lg hover:scale-105 duration-300 ease-in-out" variants={sectionVariants}>
              Learn More <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
            </motion.button>
          </Link>
        </div>
        <motion.p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl my-4 sm:mb-10 mt-5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>We specialize in IoT solutions that transform industries and homes. Our focus areas include</motion.p>
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}

export default InternetOfThings
