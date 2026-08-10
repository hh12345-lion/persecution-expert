import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { services, getService } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return createMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.name },
  ];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={service.faqs} />
      <PageShell title={service.h1} breadcrumbs={crumbs}>
        {service.content.map((p, i) => (
          <p key={i} className="mb-4 text-[#3a4550] leading-relaxed">
            {p}
          </p>
        ))}
        <FAQSection faqs={service.faqs} />
      </PageShell>
    </>
  );
}
