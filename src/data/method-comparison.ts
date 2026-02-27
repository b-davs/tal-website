export interface ComparisonFactor {
  label: string;
  description: string;
}

export interface MethodData {
  slug: string;
  name: string;
  factors: Record<string, { value: string; rating: "best" | "good" | "fair" | "poor" }>;
}

export const comparisonFactors: ComparisonFactor[] = [
  {
    label: "Price per Unit (at 100+)",
    description: "Approximate cost per piece at volumes of 100 or more",
  },
  {
    label: "Setup Fees",
    description: "One-time costs before production begins",
  },
  {
    label: "Number of Colors",
    description: "Color capability and limitations",
  },
  {
    label: "Durability",
    description: "How well the decoration holds up over time and washes",
  },
  {
    label: "Fabric Compatibility",
    description: "Range of fabrics and garment types the method works on",
  },
  {
    label: "Best For",
    description: "The ideal use case for this method",
  },
  {
    label: "Detail Capability",
    description: "How well the method handles fine lines, small text, and gradients",
  },
  {
    label: "Minimums",
    description: "Typical minimum order quantity",
  },
  {
    label: "Turnaround",
    description: "Standard production time after art approval",
  },
  {
    label: "Wash Durability",
    description: "How many wash cycles the decoration withstands",
  },
];

export const methods: MethodData[] = [
  {
    slug: "screen-printing",
    name: "Screen Printing",
    factors: {
      "Price per Unit (at 100+)": {
        value: "$3–$8/piece",
        rating: "best",
      },
      "Setup Fees": {
        value: "$25–$50 per color (screen burn)",
        rating: "fair",
      },
      "Number of Colors": {
        value: "1–6 spot colors (PMS matched)",
        rating: "good",
      },
      "Durability": {
        value: "Excellent — plastisol outlasts all print methods",
        rating: "best",
      },
      "Fabric Compatibility": {
        value: "Cotton, cotton-poly blends. Limited on 100% polyester.",
        rating: "good",
      },
      "Best For": {
        value: "Bulk orders (50+) with 1–6 colors",
        rating: "best",
      },
      "Detail Capability": {
        value: "Good for bold designs, limited on fine gradients",
        rating: "good",
      },
      "Minimums": {
        value: "24 pieces typical",
        rating: "good",
      },
      "Turnaround": {
        value: "5–7 business days",
        rating: "good",
      },
      "Wash Durability": {
        value: "50–100+ washes without noticeable fade",
        rating: "best",
      },
    },
  },
  {
    slug: "embroidery",
    name: "Embroidery",
    factors: {
      "Price per Unit (at 100+)": {
        value: "$5–$15/piece (varies by stitch count)",
        rating: "good",
      },
      "Setup Fees": {
        value: "$30–$75 digitizing fee (one-time)",
        rating: "fair",
      },
      "Number of Colors": {
        value: "Up to 15 thread colors per design",
        rating: "best",
      },
      "Durability": {
        value: "Outstanding — thread lasts the life of the garment",
        rating: "best",
      },
      "Fabric Compatibility": {
        value: "Works on almost everything: polos, jackets, hats, bags, fleece",
        rating: "best",
      },
      "Best For": {
        value: "Professional/premium look — polos, hats, jackets",
        rating: "best",
      },
      "Detail Capability": {
        value: "Good for logos, limited on photographic detail or very small text (<6pt)",
        rating: "good",
      },
      "Minimums": {
        value: "No minimum (1 piece OK)",
        rating: "best",
      },
      "Turnaround": {
        value: "5–10 business days",
        rating: "good",
      },
      "Wash Durability": {
        value: "Lifetime — stitching doesn't fade or crack",
        rating: "best",
      },
    },
  },
  {
    slug: "dtf-printing",
    name: "DTF Printing",
    factors: {
      "Price per Unit (at 100+)": {
        value: "$4–$10/piece",
        rating: "good",
      },
      "Setup Fees": {
        value: "None — digital process, no screens or plates",
        rating: "best",
      },
      "Number of Colors": {
        value: "Unlimited — full CMYK, photos, gradients",
        rating: "best",
      },
      "Durability": {
        value: "Very good — comparable to screen print with proper press",
        rating: "good",
      },
      "Fabric Compatibility": {
        value: "Excellent — cotton, polyester, blends, nylon, canvas",
        rating: "best",
      },
      "Best For": {
        value: "Complex/full-color designs, polyester, small-to-medium runs",
        rating: "best",
      },
      "Detail Capability": {
        value: "Excellent — photographic quality, fine lines, gradients",
        rating: "best",
      },
      "Minimums": {
        value: "No minimum (1 piece OK)",
        rating: "best",
      },
      "Turnaround": {
        value: "3–5 business days",
        rating: "best",
      },
      "Wash Durability": {
        value: "40–60+ washes with proper care",
        rating: "good",
      },
    },
  },
  {
    slug: "dtg-printing",
    name: "DTG Printing",
    factors: {
      "Price per Unit (at 100+)": {
        value: "$8–$15/piece",
        rating: "fair",
      },
      "Setup Fees": {
        value: "None — digital process",
        rating: "best",
      },
      "Number of Colors": {
        value: "Unlimited — full CMYK, photos, gradients",
        rating: "best",
      },
      "Durability": {
        value: "Good — ink bonds to fibers, softer hand feel",
        rating: "good",
      },
      "Fabric Compatibility": {
        value: "Best on 100% cotton. Limited on polyester and dark blends.",
        rating: "fair",
      },
      "Best For": {
        value: "Photographic prints on cotton, on-demand/low MOQ",
        rating: "good",
      },
      "Detail Capability": {
        value: "Excellent — the softest print with highest detail",
        rating: "best",
      },
      "Minimums": {
        value: "No minimum (1 piece OK)",
        rating: "best",
      },
      "Turnaround": {
        value: "3–5 business days",
        rating: "best",
      },
      "Wash Durability": {
        value: "30–50 washes (follow care instructions)",
        rating: "fair",
      },
    },
  },
];
