"use client";
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Users } from "lucide-react";
import Slider from "../components/Slider";
import Link from "next/link";

const ElectronicDesign = () => {

  const sectionVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", staggerChildren: 0.3 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 10, duration: 0.6 } }, hover: { scale: 1.05, boxShadow: "0 15px 25px rgba(0, 0, 0, 0.15)", transition: { duration: 0.3 } } };
  const imageVariants = { hidden: { opacity: 0, x: 50, scale: 0.9 }, visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } } };
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 0.4 } } };

  const features = [
    {link:"/electronic-design/pcb-design-service", icon: <Users className="h-12 w-12 text-blue-500" />, img: "https://cdn-icons-png.freepik.com/256/12108/12108718.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "PCB Design Services", description: "Creating PCBs that are both functional and efficient operation.", image: "/pcb-design-services.jpg" },
    {link:"/electronic-design/pcb-layout", icon: <Lightbulb className="h-12 w-12 text-blue-500" />, img: "https://cdn-icons-png.freepik.com/256/365/365773.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "PCB Layout", description: "Ensuring optimal component placement for better performance.", image: "/pcb-layout.jpg" },
  ];
  const features2 = [
    {link:"/electronic-design/analysis", icon: <Users className="h-12 w-12 text-blue-500" />, img: "https://cdn-icons-png.freepik.com/256/3321/3321721.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "SI/PI Analysis", description: "Conducting signal integrity and power integrity analyses to ensure reliable operation.", image: "/sipi-analysis.jpg" },
    {link:"/electronic-design/reverse-engineering", icon: <Lightbulb className="h-12 w-12 text-blue-500" />, img: "https://cdn-icons-png.freepik.com/256/12539/12539913.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Reverse Engineering", description: "Analyzing existing products to improve or replicate them.", image: "/reverse-engineering.jpg" },
  ];

  return (
    <section id="Electronic" className="py-32 shadow-2xl bg-gradient-to-r  from-pink-300/10 via-blue-200  to-indigo-400/10 overflow-hidden  ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex justify-between items-center">
          <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-left md:text-center mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
            Electronic Design
          </motion.h2>
          <Link href="/">
            <motion.button className=" flex gap-3 group border px-4 sm:px-6 py-2 sm:py-3 mt-5 md:mt-0 rounded-md text-gray-900 shadow-lg hover:scale-105 duration-300 ease-in-out" variants={sectionVariants}>
              Learn More <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
            </motion.button>
          </Link>
        </div>
        <motion.p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl my-4 sm:mb-10 mt-5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          Our electronic design services are designed to help you bring your electronic products to life.
        </motion.p>
        <div className="w-full mb-10 grid grid-cols-12 gap-5">
          {/* First Section */}
          <div className="lg:col-span-4 col-span-12">
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-6">
              {features.map((feature) => (
                <motion.div key={feature.title} variants={itemVariants} initial="initial" whileHover="hover" className="relative bg-white p-6 rounded-xl shadow-md border border-blue-100 hover:border-blue-300 transition-all duration-300 group">
                  {/* Image Layer */}
                  <motion.div variants={imageVariants} className="absolute inset-0 z-0 opacity-10 rounded-xl group-hover:opacity-100 transition-opacity duration-500">
                    <img loading="lazy" src={feature.image} alt={feature.title} className="w-full h-full object-cover rounded-xl" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent rounded-xl" />
                  </motion.div>
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <motion.div className="text-blue-500" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}><img loading="lazy" src={feature.img} alt={feature.title}  className="w-12" /></motion.div>
                    </div>
                    <h3 className="text-3xl font-semibold mb-3 text-gray-900 group-hover:text-white transition-colors duration-300">{feature.title}</h3>
                    <p className="text-gray-600 text-md leading-relaxed group-hover:text-white transition-colors duration-300">{feature.description}</p>
                    {/* Learn More Button + Arrow */}
                    <Link href={feature.link} >
                      <div className="flex items-center gap-3 transition-colors duration-300 mt-6">
                        <motion.div variants={{ hover: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } }, initial: { x: -20, opacity: 0 } }}>
                          <motion.button className="text-sm font-medium text-white">Learn More</motion.button>
                        </motion.div>
                        <motion.div className="h-5 w-5 text-black"><ArrowRight className="h-5 w-5 group-hover:text-white -translate-x-20 -z-50 group-hover:translate-x-0 transition-all duration-300" /></motion.div>
                      </div>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Second Section */}
          <div className="lg:col-span-4 col-span-12"><Slider /></div>

          {/* Third Section */}
          <div className="lg:col-span-4 col-span-12">
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-6">
              {features2.map((feature) => (
                <motion.div key={feature.title} variants={itemVariants} initial="initial" whileHover="hover" className="relative bg-white p-6 rounded-xl shadow-md border border-blue-100 hover:border-blue-300 transition-all duration-300 group">
                {/* Image Layer */}
                <motion.div variants={imageVariants} className="absolute inset-0 z-0 opacity-10 rounded-xl group-hover:opacity-100 transition-opacity duration-500">
                  <img loading="lazy" src={feature.image} alt={feature.title} className="w-full h-full object-cover rounded-xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent rounded-xl" />
                </motion.div>
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                  <motion.div className="text-blue-500" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}><img loading="lazy" src={feature.img} alt={feature.title}  className="w-12" /></motion.div>
                  </div>
                  <h3 className="text-3xl font-semibold mb-3 text-gray-900 group-hover:text-white transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-600 text-md leading-relaxed line-clamp-2 group-hover:text-white transition-colors duration-300">{feature.description}</p>
                  {/* Learn More Button + Arrow */}
                  <Link href={feature.link} >
                    <div className="flex items-center gap-3 transition-colors duration-300 mt-6">
                      <motion.div variants={{ hover: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } }, initial: { x: -20, opacity: 0 } }}>
                        <motion.button className="text-sm font-medium text-white">Learn More</motion.button>
                      </motion.div>
                      <motion.div className="h-5 w-5 text-black"><ArrowRight className="h-5 w-5 group-hover:text-white -translate-x-20 -z-50 group-hover:translate-x-0 transition-all duration-300" /></motion.div>
                    </div>
                  </Link>
                </div>
              </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectronicDesign;