"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FaMicrochip, FaDraftingCompass, FaChartLine, FaTools } from "react-icons/fa";
import { useState } from "react";
import { ArrowRight, Lightbulb, Shield, UserCheck, Users } from "lucide-react";
import Slider from "./_ElectronicDesign/Slider";
import ServiceCarousel from "./ServiceCarousel";

// Animation Variants
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

const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      ease: "easeInOut"
    }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.6
    }
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 15px 25px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.3 }
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
};

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



const glowVariants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};



const ElectronicDesign = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://img.freepik.com/free-photo/electronic-circuit-board-close-up_1150-4324.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/electronic-circuit-board-with-microchip_1150-4321.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/close-up-electronic-components-circuit-board_23-2148882697.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/close-up-wires-tech-background_23-2148882631.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
  ];

  const features = [
    {
      icon: <Users className="h-12 w-12 text-blue-500" />,
      img: "/expertise.png",
      title: "Expertise",
      description: "Our seasoned professionals excel in engineering, electronics, manufacturing, and IoT solutions.",
      image: "https://img.freepik.com/free-photo/one-businessman-using-wireless-technology-global-communications-generated-by-ai_188544-20422.jpg",
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-blue-500" />,
      img: "/innovation.png",
      title: "Innovation",
      description: "Cutting-edge tech drives our solutions, keeping you at the forefront of progress.",
      image: "https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg",
    },

  ];

  const design = [
    {
      img: "/expertise.png",
      title: "Expertise",
      description: "Our seasoned professionals excel in engineering, electronics, manufacturing, and IoT solutions.",
      image: "https://img.freepik.com/free-photo/one-businessman-using-wireless-technology-global-communications-generated-by-ai_188544-20422.jpg",
    },
    {
      img: "/innovation.png",
      title: "Innovation",
      description: "Cutting-edge tech drives our solutions, keeping you at the forefront of progress.",
      image: "https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg",
    },
    {
      img: "/customer.png",
      title: "Customer-Centric",
      description: "Tailored solutions and exceptional support designed around your unique needs.",
      image: "https://img.freepik.com/free-photo/variety-people-multitasking-3d-cartoon-scene_23-2151294553.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
    },
    {
      img: "/quality.png",
      title: "Quality Assurance",
      description: "Uncompromising standards ensure excellence in every project we deliver.",
      image: "https://img.freepik.com/free-photo/standard-quality-control-collage_23-2149631023.jpg",
    },

  ];



  return (
    <section className="py-32 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-50 via-violet-200 to-slate-400 overflow-hidden  ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="md:flex justify-between items-center">
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-8 sm:mb-4 text-gray-900"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            Electronic Design
          </motion.h2>
          <motion.button
            className="border px-4 sm:px-6 py-2 sm:py-3 mt-5 md:mt-0 rounded-md text-gray-900 shadow-lg hover:scale-105 duration-300 ease-in-out"
            variants={sectionVariants}
          >
            Learn More
          </motion.button>
        </div>

        <motion.p
          className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl my-4 sm:mb-10 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          Our electronic design services are designed to help you bring your electronic products to life.
        </motion.p>


        <div className=" w-full  mb-10 grid grid-cols-12  gap-5">

          {/* First Section */}


          <div className="md:col-span-4 col-span-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-6 "
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover="hover"
                  className="relative bg-white p-6 rounded-xl shadow-md border border-blue-100 hover:border-blue-300 transition-all duration-300 group"
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

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
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
          </div>

          {/* Second Section */}

          <div className="md:col-span-4 col-span-12 ">
            {/* <ServiceCarousel /> */}
            <Slider/>

            {/* <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex  gap-6 "
            >
              {design.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover="hover"
                  className="relative bg-white p-6 rounded-xl shadow-md border border-blue-100 hover:border-blue-300 transition-all duration-300 group"
                >

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
                  <div>
                        <img src="ele.png" alt="" className="w-full h-72"/>
                  </div>

                  <div className="relative z-10">
                    <div className="flex  items-center justify-between mb-6">
                      
                      <motion.div
                        className="text-blue-500"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
  
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
            </motion.div> */}
          </div>

          {/* Third Section */}

          <div className="md:col-span-4 col-span-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-6 "
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover="hover"
                  className="relative bg-white p-6 rounded-xl shadow-md border border-blue-100 hover:border-blue-300 transition-all duration-300 group"
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

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
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
          </div>

        </div>

      </div>
    </section>
  );
};

export default ElectronicDesign;