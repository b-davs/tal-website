import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The Apparel Lab is a B2B custom apparel decoration company specializing in screen printing, embroidery, DTF, DTG, and promotional items for businesses across the US.",
};

const capabilities = [
  {
    title: "Screen Printing",
    description: "Multi-station automatic and manual presses for runs of any size.",
  },
  {
    title: "Embroidery",
    description: "Multi-head commercial embroidery machines with precision digitizing.",
  },
  {
    title: "DTF Printing",
    description: "Wide-format DTF printers for full-color transfers on any fabric.",
  },
  {
    title: "DTG Printing",
    description: "Industrial direct-to-garment printers for photographic-quality cotton prints.",
  },
  {
    title: "Heat Press",
    description: "Commercial heat presses for transfers, vinyl, and DTF application.",
  },
  {
    title: "Finishing & Kitting",
    description: "Folding, bagging, labeling, and custom kit assembly in-house.",
  },
];

const values = [
  {
    title: "Transparency",
    description:
      "No hidden fees, no surprises. We explain what drives your cost and deliver exactly what we quote.",
  },
  {
    title: "Quality",
    description:
      "Every piece is inspected before it ships. We stand behind our work with a satisfaction guarantee.",
  },
  {
    title: "Speed",
    description:
      "Standard and rush turnaround options. We respect your deadlines because your events and programs don't wait.",
  },
  {
    title: "Guidance",
    description:
      "Not sure which method is right? We recommend the best approach for your product, budget, and timeline — not the most expensive one.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--gray-900)] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            About <span className="text-primary">The Apparel Lab</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--gray-300)]">
            We&apos;re a custom apparel decoration company built to serve
            businesses. From uniforms and events to merch and promotional
            programs — we make your brand look good on fabric.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[var(--gray-900)] sm:text-3xl">
            Our Story
          </h2>
          <div className="mt-6 space-y-4 text-base leading-7 text-[var(--gray-600)]">
            <p>
              The Apparel Lab was founded with a simple idea: businesses deserve
              a better experience when ordering custom apparel. Too many
              companies deal with unclear pricing, missed deadlines, and
              inconsistent quality. We set out to change that.
            </p>
            <p>
              We specialize in B2B custom decoration — screen printing,
              embroidery, DTF, DTG, and promotional items. Whether you need 24
              tees for a team outing or 5,000 polos for a national rollout, we
              treat every order with the same attention to detail.
            </p>
            <p>
              Our clients include companies in construction, healthcare,
              hospitality, education, and corporate environments. They come back
              because we deliver consistent quality, honest pricing, and reliable
              timelines — order after order.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--gray-50)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-[var(--gray-900)] sm:text-3xl">
            What We Stand For
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title}>
                <h3 className="text-lg font-semibold text-[var(--gray-900)]">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--gray-500)]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-[var(--gray-900)] sm:text-3xl">
            Equipment &amp; Capabilities
          </h2>
          <p className="mt-2 text-base text-[var(--gray-500)]">
            Everything is produced in our facility so we control quality,
            turnaround, and cost from start to finish.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-xl border border-[var(--gray-200)] p-5"
              >
                <h3 className="font-semibold text-[var(--gray-900)]">
                  {cap.title}
                </h3>
                <p className="mt-1 text-sm text-[var(--gray-500)]">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--gray-900)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 text-base text-[var(--gray-300)]">
            Tell us about your project and we&apos;ll put together a quote —
            usually within 2 hours.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
