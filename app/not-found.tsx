import Link from "next/link";
import { persecutionTypes } from "@/data/persecution-types";
import { services } from "@/data/services";

export default function NotFound() {
  const featuredTypes = persecutionTypes.slice(0, 4);

  return (
    <>
      <section className="bg-ink py-16 text-center md:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ember">Persecution Expert</p>
          <p className="mt-6 font-display text-7xl text-ember/90 sm:text-8xl" aria-hidden="true">
            404
          </p>
          <h1 className="mt-2 font-display text-3xl text-white sm:text-4xl">Page not found</h1>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/65">
            That URL is not in the index. Use the links below for UK persecution expert witness guidance.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center justify-center bg-ember px-8 py-3 text-sm font-semibold text-white hover:bg-ember-deep"
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] items-center justify-center border border-white/30 px-8 py-3 text-sm font-semibold text-white hover:border-ember"
            >
              Instruct
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-panel py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-xl text-ink">Popular destinations</h2>
          <ul className="mt-6 divide-y divide-rule border-y border-rule">
            {[
              { label: "Persecution Types", href: "/persecution-types" },
              { label: "Expert Services", href: "/services" },
              { label: "Persecution Grounds", href: "/persecution-grounds" },
              { label: "How to Instruct", href: "/how-to-instruct" },
            ].map((item, i) => (
              <li key={item.href}>
                <Link href={item.href} className="flex min-h-[44px] items-center gap-4 py-3 text-ink hover:text-ember">
                  <span className="font-mono text-xs text-ember">{String(i + 1).padStart(2, "0")}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto grid max-w-3xl gap-10 px-4 sm:px-6 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-lg text-ink">Persecution types</h2>
            <ul className="mt-3 space-y-2">
              {featuredTypes.map((p) => (
                <li key={p.slug}>
                  <Link href={`/persecution-types/${p.slug}`} className="link-ember text-sm font-medium">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-lg text-ink">Services</h2>
            <ul className="mt-3 space-y-2">
              {services.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <Link href={`/services/${s.id}`} className="link-ember text-sm font-medium">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
