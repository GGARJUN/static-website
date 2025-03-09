import { ArrowRight } from "lucide-react";
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
const Partner = () => {
    const imageUrl = "https://img.freepik.com/free-photo/full-shot-man-making-shoes_23-2149007457.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid";
    return (
        <div className='grid grid-cols-12 justify-center items-start gap-10'>
            <div className='max-w-2xl col-span-12 lg:col-span-7'>
                <h2 className="text-xl  text-gray-800 flex items-center gap-2" ><div className='w-2 h-2 rounded-full bg-blue-600'></div>Why Choose Us</h2>
                <h1 className='text-5xl font-bold my-5 '><span className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-red-600 text-transparent bg-clip-text'>Why Partner </span> with SunKey Technologies</h1>
                <p className='text-lg font-medium text-gray-600 tracking-wide mt-14'>Partnering with SunKey Technologies gives you access to a team of skilled engineers who are dedicated to delivering <span className="text-blue-600"> high-quality Industrial IoT solutions.</span> We prioritize customer satisfaction and work closely with you to understand your unique requirements.<br /><br /> Our expertise in  <span className="text-blue-600">Industrial IoT</span> ensures that your operations are streamlined, efficient, and safe.
                </p>
                <div className='flex items-center justify-between mt-10'>
                    <h2 className='text-lg font-medium text-gray-600 tracking-wide'>Happy Customers</h2>
                    <h2 className='text-lg font-medium text-gray-600 tracking-wide'>89%</h2>
                </div>
                <div className='w-full h-2 bg-gray-200 relative mt-2'>
                    <div className='w-[89%] h-2 bg-gradient-to-tr from-[#fb7185] via-[#a21caf] to-[#6366f1] relative'></div>
                </div>
                <div className='flex items-center justify-between mt-10'>
                    <h2 className='text-lg font-medium text-gray-600 tracking-wide'>Active Clients</h2>
                    <h2 className='text-lg font-medium text-gray-600 tracking-wide'>78%</h2>
                </div>
                <div className='w-full h-2 bg-gray-200 relative mt-2'>
                    <div className='w-[78%] h-2 bg-gradient-to-tr from-[#fb7185] via-[#a21caf] to-[#6366f1] relative'></div>
                </div>
                <button className='group flex items-center shadow-lg bg-blue-600 hover:bg-blue-700 text-white px-6 font-semibold py-3 gap-3 rounded-md mt-10'>Contact Now <ArrowRight className='group-hover:translate-x-1 transition-all duration-300' /></button>
            </div>

            <div className="h-[630px]  col-span-12 lg:col-span-5 rounded-xl shadow-lg relative  flex items-center justify-center">
                <DirectionAwareHover imageUrl={imageUrl}>
                    {/* <p className="font-bold text-xl">In the mountains</p>
                    <p className="font-normal text-sm">$1299 / night</p> */}
                </DirectionAwareHover>
            </div>


        </div >
    )
}

export default Partner
