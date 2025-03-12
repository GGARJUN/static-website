"use client";
import { motion } from "framer-motion";
import { Users, Lightbulb, UserCheck, Shield, ArrowRight } from "lucide-react";
import ImageCarousel from "../components/ImageCarousel";
import Image from "next/image";

const Introduction = () => {

  const features = [
    { icon: <Users className="h-12 w-12 text-blue-500" />, img: "https://cdn-icons-png.freepik.com/256/17009/17009449.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Engineering Design Service", description: "SunKey Technologies a wide range of engineering design services designed to meet the diverse.", image: "https://img.freepik.com/free-photo/man-architect-working-project-with-vr-glasses-new-technologies-3d_1268-29304.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid" },
    { icon: <Lightbulb className="h-12 w-12 text-blue-500" />, img: "https://cdn-icons-png.freepik.com/256/4696/4696145.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Electronic Design", description: "Our electronic design services are designed to help you bring your electronic products to life.", image: "https://img.freepik.com/free-photo/close-up-wires-tech-background_23-2148882631.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid" },
    { icon: <UserCheck className="h-12 w-12 text-blue-500" />, img: "https://cdn-icons-png.freepik.com/256/6008/6008678.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Manufacturing Service", description: "SunKey Technologies provides manufacturing services to support product development needs.", image: "https://img.freepik.com/free-photo/asian-male-engineer-specialist-with-measuring-machine-with-manipulator-armthreedimensional-coordinate-measurement-check-sizes-3d-check-sizes-parts-cmm-after-machining-process_609648-162.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid" },
    { icon: <Shield className="h-12 w-12 text-blue-500" />, img: "https://cdn-icons-png.freepik.com/256/11296/11296406.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Internet of Things", description: "We specialize in IoT solutions that transform industries and homes.", image: "https://img.freepik.com/free-photo/light-trails-buildings_1359-714.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid" }
  ];
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", staggerChildren: 0.3 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -15 }, visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", stiffness: 120, damping: 15, mass: 0.8 } }, hover: { y: -10, scale: 1.03, rotateX: 5, boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.15)", transition: { duration: 0.3 } }
  };
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -10 }, visible: { opacity: 0.7, scale: 2, rotate: 0, transition: { duration: 0.9, ease: "easeOut" } }, hover: { opacity: 1 }
  };

  return (
    <section className="py-32 shadow-2xl bg-gradient-to-r from-pink-300/10 via-blue-200 to-indigo-400/10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="md:flex justify-between items-center">
          <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-left md:text-center mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
            SunKey Technologies
          </motion.h2>
          <motion.button className=" flex gap-3 group border px-4 sm:px-6 py-2 sm:py-3 mt-5 md:mt-0 rounded-md text-gray-900 shadow-lg hover:scale-105 duration-300 ease-in-out" variants={sectionVariants}>
            Learn More <ArrowRight className="group-hover:translate-x-1 transition-all duration-300"/>
          </motion.button>
        </div>
        <motion.p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl my-4 sm:mb-10 mt-5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          We empower businesses to innovate in the tech landscape by providing cutting-edge solutions in engineering design, electronics, IoT, and manufacturing.
        </motion.p>
        <div className="mt-20 grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-8 md:justify-between md:gap-6">
            <motion.div className="grid md:grid-cols-2 gap-6">
              {features.map((feature) => (
                <motion.div key={feature.title} variants={itemVariants} initial="initial" whileHover="hover" className="relative bg-white p-6 rounded-xl shadow-md border border-blue-100 hover:border-blue-300 transition-all duration-300 group">
                  <motion.div variants={imageVariants} className="absolute inset-0 z-0 opacity-10 rounded-xl group-hover:opacity-100 transition-opacity duration-500">
                    <Image priority src={feature.image} alt={feature.title} width={1000} height={100} className="w-full h-full object-cover rounded-xl" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent rounded-xl" />
                  </motion.div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <motion.div className="text-blue-500" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                        <Image priority src={feature.img} alt={feature.title} width={100} height={100} className="w-12" />
                      </motion.div>
                    </div>
                    <h3 className="text-3xl font-semibold mb-3 text-gray-900 group-hover:text-white transition-colors duration-300 line-clamp-1">{feature.title}</h3>
                    <p className="text-gray-600 text-md leading-relaxed group-hover:text-white transition-colors duration-300 line-clamp-2">{feature.description}</p>
                    <div className="flex items-center gap-3 transition-colors duration-300 mt-6">
                      <motion.div variants={{ hover: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } }, initial: { x: -20, opacity: 0 } }}>
                        <motion.button className="text-sm font-medium text-white">Learn More</motion.button>
                      </motion.div>
                      <motion.div className="h-5 w-5 text-black">
                        <ArrowRight className="h-5 w-5 group-hover:text-white -translate-x-20 -z-50 group-hover:translate-x-0 transition-all duration-300" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
          <div className=" rounded-lg mb-10 md:mb-0 col-span-12 md:col-span-4 ">
            <ImageCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;