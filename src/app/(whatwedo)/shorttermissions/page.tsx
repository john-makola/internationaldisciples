/* eslint-disable react/no-unescaped-entities */
"use client";
import YoutubeVideoEmbed from "@/hooks/YoutubeVideoEmbed";
import Image from "next/image";
import React from "react";

const BodyContent = () => {
  return (
    <div className="py-25 sm:py-2 md:py-[1.5rem]">
      <h1 className="text-3xl text-center font-bold text-[#386973] mb-6">
        Social Empowerment Projects
      </h1>
      <p className="text-gray-700 mb-4">
        We believe that the Gospel is holistic—it transforms both hearts and
        communities. Our Social Empowerment Projects are grounded in the love of
        Christ and aim to restore dignity, hope, and opportunity to individuals
        and families. Through strategic, community-based initiatives, we bring
        practical solutions to real-world challenges while sharing the message
        of God's love.
      </p>
      <div className="w-full flex items-center justify-center">
        <Image
          src="/whatwedo/socialempowerment.jpg"
          alt="Ministry Visual 1"
          width={650}
          height={350}
          className="w-2/3 h-auto rounded-lg shadow-lg object-cover"
        />
      </div>
      <h2 className="text-xl font-semibold text-[#386973] mb-2">
        Education Support
      </h2>
      <p className="text-gray-700 mb-4">
        Classroom ConstructionAccess to quality education begins with a safe,
        functional learning environment. We partner with local communities to
        construct classrooms that provide space, structure, and stability for
        students to thrive.
      </p>

      <h2 className="text-xl font-semibold text-[#386973] mb-2">
        School Supplies & Literacy Programs
      </h2>
      <p className="text-gray-700 mb-4">
        Beyond buildings, we supply the tools for learning. Our literacy
        programs and school supply drives equip students with books, stationery,
        uniforms, and resources that enhance their academic journey and inspire
        lifelong learning.
      </p>

      <h2 className="text-xl font-semibold text-[#386973] mb-2">
        Community Development
      </h2>
      <p className="text-gray-700 mb-4">
        Kitchen & Clinic ProjectsHealthy communities need more than words—they
        need support systems. We help build and furnish community kitchens and
        clinics that provide meals, basic healthcare, and a safe gathering space
        for local residents.
      </p>

      <YoutubeVideoEmbed
        videoId="NQdVJ26nuzg"
        title="Watch Our Mission in Action"
        description="See how we're reaching nations and transforming lives through faith and service."
      />
    </div>
  );
};

const WhatWeDo = () => {
  return (
    <div>
      <BodyContent />
    </div>
  );
};

export default WhatWeDo;
