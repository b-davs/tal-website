import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { BreadcrumbJsonLd, ServiceJsonLd, FAQPageJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Custom DTG Printing for Businesses",
  description:
    "Direct-to-garment printing with photographic quality. No minimums on select products. Perfect for detailed, full-color designs on cotton apparel.",
};

export default function DTGPrintingPage() {
  return (
    <>
    <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "DTG Printing", href: "/services/dtg-printing" }]} />
    <ServiceJsonLd
      name="Custom DTG Printing"
      description="Direct-to-garment printing with photographic quality. No minimums on select products. Perfect for detailed, full-color designs on cotton apparel."
      url="/services/dtg-printing"
      serviceType="DTG Printing"
    />
    <FAQPageJsonLd faqs={[
      { question: "What is DTG printing?", answer: "DTG (Direct-to-Garment) printing uses modified inkjet technology to spray water-based ink directly into the fabric. The result is a soft print with high detail — similar to printing a photo on fabric." },
      { question: "Is there a minimum order for DTG?", answer: "No minimums on select products. DTG is one of the few methods where ordering a single custom piece is practical and cost-effective." },
      { question: "Does DTG work on dark shirts?", answer: "Yes — dark garments require a white underbase layer printed first, then your design on top. This adds slightly to cost but produces vibrant results on any garment color." },
      { question: "How does DTG feel on the shirt?", answer: "DTG has the softest hand feel of any printing method. The ink bonds with the cotton fibers rather than sitting on top, so you barely feel the print." },
      { question: "How long do DTG prints last?", answer: "With proper care (wash inside-out, cold water, tumble dry low), DTG prints last 50+ washes. The print softens over time, similar to a vintage tee feel." },
      { question: "Why does DTG work best on cotton?", answer: "The water-based inks used in DTG are designed to bond with natural cellulose fibers. Polyester and synthetics repel these inks, resulting in poor adhesion and color. For synthetics, we recommend DTF instead." },
      { question: "DTG vs screen printing — when should I choose DTG?", answer: "Choose DTG for small orders (under 24 pieces), highly detailed or photographic designs, or when you need no-minimum flexibility. Screen printing wins on cost at higher volumes with limited colors." },
      { question: "Can I print the same design in different sizes?", answer: "Yes — since there are no screens to set up, scaling a design for different garment sizes is simple and doesn't affect pricing." },
    ]} />
    <ServicePageLayout
      title="Custom DTG Printing for Businesses"
      subtitle="DTG Printing"
      description="Direct-to-garment (DTG) printing applies ink directly into the fabric for a soft, natural feel with photographic detail. Ideal for detailed multi-color artwork on cotton — with no minimums on select products."
      bestFor={[
        "Full-color, photographic, or highly detailed designs",
        "Small runs and single-piece orders (no minimums on select items)",
        "100% cotton garments for best results",
        "Soft hand feel — ink bonds with fibers, not on top",
        "Designs with many colors where screen printing setup costs are prohibitive",
        "Merch drops, samples, and prototypes",
      ]}
      notIdealFor={[
        "Polyester and synthetic fabrics (ink doesn't bond well)",
        "Large bulk orders where screen printing is more economical",
        "Designs requiring exact PMS color matching",
        "All-over or wrap-around prints (limited to standard print areas)",
      ]}
      pricingFactors={[
        "Print size — larger coverage areas use more ink",
        "Ink coverage/density — more filled-in designs cost more than line art",
        "Garment color — dark garments require a white underbase layer",
        "Quantity — per-unit cost decreases with volume",
        "Number of print locations — front, back, and sleeves priced separately",
        "Garment selection — blank cost varies by brand, weight, and style",
      ]}
      productionSteps={[
        {
          step: "Submit Your Design",
          description:
            "Upload your full-color artwork. High-resolution PNG with transparency is ideal. We review every file for print readiness.",
        },
        {
          step: "Pre-Treatment & Proof",
          description:
            "Garments are pre-treated with a solution that helps ink bond to fibers. You receive a digital proof for approval.",
        },
        {
          step: "Printing",
          description:
            "Your design is printed directly onto the garment using high-resolution inkjet technology. CMYK ink is applied precisely where needed.",
        },
        {
          step: "Curing & Delivery",
          description:
            "Printed garments are heat-cured for durability, inspected, packed, and shipped with tracking.",
        },
      ]}
      turnaround={[
        { tier: "Standard", timeframe: "5–8 business days after proof approval" },
        { tier: "Rush", timeframe: "3–5 business days (subject to availability)" },
        { tier: "Samples/Singles", timeframe: "3–5 business days" },
      ]}
      artworkRequirements={[
        "PNG files with transparent backgrounds preferred",
        "Minimum 300 DPI at actual print size",
        "Full-color, gradients, and photographic imagery all supported",
        "sRGB color space recommended for most accurate color reproduction",
        "Design should be sized to final print dimensions when possible",
      ]}
      products={[
        { name: "Cotton T-Shirts", description: "The ideal DTG canvas. Ring-spun and combed cotton for the softest feel." },
        { name: "Cotton Hoodies", description: "Heavyweight and midweight cotton fleece with vibrant prints." },
        { name: "Sweatshirts", description: "Crewneck and pullover styles in cotton and cotton-rich blends." },
        { name: "Long Sleeve Tees", description: "Year-round staples with full-color front and back prints." },
        { name: "Tank Tops", description: "Lightweight cotton tanks for events, fitness, and summer campaigns." },
        { name: "Tote Bags", description: "Cotton canvas totes — popular for giveaways and retail." },
      ]}
      faqs={[
        { question: "What is DTG printing?", answer: "DTG (Direct-to-Garment) printing uses modified inkjet technology to spray water-based ink directly into the fabric. The result is a soft print with high detail — similar to printing a photo on fabric." },
        { question: "Is there a minimum order for DTG?", answer: "No minimums on select products. DTG is one of the few methods where ordering a single custom piece is practical and cost-effective." },
        { question: "Does DTG work on dark shirts?", answer: "Yes — dark garments require a white underbase layer printed first, then your design on top. This adds slightly to cost but produces vibrant results on any garment color." },
        { question: "How does DTG feel on the shirt?", answer: "DTG has the softest hand feel of any printing method. The ink bonds with the cotton fibers rather than sitting on top, so you barely feel the print." },
        { question: "How long do DTG prints last?", answer: "With proper care (wash inside-out, cold water, tumble dry low), DTG prints last 50+ washes. The print softens over time, similar to a vintage tee feel." },
        { question: "Why does DTG work best on cotton?", answer: "The water-based inks used in DTG are designed to bond with natural cellulose fibers. Polyester and synthetics repel these inks, resulting in poor adhesion and color. For synthetics, we recommend DTF instead." },
        { question: "DTG vs screen printing — when should I choose DTG?", answer: "Choose DTG for small orders (under 24 pieces), highly detailed or photographic designs, or when you need no-minimum flexibility. Screen printing wins on cost at higher volumes with limited colors." },
        { question: "Can I print the same design in different sizes?", answer: "Yes — since there are no screens to set up, scaling a design for different garment sizes is simple and doesn't affect pricing." },
      ]}
    />
    </>
  );
}
