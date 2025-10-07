/* eslint-disable react/no-unescaped-entities */
"use client";
import OurValues from "@/components/OurValues";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Page() {
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
      <section className="px-6 py-10 max-w-4xl mx-auto">
        {/* Title */}
        <div className="inline-block bg-[#802E2F] text-white text-lg md:text-xl font-semibold px-6 py-2 rounded-2xl hover:bg-[#9a3a3b] transition-colors duration-300">
          About Us
        </div>

        {/* Content */}
        <div className="mt-6 text-gray-800 space-y-4 leading-relaxed">
          <p>
            We are an association of believers from diverse denominational
            backgrounds, united with the purpose of restoring the glory of the
            body of Christ.
          </p>
          <p>
            Anyone that is a disciple of Jesus is welcome to join and partner
            with us in this call.
          </p>
          <p>
            This can only be achieved through obedience to the Church$'s primary
            mandate—the Great Commission to make disciples, as outlined in
            <strong>Matthew 28:19</strong>.
          </p>
          <p>
            The importance of this becomes vivid when confronted with this
            truth: <em>"you shall know them by their fruits"</em>
          </p>

          {/* Scripture Block */}
          <div className="bg-gray-100 p-4 rounded-lg border-l-6 border-[#802E2F] text-sm">
            <p className="font-semibold mb-2">
              Matthew 7:15–20 — New King James Version
            </p>
            <p className="italic">
              <strong>15</strong> “Beware of false prophets, who come to you in
              sheep's clothing, but inwardly they are ravenous wolves. <br />
              <strong>16</strong> You will know them by their fruits. Do men
              gather grapes from thornbushes or figs from thistles? <br />
              <strong>17</strong> Even so, every good tree bears good fruit, but
              a bad tree bears bad fruit. <br />
              <strong>18</strong> A good tree cannot bear bad fruit, nor can a
              bad tree bear good fruit. <br />
              <strong>19</strong> Every tree that does not bear good fruit is
              cut down and thrown into the fire. <br />
              <strong>20</strong> Therefore by their fruits you will know them.
            </p>
          </div>
        </div>
      </section>
      <OurValues />
    </div>
  );
}
