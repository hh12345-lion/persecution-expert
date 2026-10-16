import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { getPersecutionType } from "@/data/persecution-types";
import { getCaseType } from "@/data/case-types";
import { photoFor } from "@/lib/page-photos";

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
      <PageShell photo={photoFor(`/persecution-types/${slug}`)} title={type.h1} breadcrumbs={crumbs}>
        {type.content.map((p, i) => (
          <p key={i} className="mb-4 text-[#4a4246] leading-relaxed">
            {p}
          </p>
        ))}

        <h2 className="mt-8 text-xl font-bold text-[#3c3438]">Related Case Types</h2>
        <ul className="mt-4 space-y-2">
          {type.relatedCaseTypes.map((s) => {
            const ct = getCaseType(s);
            return (
              <li key={s}>
                <Link href={`/case-types/${s}`} className="text-[#5f1b27] hover:underline">
                  {ct?.title ?? s}
                </Link>
              </li>
            );
          })}
        </ul>

        <FAQSection faqs={type.faqs} />

        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          <Link href="/persecution-grounds" className="text-[#5f1b27] hover:underline">
            Persecution grounds
          </Link>
          <Link href="/how-reports-work" className="text-[#5f1b27] hover:underline">
            How reports work
          </Link>
          <Link href="/how-to-instruct" className="text-[#5f1b27] hover:underline">
            How to refer
          </Link>
        </div>
      </PageShell>
    </>
  );
}
