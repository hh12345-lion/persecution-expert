import Link from "next/link";
import { persecutionTypes } from "@/data/persecution-types";
import { services } from "@/data/services";

export default function NotFound() {
  const featuredTypes = persecutionTypes.slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden bg-[#1A3A5C] py-16 text-center md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #C8922A 0%, transparent 50%), radial-gradient(circle at 80% 20%, #C8922A 0%, transparent 40%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#C8922A]">Persecution Expert</p>
          <p className="mt-8 text-8xl font-bold leading-none text-[#C8922A]/90 sm:text-9xl" aria-hidden="true">
            404
          </p>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Page not found</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/80">
            The page you requested does not exist or may have moved. Use the links below to find persecution expert witness
            guidance for UK asylum and immigration tribunals.
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-[4px] bg-[#C8922A] px-8 py-3 font-semibold text-white transition hover:bg-[#b07f22]"
            >
              Return to Homepage
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] items-center justify-center rounded-[4px] border-2 border-white/80 px-8 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F8FC] py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-xl font-bold text-[#1A3A5C]">Popular destinations</h2>
          <nav className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label="Quick links">
            {[
              { label: "Persecution Types", href: "/persecution-types", desc: "Political, religious, LGBTQ+, gender-based, PSG" },
              { label: "Expert Services", href: "/services", desc: "Convention grounds, state protection, internal relocation" },
              { label: "Persecution Grounds", href: "/persecution-grounds", desc: "Complete Refugee Convention grounds guide" },
              { label: "How to Instruct", href: "/how-to-instruct", desc: "Legal Aid, letter of instruction, timelines" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-[8px] border border-[#D0DCE8] bg-white p-5 text-left transition hover:border-[#C8922A] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
              >
                <span className="font-semibold text-[#1A3A5C] group-hover:text-[#C8922A]">{item.label}</span>
                <span className="mt-1 block text-sm text-[#374151]">{item.desc}</span>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-lg font-bold text-[#1A3A5C]">Persecution types</h2>
              <ul className="mt-4 space-y-2">
                {featuredTypes.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/persecution-types/${p.slug}`}
                      className="text-sm font-medium text-[#C8922A] hover:underline"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/persecution-types" className="text-sm font-semibold text-[#1A3A5C] hover:underline">
                    View all persecution types
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#1A3A5C]">Services</h2>
              <ul className="mt-4 space-y-2">
                {services.slice(0, 5).map((s) => (
                  <li key={s.id}>
                    <Link href="/services" className="text-sm font-medium text-[#C8922A] hover:underline">
                      {s.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/services" className="text-sm font-semibold text-[#1A3A5C] hover:underline">
                    View all services
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
