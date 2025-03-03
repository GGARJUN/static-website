"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { NavLinks } from "./NavLinks";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
      const handleScroll = () => {
          const currentScrollY = window.scrollY;
          //> window.innerHeight * 0.1
          if (currentScrollY) {
              setScrolled(true);
          } else {
              setScrolled(false);
          }

          if (currentScrollY > lastScrollY + 30) {
              // Hide when scrolling down
              setHidden(true);
          } else if (currentScrollY < lastScrollY - 30) {
              // Show when scrolling up
              setHidden(false);
          }

          lastScrollY = currentScrollY;
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
    className={`top-0 left-0 w-full z-50 transition-all duration-300  ${scrolled
        ? `fixed bg-white shadow-lg text-black ${hidden ? "-translate-y-full" : "translate-y-0"}`
        : "absolute bg-transparent text-white"
        }`}
>
      <div className="mx-auto flex  items-center justify-between px-20 ">
        {/* Logo */}
        <div>
          <Link href="/" className="-m-1.5 p-1.5">
            <h2
              className={`${
                scrolled ? "text-4xl font-bold duration-300" : "text-4xl font-bold"
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
