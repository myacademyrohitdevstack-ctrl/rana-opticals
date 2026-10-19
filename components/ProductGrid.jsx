"use client";

import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import ProductFilters from "./ProductFilters";
import Reveal from "./Reveal";

const INITIAL_DISPLAY_COUNT = 8;
const LOAD_MORE_INCREMENT = 4;

export default function ProductGrid({ initialProducts, initialCategory = "all" }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [filters, setFilters] = useState({
    shape: "",
    material: "",
    colour: "",
    style: "",
    priceRange: "",
  });
  const [sortBy, setSortBy] = useState("featured");
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);

  // Extract available filter choices dynamically from products
  const availableOptions = useMemo(() => {
    const shapes = Array.from(new Set(initialProducts.map((p) => p.shape).filter(Boolean)));
    const materials = Array.from(new Set(initialProducts.map((p) => p.material).filter(Boolean)));
    const colours = Array.from(new Set(initialProducts.map((p) => p.colour).filter(Boolean)));
    const styles = Array.from(new Set(initialProducts.map((p) => p.style).filter(Boolean)));
    return { shapes, materials, colours, styles };
  }, [initialProducts]);

  // Compute active filter count
  const activeFilterCount = useMemo(() => {
    return Object.values(filters).filter(Boolean).length;
  }, [filters]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setDisplayCount(INITIAL_DISPLAY_COUNT);
  };

  const handleClearFilters = () => {
    setFilters({
      shape: "",
      material: "",
      colour: "",
      style: "",
      priceRange: "",
    });
    setDisplayCount(INITIAL_DISPLAY_COUNT);
  };

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setDisplayCount(INITIAL_DISPLAY_COUNT);
  };

  // Instant client-side filtering and sorting
  const filteredProducts = useMemo(() => {
    let result = [...initialProducts];

    // Filter by Category
    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Filter by Shape
    if (filters.shape) {
      result = result.filter((p) => p.shape === filters.shape);
    }

    // Filter by Material
    if (filters.material) {
      result = result.filter((p) => p.material === filters.material);
    }

    // Filter by Colour
    if (filters.colour) {
      result = result.filter((p) => p.colour === filters.colour);
    }

    // Filter by Style
    if (filters.style) {
      result = result.filter((p) => p.style === filters.style);
    }

    // Filter by Price Range
    if (filters.priceRange) {
      if (filters.priceRange === "under-2000") {
        result = result.filter((p) => p.price !== null && p.price < 2000);
      } else if (filters.priceRange === "2000-3000") {
        result = result.filter((p) => p.price !== null && p.price >= 2000 && p.price <= 3000);
      } else if (filters.priceRange === "above-3000") {
        result = result.filter((p) => p.price !== null && p.price > 3000);
      } else if (filters.priceRange === "on-enquiry") {
        result = result.filter((p) => p.price === null);
      }
    }

    // Sort
    if (sortBy === "newest") {
      result.sort((a, b) => (b.isNew === a.isNew ? 0 : b.isNew ? 1 : -1));
    } else if (sortBy === "price-asc") {
      result.sort((a, b) => {
        if (a.price === null) return 1;
        if (b.price === null) return -1;
        return a.price - b.price;
      });
    } else {
      // "featured" default
      result.sort((a, b) => (b.featured === a.featured ? 0 : b.featured ? 1 : -1));
    }

    return result;
  }, [initialProducts, activeCategory, filters, sortBy]);

  const visibleProducts = filteredProducts.slice(0, displayCount);
  const hasMore = displayCount < filteredProducts.length;

  return (
    <div className="space-y-8">
      {/* Filters and Controls */}
      <ProductFilters
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        filters={filters}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
        sortBy={sortBy}
        onSortChange={setSortBy}
        availableOptions={availableOptions}
        activeFilterCount={activeFilterCount}
      />

      {/* Results Count Summary */}
      <div className="flex items-center justify-between text-xs text-charcoal/70 pt-2">
        <span>
          Showing <strong className="text-charcoal font-semibold">{visibleProducts.length}</strong> of{" "}
          <strong className="text-charcoal font-semibold">{filteredProducts.length}</strong> frames
        </span>
      </div>

      {/* Grid: 2 columns on mobile, 3 on md, 4 on lg */}
      {visibleProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {visibleProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-stone p-12 text-center rounded-sm space-y-4">
          <p className="font-serif text-lg text-charcoal">
            No frames match your selected filters.
          </p>
          <p className="text-xs text-charcoal/70 max-w-sm mx-auto">
            Try resetting your filters or exploring another category tab to view available frames.
          </p>
          <button
            type="button"
            onClick={handleClearFilters}
            className="min-h-[44px] px-6 py-2.5 bg-charcoal text-ivory text-xs font-medium hover:bg-bronze transition-colors rounded-sm"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Load More Button */}
      {hasMore && (
        <div className="text-center pt-8">
          <button
            type="button"
            onClick={() => setDisplayCount((prev) => prev + LOAD_MORE_INCREMENT)}
            className="min-h-[44px] px-8 py-3 bg-white border border-charcoal text-charcoal text-xs font-semibold uppercase tracking-wider hover:bg-charcoal hover:text-ivory transition-colors rounded-sm active:scale-[0.98]"
          >
            Load more frames
          </button>
        </div>
      )}
    </div>
  );
}
