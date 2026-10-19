"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({ images = [], name = "Frame" }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeImage = images[selectedIndex] || images[0] || "/images/placeholder.svg";

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-white border border-stone">
        <Image
          src={activeImage}
          alt={`${name} — view ${selectedIndex + 1}`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
          className="object-cover object-center"
        />
      </div>

      {/* Thumbnails if more than 1 image */}
      {images.length > 1 && (
        <div className="flex items-center space-x-3 overflow-x-auto pb-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              aria-label={`View photo ${idx + 1} of ${name}`}
              className={`relative w-16 h-20 shrink-0 border overflow-hidden rounded-sm transition-colors ${
                selectedIndex === idx
                  ? "border-charcoal ring-1 ring-charcoal"
                  : "border-stone hover:border-bronze opacity-80"
              }`}
            >
              <Image
                src={img}
                alt=""
                fill
                sizes="64px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
