import CategoryCard from "@/components/gallery/CategoryCard";
import galleryData from "@/data/galleryData.json";

export default function GalleryPage() {
  return (
    <main className="px-6 py-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Gallery Categories
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryData.map((category) => (
          <CategoryCard
            key={category.id}
            id={category.id}
            title={category.title}
            image={category.image}
            description={category.description}
          />
        ))}
      </div>
    </main>
  );
}
