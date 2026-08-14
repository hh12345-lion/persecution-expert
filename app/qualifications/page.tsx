import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { SITE_UK_SCOPE } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Persecution Expert Witness Qualifications UK",
  description:
    "Qualifications for persecution expert witnesses in UK immigration tribunals. Academic credentials, field research, tribunal practice, and Immigration Tribunal Practice Direction compliance.",
  path: "/qualifications",
});

export default function QualificationsPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Qualifications" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Persecution Expert Witness Qualifications UK"
        subtitle="Core credentials, thematic vs country expertise, and expert duties in UK immigration tribunal proceedings."
        breadcrumbs={crumbs}
      >
        <p className="mt-4 mb-4 text-[#5c5348] leading-relaxed">{SITE_UK_SCOPE}</p>
        <h2 className="text-2xl font-bold text-[#2c261f]">Core Credentials</h2>
        <p className="mt-4 mb-4 text-[#5c5348] leading-relaxed">
          Persecution expert witnesses hold academic expertise (PhD, MA in relevant disciplines including political science,
          law, sociology, human rights, and international relations), field research experience, and familiarity with UK
          asylum law and tribunal practice. Experts comply with Immigration Tribunal Practice Direction paragraph 10 (2023)
          and have prior tribunal acceptance records.
        </p>
        <ul className="mb-4 list-disc space-y-2 pl-6 text-[#5c5348] leading-relaxed">
          <li>Advanced academic qualification in a relevant discipline</li>
          <li>Demonstrable field research or professional experience</li>
          <li>Familiarity with Refugee Convention grounds and Qualification Directive</li>
          <li>Knowledge of leading authority: HJ (Iran) [2010], RT (Zimbabwe) [2012], MOJ (Somalia) [2014]</li>
          <li>Immigration Tribunal Practice Direction compliance</li>
          <li>Prior tribunal acceptance and oral evidence experience where applicable</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-[#2c261f]">Thematic vs Country Expertise</h2>
        <p className="mt-4 mb-4 text-[#5c5348] leading-relaxed">
          Persecution experts may have either thematic expertise (LGBTQ+ persecution across multiple countries) or
          country-specific expertise (single country in-depth knowledge). The choice depends on the specific claim profile.
        </p>
        <p className="mb-4 text-[#5c5348] leading-relaxed">
          For Convention ground analysis, state protection, and persecution methodology, a thematic persecution expert is
          typically instructed. For granular country conditions, a country expert may supplement the persecution expert
          report. Many complex claims benefit from both.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-[#2c261f]">Expert Duties: Immigration Tribunal</h2>
        <p className="mt-4 mb-4 text-[#5c5348] leading-relaxed">
          Expert witnesses in immigration proceedings owe their primary duty to the tribunal, not the instructing party.
          They must maintain independence and objectivity throughout the instruction process. Expert reports must contain a
          statement of truth and comply with the Adam Pipe Expert Reports guide (October 2025).
        </p>
        <p className="text-[#5c5348] leading-relaxed">
          See our{" "}
          <Link href="/how-reports-work" className="text-[#7c2430] hover:underline">
            how reports work
          </Link>{" "}
          page and{" "}
          <Link href="/guides/expert-report-standards-guide" className="text-[#7c2430] hover:underline">
            expert report standards guide
          </Link>{" "}
          for full details on report requirements.
        </p>
      </PageShell>
    </>
  );
}
