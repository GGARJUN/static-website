"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { NavLinks } from "./NavLinks";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.1); // Fix header after 10% scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full px-20 py-4 z-50 transition-all ${
        scrolled ? "bg-white shadow-lg text-black fixed" : "absolute bg-transparent text-white"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/">
            <h2
              className={`${
                scrolled ? "text-3xl font-bold duration-300" : "text-3xl font-bold"
              }`}
            >
              SunKey
            </h2>
          </Link>
        </div>

        {/* NavLinks */}
        <div className="hidden lg:flex lg:gap-10 items-center">
          <NavLinks />
        </div>
      </div>
    </div>
  );
};

export default Header;
