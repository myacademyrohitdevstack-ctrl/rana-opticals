import Reveal from "@/components/Reveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact & Store Location — Rana Optical",
  description: `Visit ${site.name} at ${site.address}. Get store opening hours, phone number, WhatsApp contact, and driving directions.`,
};

export default function ContactPage() {
  return (
    <div className="py-10 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-widest text-bronze font-medium">
              Store &amp; Dispensary
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal mt-2 tracking-tight">
              Get in touch &amp; Visit us
            </h1>
            <p className="text-sm sm:text-base text-charcoal/75 mt-3 leading-relaxed">
              Whether you need a new pair of frames, custom lenses, or a quick frame alignment,
              our counter is open. Reach out directly or drop in during store hours.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Contact Card */}
          <div className="lg:col-span-7 bg-white border border-stone p-6 sm:p-10 space-y-8 rounded-sm">
            {/* Store Address */}
            <div className="space-y-2">
              <h2 className="text-xs uppercase tracking-wider text-olive font-semibold">
                Store Location
              </h2>
              <p className="font-serif text-2xl text-charcoal">
                {site.name}
              </p>
              <address className="not-italic text-sm text-charcoal/80 leading-relaxed max-w-md">
                {site.address}
              </address>
              <div className="pt-2">
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center text-xs font-semibold text-bronze hover:underline"
                >
                  <svg
                    className="w-4 h-4 mr-1.5"
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
                  <span>Get directions on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="pt-6 border-t border-stone space-y-2">
              <h2 className="text-xs uppercase tracking-wider text-olive font-semibold">
                Opening Hours
              </h2>
              <p className="text-sm text-charcoal font-medium">
                {site.hours}
              </p>
              <p className="text-xs text-charcoal/60 leading-relaxed">
                Walk-ins are welcomed throughout the day. Frame adjustments, cleaning, and lens
                consultations do not require an appointment.
              </p>
            </div>

            {/* Direct Communication Channels */}
            <div className="pt-6 border-t border-stone space-y-4">
              <h2 className="text-xs uppercase tracking-wider text-olive font-semibold">
                Direct Channels
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-ivory border border-stone rounded-sm">
                  <span className="block text-[11px] uppercase tracking-wider text-charcoal/60">
                    Phone Calling
                  </span>
                  <a
                    href={`tel:${site.phone}`}
                    className="min-h-[44px] inline-flex items-center text-sm font-serif font-semibold text-charcoal hover:text-bronze mt-1"
                  >
                    +{site.phone}
                  </a>
                  <p className="text-[11px] text-charcoal/60 mt-1">
                    Available during shop hours
                  </p>
                </div>

                <div className="p-4 bg-ivory border border-stone rounded-sm">
                  <span className="block text-[11px] uppercase tracking-wider text-charcoal/60">
                    Instant WhatsApp
                  </span>
                  <a
                    href={`https://wa.me/${site.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] inline-flex items-center text-sm font-serif font-semibold text-olive hover:text-charcoal mt-1"
                  >
                    Message Store
                  </a>
                  <p className="text-[11px] text-charcoal/60 mt-1">
                    Fast response for frame availability
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-stone flex flex-col sm:flex-row gap-3">
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center justify-center px-6 py-3 bg-charcoal text-ivory text-xs font-semibold rounded-sm hover:bg-bronze transition-colors active:scale-[0.98]"
              >
                <span>Get directions</span>
              </a>

              <WhatsAppButton
                variant="secondary"
                label="Ask on WhatsApp"
              />
            </div>
          </div>

          {/* Interactive Map & Side Guidance Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-stone p-6 rounded-sm space-y-4">
              <h3 className="font-serif text-lg text-charcoal">
                Interactive Map Location
              </h3>
              <div className="aspect-video w-full bg-ivory border border-stone overflow-hidden rounded-sm relative">
                <iframe
                  title={`${site.name} location map`}
                  src="https://maps.google.com/maps?q=30.7709444,76.7912381+(Rana+Optical)&hl=en&z=17&output=embed"
                  width="100%"
                  height="100%"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-semibold text-bronze hover:underline"
              >
                <span>Open in Google Maps App →</span>
              </a>
            </div>

            <div className="bg-white border border-stone p-6 sm:p-8 rounded-sm space-y-4">
              <h3 className="font-serif text-lg text-charcoal">
                Visiting with a prescription
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed">
                If you already have a prescription from your ophthalmologist or hospital, you can
                bring a digital photo or physical slip. We will measure your pupillary distance and
                frame tilt before ordering or cutting your lenses.
              </p>
              <div className="pt-2 text-xs text-olive space-y-2">
                <p>✓ All optical powers accommodated</p>
                <p>✓ Single-vision, progressive, and bifocal</p>
                <p>✓ Bring your existing frames for re-lensing if desired</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
