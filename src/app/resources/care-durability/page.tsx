import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Care & Durability Guide",
  description:
    "How to wash, dry, and care for screen-printed, embroidered, DTF, and DTG decorated apparel to maximize the life of your custom garments.",
};

export default function CareDurabilityPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Resources", href: "/resources" },
          { name: "Care & Durability", href: "/resources/care-durability" },
        ]}
      />

      <section className="bg-[var(--gray-900)] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Guide
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Care &amp; Durability Guide
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--gray-300)]">
            Proper care extends the life of your decorated apparel. Here&apos;s
            how to keep your prints and embroidery looking sharp.
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
              Turn garments inside out, wash cold, tumble dry low or hang dry.
              Avoid bleach and direct ironing on decoration. These simple steps
              add dozens of extra wash cycles to the life of your prints.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold text-[var(--gray-900)] sm:text-2xl">
              Care Instructions by Method
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-[var(--gray-900)]">
                  Screen Printing
                </h3>
                <p className="mt-2 text-sm text-[var(--gray-600)]">
                  Screen prints use plastisol ink that bonds to the fabric
                  surface. They&apos;re the most durable decoration method.
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Turn garment inside out before washing",
                    "Wash in cold or warm water (avoid hot)",
                    "Tumble dry on low or medium heat",
                    "Do not iron directly on the print — iron from the inside",
                    "Avoid bleach and harsh chemical detergents",
                  ].map((tip) => (
                    <li key={tip} className="flex items-start gap-2 text-sm text-[var(--gray-700)]">
                      <span className="mt-0.5 text-green-600">&#10003;</span>
                      {tip}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs font-medium text-[var(--gray-400)]">
                  Expected durability: 50–100+ wash cycles
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[var(--gray-900)]">
                  Embroidery
                </h3>
                <p className="mt-2 text-sm text-[var(--gray-600)]">
                  Embroidered designs use polyester thread stitched into the
                  fabric. They last the life of the garment with minimal care.
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Machine wash cold or warm — embroidery handles standard washing well",
                    "Tumble dry on any heat setting — thread is heat-resistant",
                    "Iron on low-medium if needed, pressing from the back side",
                    "Avoid industrial bleach on colored threads",
                  ].map((tip) => (
                    <li key={tip} className="flex items-start gap-2 text-sm text-[var(--gray-700)]">
                      <span className="mt-0.5 text-green-600">&#10003;</span>
                      {tip}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs font-medium text-[var(--gray-400)]">
                  Expected durability: Lifetime — thread doesn&apos;t fade or crack
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[var(--gray-900)]">
                  DTF Printing
                </h3>
                <p className="mt-2 text-sm text-[var(--gray-600)]">
                  DTF transfers use a film layer bonded to the fabric with heat
                  and adhesive. Proper care significantly extends their life.
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Turn garment inside out before every wash",
                    "Wash in cold water only",
                    "Tumble dry on low heat or hang dry",
                    "Do not iron directly on the transfer",
                    "Avoid fabric softener — it can break down the adhesive over time",
                  ].map((tip) => (
                    <li key={tip} className="flex items-start gap-2 text-sm text-[var(--gray-700)]">
                      <span className="mt-0.5 text-green-600">&#10003;</span>
                      {tip}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs font-medium text-[var(--gray-400)]">
                  Expected durability: 40–60+ wash cycles with proper care
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[var(--gray-900)]">
                  DTG Printing
                </h3>
                <p className="mt-2 text-sm text-[var(--gray-600)]">
                  DTG prints use water-based ink that bonds to cotton fibers.
                  They produce the softest hand feel but need the most care.
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Turn garment inside out before every wash",
                    "Wash in cold water only — hot water accelerates fade",
                    "Hang dry when possible — dryer heat causes the most wear",
                    "If using a dryer, use the lowest heat setting",
                    "Avoid bleach, fabric softener, and dry cleaning",
                  ].map((tip) => (
                    <li key={tip} className="flex items-start gap-2 text-sm text-[var(--gray-700)]">
                      <span className="mt-0.5 text-green-600">&#10003;</span>
                      {tip}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs font-medium text-[var(--gray-400)]">
                  Expected durability: 30–50 wash cycles with proper care
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold text-[var(--gray-900)] sm:text-2xl">
              Durability Comparison
            </h2>
            <div className="mt-6 overflow-hidden rounded-xl border border-[var(--gray-200)]">
              <table className="w-full text-left text-sm">
                <thead className="bg-[var(--gray-100)]">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-[var(--gray-900)]">Method</th>
                    <th className="px-4 py-3 font-semibold text-[var(--gray-900)]">Wash Cycles</th>
                    <th className="px-4 py-3 font-semibold text-[var(--gray-900)]">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--gray-100)] bg-white">
                  <tr>
                    <td className="px-4 py-3 font-medium text-[var(--gray-900)]">Embroidery</td>
                    <td className="px-4 py-3 text-[var(--gray-600)]">Lifetime</td>
                    <td className="px-4 py-3 text-[var(--gray-600)]">Uniforms, workwear, executive apparel</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-[var(--gray-900)]">Screen Printing</td>
                    <td className="px-4 py-3 text-[var(--gray-600)]">50–100+</td>
                    <td className="px-4 py-3 text-[var(--gray-600)]">Workwear, uniforms, high-wear environments</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-[var(--gray-900)]">DTF Printing</td>
                    <td className="px-4 py-3 text-[var(--gray-600)]">40–60+</td>
                    <td className="px-4 py-3 text-[var(--gray-600)]">Corporate wear, events, standard use</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-[var(--gray-900)]">DTG Printing</td>
                    <td className="px-4 py-3 text-[var(--gray-600)]">30–50</td>
                    <td className="px-4 py-3 text-[var(--gray-600)]">Events, merchandise, light-wear items</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-[var(--gray-900)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Questions About Durability?
          </h2>
          <p className="mt-4 text-base text-[var(--gray-300)]">
            We&apos;ll recommend the best method based on how your garments
            will be used, washed, and worn.
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
