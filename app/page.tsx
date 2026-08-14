import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/ui/JsonLd";
import { homepageGraph, websiteSchema } from "@/lib/schema";
import { persecutionTypes } from "@/data/persecution-types";
import { services } from "@/data/services";
import { caseTypes } from "@/data/case-types";
import { createMetadata } from "@/lib/metadata";
import { SITE_UK_SCOPE } from "@/lib/constants";

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

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div>
            <h1 className="font-display text-3xl leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              Persecution evidence for UK asylum and immigration tribunals
            </h1>
            <p className="mt-5 text-base leading-relaxed text-body sm:text-lg">
              We match solicitors and Legal Aid practitioners with persecution expert witnesses who analyse Convention
              grounds, state protection, and relocation — the legal frame, not a country brochure.
            </p>
            <blockquote className="mt-6 border-l-[3px] border-ember pl-4 text-sm leading-relaxed text-body">
              {SITE_UK_SCOPE}
            </blockquote>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] items-center justify-center bg-ember px-6 py-3 text-sm font-semibold text-white hover:bg-ember-deep"
              >
                Refer a case
              </Link>
              <Link
                href="/persecution-grounds"
                className="inline-flex min-h-[44px] items-center justify-center border border-ink/20 px-6 py-3 text-sm font-semibold text-ink hover:border-ember hover:text-ember"
              >
                Grounds guide
              </Link>
            </div>
          </div>
          <figure className="border border-rule bg-mist p-2">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/folio-window-desk.png"
                alt="Sunlit desk with parchment papers and a fountain pen"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <figcaption className="px-1 pt-2 text-[11px] italic text-body/70">
              Reports written for the First-tier and Upper Tribunal, not for the file.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-mist/70">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">How persecution is proven</h2>
          <p className="mt-3 max-w-2xl text-body">
            Country experts describe conditions. Persecution experts test whether the claimed harm meets the Refugee
            Convention framework Immigration Judges actually apply.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {[
              {
                title: "Name the Convention ground",
                body: "Political opinion, religion, race, nationality, or particular social group — including imputed grounds and mixed claims. Refusals often mislabel the risk.",
              },
              {
                title: "Test state protection",
                body: "Whether the Home Office correctly assessed ability and willingness of the state to protect against state and non-state actors.",
              },
              {
                title: "Stress internal relocation",
                body: "Whether relocation is reasonable and safe in light of the claimant’s profile, not a generic national average.",
              },
              {
                title: "Write for the tribunal",
                body: "Independent analysis that meets Immigration Tribunal Practice Direction paragraph 10 and the Adam Pipe expert report guidance.",
              },
            ].map((item) => (
              <article key={item.title} className="pr-2">
                <h3 className="font-display text-xl text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-2xl text-ink sm:text-3xl">Persecution types</h2>
            <p className="mt-2 max-w-xl text-body">Thematic analysis that travels across countries.</p>
          </div>
          <Link href="/persecution-types" className="link-ember text-sm font-semibold">
            Full list
          </Link>
        </div>
        <div className="mt-8 columns-1 gap-x-12 sm:columns-2">
          {persecutionTypes.slice(0, 8).map((p) => (
            <Link
              key={p.slug}
              href={`/persecution-types/${p.slug}`}
              className="mb-5 block break-inside-avoid hover:text-ember"
            >
              <span className="font-display text-lg text-ink">{p.title}</span>
              <span className="mt-1 block text-sm leading-relaxed text-body">
                {p.metaDescription.slice(0, 110)}…
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/persecution-grounds" className="link-ember font-semibold">
            Persecution grounds
          </Link>
          <Link href="/country-experts" className="link-ember font-semibold">
            Country expert network
          </Link>
          <Link href="/how-reports-work" className="link-ember font-semibold">
            How reports work
          </Link>
        </div>
      </section>

      <section className="border-y border-rule bg-panel">
        <div className="mx-auto grid max-w-5xl gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="font-display text-2xl text-ink sm:text-3xl">Services</h2>
            <ul className="mt-6 space-y-5">
              {services.map((s) => (
                <li key={s.id}>
                  <Link href={`/services/${s.id}`} className="group">
                    <span className="font-display text-lg text-ink group-hover:text-ember">{s.name}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-body">{s.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <figure className="border border-rule bg-mist p-2">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/brief-ringbound.png"
                  alt="Ring-bound tribunal brief on a cool stone desk"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
              </div>
            </figure>
            <h2 className="mt-8 font-display text-2xl text-ink">Case types</h2>
            <ul className="mt-4 space-y-2">
              {caseTypes.slice(0, 5).map((c) => (
                <li key={c.slug}>
                  <Link href={`/case-types/${c.slug}`} className="text-sm text-ink hover:text-ember">
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/case-types" className="link-ember mt-4 inline-flex min-h-[44px] items-center text-sm font-semibold">
              All case types
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
