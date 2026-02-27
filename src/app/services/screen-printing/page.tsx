import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { BreadcrumbJsonLd, ServiceJsonLd, FAQPageJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Custom Screen Printing for Businesses",
  description:
    "High-quality custom screen printing for bulk orders. Vibrant, durable prints on t-shirts, hoodies, workwear, and more. Fast turnaround, transparent pricing.",
};

export default function ScreenPrintingPage() {
  return (
    <>
    <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Screen Printing", href: "/services/screen-printing" }]} />
    <ServiceJsonLd
      name="Custom Screen Printing"
      description="High-quality custom screen printing for bulk orders. Vibrant, durable prints on t-shirts, hoodies, workwear, and more."
      url="/services/screen-printing"
      serviceType="Screen Printing"
    />
    <FAQPageJsonLd faqs={[
      { question: "What is the minimum order for screen printing?", answer: "Our standard minimum is 24 pieces per design. This allows us to keep per-unit costs low since screen setup is a fixed cost that spreads across the run." },
      { question: "How much does screen printing cost?", answer: "Pricing depends on the number of ink colors, print locations, quantity, and garment choice. A single-color print on 72+ tees is our most cost-effective option. Contact us for a quote specific to your project." },
      { question: "Can you print on dark-colored shirts?", answer: "Yes. We use an underbase (white ink layer) beneath your design colors to ensure vibrancy on dark garments. This counts as an additional color in pricing." },
      { question: "What file format do you need?", answer: "Vector files (AI, EPS, PDF) produce the best results. We also accept high-resolution PNG and PSD files (300+ DPI). We'll let you know if your file needs adjustments." },
      { question: "Can you match my brand colors exactly?", answer: "Yes — we mix custom Pantone (PMS) ink colors to match your brand guidelines. Provide your PMS codes for the most accurate match." },
      { question: "How long does screen printing take?", answer: "Standard turnaround is 7–10 business days after proof approval. Rush options (3–5 days) are available depending on capacity." },
      { question: "Do you offer samples before a full order?", answer: "Yes, we can produce a pre-production sample for your approval before running the full order. Additional charges may apply." },
      { question: "What's the difference between screen printing and DTG?", answer: "Screen printing is best for bulk orders with limited colors — it's more durable and cost-effective at scale. DTG is better for small runs with complex, full-color artwork. We can help you choose." },
    ]} />
    <ServicePageLayout
      title="Custom Screen Printing for Businesses"
      subtitle="Screen Printing"
      description="The most cost-effective method for large orders. Screen printing delivers bold, vibrant colors that hold up wash after wash — ideal for uniforms, events, merch, and bulk company gear."
      bestFor={[
        "Bulk orders (24+ pieces)",
        "Designs with 1–6 spot colors",
        "T-shirts, hoodies, and sweatshirts",
        "Uniforms and workwear programs",
        "Event and trade show apparel",
        "Maximum durability and wash fastness",
      ]}
      notIdealFor={[
        "Full-color photographic images (consider DTG or DTF)",
        "Very small runs under 12 pieces (setup costs spread thin)",
        "Polyester performance wear (consider DTF)",
        "Designs requiring many colors (8+) where cost per color adds up",
      ]}
      pricingFactors={[
        "Number of ink colors — each color requires a separate screen",
        "Order quantity — per-unit cost drops significantly at higher volumes",
        "Number of print locations — front, back, sleeves each priced separately",
        "Garment selection — blank garment cost varies by brand and style",
        "Ink type — specialty inks (metallic, glow, puff) cost more than standard",
        "Print size — oversized prints require larger screens and more ink",
      ]}
      productionSteps={[
        {
          step: "Submit Your Artwork",
          description:
            "Upload your logo or design files. We accept AI, EPS, PDF, PNG, and PSD. Not print-ready? We offer art cleanup and vectorization.",
        },
        {
          step: "Screen Setup & Proof",
          description:
            "We separate your colors, burn screens, and send you a digital mockup proof for approval. Revisions included.",
        },
        {
          step: "Production",
          description:
            "Your approved design goes to press. We print, cure, and quality-check every piece.",
        },
        {
          step: "Shipping & Delivery",
          description:
            "Orders are packed and shipped to your location. Tracking provided. Rush shipping available.",
        },
      ]}
      turnaround={[
        { tier: "Standard", timeframe: "7–10 business days after proof approval" },
        { tier: "Rush", timeframe: "3–5 business days (subject to availability)" },
        { tier: "Emergency", timeframe: "Contact us — case by case" },
      ]}
      artworkRequirements={[
        "Vector files preferred (AI, EPS, PDF) for cleanest results",
        "Minimum 300 DPI for raster artwork (PNG, PSD, TIFF)",
        "Each ink color should be separated or easily separable",
        "Provide PMS/Pantone color references when possible",
        "Not sure if your file is ready? Send it over — we'll review it free of charge",
      ]}
      products={[
        { name: "T-Shirts", description: "The workhorse of screen printing. Cotton and blends in every weight and fit." },
        { name: "Hoodies & Sweatshirts", description: "Fleece and French terry blanks. Front, back, and sleeve printing." },
        { name: "Tank Tops", description: "Events, fitness, summer promos. Lightweight and breathable." },
        { name: "Long Sleeves", description: "Sleeve prints, back prints, layering pieces for cooler weather." },
        { name: "Tote Bags", description: "Canvas and cotton totes — great for events and giveaways." },
        { name: "Workwear", description: "Hi-vis, safety tees, and durable work shirts." },
      ]}
      faqs={[
        { question: "What is the minimum order for screen printing?", answer: "Our standard minimum is 24 pieces per design. This allows us to keep per-unit costs low since screen setup is a fixed cost that spreads across the run." },
        { question: "How much does screen printing cost?", answer: "Pricing depends on the number of ink colors, print locations, quantity, and garment choice. A single-color print on 72+ tees is our most cost-effective option. Contact us for a quote specific to your project." },
        { question: "Can you print on dark-colored shirts?", answer: "Yes. We use an underbase (white ink layer) beneath your design colors to ensure vibrancy on dark garments. This counts as an additional color in pricing." },
        { question: "What file format do you need?", answer: "Vector files (AI, EPS, PDF) produce the best results. We also accept high-resolution PNG and PSD files (300+ DPI). We'll let you know if your file needs adjustments." },
        { question: "Can you match my brand colors exactly?", answer: "Yes — we mix custom Pantone (PMS) ink colors to match your brand guidelines. Provide your PMS codes for the most accurate match." },
        { question: "How long does screen printing take?", answer: "Standard turnaround is 7–10 business days after proof approval. Rush options (3–5 days) are available depending on capacity." },
        { question: "Do you offer samples before a full order?", answer: "Yes, we can produce a pre-production sample for your approval before running the full order. Additional charges may apply." },
        { question: "What's the difference between screen printing and DTG?", answer: "Screen printing is best for bulk orders with limited colors — it's more durable and cost-effective at scale. DTG is better for small runs with complex, full-color artwork. We can help you choose." },
      ]}
    />
    </>
  );
}
