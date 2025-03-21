import { ArrowRight } from "lucide-react";
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
const Partner = () => {
    const imageUrl = "https://img.freepik.com/free-photo/close-up-woman-doing-research-technology_23-2148925506.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid";
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10  pb-20 ">
        {/* Left Section */}
        <div className="max-w-2xl col-span-1 lg:col-span-7">
          <h2 className="text-lg sm:text-xl text-gray-800 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-600"></div>Why Choose Us
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold my-5">
            <span className="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-red-600 text-transparent bg-clip-text">
              Why Partner
            </span>{" "}
            with Sunkey Design Systems
          </h1>
          <p className="text-base sm:text-lg font-medium text-gray-600 tracking-wide mt-6 md:mt-14">
          Partnering with Sunkey Design Systems gives you access to a team of skilled engineers and technicians who are dedicated to delivering <span className="text-blue-600">high-quality PCBA services.</span> We prioritize customer satisfaction and work closely with you to understand your unique requirements. <br /><br /> Our expertise in PCBA ensures that your products are both innovative and reliable.
          </p>
  
          {/* Progress Bars */}
          <div className="mt-8 md:mt-10">
            <div className="flex items-center justify-between">
              <h2 className="text-base sm:text-lg font-medium text-gray-600 tracking-wide">
                Happy Customers
              </h2>
              <h2 className="text-base sm:text-lg font-medium text-gray-600 tracking-wide">
                89%
              </h2>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-md mt-2">
              <div className="w-[89%] h-2 bg-gradient-to-tr from-[#fb7185] via-[#a21caf] to-[#6366f1] rounded-md"></div>
            </div>
  
            <div className="flex items-center justify-between mt-6">
              <h2 className="text-base sm:text-lg font-medium text-gray-600 tracking-wide">
                Active Clients
              </h2>
              <h2 className="text-base sm:text-lg font-medium text-gray-600 tracking-wide">
                78%
              </h2>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-md mt-2">
              <div className="w-[78%] h-2 bg-gradient-to-tr from-[#fb7185] via-[#a21caf] to-[#6366f1] rounded-md"></div>
            </div>
          </div>
  
          {/* Contact Button */}
          <button className="group flex items-center justify-center md:justify-start shadow-lg bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold gap-3 rounded-md mt-8 md:mt-10 transition-all duration-300">
            Contact Now
            <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
          </button>
        </div>
  
        {/* Right Section - Image */}
        <div className="h-[400px] sm:h-[500px] md:h-[600px] col-span-1 lg:col-span-5 rounded-xl shadow-lg flex items-center justify-center w-full">
          <DirectionAwareHover imageUrl={imageUrl} />
        </div>
      </div>

    )
}

export default Partner
