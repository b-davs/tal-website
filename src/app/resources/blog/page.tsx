import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, BlogJsonLd } from "@/components/JsonLd";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog — Custom Apparel Guides & Tips",
  description:
    "Expert guides, tips, and insights on custom apparel decoration — from choosing the right method to preparing artwork to building onboarding kits.",
};

const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

export default function BlogPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Resources", href: "/resources" },
          { name: "Blog", href: "/resources/blog" },
        ]}
      />
      <BlogJsonLd
        posts={blogPosts.map((p) => ({
          title: p.title,
          url: `/resources/blog/${p.slug}`,
          datePublished: p.date,
        }))}
      />

      <section className="bg-[var(--gray-900)] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            The Apparel Lab <span className="text-primary">Blog</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--gray-300)]">
            Expert guides, tips, and insights on custom apparel decoration for
            businesses.
          </p>
        </div>
      </section>

      {/* Category pills */}
      <section className="border-b border-[var(--gray-200)] px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-wrap gap-2">
          <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
            All
          </span>
          {categories.map((cat) => (
            <span
              key={cat}
              className="rounded-full border border-[var(--gray-300)] px-3 py-1 text-xs font-medium text-[var(--gray-600)]"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Post listing */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/resources/blog/${post.slug}`}
                className="group rounded-xl border border-[var(--gray-200)] p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {post.category}
                </span>
                <h2 className="mt-3 text-lg font-semibold text-[var(--gray-900)] group-hover:text-primary">
                  {post.title}
                </h2>
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

      <section className="bg-[var(--gray-900)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Have a Question We Haven&apos;t Covered?
          </h2>
          <p className="mt-4 text-base text-[var(--gray-300)]">
            Reach out and we&apos;ll give you a straight answer.
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
