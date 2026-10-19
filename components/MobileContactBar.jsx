import { site } from "@/data/site";
import { whatsappLink } from "@/lib/whatsapp";

export default function MobileContactBar() {
  const waUrl = whatsappLink({
    phone: site.whatsapp,
    productName: null,
  });

  return (
    <aside
      aria-label="Quick contact"
      className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-ivory/95 backdrop-blur-md border-t border-stone px-4 py-2.5 shadow-lg"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
        {/* WhatsApp Action */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[44px] flex items-center justify-center px-3 py-2 text-xs font-medium bg-charcoal text-ivory rounded-sm hover:bg-bronze transition-colors active:scale-[0.98]"
        >
          <svg
            className="w-4 h-4 mr-1.5 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
          <span>Chat on WhatsApp</span>
        </a>

        {/* Directions Action */}
        <a
          href={site.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[44px] flex items-center justify-center px-3 py-2 text-xs font-medium border border-charcoal text-charcoal bg-white rounded-sm hover:border-bronze hover:text-bronze transition-colors active:scale-[0.98]"
        >
          <svg
            className="w-4 h-4 mr-1.5 shrink-0"
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
      </div>
    </aside>
  );
}
