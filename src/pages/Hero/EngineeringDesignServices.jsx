"use client";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import ImageCarousel from "../components/ImageCarousel";

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", staggerChildren: 0.3 } },
};
const services = [
    { value: "Hardware", title: "Hardware Design", description: "Developing innovative hardware solutions that meet specific requirements.", icon: "/hardware.png", image: "https://img.freepik.com/free-photo/3d-rendering-biorobots-concept_23-2149524396.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", },
    { value: "Firmware", title: "Firmware Development", description: "Crafting firmware that optimizes device performance and functionality.", icon: "/firmware.png", image: "https://img.freepik.com/free-vector/neon-fingerprint-background_23-2148366251.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", },
    { value: "Software", title: "Software Solutions", description: "Creating software applications that enhance user experience and efficiency.", icon: "/software.png", image: "https://img.freepik.com/free-vector/gradient-api-infographic_23-2149369787.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", },
    { value: "Mechanical", title: "Mechanical Engineering", description: "Providing mechanical design services that integrate seamlessly with electronic systems.", icon: "/mechanical.png", image: "https://img.freepik.com/free-vector/gears-cog-wheels-3d-style-background_1017-28432.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", },
];

const EngineeringDesignServices = () => {
    return (
        <section className="py-32 shadow-2xl bg-gradient-to-r from-pink-300/10 via-purple-200 to-indigo-400/10 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                <div className="md:flex justify-between items-center">
                    <motion.h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-8 sm:mb-4 text-gray-900" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
                        Engineering Design Services
                    </motion.h2>
                    <motion.button className="border px-4 sm:px-6 py-2 sm:py-3 mt-5 md:mt-0 rounded-md text-gray-900 shadow-lg hover:scale-105 duration-300 ease-in-out" variants={sectionVariants}>
                        Learn More
                    </motion.button>
                </div>
                <motion.p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl my-4 sm:mb-10 mt-5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
                    SunKey Technologies offers a wide range of engineering design services designed to meet the diverse needs of our clients. Our expertise includes
                </motion.p>
                <div className="md:flex justify-between gap-10">
                    <div className="mt-10 w-full">
                        <Tabs defaultValue="Hardware">
                            <TabsList className="bg-transparent border">
                                {services.map((service) => (
                                    <TabsTrigger key={service.value} value={service.value}>
                                        {service.title}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                            {services.map((service) => (
                                <TabsContent key={service.value} value={service.value}>
                                    <div className="border-2 hover:shadow-xl group h-[400px] hover:scale-105 duration-500 p-5 border-gray-900 rounded-2xl flex justify-between gap-7">
                                        <div className="flex flex-col">
                                            <img src={service.icon} alt="" className="w-14 object-cover my-4" />
                                            <h2 className="text-2xl sm:text-3xl mt-3 font-extrabold mb-8 sm:mb-4 text-gray-900">
                                                {service.title}
                                            </h2>
                                            <p className="text-gray-600 text-lg max-w-2xl leading-relaxed transition-colors duration-300">
                                                {service.description}
                                            </p>
                                            <div className="mt-6 flex items-center gap-3 group-hover:text-blue-500 group-hover:translate-x-3 group-hover:duration-500 ease-in-out transition-all">
                                                <button className="text-lg font-medium">Learn More</button>
                                                <ArrowRight className="h-5 w-5" />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-1/2 lg:mt-0 group-hover:scale-105 duration-500">
                                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                                                <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover rounded-2xl"/>
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            ))}
                        </Tabs>
                    </div>
                    <div className=" md:w-[50%] rounded-lg mb-10 md:mb-0 ">
                        <ImageCarousel />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EngineeringDesignServices;