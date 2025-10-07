"use client";
import YoutubeVideoEmbed from "@/hooks/YoutubeVideoEmbed";

import React from "react";

const BodyContent = () => {
  return (
    <div className="py-25 sm:py-2 md:py-[1.5rem]">
      <h1 className="text-3xl text-center font-bold text-[#386973] mb-6">
        Empowering Disciples
      </h1>
      <p>
        At the core of our mission is the belief that every disciple of Jesus is
        uniquely gifted and called to serve. Empowering disciples is not just a
        program—it’s a lifestyle of unlocking God-given potential and releasing
        it for Kingdom impact both locally and globally.
      </p>
      <h2 className="text-xl font-semibold text-[#386973] mb-2">
        Discovering and Expressing Spiritual Gifts
      </h2>
      <p className="text-gray-700 mb-4">
        We are committed to walking alongside believers as they discover their
        spiritual gifts and step into the fullness of their calling. Through
        teachings, prayer, and practical ministry involvement, we help
        individuals recognize the unique ways God has wired them to serve.
        Whether teaching, encouraging, leading, or serving, every gift has a
        place in building up the body of Christ.
      </p>

      <h2 className="text-xl font-semibold text-[#386973] mb-2">
        Local and International Opportunities
      </h2>
      <p className="text-gray-700 mb-4">
        Discipleship must go beyond the church walls. That’s why we provide
        opportunities for believers to engage in outreach and mission—both in
        their local communities and across borders. From neighborhood evangelism
        to global mission safaris, our platforms allow disciples to put their
        faith into action and be the hands and feet of Jesus in diverse
        contexts.
      </p>

      <h2 className="text-xl font-semibold text-[#386973] mb-2">
        Mentorship and Leadership Development
      </h2>
      <p className="text-gray-700 mb-4">
        Growth happens in relationship. We prioritize mentorship as a key tool
        for spiritual formation and leadership development. Through one-on-one
        discipleship, group training sessions, and leadership workshops, we
        nurture character, competence, and commitment. Our goal is to raise
        leaders who serve with humility, wisdom, and boldness.
      </p>

      <p className="text-gray-700 mb-4">
        This is a call to rise—to take your place in the body of Christ and make
        a difference. Empowered by the Holy Spirit and rooted in truth, we
        believe you are called for such a time as this. Let us walk with you as
        you grow, serve, and shine for His glory.
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
