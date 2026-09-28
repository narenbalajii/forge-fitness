import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface GalleryPreviewProps {
  images: { src: string; alt: string }[];
}

export function GalleryPreview({ images }: GalleryPreviewProps) {
  return (
    <div className="space-y-6">
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative aspect-square overflow-hidden rounded-sm group cursor-pointer"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white/80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center pt-4">
        <Button variant="outline" asChild className="tracking-widest text-xs">
          <Link href="/gallery">VIEW FULL GALLERY</Link>
        </Button>
      </div>
    </div>
  );
}
