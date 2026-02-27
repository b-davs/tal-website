"use client";

import { useState } from "react";
import PortfolioCard from "@/components/PortfolioCard";
import {
  portfolioItems,
  serviceFilters,
  industryFilters,
} from "@/data/portfolio";

export default function PortfolioFilter() {
  const [service, setService] = useState("All");
  const [industry, setIndustry] = useState("All");

  const filtered = portfolioItems.filter((item) => {
    const matchService = service === "All" || item.service === service;
    const matchIndustry = industry === "All" || item.industry === industry;
    return matchService && matchIndustry;
  });

  return (
    <div>
      {/* Filters */}
      <div className="space-y-4">
        <div>
          <p className="mb-2 text-sm font-medium text-[var(--gray-700)]">
            Service
          </p>
          <div className="flex flex-wrap gap-2">
            {serviceFilters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setService(f)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  service === f
                    ? "bg-primary text-white"
                    : "border border-[var(--gray-200)] text-[var(--gray-600)] hover:border-primary hover:text-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 text-sm font-medium text-[var(--gray-700)]">
            Industry
          </p>
          <div className="flex flex-wrap gap-2">
            {industryFilters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setIndustry(f)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  industry === f
                    ? "bg-primary text-white"
                    : "border border-[var(--gray-200)] text-[var(--gray-600)] hover:border-primary hover:text-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results count */}
      <p className="mt-6 text-sm text-[var(--gray-500)]">
        Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Grid */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-base text-[var(--gray-500)]">
          No projects match these filters. Try adjusting your selection.
        </p>
      )}
    </div>
  );
}
