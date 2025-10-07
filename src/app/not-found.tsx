/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <section className="px-6 py-10 max-w-4xl mx-auto text-center">
        {/* Title */}
        <div className="inline-block bg-[#802E2F] text-white text-lg md:text-xl font-semibold px-6 py-2 rounded-2xl hover:bg-[#9a3a3b] transition-colors duration-300">
          Page Not Found
        </div>

        {/* Image */}
        <div className="w-full aspect-video mt-6 rounded-lg overflow-hidden shadow-md">
          <Image
            src="/images/seminar-youth.jpg" // make sure you have this image
            alt="Page not found"
            width={800}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="mt-6 space-y-4 text-gray-800">
          <p>
            Oops! The page you're looking for might have been removed, had its
            name changed, or is temporarily unavailable.
          </p>
          <p className="font-semibold">
            But don’t worry — you can always go back to the home page or explore
            other ministries.
          </p>

          <Link href="/" passHref>
            <div className="inline-block mt-4 bg-[#802E2F] text-white px-6 py-2 rounded-2xl hover:bg-[#9a3a3b] transition-colors duration-300 cursor-pointer">
              Back to Home
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
