import { ArrowRight } from "lucide-react";
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
const Partner = () => {
    
    const imageUrl = "https://img.freepik.com/free-photo/photorealistic-lifestyle-lawyer_23-2151054015.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid";

    return (
        <div className='grid grid-cols-12 justify-center items-start gap-10'>
            <div className='max-w-2xl col-span-4'>
                <h2 className="text-xl  text-gray-800 flex items-center gap-2" ><div className='w-2 h-2 rounded-full bg-blue-600'></div>Why Choose Us</h2>
                <h1 className='text-5xl font-bold my-5 '><span className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-red-600 text-transparent bg-clip-text'>Why Partner </span> with SunKey Technologies</h1>
                <p className='text-lg font-medium text-gray-600 tracking-wide mt-14'>Partnering with SunKey Technologies gives you access to a team of skilled engineers who are dedicated to delivering high-quality hardware designs. <br /> <br /> We prioritize customer satisfaction and work closely with you to understand your unique requirements. Our expertise in using advanced design tools ensures that your products are both innovative and reliable.
                </p>
                <button className='group flex items-center shadow-lg bg-blue-600 hover:bg-blue-700 text-white px-6 font-semibold py-3 gap-3 rounded-md mt-10'>Contact Now <ArrowRight className='group-hover:translate-x-1 transition-all duration-300' /></button>
                {/* <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex  items-center gap-6 mt-12 ">
                    {features.map(({ title, description, img, image }) => (
                        <motion.div key={title} variants={itemVariants} initial="initial" whileHover="hover" className="relative bg-white p-6 rounded-xl shadow-lg  hover:border-blue-300 transition-all duration-300 group max-w-[360px]">
                            <motion.div className="absolute inset-0 z-0 opacity-10 rounded-xl group-hover:opacity-100 transition-opacity duration-500">
                                <img src={image} alt={title} className="w-full h-full object-cover rounded-xl" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent rounded-xl" />
                            </motion.div>
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-6">
                                    <motion.div className="text-blue-500" transition={{ duration: 0.6 }}>
                                        <img src={img} alt="" className="w-12" />
                                    </motion.div>
                                </div>
                                <h3 className="text-3xl font-semibold mb-3 text-gray-900 group-hover:text-white transition-colors duration-300">{title}</h3>
                                <p className="text-gray-600 text-md leading-relaxed group-hover:text-white transition-colors duration-300">{description}</p>
                                <div className="flex items-center gap-3 transition-colors duration-300 mt-7">
                                    <motion.div variants={{ hover: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } }, initial: { x: -20, opacity: 0 } }}>
                                        <motion.button className="text-sm font-medium text-white">Learn More</motion.button>
                                    </motion.div>
                                    <motion.div className="h-5 w-5 text-black">
                                        <ArrowRight className="h-5 w-5 group-hover:text-white -translate-x-20 -z-50 group-hover:translate-x-0 transition-all duration-300" />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div> */}
            </div>

            <div className="h-[630px]  col-span-4 rounded-xl shadow-lg relative  flex items-center justify-center">
                <DirectionAwareHover imageUrl={imageUrl}>
                    {/* <p className="font-bold text-xl">In the mountains</p>
                    <p className="font-normal text-sm">$1299 / night</p> */}
                </DirectionAwareHover>
            </div>

            <div className='col-span-4 w-full mt-5'>
                <h2 className='text-gray-900 font-bold  text-2xl'>Commitment to Continuous Improvement and Adaptability in a Changing Market</h2>
                <p className='text-lg font-medium text-gray-600 tracking-wide mt-4'>We prioritize customer satisfaction and work closely with you to understand your unique requirements. Our expertise in using advanced design tools ensures that your products are both innovative and reliable.
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


            </div>

        </div >
    )
}

export default Partner
