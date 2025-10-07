"use client";
import ConferenceEvents from "@/components/ConferenceEvents";
import YoutubeVideoEmbed from "@/hooks/YoutubeVideoEmbed";
import rawEvents from "@/data/seminars.json";

import React from "react";

const BodyContent = () => {
  return (
    <div className="py-1">
      <ConferenceEvents rawEvents={rawEvents} eventsTitle="Seminars 2025" />
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
