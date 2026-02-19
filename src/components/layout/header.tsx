"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { WHATSAPP_LINK } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
          scrolled
            ? "bg-navy/90 border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <a href="#" className="font-heading text-xl font-bold text-white">
              Nexovate<span className="text-cyan">Digital</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 lg:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative text-sm font-semibold uppercase tracking-wider text-white/80 transition-colors hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-cyan after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:block">
                <Button variant="primary" size="default" href={WHATSAPP_LINK}>
                  Book a Call
                </Button>
              </div>

              {/* Mobile hamburger */}
              <button
                className="inline-flex items-center justify-center text-white lg:hidden"
                onClick={() => setMobileNavOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />
    </>
  );
}
