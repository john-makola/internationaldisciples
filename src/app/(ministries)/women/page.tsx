"use client";
import WomenMinistries from "@/components/WomenMinistries";
import YoutubeVideoEmbed from "@/hooks/YoutubeVideoEmbed";

import React from "react";

const BodyContent = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 ">
      <WomenMinistries />

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
