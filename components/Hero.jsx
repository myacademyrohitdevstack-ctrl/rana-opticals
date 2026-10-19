import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-12 md:py-24 border-b border-stone">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Editorial Text Block (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <span className="inline-block text-xs uppercase tracking-widest text-bronze font-medium">
                Local Optical Dispensary
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal tracking-tight leading-[1.15]">
                A clearer view. <br />
                <span className="italic font-normal">A style that&apos;s yours.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-charcoal/80 max-w-xl font-light leading-relaxed">
                Carefully curated optical frames, sunglasses, and custom lens dispensing.
                Browse our catalogue online, then visit in person for personal fitting and
                consultation.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/eyewear"
                  className="min-h-[44px] inline-flex items-center justify-center px-6 py-3 bg-charcoal text-ivory font-medium text-sm hover:bg-bronze transition-colors rounded-sm active:scale-[0.98]"
                >
                  Explore eyewear
                </Link>
                <Link
                  href="/contact"
                  className="min-h-[44px] inline-flex items-center justify-center px-6 py-3 border border-charcoal text-charcoal font-medium text-sm hover:border-bronze hover:text-bronze transition-colors rounded-sm active:scale-[0.98]"
                >
                  Visit our store
                </Link>
              </div>
            </Reveal>

            {/* Quick trust metrics / hours */}
            <Reveal delay={0.4}>
              <div className="pt-6 border-t border-stone grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-charcoal/80">
                <div>
                  <span className="block font-medium text-charcoal">Location</span>
                  <span className="text-olive truncate block">{site.address.split("(")[0]}</span>
                </div>
                <div>
                  <span className="block font-medium text-charcoal">Fitting</span>
                  <span className="text-olive">In-store dispensing</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="block font-medium text-charcoal">Consultation</span>
                  <span className="text-olive">Walk-ins welcome</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Asymmetric Image Block (5 cols on lg) */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone/30 border border-stone">
                  <Image
                    src="/images/hero-store.svg"
                    alt={`${site.name} showcase frames on display`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                    className="object-cover object-center"
                  />
                </div>
                {/* Asymmetric decorative badge */}
                <div className="absolute -bottom-4 -left-4 bg-white border border-stone p-4 hidden sm:block max-w-[200px] shadow-sm">
                  <p className="font-serif text-sm text-charcoal font-medium">
                    Hand-inspected frames
                  </p>
                  <p className="text-[11px] text-olive mt-0.5">
                    Premium hinges &amp; custom lenses
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
