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
        className="mb-8 w-full max-w-md rounded-[4px] border border-[#D0DCE8] px-4 py-3 min-h-[44px] focus:border-[#1A3A5C] focus:outline-none focus:ring-1 focus:ring-[#1A3A5C]" />
      <dl className="space-y-6">
        {filtered.map((t) => (
          <div key={t.slug} id={t.slug} className="scroll-mt-24 rounded-[8px] border border-[#D0DCE8] bg-white p-5">
            <dt className="font-semibold text-[#1A3A5C]">{t.term}</dt>
            <dd className="mt-2 text-[#374151] leading-relaxed">
              {t.definition}
              {t.link && <> <Link href={t.link} className="text-[#C8922A] hover:underline">Learn more →</Link></>}
            </dd>
          </div>
        ))}
      </dl>
    </>
  );
}
