import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Trainers",
  description:
    "Meet the Forge Fitness coaching team — certified, experienced, and dedicated to your results.",
};

const trainers = [
  {
    name: "Marcus Reid",
    role: "Head of Strength & Conditioning",
    experience: "12 years experience",
    certifications: ["NSCA-CSCS", "IPF Technical Official", "Former IPF Competitor"],
    specializations: ["Powerlifting", "Strength Programming", "Athletic Performance"],
    bio: "Marcus spent a decade competing at national level in powerlifting before turning his full focus to coaching. He has worked with everyone from first-time gym-goers to professional athletes, applying the same rigorous thinking to every client's program. His philosophy is simple: progressive overload, consistency, and patience produce elite results at every level.",
    quote: "Strength isn't built in a single session. It's built in the hundreds of sessions you show up for when it feels inconvenient.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=700&q=80",
  },
  {
    name: "Priya Nair",
    role: "Functional Movement & Mobility Specialist",
    experience: "8 years experience",
    certifications: ["NSCA-CPT", "FMS Level 2", "Precision Nutrition Level 1"],
    specializations: ["Functional Movement", "Injury Rehabilitation", "Mobility Coaching"],
    bio: "Priya came to coaching through her own experience with a knee injury that her previous gym's approach couldn't solve. Learning to move properly changed everything for her — and she's dedicated her career to teaching that same skill to others. With an exceptional eye for movement quality, Priya identifies compensations and imbalances that others miss, then builds programs that address root causes rather than symptoms.",
    quote: "Most people aren't weak. They just haven't learned how to use their body properly yet.",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=700&q=80",
  },
  {
    name: "Jake Thornton",
    role: "Performance & HIIT Coach",
    experience: "6 years experience",
    certifications: ["CrossFit Level 2 Trainer", "ACSM-CPT", "TRX Certified"],
    specializations: ["High-Intensity Training", "Athletic Conditioning", "Group Coaching"],
    bio: "Jake's sessions are structured, demanding, and built around measurable progress. He coaches with clarity and directness — you'll always know exactly what you're doing and why. His approach to conditioning is grounded in sports science, not random intensity for its own sake. Members who train with Jake consistently achieve visible improvements in endurance, work capacity, and physical resilience within the first eight weeks.",
    quote: "Hard training done intelligently. That's the entire formula.",
    image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=700&q=80",
  },
  {
    name: "Sofia Andrade",
    role: "Nutrition & Weight Management Coach",
    experience: "5 years experience",
    certifications: ["Precision Nutrition Level 2", "ACE-CPT", "ISAK Level 1 Anthropometrist"],
    specializations: ["Nutrition Coaching", "Body Composition", "Sustainable Fat Loss"],
    bio: "Sofia bridges the gap between training and nutrition — the area where most people get stuck. She works alongside the training team to build members a complete picture of their health, addressing not just what they eat but how their habits, sleep, and stress affect their results. Her style is supportive and practical, focused on sustainable change rather than unsustainable restriction.",
    quote: "You can't out-train a bad diet, and you can't starve yourself to health. Balance is the only sustainable answer.",
    image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=700&q=80",
  },
];

export default function TrainersPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-40 pb-24 bg-[#0a0a0a] border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary font-medium tracking-widest text-sm mb-4 uppercase">
            The Coaching Team
          </p>
          <h1 className="font-heading text-5xl md:text-7xl mb-6">
            EXPERT COACHES
          </h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Every Forge Fitness trainer is certified, experienced, and genuinely
            invested in your progress. No generics. No egos. Just results.
          </p>
        </div>
      </section>

      {/* Trainers */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {trainers.map((trainer, i) => (
              <div
                key={trainer.name}
                className={`flex flex-col ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-16 items-start`}
              >
                {/* Photo */}
                <div className="w-full lg:w-2/5">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-md">
                    <Image
                      src={trainer.image}
                      alt={trainer.name}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <p className="font-heading text-2xl">{trainer.name}</p>
                      <p className="text-primary text-sm">{trainer.role}</p>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="w-full lg:w-3/5 space-y-8 lg:pt-8">
                  <div>
                    <h2 className="font-heading text-4xl mb-1">{trainer.name}</h2>
                    <p className="text-primary font-medium mb-1">{trainer.role}</p>
                    <p className="text-muted-foreground text-sm">{trainer.experience}</p>
                  </div>

                  <blockquote className="border-l-2 border-primary pl-6 italic text-xl text-foreground/80 leading-relaxed">
                    &ldquo;{trainer.quote}&rdquo;
                  </blockquote>

                  <p className="text-muted-foreground leading-relaxed">{trainer.bio}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <p className="text-sm font-medium mb-3 text-foreground">Specializations</p>
                      <ul className="space-y-1">
                        {trainer.specializations.map((s) => (
                          <li key={s} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-primary inline-block" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-3 text-foreground">Certifications</p>
                      <ul className="space-y-1">
                        {trainer.certifications.map((c) => (
                          <li key={c} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-primary inline-block" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button asChild>
                    <Link href="/contact">TRAIN WITH {trainer.name.split(" ")[0].toUpperCase()}</Link>
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
            title="FIND YOUR COACH"
            subtitle="Not sure which trainer is right for you? Contact us and we'll match you based on your goals."
          />
          <Button size="lg" asChild>
            <Link href="/contact">CONTACT US TODAY</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
