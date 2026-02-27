export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  content: { heading: string; body: string }[];
  relatedLinks: { label: string; href: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "screen-printing-vs-dtf-which-is-right",
    title: "Screen Printing vs. DTF: Which Is Right for Your Order?",
    excerpt:
      "Both methods produce great results — but they excel in different situations. Here's how to choose based on your design, quantity, and garment type.",
    date: "2025-03-15",
    author: "The Apparel Lab Team",
    category: "Method Guides",
    readTime: "5 min read",
    content: [
      {
        heading: "The Short Answer",
        body: "Screen printing wins on cost at high volumes (100+ pieces) with simple designs (1–6 colors). DTF wins on versatility — full-color capability, no minimums, and works on any fabric including polyester. If your design has gradients, photos, or more than 6 colors, DTF is the clear choice. If you're ordering 200+ tees with a 2-color logo, screen printing will save you money.",
      },
      {
        heading: "Cost Comparison",
        body: "Screen printing has per-color setup fees ($25–$50 per screen), which makes it expensive for small runs. But at volume, the per-unit cost drops fast — often under $5/piece for a 2-color print at 200+ units. DTF has zero setup fees, so the per-unit cost is consistent from 1 piece to 1,000. For small-to-medium runs (under 100 pieces) with complex designs, DTF is almost always more cost-effective.",
      },
      {
        heading: "Durability",
        body: "Plastisol screen prints are the gold standard for durability — they'll survive 100+ wash cycles without noticeable fade. DTF transfers are close behind at 40–60+ washes with proper press application and care. For workwear and uniforms that get industrial laundering, screen printing has the edge. For event tees and standard corporate wear, both methods perform well.",
      },
      {
        heading: "When to Choose Screen Printing",
        body: "Use screen printing when you have 50+ pieces, 1–6 spot colors, and cotton or cotton-blend garments. It's the most cost-effective method at scale and produces the most durable result. Common use cases: company uniforms, event tees, spirit wear, promotional giveaways.",
      },
      {
        heading: "When to Choose DTF",
        body: "Use DTF when you need full-color prints, small-to-medium quantities, polyester compatibility, or photographic detail. It's the most flexible method and the fastest to produce. Common use cases: team gear with detailed designs, one-off samples, mixed garment orders, polyester performance wear.",
      },
    ],
    relatedLinks: [
      { label: "Screen Printing Service", href: "/services/screen-printing" },
      { label: "DTF Printing Service", href: "/services/dtf-printing" },
      { label: "Full Method Comparison", href: "/resources/method-comparison" },
    ],
  },
  {
    slug: "how-to-prepare-artwork-for-custom-apparel",
    title: "How to Prepare Artwork for Custom Apparel (And Avoid Delays)",
    excerpt:
      "The #1 cause of production delays is artwork that isn't print-ready. Here's exactly what we need from you to keep your order on track.",
    date: "2025-02-28",
    author: "The Apparel Lab Team",
    category: "Tips & How-To",
    readTime: "4 min read",
    content: [
      {
        heading: "Why Artwork Matters",
        body: "Every decoration method has specific file requirements. Sending the right file format upfront eliminates back-and-forth and keeps your order on schedule. The most common delay we see? A low-resolution JPEG that needs to be redrawn before production can start. That adds 1–3 business days to your timeline.",
      },
      {
        heading: "Ideal File Formats",
        body: "Vector files are always preferred: AI (Adobe Illustrator), EPS, SVG, or PDF with outlined fonts. Vector files scale to any size without losing quality. For DTF and DTG printing, high-resolution PNG files (300 DPI minimum, transparent background) also work well. For embroidery, we'll digitize your vector file into a stitch file — no need to send embroidery-specific formats.",
      },
      {
        heading: "What to Avoid",
        body: "Low-resolution JPEGs, screenshots, or images pulled from websites. These are typically 72 DPI and will look blurry or pixelated when printed or embroidered. Also avoid files with embedded text that hasn't been outlined — fonts may render differently on our systems.",
      },
      {
        heading: "Color Specifications",
        body: "If your brand has PMS (Pantone) colors, include them. For screen printing, we match PMS colors exactly. For embroidery, we match to the closest Madeira or Isacord thread color. For DTF and DTG, we print in CMYK — PMS matching is approximate. Include your brand guide or color codes with your order.",
      },
      {
        heading: "Sizing and Placement",
        body: "If you have specific size and placement requirements, include them with your order. Otherwise, we'll use standard placements (left chest: 3.5–4\" wide; full front: 10–12\" wide; full back: 12–14\" wide) and send a proof showing exact positioning before production.",
      },
    ],
    relatedLinks: [
      { label: "Artwork & File Guidelines", href: "/resources/artwork-file-guidelines" },
      { label: "Logo Placement & Sizing Guide", href: "/resources/logo-placement-sizing" },
      { label: "Get a Quote", href: "/contact" },
    ],
  },
  {
    slug: "building-company-onboarding-kits",
    title: "Building Company Onboarding Kits That New Hires Actually Want",
    excerpt:
      "Forget the cheap pen and flimsy tote. Here's how to build onboarding kits that make new employees feel welcome — and represent your brand well.",
    date: "2025-02-10",
    author: "The Apparel Lab Team",
    category: "Ideas & Inspiration",
    readTime: "6 min read",
    content: [
      {
        heading: "Why Onboarding Kits Matter",
        body: "A great onboarding kit sets the tone for a new hire's experience. It signals that you care about quality, that you've thought about their first day, and that your brand has standards. A cheap, thrown-together kit does the opposite. The best kits balance practicality with brand impact — items people will actually use, decorated with quality they'll notice.",
      },
      {
        heading: "The Core Items",
        body: "Start with one premium apparel piece — an embroidered quarter-zip, softshell jacket, or premium polo. This becomes the anchor item and the highest-perceived-value piece in the kit. Add one casual item — a DTF-printed company tee or hoodie for company events and casual Fridays. Round it out with 2–3 branded accessories: a tumbler or water bottle, a quality notebook, and a sticker pack.",
      },
      {
        heading: "Decoration Quality Matters",
        body: "This is your brand's first impression on a new employee. Use embroidery for the premium piece — it looks and feels better than any print method. Use DTF for the casual tee — it gives you full-color capability with a soft hand feel. For accessories, choose items with permanent imprinting (laser engraved tumblers, debossed notebooks) over pad-printed items that wear off.",
      },
      {
        heading: "Packaging and Presentation",
        body: "Ship kits in branded boxes or custom mailers, not plain brown shipping boxes. Include a welcome card with the new hire's name. Tissue paper and a branded sticker to seal the box go a long way. The unboxing experience is part of the impression.",
      },
      {
        heading: "Scaling and Logistics",
        body: "We maintain kit specs and inventory for ongoing programs. When you have a new hire, send us their name, size, and shipping address — we assemble, box, and ship directly. No need to stockpile kits in your office. Most orders ship within 5 business days.",
      },
    ],
    relatedLinks: [
      { label: "Corporate Industry Page", href: "/industries/corporate" },
      { label: "Promotional Items", href: "/services/promotional-items" },
      { label: "Request a Sample Kit", href: "/sample-kit" },
    ],
  },
];
