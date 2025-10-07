'use client';

import React from 'react';

const highlights = [
  {
    title: 'Annual Discipleship Conference 2025',
    date: 'Oct 10–12, 2025',
    image: '/images/seminar-discernment.jpg',
  },
  {
    title: 'Youth Revival Workshop',
    date: 'Sep 5, 2025',
    image: '/images/workshop-media.jpg',
  },
];

const FeaturedSlider
 = () => {
  return (
    <div className="w-full overflow-x-auto whitespace-nowrap py-4">
      <div className="flex space-x-4">
        {highlights.map((event, index) => (
          <div
            key={index}
            className="min-w-[300px] h-[180px] bg-cover bg-center rounded-lg shadow-md text-white p-6 relative"
            style={{ backgroundImage: `url(${event.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
            <div className="relative z-10">
              <h3 className="text-lg font-semibold">{event.title}</h3>
              <p className="text-sm">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSlider
;
