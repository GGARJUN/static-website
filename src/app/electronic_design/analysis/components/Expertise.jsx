import { SquareArrowOutUpRight } from 'lucide-react'
import Image from 'next/image';
const Expertise = () => {
  const features = [
    { img: "https://cdn-icons-png.freepik.com/256/14659/14659257.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Signal Integrity Analysis", description: "Conducting simulations to ensure signal quality and reliability." },
    { img: "https://cdn-icons-png.freepik.com/256/11094/11094726.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Power Integrity Analysis", description: "Analyzing power distribution to prevent voltage drops and noise.", },
    { img: "https://cdn-icons-png.freepik.com/256/9809/9809528.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "3D Modeling and Simulation", description: "Using 3D models to simulate PCB behavior under various conditions.", },
    { img: "https://cdn-icons-png.freepik.com/256/3271/3271536.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Compliance in Industry Standards", description: "Ensuring designs meet international standards like IPC.", },
  ];
  return (
    <div>
      <h2 className="text-xl  text-gray-800 flex items-center gap-2" ><div className='w-2 h-2 rounded-full bg-blue-600'></div>Our Expertise</h2>
      <h1 className='title-all my-5 max-w-4xl'>our hardware <span className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-red-600 text-transparent bg-clip-text'> design expertise </span></h1>

      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center mt-8 sm:mt-16 ">
        {features.map((item, index) => (
          <div
            key={index}
            className={`bg-white cursor-pointer hover:bg-gradient-to-r from-purple-600 to-blue-400/90 p-6 rounded-xl shadow-lg transition-all duration-300 group
          ${index === features.length - 1 ? "lg:col-span-2 flex justify-start" : ""}`}
          >
            <div className="max-w-lg">
            <Image priority width={40} height={40}
                    src={item.img}
                    alt={item.title}
                className="w-16 my-6 group-hover:-translate-y-3 transition-all duration-300"
              />
              <h3 className="text-gray-900 text-xl sm:text-2xl line-clamp-1 2xl:line-clamp-none font-bold mb-3 group-hover:-translate-y-3 transition-all duration-300 group-hover:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 text-md leading-relaxed group-hover:-translate-y-3 transition-all duration-300 group-hover:text-white line-clamp-2 2xl:line-clamp-1 ">
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

export default Expertise
