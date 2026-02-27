import Link from "next/link";

interface FAQ {
  question: string;
  answer: string;
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  bestFor: string[];
  notIdealFor: string[];
  pricingFactors: string[];
  productionSteps: { step: string; description: string }[];
  turnaround: { tier: string; timeframe: string }[];
  artworkRequirements: string[];
  products: { name: string; description: string }[];
  faqs: FAQ[];
}

export default function ServicePageLayout({
  title,
  subtitle,
  description,
  bestFor,
  notIdealFor,
  pricingFactors,
  productionSteps,
  turnaround,
  artworkRequirements,
  products,
  faqs,
}: ServicePageLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--gray-900)] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {subtitle}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--gray-300)]">
            {description}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      {/* Best for / Not ideal for */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="rounded-xl border border-green-200 bg-green-50 p-6">
            <h2 className="text-lg font-semibold text-green-900">Best For</h2>
            <ul className="mt-4 space-y-2">
              {bestFor.map((item) => (
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
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="text-lg font-semibold text-amber-900">
              Not Ideal For
            </h2>
            <ul className="mt-4 space-y-2">
              {notIdealFor.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-amber-800"
                >
                  <span className="mt-0.5 text-amber-600">&#8212;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing factors */}
      <section className="bg-[var(--gray-50)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-[var(--gray-900)] sm:text-3xl">
            What Affects Pricing
          </h2>
          <p className="mt-2 text-sm text-[var(--gray-500)]">
            We quote every project individually. These are the main factors that
            determine your cost:
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {pricingFactors.map((factor) => (
              <li
                key={factor}
                className="flex items-start gap-3 rounded-lg border border-[var(--gray-200)] bg-white p-4 text-sm text-[var(--gray-700)]"
              >
                <span className="mt-0.5 text-primary font-bold">$</span>
                {factor}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-[var(--gray-900)] sm:text-3xl">
            Our Process
          </h2>
          <div className="mt-8 space-y-6">
            {productionSteps.map((item, i) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[var(--gray-900)]">
                    {item.step}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--gray-500)]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Turnaround */}
      <section className="bg-[var(--gray-50)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-[var(--gray-900)] sm:text-3xl">
            Turnaround Times
          </h2>
          <div className="mt-6 overflow-hidden rounded-xl border border-[var(--gray-200)]">
            <table className="w-full text-left text-sm">
              <thead className="bg-[var(--gray-100)]">
                <tr>
                  <th className="px-6 py-3 font-semibold text-[var(--gray-900)]">
                    Tier
                  </th>
                  <th className="px-6 py-3 font-semibold text-[var(--gray-900)]">
                    Timeframe
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[var(--gray-100)]">
                {turnaround.map((tier) => (
                  <tr key={tier.tier}>
                    <td className="px-6 py-4 font-medium text-[var(--gray-900)]">
                      {tier.tier}
                    </td>
                    <td className="px-6 py-4 text-[var(--gray-600)]">
                      {tier.timeframe}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Artwork requirements */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-[var(--gray-900)] sm:text-3xl">
            Artwork &amp; File Requirements
          </h2>
          <ul className="mt-6 space-y-3">
            {artworkRequirements.map((req) => (
              <li
                key={req}
                className="flex items-start gap-3 text-sm text-[var(--gray-700)]"
              >
                <span className="mt-0.5 text-primary">&#9679;</span>
                {req}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Recommended products */}
      <section className="bg-[var(--gray-50)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-[var(--gray-900)] sm:text-3xl">
            Popular Products for This Service
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
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

      {/* FAQs */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[var(--gray-900)] sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 divide-y divide-[var(--gray-200)]">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-4">
                <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-[var(--gray-900)]">
                  {faq.question}
                  <span aria-hidden="true" className="ml-4 text-[var(--gray-400)] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-[var(--gray-500)]">
                  {faq.answer}
                </p>
              </details>
            ))}
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
