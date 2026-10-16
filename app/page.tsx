import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/ui/JsonLd";
import { PalmPhoto } from "@/components/brand/Brand";
import { homepageGraph, websiteSchema } from "@/lib/schema";
import { persecutionTypes } from "@/data/persecution-types";
import { services } from "@/data/services";
import { caseTypes } from "@/data/case-types";
import { createMetadata } from "@/lib/metadata";
import { SITE_UK_SCOPE } from "@/lib/constants";
import { assignedPhoto } from "@/lib/page-photos";
import { photos } from "@/lib/photos";

export const metadata = createMetadata({
  title: "Persecution Expert Witness UK | Asylum Tribunal Reports",
  description:
    "Qualified persecution expert witnesses for UK asylum and immigration tribunals. Independent reports on Convention grounds, state protection, and internal relocation.",
  path: "/",
});

const PROOF = [
  {
    title: "Name the Convention ground",
    body: "Political opinion, religion, race, nationality, or particular social group, including imputed grounds and mixed claims. Refusals often mislabel the risk.",
  },
  {
    title: "Test state protection",
    body: "Whether the Home Office correctly assessed ability and willingness of the state to protect against state and non-state actors.",
  },
  {
    title: "Stress internal relocation",
    body: "Whether relocation is reasonable and safe in light of the claimant's profile, not a generic national average.",
  },
  {
    title: "Write for the tribunal",
    body: "Independent analysis that meets Immigration Tribunal Practice Direction paragraph 10 and the Adam Pipe expert report guidance.",
  },
];

function trimTo(text: string, max: number) {
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/\s+\S*$/, "") + "...";
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={[homepageGraph(), websiteSchema()]} />

      <section className="relative overflow-hidden bg-white">
        <span aria-hidden="true" className="absolute inset-y-0 left-0 w-2 bg-ember" />
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-12 lg:items-center lg:gap-16 lg:py-20">
          <div className="min-w-0 lg:col-span-7">
            <h1 className="font-display text-4xl font-semibold leading-[1.04] text-ink sm:text-5xl lg:text-[3.6rem]">
              Persecution evidence for UK asylum and immigration tribunals
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body md:text-xl">
              We match solicitors and Legal Aid practitioners with persecution expert witnesses who analyse Convention
              grounds, state protection, and relocation: the legal frame, not a country brochure.
            </p>
            <blockquote className="mt-6 max-w-2xl border-l-4 border-grey pl-4 text-[0.95rem] leading-relaxed text-body">
              {SITE_UK_SCOPE}
            </blockquote>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="font-ui inline-flex min-h-[48px] items-center justify-center rounded-full rounded-br-none bg-ember px-8 text-sm font-semibold text-white transition hover:bg-ember-deep"
              >
                Refer a case
              </Link>
              <Link
                href="/persecution-grounds"
                className="font-ui inline-flex min-h-[48px] items-center justify-center rounded-full border border-ink/25 px-8 text-sm font-semibold text-ink transition hover:border-ember hover:text-ember"
              >
                Grounds guide
              </Link>
            </div>
          </div>
          <PalmPhoto photo={photos.echrStrasbourg} priority className="lg:col-span-5" ratio="aspect-[5/4] lg:aspect-[4/5]" sizes="(min-width: 1024px) 38vw, 100vw" />
        </div>
      </section>

      <section className="relative h-48 overflow-hidden bg-ink sm:h-64">
        <Image src={photos.zaatariCamp.src} alt={photos.zaatariCamp.alt} fill sizes="100vw" className="object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/30 to-transparent" />
        <p className="absolute bottom-6 left-0 max-w-xl px-6 font-display text-lg font-medium leading-snug text-white sm:left-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] sm:px-0 sm:text-2xl">
          Reports for the First-tier Tribunal and Upper Tribunal, across England and Wales, Scotland and Northern Ireland.
        </p>
      </section>

      <section className="bg-panel">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <PalmPhoto photo={photos.supremeCourt} ratio="aspect-[4/5]" sizes="(min-width: 1024px) 34vw, 100vw" />
          </div>
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">How persecution is proven</h2>
            <p className="mt-4 max-w-2xl text-lg text-body">
              Country experts describe conditions. Persecution experts test whether the claimed harm meets the Refugee
              Convention framework Immigration Judges actually apply.
            </p>
            <ol className="mt-10 grid gap-8 sm:grid-cols-2">
              {PROOF.map((item, i) => (
                <li key={item.title}>
                  <span className="font-display text-3xl font-semibold text-grey">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-body">{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Persecution types</h2>
              <p className="mt-2 max-w-xl text-lg text-body">Thematic analysis that travels across countries.</p>
            </div>
            <Link href="/persecution-types" className="link-ember font-ui text-sm font-semibold">
              Full list
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {persecutionTypes.slice(0, 8).map((p) => {
              const href = `/persecution-types/${p.slug}`;
              const photo = assignedPhoto(href);
              return (
                <Link key={p.slug} href={href} className="group flex flex-col overflow-hidden rounded-br-[2rem] border border-rule bg-white">
                  {photo && (
                    <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                      <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-5">
                    <span className="font-display text-lg font-semibold text-ink group-hover:text-ember">{p.title}</span>
                    <span className="mt-2 text-sm leading-relaxed text-body">{trimTo(p.metaDescription, 110)}</span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="font-ui mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/persecution-grounds" className="link-ember font-semibold">Persecution grounds</Link>
            <Link href="/country-experts" className="link-ember font-semibold">Country expert network</Link>
            <Link href="/how-reports-work" className="link-ember font-semibold">How reports work</Link>
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">Services</h2>
            <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
              {services.map((s) => (
                <li key={s.id}>
                  <Link href={`/services/${s.id}`} className="group block py-5">
                    <span className="font-display text-lg font-semibold text-white group-hover:text-mist">{s.name}</span>
                    <span className="mt-1 block text-[0.95rem] leading-relaxed text-white/70">{s.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="palm-frame relative aspect-[4/3] overflow-hidden">
              <Image src={photos.homeOffice.src} alt={photos.homeOffice.alt} fill sizes="(min-width: 1024px) 34vw, 100vw" className="object-cover" />
            </div>
            <h2 className="mt-10 font-display text-2xl font-semibold text-white">Case types</h2>
            <ul className="mt-4 space-y-2">
              {caseTypes.slice(0, 5).map((c) => (
                <li key={c.slug}>
                  <Link href={`/case-types/${c.slug}`} className="flex items-center gap-3 text-white/80 hover:text-white">
                    <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-grey" />
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/case-types" className="font-ui mt-5 inline-flex min-h-[44px] items-center text-sm font-semibold text-mist underline underline-offset-4 hover:text-white">
              All case types
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
