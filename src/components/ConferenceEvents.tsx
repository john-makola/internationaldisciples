"use client";

import React, { useEffect, useState } from "react";
import { ConferenceEvent } from "@/types";
import EventCard from "@/components/EventCard";
import EventModal from "@/components/EventModal";
import FiltersBar from "@/components/FiltersBar";
import RegisterModal from "@/components/RegisterModal";

interface ConferenceEventsProps {
  rawEvents: ConferenceEvent[];
  eventsTitle: string;
}

const sortOptions = ["Date (Upcoming)", "Title (A–Z)"];

const ConferenceEvents: React.FC<ConferenceEventsProps> = ({
  rawEvents,
  eventsTitle,
}) => {
  const events: ConferenceEvent[] = rawEvents;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("Date (Upcoming)");
  const [interestedIds, setInterestedIds] = useState<number[]>([]);
  const [showInterestedOnly, setShowInterestedOnly] = useState(false);
  const [modalEvent, setModalEvent] = useState<ConferenceEvent | null>(null);
  const [registerEvent, setRegisterEvent] = useState<ConferenceEvent | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;

  useEffect(() => {
    const saved = localStorage.getItem("interestedEvents");
    if (saved) setInterestedIds(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("interestedEvents", JSON.stringify(interestedIds));
  }, [interestedIds]);

  const toggleInterest = (id: number) => {
    setInterestedIds((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSortOption("Date (Upcoming)");
    setShowInterestedOnly(false);
  };

  const categories = [
    "All",
    ...Array.from(new Set(events.map((e) => e.category))),
  ];

  const filteredEvents = events
    .filter((event) => {
      const query = searchQuery.toLowerCase();
      const matchesCategory =
        selectedCategory === "All" || event.category === selectedCategory;
      const matchesQuery =
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.date.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query);
      const isInterested =
        !showInterestedOnly || interestedIds.includes(event.id);
      return matchesCategory && matchesQuery && isInterested;
    })
    .sort((a, b) => {
      if (sortOption === "Title (A–Z)") {
        return a.title.localeCompare(b.title);
      } else {
        return Date.parse(a.date) - Date.parse(b.date);
      }
    });

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage
  );

  return (
    <section className="px-6 py-10 max-w-6xl mx-auto">
      <div className="inline-block bg-[#802E2F] text-white text-lg md:text-xl font-semibold px-6 py-2 rounded-2xl mb-6">
        {eventsTitle}
      </div>

      {/* Filters */}
      <FiltersBar
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        sortOption={sortOption}
        showInterestedOnly={showInterestedOnly}
        categories={categories}
        sortOptions={sortOptions}
        onSearchChange={setSearchQuery}
        onCategoryChange={setSelectedCategory}
        onSortChange={setSortOption}
        onToggleInterested={() => setShowInterestedOnly(!showInterestedOnly)}
        onClearFilters={clearFilters}
      />

      {/* Event Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {paginatedEvents.length > 0 ? (
          paginatedEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              isInterested={interestedIds.includes(event.id)}
              onToggleInterest={toggleInterest}
              onOpenModal={() => setModalEvent(event)}
              onOpenRegister={() => setRegisterEvent(event)}
            />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No events found.
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1.5 rounded border text-sm ${
                page === currentPage
                  ? "bg-[#802E2F] text-white"
                  : "bg-white border-gray-300"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}

      {/* Modals */}
      <EventModal event={modalEvent} onClose={() => setModalEvent(null)} />
      <RegisterModal
        event={registerEvent}
        onClose={() => setRegisterEvent(null)}
      />
    </section>
  );
};

export default ConferenceEvents;
