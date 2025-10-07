"use client";
import ConferenceEvents from "@/components/ConferenceEvents";
import YoutubeVideoEmbed from "@/hooks/YoutubeVideoEmbed";
import rawEvents from "@/data/conferences.json";

import React from "react";

const BodyContent = () => {
  return (
    <div className="py-1 ">
      <ConferenceEvents
        rawEvents={rawEvents}
        eventsTitle="Conference & Events"
      />
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
