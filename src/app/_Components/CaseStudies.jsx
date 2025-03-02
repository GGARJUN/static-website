"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Users,
  Lightbulb,
  UserCheck,
  Shield,

} from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Smart Factory Implementation",
      desc: "Boosted productivity by 30% with Industrial IoT, reducing downtime and optimizing operations.",
      timg: "https://img.freepik.com/free-photo/factory-worker-monitoring-industrial-machines-production-remotely-control-room_342744-90.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
      bgColor: "bg-blue-50",
    },
    {
      title: "Smart Home Solution",
      desc: "Integrated IoT for seamless home automation, enhancing convenience and energy efficiency.",
      timg: "https://img.freepik.com/free-photo/modern-living-room-with-smart-home-technology_9975-33059.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
      bgColor: "bg-green-50",
    },
    {
      title: "PCB Optimization",
      desc: "Improved efficiency with advanced PCB design, reducing costs and improving performance.",
      timg: "https://img.freepik.com/free-photo/dolls-computer-motherboard_1286-160.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
      bgColor: "bg-purple-50",
    },
  ];

  const features = [
    {
      icon: <Users className="h-12 w-12 text-blue-500" />,
      img: "/smartimple.png",
      title: "Smart Implementation",
      description: "Boosted productivity by 30% with Industrial IoT, reducing downtime and optimizing operations.",
      timg: "https://img.freepik.com/free-photo/factory-worker-monitoring-industrial-machines-production-remotely-control-room_342744-90.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
      image: "https://img.freepik.com/free-photo/one-businessman-using-wireless-technology-global-communications-generated-by-ai_188544-20422.jpg",
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-blue-500" />,
      img: "/smarthome.png",
      title: "Smart Home Solution",
      description: "Integrated IoT for seamless home automation, enhancing convenience and energy efficiency.",
      timg: "https://img.freepik.com/free-photo/modern-living-room-with-smart-home-technology_9975-33059.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
      image: "https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg",
    },
    {
      icon: <UserCheck className="h-12 w-12 text-blue-500" />,
      img: "/optimization.png",
      title: "PCB Optimization",
      description: "Improved efficiency with advanced PCB design, reducing costs and improving performance.",
      timg: "https://img.freepik.com/free-photo/dolls-computer-motherboard_1286-160.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
      image: "https://img.freepik.com/free-photo/variety-people-multitasking-3d-cartoon-scene_23-2151294553.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
    },

  ];

  // Animation Variants
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        mass: 0.8,
      },
    },
    hover: {
      y: -10,
      scale: 1.03,
      rotateX: 5,
      boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -10 },
    visible: {
      opacity: 0.7,
      scale: 2,
      rotate: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
    hover: { opacity: 1 },
  };





  return (
    <section className="py-32  shadow-2xl bg-gradient-to-r from-pink-300/10 via-blue-200 to-indigo-400/10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-8 sm:mb-4 text-gray-900"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Case Studies
        </motion.h2>
        {/* <motion.div
          className="grid md:grid-cols-3 gap-8 mt-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        > */}
        {/* {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className= "group bg-black/20 h-[550px] rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"

              whileHover="hover"
            >
              <div className="relative h-60 overflow-hidden">
                <motion.img
                  src={study.img}
                  alt={study.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent"></div>
              </div>
              <div className="py-10 px-5">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-4">{study.desc}</p>
                <motion.span
                  className="text-black  flex  gap-3 items-center absolute bottom-2 left-[-100%] group-hover:left-5  transition-all duration-500 ease-in-out cursor-pointer"
                >
                  Read More
                </motion.span>
                <motion.span
                  className="flex gap-3  text-black items-center absolute bottom-2 left-[10px] group-hover:left-28 transition-all duration-300 ease-in-out"
                >
                  <ArrowRight />
                </motion.span>
              </div>
            </motion.div>
          ))} */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 justify-center items-center w-full gap-6 mt-20"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover="hover"
              className="relative bg-white  rounded-xl shadow-md border border-blue-100 hover:border-blue-300 transition-all duration-300 group w-full"
            >
              {/* Image Layer */}
              <motion.div
                variants={imageVariants}
                className="absolute inset-0 z-0 opacity-10 rounded-xl group-hover:opacity-100 transition-opacity duration-500"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent rounded-xl" />
              </motion.div>
                <div className="rounded-t-xl">
                  <img src={feature.timg} alt="" className="w-full h-72 rounded-t-xl object-cover"/>
                </div>

              {/* Content */}
              <div className="relative z-10 2xl:py-14 py-10 px-8 2xl:px-10">
                <div className="flex items-center justify-between mb-6 ">
                  <motion.div
                    className="text-blue-500"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* {feature.icon} */}
                    <img src={feature.img} alt="" className="w-12" />
                  </motion.div>
                </div>
                <h3 className="text-3xl font-semibold mb-3 text-gray-900 group-hover:text-white transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-md leading-relaxed group-hover:text-white transition-colors duration-300">
                  {feature.description}
                </p>
                <motion.div
                  className="mt-6 flex items-center gap-3 text-blue-500 hover:text-blue-700 group-hover:text-white transition-colors duration-300"
                  whileHover={{ x: 10 }}
                >
                  <button className="text-sm font-medium">Learn More</button>
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 
        </motion.div> */}
      </div>
    </section>
  );
};

export default CaseStudies;