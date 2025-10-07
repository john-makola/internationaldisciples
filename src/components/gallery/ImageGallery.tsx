"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

interface Props {
  images: string[];
}

export default function ImageGallery({ images }: Props) {
  const router = useRouter();

  const formattedImages = images.map((src) => ({
    original: src,
    thumbnail: src,
  }));

  return (
    <div className="space-y-6">
      <button
        onClick={() => router.push("/gallery")}
        className="px-4 py-2 bg-red-800 text-white rounded hover:bg-red-700 transition"
      >
        ← Back to Gallery
      </button>

      <ReactImageGallery items={formattedImages} />
    </div>
  );
}
