import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden py-32"
      aria-label="Forge Fitness — Built to Perform. Designed to Last."
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85"
          alt="Forge Fitness main training floor"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Multi-layer overlay for depth without glassmorphism */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/30 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Eyebrow */}
        <p className="animate-forge-fade-in text-primary text-xs tracking-[0.35em] uppercase font-medium mb-8">
          New York City · Est. 2016
        </p>

        {/* Main heading */}
        <h1 className="animate-forge-slide-up delay-100 font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-wide uppercase leading-none mb-8">
          <span className="block">Built to</span>
          <span className="block text-primary">Perform.</span>
          <span className="block">Designed to</span>
          <span className="block text-primary">Last.</span>
        </h1>

        {/* Sub-copy */}
        <p className="animate-forge-fade-in delay-300 text-lg md:text-xl text-foreground/70 max-w-xl mx-auto mb-12 font-light leading-relaxed">
          A premium strength and performance facility for those who train with
          purpose.
        </p>

        {/* CTAs */}
        <div className="animate-forge-slide-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="px-10 h-14 text-sm tracking-widest">
            <Link href="/memberships">JOIN FORGE FITNESS</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="px-10 h-14 text-sm tracking-widest bg-transparent border-foreground/40 text-foreground hover:bg-foreground/10 hover:border-foreground"
          >
            <Link href="/programs">EXPLORE PROGRAMS</Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-xs text-foreground/40 tracking-[0.3em] uppercase">Scroll</span>
        <div className="animate-bounce-y">
          <svg
            className="w-5 h-5 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Bottom fade into page background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-[5]" />
    </section>
  );
}
