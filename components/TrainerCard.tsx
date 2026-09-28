import Image from "next/image";
import Link from "next/link";

interface TrainerCardProps {
  name: string;
  role: string;
  experience: string;
  quote: string;
  image: string;
}

export function TrainerCard({ name, role, experience, quote, image }: TrainerCardProps) {
  return (
    <div className="group overflow-hidden rounded-sm border border-border bg-[#111111] hover:border-primary/30 transition-colors duration-300">
      {/* Photo */}
      <div className="relative h-72 w-full overflow-hidden">
        <Image
          src={image}
          alt={`${name} — ${role}`}
          fill
          className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-heading text-2xl leading-none mb-1">{name}</h3>
          <p className="text-primary text-xs font-medium tracking-widest uppercase">{role}</p>
          <p className="text-muted-foreground text-xs mt-1">{experience}</p>
        </div>

        <blockquote className="border-l-2 border-primary/50 pl-4 text-sm text-muted-foreground italic leading-relaxed">
          &ldquo;{quote}&rdquo;
        </blockquote>

        <Link
          href="/trainers"
          className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-primary hover:text-accent transition-colors duration-200"
        >
          <span>Full profile</span>
          <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
