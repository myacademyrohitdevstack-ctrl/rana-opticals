# Optical Shop Website

Mobile-first showcase catalogue for a local optical shop. Visitors browse frames, then enquire on WhatsApp or visit the store. **No cart, no payments, no backend.**

## Stack (fixed — do not add others)

- Next.js (App Router), **JavaScript only** (`.js`/`.jsx`, no TypeScript, no `.ts`/`.tsx`)
- Tailwind CSS
- Framer Motion (only package added beyond the defaults)
- Data: local JS files in `/data`. No database, no API routes.

```bash
npx create-next-app@latest optical-shop --js --tailwind --app --eslint --no-src-dir --import-alias "@/*"
cd optical-shop && npm i framer-motion
```

## Rules for the AI agent (token-saving)

1. Build in the order of **Build Steps** below. One step per prompt. Do not re-read the whole repo.
2. Only edit the files named in the current step. No refactors, no extra features, no extra libraries.
3. Reply with code only. No long explanations, no summaries of unchanged files.
4. Reuse components. Never duplicate markup.
5. All business details come from `data/site.js`. Never hardcode them in components.
6. Never invent reviews, prices, years in business, certifications, or addresses. Use the placeholders in `data/site.js`.
7. Mobile first: write base classes for a ~375px screen, then add `md:` / `lg:` only to enhance.

## Design tokens

Add to `tailwind.config.js` under `theme.extend.colors`:

| Name | Hex | Use |
|---|---|---|
| `ivory` | `#F5F1E9` | page background |
| `charcoal` | `#242722` | text, dark sections |
| `bronze` | `#A77B50` | accents only, sparingly |
| `stone` | `#DCD5C9` | borders, image placeholders |
| `olive` | `#687466` | secondary accent |
| `white` | `#FFFFFF` | cards |

Fonts via `next/font/google`: **DM Serif Display** (headlines, `font-serif`) and **Inter** (everything else, `font-sans`).

Style: generous whitespace, no gradients, no heavy shadows, no neon, square or lightly rounded corners (not rounded on everything). Premium but not intimidating.

## Mobile-first requirements

- No horizontal scroll at 320px.
- Touch targets at least 44px high.
- Header is slim: small logo and a menu icon. Menu closes after a link is tapped.
- Product grid: 2 columns on mobile, 3 on `md`, 4 on `lg`.
- Filters open in a **bottom sheet** on mobile, with Apply and Clear buttons.
- Compact sticky bottom bar (WhatsApp + Directions) on mobile only. It must not cover content (add bottom padding to the page).
- Use `next/image` with fixed aspect ratio (`aspect-[4/5]`), `sizes`, and lazy loading. Priority only on the hero image.

## Folder structure

```
app/
  layout.js            fonts, metadata, Header, Footer, MobileContactBar
  page.js              Home
  eyewear/page.js      Catalogue (filters via ?category=)
  eyewear/[slug]/page.js   Product detail
  lenses/page.js
  about/page.js
  contact/page.js
  privacy/page.js
components/
  Header.jsx  MobileMenu.jsx  Footer.jsx  MobileContactBar.jsx
  Hero.jsx  CollectionGrid.jsx  FeaturedFrames.jsx  StoreStory.jsx
  Reviews.jsx  StoreLocation.jsx
  ProductCard.jsx  ProductGrid.jsx  ProductFilters.jsx  ProductGallery.jsx
  WhatsAppButton.jsx
  Reveal.jsx           reusable Framer Motion wrapper
data/
  site.js  products.js  collections.js
lib/
  whatsapp.js  formatPrice.js
public/images/
```

## Data files

**`data/site.js`** (placeholders — confirm every value with the owner before launch)

```js
export const site = {
  name: "Shop Name",            // TODO confirm
  tagline: "A clearer view. A style that's yours.",
  phone: "91XXXXXXXXXX",        // digits only, no +, spaces or dashes
  whatsapp: "91XXXXXXXXXX",
  address: "TODO verified address",
  hours: "TODO opening hours",
  mapsUrl: "TODO Google Maps link",
  url: "https://example.com",
};
```

**`data/products.js`** — 6 dummy items to start, same shape for all:

```js
export const products = [
  {
    slug: "everyday-classic",
    name: "The Everyday Classic",
    category: "eyeglasses",     // eyeglasses | sunglasses | premium
    shape: "Rectangular",
    material: "Acetate",
    colour: "Black",
    style: "Unisex",
    price: null,                // number or null → shows "Price on enquiry"
    images: ["/images/placeholder.jpg"],
    isNew: false,
    featured: true,
  },
];
```

**`data/collections.js`** — Everyday eyeglasses, Sunglasses, Premium frames, Prescription lenses. Each has `title`, `image`, and `href` (e.g. `/eyewear?category=sunglasses`).

## Core helpers

**`lib/whatsapp.js`**

```js
export function whatsappLink({ phone, productName, productUrl }) {
  const text = [
    productName ? `Hi, I'm interested in ${productName}.` : "Hi, I'd like some help choosing frames.",
    "Could you share the price and availability?",
    productUrl ? `Product: ${productUrl}` : "",
  ].filter(Boolean).join("\n");
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
```

Use it as a normal `<a href target="_blank" rel="noopener noreferrer">`. No custom messaging backend.

**`lib/formatPrice.js`** — returns `₹ 1,999` (Indian number format) or `"Price on enquiry"` when `null`.

**`components/Reveal.jsx`** — a `"use client"` wrapper using `motion.div` with `initial={{opacity:0,y:16}}`, `whileInView={{opacity:1,y:0}}`, `viewport={{once:true}}`, `transition={{duration:0.5}}`. Honour reduced motion with `useReducedMotion()` (skip the movement). Wrap sections with it; do not add other animations except a small hover or tap scale on buttons and cards.

## Build steps (one per prompt)

1. **Setup** — Tailwind tokens, fonts, `layout.js`, `data/` and `lib/` files above, `Reveal.jsx`.
2. **Layout** — `Header`, `MobileMenu`, `Footer`, `MobileContactBar`.
3. **Home** — `Hero` (asymmetric editorial layout; headline "A clearer view. A style that's yours."; CTAs "Explore eyewear" and "Visit our store"), `CollectionGrid`, `FeaturedFrames` (4 items, 2 columns on mobile), `StoreStory`, `Reviews` (placeholder structure only, no fake reviews), `StoreLocation`.
4. **Catalogue** — `ProductCard`, `ProductGrid`, `ProductFilters`. Intro "Find your everyday pair". Category tabs, filters (shape, material, colour, style, price), sort (Featured, Newest, Price low→high), "Load more". Filtering is client-side and instant. Cards have an image, name, `shape · material`, price, and an "Ask about this frame" button. No heart, cart, compare, or quick-view icons.
5. **Product detail** — `/eyewear/[slug]`: `ProductGallery`, specs, price or "Price on enquiry", "Enquire on WhatsApp" button. Use `generateStaticParams` for slugs. Note: "Confirm price, stock and lens options with the store."
6. **Other pages** — Lenses (only options the shop actually offers; **no medical claims** or promises about eye strain), About, Contact (address, hours, tel link, WhatsApp, "Get directions"), Privacy.
7. **SEO and polish** — `metadata` per page, `LocalBusiness` JSON-LD from `site.js`, descriptive `alt` text, `sitemap.js`, `robots.js`, check the Lighthouse mobile score.

## Microcopy

Use specific button labels: "Ask about this frame", "Explore sunglasses", "Get directions", "Ask about lens options". Never "Submit" or "Click here".

## Accessibility checklist

Semantic HTML, one `h1` per page, alt text on every image, labelled icon-only buttons, keyboard-operable menu and filter sheet (focus trap, `Esc` closes), sufficient contrast, reduced-motion respected.

## Before launch

- [ ] Replace every placeholder in `data/site.js` with verified details
- [ ] Replace placeholder images with real, consistently photographed products (WebP, one neutral backdrop)
- [ ] Real shop photos and genuine reviews, with permission
- [ ] Test on a real Android phone
- [ ] Domain, HTTPS, Google Search Console, link the site from the Google Business Profile

## Later (only if the client asks)

Frame style finder quiz, gallery lightbox, admin panel for products, cart and payments.

## Run

```bash
npm run dev      # http://localhost:3000
npm run build
```
