import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { JsonLd } from "@/components/ui/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";

const PAGE_DESCRIPTION =
  "How persecution expert reports work: expert duties, report structure, going beyond the CPIN, Legal Aid compatibility, and timeline from instruction to report for UK immigration tribunals.";

export const metadata = createMetadata({
  title: "How Persecution Expert Reports Work | Standards, Structure & Process",
  description: PAGE_DESCRIPTION,
  path: "/how-reports-work",
});

export default function HowReportsWorkPage() {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "How Reports Work" },
  ];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <JsonLd
        data={articleSchema({
          headline: "How Persecution Expert Reports Work: Standards, Structure and Process",
          description: PAGE_DESCRIPTION,
          path: "/how-reports-work",
        })}
      />
      <PageShell
        title="How Persecution Expert Reports Work: Standards, Structure and Process"
        subtitle="Expert duties, report contents, CPIN analysis, Legal Aid compatibility, and the instruction timeline for UK immigration tribunals."
        breadcrumbs={crumbs}
      >
        <h2 className="text-2xl font-bold text-[#0c1218]">The Expert&apos;s Duties</h2>
        <p className="mt-4 mb-4 text-[#3a4550] leading-relaxed">
          Expert witnesses in immigration proceedings are required to maintain impartiality. Their evidence is intended to
          assist the tribunal in reaching a fair and informed decision. Responsibilities include providing opinion on risk
          assessment and country conditions, and preparing comprehensive expert reports compliant with Immigration Tribunal
          guidance including Practice Direction paragraph 10 (2023) and the Adam Pipe October 2025 guide.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-[#0c1218]">What a Persecution Report Contains</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-6 text-[#3a4550] leading-relaxed">
          <li>Expert&apos;s qualifications and methodology</li>
          <li>Sources used (CPINs, UNHCR reports, NGO reports, field research, tribunal decisions)</li>
          <li>Country conditions relevant to the specific profile</li>
          <li>Persecution risk analysis (Convention ground, actors, state protection)</li>
          <li>Internal relocation analysis</li>
          <li>Expert&apos;s opinion</li>
          <li>Statement of truth</li>
        </ol>

        <h2 className="mt-10 text-2xl font-bold text-[#0c1218]">Going Beyond the CPIN</h2>
        <p className="mt-4 mb-4 text-[#3a4550] leading-relaxed">
          In many cases solicitors and advocates instruct an expert witness to provide specialist evidence. Experts research
          issues such as political instability, human rights abuses, discrimination, or specific targeting of a group.
        </p>
        <p className="mb-4 text-[#3a4550] leading-relaxed">
          The expert&apos;s role is not to reproduce the CPIN but to provide independent analysis that may go beyond it,
          particularly where: the CPIN does not address the specific profile; country conditions have changed since the
          CPIN was published; or the individual facts require analysis the CPIN cannot provide.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-[#0c1218]">Legal Aid Compatibility</h2>
        <p className="mt-4 mb-4 text-[#3a4550] leading-relaxed">
          Persecution expert reports are commonly instructed under Legal Aid. Solicitors should obtain LAA prior authority
          before the expert begins work. Indicative fees are available on request for prior authority applications. See our{" "}
          <Link href="/how-to-instruct" className="text-[#d66a3a] hover:underline">
            how to instruct
          </Link>{" "}
          for Legal Aid rates and privately funded options.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-[#0c1218]">Timeline from Instruction to Report</h2>
        <p className="mt-4 mb-4 text-[#3a4550] leading-relaxed">
          Standard persecution expert reports typically take 2 to 3 weeks from receipt of the letter of instruction and
          relevant documents. The timeline includes: initial case review and scoping (1 to 2 business days), research and
          analysis (1 to 2 weeks), report drafting and quality review (3 to 5 business days), and delivery to the
          instructing solicitor.
        </p>
        <p className="text-[#3a4550] leading-relaxed">
          Urgent instructions are available for imminent tribunal hearings subject to expert availability. For the full
          instruction process, see{" "}
          <Link href="/how-to-instruct" className="text-[#d66a3a] hover:underline">
            how to instruct a persecution expert
          </Link>
          .
        </p>
      </PageShell>
    </>
  );
}
