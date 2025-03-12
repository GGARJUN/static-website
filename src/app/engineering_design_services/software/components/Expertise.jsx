import { SquareArrowOutUpRight } from 'lucide-react'
import { motion } from "framer-motion";
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';


const Expertise = () => {

  const features = [
    { img: "https://cdn-icons-png.freepik.com/256/3696/3696816.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Custom Software Development", description: "Creating software tailored to your device's needs seamless device performance." },
    { img: "https://cdn-icons-png.freepik.com/256/2920/2920329.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Mobile & Web Application Development", description: "Developing applications for various platforms.", },
    { img: "https://cdn-icons-png.freepik.com/256/16444/16444626.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Software Testing and Validation", description: "Ensuring software reliability through rigorous testing.", },
    { img: "https://cdn-icons-png.freepik.com/256/4351/4351778.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Software Maintenance & Updates", description: " Providing ongoing support for software updates and maintenance.", },
  ];

  const image1 = "https://img.freepik.com/free-photo/gamer-creator-explaning-african-worker-how-testing-game-level-interface-developing-new-design-creative-office-pointing-screen_482257-5506.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid";

  return (
    <div>
      <h2 className="text-xl  text-gray-800 flex items-center gap-2" ><div className='w-2 h-2 rounded-full bg-blue-600'></div>Our Expertise</h2>
      <h1 className='text-5xl font-bold my-5 max-w-4xl'>Our Firmware <span className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-red-600 text-transparent bg-clip-text'> design expertise </span></h1>

      <div className='grid grid-cols-12 gap-6'>

      <div className='md:col-span-4 col-span-12 mt-16 '>
          <div className="w-full md:h-full 2xl:h-[640px] rounded-xl shadow-lg object-cover">
            <DirectionAwareHover imageUrl={image1} />
          </div>
        </div>
        <div className='md:col-span-8 col-span-12'>
          <div className="gap-4 grid md:grid-cols-2 grid-cols-1 items-center justify-center mt-16">
            {features.map((item, index) => (
              <div
                key={index}
                className={`bg-white cursor-pointer hover:bg-gradient-to-bl from-purple-600/50 to-blue-600 p-6 rounded-xl shadow-lg transition-all duration-300 group
        `}
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

      </div>


    </div>
  )
}

export default Expertise
