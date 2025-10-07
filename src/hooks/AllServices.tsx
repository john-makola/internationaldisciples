"use client";

import Image from "next/image";
import { useState } from "react";

type Service = {
  image: string;
  title: string;
  description: string;
  category: string;
};

type AllServicesProps = {
  services: Service[];
  showFilters?: boolean;
};

const AllServices = ({ services, showFilters = true }: AllServicesProps) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Extract unique categories
  const categories = Array.from(
    new Set(["All", ...services.map((s) => s.category)])
  );

  // Filtered list based on category
  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section className="px-4 md:px-12 py-10 bg-gray-50">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-left">
        All Services
      </h2>

      {/* Filter Buttons */}
      {showFilters && (
        <div className="mb-6 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                activeCategory === category
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:border-blue-600 hover:text-blue-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredServices.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-[1.03] transition-transform duration-300"
          >
            {/* Image */}
            <Image
              src={service.image}
              alt={service.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllServices;
