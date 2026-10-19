import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { site } from "@/data/site";

export default function StoreStory() {
  return (
    <section className="py-16 md:py-24 border-b border-stone bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal>
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-ivory border border-stone">
                <Image
                  src="/images/store-interior.svg"
                  alt={`Inside ${site.name} dispensary and fitting area`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* Story Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <Reveal>
              <span className="text-xs uppercase tracking-widest text-bronze font-medium">
                Our Philosophy
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal mt-1">
                Precision optometry meets thoughtful craftsmanship
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-base text-charcoal/80 leading-relaxed font-light">
                At {site.name}, choosing eyewear is never rushed. A pair of glasses sits on
                your face all day — defining how you experience the world and how others see you.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="border-l-2 border-bronze pl-4">
                  <h3 className="font-serif text-lg text-charcoal">
                    Personalized Fitting
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/70 mt-1 leading-relaxed">
                    Nose bridge measurement, temple length adjustment, and facial geometry analysis for slip-free comfort.
                  </p>
                </div>
                <div className="border-l-2 border-olive pl-4">
                  <h3 className="font-serif text-lg text-charcoal">
                    Optical Accuracy
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/70 mt-1 leading-relaxed">
                    Custom centering of optical axes to ensure zero distortion and seamless vision.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="pt-4 flex items-center space-x-6">
                <Link
                  href="/about"
                  className="text-sm font-medium text-charcoal hover:text-bronze underline underline-offset-4"
                >
                  Read our dispensing approach
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-medium text-olive hover:text-charcoal"
                >
                  Locate store →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
