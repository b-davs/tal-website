import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom apparel decoration services: screen printing, embroidery, DTF printing, DTG printing, and promotional items. Find the right method for your project.",
};

const services = [
  {
    title: "Screen Printing",
    href: "/services/screen-printing",
    description:
      "The gold standard for bulk orders. Vibrant, long-lasting prints that hold up wash after wash. Best for large quantities with 1–6 colors.",
    badge: "Most popular for bulk",
  },
  {
    title: "Embroidery",
    href: "/services/embroidery",
    description:
      "Stitched logos with a premium, textured look. Ideal for polos, hats, jackets, and workwear where durability and professionalism matter.",
    badge: "Premium finish",
  },
  {
    title: "DTF Printing",
    href: "/services/dtf-printing",
    description:
      "Full-color transfers that work on virtually any fabric including polyester. Great for complex designs, small-to-medium runs, and mixed garment types.",
    badge: "Most versatile",
  },
  {
    title: "DTG Printing",
    href: "/services/dtg-printing",
    description:
      "Direct-to-garment printing with photographic quality. No minimums on select products — perfect for detailed, multi-color artwork on cotton.",
    badge: "No minimums",
  },
  {
    title: "Promotional Items",
    href: "/services/promotional-items",
    description:
      "Branded merchandise beyond apparel — drinkware, bags, pens, tech accessories, and custom kits for onboarding, trade shows, and events.",
    badge: "Full brand kits",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[var(--gray-900)] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--gray-300)]">
            Every decoration method has a sweet spot. We help you choose the
            right one based on your product, quantity, timeline, and budget.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-6">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex flex-col gap-4 rounded-xl border border-[var(--gray-200)] p-6 transition-all hover:border-primary hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-[var(--gray-900)] group-hover:text-primary">
                    {service.title}
                  </h3>
                  <span className="rounded-full bg-[var(--gray-100)] px-3 py-0.5 text-xs font-medium text-[var(--gray-600)]">
                    {service.badge}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--gray-500)]">
                  {service.description}
                </p>
              </div>
              <span className="flex-shrink-0 text-sm font-semibold text-primary">
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Method comparison teaser */}
      <section className="bg-[var(--gray-50)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-[var(--gray-900)] sm:text-3xl">
            Not Sure Which Method to Choose?
          </h2>
          <p className="mt-4 text-base text-[var(--gray-500)]">
            The best method depends on your design complexity, garment type,
            order size, and budget. Compare all four methods side by side, or
            contact us for a personalized recommendation.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/resources/method-comparison"
              className="w-full rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto"
            >
              Compare Methods
            </Link>
            <Link
              href="/contact"
              className="w-full rounded-lg border border-[var(--gray-600)] px-8 py-4 text-base font-semibold text-[var(--gray-700)] transition-colors hover:bg-[var(--gray-100)] sm:w-auto"
            >
              Get Expert Guidance
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
