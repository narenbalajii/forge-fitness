import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface MembershipCardProps {
  title: string;
  price: string;
  features: string[];
  notIncluded?: string[];
  isPopular?: boolean;
}

export function MembershipCard({
  title,
  price,
  features,
  notIncluded = [],
  isPopular = false,
}: MembershipCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-sm p-8 border transition-colors duration-300 ${
        isPopular
          ? "border-primary bg-[#141414]"
          : "border-border bg-[#111111] hover:border-border/80"
      }`}
    >
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute -top-3.5 inset-x-0 flex justify-center">
          <Badge className="bg-primary text-[#0a0a0a] font-semibold px-4 py-1 text-[10px] tracking-[0.2em] uppercase rounded-none">
            MOST POPULAR
          </Badge>
        </div>
      )}

      {/* Tier */}
      <div className="mb-8">
        <p className="text-xs text-muted-foreground tracking-[0.3em] uppercase mb-3">
          {isPopular ? "Recommended" : "Plan"}
        </p>
        <h2 className="font-heading text-4xl tracking-wide mb-6">{title}</h2>
        <div className="flex items-baseline gap-1.5">
          <span className={`font-heading text-6xl ${isPopular ? "text-primary" : ""}`}>
            {price}
          </span>
          <span className="text-muted-foreground text-sm">/month</span>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-border mb-8" />

      {/* Features */}
      <ul className="space-y-3.5 flex-grow mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <svg
              className="w-4 h-4 text-primary shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
        {notIncluded.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground/40">
            <svg
              className="w-4 h-4 text-muted-foreground/25 shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        size="lg"
        variant={isPopular ? "default" : "outline"}
        className={`w-full tracking-widest text-xs ${
          !isPopular
            ? "border-border hover:border-primary hover:text-primary"
            : ""
        }`}
        asChild
      >
        <Link href={`/contact?plan=${title.toLowerCase()}`}>
          ENQUIRE — {title}
        </Link>
      </Button>
    </div>
  );
}
