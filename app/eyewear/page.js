import { Suspense } from "react";
import ProductGrid from "@/components/ProductGrid";
import Reveal from "@/components/Reveal";
import { products } from "@/data/products";
import { site } from "@/data/site";

export const metadata = {
  title: "Eyewear Catalogue — Optical Frames & Sunglasses",
  description:
    "Find your everyday pair. Browse our handpicked catalogue of everyday eyeglasses, sunglasses, and premium optical frames.",
};

function CatalogueContent({ searchParams }) {
  const initialCategory = searchParams?.category || "all";

  return (
    <div className="py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Intro */}
        <Reveal>
          <div className="max-w-2xl mb-8 md:mb-12">
            <span className="text-xs uppercase tracking-widest text-bronze font-medium">
              Hand-Inspected Optical Frames
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal mt-2 tracking-tight">
              Find your everyday pair
            </h1>
            <p className="text-sm sm:text-base text-charcoal/75 mt-3 leading-relaxed">
              Every frame is selected for structural durability, all-day comfort, and optical
              integrity. Visit our shop to experience the exact fit on your face.
            </p>
          </div>
        </Reveal>

        {/* Interactive Catalogue */}
        <ProductGrid
          initialProducts={products}
          initialCategory={initialCategory}
        />
      </div>
    </div>
  );
}

export default function EyewearPage({ searchParams }) {
  return (
    <Suspense
      fallback={
        <div className="max-w-6xl mx-auto px-4 py-20 text-center text-sm text-charcoal/60">
          Loading frames catalogue...
        </div>
      }
    >
      <CatalogueContent searchParams={searchParams} />
    </Suspense>
  );
}
