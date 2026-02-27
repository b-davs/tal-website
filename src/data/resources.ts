export interface Resource {
  slug: string;
  title: string;
  description: string;
  category: string;
}

export const resources: Resource[] = [
  {
    slug: "artwork-file-guidelines",
    title: "Artwork & File Guidelines",
    description:
      "File formats, resolution requirements, and tips for getting the best results from your logo artwork.",
    category: "Guides",
  },
  {
    slug: "method-comparison",
    title: "Decoration Method Comparison",
    description:
      "Screen printing vs. embroidery vs. DTF vs. DTG — compare cost, durability, detail, and turnaround side by side.",
    category: "Tools",
  },
  {
    slug: "turnaround-shipping",
    title: "Turnaround Times & Shipping",
    description:
      "Standard and rush production timelines, shipping options, and how to plan your order around deadlines.",
    category: "Guides",
  },
  {
    slug: "logo-placement-sizing",
    title: "Logo Placement & Sizing Guide",
    description:
      "Standard logo positions, recommended sizes, and placement best practices for every garment type.",
    category: "Guides",
  },
  {
    slug: "care-durability",
    title: "Care & Durability Guide",
    description:
      "How to wash, dry, and care for decorated apparel to maximize the life of your prints and embroidery.",
    category: "Guides",
  },
];
