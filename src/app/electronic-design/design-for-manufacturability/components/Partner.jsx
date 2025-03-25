import { ArrowRight } from "lucide-react";
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';

const Partner = () => {
    const imageUrl = "https://img.freepik.com/free-photo/full-shot-man-making-shoes_23-2149007457.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid";
    
    return (
        <div className=''>
            <div className='flex flex-col lg:flex-row justify-center items-start gap-8'>
                {/* Text and Stats Section */}
                <div className='w-full max-w-lg lg:max-w-2xl lg:flex-1'>
                    <h2 className="text-lg sm:text-xl text-gray-800 flex items-center gap-2">
                        <div className='w-2 h-2 rounded-full bg-blue-600'></div>
                        Why Choose Us
                    </h2>
                    <h2 className='title-all my-4 text-2xl sm:text-3xl lg:text-4xl'>
                        <span className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-red-600 text-transparent bg-clip-text'>
                            Why Partner 
                        </span> with Sunkey Design Systems
                    </h2>
                    <p className='text-base sm:text-lg font-medium text-gray-600 tracking-wide mt-8 sm:mt-14'>
                        Partnering with Sunkey Design Systems gives you access to a team of skilled engineers who are dedicated to delivering 
                        <span className="text-blue-600">high-quality Design for Manufacturability services.</span> We prioritize customer satisfaction and work closely with you to understand your unique requirements.
                        <br /><br /> 
                        Our expertise in <span className="text-blue-600">Design for Manufacturability</span> ensures that your products are efficiently produced and reliable.
                    </p>
                    <div className='flex items-center justify-between mt-6 sm:mt-10'>
                        <h2 className='text-base sm:text-lg font-medium text-gray-600 tracking-wide'>Happy Customers</h2>
                        <h2 className='text-base sm:text-lg font-medium text-gray-600 tracking-wide'>89%</h2>
                    </div>
                    <div className='w-full h-2 bg-gray-200 relative mt-2'>
                        <div className='w-[89%] h-2 bg-gradient-to-tr from-[#fb7185] via-[#a21caf] to-[#6366f1] relative'></div>
                    </div>
                    <div className='flex items-center justify-between mt-6 sm:mt-10'>
                        <h2 className='text-base sm:text-lg font-medium text-gray-600 tracking-wide'>Active Clients</h2>
                        <h2 className='text-base sm:text-lg font-medium text-gray-600 tracking-wide'>78%</h2>
                    </div>
                    <div className='w-full h-2 bg-gray-200 relative mt-2'>
                        <div className='w-[78%] h-2 bg-gradient-to-tr from-[#fb7185] via-[#a21caf] to-[#6366f1] relative'></div>
                    </div>
                    <button className='group flex items-center shadow-lg bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 font-semibold gap-3 rounded-md mt-6 sm:mt-10 text-sm sm:text-base'>
                        Contact Now 
                        <ArrowRight className='group-hover:translate-x-1 transition-all duration-300 w-4 h-4 sm:w-5 sm:h-5' />
                    </button>
                </div>

                {/* Image Section */}
                <div className="w-full max-w-lg lg:max-w-md h-[400px] sm:h-[500px] lg:h-[630px] rounded-xl shadow-lg relative flex items-center justify-center lg:flex-1">
                    <DirectionAwareHover imageUrl={imageUrl} />
                    {/* Commented out children remain commented out */}
                    {/* <p className="font-bold text-xl">In the mountains</p>
                    <p className="font-normal text-sm">$1299 / night</p> */}
                </div>
            </div>
        </div>
    )
}

export default Partner