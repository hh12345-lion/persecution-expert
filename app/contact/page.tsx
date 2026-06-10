import { PageShell } from "@/components/layout/PageShell";
import { ContactForm } from "@/components/forms/ContactForm";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Instruct a Persecution Expert Witness | Persecution Expert UK",
  description:
    "Submit your case details to instruct a qualified persecution expert witness. Legal Aid compatible. Response within one business day.",
  path: "/contact",
  noindex: true,
});

export default function ContactPage() {
  return (
    <PageShell
      title="Instruct a Persecution Expert Witness"
      subtitle="Confidential case submission. Response within one business day."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
    >
      <div className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
        <aside className="order-2 h-fit rounded-[8px] border border-[#D0DCE8] bg-[#F5F8FC] p-5 sm:p-6 lg:order-2 lg:col-span-1">
          <h2 className="font-bold text-[#1A3A5C]">Why instruct through Persecution Expert</h2>
          <ul className="mt-4 space-y-4 text-sm text-[#374151]">
            <li>All Refugee Convention persecution grounds covered</li>
            <li>Legal Aid rates available</li>
            <li>Immigration Tribunal Practice Direction compliant</li>
            <li>Response within one business day</li>
          </ul>
        </aside>
        <div className="order-1 min-w-0 lg:order-1 lg:col-span-2">
          <ContactForm />
        </div>
      </div>
    </PageShell>
  );
}
