"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FaCogs, FaClipboardCheck, FaBoxOpen } from "react-icons/fa";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 15px 25px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.3 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ManufacturingServices = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://img.freepik.com/free-photo/close-up-reparation-computer-motherboard_23-2148419169.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/male-car-mechanic-using-tablet-device-car-repair-shop_23-2150367545.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/warehouse-managers-taking-parcel-from-shelf-checking-code-digital-tablet-retail-storehouse-asian-coworkers-managing-customer-order-picking-packing-shipping-storage-room_482257-73633.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
  ];

  // Auto-cycle images
  useState(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  const services = [
    {
      text: "PCBA (Printed Circuit Board Assembly) ",
      icon: <FaCogs />,
      description: "Our PCBA services ensure high-quality, reliable circuit boards for your electronic products, with precision and efficiency.",
    },
    {
      text: "Test Fixtures",
      icon: <FaClipboardCheck />,
      description: "We design and build custom test fixtures to ensure your products meet the highest standards of quality and reliability.",
    },
    {
      text: "Box Build",
      icon: <FaBoxOpen />,
      description: "From components to finished products, our box build services deliver complete assembly solutions for your manufacturing needs.",
    },
  ];

  return (
    <section className="py-32  bg-gradient-to-b from-gray-100 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-8 sm:mb-4 text-gray-900" initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            Manufacturing Services
          </motion.h2>
          <motion.button
            className="border px-4 sm:px-6 py-2 sm:py-3 rounded-md text-gray-900 shadow-lg hover:scale-105 transition-all duration-300"
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
          SunKey Technologies provides comprehensive manufacturing services to support your product development needs.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative bg-cover bg-center h-[480px] group text-white rounded-xl overflow-hidden"
              style={{ backgroundImage: `url(${images[index]})` }}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80 rounded-xl"></div>
              <div className="flex flex-col justify-end p-6 relative z-10 h-full">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{service.text}</h3>
                <p className="text-sm opacity-80 mb-10">{service.description}</p>
              </div>
              <motion.span
                className="text-white  flex  gap-3 items-center absolute bottom-5 left-[-100%] group-hover:left-5  transition-all duration-500 ease-in-out cursor-pointer"
              >
                Read More
              </motion.span>
              <motion.span
                className="flex gap-3   items-center absolute bottom-5 left-[15px] group-hover:left-28 transition-all duration-300 ease-in-out"
              >
                <ArrowRight />
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManufacturingServices;