"use client"
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import React from 'react'
import { FaIndustry, FaHome, FaLightbulb, FaWater } from "react-icons/fa";


const Grid = () => {

  const features = [
    {
      img:"/industri.png",
      name: "Industrial IoT",
      description: "Implementing IoT technologies to enhance industrial efficiency and productivity.",
      href: "#",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-1",
      background: (
        <div className='absolute  right-0  origin-top  rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_5%,#000_30%)] group-hover:scale-105 w-full'>
        <img src="https://img.freepik.com/free-vector/isometric-gradient-3d-mobile-phone-background_52683-6232.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid" alt="" className='w-full'/>
      </div>
      ),
    },
    {
      img:"/home.png",
      name: "Smart Homes IoT",
      description: "Creating smart home solutions that make living easier and more convenient.",
      href: "#",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-2",
      background: (
        <div className='absolute  right-0  origin-top  rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_5%,#000_50%)] group-hover:scale-105 w-full'>
            <img src="https://img.freepik.com/free-photo/man-holding-smartphone-with-apartment-buildings-hologram_23-2149369107.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid" alt="" className='w-full'/>
          </div>
          ),
    },
    {
      img:"/light.png",
      name: "Smart Lighting IoT",
      description: "Developing intelligent lighting systems for energy efficiency and ambiance.",
      href: "#",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-2",
        background: (
      <div className='absolute  right-0  origin-top  rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_5%,#000_60%)] group-hover:scale-105 w-full'>
          <img src="https://img.freepik.com/free-photo/medium-shot-man-kid-relaxing-home_23-2150652853.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid" alt="" className='w-full'/>
        </div>
        ),
    },
    {
      img:"/level.png",
      name: "Level Monitoring",
      description: "Providing IoT-based level monitoring solutions for various applications.",
      className: "col-span-3 lg:col-span-1",
      href: "#",
      cta: "Learn more",
      background: (

        <div className='absolute  right-0  origin-top [mask-image:linear-gradient(to_top,transparent_5%,#000_50%)] rounded-md border transition-all duration-300 ease-out  group-hover:scale-105'>
          <img src="https://img.freepik.com/free-photo/variety-people-multitasking-3d-cartoon-scene_23-2151294543.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid" alt="" className='h-full w-full object-cover'/>
        </div>
      ),
    },
  ];

  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  )
}

export default Grid
