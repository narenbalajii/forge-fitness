"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const navLinks = [
  { href: "/programs",    label: "PROGRAMS"    },
  { href: "/trainers",    label: "TRAINERS"    },
  { href: "/memberships", label: "MEMBERSHIPS" },
  { href: "/gallery",     label: "GALLERY"     },
  { href: "/about",       label: "ABOUT"       },
];

export function Navbar() {
  const pathname  = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll(); // check on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Forge Fitness — Home"
        >
          {/* Mark — a simple geometric "F" brand mark */}
          <div className="w-8 h-8 border border-primary flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
            <span className="font-heading text-primary text-sm group-hover:text-[#0a0a0a] transition-colors duration-300 leading-none">
              F
            </span>
          </div>
          <span className="font-heading text-2xl tracking-[0.15em] text-foreground leading-none">
            FORGE FITNESS
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-xs font-medium tracking-widest transition-colors duration-200",
                pathname === href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA buttons & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="hidden lg:flex text-xs tracking-widest text-muted-foreground hover:text-foreground"
          >
            <Link href="/contact">CONTACT</Link>
          </Button>
          <Button
            size="sm"
            asChild
            className="hidden sm:flex text-xs tracking-widest"
          >
            <Link href="/memberships">JOIN NOW</Link>
          </Button>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                render={
                  <Button variant="ghost" size="icon" aria-label="Open mobile menu">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </Button>
                }
              />
              <SheetContent side="right" className="bg-[#0a0a0a] border-l-border w-[300px] sm:w-[400px]">
                <VisuallyHidden>
                  <SheetTitle>Navigation Menu</SheetTitle>
                </VisuallyHidden>
                <div className="flex flex-col gap-8 mt-12">
                  <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
                    {navLinks.map(({ href, label }) => (
                      <Link
                        key={href}
                        href={href}
                        className={cn(
                          "font-heading text-xl tracking-widest transition-colors duration-200",
                          pathname === href
                            ? "text-primary"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {label}
                      </Link>
                    ))}
                    <Link
                      href="/contact"
                      className={cn(
                        "font-heading text-xl tracking-widest transition-colors duration-200",
                        pathname === "/contact"
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      CONTACT
                    </Link>
                  </nav>
                  
                  <div className="pt-8 border-t border-border">
                    <Button
                      size="lg"
                      asChild
                      className="w-full text-xs tracking-widest"
                    >
                      <Link href="/memberships">JOIN NOW</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
