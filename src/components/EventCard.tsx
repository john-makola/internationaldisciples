import React from "react";
import { ConferenceEvent } from "@/types";
import Image from "next/image";

export interface EventCardProps {
  event: ConferenceEvent;
  isInterested: boolean;
  onToggleInterest: (id: number) => void;
  onOpenModal: () => void;
  onOpenRegister: () => void;
}

const EventCard: React.FC<EventCardProps> = ({
  event,
  isInterested,
  onToggleInterest,
  onOpenModal,
  onOpenRegister,
}) => {
  return (
    <div className="bg-white/70 backdrop-blur-md shadow-[rgba(0,0,0,0.35)_0px_5px_15px] rounded-xl overflow-hidden flex flex-col border border-gray-200">
      <Image
        src={event.image}
        alt={event.title}
        width={700}
        height={300}
        className="h-48 w-full object-cover"
      />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{event.date}</p>
        <p className="text-sm text-gray-700 flex-1">{event.description}</p>

        <div className="flex items-center justify-between mt-4">
          <label className="flex items-center gap-1 text-sm text-gray-600">
            <input
              type="checkbox"
              checked={isInterested}
              onChange={() => onToggleInterest(event.id)}
            />
            Interested
          </label>

          <div className="flex gap-2">
            <button
              onClick={onOpenModal}
              className="text-[#802E2F] text-sm font-semibold hover:underline"
            >
              View Details
            </button>

            <button
              onClick={onOpenRegister}
              className="bg-[#802E2F] text-white text-sm px-3 py-1 rounded hover:bg-[#a34142]"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
