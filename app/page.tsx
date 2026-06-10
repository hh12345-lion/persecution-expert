import Link from "next/link";
import { CTASection } from "@/components/ui/CTASection";
import { CardGrid } from "@/components/ui/CardGrid";
import { JsonLd } from "@/components/ui/JsonLd";
import { homepageGraph, websiteSchema } from "@/lib/schema";
import { persecutionTypes } from "@/data/persecution-types";
import { services } from "@/data/services";
import { caseTypes } from "@/data/case-types";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Persecution Expert Witness UK | Asylum & Immigration Tribunal Reports",
  description:
    "Find a qualified persecution expert witness in the UK. Independent expert reports on political opinion, religious persecution, LGBTQ+, gender-based violence, race, and particular social group asylum claims.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={[homepageGraph(), websiteSchema()]} />
      <section className="bg-[#1A3A5C] py-14 md:py-20">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-wide text-[#C8922A] sm:text-sm">
            UK Immigration & Asylum Tribunals
          </p>
          <h1 className="mt-4 max-w-4xl break-words text-2xl font-bold text-white min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Persecution Expert Witness UK: Asylum & Immigration Tribunal Reports
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
            Persecution Expert connects UK immigration solicitors, barristers, and Legal Aid practitioners with
            qualified persecution expert witnesses for asylum appeals and immigration tribunal proceedings. Independent
            analysis of Convention grounds, state protection, non-state actor persecution, and internal relocation across
            all countries.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[4px] bg-[#C8922A] px-6 py-3 font-semibold text-white hover:bg-[#b07f22] sm:w-auto sm:px-8"
            >
              Contact Us
            </Link>
            <Link
              href="/how-to-instruct"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[4px] border-2 border-white px-6 py-3 text-center font-semibold text-white hover:bg-white/10 sm:w-auto sm:px-8"
            >
              How to Instruct
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F8FC] py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#1A3A5C] sm:text-2xl md:text-3xl">Why Persecution Expert Evidence Matters</h2>
          <p className="mt-4 max-w-3xl text-[#374151] leading-relaxed">
            Unlike country-specific expert witness sites, persecution experts provide the overarching legal and analytical
            framework for asylum claims across all countries. Home Office refusals often fail to apply persecution
            methodology correctly. Independent expert evidence on Convention grounds, state protection failures, and
            non-state actor persecution is essential for FTT and Upper Tribunal proceedings.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Convention Ground Analysis",
                desc: "Expert reports on all five Refugee Convention grounds: political opinion, religion, race, PSG, and cross-cutting persecution frameworks.",
              },
              {
                title: "Tribunal Practice Direction Compliant",
                desc: "Reports comply with Immigration Tribunal Practice Direction paragraph 10 (2023) and the Adam Pipe October 2025 expert report guide.",
              },
              {
                title: "Legal Aid Compatible",
                desc: "LAA prior authority rates available for persecution expert reports in FTT and Upper Tribunal proceedings.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[8px] border border-[#D0DCE8] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
                <h3 className="font-semibold text-[#1A3A5C]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#374151]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#1A3A5C] sm:text-2xl">Persecution Types</h2>
          <p className="mt-2 max-w-3xl text-[#374151]">
            Thematic persecution analysis covering all Convention grounds and legal frameworks applicable in any country.
          </p>
          <div className="mt-8">
            <CardGrid
              items={persecutionTypes.slice(0, 6).map((p) => ({
                title: p.title,
                description: p.metaDescription.slice(0, 120) + "...",
                href: `/persecution-types/${p.slug}`,
              }))}
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/persecution-types" className="inline-flex min-h-[44px] items-center font-semibold text-[#C8922A] hover:underline">
              View all persecution types
            </Link>
            <Link href="/persecution-grounds" className="inline-flex min-h-[44px] items-center font-semibold text-[#C8922A] hover:underline">
              Persecution Grounds Guide
            </Link>
            <Link href="/country-experts" className="inline-flex min-h-[44px] items-center font-semibold text-[#C8922A] hover:underline">
              Country expert network
            </Link>
            <Link href="/how-reports-work" className="inline-flex min-h-[44px] items-center font-semibold text-[#C8922A] hover:underline">
              How reports work
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F8FC] py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#1A3A5C] sm:text-2xl">Expert Services</h2>
          <div className="mt-8">
            <CardGrid
              items={services.map((s) => ({
                title: s.name,
                description: s.description,
                href: `/services/${s.id}`,
              }))}
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#1A3A5C] sm:text-2xl">Case Types</h2>
          <div className="mt-8">
            <CardGrid
              items={caseTypes.slice(0, 4).map((c) => ({
                title: c.title,
                description: c.metaDescription.slice(0, 120) + "...",
                href: `/case-types/${c.slug}`,
              }))}
            />
          </div>
          <Link href="/case-types" className="mt-8 inline-flex min-h-[44px] items-center font-semibold text-[#C8922A] hover:underline">
            View all case types
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
