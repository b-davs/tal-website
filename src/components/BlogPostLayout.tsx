import Link from "next/link";
import type { BlogPost } from "@/data/blog";

export default function BlogPostLayout({ post }: { post: BlogPost }) {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--gray-900)] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
            {post.category}
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-[var(--gray-400)]">
            <span>{post.author}</span>
            <span aria-hidden="true">&middot;</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span aria-hidden="true">&middot;</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {post.content.map((section, i) => (
            <div key={section.heading} className={i > 0 ? "mt-10" : ""}>
              <h2 className="text-xl font-bold text-[var(--gray-900)] sm:text-2xl">
                {section.heading}
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--gray-600)]">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </article>

      {/* Related Links */}
      {post.relatedLinks.length > 0 && (
        <section className="bg-[var(--gray-50)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-xl font-bold text-[var(--gray-900)] sm:text-2xl">
              Related Resources
            </h2>
            <ul className="mt-6 space-y-3">
              {post.relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base font-medium text-primary hover:text-primary-dark"
                  >
                    {link.label} &rarr;
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[var(--gray-900)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-base text-[var(--gray-300)]">
            Get a free, no-obligation quote. Most quotes returned within 2
            hours.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
