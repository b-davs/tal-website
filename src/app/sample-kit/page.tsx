import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import FAQAccordion from "@/components/FAQAccordion";
import SampleKitForm from "@/components/SampleKitForm";
import { sampleKitFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Request a Sample Kit — See Our Quality First-Hand",
  description:
    "Request a free sample kit to see and feel our custom apparel decoration quality. Method comparison kits, product samples, and full sample kits available.",
};

const kitTypes = [
  {
    title: "Method Comparison Kit",
    description:
      "See the difference between screen printing, embroidery, DTF, and DTG side by side. Each sample shows the same design across different methods so you can compare quality, texture, and finish.",
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: "Product Sample Kit",
    description:
      "Blank garment samples in your preferred styles, brands, and sizes. Touch the fabric, check the fit, and see the quality before committing to a full order.",
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    title: "Full Sample Kit",
    description:
      "The complete package — decorated samples across methods plus blank garment options. Everything you need to make confident decisions about your project.",
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
];

export default function SampleKitPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Sample Kit", href: "/sample-kit" },
        ]}
      />

      {/* Hero */}
      <section className="bg-[var(--gray-900)] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Sample Kit
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            See and Feel Our Quality
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--gray-300)]">
            Request a free sample kit to evaluate our decoration quality, garment
            options, and craftsmanship before placing your order.
          </p>
        </div>
      </section>

      {/* Kit Types */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-[var(--gray-900)] sm:text-3xl">
            What&apos;s in a Sample Kit
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {kitTypes.map((kit) => (
              <div
                key={kit.title}
                className="rounded-xl border border-[var(--gray-200)] p-6"
              >
                <div className="mb-4">{kit.icon}</div>
                <h3 className="text-lg font-semibold text-[var(--gray-900)]">
                  {kit.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--gray-500)]">
                  {kit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-[var(--gray-50)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-[var(--gray-900)] sm:text-3xl">
            Request Your Kit
          </h2>
          <p className="mt-2 text-base text-[var(--gray-500)]">
            Fill out the form below and we&apos;ll ship your sample kit within
            2–3 business days — completely free.
          </p>
          <div className="mt-8">
            <SampleKitForm />
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[var(--gray-900)] sm:text-3xl">
            Sample Kit FAQs
          </h2>
          <div className="mt-8">
            <FAQAccordion faqs={sampleKitFaqs} />
          </div>
        </div>
      </section>
    </>
  );
}
