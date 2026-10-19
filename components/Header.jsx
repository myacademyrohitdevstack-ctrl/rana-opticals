"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";
import MobileMenu from "./MobileMenu";
import WhatsAppButton from "./WhatsAppButton";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-ivory/95 backdrop-blur-md border-b border-stone">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo / Shop Name */}
          <Link
            href="/"
            className="flex items-center space-x-2 group focus:outline-none focus:ring-2 focus:ring-bronze rounded px-1"
            aria-label={`${site.name} Home`}
          >
            <span className="w-7 h-7 rounded-sm border border-charcoal flex items-center justify-center font-serif text-charcoal text-sm font-semibold group-hover:border-bronze group-hover:text-bronze transition-colors">
              R
            </span>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-tight font-medium text-charcoal group-hover:text-bronze transition-colors leading-tight">
                {site.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-olive font-sans">
                Eyewear &amp; Care
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-charcoal">
            <Link
              href="/eyewear"
              className="min-h-[44px] flex items-center hover:text-bronze transition-colors"
            >
              Catalogue
            </Link>
            <Link
              href="/lenses"
              className="min-h-[44px] flex items-center hover:text-bronze transition-colors"
            >
              Lenses
            </Link>
            <Link
              href="/about"
              className="min-h-[44px] flex items-center hover:text-bronze transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="min-h-[44px] flex items-center hover:text-bronze transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right Action: Desktop WhatsApp */}
          <div className="hidden md:flex items-center space-x-4">
            <WhatsAppButton
              label="Enquire"
              variant="secondary"
              className="text-xs px-3.5 py-1.5 h-9 min-h-[36px]"
            />
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            className="md:hidden w-11 h-11 flex items-center justify-center rounded text-charcoal hover:bg-stone/40 active:scale-95 focus:outline-none focus:ring-2 focus:ring-bronze"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
