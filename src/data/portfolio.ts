export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  service: string;
  industry: string;
  productType: string;
  quantity: string;
  hasCaseStudy: boolean;
  caseStudySlug?: string;
}

export const serviceFilters = [
  "All",
  "Screen Printing",
  "Embroidery",
  "DTF Printing",
  "DTG Printing",
  "Promotional Items",
];

export const industryFilters = [
  "All",
  "Healthcare",
  "Technology",
  "Construction",
  "Hospitality",
  "Education",
  "Non-Profit",
  "Corporate",
];

export const productTypeFilters = [
  "All",
  "T-Shirts",
  "Polos",
  "Hoodies",
  "Hats",
  "Jackets",
  "Bags",
  "Drinkware",
  "Event Gear",
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "healthcare-polos",
    title: "500 Embroidered Polos for Regional Healthcare Network",
    description:
      "Custom embroidered polo shirts with multi-location logo program for a 12-location healthcare network. Consistent branding across all staff uniforms.",
    service: "Embroidery",
    industry: "Healthcare",
    productType: "Polos",
    quantity: "500 pieces",
    hasCaseStudy: true,
    caseStudySlug: "healthcare-embroidered-polos",
  },
  {
    id: "tech-conference-tees",
    title: "Event T-Shirts for Tech Company Conference",
    description:
      "4-color screen-printed tees for a 1,200-attendee tech conference. Front and back prints with custom event branding.",
    service: "Screen Printing",
    industry: "Technology",
    productType: "T-Shirts",
    quantity: "1,200 pieces",
    hasCaseStudy: true,
    caseStudySlug: "tech-conference-screen-print",
  },
  {
    id: "construction-safety",
    title: "Hi-Vis Safety Shirts for Construction Crew",
    description:
      "Screen-printed hi-vis safety shirts with company logo and ANSI-compliant reflective elements. Built to withstand jobsite conditions.",
    service: "Screen Printing",
    industry: "Construction",
    productType: "T-Shirts",
    quantity: "200 pieces",
    hasCaseStudy: false,
  },
  {
    id: "hotel-staff-jackets",
    title: "Embroidered Staff Jackets for Boutique Hotel Group",
    description:
      "Softshell jackets with embroidered logo for front desk, concierge, and valet staff. Professional look that matches the hotel's upscale brand.",
    service: "Embroidery",
    industry: "Hospitality",
    productType: "Jackets",
    quantity: "75 pieces",
    hasCaseStudy: false,
  },
  {
    id: "nonprofit-fundraiser-tees",
    title: "DTG Printed Fundraiser Tees for Non-Profit Walk",
    description:
      "Full-color DTG printed t-shirts for an annual charity walk. Complex gradient design with sponsor logos on the back.",
    service: "DTG Printing",
    industry: "Non-Profit",
    productType: "T-Shirts",
    quantity: "350 pieces",
    hasCaseStudy: false,
  },
  {
    id: "corporate-onboarding-kits",
    title: "New Hire Onboarding Kits for SaaS Company",
    description:
      "Custom kits including DTF-printed hoodie, embroidered cap, branded notebook, and stainless steel tumbler. Packaged individually for each new hire.",
    service: "Promotional Items",
    industry: "Corporate",
    productType: "Hoodies",
    quantity: "120 kits",
    hasCaseStudy: false,
  },
  {
    id: "university-hats",
    title: "Embroidered Hats for University Alumni Event",
    description:
      "Structured snapback caps with 3D puff embroidery for a homecoming alumni event. School colors with vintage-style logo.",
    service: "Embroidery",
    industry: "Education",
    productType: "Hats",
    quantity: "500 pieces",
    hasCaseStudy: false,
  },
  {
    id: "restaurant-aprons",
    title: "DTF Printed Aprons for Restaurant Group",
    description:
      "Custom aprons with full-color DTF transfers for a farm-to-table restaurant chain. Detailed artwork that wouldn't work with screen printing.",
    service: "DTF Printing",
    industry: "Hospitality",
    productType: "Bags",
    quantity: "150 pieces",
    hasCaseStudy: false,
  },
  {
    id: "trade-show-bags",
    title: "Branded Tote Bags for Trade Show",
    description:
      "Screen-printed canvas tote bags with company branding for a national industry trade show. Useful giveaway that attendees actually keep.",
    service: "Screen Printing",
    industry: "Corporate",
    productType: "Bags",
    quantity: "2,000 pieces",
    hasCaseStudy: false,
  },
  {
    id: "tech-startup-hoodies",
    title: "DTF Printed Hoodies for Tech Startup",
    description:
      "Premium hoodies with detailed, multi-color DTF prints for a startup's company merch store. Small initial run with reorder flexibility.",
    service: "DTF Printing",
    industry: "Technology",
    productType: "Hoodies",
    quantity: "48 pieces",
    hasCaseStudy: false,
  },
  {
    id: "hospital-drinkware",
    title: "Branded Tumblers for Hospital Staff Appreciation",
    description:
      "Stainless steel tumblers with laser-engraved hospital logo for a staff appreciation week. Each personalized with the recipient's department.",
    service: "Promotional Items",
    industry: "Healthcare",
    productType: "Drinkware",
    quantity: "800 pieces",
    hasCaseStudy: false,
  },
  {
    id: "school-spirit-wear",
    title: "Spirit Wear Collection for K-12 School District",
    description:
      "Multi-product spirit wear program including screen-printed tees, DTG-printed sweatshirts, and embroidered polos for students, staff, and parents.",
    service: "Screen Printing",
    industry: "Education",
    productType: "Event Gear",
    quantity: "1,500+ pieces",
    hasCaseStudy: false,
  },
];
