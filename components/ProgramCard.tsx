import Image from "next/image";
import Link from "next/link";

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
}

export function ProgramCard({ title, description, image, href = "/programs" }: ProgramCardProps) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-sm border border-border bg-[#111111] hover:border-primary/40 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Dark overlay — lifts slightly on hover */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
        {/* Category tag */}
        <div className="absolute top-4 left-4">
          <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-primary bg-black/60 px-2.5 py-1">
            Program
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading text-2xl mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
        <div className="mt-4 flex items-center gap-2 text-primary text-xs font-medium tracking-widest uppercase">
          <span>Learn more</span>
          <svg
            className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
