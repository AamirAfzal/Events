"use client";
import Link from "next/link";
import Image from "next/image";

interface Event {
  id: number;
  name: string;
  category: string;
  artist: string;
  date: string;
  time: string;
  venue: string;
  image: string;
  description: string;
  ticket_price: number;
}

export default function EventCard({ event }: { event: Event }) {
  return (
    <div className="max-w-[400px] rounded-xl overflow-hidden shadow-lg border border-gray-300 bg-white transition hover:shadow-2xl hover:scale-[1.02]">
      <Image
        src={event.image}
        alt={event.name}
        width={400}
        height={400}
        className="w-full h-56 object-cover"
      />
      <div className="p-4 space-y-3">
        <h2 className="text-xl font-semibold uppercase text-gray-900 truncate">
          {event.name}
        </h2>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Artist:</span> {event.artist}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Category:</span> {event.category}
        </p>
        {/* <p className="text-sm text-gray-600">
          <span className="font-medium">Date:</span> {event.date} at {event.time}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Venue:</span> {event.venue}
        </p>
        <p className="text-gray-700 mt-2 text-sm line-clamp-3">
          {event.description}
        </p> */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-semibold text-blue-600">
            ${event.ticket_price}
          </span>
          <Link
            href={`/events/${event.id}`}
            className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
