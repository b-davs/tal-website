import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Custom apparel solutions tailored for construction, healthcare, hospitality, education, nonprofits, and corporate teams. Industry-specific expertise and product recommendations.",
};

export default function IndustriesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
        ]}
      />

      <section className="bg-[var(--gray-900)] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Industries We <span className="text-primary">Serve</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--gray-300)]">
            Every industry has unique apparel needs. We bring deep experience
            and tailored solutions to each one.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-6">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group flex flex-col gap-4 rounded-xl border border-[var(--gray-200)] p-6 transition-all hover:border-primary hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[var(--gray-900)] group-hover:text-primary">
                  {industry.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--gray-500)]">
                  {industry.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {industry.recommendedMethods.map((method) => (
                    <span
                      key={method}
                      className="rounded-full bg-[var(--gray-100)] px-2.5 py-0.5 text-xs font-medium text-[var(--gray-600)]"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>
              <span className="flex-shrink-0 text-sm font-semibold text-primary">
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[var(--gray-900)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Don&apos;t See Your Industry?
          </h2>
          <p className="mt-4 text-base text-[var(--gray-300)]">
            We work with businesses across every sector. Tell us about your
            needs and we&apos;ll build a custom solution.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
