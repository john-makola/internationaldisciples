// components/FiltersBar.tsx

import React from "react";

interface Props {
  searchQuery: string;
  selectedCategory: string;
  sortOption: string;
  showInterestedOnly: boolean;
  categories: string[];
  sortOptions: string[];
  onSearchChange: (query: string) => void;
  onCategoryChange: (value: string) => void;
  onSortChange: (value: string) => void;
  onToggleInterested: () => void;
  onClearFilters: () => void;
}

const FiltersBar: React.FC<Props> = ({
  searchQuery,
  selectedCategory,
  sortOption,
  showInterestedOnly,
  categories,
  sortOptions,
  onSearchChange,
  onCategoryChange,
  onSortChange,
  onToggleInterested,
  onClearFilters,
}) => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="flex-1 border border-gray-300 rounded px-4 py-2"
        />
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full md:w-56 border border-gray-300 rounded px-4 py-2"
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
        <select
          value={sortOption}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full md:w-56 border border-gray-300 rounded px-4 py-2"
        >
          {sortOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="flex justify-between items-center mb-6">
        <label className="flex items-center space-x-2 text-sm">
          <input
            type="checkbox"
            checked={showInterestedOnly}
            onChange={onToggleInterested}
          />
          <span>Show Interested Only</span>
        </label>
        <button
          onClick={onClearFilters}
          className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-200 text-sm"
        >
          Clear Filters
        </button>
      </div>
    </>
  );
};

export default FiltersBar;
