"use client";
import { motion } from "framer-motion";
import {
  Users,
  Lightbulb,
  UserCheck,
  Shield,
  ArrowRight,
} from "lucide-react";
import ImageCarousel from "./ImageCarousel";

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

const glowVariants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

const WhyWorkWithUs = () => {
  const features = [
    {
      icon: <Users className="h-12 w-12 text-blue-500" />,
      title: "Expertise",
      description: "Our seasoned professionals excel in engineering, electronics, manufacturing, and IoT solutions.",
      image: "https://img.freepik.com/free-photo/one-businessman-using-wireless-technology-global-communications-generated-by-ai_188544-20422.jpg",
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-blue-500" />,
      title: "Innovation",
      description: "Cutting-edge tech drives our solutions, keeping you at the forefront of progress.",
      image: "https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg",
    },
    {
      icon: <UserCheck className="h-12 w-12 text-blue-500" />,
      title: "Customer-Centric",
      description: "Tailored solutions and exceptional support designed around your unique needs.",
      image: "https://img.freepik.com/free-photo/variety-people-multitasking-3d-cartoon-scene_23-2151294553.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-500" />,
      title: "Quality Assurance",
      description: "Uncompromising standards ensure excellence in every project we deliver.",
      image: "https://img.freepik.com/free-photo/standard-quality-control-collage_23-2149631023.jpg",
    },
  ];

  return (
    <section style={{ backgroundImage: "url('https://img.freepik.com/free-photo/person-using-ar-technology-their-daily-occupation_23-2151137351.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid')" }} className="py-24 bg-cover overflow-hidden relative">
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80 "></div>
      {/* Background Glow Effect (optional, subtle) */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-transparent"
        variants={glowVariants}
        animate="animate"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl  font-bold text-white mb-4">
            Why Work With Us
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            SunKey Technologies stands out as a partner of choice for businesses seeking reliable, high-quality solutions
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="md:flex md:justify-between md:gap-5 ">
          <div className="md:h-96 md:w-[50%] rounded-lg mb-10 md:mb-0 ">
            {/* <img src="https://img.freepik.com/free-photo/portrait-engineer-job-site-work-hours_23-2151589589.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid" alt="" className="rounded-lg object-cover w-full" />
            <img src="https://img.freepik.com/free-photo/portrait-engineer-job-site-work-hours_23-2151589589.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid" alt="" className="rounded-lg object-cover w-full" />
            <img src="https://img.freepik.com/free-photo/portrait-engineer-job-site-work-hours_23-2151589589.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid" alt="" className="rounded-lg object-cover w-full" />
            <img src="https://img.freepik.com/free-photo/portrait-engineer-job-site-work-hours_23-2151589589.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid" alt="" className="rounded-lg object-cover w-full" /> */}
            <ImageCarousel/>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2  gap-4"
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
                      {feature.icon}
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
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

        {/* Call-to-Action Buttons */}
        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Explore More Trends
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-4 bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            See All Events
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;