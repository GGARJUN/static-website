"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-3 z-50 right-3 p-2 rounded-full  text-black shadow-md border bg-black/30 transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <FaArrowUp className="text-sm" />
    </button>
  );
};

export default ScrollToTop;
