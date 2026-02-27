import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryPageLayout from "@/components/IndustryPageLayout";
import {
  BreadcrumbJsonLd,
  ServiceJsonLd,
  FAQPageJsonLd,
} from "@/components/JsonLd";
import { industries } from "@/data/industries";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return {};

  return {
    title: industry.title,
    description: industry.description,
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: industry.name, href: `/industries/${industry.slug}` },
        ]}
      />
      <ServiceJsonLd
        name={`Custom Apparel for ${industry.name}`}
        description={industry.description}
        url={`/industries/${industry.slug}`}
        serviceType="Custom Apparel Decoration"
      />
      <FAQPageJsonLd faqs={industry.faqs} />
      <IndustryPageLayout industry={industry} />
    </>
  );
}
