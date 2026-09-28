import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

// Used on all program images — full width on mobile, ~50% on desktop
const IMG_SIZES = "(max-width: 1024px) 100vw, 50vw";


export const metadata: Metadata = {
  title: "Training Programs",
  description:
    "Explore Forge Fitness training programs — Strength, Functional Training, HIIT, Personal Training, Mobility & Recovery, and Weight Management.",
};

const programs = [
  {
    title: "Strength Training",
    slug: "strength-training",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&q=80",
    tagline: "Build Raw Power",
    description:
      "Our Strength Training program is built around progressive overload, compound movements, and expert programming. Whether you're lifting for the first time or returning to the platform after years away, our coaches build you a program that grows with you.",
    whoFor: "All levels — beginners through experienced lifters.",
    benefits: [
      "Increase muscle mass and overall body strength",
      "Improve bone density and metabolic health",
      "Build a foundation for all other physical activities",
      "Develop discipline, consistency, and real measurable results",
    ],
  },
  {
    title: "Functional Training",
    slug: "functional-training",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80",
    tagline: "Train Movements, Not Muscles",
    description:
      "Functional Training at Forge Fitness focuses on movement quality — training your body to perform better in real life. Using kettlebells, medicine balls, bodyweight, and specialist equipment, you'll improve coordination, stability, and real-world strength.",
    whoFor: "Anyone who wants to move better, reduce injury risk, and build athletic capacity.",
    benefits: [
      "Improve coordination and body control",
      "Reduce chronic pain and injury risk",
      "Build athleticism that transfers to sport and daily life",
      "Develop core stability and balanced muscular development",
    ],
  },
  {
    title: "HIIT & Conditioning",
    slug: "hiit-conditioning",
    image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=900&q=80",
    tagline: "Push Your Limits",
    description:
      "High-intensity interval training structured for maximum output. These sessions are demanding by design — short, hard, and effective. You'll push cardiovascular limits, burn serious calories, and develop mental toughness you'll carry into every other area of your life.",
    whoFor: "Members comfortable with moderate fitness who want to push performance and endurance.",
    benefits: [
      "Maximise calorie burn during and after sessions",
      "Dramatically improve cardiovascular endurance",
      "Develop mental toughness and discipline under pressure",
      "Short, time-efficient workouts with serious results",
    ],
  },
  {
    title: "Personal Training",
    slug: "personal-training",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&q=80",
    tagline: "Your Goals. Your Program.",
    description:
      "One-on-one coaching is the most direct route to results. Your Forge Fitness personal trainer begins with a full movement and goal assessment, designs your program specifically around your body and your targets, and checks in with you every week to adjust and advance.",
    whoFor: "Anyone who wants a fully personalised experience and maximum coach attention.",
    benefits: [
      "Full movement and lifestyle assessment at intake",
      "Custom programming reviewed and updated weekly",
      "Undivided coach attention every session",
      "Fastest path to your specific goal",
    ],
  },
  {
    title: "Mobility & Recovery",
    slug: "mobility-recovery",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=900&q=80",
    tagline: "Move Better. Last Longer.",
    description:
      "Recovery is not optional — it's training. Our Mobility & Recovery program uses targeted stretching protocols, soft tissue work, and controlled breathing techniques to restore range of motion, reduce soreness, and keep you performing session after session.",
    whoFor: "All members — especially those with nagging tightness, previous injuries, or high training volume.",
    benefits: [
      "Restore and improve joint range of motion",
      "Reduce chronic tightness and muscular imbalances",
      "Accelerate recovery between hard sessions",
      "Develop body awareness and movement quality",
    ],
  },
  {
    title: "Weight Management",
    slug: "weight-management",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&q=80",
    tagline: "Science-Backed. Sustainable.",
    description:
      "Forge Fitness takes a sustainable, science-backed approach to weight management. No crash diets. No unsustainable protocols. We combine evidence-based nutrition guidance with appropriate training programming to help you reach and maintain your target body composition.",
    whoFor: "Members looking to lose body fat, improve body composition, or build healthy long-term habits.",
    benefits: [
      "Evidence-based nutrition framework and guidance",
      "Training protocol matched to your composition goals",
      "Regular body composition tracking and adjustment",
      "Long-term sustainable approach — not a crash protocol",
    ],
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-40 pb-24 bg-[#0a0a0a] border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary font-medium tracking-widest text-sm mb-4 uppercase">
            What We Offer
          </p>
          <h1 className="font-heading text-5xl md:text-7xl mb-6">
            TRAINING PROGRAMS
          </h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Structured, expert-led programs designed for every goal. Choose your
            path and train with intent.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {programs.map((program, i) => (
              <div
                key={program.slug}
                className={`flex flex-col ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                      sizes={IMG_SIZES}
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <p className="text-primary text-sm font-medium tracking-widest uppercase">
                    {program.tagline}
                  </p>
                  <h2 className="font-heading text-4xl md:text-5xl">
                    {program.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>

                  <div>
                    <p className="text-sm font-medium mb-1 text-foreground">
                      Who it&apos;s for:
                    </p>
                    <p className="text-muted-foreground text-sm">{program.whoFor}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-3 text-foreground">
                      Key Benefits:
                    </p>
                    <ul className="space-y-2">
                      {program.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <svg
                            className="w-4 h-4 text-primary shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild size="lg">
                    <Link href="/contact">ENQUIRE ABOUT THIS PROGRAM</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#111111] border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            title="NOT SURE WHERE TO START?"
            subtitle="Our coaches will assess your goals and recommend the right program for you. Book a free consultation."
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">BOOK A FREE CONSULTATION</Link>
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
