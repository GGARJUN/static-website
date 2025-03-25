import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'
import { ArrowRight } from 'lucide-react'
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';
import Link from 'next/link';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const image1 = "https://img.freepik.com/free-photo/ordinary-human-job-performed-by-robot_23-2151008315.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid";
  
  return (
    <div className=''>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
        {/* Image Section */}
        <div ref={ref} className="relative w-full max-w-lg">
          <motion.div
            initial={{ x: -120, opacity: 0, scale: 0.9 }}
            animate={isInView ? { x: 0, opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeInOut", type: "spring", stiffness: 80 }}
            whileHover={{ scale: 1.05 }}
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
            </span> Our IoT services
          </h2>
          <p className='text-base sm:text-lg font-medium text-gray-600 tracking-wide'>
            At Sunkey Design Systems,
            <span className='text-blue-600 font-semibold'> Our Internet of Things (IoT) services</span> focus on deploying smart devices and sensors to enhance efficiency, safety, and productivity across various sectors. Our team of experts integrates IoT technology into systems to provide real-time monitoring, automation, and data-driven insights. From industrial automation to smart home solutions, we help transform industries and living spaces by 
            <span className='text-blue-600 font-semibold'> leveraging the power of IoT.</span>
            <br /><br />
            The <span className='text-blue-600 font-semibold'>Internet of Things (IoT)</span> is a network of physical devices, vehicles, appliances, and other objects embedded with sensors, software, and network connectivity. This allows them to collect and share data, creating a vast network of interconnected devices that can exchange data and perform various tasks autonomously.
            <span className='text-blue-600 font-semibold'> At Sunkey Design Systems, we leverage IoT technology</span> to enhance efficiency, safety, and productivity across various sectors.
          </p>
          <div className='w-full border mt-6 sm:mt-8'></div>
          <Link href={"/contact-us"}>
                    <button className=' mt-10 group flex items-center shadow-lg bg-blue-600 hover:bg-blue-700 text-white px-6 font-semibold py-3 gap-3 rounded-md '>Contact Now <ArrowRight className='group-hover:translate-x-1 transition-all duration-300' /></button>
                </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default About