import { ArrowRight, SquareArrowOutUpRight } from 'lucide-react'
import React from 'react'

const IndustrialIoT = () => {
  const features = [
    { img: "https://cdn-icons-png.freepik.com/256/15255/15255364.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Predictive Maintenance", description: "Using sensors to predict equipment failures and reduce downtime." },
    { img: "https://cdn-icons-png.freepik.com/256/11915/11915280.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Real-time Monitoring", description: "Providing real-time data on production processes to optimize workflows." },
    { img: "https://cdn-icons-png.freepik.com/256/3806/3806133.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Industrial Automation", description: "Automating tasks with smart machines and sensors to improve accuracy and efficiency.", },
  ];
  return (
    <div>
      <div className='flex flex-col justify-center items-center '>
        <h2 className="text-xl   text-gray-800 flex items-center justify-center gap-2" ><div className='w-2 h-2 rounded-full bg-blue-600'></div>Industrial Internet of Things</h2>
        <h2 className='mt-8 font-semibold text-center text-5xl bg-gradient-to-r from-purple-500  to-pink-500 text-transparent bg-clip-text'>Transforming Industries with Smart Solutions</h2>
        <p className=' text-center px-32 mt-5'>We implement IoT technologies to enhance industrial efficiency and productivity. Our solutions include:
        </p>
        <button className='group  mt-5 flex items-center shadow-lg bg-blue-600 hover:bg-blue-700 text-white px-6 font-semibold py-3 gap-3 rounded-md '>Learn More <ArrowRight className='group-hover:translate-x-1 transition-all duration-300' /></button>
        <div className='relative mt-20'>
          <img src="https://img.freepik.com/free-photo/portrait-engineers-work-hours-job-site_23-2151589617.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid" alt="" className=' w-[1100px] rounded-3xl h-96  object-cover shadow-xl' />
          <div className='absolute -bottom-8 font-semibold  shadow-xl left-[27%] text-xl  py-5 px-10 rounded-lg bg-white/70'>
            ✨ Transforming Industries with Smart Solutions
          </div>
        </div>
      </div>
      <div className="gap-4 grid md:grid-cols-3 grid-cols-1 items-center justify-center mt-32">
        {features.map((item, index) => (
          <div
            key={index}
            className={`bg-slate-200 cursor-pointer hover:bg-gradient-to-r from-purple-600 to-blue-400/90 p-6 rounded-xl shadow-lg transition-all duration-300 group
        ${index === features.length - 4 ? "md:col-span-3 flex justify-start  " : ""}`}
          >
            <div className="max-w-lg ">
              <img
                src={item.img}
                alt=""
                className="w-16 my-6  group-hover:-translate-y-3 transition-all duration-300"
              />
              <h3 className="text-gray-900 2xl:text-2xl text-xl font-bold mb-3 group-hover:-translate-y-3 transition-all duration-300 group-hover:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 text-md leading-relaxed group-hover:-translate-y-3 transition-all duration-300 group-hover:text-white">
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

export default IndustrialIoT
