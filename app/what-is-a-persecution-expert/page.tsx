import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { SITE_UK_SCOPE } from "@/lib/constants";

export const metadata = createMetadata({
  title: "What Is a Persecution Expert Witness? | UK Immigration Tribunal Role",
  description:
    "A persecution expert witness provides independent analysis of persecution risk for UK immigration tribunals: Refugee Convention grounds, state protection, and country condition methodology explained.",
  path: "/what-is-a-persecution-expert",
});

export default function WhatIsAPersecutionExpertPage() {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "What Is a Persecution Expert?" },
  ];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="What Is a Persecution Expert Witness?"
        subtitle="The role, qualifications, and value of persecution expert evidence in UK asylum and immigration tribunal proceedings."
        breadcrumbs={crumbs}
      >
        <p className="mb-4 text-[#3a4550] leading-relaxed">{SITE_UK_SCOPE}</p>
        <p className="mb-4 text-[#3a4550] leading-relaxed">
          A persecution expert witness provides independent analysis of persecution risk for UK immigration tribunals. Unlike
          country-specific expert witnesses who specialise in conditions within a single jurisdiction, persecution experts
          analyse Convention grounds, state protection, non-state actor persecution, and internal relocation methodology
          that applies across all countries.
        </p>
        <p className="mb-4 text-[#3a4550] leading-relaxed">
          Persecution experts address the legal and analytical framework of asylum claims: whether the appellant faces
          persecution for a Refugee Convention reason, whether state protection is available, whether non-state actors pose
          a Convention-related risk, and whether internal relocation provides a viable alternative. This thematic analysis
          complements country-specific expert evidence where granular country conditions are also required.
        </p>
        <p className="mb-4 text-[#3a4550] leading-relaxed">
          Expert witnesses in immigration proceedings must maintain impartiality. Their primary duty is to the tribunal, not
          the instructing party. Reports comply with Immigration Tribunal Practice Direction paragraph 10 (2023) and the
          Adam Pipe Expert Reports guide (October 2025).
        </p>
        <p className="text-[#3a4550] leading-relaxed">
          Learn more about{" "}
          <Link href="/persecution-grounds" className="text-[#d66a3a] hover:underline">
            persecution grounds
          </Link>
          ,{" "}
          <Link href="/qualifications" className="text-[#d66a3a] hover:underline">
            expert qualifications
          </Link>
          , and{" "}
          <Link href="/how-reports-work" className="text-[#d66a3a] hover:underline">
            how reports work
          </Link>
          .
        </p>
      </PageShell>
    </>
  );
}
