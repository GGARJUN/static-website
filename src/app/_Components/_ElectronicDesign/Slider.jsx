import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

// Animation Variants
const itemVariants = {
  hidden: { opacity: 0, y: 0,  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 10, duration: 0.6 },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 15px 25px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.3 },
  },
};


// Sample Data
const design = [
  {
    img: "/expertise.png",
    title: "Expertise",
    description:
      "Our seasoned professionals excel in engineering, electronics, manufacturing, and IoT solutions.",
    // image:
    //   "https://img.freepik.com/free-photo/3d-rendering-biorobots-concept_23-2149524396.jpg",
    cimg:
      "https://img.freepik.com/free-vector/ai-technology-microchip-background-vector-digital-transformation-concept_53876-117808.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
  },
  {
    img: "/innovation.png",
    title: "Innovation",
    description:
      "Cutting-edge tech drives our solutions, keeping you at the forefront of progress.",
    // image:
    // "https://img.freepik.com/free-photo/3d-rendering-biorobots-concept_23-2149524396.jpg",
    cimg:
      "https://img.freepik.com/free-vector/ai-technology-microchip-background-vector-digital-transformation-concept_53876-117808.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
  },
];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % design.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + design.length) % design.length);
  };

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [index, isPlaying]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="relative bg-white rounded-xl shadow-md border border-blue-100 hover:border-blue-300 transition-all duration-300 group overflow-hidden"
        >
          {/* <motion.div
            variants={imageVariants}
            className="absolute inset-0 z-0 opacity-10 rounded-xl"
          >
            <img
              src={design[index].image}
              alt={design[index].title}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent rounded-xl" />
          </motion.div> */}

          <div>
            <img
              src={design[index].cimg}
              alt=""
              className="w-full h-72 rounded-t-xl"
            />
          </div>

          <div className="relative z-10 p-6">
            <div className="flex items-center justify-between mb-6">
              <motion.div
                className="text-blue-500"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <img src={design[index].img} alt="" className="w-12" />
              </motion.div>
            </div>
            <h3 className="text-3xl font-semibold mb-3 text-gray-900 transition-colors duration-300">
              {design[index].title}
            </h3>
            <p className="text-gray-600 text-md leading-relaxed transition-colors duration-300">
              {design[index].description}
            </p>
            <motion.div
              className="mt-6 flex items-center gap-3 text-blue-500 hover:text-blue-700 transition-colors duration-300"
              whileHover={{ x: 10 }}
            >
              <button className="text-sm font-medium">Learn More</button>
              <ArrowRight className="h-5 w-5" />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute -bottom-4 transform -translate-y-1/2 left-3 flex items-center">
        <Button onClick={prevSlide} className=" p-2 shadow-md">
          <ArrowLeft className="h-6 w-6 " />
        </Button>
      </div>

      <div className="absolute -bottom-4 transform -translate-y-1/2 left-14 flex items-center">
        <Button onClick={nextSlide} className=" p-2 shadow-md">
          <ArrowRight className="h-6 w-6 " />
        </Button>
      </div>

      {/* Indicators & Play/Pause */}
      <div className="flex justify-end items-center gap-3 mt-7 mr-5">
        {design.map((_, i) => (
          <button
            key={i}
            className={`w-6 h-1 rounded-full transition-all ${
              i === index ? "bg-black shadow-lg" : "bg-gray-400"
            }`}
            onClick={() => setIndex(i)}
          ></button>
        ))}

        <Button onClick={() => setIsPlaying(!isPlaying)} className="ml-3">
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </Button>
      </div>
    </div>
  );
};

export default Slider;
