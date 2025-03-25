import { ArrowRight, SquareArrowOutUpRight } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const SmartLightIoT = () => {
  const features = [
    { img: "https://cdn-icons-png.freepik.com/256/7491/7491978.png", title: "Intelligent Lighting Control", description: "Developing systems that adjust lighting based on occupancy and ambient light." },
    { img: "https://cdn-icons-png.freepik.com/256/4647/4647782.png", title: "Color Temperature Adjustment", description: "Adjusting color temperatures to enhance ambiance and productivity." },
    { img: "https://cdn-icons-png.freepik.com/256/7438/7438912.png", title: "Remote Monitoring and Control", description: "Enabling remote access to lighting systems for enhanced convenience and security." },
  ];
  
  return (
    <div className="">
      {/* Header Section */}
      <div className='flex flex-col justify-start items-start'>
        <h2 className="text-lg sm:text-xl text-gray-800 flex items-center gap-2">
          <div className='w-2 h-2 rounded-full bg-blue-600'></div>
          Smart Lighting Internet of Things
        </h2>
        <h2 className='mt-4 title-all bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text text-2xl sm:text-3xl lg:text-4xl'>
          Illuminating the Future
        </h2>
        <p className='text-gray-700 text-sm sm:text-base max-w-2xl mt-3'>
          We develop intelligent lighting systems for energy efficiency and ambiance. Our solutions include:
        </p>
        <Link href={"/"}>
          <button className='group mt-5 flex items-center shadow-lg bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 font-semibold gap-3 rounded-md text-sm sm:text-base'>
            Learn More 
            <ArrowRight className='group-hover:translate-x-1 transition-all duration-300 w-4 h-4 sm:w-5 sm:h-5' />
          </button>
        </Link>
      </div>

      {/* Features Section */}
      <div className='flex flex-col lg:flex-row mt-12 gap-8'>
        {/* Left - Features List */}
        <div className='w-full lg:w-2/3'>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div key={index} className="bg-slate-200 p-4 sm:p-6 rounded-xl shadow-lg transition-all duration-300 group hover:bg-gradient-to-r from-purple-600 to-blue-400/90">
                <div className="max-w-md">
                  <img loading='lazy' src={item.img} alt={item.title} className="w-12 sm:w-14 my-4 transition-all duration-300 group-hover:-translate-y-2" />
                  <h3 className="text-gray-900 text-base sm:text-lg md:text-xl font-bold mb-2 transition-all duration-300 group-hover:-translate-y-2 group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed transition-all duration-300 group-hover:-translate-y-2 group-hover:text-white">
                    {item.description}
                  </p>
                  {/* Commented out section remains commented out */}
                  {/* <div className="flex gap-2 mt-6 text-blue-600">
                    <button className="font-medium opacity-0 group-hover:opacity-100 duration-300 transition-all group-hover:text-white">
                      Learn More
                    </button>
                    <span className="-translate-x-10 group-hover:translate-x-0 transition-transform duration-200 group-hover:text-white">
                      <SquareArrowOutUpRight size={18} />
                    </span>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Image */}
        <div className='w-full lg:w-1/3'>
          <img 
            loading='lazy' 
            src="https://img.freepik.com/free-photo/door-leading-magical-world_23-2151038476.jpg" 
            alt="SmartLight" 
            className='w-full rounded-xl object-cover shadow-xl h-64 sm:h-80 lg:h-full' 
          />
        </div>
      </div>
    </div>
  );
}

export default SmartLightIoT;