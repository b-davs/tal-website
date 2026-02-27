export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  service: string;
  heroSubtitle: string;
  challenge: string;
  solution: string;
  specs: { label: string; value: string }[];
  results: string[];
  testimonial?: { quote: string; author: string; role: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "healthcare-embroidered-polos",
    title: "500 Embroidered Polos for a Regional Healthcare Network",
    client: "Regional Healthcare Network",
    industry: "Healthcare",
    service: "Embroidery",
    heroSubtitle: "Case Study — Embroidery",
    challenge:
      "A 12-location healthcare network needed to unify staff uniforms across all facilities. Each location had been sourcing branded polos independently, resulting in inconsistent logo placement, varying garment quality, and different shades of their brand colors. They needed a single vendor who could deliver consistent, professional-quality embroidered polos at scale — with the ability to handle reorders for individual locations without requiring a full network-wide order each time.",
    solution:
      "We set up a standardized embroidery program with digitized logos locked to exact specifications: consistent placement (left chest, 3.5\" wide), thread colors matched to their brand guide (PMS 302 navy, PMS 186 red), and a pre-approved garment (Port Authority K500 polo in White and Navy). Each location can reorder directly using their account, and we maintain the digitized files and garment specs on record for instant production. The initial 500-piece run was staggered by location with individual poly-bagging and packing slips.",
    specs: [
      { label: "Quantity", value: "500 pieces (initial run)" },
      { label: "Method", value: "Embroidery — left chest logo" },
      { label: "Stitch Count", value: "8,200 stitches per piece" },
      { label: "Garment", value: "Port Authority K500 Silk Touch Polo" },
      { label: "Colors", value: "White and Navy — 2 garment colors" },
      { label: "Thread Colors", value: "3 (navy, red, white)" },
      { label: "Turnaround", value: "10 business days (staggered ship)" },
      { label: "Locations", value: "12 facilities, individual shipping" },
    ],
    results: [
      "Consistent branding across all 12 locations for the first time",
      "Per-unit cost reduced 22% vs. previous fragmented ordering",
      "Reorder turnaround cut to 5 business days with files on record",
      "Zero quality rejections on the initial 500-piece run",
      "Program expanded to include embroidered scrub jackets and fleece vests",
    ],
    testimonial: {
      quote:
        "We finally have uniforms that look the same at every location. The reorder process is seamless — our office managers just send an email and the polos show up. It's taken a real headache off my plate.",
      author: "Sarah M.",
      role: "Director of Operations, Regional Healthcare Network",
    },
  },
  {
    slug: "tech-conference-screen-print",
    title: "Event T-Shirts for a Tech Company Conference",
    client: "Mid-Size SaaS Company",
    industry: "Technology",
    service: "Screen Printing",
    heroSubtitle: "Case Study — Screen Printing",
    challenge:
      "A mid-size SaaS company was hosting their annual user conference for 1,200 attendees and needed event t-shirts that would serve as both swag and a walking billboard during the 3-day event. The design featured their event branding with a 4-color front print and a single-color sponsor wall on the back. The timeline was tight: they finalized the sponsor list just 3 weeks before the event, and the shirts needed to arrive at the venue 2 days early for bag stuffing.",
    solution:
      "We used screen printing for the best combination of cost-efficiency and color vibrancy at this volume. The front design was printed in 4 spot colors on Bella+Canvas 3001 tees (Heather Deep Teal — the brand's primary color). The back sponsor wall was a single white ink print. We held garment inventory as soon as the quantity was confirmed, then burned screens and started production the day artwork was finalized. A size breakdown survey was sent to attendees in advance to minimize leftover inventory in unpopular sizes.",
    specs: [
      { label: "Quantity", value: "1,200 pieces" },
      { label: "Method", value: "Screen printing — front + back" },
      { label: "Colors", value: "4 colors (front) + 1 color (back)" },
      { label: "Garment", value: "Bella+Canvas 3001 — Heather Deep Teal" },
      { label: "Sizes", value: "S through 3XL (survey-based breakdown)" },
      { label: "Turnaround", value: "5 business days from art approval" },
      { label: "Shipping", value: "Direct to venue, palletized" },
      { label: "Extras", value: "Size-sorted, poly-bagged by size" },
    ],
    results: [
      "All 1,200 shirts delivered to venue 3 days ahead of schedule",
      "Per-unit cost of under $8 including garment, printing, and poly-bagging",
      "Survey-based sizing reduced leftover inventory to under 3%",
      "Client re-engaged for next year's conference with expanded order (1,500 pieces + hoodies)",
      "Sponsor back print generated visibility and positive feedback from sponsors",
    ],
    testimonial: {
      quote:
        "The turnaround was incredible. We gave them the final artwork on a Monday and had 1,200 perfect shirts at our venue by Friday. The quality made our brand look great, and the sponsors loved seeing their logos on the back.",
      author: "Mike R.",
      role: "Events Manager, Mid-Size SaaS Company",
    },
  },
];
