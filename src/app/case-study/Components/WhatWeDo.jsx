import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Dummy from './Dummy'

const whatWeDo = () => {
    return (
        <section>
            <div className='lg:flex justify-center items-center gap-40 w-full container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col gap-5 items-end justify-end mb-20 lg:mb-0'>
                    <Image src="https://img.freepik.com/free-photo/happy-motivated-colleagues-office_114579-2790.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid" alt="business success" width={400} height={400} className='rounded-xl shadow-xl w-full h-auto' />
                </div>


                <div className='lg:max-w-2xl mt-10 md:mt-0 '>
                    <h2 className="text-xl  text-gray-800 flex items-center gap-2" ><div className='w-2 h-2 rounded-full bg-blue-600'></div>What We Do</h2>
                    <h1 className='title-all my-5 '>Innovative solutions driving<span className='bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-red-600 text-transparent bg-clip-text'> business success </span></h1>

                    <div className="flex items-center justify-between lg:items-start gap-10 mt-10">
                        <ul className="list-disc list-inside text-gray-800">
                            <li className="flex items-center gap-5">
                                <span className="w-[6px] h-[6px] bg-blue-600 rounded-full"></span> Enhancing Operational Effectiveness
                            </li>
                            <li className="flex items-center gap-5 my-5">
                                <span className="w-[6px] h-[6px] bg-blue-600 rounded-full"></span> Custom Solutions Unique Challenges
                            </li>
                            <li className="flex items-center gap-5">
                                <span className="w-[6px] h-[6px] bg-blue-600 rounded-full"></span> In-Depth Market Research
                            </li>
                        </ul>

                        <ul className="list-disc list-inside text-gray-800">
                            <li className="flex items-center gap-5">
                                <span className="w-[6px] h-[6px] bg-blue-600 rounded-full"></span> Attracting and Retaining Top Talent
                            </li>
                            <li className="flex items-center gap-5 my-5">
                                <span className="w-[6px] h-[6px] bg-blue-600 rounded-full"></span> Data-Driven Decision-Making
                            </li>
                            <li className="flex items-center gap-5">
                                <span className="w-[6px] h-[6px] bg-blue-600 rounded-full"></span> Seamless Technology Integration
                            </li>
                        </ul>
                    </div>
                    <div className='flex items-center justify-between gap-10 mt-10'>
                        <div className='flex items-center gap-3'>
                           <Image src="https://html.awaikenthemes.com/corprate/images/icon-about-body-item-1.svg"  width={50} height={1000} alt="About-img1" />
                            <h2 className='font-bold text-gray-700 text-lg'>Ongoing support & <br />maintenance</h2>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Image src="https://html.awaikenthemes.com/corprate/images/icon-about-body-item-2.svg" width={50} height={1000} alt="About-img2" />
                            <h2 className='font-bold text-gray-700 text-lg'>Comitment to continue <br /> improvement</h2>
                        </div>
                    </div>
                    <div className='w-full border mt-8'></div>
                    <button className='group flex items-center shadow-lg bg-blue-600 hover:bg-blue-700 text-white px-6 font-semibold py-3 gap-3 rounded-md mt-10'>Contact Now <ArrowRight className='group-hover:translate-x-1 transition-all duration-300' /></button>
                </div>
            </div>
            <Dummy />
        </section>
    )
}

export default whatWeDo
