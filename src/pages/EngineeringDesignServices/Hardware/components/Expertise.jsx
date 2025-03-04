import { SquareArrowOutUpRight } from 'lucide-react'
import { motion } from "framer-motion";
import { Users, Lightbulb, UserCheck, Shield, ArrowRight } from "lucide-react";
const Expertise = () => {

  const expertise = [
    { img: "https://img.freepik.com/free-photo/woman-with-disability-using-touch-screen-construction-layout-office-architect-wheelchair-analyzing-building-model-computer-table-creating-blueprint-plan-development_482257-28843.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", icon: "/cad.png", title: "CAD Design", desc: "Utilizing tools like PTC Windchill and Altair CAE Suite to create detailed designs.", btn: "Learn More", btnicon: <SquareArrowOutUpRight size={18} /> },
    { img: "https://img.freepik.com/free-photo/3d-printer-with-word-3d-printed-it_188544-38191.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", icon: "/prototyping.png", title: "Prototyping", desc: "Developing functional prototypes to test and refine your product.", btn: "Learn More", btnicon: <SquareArrowOutUpRight size={18} /> },
  ]

  const features = [
    { icon: <Users className="h-12 w-12 text-blue-500" />, img: "/interior.png", title: "Design for Manufacturability", description: "Ensuring designs are optimized for efficient production.", image: "https://img.freepik.com/free-photo/one-businessman-using-wireless-technology-global-communications-generated-by-ai_188544-20422.jpg" },
    { icon: <Lightbulb className="h-12 w-12 text-blue-500" />, img: "/geothermal.png", title: "Thermal and Structural Analysis", description: "Conducting analyses to ensure product reliability and performance.", image: "https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg" },
  ];

  return (
    <div>
      <h2 className="text-xl  text-gray-800 flex items-center gap-2" ><div className='w-2 h-2 rounded-full bg-blue-600'></div>Our Expertise</h2>
      <h1 className='text-5xl font-bold my-5 max-w-4xl'>our hardware <span className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-red-600 text-transparent bg-clip-text'> design expertise </span></h1>
      <div className='flex items-center justify-center gap-6 mt-16'>
        {expertise.map((item, index) => (
          <div key={index} className='flex group max-w-[450px] flex-col gap-10 bg-white hover:bg-gradient-to-r from-pink-300/10 via-blue-200/20 to-indigo-400/20 rounded-xl shadow-lg overflow-hidden'>
            {/* Image with Zoom Effect */}
            <img src={item.img} alt="" className='w-full h-[270px] rounded-t-xl object-cover group-hover:scale-105 transition-transform duration-300' />
            <div className='flex flex-col gap-3 px-6  items-start'>
              <img src={item.icon} alt="CAD Icon" className='w-12' />
              <h1 className='text-gray-900 text-2xl font-bold mt-4 '>{item.title}</h1>
              <p className='text-lg max-w-sm'>{item.desc}</p>
              <div className='flex items-center justify-center gap-3 my-6  text-blue-600'>
                <button className='font-medium opacity-0 group-hover:opacity-100 duration-300 text-blue-600'>
                  {item.btn}
                </button>
                <span className='-translate-x-24 group-hover:translate-x-0 transition-transform duration-200'>
                  {item.btnicon}
                </span>
              </div>
            </div>
          </div>
        ))}
        <div className="flex flex-col gap-6 max-w-md ">
          {features.map(({ title, description, img, image }) => (
            <div key={title} className="relative bg-white hover:bg-gradient-to-r from-pink-300/10 via-blue-200/20 to-indigo-400/20 p-6 rounded-xl shadow-lg   transition-all duration-300 group">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-blue-500" >
                    <img src={img} alt="" className="w-12" />
                  </div>
                </div>
                <h3 className="text-gray-900 text-2xl font-bold mb-3">{title}</h3>
                <p className="text-gray-600 text-md leading-relaxed  transition-colors duration-300">{description}</p>
                <div className='flex  gap-3 mt-8  text-blue-600'>
                  <button className='font-medium opacity-0 group-hover:opacity-100 duration-300 text-blue-600'>
                    Learn More
                  </button>
                  <span className='-translate-x-24 group-hover:translate-x-0 transition-transform duration-200'>
                    <SquareArrowOutUpRight size={18} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Expertise
