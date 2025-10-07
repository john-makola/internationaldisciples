"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import DropdownMenu from "@/hooks/dropdownmenu";

const navItems = [
  {
    title: "About",
    subMenu: [
      { name: "Our Story", linkUrl: "ourstory" },
      {
        name: "Why is Discipleship important",
        linkUrl: "why-discipleship-important",
      },
      { name: "Board Members", linkUrl: "boardmembers" },
      { name: "Prayer Team", linkUrl: "prayerteam" },
    ],
  },
  {
    title: "What We Do",
    subMenu: [
      { name: "What We Do", linkUrl: "whatwedo" },
      { name: "Empowering Disciples", linkUrl: "empoweringdisciples" },
      { name: "Fundraising Programs", linkUrl: "fundraisingprograms" },
      { name: "Short Term Missions", linkUrl: "shorttermissions" },
    ],
  },
  {
    title: "Ministries",
    subMenu: [
      { name: "Youth", linkUrl: "youth" },
      { name: "Women", linkUrl: "women" },
      { name: "Children", linkUrl: "children" },
    ],
  },
  {
    title: "Events",
    subMenu: [
      { name: "Conferences", linkUrl: "conferences" },
      { name: "Seminars", linkUrl: "seminars" },
      { name: "Workshops", linkUrl: "workshops" },
    ],
  },
];

const TopNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <header className="fixed top-0 left-0 w-full shadow-md bg-white z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between flex-wrap bg-red">
        {/* Logo and Title */}
        <div className="flex items-center  space-x-4 ">
          <Image
            src="/home/intldisciples_logo.png"
            alt="International Disciples Mission Ministries"
            width={80}
            height={80}
            className="shadow-sm rounded-full"
          />
          <p className="text-sm md:text-lg font-semibold text-gray-800 max-w-xs md:max-w-none upper !important">
            International Disciples Mission Ministries & YWAM
          </p>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map(({ title, subMenu }) => (
            <div key={title} className="relative group">
              <div
                onClick={() => toggleDropdown(title)}
                className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 gap-x-2"
              >
                <span>{title}</span>
                <DropdownMenu subMenu={subMenu} />
              </div>
            </div>
          ))}
        </nav>

        {/* Donate Button */}
        <div className="hidden md:block">
          <Link href="/donate">
            <button className="bg-red-800 text-white px-4 py-2 rounded-md hover:bg-red-700 text-sm">
              Donate
            </button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          {navItems.map(({ title, subMenu }) => (
            <div key={title}>
              <button
                onClick={() => toggleDropdown(title)}
                className="flex justify-between items-center w-full text-left text-gray-700 font-medium"
              >
                {title}
                <FaChevronDown className="text-xs" />
              </button>
              {activeDropdown === title && (
                <ul className="mt-2 pl-4 space-y-1">
                  {subMenu.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={`/${item.linkUrl}`}
                        onClick={() => setMenuOpen(false)}
                        className="block text-sm text-gray-600 hover:text-blue-600"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <Link href="/donate">
            <button className="bg-red-800 w-full text-white py-2 rounded-md hover:bg-red-700 text-sm">
              Donate
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default TopNavBar;
