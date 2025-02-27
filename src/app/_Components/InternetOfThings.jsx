"use client"
import { motion } from "framer-motion";
import { FaIndustry, FaHome, FaLightbulb, FaWater, } from "react-icons/fa";
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
  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const services = [
    { text: "Industrial IoT: Enhancing industrial efficiency.", icon: <FaIndustry /> },
    { text: "Smart Homes IoT: Convenient living solutions.", icon: <FaHome /> },
    { text: "Smart Lighting IoT: Energy-efficient lighting.", icon: <FaLightbulb /> },
    { text: "Level Monitoring: IoT-based monitoring solutions.", icon: <FaWater /> },
  ];
  return (
    <section className="py-16 bg-white md:mx-24 mx-5">
      <div className="container mx-auto">
        <div className="md:flex justify-between items-center">
          <motion.h2
            className="text-4xl sm:text-5xl  font-extrabold text-center mb-8 sm:mb-4 text-gray-900"
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
          className="text-lg text-gray-500 font-medium  my-8 sm:mb-12 max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          We specialize in IoT solutions that transform industries and homes. Our focus areas include
        </motion.p>
        {/* <div className="flex flex-col md:flex-row items-center">
          <motion.ul
            className="md:w-1/2 grid gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={listVariants}
          >
            {services.map((service, index) => (
              <motion.li
                key={index}
                className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                variants={itemVariants}
              >
                <span className="text-3xl text-purple-600">{service.icon}</span>
                <p className="text-lg text-gray-700">{service.text}</p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.img
            src="/images/iot.jpg"
            alt="Internet of Things"
            className="md:w-1/2 mt-6 md:mt-0 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </div> */}

        <Grid/>
      </div>
    </section>
  )
}

export default InternetOfThings
