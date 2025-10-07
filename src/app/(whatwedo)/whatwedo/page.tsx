"use client";
import YoutubeVideoEmbed from "@/hooks/YoutubeVideoEmbed";

import React from "react";

const BodyContent = () => {
  return (
    <div className="py-25 sm:py-2 md:py-[1.5rem]">
      <h1 className="text-3xl text-center font-bold text-[#386973] mb-6">
        What We Do
      </h1>

      <h2 className="text-xl font-semibold text-[#386973] mb-2">
        Empowering Disciples
      </h2>
      <p className="text-gray-700 mb-4">
        At the heart of our ministry is a burning desire to see disciples of
        Jesus not only grow in faith but also rise in purpose. We believe that
        every believer has been uniquely gifted by the Spirit, and it is our
        calling to create opportunities for those gifts to be expressed—whether
        within their local communities or across borders.
      </p>

      <h2 className="text-xl font-semibold text-[#386973] mb-2">
        Agents of Transformation
      </h2>
      <p className="text-gray-700 mb-4">
        Through intentional empowerment, we raise disciples who become agents of
        transformation in families, churches, and nations. We are committed to
        equipping them to walk in their calling and impact lives wherever they
        go.
      </p>

      <h2 className="text-xl font-semibold text-[#386973] mb-2">
        Mission Fundraising Initiatives
      </h2>
      <p className="text-gray-700 mb-4">
        Our fundraising efforts are not just about resources—they are about
        releasing vision. Every program we support fuels mission initiatives
        both at home and abroad, ensuring that the message of the Gospel is
        carried with power and compassion.
      </p>

      <h2 className="text-xl font-semibold text-[#386973] mb-2">
        Mission Safari Programs
      </h2>
      <p className="text-gray-700 mb-4">
        Through our short-term Mission Safari ministries, we partner with the
        broader body of Christ in targeted regions. These safaris involve
        evangelism and discipleship efforts that strengthen local believers and
        reach the unreached.
      </p>
      <p className="text-gray-700 mb-4">
        From hosting ministry training seminars and leadership workshops to
        facilitating impactful conferences, we equip the Church to stand firm in
        truth and love.
      </p>

      <h2 className="text-xl font-semibold text-[#386973] mb-2">
        Social Empowerment Projects
      </h2>
      <p className="text-gray-700 mb-4">
        Our mission doesn’t stop with preaching—we believe in holistic impact.
        That’s why we support projects that build classrooms, kitchens, and
        clinics to meet both spiritual and physical needs.
      </p>
      <p className="text-gray-700 mb-4">
        We stand with communities battling mental health and addiction
        challenges, offering programs rooted in faith and healing. We also run
        nutrition and entrepreneurship trainings to break cycles of poverty.
      </p>
      <p className="text-gray-700 mb-6">
        We invest in the next generation through children and youth empowerment
        initiatives. Every mission is a seed sown in love, every project a
        testimony of Christ’s kingdom coming—on earth as it is in heaven.
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
