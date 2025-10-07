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
          src="/whatwedo/whatwedo5.jpg" // Replace with your actual image
          alt="Social Empowerment"
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
          Social Empowerment
        </div>

        {/* Body */}
        <div className="mt-6 text-gray-800 space-y-4 leading-relaxed">
          <p>
            Social Empowerment: <strong>Community Transformation</strong>
          </p>
          <p>
            It is not enough to simply preach the Gospel. Where possible, we
            also minister to felt needs by initiating development projects that
            enhance the social welfare of communities. These efforts focus on
            building justifiable, self-sustaining empowerment projects to
            support long-term transformation.
          </p>

          {/* Scripture Block */}
          <div className="bg-gray-100 p-4 rounded-lg border-l-6 border-[#802E2F] text-sm">
            <p className="font-semibold mb-2">Mark 6:37 (NIV)</p>
            <p className="italic">
              "But he answered, 'You give them something to eat.' They said to
              him, 'That would take more than half a year's wages! Are we to go
              and spend that much on bread and give it to them to eat?'"
            </p>
          </div>

          {/* Initiatives List */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">
              Key Community Empowerment Initiatives:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Farming Programs:</strong> Establishing and operating
                educational and income-generating farming activities aimed at
                improving food security.
              </li>
              <li>
                <strong>Entrepreneurship Programs:</strong> Launching business
                and vocational training initiatives to address unemployment and
                promote wealth creation.
              </li>
              <li>
                <strong>Health & Nutrition Programs:</strong> Offering
                counseling and rehabilitation services for individuals
                struggling with substance abuse, along with promoting health
                through proper dietary knowledge and practices.
              </li>
              <li>
                <strong>Orphan Support Programs:</strong> Supporting orphans
                through education, basic living necessities, and, where
                possible, the establishment and operation of orphanage homes.
              </li>
            </ul>
          </div>
        </div>
        <div className="relative overflow-hidden shadow-lg">
          <AnimatedImage
            image="/images/projects/project2.jpg"
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
