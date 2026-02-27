"use client";

import { useState } from "react";
import { comparisonFactors, methods } from "@/data/method-comparison";

export default function MethodComparisonTable() {
  const [selected, setSelected] = useState<string[]>(
    methods.map((m) => m.slug)
  );

  function toggle(slug: string) {
    setSelected((prev) => {
      if (prev.includes(slug)) {
        if (prev.length <= 2) return prev;
        return prev.filter((s) => s !== slug);
      }
      return [...prev, slug];
    });
  }

  const activeMethods = methods.filter((m) => selected.includes(m.slug));

  return (
    <div>
      {/* Toggle buttons */}
      <div className="flex flex-wrap gap-3">
        {methods.map((method) => {
          const isActive = selected.includes(method.slug);
          return (
            <button
              key={method.slug}
              type="button"
              onClick={() => toggle(method.slug)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-primary text-white"
                  : "border border-[var(--gray-300)] text-[var(--gray-500)] hover:border-[var(--gray-400)]"
              }`}
            >
              {method.name}
            </button>
          );
        })}
      </div>
      <p className="mt-2 text-xs text-[var(--gray-400)]">
        Select at least 2 methods to compare.
      </p>

      {/* Desktop table */}
      <div className="mt-8 hidden overflow-x-auto md:block">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-[var(--gray-200)]">
              <th className="py-3 pr-4 font-semibold text-[var(--gray-900)]">
                Factor
              </th>
              {activeMethods.map((method) => (
                <th
                  key={method.slug}
                  className="px-4 py-3 font-semibold text-[var(--gray-900)]"
                >
                  {method.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--gray-100)]">
            {comparisonFactors.map((factor) => {
              const ratings = activeMethods.map(
                (m) => m.factors[factor.label]?.rating
              );
              const hasBest = ratings.includes("best");

              return (
                <tr key={factor.label}>
                  <td className="py-4 pr-4">
                    <span className="font-medium text-[var(--gray-900)]">
                      {factor.label}
                    </span>
                  </td>
                  {activeMethods.map((method) => {
                    const data = method.factors[factor.label];
                    if (!data) return <td key={method.slug} className="px-4 py-4" />;
                    const isBest = hasBest && data.rating === "best";
                    return (
                      <td
                        key={method.slug}
                        className={`px-4 py-4 text-[var(--gray-600)] ${
                          isBest
                            ? "bg-green-50 font-medium text-green-800"
                            : ""
                        }`}
                      >
                        {data.value}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked cards */}
      <div className="mt-8 space-y-6 md:hidden">
        {comparisonFactors.map((factor) => {
          const ratings = activeMethods.map(
            (m) => m.factors[factor.label]?.rating
          );
          const hasBest = ratings.includes("best");

          return (
            <div key={factor.label}>
              <h3 className="text-sm font-semibold text-[var(--gray-900)]">
                {factor.label}
              </h3>
              <div className="mt-2 space-y-2">
                {activeMethods.map((method) => {
                  const data = method.factors[factor.label];
                  if (!data) return null;
                  const isBest = hasBest && data.rating === "best";
                  return (
                    <div
                      key={method.slug}
                      className={`rounded-lg border p-3 ${
                        isBest
                          ? "border-green-200 bg-green-50"
                          : "border-[var(--gray-200)]"
                      }`}
                    >
                      <span
                        className={`text-xs font-medium ${
                          isBest
                            ? "text-green-700"
                            : "text-[var(--gray-400)]"
                        }`}
                      >
                        {method.name}
                      </span>
                      <p
                        className={`mt-0.5 text-sm ${
                          isBest
                            ? "font-medium text-green-800"
                            : "text-[var(--gray-600)]"
                        }`}
                      >
                        {data.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
