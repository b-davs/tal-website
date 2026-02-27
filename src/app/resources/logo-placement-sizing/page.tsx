import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Logo Placement & Sizing Guide",
  description:
    "Standard logo positions and recommended sizes for t-shirts, polos, jackets, hats, and bags. Placement best practices for every garment type and decoration method.",
};

export default function LogoPlacementPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Resources", href: "/resources" },
          { name: "Logo Placement & Sizing", href: "/resources/logo-placement-sizing" },
        ]}
      />

      <section className="bg-[var(--gray-900)] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Guide
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Logo Placement &amp; Sizing Guide
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--gray-300)]">
            Where your logo goes and how big it is affects the overall look and
            cost of your order. Here are the standard placements.
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
              Left chest: 3.5–4&quot; wide. Full front: 10–12&quot; wide. Full
              back: 12–14&quot; wide. We send a proof with exact placement
              before production — you can adjust everything before we print.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold text-[var(--gray-900)] sm:text-2xl">
              Standard Placements — Shirts &amp; Polos
            </h2>
            <div className="mt-6 space-y-4">
              {[
                {
                  position: "Left Chest",
                  size: '3.5–4" wide',
                  notes:
                    "The most common placement for business logos. Professional, clean, and works with embroidery and all print methods.",
                },
                {
                  position: "Right Chest",
                  size: '3.5–4" wide',
                  notes:
                    "Less common but used for secondary logos, names, or taglines opposite the primary left-chest logo.",
                },
                {
                  position: "Full Front (Center Chest)",
                  size: '10–12" wide',
                  notes:
                    "Bold, statement placement. Standard for event tees, spirit wear, and graphic designs.",
                },
                {
                  position: "Full Back",
                  size: '12–14" wide',
                  notes:
                    "Maximum visibility. Common for event tees (sponsor walls), team names, and large graphic designs.",
                },
                {
                  position: "Upper Back (Yoke)",
                  size: '4–5" wide',
                  notes:
                    "Between the shoulder blades, below the collar. Subtle branding that's visible when the wearer turns around.",
                },
                {
                  position: "Sleeve",
                  size: '3–3.5" wide',
                  notes:
                    "Left or right sleeve print. Adds a secondary branding touchpoint. Not available on all garment styles.",
                },
              ].map((item) => (
                <div
                  key={item.position}
                  className="rounded-lg border border-[var(--gray-200)] p-4"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-[var(--gray-900)]">
                      {item.position}
                    </h3>
                    <span className="rounded-full bg-[var(--gray-100)] px-2.5 py-0.5 text-xs font-medium text-[var(--gray-600)]">
                      {item.size}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-[var(--gray-500)]">
                    {item.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold text-[var(--gray-900)] sm:text-2xl">
              Hats &amp; Caps
            </h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-lg border border-[var(--gray-200)] p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-[var(--gray-900)]">Front Center</h3>
                  <span className="rounded-full bg-[var(--gray-100)] px-2.5 py-0.5 text-xs font-medium text-[var(--gray-600)]">
                    2.25–2.5&quot; tall
                  </span>
                </div>
                <p className="mt-1 text-sm text-[var(--gray-500)]">
                  Standard hat embroidery placement. Width varies by design but typically 4–4.5&quot; max.
                </p>
              </div>
              <div className="rounded-lg border border-[var(--gray-200)] p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-[var(--gray-900)]">Side Panel</h3>
                  <span className="rounded-full bg-[var(--gray-100)] px-2.5 py-0.5 text-xs font-medium text-[var(--gray-600)]">
                    1.5–2&quot; tall
                  </span>
                </div>
                <p className="mt-1 text-sm text-[var(--gray-500)]">
                  Secondary logo or text on the left or right side panel. Common for taglines or secondary branding.
                </p>
              </div>
              <div className="rounded-lg border border-[var(--gray-200)] p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-[var(--gray-900)]">Back (above strap)</h3>
                  <span className="rounded-full bg-[var(--gray-100)] px-2.5 py-0.5 text-xs font-medium text-[var(--gray-600)]">
                    1.5–2&quot; tall
                  </span>
                </div>
                <p className="mt-1 text-sm text-[var(--gray-500)]">
                  Small logo or text above the closure. Subtle and professional.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold text-[var(--gray-900)] sm:text-2xl">
              Jackets &amp; Outerwear
            </h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-lg border border-[var(--gray-200)] p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-[var(--gray-900)]">Left Chest</h3>
                  <span className="rounded-full bg-[var(--gray-100)] px-2.5 py-0.5 text-xs font-medium text-[var(--gray-600)]">
                    3.5–4&quot; wide
                  </span>
                </div>
                <p className="mt-1 text-sm text-[var(--gray-500)]">
                  Standard placement for jackets and outerwear. Embroidery is the most popular method for this placement on jackets.
                </p>
              </div>
              <div className="rounded-lg border border-[var(--gray-200)] p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-[var(--gray-900)]">Full Back</h3>
                  <span className="rounded-full bg-[var(--gray-100)] px-2.5 py-0.5 text-xs font-medium text-[var(--gray-600)]">
                    10–12&quot; wide
                  </span>
                </div>
                <p className="mt-1 text-sm text-[var(--gray-500)]">
                  Large embroidered or printed design on the back of jackets. High stitch counts may require stabilizing — we handle this in production.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold text-[var(--gray-900)] sm:text-2xl">
              Best Practices
            </h2>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3 text-sm text-[var(--gray-700)]">
                <span className="mt-0.5 text-green-600">&#10003;</span>
                Keep embroidery logos under 10,000 stitches for left-chest placement — larger designs increase cost and production time
              </li>
              <li className="flex items-start gap-3 text-sm text-[var(--gray-700)]">
                <span className="mt-0.5 text-green-600">&#10003;</span>
                Scale artwork proportionally for youth sizes — we do this automatically
              </li>
              <li className="flex items-start gap-3 text-sm text-[var(--gray-700)]">
                <span className="mt-0.5 text-green-600">&#10003;</span>
                For multi-location prints (front + back, or chest + sleeve), each location is priced separately
              </li>
              <li className="flex items-start gap-3 text-sm text-[var(--gray-700)]">
                <span className="mt-0.5 text-green-600">&#10003;</span>
                We send a mockup proof with exact placement before production — adjustments are free until approval
              </li>
            </ul>
          </div>
        </div>
      </article>

      <section className="bg-[var(--gray-900)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Need Custom Placement?
          </h2>
          <p className="mt-4 text-base text-[var(--gray-300)]">
            Non-standard placements are available. Tell us what you need and
            we&apos;ll mock it up for your approval.
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
