import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact & Get a Quote",
  description:
    "Request a free quote for custom screen printing, embroidery, DTF, DTG, or promotional items. Most quotes returned within 2 hours.",
};

export default function ContactLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
