/* eslint-disable react/no-unescaped-entities */

// app/why-discipleship-important/page.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const WhyDiscipleshipImportant = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div>
      <div className="relative w-full h-[300px] sm:h-[350px] md:h-[300px] overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0.5 : 1 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-gray-300 z-10"
        />

        <Image
          src="/slides/slide1.jpg" // Replace with actual image path in /public
          alt="Fund Raising Initiatives"
          layout="fill"
          objectFit="cover"
          className="z-20"
          onLoadingComplete={() => setIsLoading(false)}
          priority
        />
      </div>
      <main className="max-w-4xl mx-auto px-4 py-15 text-gray-800">
        <h1 className="text-3xl font-bold text-[#802E2F] mb-8 text-center">
          Mission Fundraising Initiatives
        </h1>

        {/* Section 1 */}
        <section className="space-y-4 mb-10">
          <p>
            {" "}
            Fulfilling the Great Commission requires more than passion—it also
            requires provision. Our Mission Fundraising Initiatives are designed
            to support the work of evangelism, discipleship, and community
            transformation both locally and internationally. Every contribution
            fuels impact, opens doors, and brings the hope of Christ to those in
            need.
          </p>
          <h2 className="text-xl font-semibold text-[#802E2F]">
            It is a factor in church growth
          </h2>
          <p>
            Studies show that church growth is at stagnation or frightening
            levels in comparison to the fastest growing religion in the world —{" "}
            <strong>Islam</strong>.
          </p>
          <p>
            At inception, the Church grew at over <strong>40%</strong> rate, as
            compared to current rates at <strong>2.7%</strong>.
          </p>
          <p>
            The high growth rates at inception reveal the catalyst of this
            growth directly correlated to the strong discipleship in Jesus of
            the early Church.{" "}
            <em>They were first called Christians in Antioch</em>.
          </p>
          <blockquote className="bg-gray-100 border-l-4 border-[#802E2F] p-4 italic text-sm">
            Acts 11:26 — "It was there at Antioch that the believers were first
            called “Christians.”"
          </blockquote>
        </section>

        {/* Section 2 */}
        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold text-[#802E2F]">
            It's a factor in the diminished influence of the Church
          </h2>
          <p>
            The importance of this will be seen in the high quality of the
            character and societal well-being.
          </p>
          <p>
            Deficiency of discipleship is evident in moral decadence and slowed
            church growth momentum.
          </p>
          <p>
            A healthy body of Christ is a healthy society — discipleship makes
            all the difference.
          </p>
          <blockquote className="bg-gray-100 border-l-4 border-[#802E2F] p-4 italic text-sm">
            Proverbs 14:34 — Righteousness [moral and spiritual integrity and
            virtuous character] exalts a nation, but sin is a disgrace to any
            people.
          </blockquote>
        </section>

        {/* Image */}
        <div className="mt-10 flex justify-center">
          <Image
            src="/home/discipleship-impact.jpg" // Replace with your actual image path
            alt="Discipleship Impact"
            width={800}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </main>
    
    </div>
  );
};

export default WhyDiscipleshipImportant;
