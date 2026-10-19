import Reveal from "./Reveal";
import { site } from "@/data/site";
import WhatsAppButton from "./WhatsAppButton";

export default function StoreLocation() {
  return (
    <section id="location" className="py-16 md:py-24 bg-ivory">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="max-w-xl mb-10">
            <span className="text-xs uppercase tracking-widest text-bronze font-medium">
              Store Information
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal mt-1">
              Visit our optical dispensary
            </h2>
            <p className="text-sm text-charcoal/70 mt-2">
              Try on any frame from our catalogue with honest styling advice and custom
              optometric fittings.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Details Card */}
          <div className="lg:col-span-6 bg-white border border-stone p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-xs uppercase tracking-wider text-olive font-semibold">
                Store Address
              </h3>
              <p className="font-serif text-lg text-charcoal mt-1">
                {site.name}
              </p>
              <address className="not-italic text-sm text-charcoal/80 mt-1 leading-relaxed">
                {site.address}
              </address>
            </div>

            <div className="pt-4 border-t border-stone">
              <h3 className="text-xs uppercase tracking-wider text-olive font-semibold">
                Opening Hours
              </h3>
              <p className="text-sm text-charcoal mt-1 font-medium">
                {site.hours}
              </p>
              <p className="text-xs text-charcoal/60 mt-0.5">
                Walk-ins welcome throughout opening hours.
              </p>
            </div>

            <div className="pt-4 border-t border-stone">
              <h3 className="text-xs uppercase tracking-wider text-olive font-semibold">
                Direct Contact
              </h3>
              <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-3">
                <a
                  href={`tel:${site.phone}`}
                  className="min-h-[44px] inline-flex items-center text-sm font-medium text-charcoal hover:text-bronze"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-bronze shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+{site.phone}</span>
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-stone flex flex-col sm:flex-row gap-3">
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center justify-center px-5 py-2.5 bg-charcoal text-ivory text-sm font-medium rounded-sm hover:bg-bronze transition-colors active:scale-[0.98]"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                <span>Get directions</span>
              </a>

              <WhatsAppButton
                variant="secondary"
                label="Ask on WhatsApp"
              />
            </div>
          </div>

          {/* Interactive Map card */}
          <div className="lg:col-span-6 bg-white border border-stone p-6 sm:p-8 flex flex-col justify-between h-full">
            <div>
              <h3 className="font-serif text-lg text-charcoal">
                Interactive Store Map
              </h3>
              <p className="text-xs text-charcoal/70 mt-1">
                Located near Janta Colony, Nayagaon, Chandigarh.
              </p>
              
              <div className="mt-4 aspect-video w-full bg-ivory border border-stone overflow-hidden rounded-sm relative">
                <iframe
                  title={`${site.name} location on Google Maps`}
                  src="https://maps.google.com/maps?q=30.7709444,76.7912381+(Rana+Optical)&hl=en&z=17&output=embed"
                  width="100%"
                  height="100%"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-3 text-right">
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-bronze hover:underline"
                >
                  <span>Open in Google Maps App</span>
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
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone/50 text-xs text-charcoal/70 space-y-1">
              <p className="font-medium text-charcoal">Visiting Tips:</p>
              <p>• Bring your latest prescription if you have one handy.</p>
              <p>• If you don&apos;t have an updated power, we perform precise optometric testing in-store.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
