"use client";

import type { FormEvent } from "react";
import { useState } from "react";

const kitOptions = [
  "Method Comparison Kit",
  "Product Sample Kit",
  "Full Sample Kit",
];

const methodOptions = [
  "Screen Printing",
  "Embroidery",
  "DTF Printing",
  "DTG Printing",
];

export default function SampleKitForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to form handler / API route
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-xl text-center py-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="mt-6 text-2xl font-bold text-[var(--gray-900)]">
          Sample Kit Request Received
        </h3>
        <p className="mt-4 text-base text-[var(--gray-500)]">
          We&apos;ll prepare your sample kit and ship it within 2–3 business
          days. You&apos;ll receive a tracking number once it ships.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="sk-name"
            className="block text-sm font-medium text-[var(--gray-700)]"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="sk-name"
            name="name"
            required
            autoComplete="name"
            className="mt-1 block w-full rounded-lg border border-[var(--gray-300)] px-4 py-3 text-sm text-[var(--gray-900)] placeholder:text-[var(--gray-400)] focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label
            htmlFor="sk-email"
            className="block text-sm font-medium text-[var(--gray-700)]"
          >
            Email *
          </label>
          <input
            type="email"
            id="sk-email"
            name="email"
            required
            autoComplete="email"
            className="mt-1 block w-full rounded-lg border border-[var(--gray-300)] px-4 py-3 text-sm text-[var(--gray-900)] placeholder:text-[var(--gray-400)] focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="sk-company"
          className="block text-sm font-medium text-[var(--gray-700)]"
        >
          Company *
        </label>
        <input
          type="text"
          id="sk-company"
          name="company"
          required
          autoComplete="organization"
          className="mt-1 block w-full rounded-lg border border-[var(--gray-300)] px-4 py-3 text-sm text-[var(--gray-900)] placeholder:text-[var(--gray-400)] focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
          placeholder="Acme Corp"
        />
      </div>

      <div>
        <label
          htmlFor="sk-kit-type"
          className="block text-sm font-medium text-[var(--gray-700)]"
        >
          Kit Type *
        </label>
        <select
          id="sk-kit-type"
          name="kitType"
          required
          className="mt-1 block w-full rounded-lg border border-[var(--gray-300)] px-4 py-3 text-sm text-[var(--gray-900)] focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
        >
          <option value="">Select a kit type</option>
          {kitOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-[var(--gray-700)]">
          Preferred Decoration Methods
        </legend>
        <div className="mt-2 grid grid-cols-2 gap-3">
          {methodOptions.map((method) => (
            <label
              key={method}
              className="flex items-center gap-2 text-sm text-[var(--gray-700)]"
            >
              <input
                type="checkbox"
                name="methods"
                value={method}
                className="h-4 w-4 rounded border-[var(--gray-300)] text-primary focus:ring-primary"
              />
              {method}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label
          htmlFor="sk-products"
          className="block text-sm font-medium text-[var(--gray-700)]"
        >
          Product Preferences
        </label>
        <input
          type="text"
          id="sk-products"
          name="products"
          className="mt-1 block w-full rounded-lg border border-[var(--gray-300)] px-4 py-3 text-sm text-[var(--gray-900)] placeholder:text-[var(--gray-400)] focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
          placeholder="e.g. polos, hoodies, hats, totes"
        />
      </div>

      <div>
        <label
          htmlFor="sk-address"
          className="block text-sm font-medium text-[var(--gray-700)]"
        >
          Shipping Address *
        </label>
        <textarea
          id="sk-address"
          name="address"
          required
          rows={3}
          className="mt-1 block w-full rounded-lg border border-[var(--gray-300)] px-4 py-3 text-sm text-[var(--gray-900)] placeholder:text-[var(--gray-400)] focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
          placeholder="Street address, City, State, ZIP"
        />
      </div>

      <div>
        <label
          htmlFor="sk-notes"
          className="block text-sm font-medium text-[var(--gray-700)]"
        >
          Notes
        </label>
        <textarea
          id="sk-notes"
          name="notes"
          rows={3}
          className="mt-1 block w-full rounded-lg border border-[var(--gray-300)] px-4 py-3 text-sm text-[var(--gray-900)] placeholder:text-[var(--gray-400)] focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
          placeholder="Any specific brands, sizes, or styles you'd like to see?"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto"
      >
        Request Sample Kit
      </button>
    </form>
  );
}
