import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-20 md:py-32 text-center">
      <div className="max-w-md mx-auto px-4">
        <span className="text-xs uppercase tracking-widest text-bronze font-medium">
          404 Error
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-charcoal mt-2">
          Frame or page not found
        </h1>
        <p className="text-sm text-charcoal/70 mt-3 leading-relaxed">
          The eyewear item or page you are looking for may have been updated or moved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/eyewear"
            className="min-h-[44px] px-6 py-2.5 bg-charcoal text-ivory text-xs font-semibold rounded-sm hover:bg-bronze transition-colors"
          >
            Browse frames catalogue
          </Link>
          <Link
            href="/"
            className="min-h-[44px] px-6 py-2.5 border border-stone text-charcoal text-xs font-medium rounded-sm hover:border-charcoal transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
