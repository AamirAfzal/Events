"use client";
import Image from "next/image";

interface Category {
    id: number;
    name: string;
    description: string;
    image: string;
  }

export default function CategoryCard ({ category }: { category: Category }) {
    return (
        <div className="text-center text-gray-500 dark:text-gray-400">
        <Image
                 src={category.image}
                 alt={category.name}
                 width={500}
                 height={300}
                 className="mx-auto mb-4 w-36 h-36 rounded-full border-2 bg-red-400"
                 objectFit="cover"
               />
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">{category.name}</a>
        </h3>
        <p>{category.description}</p>

      </div>
    )
}