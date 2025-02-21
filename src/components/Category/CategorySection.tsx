"use client";
import dynamic from "next/dynamic";
import categoriesData from "@/data/categories.json";

const CategoryCard = dynamic(
  () => import("@/components/Cards/CategoryCard/CategoryCard"),
  {
    ssr: false, // Optional: Prevents server-side rendering if necessary
  }
);

export default function CategorySection() {
  return (
    <section className="bg-sky-100 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Music
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categoriesData.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
