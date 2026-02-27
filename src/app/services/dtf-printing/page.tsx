import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { BreadcrumbJsonLd, ServiceJsonLd, FAQPageJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Custom DTF Printing for Businesses",
  description:
    "Full-color DTF printing on any fabric. Vibrant transfers for t-shirts, polyester, workwear, and more. No color limits, low minimums, fast turnaround.",
};

export default function DTFPrintingPage() {
  return (
    <>
    <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "DTF Printing", href: "/services/dtf-printing" }]} />
    <ServiceJsonLd
      name="Custom DTF Printing"
      description="Full-color DTF printing on any fabric. Vibrant transfers for t-shirts, polyester, workwear, and more. No color limits, low minimums."
      url="/services/dtf-printing"
      serviceType="DTF Printing"
    />
    <FAQPageJsonLd faqs={[
      { question: "What is DTF printing?", answer: "DTF (Direct-to-Film) printing involves printing a full-color design onto a special film, applying adhesive powder, then heat-pressing the transfer onto a garment. It works on almost any fabric type." },
      { question: "What's the minimum order for DTF?", answer: "Minimums are low — typically as few as 1 piece for custom orders. Gang sheet pricing makes small runs especially cost-effective." },
      { question: "Does DTF work on polyester?", answer: "Yes — this is one of DTF's biggest advantages over screen printing and DTG, which can struggle with polyester. DTF adheres beautifully to poly, nylon, and blends." },
      { question: "How durable is DTF printing?", answer: "DTF prints are very durable when applied correctly. They withstand regular washing and drying. We recommend washing inside-out on cold for maximum longevity." },
      { question: "Can you feel the print on the fabric?", answer: "DTF transfers have a slight texture — thinner than screen printing plastisol but not invisible. For most applications, the look and durability more than compensate." },
      { question: "What's the difference between DTF and DTG?", answer: "DTF uses a transfer film heat-pressed onto fabric (works on any material). DTG prints directly onto the garment (works best on cotton). DTF is more versatile; DTG has a softer hand feel on cotton." },
      { question: "Can I order just the transfers without garments?", answer: "Yes — we offer transfer-only orders. You receive ready-to-press transfers that can be applied with a heat press. Great for businesses that do their own pressing." },
      { question: "How does gang sheeting save money?", answer: "Gang sheeting arranges multiple designs or sizes on a single film sheet, maximizing material usage. This significantly reduces cost per transfer, especially for orders with multiple designs." },
    ]} />
    <ServicePageLayout
      title="Custom DTF Printing for Businesses"
      subtitle="DTF Printing"
      description="Direct-to-film (DTF) printing produces vibrant, full-color transfers that adhere to virtually any fabric — cotton, polyester, blends, nylon, and more. It's the most versatile decoration method we offer."
      bestFor={[
        "Full-color designs with unlimited colors",
        "Polyester and performance fabrics",
        "Small to medium runs (no high-volume minimum)",
        "Mixed garment types in one order",
        "Complex artwork, gradients, and photographic images",
        "Stretchy or technical fabrics",
      ]}
      notIdealFor={[
        "Extremely large bulk runs where screen printing is more cost-effective",
        "Designs where a hand-feel-free finish is critical (slight texture)",
        "All-over prints beyond standard placement areas",
        "Garments that can't withstand heat press application",
      ]}
      pricingFactors={[
        "Transfer size — larger prints use more film and ink",
        "Quantity — gang sheeting multiple designs reduces per-unit cost",
        "Garment type — blank cost varies by fabric and brand",
        "Number of print locations — each placement is a separate transfer",
        "Artwork complexity is NOT a factor — unlimited colors at no extra cost",
        "Gang sheet optimization — we can batch multiple designs efficiently",
      ]}
      productionSteps={[
        {
          step: "Submit Your Artwork",
          description:
            "Upload your design in any common format. Full-color, photographic, and gradient artwork all work perfectly.",
        },
        {
          step: "Transfer Production & Proof",
          description:
            "We print your design onto specialized film, apply adhesive powder, and cure it. Digital proof provided for approval.",
        },
        {
          step: "Heat Press Application",
          description:
            "Transfers are heat-pressed onto your garments at precise temperature and pressure settings for maximum adhesion.",
        },
        {
          step: "Quality Check & Shipping",
          description:
            "Every piece is inspected for adhesion and print quality, then packed and shipped with tracking.",
        },
      ]}
      turnaround={[
        { tier: "Standard", timeframe: "5–8 business days after proof approval" },
        { tier: "Rush", timeframe: "3–5 business days (subject to availability)" },
        { tier: "Transfers Only", timeframe: "2–4 business days (no garment application)" },
      ]}
      artworkRequirements={[
        "PNG files with transparent backgrounds produce the best results",
        "Minimum 300 DPI resolution for sharp, detailed prints",
        "Full-color, gradients, and photographic images all supported",
        "No color separation needed — what you see is what you get",
        "We can clean up and optimize artwork if needed",
      ]}
      products={[
        { name: "Performance Tees", description: "Polyester and moisture-wicking tees that screen printing can't handle." },
        { name: "Hoodies & Fleece", description: "Full-color prints on cotton and poly-blend fleece." },
        { name: "Workwear", description: "Hi-vis, safety shirts, and durable work garments in any fabric." },
        { name: "Hats & Beanies", description: "DTF patches and transfers for structured and unstructured headwear." },
        { name: "Bags & Accessories", description: "Totes, backpacks, and accessories in nylon, canvas, or poly." },
        { name: "Youth & Infant", description: "Small-run kids' apparel with full-color designs." },
      ]}
      faqs={[
        { question: "What is DTF printing?", answer: "DTF (Direct-to-Film) printing involves printing a full-color design onto a special film, applying adhesive powder, then heat-pressing the transfer onto a garment. It works on almost any fabric type." },
        { question: "What's the minimum order for DTF?", answer: "Minimums are low — typically as few as 1 piece for custom orders. Gang sheet pricing makes small runs especially cost-effective." },
        { question: "Does DTF work on polyester?", answer: "Yes — this is one of DTF's biggest advantages over screen printing and DTG, which can struggle with polyester. DTF adheres beautifully to poly, nylon, and blends." },
        { question: "How durable is DTF printing?", answer: "DTF prints are very durable when applied correctly. They withstand regular washing and drying. We recommend washing inside-out on cold for maximum longevity." },
        { question: "Can you feel the print on the fabric?", answer: "DTF transfers have a slight texture — thinner than screen printing plastisol but not invisible. For most applications, the look and durability more than compensate." },
        { question: "What's the difference between DTF and DTG?", answer: "DTF uses a transfer film heat-pressed onto fabric (works on any material). DTG prints directly onto the garment (works best on cotton). DTF is more versatile; DTG has a softer hand feel on cotton." },
        { question: "Can I order just the transfers without garments?", answer: "Yes — we offer transfer-only orders. You receive ready-to-press transfers that can be applied with a heat press. Great for businesses that do their own pressing." },
        { question: "How does gang sheeting save money?", answer: "Gang sheeting arranges multiple designs or sizes on a single film sheet, maximizing material usage. This significantly reduces cost per transfer, especially for orders with multiple designs." },
      ]}
    />
    </>
  );
}
