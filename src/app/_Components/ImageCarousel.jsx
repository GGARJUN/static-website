"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Animation Variants
const slideVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: -100, transition: { duration: 0.5 } },
};

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://img.freepik.com/free-photo/business-entrepreneur-man-presenting-company-statistics-using-tablet-financial-presentation_482257-4608.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/futuristic-technology-hologram_23-2151917425.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/portrait-engineer-job-site-work-hours_23-2151589589.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/person-working-with-ai-robot_23-2151015325.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
  ];

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 2000); // Change slide every 2 seconds (as per your updated interval)
    return () => clearInterval(timer); // Cleanup on unmount
  }, [images.length]);


  return (
    <div className="h-[614px] w-[100%] border rounded-lg  overflow-hidden relative">
      {/* Carousel Container */}
      <div className="w-full h-full relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={images[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          />
        </AnimatePresence>


      </div>
    </div>
  );
};

export default ImageCarousel;