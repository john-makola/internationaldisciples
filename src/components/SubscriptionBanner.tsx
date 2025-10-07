"use client";

import React from "react";

const SubscriptionBanner = () => {
  return (
    <div
      className="w-full bg-cover bg-center text-white py-16 px-6"
      style={{
        backgroundImage: `url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWRxNzFiaDAwY2JkY2FvYmpyZXltZTducWRqN2ppbXpkdzJmb213ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FKwdwwUkppqhO/giphy.gif')`,
      }}
    >
      <div className="bg-black/50 py-12 px-6 md:px-10 rounded-lg max-w-5xl mx-auto text-center space-y-6">
        <h2 className="text-2xl md:text-4xl font-bold">(Matthew 28:19 KJV)</h2>
        <p className="text-lg md:text-xl">
          Jesus Christ commands us to: “go therefore and make disciples of all
          nations...”
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="bg-[#e1ecee] px-4 py-3 w-full sm:w-96 text-black rounded-md focus:outline-none"
          />
          <button className="bg-[#386973] hover:bg-[#2e5a61] text-white px-6 py-3 rounded-md font-semibold transition duration-200">
            Subscribe to get the latest updates
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionBanner;
