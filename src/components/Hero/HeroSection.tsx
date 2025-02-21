import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="p-12">
      <div className="relative w-full h-[800px]">
        {/* Hero Image */}
        <Image
          src="/images/hero.png"
          alt="logo"
          layout="fill"
          objectFit="cover"
          className= "absolute inset-0 w-full h-full rounded-lg shadow-lg"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-4xl font-bold mb-4">
            Experience the Best Events in Town!
          </h1>
          <p className="text-lg mb-6 max-w-2xl">
            Discover and attend the most exciting concerts, workshops, and
            community gatherings.
          </p>
          <button className="bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            <Link href="/events">Explore Events</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
