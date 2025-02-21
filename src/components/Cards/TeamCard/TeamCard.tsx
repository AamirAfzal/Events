import Image from "next/image";

interface Team {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
}

export default function TeamCard({ team }: { team: Team }) {
  return (
    <div className="flex flex-col sm:flex-row items-center bg-gray-50 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      {/* Image Section */}
      <div className="w-full sm:w-1/3">
        <Image
          src={team.image}
          alt={team.name}
          width={400}
          height={400}
          className="w-full h-auto sm:h-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="p-5 sm:w-2/3 text-center sm:text-left">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {team.name}
        </h3>
        <span className="text-gray-500 dark:text-gray-400 block mt-1">
          {team.role}
        </span>
        <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
          {team.description}
        </p>
      </div>
    </div>
  );
}
