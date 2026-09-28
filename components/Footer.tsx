import Link from "next/link";

const navLinks = [
  { href: "/programs",    label: "Programs"    },
  { href: "/trainers",    label: "Trainers"    },
  { href: "/memberships", label: "Memberships" },
  { href: "/gallery",     label: "Gallery"     },
  { href: "/about",       label: "About"       },
  { href: "/contact",     label: "Contact"     },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-border">
      {/* Main footer */}
      <div className="container mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-3 mb-5 group w-fit"
              aria-label="Forge Fitness — Home"
            >
              <div className="w-7 h-7 border border-primary flex items-center justify-center shrink-0">
                <span className="font-heading text-primary text-xs leading-none">F</span>
              </div>
              <span className="font-heading text-xl tracking-[0.15em] text-foreground leading-none">
                FORGE FITNESS
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
              Built to Perform. Designed to Last. A premium facility for those
              serious about strength, performance, and long-term results.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 border border-border rounded-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-sm tracking-[0.25em] uppercase mb-6 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm tracking-[0.25em] uppercase mb-6 text-foreground">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="leading-relaxed">
                47 Iron Lane, Midtown District
                <br />
                New York, NY 10001
              </li>
              <li>
                <a
                  href="tel:+12125550192"
                  className="hover:text-primary transition-colors duration-200"
                >
                  +1 (212) 555-0192
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@forgefitness.com"
                  className="hover:text-primary transition-colors duration-200"
                >
                  hello@forgefitness.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-sm tracking-[0.25em] uppercase mb-6 text-foreground">
              Opening Hours
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                ["Mon – Fri", "5:30am – 11:00pm"],
                ["Saturday",  "6:00am – 10:00pm"],
                ["Sunday",    "7:00am – 8:00pm"],
              ].map(([day, time]) => (
                <li key={day} className="flex justify-between items-center gap-4">
                  <span>{day}</span>
                  <span className="text-foreground/70 shrink-0">{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Forge Fitness. All rights reserved.</p>
          <p className="text-muted-foreground/50">47 Iron Lane · New York, NY 10001</p>
        </div>
      </div>
    </footer>
  );
}
