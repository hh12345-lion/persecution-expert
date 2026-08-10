"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import type { GlossaryTerm } from "@/data/glossary";

export function GlossarySearch({ terms }: { terms: GlossaryTerm[] }) {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const query = q.toLowerCase().trim();
    if (!query) return terms;
    return terms.filter((t) => t.term.toLowerCase().includes(query) || t.definition.toLowerCase().includes(query));
  }, [q, terms]);

  return (
    <>
      <label htmlFor="glossary-search" className="sr-only">Search glossary</label>
      <input id="glossary-search" type="search" placeholder="Search terms…" value={q} onChange={(e) => setQ(e.target.value)}
        className="mb-8 w-full max-w-md rounded-[4px] border border-[#b7c3cf] px-4 py-3 min-h-[44px] focus:border-[#0c1218] focus:outline-none focus:ring-1 focus:ring-[#0c1218]" />
      <dl className="space-y-6">
        {filtered.map((t) => (
          <div key={t.slug} id={t.slug} className="scroll-mt-24 rounded-[8px] border border-[#b7c3cf] bg-white p-5">
            <dt className="font-semibold text-[#0c1218]">{t.term}</dt>
            <dd className="mt-2 text-[#3a4550] leading-relaxed">
              {t.definition}
              {t.link && <> <Link href={t.link} className="text-[#d66a3a] hover:underline">Learn more →</Link></>}
            </dd>
          </div>
        ))}
      </dl>
    </>
  );
}
