

import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'
import { ArrowRight } from 'lucide-react'
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';
import Link from 'next/link';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
   const image1 = "https://img.freepik.com/free-photo/medium-shot-smiley-man-wearing-helmet_23-2149426484.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid";

  
  return (
    <div className=''>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
        {/* Image Section */}
        <div ref={ref} className="relative w-full max-w-lg">
          <motion.div
            initial={{ x: -120, opacity: 0, scale: 0.9 }}
            animate={isInView ? { x: 0, opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeInOut", type: "spring" }}
            whileHover={{ scale: 1.05, }}
            className="w-full h-64 sm:h-80 lg:h-96 rounded-xl shadow-lg object-cover"
          >
            <DirectionAwareHover imageUrl={image1} />
          </motion.div>
        </div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-lg lg:max-w-xl mt-8 lg:mt-0"
        >
          <h2 className="text-lg sm:text-xl text-gray-800 flex items-center gap-2">
            <div className='w-2 h-2 rounded-full bg-blue-600'></div>
            About the Service
          </h2>
          <h2 className='title-all my-4 text-2xl sm:text-3xl lg:text-4xl'>
            <span className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-red-600 text-transparent bg-clip-text'>
              Sunkey Design Systems,
            </span> Our design for manufacturability (DFM) services
          </h2>
          <p className='text-base sm:text-lg font-medium text-gray-600 tracking-wide'>
          At Sunkey Design Systems,<span className='text-blue-600 font-semibold'>Our design for manufacturability (DFM) services</span>  focus on ensuring that your electronic designs are optimized for efficient production. <br /><br /> Our team of skilled engineers works closely with you to analyze and refine your designs, reducing production costs and improving product reliability.
          </p>
          <div className='w-full border mt-6 sm:mt-8'></div>
          <Link href={"/contact-us"}>
            <button className='group flex items-center shadow-lg bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 font-semibold gap-3 rounded-md mt-6 sm:mt-10 text-sm sm:text-base'>
              Contact Now 
              <ArrowRight className='group-hover:translate-x-1 transition-all duration-300 w-4 h-4 sm:w-5 sm:h-5' />
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default About