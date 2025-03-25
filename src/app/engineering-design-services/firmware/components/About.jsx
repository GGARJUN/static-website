import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'
import { ArrowRight } from 'lucide-react'
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';
import Link from 'next/link';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const image1 = "https://img.freepik.com/free-photo/3d-rendering-futuristic-computer_23-2151004383.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid";
  return (
    <div className='lg:flex justify-between items-center gap-20'>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="lg:max-w-2xl"
      >
        <h2 className="text-xl  text-gray-800 flex items-center gap-2" ><div className='w-2 h-2 rounded-full bg-blue-600'></div>About the Service</h2>
        <h2 className='title-all my-5 '>Sunkey Design Systems,<span className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-red-600 text-transparent bg-clip-text'> our Firmware design services</span> </h2>
        <p className='text-lg font-medium text-gray-600 tracking-wide'><span className='text-blue-600 font-semibold'>At Sunkey Design Systems,</span> Our firmware design services at Sunkey Design Systems focus on crafting firmware that optimizes device performance and functionality. <br /><br /> Our team of experienced firmware engineers works closely with you to develop firmware solutions that meet your specific requirements, ensuring seamless integration with hardware components.

        </p>
        <div className='md:flex  items-center justify-center gap-40 mt-10'>
          <div className='flex items-center gap-3'>
            <img loading='lazy' src="https://html.awaikenthemes.com/corprate/images/icon-about-body-item-1.svg" alt="about-img1" />
            <h2 className='font-bold text-gray-700 text-lg'>Ongoing support & <br />maintenance</h2>
          </div>
          <div className='flex items-center gap-3 mt-10 md:mt-0'>
            <img loading='lazy' src="https://html.awaikenthemes.com/corprate/images/icon-about-body-item-2.svg" alt="about-img2" />
            <h2 className='font-bold text-gray-700 text-lg'>Comitment to continue <br /> improvement</h2>
          </div>
        </div>
        <div className='w-full border mt-8'></div>
        <Link href={"/contact-us"}>
          <button className='group flex items-center shadow-lg bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 font-semibold gap-3 rounded-md mt-6 sm:mt-10 text-sm sm:text-base'>
            Contact Now
            <ArrowRight className='group-hover:translate-x-1 transition-all duration-300 w-4 h-4 sm:w-5 sm:h-5' />
          </button>
        </Link>
      </motion.div>
      <motion.div
        initial={{ x: -120, opacity: 0, scale: 0.9, rotate: -10 }}
        animate={isInView ? { x: 0, opacity: 1, scale: 1, rotate: 0 } : {}}
        transition={{ duration: 1.5, ease: "easeInOut", type: "spring", stiffness: 80 }}
        whileHover={{ scale: 1.05, rotate: 0 }}
        ref={ref}
        className=" lg:w-[500px] 2xl:w-[600px] h-96 lg:h-[500px] mt-5  rounded-xl shadow-lg object-cover"
      >
        <DirectionAwareHover imageUrl={image1} />
      </motion.div>
    </div>
  )
}

export default About
