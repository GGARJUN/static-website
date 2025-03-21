"use client";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import ImageCarousel from "../components/ImageCarousel";
import Image from "next/image";
import Link from "next/link";

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", staggerChildren: 0.3 } },
};
const services = [
    {link:"/", value: "Hardware", title: "Hardware Design", description: "Developing innovative hardware solutions that meet specific requirements.", icon: "https://cdn-icons-png.freepik.com/256/17255/17255462.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", image: "https://img.freepik.com/free-photo/3d-rendering-biorobots-concept_23-2149524396.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", },
    {link:"/", value: "Firmware", title: "Firmware Development", description: "Crafting firmware that optimizes device performance and functionality.", icon: "https://cdn-icons-png.freepik.com/256/4548/4548508.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", image: "https://img.freepik.com/free-vector/neon-fingerprint-background_23-2148366251.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", },
    {link:"/", value: "Software", title: "Software Solutions", description: "Creating software applications that enhance user experience and efficiency.", icon: "https://cdn-icons-png.freepik.com/256/6008/6008435.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", image: "https://img.freepik.com/free-vector/gradient-api-infographic_23-2149369787.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", },
    {link:"/", value: "Mechanical", title: "Mechanical Engineering", description: "Providing mechanical design services that integrate seamlessly with electronic systems.", icon: "https://cdn-icons-png.freepik.com/256/2223/2223096.png?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", image: "https://img.freepik.com/free-vector/gears-cog-wheels-3d-style-background_1017-28432.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", },
];

const EngineeringDesignServices = () => {
    return (
        <section className="py-32 shadow-2xl bg-gradient-to-r from-pink-300/10 via-purple-200 to-indigo-400/10 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                <div className="md:flex justify-between items-start">
                    <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-left  mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
                        Engineering Design Services
                    </motion.h2>
                    <Link href="/">
                        <motion.button className=" flex gap-3 group border px-4 sm:px-6 py-2 sm:py-3 mt-5 md:mt-0 rounded-md text-gray-900 shadow-lg hover:scale-105 duration-300 ease-in-out" variants={sectionVariants}>
                            Learn More <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
                        </motion.button>
                    </Link>
                </div>
                <motion.p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl my-4 sm:mb-10 mt-5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
                    Sunkey Design Systems offers a wide range of engineering design services designed to meet the diverse needs of our clients. Our expertise includes
                </motion.p>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start ">
                    {/* Tabs Section */}
                    <div className="lg:col-span-8 w-full mt-6 lg:mt-10">
                        <Tabs defaultValue="Hardware">
                            {/* Tabs List */}
                            <TabsList className="bg-transparent border flex flex-wrap">
                                {services.map((service) => (
                                    <TabsTrigger key={service.value} value={service.value} className="px-4 py-2">
                                        {service.title}
                                    </TabsTrigger>
                                ))}
                            </TabsList>

                            {/* Tabs Content */}
                            {services.map((service) => (
                                <TabsContent key={service.value} value={service.value}>
                                    <div className="border-2 hover:shadow-xl group h-auto lg:h-[400px] hover:scale-105 duration-500 p-5 border-gray-900 rounded-2xl flex flex-col lg:flex-row justify-between gap-7">
                                        {/* Left Section - Text */}
                                        <div className="flex flex-col w-full lg:w-1/2">
                                            <img loading="lazy" src={service.icon} alt={service.title} className="w-12 md:w-14 object-cover my-2 md:my-4" />
                                            <h2 className="text-xl md:text-2xl lg:text-3xl mt-3 font-extrabold mb-6 text-gray-900">
                                                {service.title}
                                            </h2>
                                            <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                                                {service.description}
                                            </p>
                                            <Link href={service.link}>
                                                <div className="mt-4 flex items-center gap-2 md:gap-3 group-hover:text-blue-500 group-hover:translate-x-2 transition-all">
                                                    <button className="text-sm md:text-lg font-medium">Learn More</button>
                                                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                                                </div>
                                            </Link>
                                        </div>

                                        {/* Right Section - Image */}
                                        <div className="w-full lg:w-1/2 lg:mt-0 group-hover:scale-105 duration-500">
                                            <div className="relative w-full h-[250px] lg:h-full rounded-2xl overflow-hidden shadow-xl">
                                                <Image priority src={service.image} alt={service.title} width={1000} height={100} className="absolute inset-0 w-full h-full object-cover rounded-2xl" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            ))}
                        </Tabs>
                    </div>

                    {/* Image Carousel Section */}
                    <div className="lg:col-span-4 w-full rounded-lg mb-6 lg:mb-10 mt-6 lg:mt-10">
                        <ImageCarousel />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default EngineeringDesignServices;