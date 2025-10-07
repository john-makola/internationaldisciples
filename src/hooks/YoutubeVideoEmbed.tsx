"use client";

import React from "react";

interface YoutubeVideoEmbedProps {
  videoId: string;
  title?: string;
  description?: string;
}

const YoutubeVideoEmbed: React.FC<YoutubeVideoEmbedProps> = ({
  videoId,
  title,
  description,
}) => {
  return (
    <div className="w-full bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold text-[#386973]">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-gray-700 text-base md:text-lg">{description}</p>
        )}

        <div className="mx-auto w-full max-w-[560px]">
          <div className="relative w-full pt-[56.25%]">
            {" "}
            {/* 16:9 ratio */}
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideoEmbed;
