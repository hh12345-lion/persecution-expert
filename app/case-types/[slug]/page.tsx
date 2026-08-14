import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { caseTypes, getCaseType } from "@/data/case-types";
import { getPersecutionType } from "@/data/persecution-types";

export function generateStaticParams() {
  return caseTypes.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseType = getCaseType(slug);
  if (!caseType) return {};
  return createMetadata({
    title: caseType.metaTitle,
    description: caseType.metaDescription,
    path: `/case-types/${slug}`,
  });
}

export default async function CaseTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseType = getCaseType(slug);
  if (!caseType) notFound();

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Case Types", href: "/case-types" },
    { label: caseType.title },
  ];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={caseType.faqs} />
      <PageShell title={caseType.h1} breadcrumbs={crumbs}>
        {caseType.content.map((p, i) => (
          <p key={i} className="mb-4 text-[#5c5348] leading-relaxed">
            {p}
          </p>
        ))}

        <h2 className="mt-8 text-xl font-bold text-[#2c261f]">Related Persecution Types</h2>
        <ul className="mt-4 space-y-2">
          {caseType.relatedPersecutionTypes.map((s) => {
            const pt = getPersecutionType(s);
            return (
              <li key={s}>
                <Link href={`/persecution-types/${s}`} className="text-[#7c2430] hover:underline">
                  {pt?.title ?? s}
                </Link>
              </li>
            );
          })}
        </ul>

        <FAQSection faqs={caseType.faqs} />
      </PageShell>
    </>
  );
}
