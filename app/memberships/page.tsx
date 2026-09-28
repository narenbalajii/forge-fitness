import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Memberships",
  description:
    "Forge Fitness membership plans — Starter, Pro, and Elite. Simple pricing, no hidden fees.",
};

const plans = [
  {
    tier: "STARTER",
    price: 49,
    billing: "per month",
    description: "Everything you need to begin training at Forge Fitness with confidence.",
    features: [
      "Full gym floor access",
      "Standard equipment access",
      "Locker room & changing facilities",
      "2 group classes per week",
      "Access to Forge Fitness app",
      "Member community access",
    ],
    notIncluded: [
      "Unlimited group classes",
      "Personal training sessions",
      "Nutrition guidance",
      "Recovery suite",
    ],
    cta: "ENQUIRE — STARTER",
    isPopular: false,
  },
  {
    tier: "PRO",
    price: 89,
    billing: "per month",
    description: "Our most popular plan. Serious training with full access and ongoing support.",
    features: [
      "Everything in Starter",
      "Unlimited group classes",
      "1 personal training session per month",
      "Nutrition guidance & framework",
      "Towel service included",
      "Priority class booking",
      "Monthly progress check-in",
    ],
    notIncluded: [
      "Unlimited PT sessions",
      "Recovery suite access",
      "Body composition scanning",
    ],
    cta: "ENQUIRE — PRO",
    isPopular: true,
  },
  {
    tier: "ELITE",
    price: 149,
    billing: "per month",
    description: "The complete Forge Fitness experience. Unlimited access to everything we offer.",
    features: [
      "Everything in Pro",
      "Unlimited personal training sessions",
      "Priority booking — all services",
      "Recovery suite access",
      "Monthly body composition scan",
      "Dedicated locker",
      "Quarterly program review",
      "Direct trainer messaging",
    ],
    notIncluded: [],
    cta: "ENQUIRE — ELITE",
    isPopular: false,
  },
];

const faqs = [
  {
    question: "Is there a joining fee?",
    answer:
      "There is a one-time joining fee of $25 which covers your initial assessment, access card, and onboarding session with one of our coaches.",
  },
  {
    question: "Can I freeze my membership?",
    answer:
      "Yes. Members can freeze their membership for up to 3 months per year. Please contact us at least 7 days before your billing date.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "All memberships require 30 days written notice for cancellation. There are no early cancellation penalties after the first month.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "You can change your membership tier at any time. Changes take effect on your next billing cycle.",
  },
  {
    question: "Do you offer corporate memberships?",
    answer:
      "Yes. We offer corporate membership packages for teams of 5 or more. Contact us directly to discuss custom pricing.",
  },
];

export default function MembershipsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-40 pb-24 bg-[#0a0a0a] border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary font-medium tracking-widest text-sm mb-4 uppercase">
            Simple Pricing
          </p>
          <h1 className="font-heading text-5xl md:text-7xl mb-6">
            MEMBERSHIPS
          </h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            No hidden fees. No confusing bundles. Choose the plan that fits your
            training goals and start immediately.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {plans.map((plan) => (
              <div
                key={plan.tier}
                className={`relative flex flex-col rounded-md border p-8 transition-colors ${
                  plan.isPopular
                    ? "border-primary bg-[#1a1a1a]"
                    : "border-border bg-[#111111]"
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-[#0a0a0a] font-semibold px-4 py-1 text-xs tracking-wider">
                      MOST POPULAR
                    </Badge>
                  </div>
                )}

                <div className="mb-8">
                  <h2 className="font-heading text-3xl tracking-wider mb-2">
                    {plan.tier}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-5xl">${plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.billing}</span>
                  </div>
                </div>

                {/* Included */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
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
                      <span>{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-muted-foreground/50"
                    >
                      <svg
                        className="w-4 h-4 text-muted-foreground/30 shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  variant={plan.isPopular ? "default" : "outline"}
                  className="w-full"
                  asChild
                >
                  <Link href={`/contact?plan=${plan.tier.toLowerCase()}`}>
                    {plan.cta}
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="text-center text-muted-foreground text-sm mt-12 max-w-2xl mx-auto">
            All plans include a one-time joining fee of{" "}
            <span className="text-foreground">$25</span>. Memberships run
            month-to-month with 30-day cancellation notice. Student and
            corporate discounts available — contact us for details.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#111111] border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeading
            title="COMMON QUESTIONS"
            subtitle="Everything you need to know before joining."
          />
          <div className="divide-y divide-border">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-6">
                <h3 className="font-heading text-xl mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0a0a0a] border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            title="READY TO JOIN?"
            subtitle="Contact us and we'll get you started within 24 hours."
          />
          <Button size="lg" asChild>
            <Link href="/contact">GET IN TOUCH</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
