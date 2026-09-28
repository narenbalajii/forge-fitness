import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ProgramCard } from "@/components/ProgramCard";
import { TrainerCard } from "@/components/TrainerCard";
import { MembershipCard } from "@/components/MembershipCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { GalleryPreview } from "@/components/GalleryPreview";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forge Fitness | Built to Perform. Designed to Last.",
  description:
    "Forge Fitness is a premium strength and performance gym in Midtown District, New York. Expert coaching, commercial equipment, and programs for every goal.",
};

/* ─── Data ─────────────────────────────────────────────────────────────── */

const programs = [
  {
    title: "Strength Training",
    description:
      "Build raw power through progressive overload, compound lifts, and expert programming. For all levels.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&q=80",
  },
  {
    title: "Functional Training",
    description:
      "Train movements, not just muscles. Improve athleticism, coordination and real-world strength.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80",
  },
  {
    title: "HIIT & Conditioning",
    description:
      "High-intensity intervals designed to maximize calorie burn, improve cardiovascular fitness and mental toughness.",
    image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=900&q=80",
  },
];

const trainers = [
  {
    name: "Marcus Reid",
    role: "Head of Strength & Conditioning",
    experience: "12 years experience · Former competitive powerlifter",
    quote:
      "Marcus brings elite-level programming thinking to every member, regardless of their starting point.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=700&q=80",
  },
  {
    name: "Priya Nair",
    role: "Functional Movement & Mobility Specialist",
    experience: "8 years experience · NSCA certified",
    quote:
      "Priya has an exceptional eye for movement quality and helps members move pain-free and perform better.",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=700&q=80",
  },
  {
    name: "Jake Thornton",
    role: "Performance & HIIT Coach",
    experience: "6 years experience · CrossFit L2 certified",
    quote:
      "Jake's sessions are demanding, structured, and results-driven. His members see measurable progress.",
    image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=700&q=80",
  },
];

const memberships = [
  {
    title: "STARTER",
    price: "$49",
    features: [
      "Full gym floor access",
      "Standard equipment access",
      "Locker room & changing facilities",
      "2 group classes per week",
    ],
    notIncluded: [
      "Unlimited group classes",
      "Personal training sessions",
    ],
  },
  {
    title: "PRO",
    price: "$89",
    isPopular: true,
    features: [
      "Everything in Starter",
      "Unlimited group classes",
      "1 PT session per month",
      "Nutrition guidance",
      "Towel service",
    ],
    notIncluded: [
      "Unlimited PT sessions",
      "Recovery suite",
    ],
  },
  {
    title: "ELITE",
    price: "$149",
    features: [
      "Everything in Pro",
      "Unlimited PT sessions",
      "Priority booking",
      "Recovery suite access",
      "Monthly body scan",
      "Dedicated locker",
    ],
  },
];

const testimonials = [
  {
    quote:
      "Forge Fitness changed how I think about training. In 6 months I've built more strength than in the previous 3 years combined.",
    author: "Daniel K.",
    since: "Member since 2023",
  },
  {
    quote:
      "The trainers here actually know their craft. Priya fixed movement issues I'd been dealing with for years in just a few sessions.",
    author: "Aisha M.",
    since: "Member since 2022",
  },
  {
    quote:
      "Worth every penny. The environment is serious, the equipment is premium, and the results speak for themselves.",
    author: "Tom R.",
    since: "Member since 2024",
  },
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", alt: "Forge Fitness main training floor" },
  { src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80", alt: "Premium gym equipment" },
  { src: "https://images.unsplash.com/photo-1577221084712-45b0445d2b00?w=800&q=80", alt: "Conditioning training area" },
  { src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80", alt: "One-on-one personal training session" },
  { src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80", alt: "Athlete performing deadlift" },
  { src: "https://images.unsplash.com/photo-1485395578879-6c3ab3f3c1a3?w=800&q=80", alt: "Dumbbell training" },
];

const whyForge = [
  {
    number: "01",
    title: "Expert Coaching",
    description:
      "Every trainer is certified, experienced, and invested in your outcome. No generics.",
  },
  {
    number: "02",
    title: "Premium Equipment",
    description:
      "Commercial-grade strength and conditioning equipment maintained to the highest standard.",
  },
  {
    number: "03",
    title: "Serious Environment",
    description:
      "An atmosphere built for focus. No distractions. Just training.",
  },
  {
    number: "04",
    title: "Proven Results",
    description:
      "Programs built on exercise science. Your progress is tracked, measured, and improved.",
  },
];

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Hero />

      {/* ── Intro ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-primary text-xs tracking-[0.3em] uppercase font-medium mb-6">
            Welcome to Forge Fitness
          </p>
          <h2 className="font-heading text-4xl md:text-5xl mb-6 leading-tight">
            We believe raw hard work and expert programming{" "}
            <span className="text-primary">produce elite results</span> at every level.
          </h2>
          <div className="h-px w-16 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground leading-relaxed">
            Forge Fitness is not a casual gym. It&apos;s a facility built for people who
            are serious about strength, performance, and consistent long-term progress.
            Expert coaches, commercial equipment, and no tolerance for mediocrity.
          </p>
        </div>
      </section>

      {/* ── Why Forge Fitness ─────────────────────────────────────────── */}
      <section className="py-24 bg-[#0d0d0d] border-y border-border">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="The Difference"
            title="WHY FORGE FITNESS"
            subtitle="We provide the tools, the space, and the expertise. You provide the effort."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {whyForge.map((prop) => (
              <div
                key={prop.number}
                className="p-8 bg-[#0d0d0d] hover:bg-[#141414] transition-colors duration-300"
              >
                <p className="font-heading text-4xl text-primary/20 mb-4 leading-none">
                  {prop.number}
                </p>
                <h3 className="font-heading text-xl mb-3">{prop.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Programs ─────────────────────────────────────────── */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="What We Offer"
            title="FEATURED PROGRAMS"
            subtitle="Structured training designed for specific goals. Expert-led and results-focused."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((prog) => (
              <ProgramCard key={prog.title} {...prog} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" asChild className="tracking-widest text-xs">
              <Link href="/programs">VIEW ALL PROGRAMS</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Featured Trainers ─────────────────────────────────────────── */}
      <section className="py-24 bg-[#0d0d0d] border-y border-border">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="The Coaching Team"
            title="EXPERT COACHES"
            subtitle="Learn from professionals who walk the walk."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trainers.map((trainer) => (
              <TrainerCard key={trainer.name} {...trainer} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" asChild className="tracking-widest text-xs">
              <Link href="/trainers">MEET THE FULL TEAM</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Membership Preview ────────────────────────────────────────── */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="Simple Pricing"
            title="MEMBERSHIPS"
            subtitle="No hidden fees. No confusing bundles. Three tiers for three types of member."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {memberships.map((plan) => (
              <MembershipCard key={plan.title} {...plan} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="ghost" asChild className="text-xs tracking-widest text-muted-foreground hover:text-foreground">
              <Link href="/memberships">SEE FULL PLAN DETAILS →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Gallery Preview ───────────────────────────────────────────── */}
      <section className="py-24 bg-[#0d0d0d] border-y border-border">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="Inside Forge Fitness"
            title="THE FACILITY"
            subtitle="Take a look inside. Premium equipment, serious atmosphere."
          />
          <GalleryPreview images={galleryImages} />
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="Member Results"
            title="WHAT MEMBERS SAY"
            subtitle="Don&apos;t just take our word for it."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.author} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────── */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#0d0d0d]" />
        {/* Gold accent lines */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <p className="text-primary text-xs tracking-[0.35em] uppercase font-medium mb-6">
            Start Today
          </p>
          <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl mb-6 uppercase leading-none">
            Ready to Forge
            <br />
            <span className="text-primary">Your Best Self?</span>
          </h2>
          <div className="h-px w-16 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Join the community of driven individuals transforming their physical and
            mental strength. No excuses. No shortcuts. Just results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="text-sm tracking-widest px-12 h-14"
            >
              <Link href="/memberships">START YOUR JOURNEY</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-sm tracking-widest px-12 h-14"
            >
              <Link href="/contact">BOOK A FREE TOUR</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
