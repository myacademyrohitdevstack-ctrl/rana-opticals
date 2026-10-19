import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { collections } from "@/data/collections";

export default function CollectionGrid() {
  return (
    <section className="py-16 md:py-24 border-b border-stone">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-bronze font-medium">
                Curated Collections
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal mt-1">
                Eyewear for every lifestyle
              </h2>
            </div>
            <p className="text-sm text-charcoal/70 max-w-sm">
              Discover frames categorized by occasion, comfort requirements, and aesthetic
              silhouette.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {collections.map((col, idx) => (
            <Reveal key={col.title} delay={idx * 0.08}>
              <Link
                href={col.href}
                className="group block bg-white border border-stone p-3 sm:p-4 hover:border-bronze transition-colors flex flex-col h-full"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-ivory mb-3 sm:mb-4">
                  <Image
                    src={col.image}
                    alt={col.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 260px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-auto">
                  <h3 className="font-serif text-base sm:text-lg text-charcoal group-hover:text-bronze transition-colors">
                    {col.title}
                  </h3>
                  <p className="text-xs text-charcoal/60 mt-1 line-clamp-2 hidden sm:block">
                    {col.description}
                  </p>
                  <span className="inline-flex items-center text-xs font-medium text-olive group-hover:text-bronze mt-2">
                    Browse collection
                    <svg
                      className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
