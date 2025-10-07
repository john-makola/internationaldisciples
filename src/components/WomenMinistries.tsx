"use client";

import React from "react";
import Image from "next/image";

const WomenMinistries = () => {
  return (
    <div>
      <section className="px-6 py-10 max-w-4xl mx-auto">
        {/* Title */}
        <div className="inline-block bg-[#802E2F] text-white text-lg md:text-xl font-semibold px-6 py-2 rounded-2xl hover:bg-[#9a3a3b] transition-colors duration-300">
          Women Ministries
        </div>

        {/* Content */}
        <div className="mt-6 text-gray-800 space-y-6 leading-relaxed">
          <p>
            Women Ministries exists to awaken, affirm, and activate the unique calling of women
            within the Body of Christ. We are a movement of women from all walks of life and denominational backgrounds, rooted in one purpose: to reflect Christ and restore His glory in our homes, churches, and communities.
          </p>

          <div className="w-full aspect-video rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/event-deliverance.jpg"
              alt="Women praying together"
              width={800}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>

          <p>
            Our vision is shaped by the truth that every woman is created with divine purpose and
            potential. Through fellowship, discipleship, mentorship, and outreach, we cultivate
            spaces where women can grow spiritually, emotionally, and practically—anchored in the
            Word and empowered by the Spirit.
          </p>

        

          <p>
            As part of the Great Commission (<strong>Matthew 28:19</strong>), we are committed to
            raising women who are not only strong in faith but also fruitful in ministry—leading
            by example in love, service, and bold obedience to Christ.
          </p>

          <p>
            From prayer gatherings and community service to skill-building workshops and
            intergenerational mentorship, Women Ministries offers holistic development to equip
            women to influence the world for the Kingdom.
          </p>

          <div className="w-full aspect-video rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/event-women.jpg"
              alt="Women supporting community"
              width={800}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Scripture Block */}
          <div className="bg-gray-100 p-4 rounded-lg border-l-6 border-[#802E2F] text-sm">
            <p className="font-semibold mb-2">
              Proverbs 31:25–26 — New King James Version
            </p>
            <p className="italic">
              <strong>25</strong> Strength and honor are her clothing; She shall rejoice in time to come. <br />
              <strong>26</strong> She opens her mouth with wisdom, and on her tongue is the law of kindness.
            </p>
          </div>

          <p className="text-center font-bold text-[#802E2F] mt-8">
            Join us in raising a generation of women who carry His presence, walk in His power, and shine with His glory.
          </p>
        </div>
      </section>
    </div>
  );
};

export default WomenMinistries;
