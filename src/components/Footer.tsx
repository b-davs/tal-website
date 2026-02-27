import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  { href: "/services/screen-printing", label: "Screen Printing" },
  { href: "/services/embroidery", label: "Embroidery" },
  { href: "/services/dtf-printing", label: "DTF Printing" },
  { href: "/services/dtg-printing", label: "DTG Printing" },
  { href: "/services/promotional-items", label: "Promotional Items" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--gray-200)] bg-[var(--gray-50)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/logo.png"
              alt="The Apparel Lab"
              width={160}
              height={22}
            />
            <p className="mt-4 text-sm leading-6 text-[var(--gray-500)]">
              Custom apparel decoration for businesses. Screen printing,
              embroidery, DTF, DTG, and promotional items.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--gray-900)]">
              Services
            </h3>
            <ul className="mt-3 space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--gray-500)] transition-colors hover:text-[var(--gray-900)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--gray-900)]">
              Company
            </h3>
            <ul className="mt-3 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--gray-500)] transition-colors hover:text-[var(--gray-900)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--gray-900)]">
              Contact
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--gray-500)]">
              <li><a href="mailto:info@theapparellab.com" className="transition-colors hover:text-[var(--gray-900)]">info@theapparellab.com</a></li>
              <li><a href="tel:+15551234567" className="transition-colors hover:text-[var(--gray-900)]">(555) 123-4567</a></li>
              <li>Mon–Fri, 8am–5pm CT</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--gray-200)] pt-6">
          <p className="text-center text-xs text-[var(--gray-400)]">
            &copy; {new Date().getFullYear()} The Apparel Lab. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
