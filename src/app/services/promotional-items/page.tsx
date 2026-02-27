import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { BreadcrumbJsonLd, ServiceJsonLd, FAQPageJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Custom Promotional Items & Branded Merchandise",
  description:
    "Custom promotional products for businesses — drinkware, bags, pens, tech accessories, and branded kits for events, onboarding, and trade shows.",
};

export default function PromotionalItemsPage() {
  return (
    <>
    <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Promotional Items", href: "/services/promotional-items" }]} />
    <ServiceJsonLd
      name="Custom Promotional Items & Branded Merchandise"
      description="Custom promotional products for businesses — drinkware, bags, pens, tech accessories, and branded kits for events, onboarding, and trade shows."
      url="/services/promotional-items"
      serviceType="Promotional Products"
    />
    <FAQPageJsonLd faqs={[
      { question: "What's the minimum order for promotional items?", answer: "Minimums vary by product — typically 25–50 pieces for most items. Some premium items have higher minimums. We'll confirm when you request a quote." },
      { question: "Can you assemble custom kits?", answer: "Yes — kitting is one of our specialties. We source, brand, and assemble multi-item kits (onboarding, trade show, safety, appreciation) and can ship to one location or drop-ship individually." },
      { question: "How far in advance should I order?", answer: "For standard orders, plan 2–3 weeks from approval to delivery. For large events or custom kits, 4–6 weeks is recommended. Rush options are available for many products." },
      { question: "Can I see a sample before committing?", answer: "Yes — we can provide unbranded stock samples for most products so you can evaluate quality before placing a full order. Sample costs may apply but are often credited toward your order." },
      { question: "Do you offer eco-friendly promotional items?", answer: "Yes — we carry a growing selection of sustainable products including bamboo, recycled materials, and reusable alternatives. Let us know if sustainability is a priority for your project." },
      { question: "Can you combine apparel and promo items in one order?", answer: "Absolutely — this is where we add the most value. We can bundle branded apparel with promotional items into cohesive kits, all produced and shipped together." },
      { question: "What decoration methods are used for promo items?", answer: "It depends on the product: screen print and pad print for plastics and fabrics, laser engraving for metal and glass, full-color digital for complex artwork, and debossing for leather goods." },
      { question: "Can you drop-ship to multiple addresses?", answer: "Yes — we support multi-address drop shipping for kits and individual items. Shipping fees apply per destination." },
    ]} />
    <ServicePageLayout
      title="Custom Promotional Items & Branded Merch"
      subtitle="Promotional Items"
      description="Go beyond apparel with branded merchandise that gets used and remembered. From trade show giveaways to employee onboarding kits, we source, brand, and deliver promotional items that represent your business well."
      bestFor={[
        "Trade show and event giveaways",
        "Employee onboarding and welcome kits",
        "Client appreciation and holiday gifts",
        "Safety and compliance kit programs",
        "Brand awareness campaigns",
        "Bundled kits with apparel + promo items",
      ]}
      notIdealFor={[
        "Ultra-low-budget orders (quality promo items have real costs)",
        "Extremely short timelines under 5 business days (most items need production lead time)",
        "Products requiring FDA/medical certification",
        "Items you need in quantities under 25 (some products have higher minimums)",
      ]}
      pricingFactors={[
        "Product selection — drinkware, tech, bags, and writing instruments vary widely",
        "Decoration method — screen print, pad print, laser engrave, full-color digital",
        "Quantity — per-unit cost decreases significantly at volume breakpoints",
        "Number of imprint colors and locations",
        "Packaging — individual polybag, gift box, or custom kit assembly",
        "Kitting — bundling multiple items adds assembly and packaging costs",
      ]}
      productionSteps={[
        {
          step: "Tell Us About Your Project",
          description:
            "Share your goals, budget range, audience, and timeline. We'll recommend the best products for your needs.",
        },
        {
          step: "Product Selection & Proof",
          description:
            "We source samples if needed, prepare digital proofs with your logo on the selected products, and get your approval.",
        },
        {
          step: "Production & Branding",
          description:
            "Your items are produced and branded using the best decoration method for each product — screen print, pad print, laser engrave, or digital print.",
        },
        {
          step: "Kitting & Delivery",
          description:
            "Items are assembled into kits if applicable, quality-checked, and shipped to your location or drop-shipped to multiple addresses.",
        },
      ]}
      turnaround={[
        { tier: "Standard", timeframe: "10–15 business days after proof approval" },
        { tier: "Rush", timeframe: "5–7 business days (limited product selection)" },
        { tier: "Catalog/stock items", timeframe: "7–10 business days" },
      ]}
      artworkRequirements={[
        "Vector files (AI, EPS, PDF) strongly preferred for most promo decoration methods",
        "High-resolution PNG (300+ DPI) accepted for full-color digital printing",
        "Logo should be clean and readable at small sizes (pens, keychains)",
        "Provide PMS color codes for consistent branding across products",
        "Simplified versions of complex logos may be needed for small imprint areas",
      ]}
      products={[
        { name: "Drinkware", description: "Tumblers, mugs, water bottles, and koozies. Laser-engraved or full-color." },
        { name: "Bags & Totes", description: "Canvas totes, drawstring bags, laptop sleeves, and backpacks." },
        { name: "Writing Instruments", description: "Pens, stylus pens, and markers — the #1 most-kept promo item." },
        { name: "Tech Accessories", description: "Chargers, phone stands, webcam covers, and USB drives." },
        { name: "Notebooks & Padfolios", description: "Branded journals, notepads, and professional padfolios." },
        { name: "Custom Kits", description: "Onboarding boxes, trade show bags, safety kits — fully assembled and branded." },
      ]}
      faqs={[
        { question: "What's the minimum order for promotional items?", answer: "Minimums vary by product — typically 25–50 pieces for most items. Some premium items have higher minimums. We'll confirm when you request a quote." },
        { question: "Can you assemble custom kits?", answer: "Yes — kitting is one of our specialties. We source, brand, and assemble multi-item kits (onboarding, trade show, safety, appreciation) and can ship to one location or drop-ship individually." },
        { question: "How far in advance should I order?", answer: "For standard orders, plan 2–3 weeks from approval to delivery. For large events or custom kits, 4–6 weeks is recommended. Rush options are available for many products." },
        { question: "Can I see a sample before committing?", answer: "Yes — we can provide unbranded stock samples for most products so you can evaluate quality before placing a full order. Sample costs may apply but are often credited toward your order." },
        { question: "Do you offer eco-friendly promotional items?", answer: "Yes — we carry a growing selection of sustainable products including bamboo, recycled materials, and reusable alternatives. Let us know if sustainability is a priority for your project." },
        { question: "Can you combine apparel and promo items in one order?", answer: "Absolutely — this is where we add the most value. We can bundle branded apparel with promotional items into cohesive kits, all produced and shipped together." },
        { question: "What decoration methods are used for promo items?", answer: "It depends on the product: screen print and pad print for plastics and fabrics, laser engraving for metal and glass, full-color digital for complex artwork, and debossing for leather goods." },
        { question: "Can you drop-ship to multiple addresses?", answer: "Yes — we support multi-address drop shipping for kits and individual items. Shipping fees apply per destination." },
      ]}
    />
    </>
  );
}
