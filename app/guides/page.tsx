import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { guides } from "@/data/guides";

export const metadata = createMetadata({
  title: "Persecution Expert Solicitor Guides | Asylum Law Resources UK",
  description:
    "Solicitor guides on persecution grounds, HJ (Iran) LGBTQ+ asylum, state protection, internal relocation, non-state actor persecution, and expert report standards for UK tribunals.",
  path: "/guides",
});

export default function GuidesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Guides" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Solicitor Guides: Persecution Expert Evidence"
        subtitle="Practical guides for UK immigration solicitors instructing persecution expert witnesses."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 text-[#374151] leading-relaxed">
          These guides cover persecution grounds analysis, state protection methodology, internal relocation, and the
          instruction process for Legal Aid and privately funded cases. All guides align with Immigration Tribunal
          Practice Direction paragraph 10 and the Adam Pipe October 2025 guide.
        </p>
        <CardGrid
          items={guides.map((g) => ({
            title: g.title,
            description: g.metaDescription.slice(0, 120) + "...",
            href: `/guides/${g.slug}`,
          }))}
        />
        <p className="mt-8 text-[#374151]">
          For a comprehensive overview, see our{" "}
          <Link href="/persecution-grounds" className="font-semibold text-[#C8922A] hover:underline">
            persecution grounds pillar page
          </Link>
          .
        </p>
      </PageShell>
    </>
  );
}
