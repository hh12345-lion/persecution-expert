import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { networkSites } from "@/data/network-sites";
import { persecutionTypes } from "@/data/persecution-types";

export const metadata = createMetadata({
  title: "Country Expert Witness Network | Persecution Expert UK",
  description:
    "Country-specific expert witness network for UK immigration tribunals. Nigeria, Pakistan, Africa, and Albania country experts linked to persecution framework analysis.",
  path: "/country-experts",
});

export default function CountryExpertsPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Country Experts" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Country Expert Witness Network"
        subtitle="Persecution Expert provides the thematic persecution framework. Country-specific analysis is handled by specialist country expert witnesses across our network."
        breadcrumbs={crumbs}
      >
        <p className="mb-4 text-[#5c5348] leading-relaxed">
          persecutionexpert.com is the thematic umbrella site covering Refugee Convention grounds, state protection,
          non-state actor persecution, and internal relocation methodology for UK immigration tribunal proceedings.
          For granular country conditions in FTT and Upper Tribunal cases, instruct a country expert from our network
          below alongside a persecution expert where needed.
        </p>
        <p className="mb-8 text-[#5c5348] leading-relaxed">
          This service and network are intended for United Kingdom asylum and immigration practitioners only. Country
          expert sites linked below also serve UK tribunal instructions. We do not match experts for proceedings outside
          England, Wales, Scotland, and Northern Ireland.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {networkSites.map((site) => (
            <article
              key={site.url}
              className="flex min-w-0 flex-col rounded-[8px] border border-[#c9bba4] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
            >
              <h2 className="text-lg font-bold text-[#2c261f]">{site.name}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5c5348]">{site.description}</p>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-[44px] items-center text-sm font-semibold text-[#7c2430] hover:underline"
              >
                {site.anchorExamples[0]} →
              </a>
            </article>
          ))}
        </div>

        <h2 className="mt-12 text-xl font-bold text-[#2c261f]">Persecution framework on this site</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {persecutionTypes.slice(0, 4).map((p) => (
            <li key={p.slug}>
              <Link href={`/persecution-types/${p.slug}`} className="text-[#7c2430] hover:underline">
                {p.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/persecution-grounds" className="font-semibold text-[#7c2430] hover:underline">
            Five Refugee Convention persecution grounds
          </Link>
          <Link href="/how-reports-work" className="font-semibold text-[#7c2430] hover:underline">
            How persecution expert reports work
          </Link>
          <Link href="/how-to-instruct" className="font-semibold text-[#7c2430] hover:underline">
            How to refer
          </Link>
          <Link href="/contact" className="font-semibold text-[#7c2430] hover:underline">
            Refer a case
          </Link>
        </div>
      </PageShell>
    </>
  );
}
