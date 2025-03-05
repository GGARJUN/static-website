import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'
import { ArrowRight } from 'lucide-react'
import React from 'react'

const About = () => {
  const image1 = "https://img.freepik.com/free-photo/high-angle-female-technician-with-soldering-iron-electronics-motherboard_23-2148816365.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid";
  const image2 = "https://img.freepik.com/free-photo/woman-engineer-architect-working-modern-cad-program-sitting-desk-start-up-business-office_482257-5174.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid";
  return (
    <div className='flex justify-between items-center gap-20'>
      <div className='relative'>
        <div className='2xl:h-[350px] 2xl:w-[300px] h-[250px] w-[200px] rounded-xl shadow-lg -rotate-12 object-cover'>
          <DirectionAwareHover imageUrl={image1} />
        </div>
        <div className="h-[250px] w-[200px] 2xl:h-[350px] 2xl:w-[300px] rounded-xl shadow-lg absolute -bottom-40 2xl:left-60 left-40 rotate-12 object-cover">
          <DirectionAwareHover imageUrl={image2} />
        </div>
      </div>
      <div className='max-w-2xl'>
        <h2 className="text-xl  text-gray-800 flex items-center gap-2" ><div className='w-2 h-2 rounded-full bg-blue-600'></div>About the Service</h2>
        <h1 className='text-5xl font-bold my-5 '><span className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-red-600 text-transparent bg-clip-text'>SunKey Technologies,</span> our hardware design services</h1>
        <p className='text-lg font-medium text-gray-600 tracking-wide'><span className='text-blue-600 font-semibold'>At SunKey Technologies,</span> our hardware design services are designed to help you create innovative products that meet your specific needs. <br /><br /> Our team of experienced engineers uses cutting-edge tools like CAD and CAE to ensure that your hardware designs are both functional and efficient. From conceptualization to prototyping, we guide you through every step of the design process.
        </p>
        <div className='w-full border mt-8'></div>
        <button className='group flex items-center shadow-lg bg-blue-600 hover:bg-blue-700 text-white px-6 font-semibold py-3 gap-3 rounded-md mt-10'>Contact Now <ArrowRight className='group-hover:translate-x-1 transition-all duration-300' /></button>
      </div>
    </div>
  )
}

export default About
