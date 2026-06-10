import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms of Use | Persecution Expert",
  description: "Terms of use for persecutionexpert.com",
  path: "/terms",
  noindex: true,
  follow: true,
});

export default function TermsPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Terms" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell title="Terms of Use" breadcrumbs={crumbs}>
        <p className="text-[#374151] leading-relaxed">
          Persecution Expert is an expert witness matching service for UK immigration solicitors. We are not a law firm
          and do not provide legal advice. Expert reports instructed through our service operate independently and owe
          their primary duty to the tribunal under Immigration Tribunal Practice Direction paragraph 10.
        </p>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Fees quoted are indicative and confirmed on instruction. Cancellation terms are agreed between the instructing
          solicitor and the expert at the point of engagement.
        </p>
      </PageShell>
    </>
  );
}
