/* eslint-disable react/no-unescaped-entities */
"use client";
import YoutubeVideoEmbed from "@/hooks/YoutubeVideoEmbed";

import React from "react";

const BodyContent = () => {
  return (
    <div className="py-25 sm:py-2 md:py-[1.5rem]">
      <h1 className="text-3xl text-center font-bold text-[#386973] mb-6">
        Mission Fundraising Initiatives
      </h1>
      <p className="text-gray-700 mb-4">
        Fulfilling the Great Commission requires more than passion—it also
        requires provision. Our Mission Fundraising Initiatives are designed to
        support the work of evangelism, discipleship, and community
        transformation both locally and internationally. Every contribution
        fuels impact, opens doors, and brings the hope of Christ to those in
        need.
      </p>
      <h2 className="text-xl font-semibold text-[#386973] mb-2">
        Local Support Campaigns
      </h2>
      <p className="text-gray-700 mb-4">
        We believe that missions begin at home. Our local support campaigns
        raise funds to empower community outreach, discipleship programs, and
        social impact projects. Whether it's supporting a school in a rural area
        or equipping a local church for ministry, these campaigns ensure that
        the work of the Kingdom thrives right where we live and serve.
      </p>

      <h2 className="text-xl font-semibold text-[#386973] mb-2">
        International Outreach Fundraising
      </h2>
      <p className="text-gray-700 mb-4">
        Beyond our borders, the need is just as great. Our international
        outreach fundraising supports mission safaris, training seminars,
        medical outreaches, and infrastructure projects in underserved regions.
        From building classrooms to supporting mental health programs and
        entrepreneurship, your giving extends hope across continents.
      </p>

      <h2 className="text-xl font-semibold text-[#386973] mb-2">
        Partner With Us (Donations and Sponsorship)
      </h2>
      <p className="text-gray-700 mb-4">
        You can make a difference today. By partnering with us through one-time
        or recurring donations, or by sponsoring a specific mission or project,
        you become a vital part of God’s work. Whether as an individual, a
        church, or a business, your partnership helps us go further and reach
        more lives with the Gospel.Together, we can turn resources into revival.
        Join us in building, sending, and sustaining missions that bring glory
        to Jesus and transformation to the world.
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
