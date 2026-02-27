import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import MethodComparisonTable from "@/components/MethodComparisonTable";

export const metadata: Metadata = {
  title: "Decoration Method Comparison — Screen Printing vs. Embroidery vs. DTF vs. DTG",
  description:
    "Compare screen printing, embroidery, DTF, and DTG side by side. See cost, durability, fabric compatibility, turnaround, and best-use-case for each decoration method.",
};

export default function MethodComparisonPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Resources", href: "/resources" },
          { name: "Method Comparison", href: "/resources/method-comparison" },
        ]}
      />

      <section className="bg-[var(--gray-900)] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Comparison Tool
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Decoration Method Comparison
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--gray-300)]">
            Screen printing, embroidery, DTF, and DTG — each excels in
            different situations. Compare them side by side to find the right
            fit for your project.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <MethodComparisonTable />
        </div>
      </section>

      <section className="bg-[var(--gray-50)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-[var(--gray-900)] sm:text-3xl">
            Not Sure Which Method to Choose?
          </h2>
          <p className="mt-4 text-base text-[var(--gray-500)]">
            Tell us about your project and we&apos;ll recommend the best method
            based on your design, quantity, timeline, and budget.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Get Expert Guidance
          </Link>
        </div>
      </section>
    </>
  );
}
