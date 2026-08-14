import Link from "next/link";
import { persecutionTypes } from "@/data/persecution-types";
import { services } from "@/data/services";

export default function NotFound() {
  const featuredTypes = persecutionTypes.slice(0, 4);

  return (
    <>
      <section className="mx-auto max-w-2xl px-4 py-14 text-center sm:px-6 sm:py-16">
        <p className="text-[11px] uppercase tracking-[0.2em] text-slate">Persecution Expert</p>
        <p className="mt-4 font-display text-6xl text-ember sm:text-7xl" aria-hidden="true">
          404
        </p>
        <h1 className="mt-2 font-display text-3xl text-ink sm:text-4xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-body">
          That page is not in this folio. Use the links below for UK persecution expert witness guidance.
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
            className="inline-flex min-h-[44px] items-center justify-center border border-ink/20 px-8 py-3 text-sm font-semibold text-ink hover:border-ember"
          >
            Refer a case
          </Link>
        </div>
      </section>

      <section className="bg-mist py-12">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-xl text-ink">Popular destinations</h2>
          <ul className="mt-4 space-y-2">
            {[
              { label: "Persecution Types", href: "/persecution-types" },
              { label: "Expert Services", href: "/services" },
              { label: "Persecution Grounds", href: "/persecution-grounds" },
              { label: "How to refer", href: "/how-to-instruct" },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-[44px] items-center text-ink hover:text-ember">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto grid max-w-2xl gap-10 px-4 sm:grid-cols-2 sm:px-6">
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
