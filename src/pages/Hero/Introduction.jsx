"use client";
import { motion } from "framer-motion";
import { Users, Lightbulb, UserCheck, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";
import IntoSlider from "../components/IntoSlider";

const Introduction = () => {
  const features = [
    { link: "/", icon: <Users className="h-12 w-12 text-blue-500" />, img: "https://cdn-icons-png.freepik.com/256/17009/17009449.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Engineering Design Service", description: "Sunkey Design Systems a wide range of engineering design services designed to meet the diverse.", image: "/engineering-design-service.jpg" },
    { link: "/", icon: <Lightbulb className="h-12 w-12 text-blue-500" />, img: "https://cdn-icons-png.freepik.com/256/4696/4696145.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Electronic Design", description: "Our electronic design services are designed to help you bring your electronic products to life.", image: "/electronic-design.jpg" },
    { link: "/", icon: <UserCheck className="h-12 w-12 text-blue-500" />, img: "https://cdn-icons-png.freepik.com/256/6008/6008678.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Manufacturing Service", description: "Sunkey Design Systems provides manufacturing services to support product development needs.", image: "/manufacturing.jpg" },
    { link: "/", icon: <Shield className="h-12 w-12 text-blue-500" />, img: "https://cdn-icons-png.freepik.com/256/11296/11296406.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Internet of Things", description: "We specialize in IoT solutions that transform industries and homes.", image: "/iot.jpg" }
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", stiffness: 120, damping: 15, mass: 0.8 } },
    hover: { y: -10, scale: 1.03, rotateX: 5, boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.15)", transition: { duration: 0.3 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -10 },
    visible: { opacity: 0.7, scale: 2, rotate: 0, transition: { duration: 0.9, ease: "easeOut" } },
    hover: { opacity: 1 }
  };

  return (
    <section id="next-section" className="py-16 md:py-32 shadow-2xl bg-gradient-to-r from-pink-300/10 via-blue-200 to-indigo-400/10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex justify-between items-start">
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-left mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
            Sunkey Design Systems
          </motion.h2>
          <Link href="/">
            <motion.button className="flex gap-3 group border px-4 sm:px-6 py-2 sm:py-3 mt-5 md:mt-0 rounded-md text-gray-900 shadow-lg hover:scale-105 duration-300 ease-in-out" variants={sectionVariants}>
              Learn More <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
            </motion.button>
          </Link>
        </div>
        <motion.p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl my-4 sm:mb-10 mt-5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          We empower businesses to innovate in the tech landscape by providing cutting-edge solutions in engineering design, electronics, IoT, and manufacturing.
        </motion.p>
        <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 xl:col-span-8">
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <motion.div key={feature.title} variants={itemVariants} initial="initial" whileHover="hover" className="relative bg-white p-6 rounded-xl shadow-md border border-blue-100 hover:border-blue-300 transition-all duration-300 group">
                  <motion.div variants={imageVariants} className="absolute inset-0 z-0 opacity-10 rounded-xl group-hover:opacity-100 transition-opacity duration-500">
                    <img loading="lazy" src={feature.image} alt={feature.title} className="w-full h-full object-cover rounded-xl" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent rounded-xl" />
                  </motion.div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <motion.div className="text-blue-500" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                        <img src={feature.img} alt={feature.title} className="w-12" />
                      </motion.div>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-3 text-gray-900 group-hover:text-white transition-colors duration-300 line-clamp-1">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-white transition-colors duration-300 line-clamp-2">{feature.description}</p>
                    <div className="flex items-center gap-3 transition-colors duration-300 mt-6">
                      <Link href={feature.link}>
                        <motion.div variants={{ hover: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } }, initial: { x: -20, opacity: 0 } }}>
                          <motion.button className="text-sm font-medium text-white">Learn More</motion.button>
                        </motion.div>
                      </Link>
                      <motion.div className="h-5 w-5 text-black">
                        <ArrowRight className="h-5 w-5 group-hover:text-white -translate-x-20 -z-50 group-hover:translate-x-0 transition-all duration-300" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="rounded-lg mb-6 md:mb-0 col-span-12 xl:col-span-4">
            <IntoSlider/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;