import React from 'react'
import { FaPlay } from "react-icons/fa";
const CallUs = () => {
  return (

    <div
      className="relative bg-[url('https://img.freepik.com/free-photo/colleagues-working-together-call-center-with-headphones_23-2149256089.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid')] bg-cover bg-fixed bg-center  h-[800px] flex items-center justify-center"
    >
       <div className="absolute  inset-0 bg-gradient-to-r from-black/60 via-black/40 to-pink-500/40"></div>
      <div className="container mx-auto px-6 py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center  gap-8 ">
          {/* Video Play Button */}
          <div className="flex justify-center">
            <div
              className="group relative flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 hover:scale-110"
            >
              <FaPlay className="text-2xl ml-1 text-red-600 group-hover:scale-110 transition-transform duration-200" />
            </div>
          </div>

          {/* Intro Video Content */}
          <div className="text-center md:text-left ">
            <div className="space-y-4">
              {/* Section Title */}
              <h3 className="text-lg font-semibold text-white ">
                Explore our visual story
              </h3>
              <h2 className="text-5xl font-bold  text-white">
                Collection of engaging videos showcasing our work and vision
              </h2>
            </div>
              <button className=" rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold shadow-md transition-transform duration-200 mt-6"
              >
                Contact Us
              </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CallUs
