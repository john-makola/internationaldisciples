"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";

const DropdownMenu = ({ subMenu }) => {
  const dropdownRef = useRef(null);
  const parentRef = useRef(null);
  const [positionClass, setPositionClass] = useState("left-0");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const leaveTimeout = useRef(null);

  useEffect(() => {
    const adjustPosition = () => {
      const dropdown = dropdownRef.current;
      const parent = parentRef.current;
      if (dropdown && parent) {
        const parentRect = parent.getBoundingClientRect();
        const spaceRight = window.innerWidth - parentRect.left;
        const spaceLeft = parentRect.right;

        if (spaceRight < 500 && spaceLeft >= 500) {
          setPositionClass("right-0");
        } else {
          setPositionClass("left-0");
        }
      }
    };

    adjustPosition();
    window.addEventListener("resize", adjustPosition);
    return () => window.removeEventListener("resize", adjustPosition);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(leaveTimeout.current);
    setIsMobileOpen(true);
  };

  const handleMouseLeave = () => {
    leaveTimeout.current = setTimeout(() => {
      setIsMobileOpen(false);
    }, 200);
  };

  return (
    <div
      ref={parentRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center justify-between w-full cursor-pointer space-x-2">
        <FaChevronDown className="text-gray-700" />
      </div>

      {/* Dropdown container - fix applied here */}
      <div
        ref={dropdownRef}
        onClick={(e) => e.stopPropagation()} // ✅ Prevents dropdown toggle on link click
        className={`absolute top-full ${positionClass}
          bg-gray-100 shadow-md rounded-md mt-2 z-40 w-[500px] 
          max-w-[calc(100vw-20px)] p-4 gap-4 box-border overflow-x-hidden 
          flex flex-row transition-all duration-300 ease-out transform
          ${
            isMobileOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
      >
        {/* Left Section */}
        <div className="flex flex-col not-[]:w-1/2 min-w-[140px] ">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <Image
              src="/home/intldisciples_logo.png"
              alt="International Disciples Mission Ministries"
              width={80}
              height={80}
              className="shadow-sm rounded-full"
            />
            <p className="text-sm md:text-sm text-gray-800 max-w-xs md:max-w-none uppercase">
              International Disciples Mission Ministries
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col w-1/2 min-w-[200px]">
          <ul className="space-y-2">
            {subMenu.map((item, index) => (
              <li key={index}>
                <Link
                  href={`/${item.linkUrl}`}
                  className="block px-4 py-2 text-sm hover:bg-gray-200 text-gray-700 rounded"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
