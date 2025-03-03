"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 10, duration: 0.6 } },
  hover: { scale: 1.03, color: "#60A5FA", transition: { duration: 0.3 } },
};

const Footer = () => {
  const navigation = {
    "About Us": ["Who we are", "Careers", "Partners"],
    "Engineering Design Services": ["Hardware", "Firmware", "Software", "Mechanical"],
    "Electronic Design": ["PCB Design Services", "PCB Layout", "SI/PI Analysis", "Reverse Engineering", "Design Modification Services", "Design for Manufacturability"],
    "Manufacturing Services": ["PCBA", "Test Fixtures", "Box Build"],
    "Internet of Things": ["Industrial IoT", "Smart Homes IoT", "Smart Lighting IoT", "Level Monitoring"],
    "Contact Us": [],
    Resources: ["Blogs", "News"],
    "Case Studies": [],
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-14 pb-10 ">
      <div className="mx-20 px-4 sm:px-6 lg:px-12">
        <motion.div className="grid grid-cols-12  gap-5 md:gap-10">
          <div className="md:col-span-4 col-span-12 flex flex-col gap-8 mb-5 md:mb-0">
            <h2 className="text-4xl font-bold">SunKeyTechnology</h2>
            <p className="text-[14px] text-gray-400 max-w-md">We empower businesses to innovate in the tech landscape by providing cutting-edge solutions in engineering design, electronics, IoT, and manufacturing.</p>
            <div className="flex items-center gap-10">
              <FaFacebookF size={40} className="px-2 py-2 rounded-xl bg-white text-black hover:scale-110 transition-all duration-300 hover:text-blue-500 border " />
              <FaXTwitter size={40} className="px-2 py-2 rounded-xl bg-white text-black hover:scale-110 transition-all duration-300 hover:text-blue-500 border " />
              <FaLinkedinIn size={40} className="px-2 py-2 rounded-xl bg-white text-black hover:scale-110 transition-all duration-300 hover:text-blue-500 border " />
            </div>
          </div>
          <div className="md:col-span-8 col-span-12 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(navigation).map(([category, items]) => (
              <motion.div key={category} className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-100">{category}</h3>
                {items.length > 0 && (
                  <ul className="space-y-2">
                    {items.map((item, index) => (
                      <motion.li
                        key={index}
                        className="text-sm sm:text-base text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-200"
                        variants={itemVariants}
                        whileHover="hover"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
            <div className="md:-mt-32">
              <Input type="text" placeholder="Enter Your Number" className="py-6" />
              <Button className="bg-blue-600 mt-5">Request a Callback</Button>
            </div>
          </div>
        </motion.div>
        <span className="w-full border mt-10  border-gray-700 flex "></span>
        <div
          className="mt-10 md:flex flex-row  justify-between items-center "
        >
          <h2 className="text-gray-500 text-sm sm:text-base">Copyright © 2025 SunKey Technologies. All rights reserved.</h2>
          <h2 className="text-gray-500 text-sm sm:text-base md:mt-0 mt-2">User Terms & Conditions  |  Privacy Policy</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;