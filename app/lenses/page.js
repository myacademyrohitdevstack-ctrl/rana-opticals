import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/data/site";

export const metadata = {
  title: "Prescription Lenses & Coatings — Rana Opticals",
  description:
    "Explore single vision, bifocal, progressive, and anti-reflective lens options accurately dispensed at our store. No medical claims, purely precision optics.",
};

const lensOptions = [
  {
    title: "Single-Vision Lenses",
    type: "Daily Vision",
    description:
      "Crafted with a single focal power across the entire lens surface. Suitable for either dedicated distance vision or reading correction as indicated by your optometrist.",
    details: [
      "Standard and high-index options for thin profiles",
      "Scratch-resistant hard coat included",
      "Available for rimless, semi-rimless, and full-rim frames",
    ],
  },
  {
    title: "Progressive (Multifocal) Lenses",
    type: "Seamless Transition",
    description:
      "A continuous gradient of optical power allowing distance, intermediate (computer distance), and near vision in one pair with no visible line on the lens surface.",
    details: [
      "Smooth power corridor tailored to frame height",
      "Custom pantoscopic tilt and vertex distance fitting",
      "Available in standard and digital freeform surfacing",
    ],
  },
  {
    title: "Bifocal Lenses",
    type: "Dual Segment",
    description:
      "Traditional two-segment design with a defined separation line, providing clear upper distance vision and lower reading vision.",
    details: [
      "D-segment (flat top) configuration",
      "Durable optical resin or mineral glass",
      "Fast adaptation for established bifocal wearers",
    ],
  },
  {
    title: "Anti-Reflective (AR) Coatings",
    type: "Optical Clarity",
    description:
      "Multi-layer surface treatment that significantly reduces glare and reflections from artificial lighting and night-time oncoming headlights.",
    details: [
      "Reduces surface reflections and cosmetic eye glare",
      "Hydrophobic and oleophobic smudge-resistant layers",
      "Easy-to-clean top finish",
    ],
  },
  {
    title: "Blue-Light Filtering Lenses",
    type: "Digital Screen Coating",
    description:
      "Lenses engineered with a specialized surface filter designed to reflect a portion of high-energy visible blue light emitted by screens and LEDs.",
    details: [
      "Subtle warm residual reflex",
      "Integrated UV400 blocking",
      "Non-prescription computer glasses available",
    ],
  },
  {
    title: "Photochromic (Light-Adaptive) Lenses",
    type: "Adaptive Tint",
    description:
      "Lenses that remain transparent indoors and automatically darken into sunglasses upon exposure to outdoor ultraviolet sunlight.",
    details: [
      "Clear indoors, brown or grey outdoors",
      "Automatic UV absorption in outdoor conditions",
      "Compatible with single-vision and progressive designs",
    ],
  },
];

export default function LensesPage() {
  return (
    <div className="py-10 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Intro */}
        <Reveal>
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-widest text-bronze font-medium">
              Dispensing &amp; Glazing
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal mt-2 tracking-tight">
              Prescription Lenses
            </h1>
            <p className="text-sm sm:text-base text-charcoal/75 mt-3 leading-relaxed">
              We mount and calibrate prescription lenses directly according to your optometrist&apos;s
              measurements. Every lens is edged, inspected, and aligned to your frame in-store.
            </p>
            <p className="text-xs text-olive mt-2 font-medium">
              Note: We provide accurate optometric dispensing. We do not make medical or therapeutic claims.
            </p>
          </div>
        </Reveal>

        {/* Lens Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lensOptions.map((lens, idx) => (
            <Reveal key={lens.title} delay={idx * 0.08}>
              <div className="bg-white border border-stone p-6 flex flex-col justify-between h-full rounded-sm">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-bronze font-medium">
                    {lens.type}
                  </span>
                  <h2 className="font-serif text-lg text-charcoal mt-1">
                    {lens.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-charcoal/75 mt-3 leading-relaxed">
                    {lens.description}
                  </p>

                  <ul className="mt-4 space-y-1.5 text-xs text-charcoal/70 border-t border-stone/40 pt-3">
                    {lens.details.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-olive mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-stone/50">
                  <WhatsAppButton
                    productName={`Lens option: ${lens.title}`}
                    label="Ask about lens options"
                    variant="minimal"
                    className="w-full text-xs text-center min-h-[44px]"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* In-Store Dispensing Process */}
        <Reveal delay={0.3}>
          <div className="mt-16 bg-white border border-stone p-6 sm:p-10">
            <h2 className="font-serif text-xl sm:text-2xl text-charcoal">
              How we fit your lenses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 text-xs sm:text-sm text-charcoal/80">
              <div className="space-y-2">
                <span className="font-serif text-lg text-bronze block">01</span>
                <h3 className="font-medium text-charcoal">Pupillary Distance (PD)</h3>
                <p className="text-charcoal/70 leading-relaxed text-xs">
                  We measure the exact distance between the centers of your pupils to align
                  the lens optical center directly in front of your eye.
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-serif text-lg text-bronze block">02</span>
                <h3 className="font-medium text-charcoal">Segment Height Marking</h3>
                <p className="text-charcoal/70 leading-relaxed text-xs">
                  For progressive lenses, we mark your natural resting gaze line onto the demo
                  frame so your reading zone sits precisely where your eye dips.
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-serif text-lg text-bronze block">03</span>
                <h3 className="font-medium text-charcoal">Edge Polishing &amp; Beveling</h3>
                <p className="text-charcoal/70 leading-relaxed text-xs">
                  Each lens is cut to match the frame groove bevel angle, preventing tension
                  stress fractures and frame distortion.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-charcoal/70">
                Have a prescription slip from your eye doctor? Bring it to {site.name} or message us.
              </p>
              <WhatsAppButton label="Ask about lens options" />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
