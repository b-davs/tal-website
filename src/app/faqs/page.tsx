import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, FAQPageJsonLd } from "@/components/JsonLd";
import FAQAccordion from "@/components/FAQAccordion";
import { faqCategories } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQs — Custom Apparel Questions Answered",
  description:
    "Answers to common questions about custom screen printing, embroidery, DTF, DTG, pricing, turnaround, artwork requirements, and ordering. Get the info you need.",
};

const allFaqs = faqCategories.flatMap((cat) => cat.faqs);

export default function FAQsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "FAQs", href: "/faqs" },
        ]}
      />
      <FAQPageJsonLd faqs={allFaqs} />

      {/* Hero */}
      <section className="bg-[var(--gray-900)] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--gray-300)]">
            Everything you need to know about custom apparel decoration —
            pricing, turnaround, artwork, ordering, and more.
          </p>
        </div>
      </section>

      {/* Category pills */}
      <section className="border-b border-[var(--gray-200)] px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-2">
          {faqCategories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="rounded-full border border-[var(--gray-200)] px-4 py-2 text-sm font-medium text-[var(--gray-700)] transition-colors hover:border-primary hover:text-primary"
            >
              {cat.label}
            </a>
          ))}
        </div>
      </section>

      {/* FAQ sections */}
      {faqCategories.map((cat, i) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`px-4 py-16 sm:px-6 sm:py-20 lg:px-8 ${
            i % 2 === 1 ? "bg-[var(--gray-50)]" : ""
          }`}
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-[var(--gray-900)] sm:text-3xl">
              {cat.label}
            </h2>
            <div className="mt-8">
              <FAQAccordion faqs={cat.faqs} />
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-[var(--gray-900)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Didn&apos;t Find Your Answer?
          </h2>
          <p className="mt-4 text-base text-[var(--gray-300)]">
            Reach out directly — we&apos;re happy to help with any questions
            about your project.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
