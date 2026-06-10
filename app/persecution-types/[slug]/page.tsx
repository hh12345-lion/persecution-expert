import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { persecutionTypes, getPersecutionType } from "@/data/persecution-types";
import { getCaseType } from "@/data/case-types";

export function generateStaticParams() {
  return persecutionTypes.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const type = getPersecutionType(slug);
  if (!type) return {};
  return createMetadata({
    title: type.metaTitle,
    description: type.metaDescription,
    path: `/persecution-types/${slug}`,
  });
}

export default async function PersecutionTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const type = getPersecutionType(slug);
  if (!type) notFound();

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Persecution Types", href: "/persecution-types" },
    { label: type.title },
  ];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={type.faqs} />
      <PageShell title={type.h1} breadcrumbs={crumbs}>
        {type.content.map((p, i) => (
          <p key={i} className="mb-4 text-[#374151] leading-relaxed">
            {p}
          </p>
        ))}

        <h2 className="mt-8 text-xl font-bold text-[#1A3A5C]">Related Case Types</h2>
        <ul className="mt-4 space-y-2">
          {type.relatedCaseTypes.map((s) => {
            const ct = getCaseType(s);
            return (
              <li key={s}>
                <Link href={`/case-types/${s}`} className="text-[#C8922A] hover:underline">
                  {ct?.title ?? s}
                </Link>
              </li>
            );
          })}
        </ul>

        <FAQSection faqs={type.faqs} />
      </PageShell>
    </>
  );
}
