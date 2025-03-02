

"use client";

import { Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Play, Pause, SquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaArrowDown, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaCogs, FaClipboardCheck, FaBoxOpen } from "react-icons/fa";

const banners = [
    {
        icon: <FaCogs />,
        img: "/banner1.png",
        title: "PCBA (Printed Circuit Board Assembly)",
        subtitle: "Our PCBA services ensure high-quality, reliable circuit boards for your electronic products, with precision and efficiency.",
        dtitle: "Engineering"
    },
    {
        icon: <FaClipboardCheck />,
        img: "/banner2.jpg",
        title: "Test Fixtures",
        subtitle: "We design and build custom test fixtures to ensure your products meet the highest standards of quality and reliability.",
        dtitle: "Electronic"
    },
    {
        icon: <FaBoxOpen />,
        img: "/banner3.jpg",
        title: "Box Build",
        subtitle: "From components to finished products, our box build services deliver complete assembly solutions for your manufacturing needs.",
        dtitle: "Manufacturing"
    },

];



const MSlider = () => {
    const [index, setIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    const nextSlide = () => setIndex((prev) => (prev + 1) % banners.length);
    const prevSlide = () => setIndex((prev) => (prev - 1 + banners.length) % banners.length);

    useEffect(() => {
        if (!isPlaying) return;
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [index, isPlaying]);

    return (
        <section className="relative w-full  overflow-hidden rounded-xl">
            <div className="relative flex w-full h-full group">
                <motion.div
                    className="flex w-full rounded-xl"
                    initial={{ x: "100%" }}
                    animate={{ x: `-${index * 100}%` }}
                    transition={{ type: "spring", stiffness: 50, damping: 10 }}
                >
                    {banners.map((banner, i) => (
                        <div key={i} className="w-full flex-shrink-0  relative rounded-xl">
                            <img
                                src={banner.img}
                                alt={banner.title}
                                className="w-full h-[550px] object-cover rounded-xl"
                            />
                            <div className="absolute rounded-xl inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"></div>
                            <div className="absolute inset-0 flex flex-col justify-center items-start 2xl:px-40 md:px-20 px-10 text-white">
                                <h1 className="text-4xl md:text-5xl 2xl:text-7xl font-medium mb-6">
                                    {banner.title}
                                </h1>
                                <p className="mt-4  text-2xl md:text-3xl 2xl:text-4xl">
                                    {banner.subtitle}
                                </p>
                                <button className="group-hover:translate-x-5 duration-300 hover:bg-blue-500 hover:text-white mt-10 bg-white md:py-4 md:px-10 py-3 px-6 rounded-md font-semibold md:text-lg text-black flex items-center gap-4">Read More <span><SquareArrowOutUpRight /></span></button>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>


            <div className="flex items-center mt-10 justify-center gap-32">

                <div className="flex gap-2">
                    <Button
                        onClick={prevSlide}
                        className="  bg-white"
                    >
                        <ArrowLeft className="text-black font-bold w-6 h-6" />
                    </Button>
                    <Button
                        onClick={nextSlide}
                        className="bg-white"
                    >
                        <ArrowRight className=" text-black font-bold w-6 h-6" />
                    </Button>
                </div>
                <div className=" flex ">
                    {banners.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`md:w-24 w-10 h-1 rounded-full ${i === index ? "bg-black" : "bg-white"}`}
                        ></button>
                    ))}
                </div>



                <Button
                    varient="outline"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className=" bg-white border rounded-md "
                >
                    {isPlaying ? <Pause className=" w-5 h-5 text-black" /> : <Play className=" w-5 h-5 text-black" />}
                </Button>


            </div>



        </section>
    );
};

export default MSlider;
