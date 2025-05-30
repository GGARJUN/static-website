"use client";

import dynamic from "next/dynamic";
import { Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Play, Pause, SquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaArrowDown, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
const About = dynamic(() => import("./components/About"));
const Expertise = dynamic(() => import("./components/Expertise"));
const Partner = dynamic(() => import("./components/Partner"));
const FAQ = dynamic(() => import("./components/FAQ"));
const ClientReview = dynamic(() => import("./components/ClientReview"));
const PCBA = () => {
    const scrollToNextSection = () => {
        const nextSection = document.getElementById("next-section");
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    const banners = [
        { link: "/", img: "https://img.freepik.com/free-photo/group-young-teens-celebrating-world-youth-day-by-doing-activities-together_23-2151478305.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Expert PCBA Solutions", subtitle: "Transforming Designs into Functional Products", dtitle: "PCBA" },
        { link: "/", img: "https://img.freepik.com/free-photo/young-man-woman-protective-glasses-doing-experiments-robotics-laboratory-wooden-robot_1268-23374.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "PCB Assembly & Manufacturing", subtitle: "EHigh-quality assembly ensuring precision and reliability.", dtitle: "reliability" },
        { link: "/", img: "https://img.freepik.com/free-photo/graphic-designer-gaming-industry-talking-detail-with-his-colleague-analyzing-3d-design-level-explaining-production-creative-ideas-game-creators-working-videogame-illustration-company-office_482257-28158.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Component Sourcing & Integration", subtitle: "Sourcing premium components for seamless functionality.", dtitle: "Integration" },
        { link: "/", img: "https://img.freepik.com/free-photo/female-working-bike_23-2148836068.jpg?uid=R110556143&ga=GA1.1.1704431159.1736575258&semt=ais_hybrid", title: "Testing & Quality Assurance", subtitle: "Rigorous testing for optimal performance and durability.", dtitle: "Testing" }
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
            <div className="w-full h-screen  relative flex">
                <motion.div className="flex w-full h-full" initial={{ x: "100%" }} animate={{ x: `-${index * 100}%` }} transition={{ type: "spring", stiffness: 50, damping: 10 }}>
                    {banners.map((banner, i) => (
                        <div key={i} className="w-full flex-shrink-0 h-full relative">
                            <img src={banner.img} alt={banner.title} className="w-full h-full object-cover" loading="lazy" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"></div>
                            <div className="absolute inset-0 flex flex-col justify-center items-start 2xl:px-40 md:px-20 px-10 text-white">
                                {i === 0 ? (
                                    <h1 className="text-5xl 2xl:text-7xl font-medium mb-6 duration-500">
                                        <Highlight>{banner.title}</Highlight>
                                        <br />
                                        <span className="mt-6 font-normal block text-3xl md:text-5xl">{banner.subtitle}</span>
                                    </h1>
                                ) : (
                                    <h2 className="text-5xl 2xl:text-7xl font-medium mb-6 duration-500">
                                        <Highlight>{banner.title}</Highlight>
                                        <br />
                                        <span className="mt-6 font-normal block text-3xl md:text-5xl">{banner.subtitle}</span>
                                    </h2>
                                )}
                                <Link href={banner.link}>
                                    <button
                                        className="border duration-300 hover:bg-white text-white mt-6 bg-transparent md:py-3 md:px-8 py-3 px-6 rounded-md font-semibold md:text-lg hover:text-black flex items-center gap-4"
                                    >
                                        Read More <SquareArrowOutUpRight />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}

                </motion.div>

                <Button varient="outline" onClick={() => setIsPlaying(!isPlaying)} className="absolute hover:bg-white hover:text-black z-40 bottom-5 2xl:left-[60%] xl:left-[70%] left-[90%] bg-transparent border rounded-md hidden md:block">
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </Button>
                <div className="absolute bottom-6 z-40 2xl:left-[32%] xl:left-[30%] left-[5%] justify-start items-start hidden md:flex gap-8 ">
                    {banners.map((_, i) => (
                        <div key={i} onClick={() => setIndex(i)} className="flex flex-col justify-start items-start gap-1 cursor-pointer">
                            <p className="text-white">{_.dtitle}</p>
                            <button className={`w-full h-[2px] rounded-full ${i === index ? "bg-white" : "bg-gray-500"}`}></button>
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-6 cursor-pointer w-full text-white hidden xl:flex justify-between items-center px-20">
                    <div className="flex items-center gap-3" onClick={scrollToNextSection} >
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
                <div id="next-section" ref={aboutRef} className="py-20 ">
                    <div ref={aboutInView} className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <About />
                    </div>
                </div>

                <div ref={expertiseRef} className="pt-20 pb-60  bg-gradient-to-r from-pink-300/10 via-purple-100 to-indigo-400/10 ">
                    <div ref={expertiseInView} className="">
                        <Expertise />
                    </div>
                </div>

                <div ref={partnerRef} className="py-20   ">
                    <div ref={partnerInView} className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <Partner />
                    </div>
                    {/* <CallUs/> */}
                    {/* <ClientReview/> */}
                </div>

                <div ref={faqRef} className="py-20   bg-gradient-to-r from-pink-300/10 via-blue-200 to-indigo-400/10 ">
                    <div ref={faqInView} className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <FAQ />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default PCBA