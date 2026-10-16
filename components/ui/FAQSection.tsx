import type { FAQ } from "@/lib/schema";

export function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
  id = "faqs",
}: {
  faqs: FAQ[];
  title?: string;
  id?: string;
}) {
  if (faqs.length === 0) return null;

  return (
    <section id={id} className="scroll-mt-24 py-12" aria-labelledby={`${id}-heading`}>
      <h2 id={`${id}-heading`} className="mb-8 font-display text-2xl font-semibold text-ink sm:text-3xl">
        {title}
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <details key={faq.question} className="fold rounded-br-2xl border border-rule bg-white" open={i === 0}>
            <summary className="flex min-h-[44px] items-start justify-between gap-4 p-5">
              <span className="font-display text-lg font-semibold text-ink">{faq.question}</span>
              <span aria-hidden="true" className="fold-sign mt-0.5 text-xl leading-none text-ember transition-transform">
                +
              </span>
            </summary>
            <p className="px-5 pb-5 leading-relaxed text-body">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
