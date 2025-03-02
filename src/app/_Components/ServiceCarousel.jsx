"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaMicrochip, FaDraftingCompass, FaChartLine, FaTools } from "react-icons/fa"; // Added more icons for variety
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// Animation Variants
const carouselVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeInOut", 
      type: "spring", 
      stiffness: 100, 
      damping: 15 
    } 
  },
  exit: { 
    opacity: 0, 
    x: -100, 
    transition: { 
      duration: 0.8, 
      ease: "easeInOut", 
      type: "spring", 
      stiffness: 100, 
      damping: 15 
    } 
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 10, 
      duration: 0.5 
    } 
  },
  hover: { 
    scale: 1.03, 
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)", 
    transition: { duration: 0.3 } 
  },
};



const ServiceCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cards = [
    {
      title: "SI/PI Analysis",
      description: "Conducting signal integrity and power integrity analyses to ensure reliable operation.",
      image: "https://hcltech.imgix.net/sites/default/files/inline-images/article-600x360-2.webp",
      icon: <FaChartLine />,
    },
    {
      title: "Design Modification Services",
      description: "Enhancing existing designs for better functionality or manufacturability.",
      image: "https://hcltech.imgix.net/sites/default/files/inline-images/article-600x360-2.webp",
      icon: <FaTools />,
    },
    {
      title: "Reverse Engineering",
      description: "Analyzing existing products to improve or replicate them effectively.",
      image: "https://hcltech.imgix.net/sites/default/files/inline-images/article-600x360-2.webp",
      icon: <FaTools />,
    },
    {
      title: "Design for Manufacturability",
      description: "Ensuring designs are optimized for efficient and cost-effective production.",
      image: "https://hcltech.imgix.net/sites/default/files/inline-images/article-600x360-2.webp",
      icon: <FaMicrochip />,
    },
  ];

  // Auto-play functionality
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % cards.length);
//     }, 4000); // Change slide every 4 seconds
//     return () => clearInterval(timer); // Cleanup on unmount
//   }, [cards.length]);

  // Handle manual navigation
  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % cards.length);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length);
  };



  return (
    <div className="col-span-8">
      <div className="relative w-full  ">
        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute right-16 -bottom-14 bg-gray-100 rounded-xl p-2 shadow-md hover:bg-white transition-colors z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft/>
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="md:flex  justify-center items-center w-full "
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={carouselVariants}
          >
            <div className="flex justify-evenly items-center gap-5 w-full">
              {/* First Card (Left) */}
              <motion.div
                className=" group md:h-[650px] h-[600px] shadow-xl bg-white/70 w-full rounded-lg relative"
                variants={cardVariants}
              >
                <img  src={cards[currentSlide].image} alt="" className="rounded-t-lg  object-scale-down transition-all duration-300" />
                <div className="px-7 mt-14">
                  <div className="bg-blue-200 text-blue-600 py-3 w-14 flex justify-center items-center rounded-full text-3xl">
                    {cards[currentSlide].icon}
                  </div>
                  <h2 className="my-5 font-bold text-2xl bg-gradient-to-tl from-violet-700 to-blue-600 bg-clip-text text-transparent">
                    {cards[currentSlide].title}
                  </h2>
                  <p className="text-md text-gray-700">
                    {cards[currentSlide].description}
                  </p>
                  <motion.span
                    className="flex opacity-0 group-hover:opacity-100 gap-3 items-center absolute bottom-5 left-[-30%] group-hover:left-5 transition-all duration-500 ease-in-out cursor-pointer"
                  >
                    Read More
                  </motion.span>
                  <motion.span
                    className="flex gap-3 text-black items-center absolute bottom-5 left-[25px] group-hover:left-28 transition-all duration-300 ease-in-out"
                  >
                    <ArrowRight />
                  </motion.span>
                </div>
              </motion.div>

              {/* Second Card (Right) - Show the next card or loop back to the first */}
              <motion.div
                className=" shadow-xl group h-[550px] bg-white/70 w-full rounded-lg relative"
                variants={cardVariants}
              >
                <img src={cards[(currentSlide + 1) % cards.length].image} alt="" className="rounded-t-lg" />
                <div className="px-7 mt-14">
                  <div className="bg-blue-200 text-blue-600 py-3 w-14 flex justify-center items-center rounded-full text-3xl">
                    {cards[(currentSlide + 1) % cards.length].icon}
                  </div>
                  <h2 className="my-5 font-bold text-2xl bg-gradient-to-tl from-violet-700 to-blue-600 bg-clip-text text-transparent">
                    {cards[(currentSlide + 1) % cards.length].title}
                  </h2>
                  <p className="text-md text-gray-700">
                    {cards[(currentSlide + 1) % cards.length].description}
                  </p>
                  <motion.span
                    className="flex opacity-0 group-hover:opacity-100 gap-3 items-center absolute bottom-5 left-[-30%] group-hover:left-5 transition-all duration-500 ease-in-out cursor-pointer"
                  >
                    Read More
                  </motion.span>
                  <motion.span
                    className="flex gap-3 text-black items-center absolute bottom-5 left-[25px] group-hover:left-28 transition-all duration-300 ease-in-out"
                  >
                    <ArrowRight />
                  </motion.span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={goToNext}
          className="absolute right-4 -bottom-14   bg-gray-100 rounded-xl p-2 shadow-md hover:bg-white z-[1000px]"
          aria-label="Next slide"
        >
         <ChevronRight/>
        </button>

        {/* Dots Navigation */}
 
      </div>
    </div>
  );
};

export default ServiceCarousel;