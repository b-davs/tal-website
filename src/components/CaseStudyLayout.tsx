import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies";

export default function CaseStudyLayout({ study }: { study: CaseStudy }) {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--gray-900)] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {study.heroSubtitle}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {study.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-[var(--gray-400)]">
            <span>{study.client}</span>
            <span aria-hidden="true">&middot;</span>
            <span>{study.industry}</span>
            <span aria-hidden="true">&middot;</span>
            <span>{study.service}</span>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[var(--gray-900)] sm:text-3xl">
            The Challenge
          </h2>
          <p className="mt-6 text-base leading-7 text-[var(--gray-600)]">
            {study.challenge}
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-[var(--gray-50)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[var(--gray-900)] sm:text-3xl">
            Our Solution
          </h2>
          <p className="mt-6 text-base leading-7 text-[var(--gray-600)]">
            {study.solution}
          </p>
        </div>
      </section>

      {/* Specs */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[var(--gray-900)] sm:text-3xl">
            Project Specs
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {study.specs.map((spec) => (
              <div
                key={spec.label}
                className="rounded-lg border border-[var(--gray-200)] bg-white p-4"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-[var(--gray-400)]">
                  {spec.label}
                </p>
                <p className="mt-1 text-base font-semibold text-[var(--gray-900)]">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-[var(--gray-50)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[var(--gray-900)] sm:text-3xl">
            Results
          </h2>
          <ul className="mt-8 space-y-3">
            {study.results.map((result) => (
              <li
                key={result}
                className="flex items-start gap-3 text-base text-[var(--gray-700)]"
              >
                <span className="mt-0.5 text-green-600">&#10003;</span>
                {result}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonial */}
      {study.testimonial && (
        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <blockquote className="rounded-xl border-l-4 border-primary bg-[var(--gray-50)] p-6 sm:p-8">
              <p className="text-base italic leading-7 text-[var(--gray-700)]">
                &ldquo;{study.testimonial.quote}&rdquo;
              </p>
              <footer className="mt-4">
                <p className="text-sm font-semibold text-[var(--gray-900)]">
                  {study.testimonial.author}
                </p>
                <p className="text-sm text-[var(--gray-500)]">
                  {study.testimonial.role}
                </p>
              </footer>
            </blockquote>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[var(--gray-900)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Ready for Similar Results?
          </h2>
          <p className="mt-4 text-base text-[var(--gray-300)]">
            Tell us about your project and get a free, no-obligation quote.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="w-full rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto"
            >
              Get Your Free Quote
            </Link>
            <Link
              href="/portfolio"
              className="w-full rounded-lg border border-[var(--gray-600)] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[var(--gray-800)] sm:w-auto"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
