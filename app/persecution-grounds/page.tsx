import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { JsonLd } from "@/components/ui/JsonLd";
import { ResponsiveTableWrap } from "@/components/ui/ResponsiveTableWrap";
import { createMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";

const PAGE_DESCRIPTION =
  "The complete guide to persecution grounds in UK asylum law: political opinion, religion, race, LGBTQ+, PSG, non-state actors, state protection, and internal relocation explained for solicitors.";

export const metadata = createMetadata({
  title: "Persecution Grounds UK | Refugee Convention, State Protection & Expert Evidence",
  description: PAGE_DESCRIPTION,
  path: "/persecution-grounds",
});

export default function PersecutionGroundsPage() {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Persecution Grounds" },
  ];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <JsonLd
        data={articleSchema({
          headline: "Persecution Grounds in UK Asylum Law: The Complete Guide for Solicitors",
          description: PAGE_DESCRIPTION,
          path: "/persecution-grounds",
        })}
      />
      <PageShell
        title="Persecution Grounds in UK Asylum Law: The Complete Guide for Solicitors"
        subtitle="The authoritative reference on Refugee Convention grounds, non-state actor framework, state protection, and internal relocation for UK immigration practitioners."
        breadcrumbs={crumbs}
      >
        <p className="mb-4 text-[#3a4550] leading-relaxed">
          Persecution grounds form the foundation of every asylum claim under the Refugee Convention 1951. Article 1A(2)
          defines a refugee as a person with a well-founded fear of persecution for reasons of race, religion, nationality,
          membership of a particular social group, or political opinion. UK law implements these grounds through the
          Qualification Directive, as retained and applied in domestic legislation. Persecution expert witnesses provide
          the independent analytical framework that tribunals require to assess whether a claim meets these grounds.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-[#0c1218]">The Refugee Convention 1951: Five Grounds</h2>
        <p className="mt-4 mb-6 text-[#3a4550] leading-relaxed">
          Each Convention ground requires a distinct analytical approach. The persecution must be for reasons of the
          Convention ground (the nexus requirement), must reach the persecution threshold, and must create a well-founded
          fear of future persecution on return. The table below summarises each ground, leading authority, and the
          expert&apos;s role in tribunal proceedings.
        </p>

        <ResponsiveTableWrap>
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="bg-[#0c1218] text-left text-white">
                <th className="border border-[#b7c3cf] px-4 py-3 font-semibold">Ground</th>
                <th className="border border-[#b7c3cf] px-4 py-3 font-semibold">Definition</th>
                <th className="border border-[#b7c3cf] px-4 py-3 font-semibold">Key Cases</th>
                <th className="border border-[#b7c3cf] px-4 py-3 font-semibold">Expert Role</th>
              </tr>
            </thead>
            <tbody className="text-[#3a4550]">
              <tr className="bg-white">
                <td id="political-opinion" className="border border-[#b7c3cf] px-4 py-3 font-medium">
                  <Link href="/persecution-types/political-opinion-persecution" className="text-[#d66a3a] hover:underline">
                    Political Opinion
                  </Link>
                </td>
                <td className="border border-[#b7c3cf] px-4 py-3">Actual or imputed political views</td>
                <td className="border border-[#b7c3cf] px-4 py-3">RT (Zimbabwe) [2012]</td>
                <td className="border border-[#b7c3cf] px-4 py-3">Analyse risk from political profile</td>
              </tr>
              <tr className="bg-[#e4e9ef]">
                <td id="religion" className="border border-[#b7c3cf] px-4 py-3 font-medium">
                  <Link href="/persecution-types/religious-persecution" className="text-[#d66a3a] hover:underline">
                    Religion
                  </Link>
                </td>
                <td className="border border-[#b7c3cf] px-4 py-3">Belief, practice, or imputation</td>
                <td className="border border-[#b7c3cf] px-4 py-3">Article 9 QD; HJ (Iran) parallel</td>
                <td className="border border-[#b7c3cf] px-4 py-3">Assess persecution severity and state protection</td>
              </tr>
              <tr className="bg-white">
                <td id="race" className="border border-[#b7c3cf] px-4 py-3 font-medium">
                  <span id="nationality" className="sr-only">Nationality</span>
                  <Link href="/persecution-types/racial-ethnic-persecution" className="text-[#d66a3a] hover:underline">
                    Race / Nationality
                  </Link>
                </td>
                <td className="border border-[#b7c3cf] px-4 py-3">Ethnic, racial, or national identity</td>
                <td className="border border-[#b7c3cf] px-4 py-3">Country-specific CG cases</td>
                <td className="border border-[#b7c3cf] px-4 py-3">Establish targeting of ethnic/national group</td>
              </tr>
              <tr className="bg-[#e4e9ef]">
                <td id="particular-social-group" className="border border-[#b7c3cf] px-4 py-3 font-medium">
                  <Link href="/persecution-types/particular-social-group" className="text-[#d66a3a] hover:underline">
                    Particular Social Group
                  </Link>
                </td>
                <td className="border border-[#b7c3cf] px-4 py-3">Shared protected characteristic + social perception</td>
                <td className="border border-[#b7c3cf] px-4 py-3">HJ (Iran) [2010]; PSG cases</td>
                <td className="border border-[#b7c3cf] px-4 py-3">Define PSG; assess social perception in COO</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-[#b7c3cf] px-4 py-3 font-medium">LGBTQ+ (via PSG / religion)</td>
                <td className="border border-[#b7c3cf] px-4 py-3">Sexual orientation and gender identity persecution</td>
                <td className="border border-[#b7c3cf] px-4 py-3">HJ (Iran) [2010]</td>
                <td className="border border-[#b7c3cf] px-4 py-3">Apply HJ (Iran) standard; assess open living risk</td>
              </tr>
            </tbody>
          </table>
        </ResponsiveTableWrap>

        <h2 className="mt-10 text-2xl font-bold text-[#0c1218]">The Non-State Actor Framework</h2>
        <p className="mt-4 mb-4 text-[#3a4550] leading-relaxed">
          Persecution is not limited to harm by state agents. Article 6 of the Qualification Directive defines actors of
          persecution to include non-state actors where the state is unable or unwilling to provide effective protection.
          Non-state actors include criminal gangs, terrorist organisations, family members, community groups, and
          vigilante groups. MOJ (Somalia) [2014] established the methodology for assessing state protection in non-state
          actor cases.
        </p>
        <p className="mb-4 text-[#3a4550] leading-relaxed">
          Two requirements must be satisfied: the non-state conduct must reach the persecution threshold, and the
          persecution must be for a Refugee Convention reason. Persecution experts assess both elements, analysing whether
          the state has genuinely failed to protect the appellant from Convention-related harm. See our dedicated page on{" "}
          <Link href="/persecution-types/non-state-actor-persecution" className="text-[#d66a3a] hover:underline">
            non-state actor persecution
          </Link>
          .
        </p>

        <h2 className="mt-10 text-2xl font-bold text-[#0c1218]">State Protection Analysis</h2>
        <p className="mt-4 mb-6 text-[#3a4550] leading-relaxed">
          State protection analysis is central to both refugee claims and non-state actor persecution. The three-part test
          requires assessment of whether a protection mechanism exists, whether it is effective in practice, and whether
          the specific appellant can access it.
        </p>

        <ResponsiveTableWrap>
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="bg-[#0c1218] text-left text-white">
                <th className="border border-[#b7c3cf] px-4 py-3 font-semibold">Element</th>
                <th className="border border-[#b7c3cf] px-4 py-3 font-semibold">Question</th>
                <th className="border border-[#b7c3cf] px-4 py-3 font-semibold">Expert&apos;s Analysis</th>
              </tr>
            </thead>
            <tbody className="text-[#3a4550]">
              <tr className="bg-white">
                <td className="border border-[#b7c3cf] px-4 py-3 font-medium">Existence</td>
                <td className="border border-[#b7c3cf] px-4 py-3">Does a protection mechanism exist?</td>
                <td className="border border-[#b7c3cf] px-4 py-3">Legal and institutional analysis</td>
              </tr>
              <tr className="bg-[#e4e9ef]">
                <td className="border border-[#b7c3cf] px-4 py-3 font-medium">Adequacy</td>
                <td className="border border-[#b7c3cf] px-4 py-3">Is protection effective in practice?</td>
                <td className="border border-[#b7c3cf] px-4 py-3">Field research and documented outcomes</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-[#b7c3cf] px-4 py-3 font-medium">Accessibility</td>
                <td className="border border-[#b7c3cf] px-4 py-3">Can this individual access it?</td>
                <td className="border border-[#b7c3cf] px-4 py-3">Profile-specific and location-specific</td>
              </tr>
            </tbody>
          </table>
        </ResponsiveTableWrap>

        <h2 className="mt-10 text-2xl font-bold text-[#0c1218]">Internal Relocation Alternative</h2>
        <p className="mt-4 mb-4 text-[#3a4550] leading-relaxed">
          Internal relocation (internal flight alternative) asks whether the appellant could safely and reasonably relocate
          within their country of origin. The test has two limbs: viability (the appellant would not face a real risk of
          persecution in the proposed area) and reasonableness (relocation would not be unduly harsh).
        </p>
        <p className="mb-4 text-[#3a4550] leading-relaxed">
          Persecution experts provide profile-specific internal relocation analysis. For LGBTQ+ claims, gender-based
          violence, and ethnic persecution, generic country-level conclusions are insufficient. The expert must assess
          whether the appellant&apos;s persecutors could locate them, whether Convention-based risk persists nationwide,
          and whether societal persecution would follow relocation.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-[#0c1218]">The Persecution Threshold: What Counts as Persecution</h2>
        <p className="mt-4 mb-4 text-[#3a4550] leading-relaxed">
          Not all mistreatment constitutes persecution. Article 9 of the Qualification Directive defines acts of persecution
          as sufficiently serious violations of fundamental human rights. Discrimination becomes persecution when it reaches
          this threshold of seriousness. A single act may suffice where it is sufficiently severe; alternatively, a
          systematic pattern of less severe acts may cumulatively reach the threshold.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-[#0c1218]">Cumulative Persecution</h2>
        <p className="mt-4 mb-4 text-[#3a4550] leading-relaxed">
          Cumulative persecution arises where individually insufficient acts of harm, when considered together, reach the
          persecution threshold through a systematic pattern of discrimination or mistreatment. Persecution experts assess
          whether the cumulative effect of documented harm, societal exclusion, economic deprivation, and state inaction
          constitutes persecution for the specific appellant profile.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-[#0c1218]">Expert Report Standards in the Immigration Tribunal</h2>
        <p className="mt-4 mb-4 text-[#3a4550] leading-relaxed">
          Expert witnesses in immigration proceedings must maintain impartiality. Their primary duty is to the tribunal,
          not the instructing party. Reports must comply with Immigration Tribunal Practice Direction paragraph 10 (2023).
        </p>
        <p className="mb-4 text-[#3a4550] leading-relaxed">
          Expert Reports in the Immigration Tribunal (October 2025), the Adam Pipe guide, brings together relevant material
          and resources to assist in the preparation of high-quality expert evidence and to support practitioners in
          improving the standard of expert reports and in drafting effective letters of instruction. Persecution expert
          reports should address Convention grounds, state protection, internal relocation, and provide a reasoned opinion
          supported by cited sources including CPINs, UNHCR reports, NGO documentation, and tribunal decisions.
        </p>
        <p className="text-[#3a4550] leading-relaxed">
          For detailed guidance on report structure and the instruction process, see{" "}
          <Link href="/how-reports-work" className="text-[#d66a3a] hover:underline">
            how persecution expert reports work
          </Link>
          ,{" "}
          <Link href="/country-experts" className="text-[#d66a3a] hover:underline">
            country expert witness network
          </Link>
          , and{" "}
          <Link href="/how-to-instruct" className="text-[#d66a3a] hover:underline">
            how to instruct a persecution expert
          </Link>
          .
        </p>
      </PageShell>
    </>
  );
}
