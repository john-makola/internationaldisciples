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
          src="/whatwedo/whatwedo6.jpg" // Replace with your actual image
          alt="Prayer Ministry"
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
          Prayer Ministry
        </div>

        {/* Body */}
        <div className="mt-6 text-gray-800 space-y-4 leading-relaxed">
          <p>
            Prayer Ministry: <strong>Persistent Prayer and Spiritual Renewal</strong>
          </p>
          <p>
            Jesus taught the importance of persistent prayer, even in the face
            of discouragement or delay. Our prayer ministry exists to support
            spiritual growth and renewal through regular, fervent prayer.
          </p>

          {/* Scripture Block */}
          <div className="bg-gray-100 p-4 rounded-lg border-l-6 border-[#802E2F] text-sm">
            <p className="font-semibold mb-2">Luke 18:1 (KJV)</p>
            <p className="italic">
              "And he spake a parable unto them to this end, that men ought
              always to pray, and not to faint;"
            </p>
          </div>

          {/* Initiatives List */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Prayer Ministry Initiatives:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Establishing prayer centers:</strong> Providing space
                for solitude, spiritual reflection, and renewal.
              </li>
              <li>
                <strong>Encouraging a culture of prayer:</strong> Through
                intercessory gatherings, retreats, and prayer chains.
              </li>
            </ul>
          </div>
              </div>
              <div className="relative overflow-hidden shadow-lg">
          <AnimatedImage
            image="/galleries/seminars/seminar-prayer.jpg"
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
