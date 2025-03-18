import { ArrowRight, SquareArrowOutUpRight } from 'lucide-react'
import Image from 'next/image';
import React from 'react'

const SmartLightIoT = () => {
  const features = [
    { img: "https://cdn-icons-png.freepik.com/256/7491/7491978.png", title: "Intelligent Lighting Control", description: "Developing systems that adjust lighting based on occupancy and ambient light." },
    { img: "https://cdn-icons-png.freepik.com/256/4647/4647782.png", title: "Color Temperature Adjustment", description: "Adjusting color temperatures to enhance ambiance and productivity." },
    { img: "https://cdn-icons-png.freepik.com/256/7438/7438912.png", title: "Remote Monitoring and Control", description: "Enabling remote access to lighting systems for enhanced convenience and security.", },
  ];
  
  return (
    <div className="">
      {/* Header Section */}
      <div className='flex flex-col justify-start items-start '>
        <h2 className="text-lg md:text-xl text-gray-800 flex items-center gap-2">
          <div className='w-2 h-2 rounded-full bg-blue-600'></div>Smart Lighting Internet of Things
        </h2>
        <h2 className='mt-4 title-all bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text'>
          Illuminating the Future
        </h2>
        <p className='text-gray-700 text-sm sm:text-base max-w-2xl  mt-3'>
          We develop intelligent lighting systems for energy efficiency and ambiance. Our solutions include:
        </p>
        <button className='group mt-5 flex items-center shadow-lg bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 py-3 font-semibold rounded-md transition-all'>
          Learn More <ArrowRight className='ml-2 group-hover:translate-x-1 transition-transform duration-300' />
        </button>
      </div>

      {/* Features Section */}
      <div className='grid grid-cols-1 lg:grid-cols-12 mt-16 gap-8'>
        {/* Left - Features List */}
        <div className='col-span-12 lg:col-span-8'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div key={index} className="bg-slate-200 p-6 rounded-xl shadow-lg transition-all duration-300 group hover:bg-gradient-to-r from-purple-600 to-blue-400/90">
                <div className="max-w-lg">
                  <Image priority width={40} height={40} src={item.img} alt={item.title} className="w-14 my-4 transition-all duration-300 group-hover:-translate-y-2" />
                  <h3 className="text-gray-900 text-lg md:text-xl font-bold mb-2 transition-all duration-300 group-hover:-translate-y-2 group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed transition-all duration-300 group-hover:-translate-y-2 group-hover:text-white">
                    {item.description}
                  </p>
                  <div className="flex gap-2 mt-6 text-blue-600">
                    <button className="font-medium opacity-0 group-hover:opacity-100 duration-300 transition-all group-hover:text-white">
                      Learn More
                    </button>
                    <span className="-translate-x-10 group-hover:translate-x-0 transition-transform duration-200 group-hover:text-white">
                      <SquareArrowOutUpRight size={18} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Image */}
        <div className='col-span-12 lg:col-span-4'>
          <Image priority width={1200} height={600} src="https://img.freepik.com/free-photo/door-leading-magical-world_23-2151038476.jpg" alt="SmartLight" className='w-full rounded-xl object-cover shadow-xl h-auto lg:h-full' />
        </div>
      </div>
    </div>
  );
}

export default SmartLightIoT;
