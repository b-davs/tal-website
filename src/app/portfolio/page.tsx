import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import PortfolioFilter from "@/components/PortfolioFilter";

export const metadata: Metadata = {
  title: "Portfolio — Our Work",
  description:
    "Browse our custom apparel portfolio. Screen printing, embroidery, DTF, DTG, and promotional items for businesses across healthcare, tech, construction, and more.",
};

export default function PortfolioPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Portfolio", href: "/portfolio" },
        ]}
      />

      {/* Hero */}
      <section className="bg-[var(--gray-900)] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Our Work
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--gray-300)]">
            Real projects for real businesses. Browse our portfolio to see what
            we&apos;ve produced across industries and decoration methods.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <PortfolioFilter />
        </div>
      </section>

      {/* Sample Kit CTA */}
      <section className="bg-[var(--gray-50)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-[var(--gray-900)] sm:text-3xl">
            Want to See Our Quality First-Hand?
          </h2>
          <p className="mt-4 text-base text-[var(--gray-500)]">
            Request a free sample kit to touch and feel our decoration quality
            before placing your order.
          </p>
          <Link
            href="/sample-kit"
            className="mt-8 inline-block rounded-lg border border-primary px-8 py-4 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Request a Sample Kit
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--gray-900)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Start Your Project
          </h2>
          <p className="mt-4 text-base text-[var(--gray-300)]">
            Ready to bring your project to life? Get a free quote and
            we&apos;ll show you what&apos;s possible.
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
