import Link from "next/link";
import Reveal from "./Reveal";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function FeaturedFrames() {
  const featured = products.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-16 md:py-24 border-b border-stone">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 md:mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-bronze font-medium">
                Featured Selection
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal mt-1">
                Distinguished everyday frames
              </h2>
            </div>
            <Link
              href="/eyewear"
              className="inline-flex items-center text-sm font-medium text-charcoal hover:text-bronze transition-colors self-start sm:self-auto min-h-[44px]"
            >
              <span>View full catalogue</span>
              <svg
                className="w-4 h-4 ml-1.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </Reveal>

        {/* 2 columns on mobile, 4 columns on lg */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {featured.map((product, idx) => (
            <Reveal key={product.slug} delay={idx * 0.08}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
