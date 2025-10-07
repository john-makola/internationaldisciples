"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaGlobe, FaMobileAlt } from "react-icons/fa";
import { FaLandmarkDome } from "react-icons/fa6";

const Footer = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  return (
    <footer className="bg-[#386973] text-white pt-10 pb-4 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Section One: Logo */}
        <div className="flex flex-col items-center justify-center text-center space-y-2">
          <Image
            src="/home/intldisciples_logo.png"
            alt="International Disciples Mission Ministries"
            width={80}
            height={80}
            className="shadow-sm rounded-full"
          />
          <p className="text-sm md:text-lg font-semibold text-white-800 max-w-xs md:max-w-none uppercase">
            International Disciples Mission Ministries
          </p>
        </div>

        {/* Section Two: Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Homepage
              </Link>
            </li>
            <li>
              <Link href="/ourstory" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/boardmembers" className="hover:underline">
                Our Leadership
              </Link>
            </li>
            <li>
              <Link href="/why-discipleship-importants" className="hover:underline">
                Devotionals
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Section Three: What We Do */}
        <div>
          <h3 className="text-lg font-bold mb-4">What We Do</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/events" className="hover:underline">
                Our Events
              </Link>
            </li>
            <li>
              <Link href="/prayer-requests" className="hover:underline">
                Prayer Requests
              </Link>
            </li>
            <li>
              <Link href="/youth" className="hover:underline">
                Church Ministries
              </Link>
            </li>
            <li>
              <Link href="/why-discipleship-important" className="hover:underline">
                Devotionals
              </Link>
            </li>
            <li>
              <Link href="/conferences" className="hover:underline">
                Conferences
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:underline">
                Join Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Section Four: Website + Newsletter */}
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center space-x-3">
            <FaGlobe className="text-white text-xl" />
            <a
              href="https://www.internationaldisciples.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline hover:text-gray-300"
            >
              www.internationaldisciples.com
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-white text-xl" />
            <a
              href="https://www.internationaldisciples.com"
              // target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline hover:text-gray-300"
            >
              info@internationaldisciples.com
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <FaMobileAlt className="text-white text-xl" />
            <a
              href="https://www.internationaldisciples.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline hover:text-gray-300"
            >
              +254-110 916 470 | +254-735 644 705
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <FaLandmarkDome className="text-white text-xl" />
            <a
              href="https://www.internationaldisciples.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline hover:text-gray-300"
            >
              Lucky Summer Nairobi,Kenya
            </a>
          </div>

          {/* Newsletter */}
          <form
            // action="https://xxxxxx.usX.list-manage.com/subscribe/post?u=abc123&amp;id=def456"
            method="POST"
            // target="_blank"
            noValidate
            onSubmit={() => setFormStatus("success")}
            className="w-full mt-4"
          >
            <label className="block text-sm font-semibold mb-2">
              Subscribe to Newsletter
            </label>
            <div className="flex items-center border border-white/30 rounded overflow-hidden bg-white">
              <input
                type="email"
                name="EMAIL"
                placeholder="Your email"
                required
                className="w-full px-3 py-2 text-sm text-gray-800 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#386973] text-white px-4 py-2 text-sm font-semibold hover:bg-[#2c5660]"
              >
                <FaEnvelope />
              </button>
            </div>
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input type="text" name="b_abc123_def456" tabIndex={-1} />
            </div>
            <div className="mt-2 text-sm">
              {formStatus === "success" && (
                <p className="text-green-300">Thank you for subscribing!</p>
              )}
              {formStatus === "error" && (
                <p className="text-red-300">
                  Oops! Something went wrong. Try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm">
        © {new Date().getFullYear()} International Disciples Mission. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
