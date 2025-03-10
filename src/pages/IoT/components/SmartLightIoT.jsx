import { ArrowRight, SquareArrowOutUpRight } from 'lucide-react'
import React from 'react'

const SmartLightIoT = () => {
  const features = [
    { img: "https://cdn-icons-png.freepik.com/256/7491/7491978.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Intelligent Lighting Control", description: "Developing systems that adjust lighting based on occupancy and ambient light." },
    { img: "https://cdn-icons-png.freepik.com/256/4647/4647782.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Color Temperature Adjustment", description: "Adjusting color temperatures to enhance ambiance and productivity." },
    { img: "https://cdn-icons-png.freepik.com/256/7438/7438912.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Remote Monitoring and Control", description: "Enabling remote access to lighting systems for enhanced convenience and security.", },
  ];
  return (
    <div>
      <div className='flex flex-col justify-center items-center '>
        <h2 className="text-xl   text-gray-800 flex items-center justify-center gap-2" ><div className='w-2 h-2 rounded-full bg-blue-600'></div>Smart Lighting Internet of Things</h2>
        <h2 className='mt-8 font-semibold text-center text-5xl bg-gradient-to-r from-purple-500  to-pink-500 text-transparent bg-clip-text'>Illuminating the Future</h2>
        <p className=' text-center px-32 mt-5'>We develop intelligent lighting systems for energy efficiency and ambiance. Our solutions include

        </p>
        <button className='group  mt-5 flex items-center shadow-lg bg-blue-600 hover:bg-blue-700 text-white px-6 font-semibold py-3 gap-3 rounded-md '>Learn More <ArrowRight className='group-hover:translate-x-1 transition-all duration-300' /></button>
      </div>


      <div className='grid grid-cols-12 mt-24 gap-10  '>
        <div className='col-span-8'>
          <div className="gap-4 grid md:grid-cols-2 grid-cols-1  ">
            {features.map((item, index) => (
              <div
                key={index}
                className={`bg-slate-200 cursor-pointer hover:bg-gradient-to-r from-purple-600 to-blue-400/90 p-6 rounded-xl shadow-lg transition-all duration-300 group
        ${index === features.length - 3 ? "md:col-span-2 flex justify-start  " : ""}`}
              >
                <div className="max-w-lg ">
                  <img
                    src={item.img}
                    alt=""
                    className="w-16 my-6  group-hover:-translate-y-3 transition-all duration-300"
                  />
                  <h3 className="text-gray-900 2xl:text-2xl text-xl font-bold mb-3 group-hover:-translate-y-3 transition-all duration-300 group-hover:text-white line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-md leading-relaxed group-hover:-translate-y-3 transition-all duration-300 group-hover:text-white line-clamp-2">
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
        <div className='relative  col-span-4'>
          <img src="https://img.freepik.com/free-photo/door-leading-magical-world_23-2151038476.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid" alt="" className=' w-[] rounded-xl  object-cover shadow-xl h-full ' />
          {/* <div className='absolute -bottom-8 font-semibold  shadow-xl left-[10%] text-xl  py-5 px-10 rounded-lg bg-white/70'>
            ✨ Illuminating the Future
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default SmartLightIoT