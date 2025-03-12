"use client";
import dynamic from "next/dynamic";
import { Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Play, Pause, SquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaArrowDown, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
const About = dynamic(() => import("./components/About"));
const Expertise = dynamic(() => import("./components/Expertise"));
const Partner = dynamic(() => import("./components/Partner"));
const FAQ = dynamic(() => import("./components/FAQ"));
const CallUs = dynamic(() => import("./components/CallUs"));
const ClientReview = dynamic(() => import("./components/ClientReview"));

const ReverseEngineering = () => {
    const banners = [
        { img: "https://img.freepik.com/free-photo/man-using-futuristic-technology_1134-493.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Unlocking Existing Designs", subtitle: "Expert Reverse Engineering Solutions", dtitle: "Reverse" },
        { img: "/banner4.jpg", title: "PCB Reverse Engineering", subtitle: "Recreating circuit board designs for improvements", dtitle: "PCB" },
        { img: "https://img.freepik.com/free-photo/person-using-ar-technology-their-daily-occupation_23-2151137526.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Firmware Extraction & Analysis", subtitle: "Recovering and analyzing firmware for optimization", dtitle: "Firmware" },
        { img: "/banner2.jpg",title: " Legacy System Modernization",subtitle: "Upgrading outdated hardware and software for improved", dtitle: "Modernization" }
    ];
    const [index, setIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const nextSlide = () => setIndex((prev) => (prev + 1) % banners.length);
    useEffect(() => {
        if (!isPlaying) return;
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [index, isPlaying]);
    const [isFixed, setIsFixed] = useState(false);
    const [originalOffset, setOriginalOffset] = useState(0);
    const [hidden, setHidden] = useState(false);
    const lastScrollY = useRef(0);
    useLayoutEffect(() => {
        if (sectionRef.current) {
            setOriginalOffset(sectionRef.current.offsetTop);
        }
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY >= originalOffset) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
            if (currentScrollY > lastScrollY.current + 10) {
                setHidden(true);
            } else if (currentScrollY < lastScrollY.current - 10) {
                setHidden(false);
            }
            lastScrollY.current = currentScrollY;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [originalOffset]);
    const sectionRef = useRef(null);
    const aboutRef = useRef(null);
    const expertiseRef = useRef(null);
    const partnerRef = useRef(null);
    const faqRef = useRef(null);
    const sections = [
        { ref: aboutRef, label: "About the Service" },
        { ref: expertiseRef, label: "Our Expertise" },
        { ref: partnerRef, label: "Why Partner with Us" },
        { ref: faqRef, label: "FAQs" },
    ];
    const [activeIndex, setActiveIndex] = useState(0);
    const { ref: aboutInView, inView: isAboutInView } = useInView({ threshold: 0.5 });
    const { ref: expertiseInView, inView: isExpertiseInView } = useInView({ threshold: 0.5 });
    const { ref: partnerInView, inView: isPartnerInView } = useInView({ threshold: 0.5 });
    const { ref: faqInView, inView: isFaqInView } = useInView({ threshold: 0.5 });
    useEffect(() => {
        if (isAboutInView) setActiveIndex(0);
        else if (isExpertiseInView) setActiveIndex(1);
        else if (isPartnerInView) setActiveIndex(2);
        else if (isFaqInView) setActiveIndex(3);
    }, [isAboutInView, isExpertiseInView, isPartnerInView, isFaqInView]);
    const scrollToSection = (ref, index) => {
        if (ref?.current) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
            setActiveIndex(index);
        }
    };
    return (
        <section className="relative w-full  overflow-hidden">
            <div className="w-full h-[700px]  relative flex">
                <motion.div className="flex w-full h-full" initial={{ x: "100%" }} animate={{ x: `-${index * 100}%` }} transition={{ type: "spring", stiffness: 50, damping: 10 }}>
                    {banners.map((banner, i) => (
                        <div key={i} className="w-full flex-shrink-0 h-full relative">
                            <img src={banner.img} alt={banner.title} className="w-full h-full object-cover" />
                            {/* <video
                                src={banner.video} // Replace with your video URL
                                className="w-full h-full object-cover"
                                autoPlay // Automatically plays
                                loop // Loops the video
                                muted // Starts muted
                            /> */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"></div>
                            <div className="absolute inset-0 flex flex-col justify-center items-start 2xl:px-40 md:px-20 px-10 text-white">
                                <h1 className="text-4xl md:text-5xl 2xl:text-7xl font-medium mb-6 duration-500">
                                    <Highlight>{banner.title}</Highlight>
                                    <br />
                                    <span className="mt-8 block text-4xl md:text-5xl 2xl:text-6xl max-w-5xl font-medium">{banner.subtitle}</span>
                                </h1>
                                <button className="border duration-300 hover:bg-white text-white mt-6 bg-transparent md:py-3 md:px-8 py-3 px-6 rounded-md font-semibold md:text-lg hover:text-black flex items-center gap-4">
                                    Read More <SquareArrowOutUpRight />
                                </button>
                            </div>
                        </div>
                    ))}
                </motion.div>
                <Button varient="outline" onClick={() => setIsPlaying(!isPlaying)} className="absolute bottom-5 z-50 2xl:left-[60%] md:left-[70%] left-[85%] bg-transparent hover:bg-white hover:text-black border rounded-md hidden md:block">
                    {isPlaying ? <Pause className="w-5 h-5 " /> : <Play className="w-5 h-5 " />}
                </Button>
                <div className="absolute bottom-6 2xl:left-[32%] md:left-[30%] left-[5%] justify-start items-start md:flex z-50 gap-8 hidden md:block">
                    {banners.map((_, i) => (
                        <div key={i} onClick={() => setIndex(i)} className="flex flex-col justify-start items-start gap-1 cursor-pointer">
                            <p className="text-white">{_.dtitle}</p>
                            <button className={`w-full h-[2px] rounded-full ${i === index ? "bg-white" : "bg-gray-500"}`}></button>
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-6 w-full cursor-pointer text-white flex justify-between items-center px-20">
                    <div className="flex items-center gap-3">
                        <FaArrowDown className="animate-bounce duration-800 ease-in-out" />
                        <h2 className="font-semibold">SCROLL TO EXPLORE</h2>
                    </div>
                    <div className="flex items-center gap-10">
                        <FaFacebookF />
                        <FaXTwitter />
                        <FaLinkedinIn />
                    </div>
                </div>
            </div>

            <section ref={sectionRef} className={`md:px-[271px] px-20 transition-all duration-300 bg-white  w-full  ${isFixed ? "fixed top-0 w-full  shadow-md z-20" : ""} ${hidden ? " top-0 " : " top-[89px] "} transition-transform duration-700`}>
                <div className="bg-white grid grid-cols-1  md:grid-cols-4 justify-center items-center ">
                    {sections.map((section, index) => (
                        <button key={index} onClick={() => scrollToSection(section.ref, index)} className={`relative flex justify-center font-medium py-4 px-5 text-center  hover:bg-gray-200 transition-all`}>
                            {section.label}
                            {activeIndex === index && (
                                <motion.div
                                    className="absolute bottom-0 left-0 h-[4px] bg-gradient-to-r from-indigo-500 to-pink-500"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </section>

            <div>
                <div ref={aboutRef} className="pb-72 pt-40 ">
                    <div ref={aboutInView} className="container mx-auto px-16">
                        <About />
                    </div>
                </div>

                <div ref={expertiseRef} className="py-40  bg-gradient-to-r from-pink-300/10 via-purple-100 to-indigo-400/10 ">
                    <div ref={expertiseInView} className="container mx-auto px-16">
                        <Expertise />
                    </div>
                </div>

                <div ref={partnerRef} className="pt-40   ">
                    <div ref={partnerInView} className="container mx-auto px-16">
                        <Partner />
                    </div>
                    <CallUs/>
                    <ClientReview/>
                </div>

                <div ref={faqRef} className="py-40   bg-gradient-to-r from-pink-300/10 via-blue-200 to-indigo-400/10 ">
                    <div ref={faqInView} className="container mx-auto px-16">
                        <FAQ />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ReverseEngineering