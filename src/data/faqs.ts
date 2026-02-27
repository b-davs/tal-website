export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  label: string;
  faqs: FAQ[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: "pricing",
    label: "Pricing",
    faqs: [
      {
        question: "How much does custom apparel decoration cost?",
        answer:
          "Pricing varies based on decoration method, quantity, garment type, and design complexity. Screen printing starts lowest per unit at higher volumes, while DTG and DTF are more cost-effective for small runs. Contact us for a project-specific quote.",
      },
      {
        question: "Do you charge setup fees?",
        answer:
          "Screen printing includes a one-time screen setup fee per color. Embroidery has a digitizing fee for first-time designs. DTG and DTF have no setup fees — you pay per piece. Setup fees are waived on reorders.",
      },
      {
        question: "What are your minimum order quantities?",
        answer:
          "Minimums vary by method: screen printing starts at 24 pieces, embroidery at 12 pieces. DTG and DTF have no minimums — we can print a single piece. Promotional items vary by product.",
      },
      {
        question: "Do you offer volume discounts?",
        answer:
          "Yes. Per-unit cost decreases at higher quantities across all methods. The biggest savings come at 72+, 144+, and 500+ piece breakpoints. We quote each project individually to give you the best rate.",
      },
      {
        question: "Is there a cost for artwork setup or vectorization?",
        answer:
          "Simple art cleanup is included with your order. Complex vectorization or design creation may incur an art fee, which we'll quote upfront before proceeding.",
      },
      {
        question: "Do you charge for shipping?",
        answer:
          "Shipping is calculated based on order size and destination. We offer ground, expedited, and overnight options. Free shipping is available on orders over $500.",
      },
    ],
  },
  {
    id: "turnaround",
    label: "Turnaround",
    faqs: [
      {
        question: "How long does production take?",
        answer:
          "Standard turnaround is 7–10 business days after proof approval. Timeline depends on order size, decoration method, and garment availability.",
      },
      {
        question: "Do you offer rush orders?",
        answer:
          "Yes. Rush production (3–5 business days) is available for most methods, subject to current capacity. Emergency turnaround is handled case by case — call us to discuss.",
      },
      {
        question: "When does the production clock start?",
        answer:
          "Production begins after you approve the digital proof and payment is processed. Proof revisions, garment sourcing delays, or pending approvals can shift your timeline.",
      },
      {
        question: "Can you meet a specific event date or deadline?",
        answer:
          "Usually, yes. Let us know your event date when you request a quote, and we'll confirm if standard or rush production can meet it. We recommend reaching out at least 3 weeks before your deadline.",
      },
    ],
  },
  {
    id: "artwork",
    label: "Artwork",
    faqs: [
      {
        question: "What file formats do you accept?",
        answer:
          "Vector files (AI, EPS, PDF) work best for screen printing and embroidery. We also accept high-resolution raster files (PNG, PSD, TIFF) at 300+ DPI for DTG and DTF. SVG files are welcome too.",
      },
      {
        question: "What if my artwork isn't print-ready?",
        answer:
          "No problem. We offer art cleanup and vectorization services. Simple fixes are included free; more complex work is quoted upfront. Send us what you have and we'll let you know.",
      },
      {
        question: "Can you create a design from scratch?",
        answer:
          "We're decorators, not a design studio — but we can do basic layout, text treatments, and color adjustments. For full graphic design, we recommend working with a designer and then sending us the finished files.",
      },
      {
        question: "Will I see a proof before production?",
        answer:
          "Always. Every order receives a digital mockup proof showing your design on the garment for your approval. We don't go to production until you sign off. Revisions are included.",
      },
      {
        question: "Can you match my exact brand colors?",
        answer:
          "Yes. For screen printing, we mix custom Pantone (PMS) inks. For embroidery, we match to the closest thread color. DTG and DTF use CMYK process, so provide your color codes for the best match.",
      },
    ],
  },
  {
    id: "products",
    label: "Product Selection",
    faqs: [
      {
        question: "Can I supply my own garments?",
        answer:
          "Yes, you can ship us your blanks. We'll inspect them for printability and let you know if there are any concerns. Note that we can't guarantee results on garments we haven't vetted.",
      },
      {
        question: "What brands of blanks do you carry?",
        answer:
          "We source from all major blank suppliers — Bella+Canvas, Next Level, Gildan, Comfort Colors, Nike, Under Armour, Port Authority, and more. We'll recommend the best option for your project and budget.",
      },
      {
        question: "How do I choose the right garment?",
        answer:
          "Tell us the use case (workwear, event, retail, uniforms), preferred fit, fabric, and budget. We'll recommend 2-3 options with samples available if needed.",
      },
      {
        question: "Do you offer eco-friendly or sustainable options?",
        answer:
          "Yes. We carry organic cotton, recycled polyester, and sustainably sourced blanks from brands like Bella+Canvas and Allmade. Water-based inks are available for screen printing.",
      },
    ],
  },
  {
    id: "ordering",
    label: "Ordering",
    faqs: [
      {
        question: "How do I place an order?",
        answer:
          "Start by requesting a quote through our contact form or by calling us. Once you approve the quote and proof, we collect payment and begin production. It's that simple.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept credit cards, ACH/bank transfer, and company checks (for established accounts). A 50% deposit is required to start production, with the balance due before shipping.",
      },
      {
        question: "Can I reorder the same design later?",
        answer:
          "Absolutely. We keep your screens, digitized embroidery files, and print files on record. Reorders skip setup fees and are typically faster to produce.",
      },
      {
        question: "What if I need to make changes after placing my order?",
        answer:
          "Changes before proof approval are always free. Changes after approval may incur additional fees if screens are already burned or materials are ordered. Contact us as soon as possible — we'll do our best to accommodate.",
      },
      {
        question: "Do you ship nationwide?",
        answer:
          "Yes, we ship to all 50 states. Most orders ship via UPS or FedEx Ground with tracking provided. Expedited and overnight shipping options are available.",
      },
    ],
  },
  {
    id: "care",
    label: "Care & Durability",
    faqs: [
      {
        question: "How long will the print or embroidery last?",
        answer:
          "Screen prints last 50+ washes when properly cared for. Embroidery is the most durable — it will outlast the garment itself. DTG and DTF prints last 30-50+ washes depending on care.",
      },
      {
        question: "How should I wash decorated garments?",
        answer:
          "Turn garments inside out, wash cold, and tumble dry low or hang dry. Avoid bleach and ironing directly on the decoration. Following these steps maximizes the life of your prints.",
      },
      {
        question: "What if there's a quality issue with my order?",
        answer:
          "We stand behind our work. If there's a defect in printing, embroidery, or garment quality, contact us within 14 days of delivery. We'll reprint, replace, or refund — no hassle.",
      },
    ],
  },
];

export const pricingFaqs: FAQ[] = [
  {
    question: "Why don't you list prices on your website?",
    answer:
      "Every project is unique — garment choice, decoration method, design complexity, and quantity all affect cost. Listing fixed prices would be misleading. We provide fast, accurate quotes tailored to your specific project.",
  },
  {
    question: "How quickly will I get a quote?",
    answer:
      "Most quotes are returned within 2 hours during business hours (Mon–Fri, 8am–5pm CT). Complex projects may take up to 24 hours.",
  },
  {
    question: "Can I get a quote without being ready to order?",
    answer:
      "Absolutely. Quotes are free and carry no obligation. We're happy to provide pricing to help with your budgeting process.",
  },
  {
    question: "What's the cheapest decoration method?",
    answer:
      "For bulk orders (72+ pieces), screen printing is the most cost-effective. For small runs (1–24 pieces), DTG or DTF are usually cheaper since there are no setup fees.",
  },
  {
    question: "Do reorders cost less?",
    answer:
      "Yes. Screen printing reorders skip the screen setup fee. Embroidery reorders skip the digitizing fee. The per-piece pricing stays the same or may be lower if quantity increases.",
  },
  {
    question: "Is there a price break for non-profits?",
    answer:
      "We work with many non-profits and can often offer adjusted pricing. Mention your non-profit status when requesting a quote and we'll see what we can do.",
  },
  {
    question: "Do you price match?",
    answer:
      "We price competitively and focus on quality and service over being the cheapest option. If you have a comparable quote from another printer, send it over — we'll do our best to match or beat it.",
  },
  {
    question: "What costs extra beyond the base price?",
    answer:
      "Potential add-ons include: specialty inks (metallic, glow, puff), oversized prints, individual poly-bagging, custom tags, and rush production. We'll itemize everything in your quote so there are no surprises.",
  },
];

export const sampleKitFaqs: FAQ[] = [
  {
    question: "What comes in a sample kit?",
    answer:
      "It depends on the kit type. Our Method Comparison Kit includes samples of each decoration method. Product Sample Kits include blank garments in your preferred styles. Full Sample Kits combine both.",
  },
  {
    question: "Is there a cost for sample kits?",
    answer:
      "Sample kits are complimentary for qualified B2B buyers. We ship them at no cost so you can evaluate our quality before committing to an order.",
  },
  {
    question: "How long does it take to receive a sample kit?",
    answer:
      "Most sample kits ship within 2–3 business days and arrive in 3–5 business days depending on your location.",
  },
  {
    question: "Can I request specific garment brands or styles?",
    answer:
      "Yes. Let us know your preferred brands, styles, and sizes in the request form, and we'll customize your sample kit accordingly.",
  },
];
