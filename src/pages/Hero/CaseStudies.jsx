"use client";
import { motion } from "framer-motion";
import { ArrowRight, Users, Lightbulb, UserCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CaseStudies = () => {
  const features = [
    { link: "/", icon: <Users className="h-12 w-12 text-blue-500" />, img: "/smartimple.png", title: "Smart Implementation", description: "Boosted productivity by 30% with Industrial IoT, reducing downtime and optimizing operations.", timg: "https://img.freepik.com/free-photo/factory-worker-monitoring-industrial-machines-production-remotely-control-room_342744-90.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", image: "https://img.freepik.com/free-photo/one-businessman-using-wireless-technology-global-communications-generated-by-ai_188544-20422.jpg" },
    { link: "/", icon: <Lightbulb className="h-12 w-12 text-blue-500" />, img: "/smarthome.png", title: "Smart Home Solution", description: "Integrated IoT for seamless home automation, enhancing convenience and energy efficiency.", timg: "https://img.freepik.com/free-photo/modern-living-room-with-smart-home-technology_9975-33059.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", image: "https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg" },
    { link: "/", icon: <UserCheck className="h-12 w-12 text-blue-500" />, img: "/optimization.png", title: "PCB Optimization", description: "Improved efficiency with advanced PCB design, reducing costs and improving performance.", timg: "https://img.freepik.com/free-photo/dolls-computer-motherboard_1286-160.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", image: "https://img.freepik.com/free-photo/variety-people-multitasking-3d-cartoon-scene_23-2151294553.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid" },
  ];

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 0.4 } } };
  const itemVariants = { hidden: { opacity: 0, y: 60, rotateX: -15 }, visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", stiffness: 120, damping: 15, mass: 0.8 } }, hover: { y: -10, scale: 1.03, rotateX: 5, boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.15)", transition: { duration: 0.3 } } };
  const imageVariants = { hidden: { opacity: 0, scale: 0.9, rotate: -10 }, visible: { opacity: 0.7, scale: 2, rotate: 0, transition: { duration: 0.9, ease: "easeOut" } }, hover: { opacity: 1 } };

  return (
    <section className="py-32 shadow-2xl bg-gradient-to-r from-pink-300/10 via-blue-200 to-indigo-400/10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-4" initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>Case Studies</motion.h2>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center w-full gap-6 mt-20">
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants} initial="initial" whileHover="hover" className="relative bg-white rounded-xl shadow-md border border-blue-100 hover:border-blue-300 transition-all duration-300 group">
              <motion.div variants={imageVariants} className="absolute inset-0 z-0 opacity-10 rounded-xl group-hover:opacity-100 transition-opacity duration-500">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent rounded-xl" />
              </motion.div>
              <div className="rounded-t-xl"><img loading="lazy" src={feature.timg} alt={feature.title} className="w-full h-72 rounded-t-xl object-cover" /></div>
              <div className="relative z-10 2xl:py-14 py-10 px-8 2xl:px-10">
                <div className="flex items-center justify-between mb-6">
                  <motion.div className="text-blue-500" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}><img loading="lazy"  src={feature.img} alt={feature.title}  className="w-12" /></motion.div>
                </div>
                <h3 className="text-3xl font-semibold mb-3 text-gray-900 group-hover:text-white transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 text-md leading-relaxed group-hover:text-white transition-colors duration-300">{feature.description}</p>
                <Link href={feature.link}>
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
    </section>
  );
};

export default CaseStudies;