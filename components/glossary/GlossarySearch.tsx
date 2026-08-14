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
        className="mb-8 w-full max-w-md border border-rule bg-panel px-4 py-3 min-h-[44px] focus:border-ember focus:outline-none" />
      <dl className="space-y-6">
        {filtered.map((t) => (
          <div key={t.slug} id={t.slug} className="scroll-mt-24 border-b border-rule py-5">
            <dt className="font-display text-lg text-ink">{t.term}</dt>
            <dd className="mt-2 text-body leading-relaxed">
              {t.definition}
              {t.link && <> <Link href={t.link} className="link-ember">Learn more</Link></>}
            </dd>
          </div>
        ))}
      </dl>
    </>
  );
}
