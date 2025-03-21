import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'
import { ArrowRight } from 'lucide-react'
import { motion } from "framer-motion";
import Link from 'next/link';

const WhoWeAre = () => {
    const image1 = "https://img.freepik.com/free-photo/kids-futuristic-school-classroom_23-2150892854.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid";
    return (
        <div className='grid grid-cols-12 justify-center items-center  gap-10'>
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className=" col-span-12 lg:col-span-8"
            >
                <h2 className="text-xl  text-gray-800 flex items-center gap-2" ><div className='w-2 h-2 rounded-full bg-blue-600'></div>Who We Are</h2>
                <h1 className='text-3xl sm:text-4xl md:text-5xl  font-bold my-5 '><span className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-red-600 text-transparent bg-clip-text'> Sunkey Design Systems</span> </h1>
                <p className='text-lg sm:text-xl text-gray-800'>At Sunkey Design Systems,<span className='text-blue-600 font-semibold'>Who We Are</span>  focus on creating PCB layouts that optimize functionality, performance, and manufacturability.<br /><br /> Our team of skilled engineers uses the latest design software to ensure that your PCB layouts are efficient and reliable.

                </p>
                <div className='md:flex  items-center justify-center gap-40 mt-10'>
                    <div className='flex items-center gap-3'>
                        <img loading='lazy' src="https://html.awaikenthemes.com/corprate/images/icon-about-body-item-1.svg" alt="SunkeyDesign" />
                        <h2 className='font-bold text-gray-700 text-lg'>Ongoing support & <br />maintenance</h2>
                    </div>
                    <div className='flex items-center gap-3 mt-10 md:mt-0'>
                        <img loading='lazy' src="https://html.awaikenthemes.com/corprate/images/icon-about-body-item-2.svg" alt="SunkeyDesign" />
                        <h2 className='font-bold text-gray-700 text-lg'>Comitment to continue <br /> improvement</h2>
                    </div>
                </div>
                <div className='w-full border mt-8'></div>
                <div className='md:flex items-center justify-between  mt-10'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-7xl font-black bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-indigo-500 via-red-500 to-blue-500 text-transparent bg-clip-text'>25+</h1>
                        <p className='font-medium text-lg '>Year's of working <br /> experience in our company</p>
                    </div>
                    <Link href="/">
                        <button className=' mt-10 md:mt-0 group flex items-center shadow-lg bg-blue-600 hover:bg-blue-700 text-white px-6 font-semibold py-3 gap-3 rounded-md '>Contact Now <ArrowRight className='group-hover:translate-x-1 transition-all duration-300' /></button>
                    </Link>
                </div>
            </motion.div>


            <div className='col-span-12 lg:col-span-4'>
                <motion.div
                    className="  mt-5  rounded-xl shadow-lg object-cover "
                >
                    <DirectionAwareHover imageUrl={image1} />
                </motion.div>
            </div>
        </div>
    )
}

export default WhoWeAre
