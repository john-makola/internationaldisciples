import ImageGallery from "@/components/gallery/ImageGallery";
import galleryData from "@/data/galleryData.json";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return galleryData.map((cat) => ({ category: cat.id }));
}

export default async function GalleryDetail({ params }: Props) {
  const { category: categoryId } = await params; 

  const category = galleryData.find((item) => item.id === categoryId);
  if (!category) return notFound();

  return (
    <main className="px-6 py-10 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{category.title}</h1>
      <ImageGallery images={category.images} />
    </main>
  );
}
