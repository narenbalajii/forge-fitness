import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The Forge Fitness story — who we are, what we believe, and why serious training people choose us.",
};

const values = [
  {
    title: "Intentional Programming",
    description:
      "Every program at Forge Fitness is built around a reason. We don't program randomly or follow trends. We follow what the evidence says works and adjust based on your actual results.",
  },
  {
    title: "Honest Coaching",
    description:
      "We tell our members the truth — even when it's not what they want to hear. Real progress requires honest feedback. Our coaches are direct, respectful, and invested in your long-term development.",
  },
  {
    title: "An Environment That Demands Effort",
    description:
      "The atmosphere at Forge Fitness is not casual. It is focused, professional, and serious. Members come here to work. That energy is by design, and it makes a measurable difference to results.",
  },
  {
    title: "Long-Term Thinking",
    description:
      "We are not interested in quick fixes or 6-week challenges. We build training habits, movement skills, and health foundations that last decades. The members who stay with us do so because they see what long-term consistency actually produces.",
  },
];

const stats = [
  { value: "2,400+", label: "Active Members" },
  { value: "12+", label: "Expert Coaches" },
  { value: "8", label: "Years Operating" },
  { value: "94%", label: "Member Retention Rate" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-40 pb-0 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 text-center pb-16 border-b border-border">
          <p className="text-primary font-medium tracking-widest text-sm mb-4 uppercase">
            Our Story
          </p>
          <h1 className="font-heading text-5xl md:text-7xl mb-6">ABOUT FORGE FITNESS</h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Built from a belief that serious training deserves a serious environment.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                <Image
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1000&q=80"
                  alt="Forge Fitness training floor"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="font-heading text-4xl md:text-5xl">
                WHERE IT STARTED
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Forge Fitness was founded in 2016 by two competitive athletes who
                were frustrated with what the fitness industry had become — bloated
                class timetables, low-quality coaching, and gyms that prioritised
                aesthetics over function.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                They opened the first Forge Fitness location on Iron Lane in Midtown
                with 12 members, four squat racks, and one simple principle: train
                people properly, charge a fair price, and tell the truth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Eight years later, Forge Fitness serves over 2,400 active members
                across our full-service facility. The equipment has expanded. The
                team has grown. The principle has not changed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#111111] border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-5xl text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="WHAT WE BELIEVE"
            subtitle="Our coaching philosophy, stated plainly."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-8 border border-border rounded-md bg-[#111111]"
              >
                <h3 className="font-heading text-xl mb-4 text-primary">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Facility */}
      <section className="py-24 bg-[#111111] border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                <Image
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1000&q=80"
                  alt="Premium gym equipment and floor"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="font-heading text-4xl md:text-5xl">THE FACILITY</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Forge Fitness facility at 47 Iron Lane occupies 12,000 square
                feet across two training floors. The main floor houses our strength
                and conditioning equipment — 8 competition-spec squat racks,
                dedicated deadlift platforms, cable stations, specialty bars, and a
                full functional rig.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The upper floor hosts our conditioning and group class space,
                recovery suite, and private training rooms. Everything is cleaned to
                a commercial standard twice daily.
              </p>
              <ul className="space-y-2">
                {[
                  "8 competition-spec squat racks",
                  "Dedicated deadlift platforms",
                  "Full functional rig and turf lane",
                  "Recovery suite with contrast therapy",
                  "Private training rooms",
                  "Premium locker and changing facilities",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline">
                <Link href="/gallery">VIEW GALLERY</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-24 bg-[#0a0a0a] border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-heading text-4xl md:text-5xl mb-8">THE COMMUNITY</h2>
          <p className="text-muted-foreground text-xl leading-relaxed mb-8">
            Forge Fitness attracts people who are serious about results. That
            doesn&apos;t mean unfriendly — it means focused. Our members support
            each other without distraction. New members are welcomed, respected,
            and integrated into the community from their first session.
          </p>
          <p className="text-muted-foreground text-xl leading-relaxed">
            We run quarterly member events, in-gym challenges, and educational
            workshops open to all membership tiers. The culture at Forge Fitness is
            one of mutual respect, shared effort, and quiet confidence.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#111111] border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            title="COME SEE FOR YOURSELF"
            subtitle="Book a free tour and meet the team. No commitment required."
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">BOOK A FREE TOUR</Link>
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
