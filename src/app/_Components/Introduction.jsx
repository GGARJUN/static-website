"use client";
import { motion } from "framer-motion";
import { FaMicrochip, FaTools, FaIndustry } from "react-icons/fa";

const Introduction = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.3 } },
  };

  const left = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, staggerChildren: 0.3 } },
  };
  const right = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, staggerChildren: 0.3 } },
  };

  return (
    <section className="py-12 bg-white text-gray-900 px-4 sm:px-6 md:px-8 lg:px-20">
      {/* Content Section */}
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <motion.h2
            className="text-4xl sm:text-5xl  font-extrabold text-gray-900"
            variants={sectionVariants}
          >
            SunKey Technologies
          </motion.h2>

          <motion.button
            className="border px-4 sm:px-6 py-2 sm:py-3 rounded-md text-gray-900 shadow-lg hover:scale-105 duration-300 ease-in-out"
            variants={sectionVariants}
          >
            Learn More
          </motion.button>
        </div>

        <motion.p
          className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl my-4 sm:my-5"
          variants={sectionVariants}
        >
          We empower businesses to innovate in the tech landscape by providing cutting-edge solutions in
          <span className="text-gray-900 font-semibold"> engineering design, electronics, IoT, and manufacturing.</span>
        </motion.p>
      </motion.div>

      <div className="max-w-7xl mx-auto mt-8">
        <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-5">
          {/* Services Icons */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 text-lg justify-center items-center"
            variants={left}
          >
            <div className="p-4 sm:p-5 flex flex-col gap-2 w-full sm:w-[360px] h-[185px] border rounded-md shadow-lg hover:scale-105 duration-300 ease-in-out">
              <h2 className="font-extrabold text-4xl sm:text-5xl text-gray-600">1.</h2>
              <span className="font-medium text-lg sm:text-xl">Engineering Design Service</span>
              <p className="text-xs sm:text-sm font-thin">SunKey Technologies offers a wide range of engineering design services designed to meet the diverse needs of our clients.</p>
            </div>
            <div className="p-4 sm:p-5 flex flex-col gap-2 w-full sm:w-[360px] h-[185px] border rounded-md shadow-lg hover:scale-105 duration-300 ease-in-out">
              <h2 className="font-extrabold text-4xl sm:text-5xl text-gray-600">2.</h2>
              <span className="font-medium text-lg sm:text-xl">Electronic Design</span>
              <p className="text-xs sm:text-sm font-thin">Our electronic design services are designed to help you bring your electronic products to life.</p>
            </div>
            <div className="p-4 sm:p-5 flex flex-col gap-2 w-full sm:w-[360px] h-[185px] border rounded-md shadow-lg hover:scale-105 duration-300 ease-in-out">
              <h2 className="font-extrabold text-4xl sm:text-5xl text-gray-600">3.</h2>
              <span className="font-medium text-lg sm:text-xl">Manufacturing Service</span>
              <p className="text-xs sm:text-sm font-thin">SunKey Technologies provides comprehensive manufacturing services to support your product development needs.</p>
            </div>
            <div className="p-4 sm:p-5 flex flex-col gap-2 w-full sm:w-[360px] h-[185px] border rounded-md shadow-lg hover:scale-105 duration-300 ease-in-out">
              <h2 className="font-extrabold text-4xl sm:text-5xl text-gray-600">4.</h2>
              <span className="font-medium text-lg sm:text-xl">Internet of Things</span>
              <p className="text-xs sm:text-sm font-thin">We specialize in IoT solutions that transform industries and homes.</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={right}
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-4 sm:mt-0"
          >
            <div className="flex flex-col gap-4 sm:gap-5">
              <img
                src="https://img.freepik.com/free-photo/man-architect-working-project-with-vr-glasses-new-technologies-3d_1268-29304.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid"
                alt=""
                className="w-full sm:w-52 h-40 sm:h-40 object-cover rounded-md shadow-lg hover:scale-105 duration-300 ease-in-out"
              />
              <img
                src="https://img.freepik.com/free-photo/close-up-wires-tech-background_23-2148882631.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid"
                alt=""
                className="w-full sm:w-52 h-60 sm:h-60 object-cover rounded-md shadow-lg hover:scale-105 duration-300 ease-in-out"
              />
            </div>
            <div className="flex flex-col gap-4 sm:gap-5 mb-4 sm:mb-0">
              <img
                src="https://img.freepik.com/free-photo/asian-male-engineer-specialist-with-measuring-machine-with-manipulator-armthreedimensional-coordinate-measurement-check-sizes-3d-check-sizes-parts-cmm-after-machining-process_609648-162.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid"
                alt=""
                className="w-full sm:w-52 h-60 sm:h-60 object-cover rounded-md shadow-lg hover:scale-105 duration-300 ease-in-out"
              />
              <img
                src="https://img.freepik.com/free-photo/light-trails-buildings_1359-714.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid"
                alt=""
                className="w-full sm:w-52 h-40 sm:h-40 object-cover rounded-md shadow-lg hover:scale-105 duration-300 ease-in-out"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;