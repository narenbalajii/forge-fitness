import { ContactForm } from "@/components/ContactForm";
import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Forge Fitness — enquire about membership, programs, personal training, or book a free gym tour.",
};

const contactDetails = [
  {
    label: "Address",
    value: "47 Iron Lane, Midtown District\nNew York, NY 10001",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+1 (212) 555-0192",
    href: "tel:+12125550192",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "hello@forgefitness.com",
    href: "mailto:hello@forgefitness.com",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const hours = [
  { day: "Monday – Friday", time: "5:30am – 11:00pm" },
  { day: "Saturday", time: "6:00am – 10:00pm" },
  { day: "Sunday", time: "7:00am – 8:00pm" },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-40 pb-24 bg-[#0a0a0a] border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary font-medium tracking-widest text-sm mb-4 uppercase">
            Get In Touch
          </p>
          <h1 className="font-heading text-5xl md:text-7xl mb-6">CONTACT US</h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Questions about membership, programs, or personal training? We&apos;ll
            get back to you within one business day.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Left — Info */}
            <div className="space-y-12">
              {/* Contact Details */}
              <div>
                <h2 className="font-heading text-3xl mb-8">FIND US</h2>
                <div className="space-y-6">
                  {contactDetails.map((detail) => (
                    <div key={detail.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-md bg-[#1a1a1a] border border-border flex items-center justify-center text-primary shrink-0">
                        {detail.icon}
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                          {detail.label}
                        </p>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="text-foreground hover:text-primary transition-colors whitespace-pre-line"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-foreground whitespace-pre-line">{detail.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hours */}
              <div>
                <h2 className="font-heading text-3xl mb-8">OPENING HOURS</h2>
                <div className="space-y-4">
                  {hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex justify-between items-center border-b border-border pb-4 last:border-0"
                    >
                      <span className="text-foreground">{h.day}</span>
                      <span className="text-primary font-medium">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div>
                <h2 className="font-heading text-3xl mb-6">FOLLOW US</h2>
                <div className="flex gap-4">
                  {[
                    { label: "Instagram", abbr: "IG", href: "#" },
                    { label: "Facebook", abbr: "FB", href: "#" },
                    { label: "Twitter / X", abbr: "X", href: "#" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 rounded-md bg-[#1a1a1a] border border-border flex items-center justify-center text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                    >
                      {social.abbr}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div>
              <h2 className="font-heading text-3xl mb-8">SEND US A MESSAGE</h2>
              <Suspense fallback={<div className="h-96 flex items-center justify-center text-muted-foreground">Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
