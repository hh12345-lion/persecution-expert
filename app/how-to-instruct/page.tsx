import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "How to Instruct a Persecution Expert Witness | UK Solicitors Guide",
  description:
    "Step-by-step guide to instructing a persecution expert witness for UK asylum appeals. Persecution ground identification, Legal Aid, letter of instruction, and oral evidence.",
  path: "/how-to-instruct",
});

const sections = [
  {
    title: "Section 1: Identify the persecution ground",
    body: "Review the appellant's profile and identify the applicable Refugee Convention ground or grounds: political opinion, religion, race/nationality, particular social group, or cross-cutting frameworks such as non-state actor persecution. Multiple grounds may apply.",
  },
  {
    title: "Section 2: Thematic expert or country expert (or both)?",
    body: "Persecution experts provide Convention ground analysis and persecution methodology applicable across countries. Country experts provide granular conditions in a single jurisdiction. Complex claims often benefit from both. Contact us if unsure which expert type is needed.",
  },
  {
    title: "Section 3: Legal Aid or privately funded?",
    body: "For Legal Aid cases, obtain LAA prior authority before instructing the expert. Provide the prior authority reference in your instruction. Privately funded instructions proceed on agreed fee terms. See our fees page for indicative rates.",
  },
  {
    title: "Section 4: Letter of instruction",
    body: "Prepare a letter of instruction setting out the proceedings, persecution ground, questions for the expert, the appellant's profile, and relevant documents. Follow the Adam Pipe Expert Reports guide (October 2025) for best practice. See our expert report standards guide for a template.",
  },
  {
    title: "Section 5: Documents to provide",
    body: "Provide the witness statement, Home Office refusal letter, any previous tribunal decisions, CPINs relevant to the country of origin, and any supporting documentation on the appellant's profile and feared persecution.",
  },
  {
    title: "Section 6: Report and written questions",
    body: "Standard reports take 2 to 3 weeks. The expert delivers the report to the instructing solicitor. Opposing parties may submit written questions, which the expert answers within the agreed timeframe and fee structure.",
  },
  {
    title: "Section 7: Oral evidence if directed",
    body: "Where the tribunal directs oral evidence, confirm expert availability at instruction. Oral evidence fees are additional to the report fee. Experts prepare for cross-examination on their report findings and methodology.",
  },
];

export default function HowToInstructPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "How to Instruct" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="How to Instruct a Persecution Expert Witness"
        subtitle="A step-by-step guide for UK immigration solicitors, barristers, and Legal Aid practitioners."
        breadcrumbs={crumbs}
      >
        {sections.map((section, i) => (
          <div key={i} className="mb-8">
            <h2 className="text-xl font-bold text-[#0c1218]">{section.title}</h2>
            <p className="mt-3 text-[#3a4550] leading-relaxed">{section.body}</p>
          </div>
        ))}

        <p className="text-[#3a4550] leading-relaxed">
          Ready to instruct?{" "}
          <Link href="/contact" className="text-[#d66a3a] hover:underline">
            Submit your case details
          </Link>{" "}
          or read our{" "}
          <Link href="/guides/expert-report-standards-guide" className="text-[#d66a3a] hover:underline">
            expert report standards guide
          </Link>
          .
        </p>
      </PageShell>
    </>
  );
}
