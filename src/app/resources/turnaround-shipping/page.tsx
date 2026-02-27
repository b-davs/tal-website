import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Turnaround Times & Shipping Guide",
  description:
    "Standard and rush production timelines for screen printing, embroidery, DTF, and DTG. Shipping options and tips for planning your custom apparel order.",
};

export default function TurnaroundShippingPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Resources", href: "/resources" },
          { name: "Turnaround & Shipping", href: "/resources/turnaround-shipping" },
        ]}
      />

      <section className="bg-[var(--gray-900)] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Guide
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Turnaround Times &amp; Shipping
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--gray-300)]">
            Plan your order timeline with confidence. Here&apos;s what to expect
            from quote to delivery.
          </p>
        </div>
      </section>

      <article className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
            <h2 className="text-lg font-bold text-[var(--gray-900)]">
              The Short Version
            </h2>
            <p className="mt-2 text-sm leading-6 text-[var(--gray-600)]">
              Most orders ship 7–10 business days after art approval. Rush
              production (3–5 days) is available. All timelines start after
              proof approval, not when you place the order.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold text-[var(--gray-900)] sm:text-2xl">
              Production Timelines by Method
            </h2>
            <div className="mt-6 overflow-hidden rounded-xl border border-[var(--gray-200)]">
              <table className="w-full text-left text-sm">
                <thead className="bg-[var(--gray-100)]">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-[var(--gray-900)]">
                      Method
                    </th>
                    <th className="px-4 py-3 font-semibold text-[var(--gray-900)]">
                      Standard
                    </th>
                    <th className="px-4 py-3 font-semibold text-[var(--gray-900)]">
                      Rush
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--gray-100)] bg-white">
                  <tr>
                    <td className="px-4 py-3 font-medium text-[var(--gray-900)]">Screen Printing</td>
                    <td className="px-4 py-3 text-[var(--gray-600)]">7–10 business days</td>
                    <td className="px-4 py-3 text-[var(--gray-600)]">3–5 business days</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-[var(--gray-900)]">Embroidery</td>
                    <td className="px-4 py-3 text-[var(--gray-600)]">7–10 business days</td>
                    <td className="px-4 py-3 text-[var(--gray-600)]">5–7 business days</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-[var(--gray-900)]">DTF Printing</td>
                    <td className="px-4 py-3 text-[var(--gray-600)]">5–7 business days</td>
                    <td className="px-4 py-3 text-[var(--gray-600)]">3–5 business days</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-[var(--gray-900)]">DTG Printing</td>
                    <td className="px-4 py-3 text-[var(--gray-600)]">5–7 business days</td>
                    <td className="px-4 py-3 text-[var(--gray-600)]">3–5 business days</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-[var(--gray-900)]">Promotional Items</td>
                    <td className="px-4 py-3 text-[var(--gray-600)]">10–15 business days</td>
                    <td className="px-4 py-3 text-[var(--gray-600)]">7–10 business days</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-[var(--gray-400)]">
              All timelines begin after art/proof approval, not order
              placement. Rush fees apply to expedited production.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold text-[var(--gray-900)] sm:text-2xl">
              Order Timeline Breakdown
            </h2>
            <div className="mt-6 space-y-6">
              {[
                {
                  step: "1",
                  title: "Quote & Order (Day 0)",
                  description:
                    "You submit your project details. We send a quote — most within 2 hours during business hours. You approve the quote and we proceed.",
                },
                {
                  step: "2",
                  title: "Art Proof (1–2 business days)",
                  description:
                    "We create a digital proof showing your design on the garment with exact placement and sizing. Revisions are included until you approve.",
                },
                {
                  step: "3",
                  title: "Production (method-dependent)",
                  description:
                    "Production clock starts after proof approval. See timelines above. We notify you when production is complete.",
                },
                {
                  step: "4",
                  title: "Shipping (2–5 business days)",
                  description:
                    "Standard ground shipping via UPS or FedEx. Expedited and overnight options available. Multi-location shipping supported.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[var(--gray-900)]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--gray-500)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold text-[var(--gray-900)] sm:text-2xl">
              Shipping Options
            </h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-lg border border-[var(--gray-200)] p-4">
                <h3 className="font-semibold text-[var(--gray-900)]">Standard Ground</h3>
                <p className="mt-1 text-sm text-[var(--gray-500)]">
                  3–5 business days via UPS or FedEx. Included in most quotes for orders over $500.
                </p>
              </div>
              <div className="rounded-lg border border-[var(--gray-200)] p-4">
                <h3 className="font-semibold text-[var(--gray-900)]">Expedited (2-Day)</h3>
                <p className="mt-1 text-sm text-[var(--gray-500)]">
                  2 business days. Available for all order sizes. Cost varies by weight and destination.
                </p>
              </div>
              <div className="rounded-lg border border-[var(--gray-200)] p-4">
                <h3 className="font-semibold text-[var(--gray-900)]">Overnight</h3>
                <p className="mt-1 text-sm text-[var(--gray-500)]">
                  Next business day delivery. Available for most destinations in the continental US.
                </p>
              </div>
              <div className="rounded-lg border border-[var(--gray-200)] p-4">
                <h3 className="font-semibold text-[var(--gray-900)]">Multi-Location</h3>
                <p className="mt-1 text-sm text-[var(--gray-500)]">
                  Individual shipments to multiple addresses with per-location packing slips and size breakdowns. No extra coordination fee.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold text-[var(--gray-900)] sm:text-2xl">
              Tips for Faster Turnaround
            </h2>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3 text-sm text-[var(--gray-700)]">
                <span className="mt-0.5 text-green-600">&#10003;</span>
                Send production-ready artwork (vector preferred) to avoid redraw delays
              </li>
              <li className="flex items-start gap-3 text-sm text-[var(--gray-700)]">
                <span className="mt-0.5 text-green-600">&#10003;</span>
                Approve proofs quickly — production doesn&apos;t start until you sign off
              </li>
              <li className="flex items-start gap-3 text-sm text-[var(--gray-700)]">
                <span className="mt-0.5 text-green-600">&#10003;</span>
                Provide complete info upfront: garment, colors, sizes, quantity, and delivery date
              </li>
              <li className="flex items-start gap-3 text-sm text-[var(--gray-700)]">
                <span className="mt-0.5 text-green-600">&#10003;</span>
                For events with fixed deadlines, mention the date in your initial request
              </li>
            </ul>
          </div>
        </div>
      </article>

      <section className="bg-[var(--gray-900)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Have a Deadline?
          </h2>
          <p className="mt-4 text-base text-[var(--gray-300)]">
            Tell us your delivery date and we&apos;ll build a production
            schedule to hit it.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Get a Quote with Timeline
          </Link>
        </div>
      </section>
    </>
  );
}
