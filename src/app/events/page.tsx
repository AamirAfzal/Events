"use client";
import dynamic from "next/dynamic";
import eventsData from "@/data/events.json";

const EventCard = dynamic(() => import("@/components/Cards/EventCard/EventCard"), {
  ssr: false, // Optional: Prevents server-side rendering if necessary
});

export default function EventsPage() {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4 text-center">Our Events</h2>
        <div
          className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 
      lg:grid-cols-3 xl:grid-cols-4 gap-40 xl:gap-x-20 xl:gap-y-10 mb-8"
        >
          {eventsData.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
