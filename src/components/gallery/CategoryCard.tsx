"use client";

import Link from "next/link";
import Image from "next/image";

interface CategoryCardProps {
  id: string;
  title: string;
  image: string;
  description: string;
}

export default function CategoryCard({
  id,
  title,
  image,
  description,
}: CategoryCardProps) {
  return (
    <Link href={`/gallery/${id}`}>
      <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 cursor-pointer">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 text-center font-semibold text-lg">{title}</div>
        <div className="p-4 text-center  text-sm">{description}</div>
      </div>
    </Link>
  );
}
