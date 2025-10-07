"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (scrolled / height) * 100;

      setScrollProgress(progress);
      setVisible(scrolled > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        onClick={scrollToTop}
        className="relative w-14 h-14 flex items-center justify-center rounded-full bg-[#386973] hover:bg-[#2e5a61] text-white cursor-pointer shadow-lg group"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-lg z-10" />
        <svg
          className="absolute top-0 left-0 w-full h-full rotate-[-90deg]"
          viewBox="0 0 36 36"
        >
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#ffffff33"
            strokeWidth="2"
          />
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeDasharray={`${scrollProgress}, 100`}
          />
        </svg>
      </div>
    </div>
  );
};

export default BackToTopButton;
