"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { trackGenerateLead } from "@/lib/analytics";

const serviceOptions = [
  "Screen Printing",
  "Embroidery",
  "DTF Printing",
  "DTG Printing",
  "Promotional Items",
  "Multiple Services",
  "Not Sure — Need Guidance",
];

const timelineOptions = [
  "No rush — standard turnaround",
  "Within 2 weeks",
  "Within 1 week",
  "ASAP — rush order",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    trackGenerateLead("quote");
    // TODO: wire up to form handler / API route
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h1 className="mt-6 text-3xl font-bold text-[var(--gray-900)]">
            Quote Request Received
          </h1>
          <p className="mt-4 text-base text-[var(--gray-500)]">
            Thanks for reaching out. We&apos;ll review your project details and
            get back to you within 2 hours during business hours (Mon–Fri,
            8am–5pm CT).
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--gray-900)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Get a <span className="text-primary">Free Quote</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--gray-300)]">
            Tell us about your project and we&apos;ll send you a detailed quote
            — usually within 2 hours. No obligation, no pressure.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-[var(--gray-700)]"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-lg border border-[var(--gray-300)] px-4 py-3 text-sm text-[var(--gray-900)] placeholder:text-[var(--gray-400)] focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-[var(--gray-700)]"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    autoComplete="family-name"
                    className="mt-1 block w-full rounded-lg border border-[var(--gray-300)] px-4 py-3 text-sm text-[var(--gray-900)] placeholder:text-[var(--gray-400)] focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[var(--gray-700)]"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="mt-1 block w-full rounded-lg border border-[var(--gray-300)] px-4 py-3 text-sm text-[var(--gray-900)] placeholder:text-[var(--gray-400)] focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                  placeholder="john@company.com"
                />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[var(--gray-700)]"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    className="mt-1 block w-full rounded-lg border border-[var(--gray-300)] px-4 py-3 text-sm text-[var(--gray-900)] placeholder:text-[var(--gray-400)] focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-[var(--gray-700)]"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    autoComplete="organization"
                    className="mt-1 block w-full rounded-lg border border-[var(--gray-300)] px-4 py-3 text-sm text-[var(--gray-900)] placeholder:text-[var(--gray-400)] focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    placeholder="Acme Corp"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-[var(--gray-700)]"
                >
                  Service Needed *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="mt-1 block w-full rounded-lg border border-[var(--gray-300)] px-4 py-3 text-sm text-[var(--gray-900)] focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium text-[var(--gray-700)]"
                  >
                    Estimated Quantity
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    className="mt-1 block w-full rounded-lg border border-[var(--gray-300)] px-4 py-3 text-sm text-[var(--gray-900)] placeholder:text-[var(--gray-400)] focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    placeholder="e.g. 50, 100, 500+"
                  />
                </div>
                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-sm font-medium text-[var(--gray-700)]"
                  >
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    className="mt-1 block w-full rounded-lg border border-[var(--gray-300)] px-4 py-3 text-sm text-[var(--gray-900)] focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                  >
                    <option value="">Select timeline</option>
                    {timelineOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[var(--gray-700)]"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-lg border border-[var(--gray-300)] px-4 py-3 text-sm text-[var(--gray-900)] placeholder:text-[var(--gray-400)] focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                  placeholder="Tell us about your project — garment types, colors, print locations, special requirements, etc."
                />
              </div>

              <div>
                <label
                  htmlFor="logo"
                  className="block text-sm font-medium text-[var(--gray-700)]"
                >
                  Upload Logo / Artwork
                </label>
                <input
                  type="file"
                  id="logo"
                  name="logo"
                  accept=".ai,.eps,.pdf,.png,.jpg,.jpeg,.svg,.psd"
                  className="mt-1 block w-full text-sm text-[var(--gray-500)] file:mr-4 file:rounded-lg file:border-0 file:bg-[var(--gray-100)] file:px-4 file:py-2 file:text-sm file:font-medium file:text-[var(--gray-700)] hover:file:bg-[var(--gray-200)]"
                />
                <p className="mt-1 text-xs text-[var(--gray-400)]">
                  AI, EPS, PDF, PNG, JPG, SVG, or PSD. Max 10MB.
                </p>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto"
              >
                Submit Quote Request
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-[var(--gray-200)] bg-[var(--gray-50)] p-6">
              <h2 className="text-lg font-semibold text-[var(--gray-900)]">
                What Happens Next
              </h2>
              <ol className="mt-4 space-y-4 text-sm text-[var(--gray-600)]">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    1
                  </span>
                  We review your project details and artwork.
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    2
                  </span>
                  You receive a detailed quote within 2 hours (business hours).
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    3
                  </span>
                  Once approved, we send a digital proof for your sign-off.
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    4
                  </span>
                  Production begins and your order ships on schedule.
                </li>
              </ol>
            </div>

            <div className="mt-6 rounded-xl border border-[var(--gray-200)] bg-[var(--gray-50)] p-6">
              <h2 className="text-lg font-semibold text-[var(--gray-900)]">
                Contact Info
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-[var(--gray-600)]">
                <li>
                  <span className="font-medium text-[var(--gray-900)]">Email:</span>{" "}
                  <a href="mailto:info@theapparellab.com" className="transition-colors hover:text-[var(--gray-900)]">info@theapparellab.com</a>
                </li>
                <li>
                  <span className="font-medium text-[var(--gray-900)]">Phone:</span>{" "}
                  <a href="tel:+15551234567" className="transition-colors hover:text-[var(--gray-900)]">(555) 123-4567</a>
                </li>
                <li>
                  <span className="font-medium text-[var(--gray-900)]">Hours:</span>{" "}
                  Mon–Fri, 8am–5pm CT
                </li>
              </ul>
            </div>

            <div className="mt-6 rounded-xl border border-[var(--gray-200)] bg-[var(--gray-50)] p-6">
              <h2 className="text-lg font-semibold text-[var(--gray-900)]">
                Not Ready for a Quote?
              </h2>
              <p className="mt-2 text-sm text-[var(--gray-500)]">
                No problem. Email us your questions or call during business hours.
                We&apos;re happy to help you figure out the right approach before
                you commit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
