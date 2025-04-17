"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();
  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCanonicalUrl(`https://www.sunkeydesignsystems.com/${router.asPath}`);
    }
  }, [router.asPath]);

  const navigation = {

    "Engineering Design Services": [
      { name: "Hardware", href: "/engineering-design-services/hardware" },
      { name: "Firmware", href: "/engineering-design-services/firmware" },
      { name: "Software", href: "/engineering-design-services/software" },
      { name: "Mechanical", href: "/engineering-design-services/mechanical" },
    ],
    "Electronic Design": [
      { name: "PCB Design Service", href: "/electronic-design/pcb-design-service" },
      { name: "PCB Layout", href: "/electronic-design/pcb-layout" },
      { name: "SI/PI Analysis", href: "/electronic-design/analysis" },
      { name: "Reverse Engineering", href: "/electronic-design/reverse-engineering" },
      { name: 'Design Modification Service', href: '/electronic-design/design-modification-service' },
      { name: 'Design for Manufacturability', href: '/electronic-design/design-for-manufacturability' },
    ],
    "Manufacturing Services": [
      { name: "PCBA", href: "/manufacturing/pcba" },
      { name: "Test Fixture", href: "/manufacturing/test-fixture" },
      { name: "Box Build", href: "/manufacturing/box-build" },
    ],
    "About Us": [
      { name: "Who we are", href: "/about/who-we-are" },
      // { name: "Careers", href: "/about/careers" },
      // { name: "Partners", href: "/about/partners" },
    ],
    "Resources": [
      { name: "Blogs", href: "/resources/blogs" },
      // { name: "News", href: "/resources/news" },
    ],
  };

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-8 sm:pt-14 pb-6 sm:pb-10 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12 lg:gap-20 w-full">
            <div className="lg:col-span-4 col-span-1 flex flex-col gap-6 sm:gap-8 mb-6 sm:mb-0">
              <Link href={"/"}>
                <div className="">
                  <img src="/Logo/whitelogo.png" alt="logo" className="h-12 sm:h-16 object-cover" />
                </div>
              </Link>
              <p className="text-gray-300 text-sm sm:text-base max-w-xs">
                We empower businesses to innovate in the tech landscape by providing cutting-edge solutions in engineering design, electronics, IoT, and manufacturing.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                1&1A, UR Nagar Extn,<br /> Anna Nagar W Ext St,<br /> Chennai, Tamil Nadu 600101
              </p>
              <Link href="mailto:kumar@sunkeydesignsystems.com" className="text-blue-500 underline text-sm sm:text-base">
                sales@sunkeydesignsystems.com
              </Link>
              <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                <Link href={"https://www.facebook.com/profile.php?id=61574435144838"} target="_blank">
                  <FaFacebookF size={40} className="px-2 py-2 rounded-xl bg-white text-black hover:scale-110 transition-all duration-300 hover:text-blue-500 border" />
                </Link>
                <Link href={"https://www.instagram.com/sunkeydesignsystems/"} target="_blank">
                  <FaInstagram size={40} className="px-2 py-2 rounded-xl bg-white text-black hover:scale-110 transition-all duration-300 hover:text-blue-500 border" />
                </Link>
                <Link href={"https://x.com/sunkeydesign"} target="_blank">
                  <FaXTwitter size={40} className="px-2 py-2 rounded-xl bg-white text-black hover:scale-110 transition-all duration-300 hover:text-blue-500 border" />
                </Link>
                <Link href={"https://www.linkedin.com/company/106414983/"} target="_blank">
                  <FaLinkedinIn size={40} className="px-2 py-2 rounded-xl bg-white text-black hover:scale-110 transition-all duration-300 hover:text-blue-500 border" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-8 col-span-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8">
              {Object.entries(navigation).map(([category, items]) => (
                <div key={category} className="space-y-2 sm:space-y-3">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-300">{category}</h3>
                  <ul className="space-y-1 sm:space-y-2">
                    {items.map((item, index) => (
                      <li key={index} className="text-xs sm:text-sm lg:text-base text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-200">
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="text-base sm:text-lg lg:text-xl font-bold text-gray-300 hover:text-blue-400 cursor-pointer transition-colors duration-200">
                <Link href="/iot">Internet of Things</Link>
              </div>
              {/* <div className="text-base sm:text-lg lg:text-xl font-bold text-gray-300 hover:text-blue-400 cursor-pointer transition-colors duration-200">
                <Link href="/case-study">Case Study</Link>
              </div> */}
              <div className="text-base sm:text-lg lg:text-xl font-bold text-gray-300 hover:text-blue-400 cursor-pointer transition-colors duration-200">
                <Link href="/contact-us">Contact Us</Link>
              </div>
            </div>
          </div>
          <span className="w-full border mt-6 sm:mt-10 border-gray-700 block"></span>
          <div className="mt-6 sm:mt-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-0">
            <h2 className="text-gray-500 text-xs sm:text-sm lg:text-base">Copyright © 2025 Sunkey Design Systems Pvt Ltd. All rights reserved.</h2>
            <h2 className="text-gray-500 text-xs sm:text-sm lg:text-base">User Terms & Conditions | Privacy Policy</h2>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;