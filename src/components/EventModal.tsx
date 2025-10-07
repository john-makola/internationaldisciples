// components/EventModal.tsx

import React from "react";
import Image from "next/image";
import { ConferenceEvent } from "@/types";

interface Props {
  event: ConferenceEvent | null;
  onClose: () => void;
}

const EventModal: React.FC<Props> = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent">
      <div className="backdrop-blur-md bg-white/70 rounded-lg shadow-xl max-w-lg w-full p-6 relative border border-gray-200">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-xl font-bold text-[#802E2F] mb-4">{event.title}</h2>
        <Image
          src={event.image}
          alt={event.title}
          width={500}
          height={300}
          className="rounded mb-4"
        />
        <p className="text-sm text-gray-700 mb-2">
          <strong>Category:</strong> {event.category}
        </p>
        <p className="text-sm text-gray-700 mb-2">
          <strong>Date:</strong> {event.date}
        </p>
        <p className="text-sm text-gray-800">{event.description}</p>
      </div>
    </div>
  );
};

export default EventModal;
