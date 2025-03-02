"use client"
import { motion } from "framer-motion";
import Grid from "./Grid";

const InternetOfThings = () => {
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


  return (
    <section className="py-32 shadow-2xl bg-gradient-to-r from-pink-300/10 via-blue-200 to-indigo-400/10 overflow-hidden">
      <div className="container mx-auto">
        <div className="md:flex justify-between items-center">
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-8 sm:mb-4 text-gray-900"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}

          >
            Internet of Things
          </motion.h2>
          <motion.button
            className="border px-4 sm:px-6 py-2 sm:py-3 rounded-md text-gray-900 shadow-lg hover:scale-105 duration-300 ease-in-out"
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
          We specialize in IoT solutions that transform industries and homes. Our focus areas include
        </motion.p>
        <Grid />
      </div>
    </section>
  )
}

export default InternetOfThings
