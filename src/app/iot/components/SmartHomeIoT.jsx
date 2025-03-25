import { ArrowRight, SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SmartHomeIoT = () => {
  const features = [
    {
      img: "https://cdn-icons-png.freepik.com/256/9658/9658201.png",
      title: "Home Automation",
      description: "Integrating systems for temperature control, security, and entertainment."
    },
    {
      img: "https://cdn-icons-png.freepik.com/256/18536/18536719.png",
      title: "Energy Efficiency",
      description: "Implementing solutions to reduce energy consumption and optimize resource usage."
    },
    {
      img: "https://cdn-icons-png.freepik.com/256/10873/10873524.png",
      title: "Voice Control Integration",
      description: "Integrating voice assistants for seamless control of smart home devices."
    },
  ];

  return (
    <div className="">
      <div className=''>
        <h2 className="text-xl text-gray-800 flex items-center justify-start gap-2">
          <div className='w-2 h-2 rounded-full bg-blue-600'></div>
          Smart Home Internet of Things
        </h2>
        <h2 className='mt-4 title-all bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text'>
          Making Homes Smarter
        </h2>
        <p className='mt-4 text-gray-600 text-lg max-w-2xl '>
          We create smart home solutions that make living easier and more convenient.
        </p>
        <Link href={"/"}>
          <button className='group  mt-5 flex items-center shadow-lg bg-blue-600 hover:bg-blue-700 text-white px-6 font-semibold py-3 gap-3 rounded-md '>Learn More <ArrowRight className='group-hover:translate-x-1 transition-all duration-300' /></button>
        </Link>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 mt-16'>
        <div className='lg:col-span-4'>
          <img loading='lazy'  
            src="https://img.freepik.com/free-photo/close-up-hands-using-mouse_23-2148994173.jpg"
            alt="Smart Home" 
            className='w-full rounded-xl object-cover shadow-xl' 
          />
        </div>

        <div className='lg:col-span-8'>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white cursor-pointer hover:bg-gradient-to-r from-purple-600 to-blue-400/90 p-6 rounded-xl shadow-lg transition-all duration-300 group"
              >
                <img loading='lazy'                  src={item.img} 
                  alt={item.title} 
                  className="w-16 my-6 group-hover:-translate-y-3 transition-all duration-300" 
                />
                <h3 className="text-gray-900 text-xl font-bold mb-3 group-hover:-translate-y-3 transition-all duration-300 group-hover:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-md leading-relaxed group-hover:-translate-y-3 transition-all duration-300 group-hover:text-white">
                  {item.description}
                </p>
                {/* <div className="flex gap-3 mt-6 text-blue-600">
                  <button className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:text-white font-medium">
                    Learn More
                  </button>
                  <span className="-translate-x-24 group-hover:translate-x-0 transition-transform duration-300 group-hover:text-white">
                    <SquareArrowOutUpRight size={18} />
                  </span>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartHomeIoT;