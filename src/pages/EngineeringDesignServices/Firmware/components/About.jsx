import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'
import { ArrowRight } from 'lucide-react'
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const image1 = "https://img.freepik.com/free-photo/3d-rendering-futuristic-computer_23-2151004383.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid";
  return (
    <div className='flex justify-between items-center gap-20'>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <h2 className="text-xl  text-gray-800 flex items-center gap-2" ><div className='w-2 h-2 rounded-full bg-blue-600'></div>About the Service</h2>
        <h1 className='text-5xl font-bold my-5 '>SunKey Technologies,<span className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-red-600 text-transparent bg-clip-text'> our Firmware design services</span> </h1>
        <p className='text-lg font-medium text-gray-600 tracking-wide'><span className='text-blue-600 font-semibold'>At SunKey Technologies,</span> Our firmware design services at SunKey Technologies focus on crafting firmware that optimizes device performance and functionality. <br /><br /> Our team of experienced firmware engineers works closely with you to develop firmware solutions that meet your specific requirements, ensuring seamless integration with hardware components.

        </p>
        <div className='flex items-center justify-center gap-40 mt-10'>
          <div className='flex items-center gap-3'>
            <img src="https://html.awaikenthemes.com/corprate/images/icon-about-body-item-1.svg" alt="" />
            <h2 className='font-bold text-gray-700 text-lg'>Ongoing support & <br />maintenance</h2>
          </div>
          <div className='flex items-center gap-3'>
            <img src="https://html.awaikenthemes.com/corprate/images/icon-about-body-item-2.svg" alt="" />
            <h2 className='font-bold text-gray-700 text-lg'>Comitment to continue <br /> improvement</h2>
          </div>
        </div>
        <div className='w-full border mt-8'></div>
        <button className='group flex items-center shadow-lg bg-blue-600 hover:bg-blue-700 text-white px-6 font-semibold py-3 gap-3 rounded-md mt-10'>Contact Now <ArrowRight className='group-hover:translate-x-1 transition-all duration-300' /></button>
      </motion.div>
      <motion.div
        initial={{ x: -120, opacity: 0, scale: 0.9, rotate: -10 }}
        animate={isInView ? { x: 0, opacity: 1, scale: 1, rotate: 0 } : {}}
        transition={{ duration: 1.5, ease: "easeInOut", type: "spring", stiffness: 80 }}
        whileHover={{ scale: 1.05, rotate: 0 }}
        ref={ref}
        className=" w-96 md:w-[500px] 2xl:w-[600px] h-96 md:h-[500px] mt-5  rounded-xl shadow-lg object-cover"
      >
        <DirectionAwareHover imageUrl={image1} />
      </motion.div>
    </div>
  )
}

export default About
