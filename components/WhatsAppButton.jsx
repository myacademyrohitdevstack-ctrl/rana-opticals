import { site } from "@/data/site";
import { whatsappLink } from "@/lib/whatsapp";

export default function WhatsAppButton({
  productName,
  productUrl,
  label = "Ask on WhatsApp",
  className = "",
  variant = "primary",
  showIcon = true,
  ariaLabel,
}) {
  const url = whatsappLink({
    phone: site.whatsapp,
    productName,
    productUrl,
  });

  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors duration-200 min-h-[44px] px-5 py-2.5 text-sm active:scale-[0.98]";

  const variants = {
    primary:
      "bg-charcoal text-ivory hover:bg-bronze hover:text-white border border-charcoal hover:border-bronze",
    secondary:
      "bg-transparent text-charcoal border border-charcoal hover:border-bronze hover:text-bronze",
    olive:
      "bg-olive text-white hover:bg-charcoal border border-olive hover:border-charcoal",
    minimal:
      "bg-stone/30 text-charcoal hover:bg-stone hover:text-charcoal border border-stone",
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel || label}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
    >
      {showIcon && (
        <svg
          className="w-4 h-4 mr-2 shrink-0"
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
      )}
      <span>{label}</span>
    </a>
  );
}
