import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'
import { ArrowRight } from 'lucide-react'
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';
import Link from 'next/link';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const image1 = "https://img.freepik.com/free-photo/high-angle-female-technician-with-soldering-iron-electronics-motherboard_23-2148816365.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid";
  const image2 = "https://img.freepik.com/free-photo/woman-engineer-architect-working-modern-cad-program-sitting-desk-start-up-business-office_482257-5174.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid";
  
  return (
    <div className=''>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
        {/* Image Section */}
        <div ref={ref} className="relative w-full max-w-lg">
          <motion.div
            initial={{ x: -120, opacity: 0, scale: 0.9, }}
            animate={isInView ? { x: 0, opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeInOut", type: "spring", stiffness: 80 }}
            whileHover={{ scale: 1.05, }}
            className="relative  mx-auto rounded-xl shadow-lg object-cover"
          >
            <DirectionAwareHover imageUrl={image1} />
          </motion.div>
          {/* <motion.div
            initial={{ x: 120, opacity: 0, scale: 0.9, rotate: 10 }}
            animate={isInView ? { x: 0, opacity: 1, scale: 1, rotate: 12 } : {}}
            transition={{ duration: 1.5, ease: "easeInOut", type: "spring", stiffness: 80, delay: 0.3 }}
            whileHover={{ scale: 1.05, rotate: 10 }}
            className="relative w-64 h-80 sm:w-72 sm:h-96 mx-auto mt-8 rounded-xl shadow-lg object-cover hidden md:block"
          >
            <DirectionAwareHover imageUrl={image2} />
          </motion.div> */}
        </div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-lg lg:max-w-xl"
        >
          <h2 className="text-lg sm:text-xl text-gray-800 flex items-center gap-2">
            <div className='w-2 h-2 rounded-full bg-blue-600'></div>
            About the Service
          </h2>
          <h2 className='title-all my-4 text-2xl sm:text-3xl lg:text-4xl'>
            <span className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-red-600 text-transparent bg-clip-text'>
              Sunkey Design Systems,
            </span> our hardware design services
          </h2>
          <p className='para-all text-sm sm:text-base'>
            <span className='text-blue-600 font-semibold'>At Sunkey Design Systems,</span> our hardware design services are designed to help you create innovative products that meet your specific needs. 
            <br /><br /> 
            Our team of experienced engineers uses cutting-edge tools like CAD and CAE to ensure that your hardware designs are both functional and efficient. From conceptualization to prototyping, we guide you through every step of the design process.
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