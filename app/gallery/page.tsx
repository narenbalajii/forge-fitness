import { SectionHeading } from "@/components/SectionHeading";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Take a look inside Forge Fitness — the facility, equipment, training floor, and community.",
};

// All gallery images with descriptive alt text and category labels
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1000&q=80",
    alt: "Forge Fitness main training floor",
    category: "Facility",
    span: "col-span-2 row-span-2", // Hero image
  },
  {
    src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80",
    alt: "Athlete performing barbell squat",
    category: "Strength",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80",
    alt: "Premium gym equipment and racks",
    category: "Equipment",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    alt: "Member performing functional training",
    category: "Training",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800&q=80",
    alt: "HIIT conditioning class in progress",
    category: "Classes",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1577221084712-45b0445d2b00?w=800&q=80",
    alt: "Forge Fitness locker room and recovery area",
    category: "Facility",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80",
    alt: "Coach working with a member one-on-one",
    category: "Coaching",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    alt: "Athlete performing deadlift",
    category: "Strength",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1485395578879-6c3ab3f3c1a3?w=800&q=80",
    alt: "Member working out with dumbbells",
    category: "Training",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80",
    alt: "Mobility and stretching session",
    category: "Recovery",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    alt: "Personal training session with coach",
    category: "Coaching",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1609207925812-4b5c4d4b1f73?w=800&q=80",
    alt: "Nutrition coaching consultation",
    category: "Coaching",
    span: "",
  },
];

// Uniform grid (excluding the hero featured image)
const uniformImages = galleryImages.slice(1);
const heroImage = galleryImages[0];

export default function GalleryPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-40 pb-24 bg-[#0a0a0a] border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary font-medium tracking-widest text-sm mb-4 uppercase">
            Inside Forge Fitness
          </p>
          <h1 className="font-heading text-5xl md:text-7xl mb-6">THE FACILITY</h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Premium equipment. Serious atmosphere. A space designed to help you
            perform at your best.
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="relative aspect-[21/9] overflow-hidden rounded-md">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="text-xs text-primary font-medium tracking-widest uppercase bg-black/50 px-3 py-1 rounded-sm">
                {heroImage.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <GalleryGrid images={uniformImages} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#111111] border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            title="SEE IT IN PERSON"
            subtitle="Book a free gym tour and meet the team. No commitment required."
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">BOOK A TOUR</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/memberships">VIEW MEMBERSHIPS</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
