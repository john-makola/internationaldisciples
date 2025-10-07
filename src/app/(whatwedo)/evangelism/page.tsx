/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedImage from "@/hooks/animatedimage";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {/* Banner Image */}
      <div className="relative w-full h-[300px] sm:h-[350px] md:h-[300px] overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0.5 : 1 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-gray-300 z-10"
        />

        <Image
          src="/whatwedo/whatwedo4.jpg" // Replace with an actual evangelism-related image in /public
          alt="Evangelism"
          layout="fill"
          objectFit="cover"
          className="z-20"
          onLoadingComplete={() => setIsLoading(false)}
          priority
        />
      </div>

      {/* Content Section */}
      <section className="px-6 py-10 max-w-4xl mx-auto">
        {/* Title */}
        <div className="inline-block bg-[#802E2F] text-white text-lg md:text-xl font-semibold px-6 py-2 rounded-2xl hover:bg-[#9a3a3b] transition-colors duration-300">
          Evangelism
        </div>

        {/* Body */}
        <div className="mt-6 text-gray-800 space-y-4 leading-relaxed">
          <p>
            Evangelism: <strong>Expanding God's Kingdom</strong>
          </p>
          <p>
            We are committed to expanding God's Kingdom through collaborative,
            interdenominational outreach programs and events. Our evangelism
            strategy includes a variety of initiatives aimed at reaching people
            from all walks of life.
          </p>

          {/* Scripture Block */}
          <div className="bg-gray-100 p-4 rounded-lg border-l-6 border-[#802E2F] text-sm">
            <p className="font-semibold mb-2">John 3:16 (NIV)</p>
            <p className="italic">
              "For God so loved the world that he gave his one and only Son,
              that whoever believes in him shall not perish but have eternal
              life."
            </p>
          </div>

          {/* Activities List */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">
              Evangelism Activities Include:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>One-on-one evangelism</li>
              <li>Street evangelism</li>
              <li>Mass evangelistic meetings</li>
              <li>Student outreach events</li>
              <li>Creative arts outreach programs</li>
              <li>Community empowerment projects</li>
              <li>Other context-appropriate outreach efforts</li>
            </ul>
          </div>
        </div>
        <div className="relative overflow-hidden shadow-lg">
          <AnimatedImage
            image="/images/youth/youth6.jpg"
            imgwidth={800}
            imgheight={450}
            imgalttext="Youth community service"
          />
         
        </div>
      </section>

      {/* Shared Component */}
    </div>
  );
}
