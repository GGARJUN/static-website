'use client'

import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowDown, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const NewsBanner = () => {
    

      const scrollToNextSection = () => {
        const nextSection = document.getElementById("next-section");
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    const banners = [
        { img: "https://img.freepik.com/free-photo/futuristic-smart-city-with-5g-global-network-technology_53876-98438.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_authors_boost", title: "Case Study", },
    ];
    return (
        <div>
            <div className="w-full h-[700px] relative flex">
                <div className="flex w-full h-full" >
                    {banners.map((banner, i) => (
                        <div key={i} className="w-full flex-shrink-0 h-full relative ">
                            <Image priority src={banner.img} alt={banner.title} fill className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"></div>
                            <div className="absolute inset-0 flex flex-col  justify-center items-start 2xl:px-40 md:px-20 px-10 text-white">
                                <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-medium mb-6 duration-500">
                                    {banner.title}
                                </h1>
                                <button className="border duration-300 hover:bg-white text-white mt-6 bg-transparent md:py-3 md:px-8 py-3 px-6 rounded-md font-semibold md:text-lg hover:text-black flex items-center gap-4">
                                    Read More <SquareArrowOutUpRight />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-6 w-full cursor-pointer text-white flex justify-between items-center px-20">
                    <div className="flex items-center gap-3" onClick={scrollToNextSection}>
                        <FaArrowDown className="animate-bounce duration-800 ease-in-out" />
                        <h2 className="font-semibold">SCROLL TO EXPLORE</h2>
                    </div>
                    <div className="md:flex items-center gap-5 hidden">
                        <Link href={"https://www.facebook.com/profile.php?id=61574435144838"} target="_blank" className="hover:bg-blue-500 p-2  rounded-full  hover:scale-110 transition-all duration-300">
                            <FaFacebookF />
                        </Link>

                        <Link href={"https://www.instagram.com/sunkeydesignsystems/"} target="_blank" className="hover:bg-blue-500 p-2 text-lg  rounded-full  hover:scale-110 transition-all duration-300">
                            <FaInstagram />
                        </Link>

                        <Link href={"https://x.com/sunkeydesign"} target="_blank" className="hover:bg-blue-500 p-2  rounded-full  hover:scale-110 transition-all duration-300">
                            <FaXTwitter />
                        </Link>

                        <Link href={"https://www.linkedin.com/company/106414983/"} target="_blank" className="hover:bg-blue-500 p-2  rounded-full  hover:scale-110 transition-all duration-300">
                            <FaLinkedinIn />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewsBanner
