"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { site } from "@/data/site";
import WhatsAppButton from "./WhatsAppButton";

export default function MobileMenu({ isOpen, onClose }) {
  const menuRef = useRef(null);

  useEffect(() => {
    function handleKeyDown(e) {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
      }
      // Focus trap
      if (e.key === "Tab" && menuRef.current) {
        const focusables = menuRef.current.querySelectorAll(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      // Focus first element in menu
      setTimeout(() => {
        const first = menuRef.current?.querySelector("button, a");
        first?.focus();
      }, 50);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 flex md:hidden"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={menuRef}
        className="relative ml-auto w-4/5 max-w-sm h-full bg-ivory text-charcoal border-l border-stone p-6 flex flex-col justify-between shadow-xl"
      >
        <div>
          {/* Top Bar with close button */}
          <div className="flex items-center justify-between pb-6 border-b border-stone">
            <span className="font-serif text-lg tracking-tight font-medium">
              {site.name}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="w-11 h-11 flex items-center justify-center rounded-sm hover:bg-stone/50 active:scale-95 text-charcoal focus:outline-none focus:ring-2 focus:ring-bronze"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-8 flex flex-col space-y-2">
            {[
              { href: "/", label: "Home" },
              { href: "/eyewear", label: "Eyewear Catalogue" },
              { href: "/lenses", label: "Prescription Lenses" },
              { href: "/about", label: "Our Story" },
              { href: "/contact", label: "Store & Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="min-h-[44px] flex items-center text-lg font-serif tracking-wide text-charcoal hover:text-bronze px-2 py-2 transition-colors border-b border-stone/30"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Footer info in drawer */}
        <div className="pt-6 border-t border-stone space-y-4">
          <div className="text-xs text-charcoal/80 space-y-1">
            <p className="font-medium text-charcoal">{site.address}</p>
            <p>{site.hours}</p>
          </div>
          <WhatsAppButton
            className="w-full text-center"
            label="Chat with store"
          />
        </div>
      </div>
    </div>
  );
}
