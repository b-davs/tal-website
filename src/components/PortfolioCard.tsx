import Link from "next/link";
import type { PortfolioItem } from "@/data/portfolio";

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="flex flex-col rounded-xl border border-[var(--gray-200)] bg-white p-6 transition-all hover:shadow-md">
      {/* Placeholder image area */}
      <div className="mb-4 flex h-40 items-center justify-center rounded-lg bg-[var(--gray-100)]">
        <span className="text-4xl text-[var(--gray-300)]" aria-hidden="true">
          {item.service === "Screen Printing" && "🖨️"}
          {item.service === "Embroidery" && "🧵"}
          {item.service === "DTF Printing" && "🎨"}
          {item.service === "DTG Printing" && "👕"}
          {item.service === "Promotional Items" && "🎁"}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
          {item.service}
        </span>
        <span className="rounded-full bg-[var(--gray-100)] px-2.5 py-0.5 text-xs font-medium text-[var(--gray-600)]">
          {item.industry}
        </span>
      </div>

      <h3 className="mt-3 text-base font-semibold text-[var(--gray-900)]">
        {item.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-[var(--gray-500)]">
        {item.description}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-[var(--gray-400)]">{item.quantity}</span>
        {item.hasCaseStudy && item.caseStudySlug && (
          <Link
            href={`/portfolio/${item.caseStudySlug}`}
            className="text-sm font-medium text-primary hover:text-primary-dark"
          >
            Read case study &rarr;
          </Link>
        )}
      </div>
    </div>
  );
}
