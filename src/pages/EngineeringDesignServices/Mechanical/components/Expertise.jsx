import { SquareArrowOutUpRight } from 'lucide-react'
const Expertise = () => {
  const features = [
    { img: "https://cdn-icons-png.freepik.com/256/10214/10214741.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Conceptual Design", description: "Developing initial design concepts based on client requirements." },
    { img: "https://cdn-icons-png.freepik.com/256/13191/13191225.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Detailed Design", description: "Creating detailed mechanical designs using CAD tools.", },
    { img: "https://cdn-icons-png.freepik.com/256/2620/2620157.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Prototyping and Testing", description: "Developing functional prototypes and conducting tests to refine designs.", },
    { img: "https://cdn-icons-png.freepik.com/256/16812/16812458.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Design for Manufacturability", description: "Ensuring designs are optimized for efficient production.", },
  ];
  return (
    <div>
      <h2 className="text-xl  text-gray-800 flex items-center gap-2" ><div className='w-2 h-2 rounded-full bg-blue-600'></div>Our Expertise</h2>
      <h1 className='text-5xl font-bold my-5 max-w-4xl'><span className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-red-600 text-transparent bg-clip-text'>Our Mechanical </span>Design Expertise</h1>

      <div className="gap-4 grid md:grid-cols-3 grid-cols-1 items-center justify-center mt-16">
        {features.map((item, index) => (
          <div
            key={index}
            className={`bg-white cursor-pointer hover:bg-gradient-to-r from-purple-600 to-blue-400/90 p-6 rounded-xl shadow-lg transition-all duration-300 group
        ${index === features.length - 1 ? "md:col-span-3 flex justify-center mx-auto md:mx-[390px] 2xl:mx-[478px]  " : ""}`}
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

export default Expertise
