import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata = {
  title: "Privacy Policy — Rana Opticals",
  description: `Privacy policy and data handling principles for ${site.name} visitors and catalogue users.`,
};

export default function PrivacyPage() {
  return (
    <div className="py-10 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="mb-10">
            <span className="text-xs uppercase tracking-widest text-bronze font-medium">
              Legal &amp; Transparency
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-charcoal mt-2 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-charcoal/60 mt-2">
              Last updated: October 2026
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-white border border-stone p-6 sm:p-10 space-y-8 text-sm text-charcoal/80 leading-relaxed rounded-sm">
            <section className="space-y-3">
              <h2 className="font-serif text-lg text-charcoal">
                1. Overview &amp; Website Purpose
              </h2>
              <p>
                This website is operated by <strong>{site.name}</strong> as an online product showcase
                catalogue. We do not operate an online shopping cart, do not collect credit or debit card
                information, and do not process electronic payments on this website.
              </p>
            </section>

            <section className="space-y-3 border-t border-stone/50 pt-6">
              <h2 className="font-serif text-lg text-charcoal">
                2. Information We Collect
              </h2>
              <p>
                Browsing our catalogue is completely anonymous. We do not require you to create an account,
                and we do not collect personal registration details to view our frames or lens guides.
              </p>
              <p>
                When you choose to contact us through WhatsApp or direct telephone, you provide your phone
                number and any enquiry message you voluntarily send. This information is used strictly to
                answer your specific inquiry regarding frame availability, lens options, or shop directions.
              </p>
            </section>

            <section className="space-y-3 border-t border-stone/50 pt-6">
              <h2 className="font-serif text-lg text-charcoal">
                3. WhatsApp &amp; Third-Party Services
              </h2>
              <p>
                When you tap our &ldquo;Ask about this frame&rdquo; or WhatsApp enquiry links, you are directed
                to WhatsApp (provided by Meta Platforms, Inc.). Your interaction with WhatsApp is governed by
                their respective privacy policies. We do not sell, rent, or share your contact information with
                third-party advertisers or data brokers.
              </p>
            </section>

            <section className="space-y-3 border-t border-stone/50 pt-6">
              <h2 className="font-serif text-lg text-charcoal">
                4. Cookies &amp; Analytics
              </h2>
              <p>
                This site does not use persistent tracking cookies, commercial ad trackers, or third-party
                behavioral profiling pixels. Essential technical cookies may be used purely for website
                performance and server stability.
              </p>
            </section>

            <section className="space-y-3 border-t border-stone/50 pt-6">
              <h2 className="font-serif text-lg text-charcoal">
                5. Questions &amp; Contact
              </h2>
              <p>
                If you have any questions regarding our privacy practices or wish to have your contact details
                removed from past communication records, please reach out to us:
              </p>
              <address className="not-italic text-xs text-charcoal space-y-1 bg-ivory p-4 border border-stone rounded-sm">
                <p className="font-semibold">{site.name}</p>
                <p>{site.address}</p>
                <p>Phone: +{site.phone}</p>
              </address>
            </section>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
