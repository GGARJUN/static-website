"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Head from "next/head";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();
  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCanonicalUrl(`https://electricalstaticwebsite.netlify.app${router.asPath}`);
    }
  }, [router.asPath]);

  const navigation = {
    "About Us": [
      { name: "Who we are", href: "/about/who_we_are" },
      { name: "Careers", href: "/about/careers" },
      { name: "Partners", href: "/about/partners" },
    ],
    "Engineering Design Services": [
      { name: "Hardware", href: "/engineering_design_services/hardware" },
      { name: "Firmware", href: "/engineering_design_services/firmware" },
      { name: "Software", href: "/engineering_design_services/software" },
      { name: "Mechanical", href: "/engineering_design_services/mechanical" },
    ],
    "Electronic Design": [
      { name: "PCB Design Service", href: "/electronic_design/pcb_design_service" },
      { name: "PCB Layout", href: "/electronic_design/pcb_layout" },
      { name: "SI/PI Analysis", href: "/electronic_design/analysis" },
      { name: "Reverse Engineering", href: "/electronic_design/reverse_engineering" },
      { name: 'Design Modification Service',href: '/electronic_design/design_modification_service',},
      { name: 'Design for Manufacturability',  href: '/electronic_design/design_for_manufacturability', },
    ],

    "Manufacturing Services": [
      { name: "PCBA", href: "/manufacturing/pcba" },
      { name: "Test Fixture", href: "/manufacturing/test_fixture" },
      { name: "Box Build", href: "/manufacturing/box_build" },
    ],
    "Resources": [
      { name: "Blogs", href: "/resources/blogs" },
      { name: "News", href: "/resources/news" },
    ],
  };

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-14 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-5 md:gap-10 w-full">
            <div className="lg:col-span-4 col-span-12 flex flex-col gap-8 mb-5 md:mb-0">
              <h2 className="text-4xl font-bold">SunKeyTechnology</h2>
              <p className="text-[14px] text-gray-400 max-w-md">
                We empower businesses to innovate in the tech landscape by providing cutting-edge solutions in engineering design, electronics, IoT, and manufacturing.
              </p>
              <div className="flex items-center gap-10">
                <FaFacebookF size={40} className="px-2 py-2 rounded-xl bg-white text-black hover:scale-110 transition-all duration-300 hover:text-blue-500 border" />
                <FaXTwitter size={40} className="px-2 py-2 rounded-xl bg-white text-black hover:scale-110 transition-all duration-300 hover:text-blue-500 border" />
                <FaLinkedinIn size={40} className="px-2 py-2 rounded-xl bg-white text-black hover:scale-110 transition-all duration-300 hover:text-blue-500 border" />
              </div>
            </div>
            <div className="lg:col-span-8 col-span-12 grid grid-cols-2 md:grid-cols-3 gap-8">
              {Object.entries(navigation).map(([category, items]) => (
                <div key={category} className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-300">{category}</h3>
                  <ul className="space-y-2">
                    {items.map((item, index) => (
                      <li key={index} className="text-sm sm:text-base text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-200">
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}


                  <div className="text-lg sm:text-xl font-bold text-gray-300 hover:text-blue-400 cursor-pointer transition-colors duration-200">
                    <Link href="/iot">Internet of Things</Link>
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-gray-300 hover:text-blue-400 cursor-pointer transition-colors duration-200">
                    <Link href="/case-study">Case Study</Link>
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-gray-300 hover:text-blue-400 cursor-pointer transition-colors duration-200">
                    <Link href="/contact-us">Contact Us</Link>
                  </div>


              <div className="">
                <Input type="text" placeholder="Enter Your Number" className="py-6" />
                <Button className="bg-blue-600 mt-5">Request a Callback</Button>
              </div>
            </div>
          </div>
          <span className="w-full border mt-10 border-gray-700 flex"></span>
          <div className="mt-10 lg:flex flex-row justify-between items-center">
            <h2 className="text-gray-500 text-sm sm:text-base">Copyright © 2025 SunKey Technologies. All rights reserved.</h2>
            <h2 className="text-gray-500 text-sm sm:text-base md:mt-0 mt-2">User Terms & Conditions | Privacy Policy</h2>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
