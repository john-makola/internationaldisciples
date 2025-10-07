// components/CategoryCard.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CategoryProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const CategoryCard: React.FC<CategoryProps> = ({
  title,
  description,
  image,
  link,
}) => {
  const normalizedLink = `/${link.split("/").pop()}`;
  return (
    <Link href={normalizedLink}>
      <div className="cursor-pointer transform transition duration-300 hover:scale-105 rounded-xl shadow-lg overflow-hidden bg-white">
        <div className="relative w-full h-48">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-[#802E2F]">{title}</h3>
          <p className="text-sm text-gray-600 mt-2">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
