import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/formatPrice";
import { site } from "@/data/site";
import { whatsappLink } from "@/lib/whatsapp";

export default function ProductCard({ product }) {
  const productUrl = `${site.url}/eyewear/${product.slug}`;
  const waUrl = whatsappLink({
    phone: site.whatsapp,
    productName: product.name,
    productUrl,
  });

  return (
    <article className="bg-white border border-stone flex flex-col h-full group transition-colors hover:border-bronze">
      {/* Product Image */}
      <Link
        href={`/eyewear/${product.slug}`}
        className="relative aspect-[4/5] w-full overflow-hidden bg-ivory block focus:outline-none focus:ring-2 focus:ring-bronze"
        aria-label={`View details for ${product.name}`}
      >
        <Image
          src={product.images[0] || "/images/placeholder.svg"}
          alt={`${product.name} frame in ${product.colour}`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-charcoal text-ivory text-[10px] uppercase tracking-wider px-2 py-0.5 font-medium">
            New
          </span>
        )}
      </Link>

      {/* Product Details */}
      <div className="p-3 sm:p-4 flex flex-col flex-1">
        <p className="text-[11px] text-olive uppercase tracking-wider">
          {product.shape} · {product.material}
        </p>

        <h3 className="font-serif text-sm sm:text-base text-charcoal mt-1 line-clamp-1 group-hover:text-bronze transition-colors">
          <Link href={`/eyewear/${product.slug}`}>
            {product.name}
          </Link>
        </h3>

        <div className="mt-2 text-xs sm:text-sm font-medium text-charcoal">
          {formatPrice(product.price)}
        </div>

        {/* Action Button */}
        <div className="mt-4 pt-3 border-t border-stone/50">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ask about ${product.name} on WhatsApp`}
            className="w-full min-h-[44px] inline-flex items-center justify-center px-3 py-2 text-xs font-medium bg-ivory text-charcoal border border-stone hover:border-charcoal hover:bg-charcoal hover:text-ivory transition-colors active:scale-[0.98] rounded-sm"
          >
            <svg
              className="w-3.5 h-3.5 mr-1.5 shrink-0"
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
            <span>Ask about this frame</span>
          </a>
        </div>
      </div>
    </article>
  );
}
