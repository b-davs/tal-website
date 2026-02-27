import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Custom Embroidery for Businesses",
  description:
    "Professional custom embroidery for polos, hats, jackets, and workwear. Durable stitched logos with a premium look. Fast turnaround, transparent pricing.",
};

export default function EmbroideryPage() {
  return (
    <>
    <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Embroidery", href: "/services/embroidery" }]} />
    <ServicePageLayout
      title="Custom Embroidery for Businesses"
      subtitle="Embroidery"
      description="Stitched logos that convey quality and professionalism. Embroidery is the go-to method for polos, hats, jackets, and any garment where you want a premium, textured finish that lasts the life of the garment."
      bestFor={[
        "Polos, button-downs, and dress shirts",
        "Hats, beanies, and caps",
        "Jackets, vests, and outerwear",
        "Workwear and uniforms",
        "Corporate apparel programs",
        "Logos and text — clean, professional look",
      ]}
      notIdealFor={[
        "Photographic or highly detailed artwork (too many thread changes)",
        "Very large designs (12\"+ ) — cost and stiffness increase",
        "Thin or lightweight fabrics that can't support stitching",
        "Gradients and color fades (thread doesn't blend smoothly)",
      ]}
      pricingFactors={[
        "Stitch count — the primary cost driver; more complex logos = more stitches",
        "Number of thread colors — each color change adds production time",
        "Quantity — per-unit cost drops with volume as digitizing is a one-time fee",
        "Garment type — polos, hats, and jackets have different hooping requirements",
        "Placement locations — left chest, right chest, back, sleeves, hats",
        "Digitizing fee — one-time setup to convert your logo to a stitch file",
      ]}
      productionSteps={[
        {
          step: "Submit Your Logo",
          description:
            "Send us your logo in the highest quality format you have. Vector files are ideal but not required — we handle digitizing.",
        },
        {
          step: "Digitizing & Proof",
          description:
            "Our team converts your logo into a stitch file optimized for embroidery. You receive a digital sew-out proof for approval.",
        },
        {
          step: "Production",
          description:
            "Your approved design is stitched onto each garment. We inspect every piece for thread consistency and quality.",
        },
        {
          step: "Shipping & Delivery",
          description:
            "Orders are packed and shipped. Tracking provided. Rush options available for time-sensitive orders.",
        },
      ]}
      turnaround={[
        { tier: "Standard", timeframe: "7–10 business days after proof approval" },
        { tier: "Rush", timeframe: "5–7 business days (subject to availability)" },
        { tier: "Reorders", timeframe: "5–7 business days (digitizing already on file)" },
      ]}
      artworkRequirements={[
        "Vector files (AI, EPS, PDF) produce the best digitizing results",
        "High-resolution PNG or JPG (300+ DPI) also accepted",
        "Simple, clean logos embroider best — fine details may need simplification",
        "Provide thread color preferences or PMS codes",
        "First-time logos require a one-time digitizing fee (kept on file for reorders)",
      ]}
      products={[
        { name: "Polos", description: "The #1 embroidery product. Left chest logos for a professional, uniform look." },
        { name: "Hats & Caps", description: "Structured and unstructured caps. Front, side, and back embroidery." },
        { name: "Jackets & Vests", description: "Outerwear with chest, back, and sleeve embroidery options." },
        { name: "Button-Down Shirts", description: "Dress shirts and oxfords with subtle, professional branding." },
        { name: "Beanies & Knit Caps", description: "Cuffed and uncuffed styles. Great for outdoor and winter branding." },
        { name: "Workwear", description: "Carhartt, Dickies, and other durable brands with stitched logos." },
      ]}
      faqs={[
        { question: "What is digitizing and why is there a fee?", answer: "Digitizing converts your logo from an image file into a stitch file that tells the embroidery machine exactly where to place each stitch. It's a one-time fee — we keep your file on record for all future orders." },
        { question: "What is the minimum order for embroidery?", answer: "Our standard minimum is 12 pieces per design. For hat embroidery, minimums may vary by style. Contact us for specifics." },
        { question: "How much does embroidery cost?", answer: "Pricing is based on stitch count, thread colors, quantity, and placement. A simple left-chest logo on polos is our most common and cost-effective option. Request a quote for exact pricing." },
        { question: "Can you embroider my existing garments?", answer: "Yes — we accept customer-supplied garments. We'll confirm they're compatible with embroidery before proceeding. A handling fee may apply." },
        { question: "How detailed can the embroidery be?", answer: "Embroidery works best for logos, text, and simple icons. Very fine details (thin lines under 1mm, tiny text, gradients) may need to be simplified for clean results." },
        { question: "Will my logo look exactly like the digital file?", answer: "Thread has a different texture than ink or pixels, so the look is slightly different by nature — that's part of the appeal. We optimize your digitized file so it looks its best in thread form." },
        { question: "Can I get different names on each garment?", answer: "Yes — individual name and title personalization is available. We'll set up a roster and stitch each piece accordingly." },
        { question: "Do you keep my logo on file for reorders?", answer: "Yes. Once digitized, your logo is stored permanently. Reorders skip the digitizing fee and often ship faster." },
      ]}
    />
    </>
  );
}
