import Link from "next/link";

const services = [
  {
    title: "Screen Printing",
    href: "/services/screen-printing",
    description:
      "The gold standard for bulk orders. Vibrant, durable prints ideal for uniforms, events, and large runs.",
    icon: "🖨️",
  },
  {
    title: "Embroidery",
    href: "/services/embroidery",
    description:
      "Professional, textured branding. Perfect for polos, hats, jackets, and workwear that needs to last.",
    icon: "🧵",
  },
  {
    title: "DTF Printing",
    href: "/services/dtf-printing",
    description:
      "Full-color transfers on virtually any fabric. Great for complex designs, small runs, and polyester.",
    icon: "🎨",
  },
  {
    title: "DTG Printing",
    href: "/services/dtg-printing",
    description:
      "Print-on-demand quality with no minimums. Ideal for detailed, multi-color designs on cotton.",
    icon: "👕",
  },
  {
    title: "Promotional Items",
    href: "/services/promotional-items",
    description:
      "Branded swag that gets used. Drinkware, bags, pens, tech accessories, and custom kits for any occasion.",
    icon: "🎁",
  },
];

const steps = [
  {
    step: "01",
    title: "Tell Us What You Need",
    description:
      "Share your project details — quantity, decoration method, timeline, and upload your logo or artwork.",
  },
  {
    step: "02",
    title: "Get Your Proof",
    description:
      "We send a digital proof for your approval. Revisions are included until you're satisfied.",
  },
  {
    step: "03",
    title: "We Produce & Deliver",
    description:
      "Your order goes into production and ships on schedule. Rush options available when you need it fast.",
  },
];

const featuredProjects = [
  {
    title: "500 Embroidered Polos for Healthcare Network",
    service: "Embroidery",
    description: "Unified staff uniforms across 12 locations with consistent logo placement and quality.",
    icon: "🧵",
  },
  {
    title: "1,200 Event Tees for Tech Conference",
    service: "Screen Printing",
    description: "4-color front print + sponsor wall on back. Delivered 3 days ahead of schedule.",
    icon: "🖨️",
  },
  {
    title: "New Hire Onboarding Kits for SaaS Company",
    service: "Promotional Items",
    description: "Custom kits with DTF hoodie, embroidered cap, branded notebook, and tumbler.",
    icon: "🎁",
  },
];

const trustPoints = [
  { label: "Orders Completed", value: "10,000+" },
  { label: "Business Clients", value: "500+" },
  { label: "Years in Business", value: "10+" },
  { label: "Satisfaction Rate", value: "99%" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--gray-900)] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Custom Apparel,
            <span className="text-primary"> Built for Business</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--gray-300)]">
            Screen printing, embroidery, DTF, DTG, and promotional items —
            produced with precision and delivered on time. Trusted by businesses
            across the US.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="w-full rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services"
              className="w-full rounded-lg border border-[var(--gray-600)] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[var(--gray-800)] sm:w-auto"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--gray-900)] sm:text-4xl">
              Decoration Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--gray-500)]">
              Every method has a sweet spot. We help you pick the right one
              for your product, quantity, and budget.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-xl border border-[var(--gray-200)] p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <span className="text-3xl" aria-hidden="true">{service.icon}</span>
                <h3 className="mt-4 text-lg font-semibold text-[var(--gray-900)] group-hover:text-primary">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--gray-500)]">
                  {service.description}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-primary">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[var(--gray-50)] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-[var(--gray-900)] sm:text-4xl">
            How It Works
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {steps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[var(--gray-900)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--gray-500)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / stats */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {trustPoints.map((point) => (
              <div key={point.label} className="text-center">
                <p className="text-3xl font-bold text-primary sm:text-4xl">
                  {point.value}
                </p>
                <p className="mt-1 text-sm text-[var(--gray-500)]">
                  {point.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="bg-[var(--gray-50)] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--gray-900)] sm:text-4xl">
              Recent Projects
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--gray-500)]">
              Real work for real businesses. See what we&apos;ve produced for
              companies across industries.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="rounded-xl border border-[var(--gray-200)] bg-white p-6"
              >
                <div className="mb-4 flex h-32 items-center justify-center rounded-lg bg-[var(--gray-100)]">
                  <span className="text-3xl text-[var(--gray-300)]" aria-hidden="true">
                    {project.icon}
                  </span>
                </div>
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {project.service}
                </span>
                <h3 className="mt-2 text-base font-semibold text-[var(--gray-900)]">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-[var(--gray-500)]">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/portfolio"
              className="text-base font-medium text-primary hover:text-primary-dark"
            >
              View all projects &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Sample kit CTA */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-2xl border border-[var(--gray-200)] bg-white p-8 sm:p-12">
          <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-[var(--gray-900)] sm:text-3xl">
                See and Feel Our Quality
              </h2>
              <p className="mt-4 text-base text-[var(--gray-500)]">
                Not ready to commit? Request a free sample kit to evaluate our
                decoration quality, garment options, and craftsmanship
                first-hand.
              </p>
              <Link
                href="/sample-kit"
                className="mt-6 inline-block rounded-lg border border-primary px-6 py-3 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
              >
                Request a Sample Kit
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex h-24 items-center justify-center rounded-lg bg-[var(--gray-50)] px-4 text-center text-sm font-medium text-[var(--gray-600)]">
                  Method Samples
                </div>
                <div className="flex h-24 items-center justify-center rounded-lg bg-[var(--gray-50)] px-4 text-center text-sm font-medium text-[var(--gray-600)]">
                  Garment Swatches
                </div>
                <div className="flex h-24 items-center justify-center rounded-lg bg-[var(--gray-50)] px-4 text-center text-sm font-medium text-[var(--gray-600)]">
                  Thread Colors
                </div>
                <div className="flex h-24 items-center justify-center rounded-lg bg-[var(--gray-50)] px-4 text-center text-sm font-medium text-[var(--gray-600)]">
                  Print Finishes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--gray-900)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[var(--gray-300)]">
            Tell us about your project and get a free, no-obligation quote.
            Most quotes returned within 2 hours.
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
