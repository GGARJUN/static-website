"use client";

import dynamic from "next/dynamic";
import { Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Play, Pause, SquareArrowOutUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaArrowDown, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const WhoWeAre = dynamic(() => import("./Components/WhoWeAre"));
const Culture = dynamic(() => import("./Components/Culture"));
const HowWeWork = dynamic(() => import("./Components/HowWeWork"));
const ApplyJob = dynamic(() => import("./Components/ApplyJob"));

const Careers = () => {
    const banners = [
        { img: "https://img.freepik.com/free-photo/futuristic-business-scene-with-ultra-modern-ambiance_23-2151003776.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", video: "https://videocdn.cdnpk.net/videos/1ef16701-112e-471a-9cf3-e91b92120e99/horizontal/previews/clear/small.mp4?token=exp=1741156094~hmac=77525dadf24a45c7d059607cf7ce881298165d9c410d3eb9cb4b16fa7477b484", title: "Transforming Ideas into Reality", subtitle: "Expert Hardware Design Solutions", dtitle: "Transforming" },
        { img: "https://img.freepik.com/free-photo/abstract-futuristic-digital-technology-background-cpu-motherboard_587448-4810.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", video: "https://videocdn.cdnpk.net/videos/e0a04c27-bc83-472d-96b5-4fbf17438625/horizontal/previews/clear/small.mp4?token=exp=1741156379~hmac=1e05fd670a76adc82f807907bec5117da797012e8074a311362f29b2a580cdb8", title: "Embedded Systems Development", subtitle: "Smart integration of microcontrollers and firmware.", dtitle: "Embedded" },
        { img: "https://img.freepik.com/free-photo/tired-woman-architect-working-modern-cad-program-overtime-sitting-desk-start-up-office-industrial-female-engineer-studying-prototype-idea-pc-showing-cad-software-device-display_482257-13399.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", video: "https://videocdn.cdnpk.net/videos/40fdac8a-cd70-473f-b774-8b5af417503c/horizontal/previews/clear/small.mp4?token=exp=1741156379~hmac=5eba3302b53db4c9ddd82b5186da0ede6f2db6ad1858e061cab3d245ae7ea722", title: "Prototyping & Testing", subtitle: "Creating and testing prototypes for market readiness.", dtitle: "Prototyping" },
        { img: "https://img.freepik.com/free-photo/blurred-night-lights_23-2148139360.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", video: "https://videocdn.cdnpk.net/videos/ec1661c4-6f1c-4bcf-a1dc-7ab96aa0d7b2/horizontal/previews/clear/small.mp4?token=exp=1741156379~hmac=232ba138f42dc8ed9082335cf883bef3a7370d8bc139820cab7313307a85a86a", title: "Signal Integrity & Power Management", subtitle: "Optimized circuits for stability and power efficiency.", dtitle: "Power" }
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
        { ref: aboutRef, label: "Who we Are" },
        { ref: expertiseRef, label: "Our Culture & Values" },
        { ref: partnerRef, label: "How We Work" },
        { ref: faqRef, label: "Apply The Job" },
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
            <div className="w-full h-screen  relative flex">
                <motion.div className="flex w-full h-full" initial={{ x: "100%" }} animate={{ x: `-${index * 100}%` }} transition={{ type: "spring", stiffness: 50, damping: 10 }}>
                    {banners.map((banner, i) => (
                        <div key={i} className="w-full flex-shrink-0 h-full relative">
                            <Image priority src={banner.img} alt={banner.title} fill className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"></div>
                            <div className="absolute inset-0 flex flex-col justify-center items-start 2xl:px-40 md:px-20 px-10 text-white">
                                <h1 className="text-5xl 2xl:text-7xl font-medium mb-6 duration-500">
                                    <Highlight>{banner.title}</Highlight>
                                    <br />
                                    <span className="mt-6 font-normal block text-3xl md:text-5xl ">{banner.subtitle}</span>
                                </h1>
                                <button className="border duration-300 hover:bg-white text-white mt-6 bg-transparent md:py-3 md:px-8 py-3 px-6 rounded-md font-semibold md:text-lg hover:text-black flex items-center gap-4">
                                    Read More <SquareArrowOutUpRight />
                                </button>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <Button varient="outline" onClick={() => setIsPlaying(!isPlaying)} className="absolute hover:bg-white hover:text-black z-50 bottom-5 2xl:left-[60%] xl:left-[70%] left-[90%] bg-transparent border rounded-md hidden md:block">
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </Button>
                <div className="absolute bottom-6 z-50 2xl:left-[32%] xl:left-[30%] left-[5%] justify-start items-start hidden md:flex gap-8 ">
                    {banners.map((_, i) => (
                        <div key={i} onClick={() => setIndex(i)} className="flex flex-col justify-start items-start gap-1 cursor-pointer">
                            <p className="text-white">{_.dtitle}</p>
                            <button className={`w-full h-[2px] rounded-full ${i === index ? "bg-white" : "bg-gray-500"}`}></button>
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-6 cursor-pointer w-full text-white hidden xl:flex justify-between items-center px-20">
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

            <section ref={sectionRef} className={`lg:px-[271px] px-5  transition-all duration-300 bg-white  w-full md:block hidden ${isFixed ? "fixed top-0 w-full  shadow-md z-20" : ""} ${hidden ? " top-0 " : " top-[89px] "} transition-transform duration-700`}>
                <div className="bg-white grid grid-cols-1  md:grid-cols-4 justify-center items-center ">
                    {sections.map((section, index) => (
                        <button key={index} onClick={() => scrollToSection(section.ref, index)} className={`relative flex justify-center font-medium py-4 px-5 text-center  hover:bg-gray-200 transition-all`}>
                            {section.label}
                            {activeIndex === index && (
                                <motion.div
                                    className="absolute bottom-0 left-0 h-[4px] bg-gradient-to-r from-indigo-500 to-pink-500"
                                    initial={{ "inlineSize": "0%" }}
                                    animate={{ "inlineSize": "100%" }}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </section>

            <div>
                <div ref={aboutRef} className=" py-20 ">
                    <div ref={aboutInView} className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <WhoWeAre />
                    </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500 via-blue-700 to-blue-600  ">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:flex justify-between items-center">
                        <p className="text-white text-xl lg:max-w-4xl">At SunKey Technologies, we empower businesses to innovate and thrive in the rapidly evolving tech landscape. Our team of experts provides comprehensive engineering design services, electronic design solutions, manufacturing capabilities, and IoT innovations that drive success. With a focus on quality, reliability, and customer satisfaction, we help our clients achieve their goals efficiently.
                        </p>
                        <button className='group flex items-center shadow-lg border-2 mt-5 lg:mt-0 hover:bg-blue-700 text-white px-6 font-semibold py-4 gap-3 rounded-full '>Join Now <ArrowRight className='group-hover:translate-x-1 transition-all duration-300' /></button>
                    </div>
                </div>

                <div ref={expertiseRef} className="py-20  bg-gradient-to-r from-pink-300/10 via-purple-100 to-indigo-400/10 ">
                    <div ref={expertiseInView} className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <Culture />
                    </div>
                </div>
                <div ref={partnerRef} className="   ">
                    <div ref={partnerInView} className="">
                        <HowWeWork />
                    </div>
                </div>
                
                <div ref={faqRef} className="py-20">
                    <div ref={faqInView} className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <ApplyJob />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Careers
