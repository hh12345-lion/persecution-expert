import { PageShell } from "@/components/layout/PageShell";
import { ContactForm } from "@/components/forms/ContactForm";
import { createMetadata } from "@/lib/metadata";
import { SITE_UK_SCOPE } from "@/lib/constants";

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
      subtitle="Confidential case submission for UK immigration tribunal proceedings. Response within one business day."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
    >
      <div className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
        <aside className="order-2 h-fit rounded-[8px] border border-[#D0DCE8] bg-[#F5F8FC] p-5 sm:p-6 lg:order-2 lg:col-span-1">
          <h2 className="font-bold text-[#1A3A5C]">UK immigration tribunal instructions</h2>
          <p className="mt-3 text-sm text-[#374151] leading-relaxed">{SITE_UK_SCOPE}</p>
          <h3 className="mt-6 font-bold text-[#1A3A5C]">Why instruct through Persecution Expert</h3>
          <ul className="mt-4 space-y-4 text-sm text-[#374151]">
            <li>All Refugee Convention persecution grounds covered</li>
            <li>Legal Aid Authority prior authority rates available</li>
            <li>Immigration Tribunal Practice Direction compliant</li>
            <li>First-tier Tribunal and Upper Tribunal proceedings</li>
            <li>Response within one business day</li>
          </ul>
        </aside>
        <div className="order-1 min-w-0 lg:order-1 lg:col-span-2">
          <p className="mb-6 text-[#374151] leading-relaxed">
            Complete the form below to instruct a persecution expert witness for a UK asylum appeal or immigration
            tribunal matter. Include the persecution ground, country of origin, proceedings type, and funding route
            (Legal Aid or private). We do not accept instructions for proceedings outside the United Kingdom.
          </p>
          <ContactForm />
        </div>
      </div>
    </PageShell>
  );
}
