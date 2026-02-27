import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { resources } from "@/data/resources";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Resources & Guides",
  description:
    "Guides, tools, and expert advice on custom apparel decoration — artwork requirements, method comparisons, turnaround times, logo placement, and garment care.",
};

export default function ResourcesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Resources", href: "/resources" },
        ]}
      />

      <section className="bg-[var(--gray-900)] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Resources &amp; <span className="text-primary">Guides</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--gray-300)]">
            Everything you need to know about custom apparel — from artwork prep
            to decoration methods to garment care.
          </p>
        </div>
      </section>

      {/* Resource cards */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-[var(--gray-900)] sm:text-3xl">
            Guides &amp; Tools
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <Link
                key={resource.slug}
                href={`/resources/${resource.slug}`}
                className="group rounded-xl border border-[var(--gray-200)] p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <span className="rounded-full bg-[var(--gray-100)] px-2.5 py-0.5 text-xs font-medium text-[var(--gray-600)]">
                  {resource.category}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-[var(--gray-900)] group-hover:text-primary">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--gray-500)]">
                  {resource.description}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-primary">
                  Read guide &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest from Blog */}
      <section className="bg-[var(--gray-50)] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[var(--gray-900)] sm:text-3xl">
              Latest from the Blog
            </h2>
            <Link
              href="/resources/blog"
              className="text-sm font-medium text-primary hover:text-primary-dark"
            >
              View all posts &rarr;
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/resources/blog/${post.slug}`}
                className="group rounded-xl border border-[var(--gray-200)] bg-white p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {post.category}
                </span>
                <h3 className="mt-3 text-base font-semibold text-[var(--gray-900)] group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--gray-500)]">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-[var(--gray-400)]">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  <span aria-hidden="true">&middot;</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--gray-900)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Still Have Questions?
          </h2>
          <p className="mt-4 text-base text-[var(--gray-300)]">
            Our team is here to help. Tell us about your project and we&apos;ll
            guide you through every step.
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
