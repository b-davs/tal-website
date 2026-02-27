import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Artwork & File Guidelines",
  description:
    "File formats, resolution requirements, and tips for preparing logo artwork for screen printing, embroidery, DTF, and DTG decoration.",
};

export default function ArtworkGuidelinesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Resources", href: "/resources" },
          { name: "Artwork & File Guidelines", href: "/resources/artwork-file-guidelines" },
        ]}
      />

      <section className="bg-[var(--gray-900)] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Guide
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Artwork &amp; File Guidelines
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--gray-300)]">
            Send the right files and your order stays on schedule. Here&apos;s
            exactly what we need for each decoration method.
          </p>
        </div>
      </section>

      <article className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Quick summary */}
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
            <h2 className="text-lg font-bold text-[var(--gray-900)]">
              The Short Version
            </h2>
            <p className="mt-2 text-sm leading-6 text-[var(--gray-600)]">
              Send vector files (AI, EPS, SVG, or PDF with outlined fonts)
              whenever possible. For print methods, high-resolution PNG (300+
              DPI, transparent background) also works. Include PMS color codes
              if you have them.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold text-[var(--gray-900)] sm:text-2xl">
              Preferred File Formats
            </h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-lg border border-[var(--gray-200)] p-4">
                <h3 className="font-semibold text-[var(--gray-900)]">
                  Vector Files (Best)
                </h3>
                <p className="mt-1 text-sm text-[var(--gray-500)]">
                  AI, EPS, SVG, or PDF with outlined fonts. Scale to any size
                  without quality loss. Required for embroidery digitizing and
                  preferred for all methods.
                </p>
              </div>
              <div className="rounded-lg border border-[var(--gray-200)] p-4">
                <h3 className="font-semibold text-[var(--gray-900)]">
                  High-Resolution Raster (Acceptable)
                </h3>
                <p className="mt-1 text-sm text-[var(--gray-500)]">
                  PNG or PSD at 300+ DPI with transparent background. Works well
                  for DTF and DTG. Not ideal for embroidery or screen printing.
                </p>
              </div>
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
                <h3 className="font-semibold text-amber-900">
                  Avoid These Formats
                </h3>
                <p className="mt-1 text-sm text-amber-800">
                  Low-resolution JPEGs, screenshots, images pulled from
                  websites, Word documents, and PowerPoint files. These are
                  typically 72 DPI and will look blurry when printed.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold text-[var(--gray-900)] sm:text-2xl">
              Requirements by Method
            </h2>
            <div className="mt-6 overflow-hidden rounded-xl border border-[var(--gray-200)]">
              <table className="w-full text-left text-sm">
                <thead className="bg-[var(--gray-100)]">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-[var(--gray-900)]">
                      Method
                    </th>
                    <th className="px-4 py-3 font-semibold text-[var(--gray-900)]">
                      Ideal Format
                    </th>
                    <th className="px-4 py-3 font-semibold text-[var(--gray-900)]">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--gray-100)] bg-white">
                  <tr>
                    <td className="px-4 py-3 font-medium text-[var(--gray-900)]">
                      Screen Printing
                    </td>
                    <td className="px-4 py-3 text-[var(--gray-600)]">
                      Vector (AI, EPS)
                    </td>
                    <td className="px-4 py-3 text-[var(--gray-600)]">
                      Separate color layers preferred. PMS colors required for exact matching.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-[var(--gray-900)]">
                      Embroidery
                    </td>
                    <td className="px-4 py-3 text-[var(--gray-600)]">
                      Vector (AI, EPS)
                    </td>
                    <td className="px-4 py-3 text-[var(--gray-600)]">
                      We digitize your vector into a stitch file. No need to send DST/PES formats.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-[var(--gray-900)]">
                      DTF Printing
                    </td>
                    <td className="px-4 py-3 text-[var(--gray-600)]">
                      PNG (300+ DPI, transparent BG)
                    </td>
                    <td className="px-4 py-3 text-[var(--gray-600)]">
                      Full-color CMYK. Vector files also accepted.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-[var(--gray-900)]">
                      DTG Printing
                    </td>
                    <td className="px-4 py-3 text-[var(--gray-600)]">
                      PNG (300+ DPI, transparent BG)
                    </td>
                    <td className="px-4 py-3 text-[var(--gray-600)]">
                      Full-color CMYK. Higher DPI = better detail on cotton.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold text-[var(--gray-900)] sm:text-2xl">
              Color Specifications
            </h2>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3 text-sm text-[var(--gray-700)]">
                <span className="mt-0.5 text-primary">&#9679;</span>
                Include PMS (Pantone) codes for exact color matching on screen prints and embroidery
              </li>
              <li className="flex items-start gap-3 text-sm text-[var(--gray-700)]">
                <span className="mt-0.5 text-primary">&#9679;</span>
                For embroidery, we match to the closest Madeira or Isacord thread color
              </li>
              <li className="flex items-start gap-3 text-sm text-[var(--gray-700)]">
                <span className="mt-0.5 text-primary">&#9679;</span>
                DTF and DTG print in CMYK — PMS matching is approximate but very close
              </li>
              <li className="flex items-start gap-3 text-sm text-[var(--gray-700)]">
                <span className="mt-0.5 text-primary">&#9679;</span>
                Include your brand guide or style sheet with color codes when possible
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold text-[var(--gray-900)] sm:text-2xl">
              Common Mistakes to Avoid
            </h2>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3 text-sm text-[var(--gray-700)]">
                <span className="mt-0.5 text-amber-500">&#9888;</span>
                Sending a low-res JPEG pulled from your website — these are 72 DPI and need to be redrawn
              </li>
              <li className="flex items-start gap-3 text-sm text-[var(--gray-700)]">
                <span className="mt-0.5 text-amber-500">&#9888;</span>
                Embedded fonts that aren&apos;t outlined — text may render differently on our systems
              </li>
              <li className="flex items-start gap-3 text-sm text-[var(--gray-700)]">
                <span className="mt-0.5 text-amber-500">&#9888;</span>
                White logos on transparent backgrounds without indicating white is intentional
              </li>
              <li className="flex items-start gap-3 text-sm text-[var(--gray-700)]">
                <span className="mt-0.5 text-amber-500">&#9888;</span>
                Not specifying which version of your logo to use (stacked vs. horizontal, full color vs. one-color)
              </li>
            </ul>
          </div>
        </div>
      </article>

      <section className="bg-[var(--gray-900)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Need Help With Your Artwork?
          </h2>
          <p className="mt-4 text-base text-[var(--gray-300)]">
            Send us what you have and we&apos;ll let you know if it&apos;s
            production-ready. Art cleanup and vectorization available for a small
            fee.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Submit Your Artwork
          </Link>
        </div>
      </section>
    </>
  );
}
