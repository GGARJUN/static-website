"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { NavLinks } from "../components/NavLinks";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0); // Store last scroll position persistently

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 0); // True if scrolled down
      if (currentScrollY > lastScrollY.current + 30) {
        setHidden(true); // Hide when scrolling down
      } else if (currentScrollY < lastScrollY.current - 30) {
        setHidden(false); // Show when scrolling up
      }
      lastScrollY.current = currentScrollY; // Update last scroll position
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div
      className={`top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? `fixed bg-white shadow-lg text-black ${hidden ? "-translate-y-full" : "translate-y-0"}`
          : "absolute bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex items-center justify-between px-20">
        {/* Logo */}
        <div>
          <Link href="/" className="-m-1.5 p-1.5">
            <h2 className="text-4xl font-bold transition duration-300">SunKey</h2>
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
