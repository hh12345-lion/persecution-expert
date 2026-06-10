import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { caseTypes } from "@/data/case-types";

export const metadata = createMetadata({
  title: "Asylum Case Types | Persecution Expert Witness UK",
  description:
    "Persecution expert witness reports for FTT asylum appeals, Upper Tribunal country guidance, deportation, fresh claims, LGBTQ+, gender-based violence, and political persecution.",
  path: "/case-types",
});

export default function CaseTypesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Case Types" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Asylum Case Types"
        subtitle="Persecution expert witness evidence for all major UK immigration tribunal proceedings."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 text-[#374151] leading-relaxed">
          Persecution Expert provides qualified expert reports for First-tier Tribunal appeals, Upper Tribunal country
          guidance cases, deportation and Article 3 claims, fresh claims, LGBTQ+ asylum, gender-based violence, political
          persecution, and religious persecution proceedings.
        </p>
        <CardGrid
          items={caseTypes.map((c) => ({
            title: c.title,
            description: c.content[0].slice(0, 140) + "...",
            href: `/case-types/${c.slug}`,
          }))}
        />
        <p className="mt-8 text-[#374151]">
          See also our{" "}
          <Link href="/persecution-types" className="font-semibold text-[#C8922A] hover:underline">
            persecution types hub
          </Link>{" "}
          for persecution ground-specific expert evidence pages.
        </p>
      </PageShell>
    </>
  );
}
