import Reveal from "./Reveal";
import { site } from "@/data/site";

export default function Reviews() {
  return (
    <section className="py-16 md:py-24 border-b border-stone">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-bronze font-medium">
              Store Feedback
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal mt-1">
              Customer Experience
            </h2>
            <div className="mt-3 inline-flex items-center space-x-2 bg-white border border-stone px-4 py-1.5 rounded-full">
              <div className="flex text-bronze" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs font-semibold text-charcoal">
                Highly Rated on Google Maps &amp; Local Directories
              </span>
            </div>
            <p className="text-xs sm:text-sm text-charcoal/70 mt-3">
              Serving patrons across Nayagaon, Chandigarh, and surrounding areas with personalized frame fitting and precision lens edging.
            </p>
          </div>
        </Reveal>

        {/* Real Customer Experience pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Frame Fitting & Comfort",
              note: "Custom temple adjustments, nose-pad alignments, and loose screw tightening for daily comfort.",
              tag: "Verified In-Store Service",
            },
            {
              title: "Prescription Glazing",
              note: "Single-vision, progressive, and blue-cut digital lens mounting calibrated to your exact optical center.",
              tag: "Precision Dispensing",
            },
            {
              title: "Transparent & Friendly",
              note: "Patient advice on frame shapes, face geometry, and honest pricing with no hidden charges.",
              tag: "Neighbourhood Trust",
            },
          ].map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.1}>
              <div className="bg-white border border-stone p-6 flex flex-col justify-between h-full rounded-sm">
                <div>
                  <div className="flex items-center space-x-1 text-bronze mb-3" aria-hidden="true">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <h3 className="font-serif text-base text-charcoal font-medium">
                    {item.title}
                  </h3>
                  <p className="text-xs text-charcoal/70 mt-2 leading-relaxed">
                    {item.note}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-stone/40 text-[11px] text-olive font-medium">
                  {item.tag}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Direct Google Maps link */}
        <Reveal delay={0.3}>
          <div className="mt-8 text-center">
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-semibold text-charcoal hover:text-bronze underline underline-offset-4"
            >
              <span>Read genuine customer reviews on Google Maps</span>
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
        </Reveal>
      </div>
    </section>
  );
}
