"use client";
import React from "react";
import { motion } from "framer-motion";

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
    color: "#60A5FA", // Light blue for hover (Tailwind blue-400)
    transition: { duration: 0.3 } 
  },
};

const Footer = () => {
  const navigation = {
     SUNKEY:[],
    "About Us": ["Who we are", "Careers", "Partners"],
    "Engineering Design Services": ["Hardware", "Firmware", "Software", "Mechanical"],
    "Electronic Design": ["PCB Design Services", "PCB Layout", "SI/PI Analysis", "Reverse Engineering", "Design Modification Services", "Design for Manufacturability"],
    "Manufacturing Services": ["PCBA", "Test Fixtures", "Box Build"],
    "Internet of Things": ["Industrial IoT", "Smart Homes IoT", "Smart Lighting IoT", "Level Monitoring"],
    "Case Studies": [],
    Resources: ["Blogs", "News"],
    "Contact Us": [],
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"

        >
          {Object.entries(navigation).map(([category, items]) => (
            <motion.div
              key={category}
              className="space-y-4"

            >
              <h3 className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-100">
                {category}
              </h3>
              {items.length > 0 ? (
                <ul className="space-y-2">
                  {items.map((item, index) => (
                    <motion.li
                      key={index}
                      className="text-sm sm:text-base text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-300"
                      variants={itemVariants}
                      whileHover="hover"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              ) : null}
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="mt-8 text-center text-gray-500 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          © 2025 SunKey Technologies. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;