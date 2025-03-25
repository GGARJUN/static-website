import { SquareArrowOutUpRight } from 'lucide-react'
import { motion } from "framer-motion";
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
import Image from 'next/image';
import Link from 'next/link';


const Expertise = () => {

  const features = [
    { img: "https://cdn-icons-png.freepik.com/256/12256/12256332.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Custom Firmware  Development", description: "Creating firmware tailored to your device's needs seamless device performance." },
    { img: "https://cdn-icons-png.freepik.com/256/12660/12660943.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Device Driver Development", description: " Developing drivers for efficient communication between hardware and software.", },
    { img: "https://cdn-icons-png.freepik.com/256/6213/6213784.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Firmware Testing and Validation", description: "Ensuring firmware reliability through rigorous testing update mechanisms.", },
    { img: "https://cdn-icons-png.freepik.com/256/7517/7517112.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Firmware Updates & Maintenance", description: "Providing ongoing support for firmware updates and maintenance.", },
  ];

  const image1 = "https://img.freepik.com/free-photo/woman-working-technology-with-mask_23-2148925508.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid";

  return (
    <div>
      <h2 className="text-xl  text-gray-800 flex items-center gap-2" ><div className='w-2 h-2 rounded-full bg-blue-600'></div>Our Expertise</h2>
      <h1 className='title-all my-5 max-w-4xl'>Our Firmware <span className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-red-600 text-transparent bg-clip-text'> design expertise </span></h1>

      <div className='grid grid-cols-12 gap-6'>
        <div className='lg:col-span-8 col-span-12'>
          <div className="gap-4 grid md:grid-cols-2 grid-cols-1 items-center justify-center mt-16">
            {features.map((item, index) => (
              <div
                key={index}
                className={`bg-white cursor-pointer hover:bg-gradient-to-bl from-purple-600/50 to-blue-600 p-6 rounded-xl shadow-lg transition-all duration-300 group
        `}
              >
                <div className="max-w-lg ">
                  <Image priority width={40} height={40}
                    src={item.img}
                    alt={item.title}
                    className="w-16 my-6  group-hover:-translate-y-3 transition-all duration-300"
                  />
                  <h3 className="text-gray-900 2xl:text-2xl text-xl font-bold mb-3 group-hover:-translate-y-3 transition-all duration-300 group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2 2xl:line-clamp-none text-md leading-relaxed group-hover:-translate-y-3 transition-all duration-300 group-hover:text-white">
                    {item.description}
                  </p>
                  <Link href={"/"} >
                    <div className="flex gap-3 mt-8 justify-start text-blue-600">
                      <button className="font-medium opacity-0 group-hover:opacity-100 duration-300 transition-all group-hover:text-white">
                        Learn More
                      </button>
                      <span className="-translate-x-24 group-hover:translate-x-0 transition-transform duration-200 group-hover:text-white">
                        <SquareArrowOutUpRight size={18} />
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='lg:col-span-4 col-span-12 mt-16 '>
          <div className="w-full h-full rounded-xl shadow-lg object-cover">
            <DirectionAwareHover imageUrl={image1} />
          </div>
        </div>
      </div>


    </div>
  )
}

export default Expertise
