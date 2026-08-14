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
      <h2 id={`${id}-heading`} className="mb-8 font-display text-2xl text-ink sm:text-3xl">
        {title}
      </h2>
      <div className="space-y-8">
        {faqs.map((faq) => (
          <div key={faq.question}>
            <h3 className="font-display text-lg text-ink">{faq.question}</h3>
            <p className="mt-2 leading-relaxed text-body">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
