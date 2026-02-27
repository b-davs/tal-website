import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import type { Industry } from "@/data/industries";

export default function IndustryPageLayout({ industry }: { industry: Industry }) {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--gray-900)] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {industry.subtitle}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {industry.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--gray-300)]">
            {industry.description}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      {/* Pain Points */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-[var(--gray-900)] sm:text-3xl">
            Challenges We Solve
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {industry.painPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-xl border border-[var(--gray-200)] p-6"
              >
                <h3 className="text-base font-semibold text-[var(--gray-900)]">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--gray-500)]">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="bg-[var(--gray-50)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-[var(--gray-900)] sm:text-3xl">
            Recommended Products
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {industry.recommendedProducts.map((product) => (
              <div
                key={product.name}
                className="rounded-xl border border-[var(--gray-200)] bg-white p-5"
              >
                <h3 className="font-semibold text-[var(--gray-900)]">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-[var(--gray-500)]">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Methods */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-[var(--gray-900)] sm:text-3xl">
            Best Decoration Methods
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {industry.recommendedMethods.map((method) => (
              <span
                key={method}
                className="rounded-full border border-primary bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
              >
                {method}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-[var(--gray-500)]">
            Not sure which method is right?{" "}
            <Link
              href="/resources/method-comparison"
              className="font-medium text-primary hover:text-primary-dark"
            >
              Compare all methods side by side &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* Compliance Notes */}
      {industry.complianceNotes && industry.complianceNotes.length > 0 && (
        <section className="bg-[var(--gray-50)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold text-[var(--gray-900)] sm:text-3xl">
              Compliance &amp; Standards
            </h2>
            <ul className="mt-6 space-y-3">
              {industry.complianceNotes.map((note) => (
                <li
                  key={note}
                  className="flex items-start gap-3 text-sm text-[var(--gray-700)]"
                >
                  <span className="mt-0.5 text-primary">&#9679;</span>
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Build Your Kit */}
      <section className={`px-4 py-16 sm:px-6 sm:py-20 lg:px-8 ${industry.complianceNotes && industry.complianceNotes.length > 0 ? "" : "bg-[var(--gray-50)]"}`}>
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-[var(--gray-900)] sm:text-3xl">
            Popular Kits
          </h2>
          <p className="mt-2 text-sm text-[var(--gray-500)]">
            Pre-configured kits to get you started. Every kit is fully
            customizable.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {industry.kits.map((kit) => (
              <div
                key={kit.name}
                className="rounded-xl border border-[var(--gray-200)] bg-white p-6"
              >
                <h3 className="text-base font-semibold text-[var(--gray-900)]">
                  {kit.name}
                </h3>
                <ul className="mt-4 space-y-2">
                  {kit.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-[var(--gray-600)]"
                    >
                      <span className="mt-0.5 text-green-600">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[var(--gray-900)] sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8">
            <FAQAccordion faqs={industry.faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--gray-900)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-base text-[var(--gray-300)]">
            Get a free, no-obligation quote. Most quotes returned within 2
            hours.
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
