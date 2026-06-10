import { PageShell } from "@/components/layout/PageShell";
import { GlossarySearch } from "@/components/glossary/GlossarySearch";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { glossaryTerms } from "@/data/glossary";

export const metadata = createMetadata({
  title: "Persecution Expert Glossary | Key Asylum Law Terms UK",
  description:
    "Definitions of key persecution expert and asylum law terms: Refugee Convention, PSG, state protection, HJ (Iran) [2010], RT (Zimbabwe) [2012], non-state actors, internal relocation, and more.",
  path: "/glossary",
});

export default function GlossaryPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Glossary" }];
  const faqItems = glossaryTerms.map((t) => ({
    question: `What is ${t.term}?`,
    answer: t.definition,
  }));

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={faqItems} />
      <PageShell
        title="Persecution Expert & Asylum Law Glossary"
        subtitle="35 definition-first terms for UK immigration practitioners."
        breadcrumbs={crumbs}
      >
        <GlossarySearch terms={glossaryTerms} />
      </PageShell>
    </>
  );
}
