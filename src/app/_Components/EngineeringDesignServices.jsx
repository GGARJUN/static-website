"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FaCogs, FaCode, FaLaptop, FaWrench } from "react-icons/fa";
import { useState, useEffect } from "react"; // Added useEffect
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";

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

    const services = [
        { text: "Hardware Design: Developing innovative hardware solutions that meet specific requirements.", icon: <FaCogs /> },
        { text: "Firmware Development: Crafting firmware that optimizes device performance and functionality.", icon: <FaCode /> },
        { text: "Software Solutions: Creating software applications that enhance user experience and efficiency.", icon: <FaLaptop /> },
        { text: "Mechanical Engineering: Providing mechanical design services that integrate seamlessly with electronic systems.", icon: <FaWrench /> },
    ];

    // Move the setInterval logic into useEffect
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 4000); // Change image every 4 seconds

        // Cleanup the interval when the component unmounts
        return () => clearInterval(timer);
    }, [images.length]); // Dependency array ensures the effect runs only when images.length changes

    return (
        <section className="py-16 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                <div className="md:flex justify-between items-center">
                    <motion.h2
                        className="text-4xl sm:text-5xl  font-extrabold text-center mb-8 sm:mb-4 text-gray-900"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={sectionVariants}
                    >
                        Engineering Design Services
                    </motion.h2>
                    <motion.button
                        className="border px-4  sm:px-6 py-2 sm:py-3 rounded-md text-gray-900 shadow-lg hover:scale-105 duration-300 ease-in-out"
                        variants={sectionVariants}
                    >
                        Learn More
                    </motion.button>
                </div>

                <motion.p
                    className="text-lg text-gray-500 font-medium  my-8 sm:mb-12 max-w-3xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={sectionVariants}
                >
                    SunKey Technologies offers a wide range of engineering design services designed to meet the diverse needs of our clients. Our expertise includes
                </motion.p>

                <div className="my-10 ">
                    <Tabs defaultValue="Hardware" className="">
                        <TabsList className=" bg-transparent border">
                            <TabsTrigger value="Hardware">Hardware Design</TabsTrigger>
                            <TabsTrigger value="Firmware">Firmware Development</TabsTrigger>
                            <TabsTrigger value="Software">Software Solutions</TabsTrigger>
                            <TabsTrigger value="Mechanical">Mechanical Engineering</TabsTrigger>
                        </TabsList>
                        <TabsContent value="Hardware">
                            <div className="border p-5   border-gray-900 rounded-2xl flex items-center   justify-between gap-7 ">
                                <div className="">
                                    <FaCogs className="text-2xl sm:text-6xl hover:text-white bg-blue-100 hover:bg-blue-400 duration-300 px-3 rounded-full" />
                                    <h2 className="text-2xl sm:text-3xl mt-3 font-extrabold  mb-8 sm:mb-4 text-gray-900">Hardware Design</h2>
                                    <p>Developing innovative hardware solutions that meet specific requirements.</p>
                                    <motion.div
                                        className="mt-6 flex items-center gap-3 text-blue-500 hover:text-blue-700 group-hover:text-white transition-colors duration-300"
                                        whileHover={{ x: 10 }}
                                    >
                                        <button className="text-sm font-medium">Learn More</button>
                                        <ArrowRight className="h-5 w-5" />
                                    </motion.div>
                                </div>
                                <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
                                    <motion.div
                                        className="relative w-full h-[250px] rounded-2xl overflow-hidden shadow-xl"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={imageVariants}
                                    >
                                        <AnimatePresence mode="wait">
                                            <motion.img
                                                key={currentImage}
                                                src={images[currentImage]}
                                                alt={`Engineering Design ${currentImage + 1}`}
                                                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                                                initial={{ opacity: 0, x: 50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -50 }}
                                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                            />
                                        </AnimatePresence>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                                    </motion.div>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="Firmware">
                        <div className="border p-5   border-gray-900 rounded-2xl flex items-center   justify-between gap-7 ">
                                <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
                                    <motion.div
                                        className="relative w-full h-[250px] rounded-2xl overflow-hidden shadow-xl"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={imageVariants}
                                    >
                                        <AnimatePresence mode="wait">
                                            <motion.img
                                                key={currentImage}
                                                src={images[currentImage]}
                                                alt={`Engineering Design ${currentImage + 1}`}
                                                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                                                initial={{ opacity: 0, x: 50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -50 }}
                                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                            />
                                        </AnimatePresence>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                                    </motion.div>
                                </div>
                                <div className="">
                                    <FaCode className="text-2xl sm:text-6xl hover:text-white bg-blue-100 hover:bg-blue-400 duration-300 px-3 rounded-full" />
                                    <h2 className="text-2xl sm:text-3xl  font-extrabold mt-3 mb-8 sm:mb-4 text-gray-900">Firmware Development</h2>
                                    <p>Crafting firmware that optimizes device performance and functionality.</p>
                                    <motion.div
                                        className="mt-6 flex items-center gap-3 text-blue-500 hover:text-blue-700 group-hover:text-white transition-colors duration-300"
                                        whileHover={{ x: 10 }}
                                    >
                                        <button className="text-sm font-medium">Learn More</button>
                                        <ArrowRight className="h-5 w-5" />
                                    </motion.div>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="Software">
                        <div className="border p-5   border-gray-900 rounded-2xl flex items-center   justify-between gap-7 ">
                                <div className="">
                                    <FaLaptop className="text-2xl sm:text-6xl hover:text-white bg-blue-100 hover:bg-blue-400 duration-300 px-3 rounded-full" />
                                    <h2 className="text-2xl sm:text-3xl mt-3 font-extrabold  mb-8 sm:mb-4 text-gray-900">Software Solutions</h2>
                                    <p>Creating software applications that enhance user experience and efficiency.</p>
                                    <motion.div
                                        className="mt-6 flex items-center gap-3 text-blue-500 hover:text-blue-700 group-hover:text-white transition-colors duration-300"
                                        whileHover={{ x: 10 }}
                                    >
                                        <button className="text-sm font-medium">Learn More</button>
                                        <ArrowRight className="h-5 w-5" />
                                    </motion.div>
                                </div>
                                <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
                                    <motion.div
                                        className="relative w-full h-[250px] rounded-2xl overflow-hidden shadow-xl"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={imageVariants}
                                    >
                                        <AnimatePresence mode="wait">
                                            <motion.img
                                                key={currentImage}
                                                src={images[currentImage]}
                                                alt={`Engineering Design ${currentImage + 1}`}
                                                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                                                initial={{ opacity: 0, x: 50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -50 }}
                                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                            />
                                        </AnimatePresence>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                                    </motion.div>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="Mechanical">
                        <div className="border p-5   border-gray-900 rounded-2xl flex items-center   justify-between gap-7 ">
                                <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
                                    <motion.div
                                        className="relative w-full h-[250px] rounded-2xl overflow-hidden shadow-xl"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={imageVariants}
                                    >
                                        <AnimatePresence mode="wait">
                                            <motion.img
                                                key={currentImage}
                                                src={images[currentImage]}
                                                alt={`Engineering Design ${currentImage + 1}`}
                                                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                                                initial={{ opacity: 0, x: 50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -50 }}
                                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                            />
                                        </AnimatePresence>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                                    </motion.div>
                                </div>
                                <div className="">
                                    <FaWrench className="text-2xl sm:text-6xl hover:text-white bg-blue-100 hover:bg-blue-400 duration-300 px-3 rounded-full" />
                                    <h2 className="text-2xl sm:text-3xl mt-3 font-extrabold  mb-8 sm:mb-4 text-gray-900">Hardware Design</h2>
                                    <p>Developing innovative hardware solutions that meet specific requirements.</p>
                                    <motion.div
                                        className="mt-6 flex items-center gap-3 text-blue-500 hover:text-blue-700 group-hover:text-white transition-colors duration-300"
                                        whileHover={{ x: 10 }}
                                    >
                                        <button className="text-sm font-medium">Learn More</button>
                                        <ArrowRight className="h-5 w-5" />
                                    </motion.div>
                                </div>

                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>

        </section>
    );
};

export default EngineeringDesignServices;