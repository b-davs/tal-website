import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, FAQPageJsonLd } from "@/components/JsonLd";
import FAQAccordion from "@/components/FAQAccordion";
import { pricingFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Pricing — Transparent Custom Apparel Pricing",
  description:
    "Understand what drives custom apparel pricing. No hidden fees, no surprises. Screen printing, embroidery, DTF, DTG, and promotional items — get a free quote today.",
};

const costFactors = [
  {
    title: "Decoration Method",
    description:
      "Screen printing, embroidery, DTF, and DTG each have different cost structures. Screen printing is cheapest at volume; DTG and DTF are better for small runs.",
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: "Quantity",
    description:
      "More pieces = lower per-unit cost. Setup costs (screens, digitizing) spread across larger runs. The biggest price drops happen at 72+, 144+, and 500+ pieces.",
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
    ),
  },
  {
    title: "Garment Choice",
    description:
      "The blank garment is a major part of your cost. A basic Gildan tee costs less than a premium Bella+Canvas or a Nike polo. We'll help you find the right fit for your budget.",
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    title: "Design Complexity",
    description:
      "Number of colors, print locations (front, back, sleeves), print size, and specialty inks all affect cost. Simpler designs = lower price. We'll always suggest the most cost-effective approach.",
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
      </svg>
    ),
  },
];

const methodDrivers = [
  {
    method: "Screen Printing",
    href: "/services/screen-printing",
    factors: [
      "Number of ink colors (each color = separate screen)",
      "Print locations (front, back, sleeve — each priced separately)",
      "Print size (oversized prints use more ink and larger screens)",
      "Specialty inks (metallic, glow-in-the-dark, puff) cost more",
      "Setup fee per color (waived on reorders)",
    ],
    scenario:
      "Example: 100 tees with a 2-color front print on Gildan 5000 will cost significantly less per unit than 24 tees with a 4-color front + back print on Bella+Canvas 3001.",
  },
  {
    method: "Embroidery",
    href: "/services/embroidery",
    factors: [
      "Stitch count (more detail = more stitches = higher cost)",
      "Number of embroidery locations",
      "Thread colors (standard colors included; specialty threads extra)",
      "One-time digitizing fee for new designs (waived on reorders)",
      "Garment type (hats and bags may require special handling)",
    ],
    scenario:
      "Example: A simple left-chest logo (5,000 stitches) on 50 polos is very affordable. A large back design (15,000+ stitches) on jackets costs more due to stitch count and garment cost.",
  },
  {
    method: "DTF Printing",
    href: "/services/dtf-printing",
    factors: [
      "Transfer size (measured in square inches)",
      "No color limits — full-color prints at no extra cost",
      "No setup fees — pay per piece from piece one",
      "Gang-sheet efficiency (multiple small transfers on one sheet saves cost)",
      "Garment type has minimal impact (works on almost any fabric)",
    ],
    scenario:
      "Example: DTF is ideal for 12–50 piece runs with complex, multi-color artwork. At higher volumes (100+), screen printing often becomes more cost-effective.",
  },
  {
    method: "DTG Printing",
    href: "/services/dtg-printing",
    factors: [
      "Print size (larger prints use more ink)",
      "White ink usage (printing on darks requires a white underbase layer)",
      "No setup fees — print one piece or one hundred",
      "Cotton content (DTG works best on 100% cotton or high-cotton blends)",
      "Resolution and detail level",
    ],
    scenario:
      "Example: A full-color front print on a white tee is DTG's sweet spot for small runs. Dark garments cost more due to the white ink layer required under the colors.",
  },
  {
    method: "Promotional Items",
    href: "/services/promotional-items",
    factors: [
      "Product selection (drinkware, bags, pens, tech — wide price range)",
      "Decoration method on the item (pad print, laser engrave, full wrap)",
      "Quantity tiers (most promo items have volume breakpoints)",
      "Setup/mold fees for custom shapes or packaging",
      "Packaging options (individual boxes, custom kitting)",
    ],
    scenario:
      "Example: 200 laser-engraved stainless tumblers cost more per piece than 500 single-color pad-printed pens, but both are cost-effective at their respective volumes.",
  },
];

const quantityBreakpoints = [
  { range: "1–23 pieces", impact: "Highest per-unit cost. Best with DTG or DTF (no setup fees)." },
  { range: "24–71 pieces", impact: "Screen printing becomes viable. Setup costs spread across more units." },
  { range: "72–143 pieces", impact: "Meaningful price drop for screen printing. Embroidery per-unit cost drops too." },
  { range: "144–499 pieces", impact: "Strong volume pricing across all methods. Best balance of cost and flexibility." },
  { range: "500+ pieces", impact: "Best per-unit rates. Additional discounts may apply. Ideal for programs and recurring orders." },
];

const included = [
  "Digital mockup proof with unlimited revisions",
  "Simple art cleanup and color matching",
  "Quality inspection on every piece",
  "Standard packing and labeling",
  "Order tracking and delivery confirmation",
  "File storage for easy reorders",
];

const notIncluded = [
  "Complex design creation or graphic design from scratch",
  "Specialty inks (metallic, glow, puff — quoted per project)",
  "Individual poly-bagging or custom packaging (available as add-on)",
  "Custom tags or relabeling (available as add-on)",
  "Rush production fees (quoted per project based on timeline)",
  "Shipping costs (calculated based on order size and destination)",
];

export default function PricingPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Pricing", href: "/pricing" },
        ]}
      />
      <FAQPageJsonLd faqs={pricingFaqs} />

      {/* Hero */}
      <section className="bg-[var(--gray-900)] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Pricing
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Transparent Pricing, No Surprises
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--gray-300)]">
            Every project is unique, so we quote individually. Here&apos;s exactly
            what drives your cost — no hidden fees, no guesswork.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* How We Price — 4 cost factors */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-[var(--gray-900)] sm:text-3xl">
            Four Things That Determine Your Price
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-[var(--gray-500)]">
            Regardless of method, these four factors shape every quote.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {costFactors.map((factor) => (
              <div
                key={factor.title}
                className="rounded-xl border border-[var(--gray-200)] p-6"
              >
                <div className="mb-4">{factor.icon}</div>
                <h3 className="text-lg font-semibold text-[var(--gray-900)]">
                  {factor.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--gray-500)]">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Drivers by Method */}
      <section className="bg-[var(--gray-50)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-[var(--gray-900)] sm:text-3xl">
            Price Drivers by Method
          </h2>
          <p className="mt-2 text-base text-[var(--gray-500)]">
            Each decoration method has its own cost factors. Expand a method to
            see what affects pricing.
          </p>
          <div className="mt-8 space-y-4">
            {methodDrivers.map((method) => (
              <details
                key={method.method}
                className="group rounded-xl border border-[var(--gray-200)] bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-lg font-semibold text-[var(--gray-900)]">
                  {method.method}
                  <span
                    aria-hidden="true"
                    className="ml-4 text-[var(--gray-400)] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <ul className="space-y-2">
                    {method.factors.map((factor) => (
                      <li
                        key={factor}
                        className="flex items-start gap-2 text-sm text-[var(--gray-700)]"
                      >
                        <span className="mt-0.5 text-primary font-bold">$</span>
                        {factor}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 rounded-lg bg-[var(--gray-50)] p-4 text-sm italic text-[var(--gray-600)]">
                    {method.scenario}
                  </p>
                  <Link
                    href={method.href}
                    className="mt-4 inline-block text-sm font-medium text-primary hover:text-primary-dark"
                  >
                    Learn more about {method.method.toLowerCase()} &rarr;
                  </Link>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Quantity Breakpoints */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-[var(--gray-900)] sm:text-3xl">
            How Quantity Affects Per-Unit Cost
          </h2>
          <p className="mt-2 text-base text-[var(--gray-500)]">
            Ordering more doesn&apos;t just save a little — it can significantly
            reduce your cost per piece.
          </p>
          <div className="mt-8 overflow-hidden rounded-xl border border-[var(--gray-200)]">
            <table className="w-full text-left text-sm">
              <thead className="bg-[var(--gray-100)]">
                <tr>
                  <th className="px-6 py-3 font-semibold text-[var(--gray-900)]">
                    Quantity Range
                  </th>
                  <th className="px-6 py-3 font-semibold text-[var(--gray-900)]">
                    Pricing Impact
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--gray-100)] bg-white">
                {quantityBreakpoints.map((bp) => (
                  <tr key={bp.range}>
                    <td className="px-6 py-4 font-medium text-[var(--gray-900)] whitespace-nowrap">
                      {bp.range}
                    </td>
                    <td className="px-6 py-4 text-[var(--gray-600)]">
                      {bp.impact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What's Included / Not Included */}
      <section className="bg-[var(--gray-50)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="rounded-xl border border-green-200 bg-green-50 p-6">
            <h2 className="text-lg font-semibold text-green-900">
              Included in Every Quote
            </h2>
            <ul className="mt-4 space-y-3">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-green-800"
                >
                  <span className="mt-0.5 text-green-600">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-[var(--gray-200)] bg-white p-6">
            <h2 className="text-lg font-semibold text-[var(--gray-900)]">
              Priced Separately (If Needed)
            </h2>
            <ul className="mt-4 space-y-3">
              {notIncluded.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-[var(--gray-600)]"
                >
                  <span className="mt-0.5 text-[var(--gray-400)]">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[var(--gray-900)] sm:text-3xl">
            Pricing FAQs
          </h2>
          <div className="mt-8">
            <FAQAccordion faqs={pricingFaqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--gray-900)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Ready for a Quote?
          </h2>
          <p className="mt-4 text-base text-[var(--gray-300)]">
            Tell us about your project and get an accurate, itemized quote —
            usually within 2 hours. Free, no obligation.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
