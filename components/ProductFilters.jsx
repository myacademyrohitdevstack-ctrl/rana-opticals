"use client";

import { useState, useEffect, useRef } from "react";

export default function ProductFilters({
  activeCategory,
  onCategoryChange,
  filters,
  onFilterChange,
  onClearFilters,
  sortBy,
  onSortChange,
  availableOptions,
  activeFilterCount,
}) {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const sheetRef = useRef(null);

  // Focus trap & escape key handler for mobile bottom sheet
  useEffect(() => {
    function handleKeyDown(e) {
      if (!isBottomSheetOpen) return;
      if (e.key === "Escape") {
        setIsBottomSheetOpen(false);
      }
      if (e.key === "Tab" && sheetRef.current) {
        const focusables = sheetRef.current.querySelectorAll(
          'button, [tabindex]:not([tabindex="-1"]), select, input'
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

    if (isBottomSheetOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => {
        sheetRef.current?.querySelector("button")?.focus();
      }, 50);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isBottomSheetOpen]);

  const categories = [
    { id: "all", label: "All Eyewear" },
    { id: "eyeglasses", label: "Eyeglasses" },
    { id: "sunglasses", label: "Sunglasses" },
    { id: "premium", label: "Premium" },
  ];

  return (
    <div className="space-y-6">
      {/* Category Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none border-b border-stone">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onCategoryChange(cat.id)}
              className={`min-h-[44px] px-4 py-2 text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap transition-colors rounded-sm ${
                isActive
                  ? "bg-charcoal text-ivory"
                  : "bg-white text-charcoal/80 border border-stone hover:border-bronze hover:text-charcoal"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Filter and Sort Control Bar */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        {/* Mobile Filter Button */}
        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={() => setIsBottomSheetOpen(true)}
            className="md:hidden min-h-[44px] px-4 py-2 bg-white border border-stone text-xs font-medium text-charcoal inline-flex items-center space-x-2 rounded-sm hover:border-bronze"
            aria-haspopup="dialog"
          >
            <svg
              className="w-4 h-4 text-bronze"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="4" y1="21" x2="4" y2="14" />
              <line x1="4" y1="10" x2="4" y2="3" />
              <line x1="12" y1="21" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12" y2="3" />
              <line x1="20" y1="21" x2="20" y2="16" />
              <line x1="20" y1="12" x2="20" y2="3" />
              <line x1="1" y1="14" x2="7" y2="14" />
              <line x1="9" y1="8" x2="15" y2="8" />
              <line x1="17" y1="16" x2="23" y2="16" />
            </svg>
            <span>Filters</span>
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-bronze text-white text-[10px] inline-flex items-center justify-center font-bold">
                {activeFilterCount}
              </span>
            )}
          </button>

          {activeFilterCount > 0 && (
            <button
              type="button"
              onClick={onClearFilters}
              className="text-xs text-olive hover:text-charcoal underline underline-offset-4 min-h-[44px] px-2 inline-flex items-center"
            >
              Clear all
            </button>
          )}
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center space-x-2 ml-auto">
          <label htmlFor="sort-select" className="text-xs text-charcoal/70 hidden sm:inline">
            Sort by:
          </label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="min-h-[44px] bg-white border border-stone px-3 py-2 text-xs text-charcoal rounded-sm focus:outline-none focus:ring-1 focus:ring-bronze"
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-asc">Price: Low to High</option>
          </select>
        </div>
      </div>

      {/* Desktop Filter Bar (visible on md+) */}
      <div className="hidden md:grid md:grid-cols-5 gap-3 pt-2">
        {/* Shape */}
        <div>
          <label className="block text-[11px] uppercase tracking-wider text-charcoal/70 mb-1 font-medium">
            Shape
          </label>
          <select
            value={filters.shape || ""}
            onChange={(e) => onFilterChange("shape", e.target.value)}
            className="w-full min-h-[44px] bg-white border border-stone px-3 py-2 text-xs text-charcoal rounded-sm"
          >
            <option value="">All Shapes</option>
            {availableOptions.shapes.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Material */}
        <div>
          <label className="block text-[11px] uppercase tracking-wider text-charcoal/70 mb-1 font-medium">
            Material
          </label>
          <select
            value={filters.material || ""}
            onChange={(e) => onFilterChange("material", e.target.value)}
            className="w-full min-h-[44px] bg-white border border-stone px-3 py-2 text-xs text-charcoal rounded-sm"
          >
            <option value="">All Materials</option>
            {availableOptions.materials.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>

        {/* Colour */}
        <div>
          <label className="block text-[11px] uppercase tracking-wider text-charcoal/70 mb-1 font-medium">
            Colour
          </label>
          <select
            value={filters.colour || ""}
            onChange={(e) => onFilterChange("colour", e.target.value)}
            className="w-full min-h-[44px] bg-white border border-stone px-3 py-2 text-xs text-charcoal rounded-sm"
          >
            <option value="">All Colours</option>
            {availableOptions.colours.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Style */}
        <div>
          <label className="block text-[11px] uppercase tracking-wider text-charcoal/70 mb-1 font-medium">
            Style
          </label>
          <select
            value={filters.style || ""}
            onChange={(e) => onFilterChange("style", e.target.value)}
            className="w-full min-h-[44px] bg-white border border-stone px-3 py-2 text-xs text-charcoal rounded-sm"
          >
            <option value="">All Styles</option>
            {availableOptions.styles.map((st) => (
              <option key={st} value={st}>{st}</option>
            ))}
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block text-[11px] uppercase tracking-wider text-charcoal/70 mb-1 font-medium">
            Price Range
          </label>
          <select
            value={filters.priceRange || ""}
            onChange={(e) => onFilterChange("priceRange", e.target.value)}
            className="w-full min-h-[44px] bg-white border border-stone px-3 py-2 text-xs text-charcoal rounded-sm"
          >
            <option value="">All Prices</option>
            <option value="under-2000">Under ₹2,000</option>
            <option value="2000-3000">₹2,000 – ₹3,000</option>
            <option value="above-3000">Above ₹3,000</option>
            <option value="on-enquiry">Price on enquiry</option>
          </select>
        </div>
      </div>

      {/* Mobile Bottom Sheet */}
      {isBottomSheetOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Filter frames"
          className="fixed inset-0 z-50 flex flex-col justify-end md:hidden"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm"
            onClick={() => setIsBottomSheetOpen(false)}
            aria-hidden="true"
          />

          {/* Bottom Sheet Modal */}
          <div
            ref={sheetRef}
            className="relative bg-ivory text-charcoal w-full max-h-[85vh] rounded-t-xl border-t border-stone p-5 flex flex-col shadow-2xl z-10 overflow-hidden"
          >
            {/* Grab Handle */}
            <div className="w-10 h-1 bg-stone rounded-full mx-auto mb-4" />

            <div className="flex items-center justify-between pb-3 border-b border-stone">
              <h3 className="font-serif text-lg text-charcoal font-medium">
                Filter Frames
              </h3>
              <button
                type="button"
                onClick={() => setIsBottomSheetOpen(false)}
                aria-label="Close filters"
                className="w-11 h-11 flex items-center justify-center text-charcoal rounded hover:bg-stone/40"
              >
                ✕
              </button>
            </div>

            {/* Scrollable Filters List */}
            <div className="overflow-y-auto py-4 space-y-4 flex-1">
              {/* Shape */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-charcoal/70 mb-1 font-semibold">
                  Shape
                </label>
                <select
                  value={filters.shape || ""}
                  onChange={(e) => onFilterChange("shape", e.target.value)}
                  className="w-full min-h-[44px] bg-white border border-stone px-3 py-2 text-sm text-charcoal rounded-sm"
                >
                  <option value="">All Shapes</option>
                  {availableOptions.shapes.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Material */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-charcoal/70 mb-1 font-semibold">
                  Material
                </label>
                <select
                  value={filters.material || ""}
                  onChange={(e) => onFilterChange("material", e.target.value)}
                  className="w-full min-h-[44px] bg-white border border-stone px-3 py-2 text-sm text-charcoal rounded-sm"
                >
                  <option value="">All Materials</option>
                  {availableOptions.materials.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>

              {/* Colour */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-charcoal/70 mb-1 font-semibold">
                  Colour
                </label>
                <select
                  value={filters.colour || ""}
                  onChange={(e) => onFilterChange("colour", e.target.value)}
                  className="w-full min-h-[44px] bg-white border border-stone px-3 py-2 text-sm text-charcoal rounded-sm"
                >
                  <option value="">All Colours</option>
                  {availableOptions.colours.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Style */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-charcoal/70 mb-1 font-semibold">
                  Style
                </label>
                <select
                  value={filters.style || ""}
                  onChange={(e) => onFilterChange("style", e.target.value)}
                  className="w-full min-h-[44px] bg-white border border-stone px-3 py-2 text-sm text-charcoal rounded-sm"
                >
                  <option value="">All Styles</option>
                  {availableOptions.styles.map((st) => (
                    <option key={st} value={st}>{st}</option>
                  ))}
                </select>
              </div>

              {/* Price */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-charcoal/70 mb-1 font-semibold">
                  Price
                </label>
                <select
                  value={filters.priceRange || ""}
                  onChange={(e) => onFilterChange("priceRange", e.target.value)}
                  className="w-full min-h-[44px] bg-white border border-stone px-3 py-2 text-sm text-charcoal rounded-sm"
                >
                  <option value="">All Prices</option>
                  <option value="under-2000">Under ₹2,000</option>
                  <option value="2000-3000">₹2,000 – ₹3,000</option>
                  <option value="above-3000">Above ₹3,000</option>
                  <option value="on-enquiry">Price on enquiry</option>
                </select>
              </div>
            </div>

            {/* Bottom Sheet Actions: Apply and Clear */}
            <div className="pt-3 border-t border-stone grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  onClearFilters();
                }}
                className="min-h-[44px] flex items-center justify-center border border-charcoal text-charcoal font-medium text-xs rounded-sm active:scale-95"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={() => setIsBottomSheetOpen(false)}
                className="min-h-[44px] flex items-center justify-center bg-charcoal text-ivory font-medium text-xs rounded-sm active:scale-95 hover:bg-bronze"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
