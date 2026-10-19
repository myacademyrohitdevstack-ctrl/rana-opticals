import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/data/site";

export const metadata = {
  title: "About Our Dispensary — Rana Opticals",
  description: `Learn about ${site.name}. A neighbourhood optical dispensary dedicated to honest craftsmanship, precise lens fitting, and curated frames.`,
};

export default function AboutPage() {
  return (
    <div className="py-10 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Intro */}
        <Reveal>
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-widest text-bronze font-medium">
              About {site.name}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal mt-2 tracking-tight">
              A calmer way to choose eyewear
            </h1>
            <p className="text-sm sm:text-base text-charcoal/75 mt-3 leading-relaxed">
              We started {site.name} with a simple observation: buying glasses should not feel
              like a high-pressure commercial pitch. It should be a thoughtful session where
              your face shape, comfort, and prescription accuracy take priority.
            </p>
          </div>
        </Reveal>

        {/* Narrative & Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-ivory border border-stone">
                <Image
                  src="/images/store-interior.svg"
                  alt={`Fitting and dispensing counter at ${site.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={0.1}>
              <h2 className="font-serif text-2xl text-charcoal">
                Dispensed by hand, checked by eye
              </h2>
              <p className="text-sm text-charcoal/80 leading-relaxed font-light mt-2">
                While ordering frames online has become common, glasses remain a custom medical
                prosthetic that sits on your skull for 16 hours a day. Two millimeters of pupillary
                offset or a slight imbalance across the nasal bridge can lead to eye fatigue and
                slippage.
              </p>
              <p className="text-sm text-charcoal/80 leading-relaxed font-light mt-3">
                We invite you to browse our selection online at your own pace, then drop by our
                counter. You can hold each acetate frame, feel the tension in the barrel hinges,
                and have the temples adjusted specifically to your ear curvature.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone">
                <div>
                  <h3 className="font-serif text-base text-charcoal font-medium">
                    Honest Frame Selection
                  </h3>
                  <p className="text-xs text-charcoal/70 mt-1 leading-relaxed">
                    We only stock shapes and materials that hold up to real everyday wear, from
                    flexible TR90 to Japanese titanium and hand-polished acetate.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-base text-charcoal font-medium">
                    Prescription Glazing
                  </h3>
                  <p className="text-xs text-charcoal/70 mt-1 leading-relaxed">
                    Lenses cut and fitted with zero distortion, verifying your optical center
                    coordinates on a digital vertex gauge.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Store Philosophy Callout */}
        <Reveal delay={0.3}>
          <div className="bg-charcoal text-ivory p-8 sm:p-12 rounded-sm space-y-6">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-bronze font-medium">
                Our Guarantee
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-white mt-1">
                Complimentary lifetime adjustments
              </h2>
              <p className="text-sm text-stone mt-3 leading-relaxed">
                Eyewear relaxes with daily temperature changes and wear. Any frame purchased from
                {site.name} receives free ongoing screw tightening, ultrasonic cleaning, and nose-pad
                replacements whenever you pass by our store.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                href="/eyewear"
                className="min-h-[44px] inline-flex items-center justify-center px-6 py-2.5 bg-bronze text-white text-xs font-semibold rounded-sm hover:bg-white hover:text-charcoal transition-colors"
              >
                Explore frames catalogue
              </Link>
              <Link
                href="/contact"
                className="min-h-[44px] inline-flex items-center justify-center px-6 py-2.5 border border-stone text-stone text-xs font-medium rounded-sm hover:border-white hover:text-white transition-colors"
              >
                Visit our store
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
