import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'
import { ArrowRight } from 'lucide-react'
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const image1 = "https://img.freepik.com/premium-photo/workers-comparing-graphics_926199-3505788.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid";
  const image2 = "https://img.freepik.com/free-photo/colleagues-working-office_23-2149307795.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid";
  return (
    <div className='grid grid-cols-12 items-center justify-between gap-20'>
          <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="col-span-12 lg:col-span-8 2xl:col-span-6  md:max-w-2xl max-w-md"
    >
      <h2 className="text-xl  text-gray-800 flex items-center gap-2" ><div className='w-2 h-2 rounded-full bg-blue-600'></div>About the Service</h2>
      <h1 className='title-all my-5 '><span className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-red-600 text-transparent bg-clip-text'>SunKey Technologies,</span> our Software design services</h1>
      <p className='para-all '><span className='text-blue-600 font-semibold'>At SunKey Technologies, our software design services</span> focus on creating software applications that enhance user experience and efficiency. <br /><br /> Our team of skilled software engineers works closely with you to develop software solutions that meet your specific needs, from conceptualization to deployment.
      </p>
      <div className='w-full border mt-8'></div>
      <button className='group flex items-center shadow-lg bg-blue-600 hover:bg-blue-700 text-white px-6 font-semibold py-3 gap-3 rounded-md mt-10'>Contact Now <ArrowRight className='group-hover:translate-x-1 transition-all duration-300' /></button>
    </motion.div>
    <div ref={ref} className="relative col-span-12 lg:col-span-4 2xl:col-span-6 left-10  md:left-[15%] lg:left-0 lg:-top-20 2xl:top-0 my-20 lg:my-0 ">
      <motion.div
        initial={{ x: -120, opacity: 0, scale: 0.9, rotate: -10 }}
        animate={isInView ? { x: 0, opacity: 1, scale: 1, rotate: -12 } : {}}
        transition={{ duration: 1.5, ease: "easeInOut", type: "spring", stiffness: 80 }}
        whileHover={{ scale: 1.05, rotate: -10 }}
        className="absolute top-0 left-0 2xl:h-[350px] 2xl:w-[300px] h-[250px] w-[200px] rounded-xl shadow-lg object-cover"
      >
        <DirectionAwareHover imageUrl={image1} />
      </motion.div>
      <motion.div
        initial={{ x: 120, opacity: 0, scale: 0.9, rotate: 10 }}
        animate={isInView ? { x: 0, opacity: 1, scale: 1, rotate: 12 } : {}}
        transition={{ duration: 1.5, ease: "easeInOut", type: "spring", stiffness: 80, delay: 0.3 }}
        whileHover={{ scale: 1.05, rotate: 10 }}
        className="absolute -bottom-40 2xl:left-60 left-40 2xl:h-[350px] 2xl:w-[300px] h-[250px] w-[200px] rounded-xl shadow-lg object-cover"
      >
        <DirectionAwareHover imageUrl={image2} />
      </motion.div>
    </div>

  </div>
  )
}

export default About
