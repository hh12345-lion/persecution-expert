import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { createMetadata } from "@/lib/metadata";
import { persecutionTypes } from "@/data/persecution-types";

export const metadata = createMetadata({
  title: "Persecution Types | Expert Witness Reports for UK Asylum Tribunals",
  description:
    "Persecution type expert witness reports for UK immigration tribunals. Political opinion, religious persecution, LGBTQ+, gender-based violence, race, PSG, and non-state actor analysis.",
  path: "/persecution-types",
});

export default function PersecutionTypesPage() {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Persecution Types" },
  ];

  return (
    <PageShell
      title="Persecution Types"
      subtitle="Thematic persecution analysis covering all Refugee Convention grounds and legal frameworks applicable across all countries."
      breadcrumbs={crumbs}
    >
      <p className="mb-8 text-[#3a4550] leading-relaxed">
        Persecution experts provide the overarching legal and analytical framework for asylum claims. Unlike country-specific
        experts who focus on conditions in a single jurisdiction, persecution type analysis applies persecution methodology
        to any country of origin. Select a persecution type below or read the complete{" "}
        <Link href="/persecution-grounds" className="text-[#d66a3a] hover:underline">
          persecution grounds guide
        </Link>
        .
      </p>
      <CardGrid
        items={persecutionTypes.map((p) => ({
          title: p.title,
          description: p.metaDescription,
          href: `/persecution-types/${p.slug}`,
        }))}
      />
    </PageShell>
  );
}
