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
      <h2 id={`${id}-heading`} className="mb-8 text-2xl font-bold text-[#1A3A5C]">
        {title}
      </h2>
      <div className="space-y-6">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="rounded-[8px] border border-[#D0DCE8] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.06)]"
          >
            <h3 className="text-lg font-semibold text-[#1A3A5C]">{faq.question}</h3>
            <p className="mt-3 text-[#374151] leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
