import styles from './Team.module.css';
import dynamic from "next/dynamic";
import teamData from "@/data/founders.json";

const TeamCard = dynamic(
  () => import("@/components/Cards/TeamCard/TeamCard"),
  {
    ssr: false, // Optional: Prevents server-side rendering if necessary
  }
);

export default function TeamSection() {
  return (
    <section className={`${styles.team} dark:bg-gray-900`}>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            Our Team
          </h2>
          <p className="font-light text-yellow-50 lg:mb-16 sm:text-xl">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                      {/* Team Member Card */}
          {teamData.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
}
