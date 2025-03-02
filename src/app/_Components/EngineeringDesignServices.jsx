"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react";
import { useState, useEffect } from "react"; // Added useEffect
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import ImageCarousel from "./ImageCarousel";
import Carousel from "./Carousal";



// Animation Variants
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "easeOut",
            staggerChildren: 0.3
        }
    },
};

const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.2,
            ease: "easeInOut"
        }
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.6
        }
    },
    hover: {
        scale: 1.05,
        boxShadow: "0 15px 25px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.3 }
    },
};

const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    },
};

const EngineeringDesignServices = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        "https://img.freepik.com/free-photo/engineer-working-with-robot-arm-industrial-factory_1150-18181.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
        "https://img.freepik.com/free-photo/engineer-working-circuit-board_23-2150273887.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
        "https://img.freepik.com/free-photo/businessman-application-human-digital-business_1150-1729.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
        "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041866.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
    ];


    const image= [
        "https://img.freepik.com/free-photo/set-construction-tools-wooden-table_155003-865.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
        "https://img.freepik.com/free-photo/technology-concept-with-futuristic-element_23-2151910929.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
        "https://img.freepik.com/free-photo/futurism-perspective-digital-nomads-lifestyle_23-2151252519.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid",
        "https://img.freepik.com/free-photo/workman-wearing-hard-hat-working-with-metal-constructions-factory_1303-26645.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid"
    ]

    // Move the setInterval logic into useEffect
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 4000); // Change image every 4 seconds

        // Cleanup the interval when the component unmounts
        return () => clearInterval(timer);
    }, [images.length]); // Dependency array ensures the effect runs only when images.length changes





    return (
        <section className="py-32 shadow-2xl bg-gradient-to-r from-pink-300/10 via-purple-200 to-indigo-400/10 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                <div className="md:flex justify-between items-center">
                    <motion.h2
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-8 sm:mb-4 text-gray-900"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={sectionVariants}
                    >
                        Engineering Design Services
                    </motion.h2>
                    <motion.button
                        className="border px-4 sm:px-6 py-2 sm:py-3 mt-5 md:mt-0 rounded-md text-gray-900 shadow-lg hover:scale-105 duration-300 ease-in-out"
                        variants={sectionVariants}
                    >
                        Learn More
                    </motion.button>
                </div>

                <motion.p
                    className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl my-4 sm:mb-10 mt-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={sectionVariants}
                >
                    SunKey Technologies offers a wide range of engineering design services designed to meet the diverse needs of our clients. Our expertise includes
                </motion.p>

                <div className="md:flex justify-between  gap-10">

                    <div className="mt-10 w-full">
                        <Tabs defaultValue="Hardware" className="">
                            <TabsList className=" bg-transparent border ">
                                <TabsTrigger value="Hardware">Hardware Design</TabsTrigger>
                                <TabsTrigger value="Firmware">Firmware Development</TabsTrigger>
                                <TabsTrigger value="Software">Software Solutions</TabsTrigger>
                                <TabsTrigger value="Mechanical">Mechanical Engineering</TabsTrigger>
                            </TabsList>
                            <TabsContent value="Hardware">
                                <div className="border-2 hover:shadow-xl group h-[400px] hover:scale-105 duration-500 p-5 border-gray-900 rounded-2xl flex  justify-between gap-7 ">
                                    <div className="flex flex-col  ">
                                        <img src="/hardware.png" alt="" className="w-14 object-cover my-4" />
                                        <h2 className="text-2xl sm:text-3xl mt-3 font-extrabold  mb-8 sm:mb-4 text-gray-900">Hardware Design</h2>
                                        <p className="text-gray-600 text-lg max-w-2xl leading-relaxed  transition-colors duration-300">Developing innovative hardware solutions that meet specific requirements.</p>
                                        <div className="mt-6 flex items-center gap-3  group-hover:text-blue-500 group-hover:translate-x-3  group-hover:duration-500 ease-in-out transition-all"
                                        >
                                            <button className="text-lg font-medium">Learn More</button>
                                            <ArrowRight className="h-5 w-5" />
                                        </div>
                                    </div>

                                    <div className="w-full lg:w-1/2  lg:mt-0 group-hover:scale-105 duration-500">
                                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                                                <img
                                                    src="https://img.freepik.com/free-photo/3d-rendering-biorobots-concept_23-2149524396.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid"
                                                    alt="Engineering Design"
                                                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                                                />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                                        </div>
                                    </div>

                                    
                                </div>
                            </TabsContent>
                            <TabsContent value="Firmware">
                                <div className="border-2 hover:shadow-xl group h-[400px] hover:scale-105 duration-500 p-5 border-gray-900 rounded-2xl flex  justify-between gap-7 ">
                                <div className="w-full lg:w-1/2  lg:mt-0 group-hover:scale-105 duration-500">
                                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                                                <img
                                                    src="https://img.freepik.com/free-vector/neon-fingerprint-background_23-2148366251.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid"
                                                    alt="Engineering Design"
                                                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                                                />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col  ">
                                        <img src="/firmware.png" alt="" className="w-14 object-cover my-4" />
                                        <h2 className="text-2xl sm:text-3xl  font-extrabold mt-3 mb-8 sm:mb-4 text-gray-900">Firmware Development</h2>
                                        <p className="text-gray-600 text-lg max-w-2xl leading-relaxed  transition-colors duration-300">Crafting firmware that optimizes device performance and functionality.</p>
                                        <div className="mt-6 flex items-center gap-3  group-hover:text-blue-500 group-hover:translate-x-3  group-hover:duration-500 ease-in-out transition-all"
                                        >
                                            <button className="text-lg font-medium">Learn More</button>
                                            <ArrowRight className="h-5 w-5" />
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="Software">
                                <div className="border-2 hover:shadow-xl group h-[400px] hover:scale-105 duration-500 p-5 border-gray-900 rounded-2xl flex  justify-between gap-7 ">
                                    <div className="flex flex-col  ">
                                        <img src="/software.png" alt="" className="w-14 object-cover my-4" />
                                        <h2 className="text-2xl sm:text-3xl mt-3 font-extrabold  mb-8 sm:mb-4 text-gray-900">Software Solutions</h2>
                                        <p className="text-gray-600 text-lg max-w-2xl leading-relaxed  transition-colors duration-300">Creating software applications that enhance user experience and efficiency.</p>
                                        <div className="mt-6 flex items-center gap-3  group-hover:text-blue-500 group-hover:translate-x-3  group-hover:duration-500 ease-in-out transition-all"
                                        >
                                            <button className="text-lg font-medium">Learn More</button>
                                            <ArrowRight className="h-5 w-5" />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-1/2  lg:mt-0 group-hover:scale-105 duration-500">
                                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                                                <img
                                                    src="https://img.freepik.com/free-vector/gradient-api-infographic_23-2149369787.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid"
                                                    alt="Engineering Design"
                                                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                                                />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="Mechanical">
                                <div className="border-2 hover:shadow-xl group h-[400px] hover:scale-105 duration-500 p-5 border-gray-900 rounded-2xl flex  justify-between gap-7 ">
                                <div className="w-full lg:w-1/2  lg:mt-0 group-hover:scale-105 duration-500">
                                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                                                <img
                                                    src="https://img.freepik.com/free-vector/gears-cog-wheels-3d-style-background_1017-28432.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid"
                                                    alt="Engineering Design"
                                                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                                                />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col  ">
                                        <img src="/mechanical.png" alt="" className="w-14 object-cover my-4" />
                                        <h2 className="text-2xl sm:text-3xl mt-3 font-extrabold  mb-8 sm:mb-4 text-gray-900">Mechanical Engineering</h2>
                                        <p className="text-gray-600 text-lg max-w-2xl leading-relaxed  transition-colors duration-300">Providing mechanical design services that integrate seamlessly with electronic systems.</p>
                                        <div className="mt-6 flex items-center gap-3  group-hover:text-blue-500 group-hover:translate-x-3  group-hover:duration-500 ease-in-out transition-all"
                                        >
                                            <button className="text-lg font-medium">Learn More</button>
                                            <ArrowRight className="h-5 w-5" />
                                        </div>
                                    </div>

                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* <motion.div
                        className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-10 "
                    >
                        <div className="flex flex-col gap-4 sm:gap-5">
                            <img
                                src="https://img.freepik.com/free-photo/man-architect-working-project-with-vr-glasses-new-technologies-3d_1268-29304.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid"
                                alt=""
                                className="w-full sm:w-96 h-[310px]  object-cover rounded-md shadow-lg hover:scale-105 duration-300 ease-in-out"
                            />
                            <img
                                src="https://img.freepik.com/free-photo/close-up-wires-tech-background_23-2148882631.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid"
                                alt=""
                                className="w-full sm:w-96 h-[180px]  object-cover rounded-md shadow-lg hover:scale-105 duration-300 ease-in-out"
                            />
                        </div>
                        <div className="flex flex-col gap-4 sm:gap-5 mb-4 sm:mb-0">
                            <img
                                src="https://img.freepik.com/free-photo/asian-male-engineer-specialist-with-measuring-machine-with-manipulator-armthreedimensional-coordinate-measurement-check-sizes-3d-check-sizes-parts-cmm-after-machining-process_609648-162.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid"
                                alt=""
                                className="w-full sm:w-96 h-60 sm:h-60 object-cover rounded-md shadow-lg hover:scale-105 duration-300 ease-in-out"
                            />
                            <img
                                src="https://img.freepik.com/free-photo/light-trails-buildings_1359-714.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid"
                                alt=""
                                className="w-full sm:w-96 h-40 sm:h-40 object-cover rounded-md shadow-lg hover:scale-105 duration-300 ease-in-out"
                            />
                        </div>
                    </motion.div> */}
                    <div className=" md:w-[50%] rounded-lg mb-10 md:mb-0 ">
                        <Carousel />
                    </div>


                </div>


            </div>

        </section>
    );
};

export default EngineeringDesignServices;