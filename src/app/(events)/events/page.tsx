// app/events/page.tsx or wherever your Events page is
import React from "react";
import CategoryCard from "@/components/events/CategoryCard";
import eventCategories from "@/data/eventCategories.json";
import FeaturedSlider from "@/components/events/FeaturedSlider";

const EventsPage = () => {
  return (
    <section className="px-6 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-[#802E2F]">
        All Year {new Date().getFullYear()} Events
      </h1>
      <FeaturedSlider />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {eventCategories.map((cat, idx) => (
          <CategoryCard
            key={idx}
            title={cat.title}
            description={cat.description}
            image={cat.image}
            link={cat.link}
          />
        ))}
      </div>
    </section>
  );
};

export default EventsPage;
