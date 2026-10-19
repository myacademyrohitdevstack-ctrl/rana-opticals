import Link from "next/link";
import { site } from "@/data/site";
import WhatsAppButton from "./WhatsAppButton";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-ivory border-t border-charcoal/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Col 1: Brand */}
          <div className="space-y-4 md:col-span-1">
            <Link
              href="/"
              className="inline-block font-serif text-2xl tracking-tight text-white focus:outline-none focus:ring-2 focus:ring-bronze"
            >
              {site.name}
            </Link>
            <p className="text-sm text-stone leading-relaxed">
              {site.tagline}
            </p>
            <div className="pt-2">
              <WhatsAppButton
                label="Message on WhatsApp"
                variant="olive"
                className="text-xs"
              />
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-bronze">
              Explore
            </h2>
            <ul className="space-y-2 text-sm text-stone">
              <li>
                <Link
                  href="/eyewear"
                  className="hover:text-white transition-colors"
                >
                  Frames Catalogue
                </Link>
              </li>
              <li>
                <Link
                  href="/eyewear?category=eyeglasses"
                  className="hover:text-white transition-colors"
                >
                  Everyday Eyeglasses
                </Link>
              </li>
              <li>
                <Link
                  href="/eyewear?category=sunglasses"
                  className="hover:text-white transition-colors"
                >
                  UV Sunglasses
                </Link>
              </li>
              <li>
                <Link
                  href="/eyewear?category=premium"
                  className="hover:text-white transition-colors"
                >
                  Premium Frames
                </Link>
              </li>
              <li>
                <Link
                  href="/lenses"
                  className="hover:text-white transition-colors"
                >
                  Prescription Lenses
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Visit */}
          <div className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-bronze">
              Store Visit
            </h2>
            <address className="not-italic text-sm text-stone space-y-2 leading-relaxed">
              <p>{site.address}</p>
              <p className="text-ivory/90 font-medium">{site.hours}</p>
            </address>
            <div className="pt-1">
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs text-bronze hover:text-white transition-colors underline underline-offset-4"
              >
                <span>Get directions on Google Maps</span>
                <svg
                  className="w-3.5 h-3.5 ml-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 4: Quick Details */}
          <div className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-bronze">
              Contact &amp; Care
            </h2>
            <p className="text-sm text-stone">
              Phone:{" "}
              <a
                href={`tel:${site.phone}`}
                className="text-ivory hover:text-bronze transition-colors"
              >
                +{site.phone}
              </a>
            </p>
            <p className="text-xs text-stone/80 leading-relaxed">
              Walk-ins welcome for frame fittings, adjustments, and lens consultations.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="text-xs text-stone hover:text-white underline underline-offset-4"
              >
                View full contact details
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-stone/20 flex flex-col sm:flex-row items-center justify-between text-xs text-stone/70 space-y-3 sm:space-y-0">
          <p>© {currentYear} {site.name}. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Store Hours
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
