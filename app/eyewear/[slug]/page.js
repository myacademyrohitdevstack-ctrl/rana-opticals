import { notFound } from "next/navigation";
import Link from "next/link";
import ProductGallery from "@/components/ProductGallery";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import { products } from "@/data/products";
import { site } from "@/data/site";
import { formatPrice } from "@/lib/formatPrice";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) {
    return { title: "Frame Not Found" };
  }

  return {
    title: `${product.name} — ${product.shape} ${product.material} Frame`,
    description: `Inspect ${product.name}. Handcrafted ${product.material} ${product.shape} eyewear in ${product.colour}. Available at ${site.name}.`,
    openGraph: {
      title: `${product.name} | ${site.name}`,
      description: `Inquire about ${product.name} at ${site.name}.`,
      images: [{ url: product.images[0] || "/images/placeholder.svg" }],
    },
  };
}

export default function ProductDetailPage({ params }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const productUrl = `${site.url}/eyewear/${product.slug}`;

  return (
    <div className="py-8 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-charcoal/70">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-bronze">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/eyewear" className="hover:text-bronze">
                Catalogue
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium truncate" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>

        {/* Product Grid: Gallery + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Gallery Column (7 cols on lg) */}
          <div className="lg:col-span-7">
            <Reveal>
              <ProductGallery images={product.images} name={product.name} />
            </Reveal>
          </div>

          {/* Details Column (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.1}>
              <div className="border-b border-stone pb-6">
                <span className="text-xs uppercase tracking-widest text-olive font-medium">
                  {product.category}
                </span>

                <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal mt-2 tracking-tight">
                  {product.name}
                </h1>

                <div className="mt-4 flex items-baseline space-x-3">
                  <span className="text-xl sm:text-2xl font-serif text-charcoal font-medium">
                    {formatPrice(product.price)}
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Specifications */}
            <Reveal delay={0.2}>
              <div className="space-y-3">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-bronze">
                  Frame Specifications
                </h2>
                <dl className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs">
                  <div className="bg-white border border-stone/60 p-3 rounded-sm">
                    <dt className="text-charcoal/60 uppercase tracking-wider text-[10px]">
                      Silhouette Shape
                    </dt>
                    <dd className="font-medium text-charcoal mt-0.5">
                      {product.shape}
                    </dd>
                  </div>

                  <div className="bg-white border border-stone/60 p-3 rounded-sm">
                    <dt className="text-charcoal/60 uppercase tracking-wider text-[10px]">
                      Frame Material
                    </dt>
                    <dd className="font-medium text-charcoal mt-0.5">
                      {product.material}
                    </dd>
                  </div>

                  <div className="bg-white border border-stone/60 p-3 rounded-sm">
                    <dt className="text-charcoal/60 uppercase tracking-wider text-[10px]">
                      Colourway
                    </dt>
                    <dd className="font-medium text-charcoal mt-0.5">
                      {product.colour}
                    </dd>
                  </div>

                  <div className="bg-white border border-stone/60 p-3 rounded-sm">
                    <dt className="text-charcoal/60 uppercase tracking-wider text-[10px]">
                      Recommended Style
                    </dt>
                    <dd className="font-medium text-charcoal mt-0.5">
                      {product.style}
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>

            {/* WhatsApp Call To Action */}
            <Reveal delay={0.3}>
              <div className="space-y-3 pt-2">
                <WhatsAppButton
                  productName={product.name}
                  productUrl={productUrl}
                  label="Enquire on WhatsApp"
                  className="w-full text-center py-3.5"
                />

                {/* Explicit Requirement Note from prompt */}
                <p className="text-xs text-charcoal/70 italic text-center">
                  Confirm price, stock and lens options with the store.
                </p>
              </div>
            </Reveal>

            {/* In-store Dispensing & Fitting Guarantee */}
            <Reveal delay={0.4}>
              <div className="bg-white border border-stone p-5 space-y-3 rounded-sm">
                <h3 className="font-serif text-sm text-charcoal font-medium">
                  Try on at {site.name}
                </h3>
                <p className="text-xs text-charcoal/75 leading-relaxed">
                  We verify nose-bridge clearance, pupillary distance, and ear curvature
                  in-person before cutting your lenses.
                </p>
                <div className="pt-2 text-xs">
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bronze font-medium hover:underline inline-flex items-center"
                  >
                    <span>Get directions to store</span>
                    <svg
                      className="w-3.5 h-3.5 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
