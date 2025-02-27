"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FaMicrochip, FaDraftingCompass, FaChartLine, FaTools } from "react-icons/fa";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
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

const ElectronicDesign = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://img.freepik.com/free-photo/electronic-circuit-board-close-up_1150-4324.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/electronic-circuit-board-with-microchip_1150-4321.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/close-up-electronic-components-circuit-board_23-2148882697.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/close-up-wires-tech-background_23-2148882631.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
  ];

  // Auto-cycle images
  useState(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  const services = [
    { text: "PCB Design Services: Creating PCBs that are both functional and efficient.", icon: <FaMicrochip /> },
    { text: "PCB Layout: Ensuring optimal component placement for better performance.", icon: <FaDraftingCompass /> },
    { text: "SI/PI Analysis: Conducting signal integrity and power integrity analyses to ensure reliable operation.", icon: <FaChartLine /> },
    { text: "Reverse Engineering: Analyzing existing products to improve or replicate them.", icon: <FaTools /> },
    { text: "Design Modification Services: Enhancing existing designs for better functionality or manufacturability.", icon: <FaTools /> },
    { text: "Design for Manufacturability: Ensuring designs are optimized for efficient production.", icon: <FaMicrochip /> },
  ];

  return (
    <section  className="py-16 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-50 via-violet-200 to-slate-400 overflow-hidden h-[2100px] md:h-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="md:flex justify-between items-center">
          <motion.h2
            className="text-4xl sm:text-5xl  font-extrabold text-center mb-8 sm:mb-4 text-gray-900"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            Electronic Design
          </motion.h2>
          <motion.button
            className="border px-4 sm:px-6 py-2 sm:py-3 rounded-md text-gray-900 shadow-lg hover:scale-105 duration-300 ease-in-out"
            variants={sectionVariants}
          >
            Learn More
          </motion.button>
        </div>

        <motion.p
          className="text-lg text-gray-500 font-medium  my-8 sm:mb-12 max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          Our electronic design services are designed to help you bring your electronic products to life.
        </motion.p>


        <div className=" w-full  mb-10 grid grid-cols-12 justify-center items-center gap-5">

          {/* First Section */}


          <div className="md:col-span-4 col-span-12">
            <div className="flex flex-col  justify-evenly w-full items-center gap-5 h-[550px]">


              <div className="border group bg-white/70 hover:bg-gradient-to-tl from-blue-500 to-violet-800 transition-all duration-500 text-gray-900 hover:text-white h-[50%] w-full p-5  flex flex-col justify- rounded-lg relative overflow-hidden">
                <span className="text-2xl sm:text-2xl text-blue-600 bg-blue-100 p-3 w-12 rounded-full">
                  <FaMicrochip />
                </span>


                {/* Title (Gradient Text) */}
                <h2 className="mt-3 group-hover:text-white font-bold text-2xl bg-gradient-to-tl from-violet-700 to-blue-600 bg-clip-text text-transparent">
                  PCB Design Services
                </h2>

                {/* Description */}
                <p className="py-3 text-md text-gray-700 group-hover:text-white  ">
                  Designing PCBs requires a balance of functionality and efficiency.
                </p>

                {/* Read More (Initially Hidden) */}
                <motion.span
                  className="text-white flex  gap-3 items-center absolute bottom-5 left-[-100%] group-hover:left-5  transition-all duration-500 ease-in-out cursor-pointer"
                >
                  Read More
                </motion.span>
                <motion.span
                  className="flex gap-3 text-black group-hover:text-white items-center absolute bottom-5 left-[15px] group-hover:left-28 transition-all duration-300 ease-in-out"
                >
                  <ArrowRight />
                </motion.span>


              </div>


              <div className="border group bg-white/70 hover:bg-gradient-to-tl from-blue-500 to-violet-800 transition-all duration-500 text-gray-900 hover:text-white h-[50%] w-full p-5  flex flex-col justify- rounded-lg relative overflow-hidden">


                <span className="text-2xl sm:text-2xl text-blue-600 bg-blue-100 p-3 w-12 rounded-full">
                  <FaDraftingCompass />
                </span>


                {/* Title (Gradient Text) */}
                <h2 className="mt-3 group-hover:text-white font-bold text-2xl bg-gradient-to-tl from-violet-700 to-blue-600 bg-clip-text text-transparent">
                  PCB Layout
                </h2>

                {/* Description */}
                <p className="py-3 text-md text-gray-700 group-hover:text-white  ">
                  Ensuring optimal component placement for better performance.
                </p>

                {/* Read More (Initially Hidden) */}
                <motion.span
                  className="text-white flex  gap-3 items-center absolute bottom-5 left-[-100%] group-hover:left-5  transition-all duration-500 ease-in-out cursor-pointer"
                >
                  Read More
                </motion.span>
                <motion.span
                  className="flex gap-3 text-black group-hover:text-white items-center absolute bottom-5 left-[15px] group-hover:left-28 transition-all duration-300 ease-in-out"
                >
                  <ArrowRight />
                </motion.span>


              </div>


            </div>
          </div>

          {/* Second Section */}

          <div className="md:col-span-8 col-span-12 ">
            {/* <div className="flex  justify-evenly w-full items-center gap-5 h-[550px]">


              <div className="bg-gray-200 group h-[550px] w-full rounded-lg relative">

                <img src="https://hcltech.imgix.net/sites/default/files/inline-images/article-600x360-2.webp" alt="" className="rounded-t-lg" />


                <div className="px-7 mt-14">
                  <div className="bg-blue-200 text-blue-600 py-3 w-14 flex justify-center items-center rounded-full text-3xl">
                    <FaMicrochip className="" />
                  </div>
                  <h2 className="my-5 font-bold text-2xl bg-gradient-to-tl from-violet-700 to-blue-600 bg-clip-text text-transparent">
                    SI/PI Analysis
                  </h2>

                  <p className=" text-md text-gray-700   ">
                    Conducting signal integrity and power integrity analyses to ensure reliable operation.
                  </p>

                  <motion.span
                    className=" flex  opacity-0 group-hover:opacity-100 gap-3 items-center absolute bottom-5 left-[-30%] group-hover:left-5  transition-all duration-500 ease-in-out cursor-pointer"
                  >
                    Read More
                  </motion.span>
                  <motion.span
                    className="flex gap-3 text-black  items-center absolute bottom-5 left-[25px] group-hover:left-28 transition-all duration-300 ease-in-out"
                  >
                    <ArrowRight />
                  </motion.span>

                </div>

              </div>


              <div className="bg-gray-200 group h-[550px] w-full rounded-lg relative">

                <img src="https://hcltech.imgix.net/sites/default/files/inline-images/article-600x360-2.webp" alt="" className="rounded-t-lg" />


                <div className="px-7 mt-14">
                  <div className="bg-blue-200 text-blue-600 py-3 w-14 flex justify-center items-center rounded-full text-3xl">
                    <FaMicrochip className="" />
                  </div>
                  <h2 className="my-5 font-bold text-2xl bg-gradient-to-tl from-violet-700 to-blue-600 bg-clip-text text-transparent">
                    SI/PI Analysis
                  </h2>

                  <p className=" text-md text-gray-700   ">
                    Conducting signal integrity and power integrity analyses to ensure reliable operation.
                  </p>

                  <motion.span
                    className=" flex  opacity-0 group-hover:opacity-100 gap-3 items-center absolute bottom-5 left-[-30%] group-hover:left-5  transition-all duration-500 ease-in-out cursor-pointer"
                  >
                    Read More
                  </motion.span>
                  <motion.span
                    className="flex gap-3 text-black  items-center absolute bottom-5 left-[25px] group-hover:left-28 transition-all duration-300 ease-in-out"
                  >
                    <ArrowRight />
                  </motion.span>

                </div>

              </div>

            </div> */}

            <ServiceCarousel/>
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default ElectronicDesign;