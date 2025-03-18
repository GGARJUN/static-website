import React from 'react'
import { SquareArrowOutUpRight } from 'lucide-react'
import Image from 'next/image';
const Culture = () => {
    const features = [
        { img: "https://cdn-icons-png.freepik.com/256/1087/1087815.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Innovation", description: "Using sensors to predict equipment failures and reduce downtime." },
        { img: "https://cdn-icons-png.freepik.com/256/816/816376.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Meritocracy & Motivation", description: "Providing real-time data on production processes to optimize workflows." },
        { img: "https://cdn-icons-png.freepik.com/256/14373/14373389.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Accountability", description: "Automating tasks with smart machines and sensors to improve accuracy and efficiency.", },
        { img: "https://cdn-icons-png.freepik.com/256/537/537051.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Client Focus", description: "Tracking assets in real-time to improve logistics and supply chain management.", },
        { img: "https://cdn-icons-png.freepik.com/256/5526/5526430.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Respect", description: "Enabling remote monitoring and control of industrial equipment for enhanced safety and efficiency.", },
    ];
    return (
<div>
  {/* Heading Section */}
  <div className='flex flex-col justify-start items-start gap-5 '>
    <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold '>
      <span className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-red-600 text-transparent bg-clip-text'>
        Our Culture and Values
      </span>
    </h1>
    <h2 className="text-lg sm:text-xl text-gray-800  max-w-3xl">
      Our company culture reflects our core values and principles that govern how we accomplish our goals
      and interact with each other, as well as with our customers and the community.
    </h2>
  </div>

  {/* Grid Section */}
  <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center mt-8 sm:mt-16 ">
    {features.map((item, index) => (
      <div
        key={index}
        className={`bg-white cursor-pointer hover:bg-gradient-to-r from-purple-600 to-blue-400/90 p-6 rounded-xl shadow-lg transition-all duration-300 group
          ${index === features.length - 1 ? "lg:col-span-2 flex justify-start" : ""}`}
      >
        <div className="max-w-lg">
          <Image width={40} height={20}
            src={item.img}
            alt={item.title}
            className="w-16 my-6 group-hover:-translate-y-3 transition-all duration-300"
          />
          <h3 className="text-gray-900 text-xl sm:text-2xl line-clamp-1 lg:line-clamp-none font-bold mb-3 group-hover:-translate-y-3 transition-all duration-300 group-hover:text-white">
            {item.title}
          </h3>
          <p className="text-gray-600 text-md leading-relaxed group-hover:-translate-y-3 transition-all duration-300 group-hover:text-white line-clamp-2 ">
            {item.description}
          </p>
          <div className="flex gap-3 mt-8 justify-start text-blue-600">
            <button className="font-medium opacity-0 group-hover:opacity-100 duration-300 transition-all group-hover:text-white">
              Learn More
            </button>
            <span className="-translate-x-24 group-hover:translate-x-0 transition-transform duration-200 group-hover:text-white">
              <SquareArrowOutUpRight size={18} />
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    )
}

export default Culture
