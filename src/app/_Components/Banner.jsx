"use client";
import { Button } from "@/components/ui/button";
import { Highlight } from "@/components/ui/hero-highlight";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { FaArrowDown } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Banner = () => {
  return (
    <section
      className="relative  bg-cover  text-white "
      style={{ backgroundImage: "url('/Banner.png')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80 "></div>

      <div className="flex flex-col  justify-center gap-10 h-screen mx-20 items-start  relative z-10">
        {/* Animated Title */}
        <motion.h1
          className="text-4xl md:text-5xl  font font-medium mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >

          <Highlight className="">
            Innovative Engineering
          </Highlight>
          <br className="" /><span className="mt-2 block text-4xl md:text-5xl">Solutions for a Smarter Future</span>
        </motion.h1>



        <div className="flex justify-center items-center gap-5">
          <motion.button
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }} className="flex justify-between items-center border px-10 rounded-full font-bold bg-white/10 p-1">Get Started
            <span className="text-black font-bold bg-white p-2 rounded-full relative left-9"><FiArrowUpRight size={20} /></span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }} 
            className="border-l-2 border-gray-400  h-12 relative "/>

          <motion.div initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }} className="flex items-center gap-3">
            <div className="bg-white/20 border p-3  rounded-full">
              <RiContactsFill size={16} />
            </div>
            <h2 className="text-lg font-bold tracking-wide">Contact With Us</h2>
          </motion.div>

          {/* <motion.form
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative w-full">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 pl-10 rounded-l-md text-black bg-transparent border w-full focus:outline-none "
            />
          </div>
          <button
            type="submit"
            className="p-[10px] px-5 relative -left-1 bg-blue-700 rounded-r-md hover:bg-blue-800 transition-colors"
          >
            Submit
          </button>
        </motion.form> */}
        </div>
      </div>

      <div className="absolute bottom-10 w-full px-20">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
        <FaArrowDown className="animate-bounce duration-800 ease-in-out"/>
          <h2 className="font-semibold">SCROLL TO EXPLORE</h2>
        </div>
        <div className="flex items-center gap-10">
        <FaFacebookF />
        <FaXTwitter />
        <FaLinkedinIn />
        </div>
      </div>
      </div>
      {/* <motion.img
            src="/images/dummy-logo.png"
            alt="Client Logo"
            className="mt-8 mx-auto w-32 animate-pulse"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          /> */}
    </section>
  );
};

export default Banner;
