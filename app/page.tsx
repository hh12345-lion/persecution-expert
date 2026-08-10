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

const proofSteps = [
  {
    n: "01",
    title: "Name the Convention ground",
    body: "Political opinion, religion, race, nationality, or particular social group — including imputed grounds and mixed claims. Refusals often mislabel the risk.",
  },
  {
    n: "02",
    title: "Test state protection",
    body: "Whether the Home Office correctly assessed ability and willingness of the state to protect against state and non-state actors.",
  },
  {
    n: "03",
    title: "Stress internal relocation",
    body: "Whether relocation is reasonable and safe in light of the claimant’s profile, not a generic national average.",
  },
  {
    n: "04",
    title: "Write for the tribunal",
    body: "Independent analysis that meets Immigration Tribunal Practice Direction paragraph 10 and the Adam Pipe expert report guidance.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[homepageGraph(), websiteSchema()]} />

      {/* Hero — one composition, brand first, full-bleed image */}
      <section className="relative min-h-[min(92vh,44rem)] overflow-hidden bg-ink text-panel">
        <Image
          src="/images/hero-evidence-archive.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/45"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/30" aria-hidden />

        <div className="relative mx-auto flex min-h-[min(92vh,44rem)] max-w-7xl flex-col justify-end px-4 pb-14 pt-28 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
          <p className="font-display text-4xl text-ember sm:text-5xl md:text-6xl lg:text-7xl">
            Persecution Expert
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-2xl leading-snug text-white min-[375px]:text-3xl sm:text-4xl">
            Independent persecution evidence for UK asylum and immigration tribunals
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            We match solicitors and Legal Aid practitioners with persecution expert witnesses who analyse Convention
            grounds, state protection, and relocation — not country brochures.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] w-full items-center justify-center bg-ember px-7 py-3 text-sm font-semibold text-white hover:bg-ember-deep sm:w-auto"
            >
              Instruct an expert
            </Link>
            <Link
              href="/persecution-grounds"
              className="inline-flex min-h-[44px] w-full items-center justify-center border border-white/35 px-7 py-3 text-sm font-semibold text-white hover:border-ember hover:text-ember sm:w-auto"
            >
              Read the grounds index
            </Link>
          </div>
        </div>
      </section>

      {/* Scope strip — single purpose */}
      <section className="border-b border-rule bg-panel">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[10rem_1fr] lg:gap-10 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ember">UK only</p>
          <p className="max-w-3xl text-sm leading-relaxed text-body sm:text-base">{SITE_UK_SCOPE}</p>
        </div>
      </section>

      {/* Proof method — spine layout, not cards */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl text-ink sm:text-4xl">How persecution is proven in the tribunal</h2>
            <p className="mt-4 text-base leading-relaxed text-body">
              Country experts describe conditions. Persecution experts test whether the claimed harm meets the Refugee
              Convention framework the Home Office and Immigration Judges apply. That distinction wins appeals when
              refusals collapse methodology rather than facts.
            </p>
          </div>

          <ol className="index-spine mt-12 max-w-3xl space-y-8 pl-1 sm:pl-2">
            {proofSteps.map((step) => (
              <li key={step.n} className="relative flex gap-5 sm:gap-6">
                <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center bg-ink font-mono text-[11px] font-bold text-ember sm:h-11 sm:w-11 sm:text-xs">
                  {step.n}
                </span>
                <div className="pt-1">
                  <h3 className="font-display text-xl text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Split: image + why instruct */}
      <section className="bg-mist">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative min-h-[18rem] lg:min-h-full">
            <Image
              src="/images/brief-ringbound.png"
              alt="Ring-bound tribunal brief on a cool stone desk"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center px-4 py-12 sm:px-8 sm:py-16 lg:px-12">
            <h2 className="font-display text-3xl text-ink sm:text-4xl">Why solicitors instruct through this index</h2>
            <p className="mt-4 text-base leading-relaxed text-body">
              Home Office refusal letters frequently misapply Convention grounds, treat non-state actor risk as private
              crime, or assert internal relocation without engaging the claimant’s profile. Independent persecution
              evidence closes that gap for First-tier and Upper Tribunal hearings across England, Wales, Scotland, and
              Northern Ireland.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-body sm:text-base">
              <li className="flex gap-3 border-l-2 border-ember pl-4">
                <span>All five Refugee Convention grounds, including PSG and imputed political opinion.</span>
              </li>
              <li className="flex gap-3 border-l-2 border-ember pl-4">
                <span>Practice Direction paragraph 10–compliant report structure and duty to the tribunal.</span>
              </li>
              <li className="flex gap-3 border-l-2 border-ember pl-4">
                <span>Legal Aid prior authority routes available where the LAA authorises expert fees.</span>
              </li>
            </ul>
            <Link href="/how-to-instruct" className="link-ember mt-8 inline-flex min-h-[44px] items-center text-sm font-semibold">
              How to instruct →
            </Link>
          </div>
        </div>
      </section>

      {/* Grounds index — list, not card grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl text-ink sm:text-4xl">Persecution types index</h2>
              <p className="mt-3 text-body">
                Thematic analysis that travels across countries — the legal frame, not a travel brief.
              </p>
            </div>
            <Link href="/persecution-types" className="link-ember text-sm font-semibold">
              Full index →
            </Link>
          </div>

          <ul className="mt-10 divide-y divide-rule border-y border-rule">
            {persecutionTypes.slice(0, 8).map((p, i) => (
              <li key={p.slug}>
                <Link
                  href={`/persecution-types/${p.slug}`}
                  className="group flex flex-col gap-2 py-5 transition sm:flex-row sm:items-baseline sm:gap-8"
                >
                  <span className="w-10 shrink-0 font-mono text-xs text-ember">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-lg text-ink group-hover:text-ember sm:w-72 sm:shrink-0">
                    {p.title}
                  </span>
                  <span className="text-sm leading-relaxed text-body sm:flex-1">
                    {p.metaDescription.slice(0, 140)}…
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/persecution-grounds" className="link-ember font-semibold">
              Persecution grounds guide
            </Link>
            <Link href="/country-experts" className="link-ember font-semibold">
              Country expert network
            </Link>
            <Link href="/how-reports-work" className="link-ember font-semibold">
              How reports work
            </Link>
          </div>
        </div>
      </section>

      {/* Services + cases — asymmetric columns */}
      <section className="border-t border-rule bg-panel py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8">
          <div>
            <h2 className="font-display text-3xl text-ink">Expert services</h2>
            <p className="mt-3 max-w-md text-body">Scoped reports solicitors request most often for asylum appeals.</p>
            <dl className="mt-8 space-y-6">
              {services.map((s) => (
                <div key={s.id} className="border-l-2 border-slate/30 pl-5 transition hover:border-ember">
                  <dt>
                    <Link href={`/services/${s.id}`} className="font-display text-lg text-ink hover:text-ember">
                      {s.name}
                    </Link>
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-body">{s.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <div className="relative mb-8 aspect-[4/3] overflow-hidden bg-mist">
              <Image
                src="/images/corridor-ember.png"
                alt="Quiet institutional corridor with ember light at the far end"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <h2 className="font-display text-2xl text-ink">Case types</h2>
            <ul className="mt-5 space-y-3">
              {caseTypes.slice(0, 5).map((c) => (
                <li key={c.slug}>
                  <Link href={`/case-types/${c.slug}`} className="group flex items-start gap-3 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-ember" aria-hidden />
                    <span className="text-ink group-hover:text-ember">{c.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/case-types" className="link-ember mt-6 inline-flex min-h-[44px] items-center text-sm font-semibold">
              All case types →
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
