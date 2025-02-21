"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import eventsData from "@/data/events.json";
import Link from "next/link";

// ✅ Define Event Type
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

export default function EventDetailPage() {
  const { id } = useParams();
  const [event, setEvent] = useState<Event | null>(null);

  useEffect(() => {
    if (id) {
      const foundEvent = eventsData.find((e) => e.id.toString() === id);
      setEvent(foundEvent || null);
    }
  }, [id]);

  if (!event) return <p className="text-center text-gray-500 text-lg">Event not found</p>;

  return (
    <div className="mb-16 max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-xl flex flex-col md:flex-row gap-8 mt-10">
      {/* ✅ Event Image */}
      <div className="w-full md:w-1/2">
        <Image
          src={event.image}
          alt={event.name}
          width={600}
          height={400}
          className="w-full h-auto rounded-lg object-cover shadow-md"
        />
      </div>

      {/* ✅ Event Details */}
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">{event.name}</h1>
        <p className="text-sm text-gray-500 uppercase tracking-wide">{event.category}</p>

        <div className="text-gray-700 space-y-2">
          <p><span className="font-semibold">🎤 Artist:</span> {event.artist}</p>
          <p><span className="font-semibold">📅 Date:</span> {event.date} at {event.time}</p>
          <p><span className="font-semibold">📍 Venue:</span> {event.venue}</p>
          <p className="text-gray-600">{event.description}</p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-blue-600">${event.ticket_price}</span>
          <Link
            href={`/events/${event.id}`}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            🎟 Buy Ticket
          </Link>
        </div>
      </div>
    </div>
  );
}
