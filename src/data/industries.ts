export interface Industry {
  slug: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  painPoints: { title: string; description: string }[];
  recommendedProducts: { name: string; description: string }[];
  recommendedMethods: string[];
  complianceNotes?: string[];
  kits: { name: string; items: string[] }[];
  faqs: { question: string; answer: string }[];
  relatedServiceSlugs: string[];
}

export const industries: Industry[] = [
  {
    slug: "construction",
    name: "Construction & Trades",
    title: "Custom Apparel for Construction & Trades",
    subtitle: "Construction & Trades",
    description:
      "Durable, high-visibility branded workwear that survives job sites. Screen-printed and embroidered gear built for crews who work hard.",
    painPoints: [
      {
        title: "Durability concerns",
        description:
          "Standard decorated apparel fades and cracks after a few washes on the job. You need prints and embroidery that hold up to daily wear, dirt, and industrial laundering.",
      },
      {
        title: "High-vis and safety compliance",
        description:
          "ANSI-rated hi-vis gear needs branding that doesn't compromise the reflective properties or safety certifications.",
      },
      {
        title: "Crew size fluctuations",
        description:
          "Hiring seasonally or per-project means unpredictable order sizes. You need a vendor who handles 25-piece reorders as readily as 500-piece initial runs.",
      },
      {
        title: "Multi-site coordination",
        description:
          "Multiple crews, multiple locations, one brand. Consistent quality and logo placement across every order matters.",
      },
    ],
    recommendedProducts: [
      {
        name: "Hi-Vis Safety Tees & Polos",
        description:
          "ANSI Class 2/3 rated garments with screen-printed or heat-transferred logos that maintain reflective compliance.",
      },
      {
        name: "Embroidered Work Jackets",
        description:
          "Carhartt, Berne, and Cornerstone heavy-duty jackets with left-chest and back embroidery.",
      },
      {
        name: "Hard Hat Stickers & Decals",
        description:
          "Die-cut logo decals for hard hats — a low-cost branding touchpoint for every crew member.",
      },
      {
        name: "Screen-Printed Crew Tees",
        description:
          "Heavyweight cotton tees with durable plastisol prints. High-volume friendly with per-unit costs under $10.",
      },
    ],
    recommendedMethods: ["Screen Printing", "Embroidery", "DTF Printing"],
    complianceNotes: [
      "ANSI/ISEA 107-2020 — ensure branding doesn't obstruct reflective striping on hi-vis garments",
      "OSHA PPE requirements — branded hard hat decals and safety vests must maintain compliance markings",
      "Industrial wash compatibility — plastisol screen prints and polyester-thread embroidery withstand commercial laundering",
    ],
    kits: [
      {
        name: "New Hire Kit",
        items: [
          "2x screen-printed crew tees",
          "1x embroidered work jacket",
          "1x branded hard hat decal",
          "1x hi-vis safety tee with logo",
        ],
      },
      {
        name: "Crew Refresh Kit",
        items: [
          "3x screen-printed crew tees",
          "1x embroidered polo",
          "1x branded beanie or cap",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you print on hi-vis safety garments without affecting the ANSI rating?",
        answer:
          "Yes. We follow ANSI/ISEA 107 guidelines for logo placement, ensuring branding doesn't cover reflective striping or fall within the required background material area. We'll flag any placement concerns during the proof stage.",
      },
      {
        question: "What's the most durable decoration method for workwear?",
        answer:
          "For tees and lightweight garments, plastisol screen printing is the most durable — it withstands industrial laundering and heavy wear. For jackets, polos, and hats, embroidery is the gold standard. Both methods outlast vinyl and DTG in high-wear environments.",
      },
      {
        question: "Do you offer bulk pricing for ongoing crew orders?",
        answer:
          "Yes. We set up standing accounts with locked-in pricing for repeat customers. Your logo files, garment specs, and pricing stay on record so reorders are fast and consistent. Volume discounts apply as your annual total grows.",
      },
    ],
    relatedServiceSlugs: ["screen-printing", "embroidery", "dtf-printing"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    title: "Custom Apparel for Healthcare Organizations",
    subtitle: "Healthcare",
    description:
      "Professional branded scrubs, polos, and outerwear for clinics, hospitals, and healthcare networks. Consistent branding across every location.",
    painPoints: [
      {
        title: "Multi-location consistency",
        description:
          "When every location orders separately, logo placement, thread colors, and garment shades drift. You need one source of truth for your branded apparel.",
      },
      {
        title: "Frequent laundering",
        description:
          "Healthcare garments get washed in hot water with industrial detergents. Decoration needs to survive hundreds of wash cycles without fading or cracking.",
      },
      {
        title: "Professional appearance standards",
        description:
          "Patient-facing staff represent your brand. Logos need to look sharp and consistent — no peeling prints or loose threads.",
      },
      {
        title: "Size-inclusive ordering",
        description:
          "Healthcare staff need a full size range (XS–5XL) without minimum-per-size requirements that force you to over-order.",
      },
    ],
    recommendedProducts: [
      {
        name: "Embroidered Scrub Tops & Jackets",
        description:
          "WonderWink, Cherokee, and Dickies medical garments with left-chest embroidered logos.",
      },
      {
        name: "Embroidered Polos",
        description:
          "Port Authority and Nike polos for admin, management, and patient-facing roles.",
      },
      {
        name: "Fleece & Softshell Jackets",
        description:
          "Layering pieces with embroidered logos for staff who move between buildings or work in cooled environments.",
      },
      {
        name: "DTF-Printed Event Tees",
        description:
          "Full-color prints for health fairs, charity walks, and awareness campaigns.",
      },
    ],
    recommendedMethods: ["Embroidery", "DTF Printing", "Screen Printing"],
    complianceNotes: [
      "Infection control — embroidery with polyester thread and antimicrobial garment options recommended for clinical settings",
      "Laundering standards — all decoration methods tested for hot-water commercial wash cycles",
      "Color coding — many facilities use garment color to identify departments; we maintain strict color matching across reorders",
    ],
    kits: [
      {
        name: "New Hire Scrub Kit",
        items: [
          "2x embroidered scrub tops",
          "1x embroidered fleece jacket",
          "1x branded badge reel",
        ],
      },
      {
        name: "Admin Staff Kit",
        items: [
          "2x embroidered polos",
          "1x embroidered softshell jacket",
          "1x branded tumbler",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you embroider directly on scrubs?",
        answer:
          "Yes. We embroider on most medical-grade scrub tops and jackets. We use stabilizers and techniques specific to the lightweight fabrics used in scrubs to prevent puckering. Our digitizing process optimizes stitch density for scrub material.",
      },
      {
        question: "How do you maintain color consistency across reorders?",
        answer:
          "We lock your thread colors to PMS values and keep your digitized logo files on record. Every reorder uses the same files, the same thread, and the same garment specs. We also maintain approved garment color codes to prevent shade drift between dye lots.",
      },
      {
        question: "Do you handle individual location shipments?",
        answer:
          "Yes. We ship to as many locations as you need with individual packing slips and size breakdowns per location. Multi-location shipping is standard — no extra coordination fees.",
      },
    ],
    relatedServiceSlugs: ["embroidery", "dtf-printing", "screen-printing"],
  },
  {
    slug: "hospitality",
    name: "Hospitality & Restaurants",
    title: "Custom Apparel for Hospitality & Restaurants",
    subtitle: "Hospitality & Restaurants",
    description:
      "Branded uniforms, aprons, and merchandise for hotels, restaurants, bars, and event venues. Professional looks that handle the demands of service environments.",
    painPoints: [
      {
        title: "High turnover, frequent reorders",
        description:
          "Hospitality has some of the highest staff turnover in any industry. You need a vendor that keeps files on record and turns reorders around fast.",
      },
      {
        title: "Stain and wash resistance",
        description:
          "Food, grease, and commercial laundering destroy cheap decoration. You need prints and embroidery that survive the kitchen and the wash.",
      },
      {
        title: "Brand-forward guest experience",
        description:
          "Staff uniforms are part of the guest experience. Inconsistent or shabby-looking branded apparel undermines the brand you've built.",
      },
      {
        title: "Multi-role uniform needs",
        description:
          "Front of house, back of house, management, events — each role needs different garments with the same consistent branding.",
      },
    ],
    recommendedProducts: [
      {
        name: "Embroidered Polos & Button-Downs",
        description:
          "Front-of-house uniforms with clean, professional embroidered logos. Available in a range of colors to match brand palettes.",
      },
      {
        name: "Branded Aprons",
        description:
          "Screen-printed or embroidered bib and waist aprons for kitchen and service staff.",
      },
      {
        name: "DTF-Printed Merch Tees",
        description:
          "Branded merchandise t-shirts for restaurants and venues — full-color designs for retail and giveaways.",
      },
      {
        name: "Embroidered Hats & Visors",
        description:
          "Caps and visors with embroidered logos for kitchen crews, baristas, and outdoor event staff.",
      },
    ],
    recommendedMethods: ["Embroidery", "Screen Printing", "DTF Printing"],
    kits: [
      {
        name: "Front of House Kit",
        items: [
          "2x embroidered polos",
          "1x branded apron",
          "1x embroidered cap",
        ],
      },
      {
        name: "Merchandise Starter Pack",
        items: [
          "50x DTF-printed merch tees",
          "25x branded stickers",
          "25x branded pint glasses",
        ],
      },
    ],
    faqs: [
      {
        question: "What's the best decoration method for aprons?",
        answer:
          "Embroidery works best for a premium, long-lasting look on aprons. For full-color designs or detailed artwork, DTF transfers hold up well on the cotton-poly blends most aprons use. Screen printing is also an option for simple, bold logo placements.",
      },
      {
        question: "Can you produce branded merchandise we can sell to customers?",
        answer:
          "Absolutely. We produce retail-quality merchandise — tees, hats, tumblers, tote bags — with the same attention to quality as staff uniforms. Many of our restaurant and brewery clients sell branded merch as an additional revenue stream.",
      },
      {
        question: "How fast can you turn around reorders for new hires?",
        answer:
          "With your files on record, reorders typically ship in 3–5 business days. For urgent needs, we offer rush production (1–3 business days) at a small upcharge.",
      },
    ],
    relatedServiceSlugs: ["embroidery", "screen-printing", "dtf-printing"],
  },
  {
    slug: "education",
    name: "Education",
    title: "Custom Apparel for Schools & Universities",
    subtitle: "Education",
    description:
      "Spirit wear, staff uniforms, team gear, and event apparel for K-12 schools, colleges, and universities. Budget-friendly options without sacrificing quality.",
    painPoints: [
      {
        title: "Tight budgets",
        description:
          "School budgets are thin. You need competitive per-unit pricing, especially for large spirit wear runs and booster club orders.",
      },
      {
        title: "Multiple stakeholders",
        description:
          "Athletic directors, booster clubs, PTA, admin — everyone orders separately with different needs but the same brand. Consistency gets lost.",
      },
      {
        title: "Seasonal spikes",
        description:
          "Back-to-school, homecoming, playoffs, graduation — demand spikes are predictable but intense. You need a vendor who can handle volume surges.",
      },
      {
        title: "Age-appropriate sizing",
        description:
          "Youth sizes (YXS–YXL) and adult sizes (S–5XL) needed across the same designs, with consistent artwork scaling.",
      },
    ],
    recommendedProducts: [
      {
        name: "Screen-Printed Spirit Wear",
        description:
          "Tees, hoodies, and sweatpants with school colors and mascot designs. High-volume pricing keeps per-unit costs low.",
      },
      {
        name: "Embroidered Staff Polos",
        description:
          "Professional polos for teachers and administrators with embroidered school logos.",
      },
      {
        name: "DTF Team & Club Apparel",
        description:
          "Full-color designs for teams, clubs, and events — works on any garment color without minimum restrictions on select products.",
      },
      {
        name: "Event & Fundraiser Tees",
        description:
          "Screen-printed tees for 5K runs, charity events, and fundraisers. Designed for quick turnaround and budget pricing.",
      },
    ],
    recommendedMethods: ["Screen Printing", "DTF Printing", "Embroidery"],
    kits: [
      {
        name: "New Teacher Welcome Kit",
        items: [
          "1x embroidered polo",
          "1x screen-printed school tee",
          "1x branded tumbler",
          "1x branded lanyard",
        ],
      },
      {
        name: "Spirit Wear Bundle",
        items: [
          "1x screen-printed tee",
          "1x screen-printed hoodie",
          "1x branded cap",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you offer special pricing for schools and booster clubs?",
        answer:
          "Yes. We offer education pricing with volume discounts that scale with your annual total across all orders — spirit wear, staff uniforms, team gear, and events all count toward your volume tier. We also work with PO-based billing for districts.",
      },
      {
        question: "Can you handle back-to-school volume?",
        answer:
          "Yes. We plan for seasonal surges and reserve production capacity for education clients during peak ordering windows (July–September, December, March–May). Early orders get priority scheduling and the best turnaround.",
      },
      {
        question: "Do you print on youth sizes?",
        answer:
          "Yes. We carry youth sizes from YXS through YXL in most popular garment styles. Artwork is automatically scaled for youth garments to maintain proportions. No separate setup fees for youth vs. adult sizes on the same design.",
      },
    ],
    relatedServiceSlugs: ["screen-printing", "dtf-printing", "embroidery"],
  },
  {
    slug: "nonprofits",
    name: "Nonprofits & Organizations",
    title: "Custom Apparel for Nonprofits & Organizations",
    subtitle: "Nonprofits & Organizations",
    description:
      "Event tees, volunteer gear, fundraiser merchandise, and staff uniforms for nonprofits — with pricing that respects tight budgets and big missions.",
    painPoints: [
      {
        title: "Limited budgets, high visibility needs",
        description:
          "Every dollar matters. You need branded apparel that makes an impact at events and in the community without breaking the budget.",
      },
      {
        title: "Event-driven ordering",
        description:
          "Galas, 5Ks, volunteer days, awareness campaigns — each event needs unique apparel on a tight timeline with uncertain final counts.",
      },
      {
        title: "Donor and sponsor recognition",
        description:
          "Sponsors expect their logos on event apparel. Managing multiple logos, placements, and approval processes adds complexity.",
      },
      {
        title: "Volunteer and staff differentiation",
        description:
          "Volunteers, staff, board members, and event participants often need different garment types or colors with the same core branding.",
      },
    ],
    recommendedProducts: [
      {
        name: "Screen-Printed Event Tees",
        description:
          "Budget-friendly tees for 5Ks, volunteer events, and awareness campaigns. 1–3 color prints keep costs low at volume.",
      },
      {
        name: "DTF-Printed Fundraiser Merch",
        description:
          "Full-color merchandise for online stores and fundraising events — no minimums on select products.",
      },
      {
        name: "Embroidered Staff Polos",
        description:
          "Professional polos for office staff and board members with embroidered organizational logos.",
      },
      {
        name: "Branded Tote Bags & Accessories",
        description:
          "Practical branded items for event swag bags — totes, lanyards, water bottles, and pens.",
      },
    ],
    recommendedMethods: ["Screen Printing", "DTF Printing", "Embroidery"],
    kits: [
      {
        name: "Event Volunteer Kit",
        items: [
          "1x screen-printed event tee",
          "1x branded lanyard",
          "1x branded water bottle",
        ],
      },
      {
        name: "Staff Welcome Kit",
        items: [
          "1x embroidered polo",
          "1x screen-printed org tee",
          "1x branded tote bag",
          "1x branded notebook",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you offer nonprofit pricing?",
        answer:
          "Yes. We offer discounted pricing for registered 501(c)(3) organizations. Volume discounts apply across all orders throughout the year — event tees, staff uniforms, and fundraiser merch all count toward your tier.",
      },
      {
        question: "Can you handle multi-sponsor back prints?",
        answer:
          "Yes. We regularly produce event tees with sponsor walls on the back. We manage the layout, sizing, and proofing of multi-logo placements. Send us the logos and we handle the rest — including proofs for sponsor approval.",
      },
      {
        question: "What's the cheapest option for large volunteer events?",
        answer:
          "1–2 color screen-printed tees on a budget-friendly garment like the Gildan 5000. At volumes over 200 pieces, you can typically get under $6 per shirt including garment and print. We'll help you find the sweet spot between budget and quality.",
      },
    ],
    relatedServiceSlugs: ["screen-printing", "dtf-printing", "embroidery"],
  },
  {
    slug: "corporate",
    name: "Corporate & Office",
    title: "Custom Apparel for Corporate & Office",
    subtitle: "Corporate & Office",
    description:
      "Polished branded apparel for corporate teams — onboarding kits, company stores, event gear, and executive gifts that reflect your brand standards.",
    painPoints: [
      {
        title: "Brand consistency across departments",
        description:
          "Marketing, HR, sales, and ops all order branded gear independently. Without centralized control, logo usage, garment quality, and decoration quality drift.",
      },
      {
        title: "Onboarding at scale",
        description:
          "New hire kits need to ship quickly, look premium, and be available in the full size range — even when you're hiring 20 people in a month.",
      },
      {
        title: "Premium quality expectations",
        description:
          "Corporate environments demand polished, retail-quality apparel. Cheap garments and sloppy decoration reflect poorly on the brand.",
      },
      {
        title: "Event and conference deadlines",
        description:
          "Trade shows, company offsites, and team events have hard deadlines. Late delivery isn't an option.",
      },
    ],
    recommendedProducts: [
      {
        name: "Embroidered Premium Polos",
        description:
          "Nike, Under Armour, and TravisMathew polos with embroidered logos for client-facing and executive teams.",
      },
      {
        name: "Branded Outerwear",
        description:
          "Softshell jackets, quarter-zips, and vests with embroidered logos — popular for onboarding kits and company stores.",
      },
      {
        name: "DTF-Printed Event Apparel",
        description:
          "Full-color tees and hoodies for company events, hackathons, and team offsites.",
      },
      {
        name: "Custom Onboarding Kits",
        description:
          "Curated kits with apparel, drinkware, notebooks, and branded accessories — boxed and ready to ship to new hires.",
      },
    ],
    recommendedMethods: ["Embroidery", "DTF Printing", "Screen Printing"],
    kits: [
      {
        name: "New Hire Onboarding Kit",
        items: [
          "1x embroidered quarter-zip",
          "1x DTF-printed company tee",
          "1x branded notebook",
          "1x branded tumbler",
          "1x branded sticker pack",
        ],
      },
      {
        name: "Executive Gift Kit",
        items: [
          "1x embroidered premium polo",
          "1x embroidered softshell jacket",
          "1x branded leather notebook",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you set up an ongoing program for new hire kits?",
        answer:
          "Yes. We maintain your kit specs, garment inventory, and logo files on record. When you need kits, just send us the names, sizes, and shipping addresses. We assemble, box, and ship — typically within 5 business days.",
      },
      {
        question: "What's the best decoration method for premium corporate apparel?",
        answer:
          "Embroidery is the standard for corporate environments. It looks professional, feels premium, and lasts longer than any print method. For event tees and casual gear, DTF printing gives you full-color capability with a soft hand feel.",
      },
      {
        question: "Do you handle trade show and conference orders with hard deadlines?",
        answer:
          "Yes. We prioritize deadline-driven orders and offer guaranteed delivery dates with rush production options. We recommend placing conference orders at least 3 weeks before the event, but we can handle tighter timelines with rush surcharges.",
      },
    ],
    relatedServiceSlugs: ["embroidery", "dtf-printing", "screen-printing"],
  },
];
