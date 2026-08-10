import { PageShell } from "@/components/layout/PageShell";
import { ContactForm } from "@/components/forms/ContactForm";
import { createMetadata } from "@/lib/metadata";
import { SITE_EMAIL, SITE_UK_SCOPE } from "@/lib/constants";

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
      title="Instruct"
      subtitle="Four fields. One business day response. UK tribunal matters only."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
    >
      <div className="mx-auto grid min-w-0 max-w-3xl gap-10 lg:max-w-none lg:grid-cols-[1fr_16rem] lg:gap-16">
        <div className="min-w-0 border border-rule bg-white px-5 py-8 sm:px-8">
          <p className="mb-8 text-sm leading-relaxed text-body">
            Name the ground, country, and hearing stage in the note. We match a persecution expert and confirm scope —
            no long intake forms.
          </p>
          <ContactForm />
        </div>
        <aside className="h-fit space-y-6 text-sm text-body lg:pt-2">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ember">Email</p>
            <a href={`mailto:${SITE_EMAIL}`} className="mt-2 block break-all link-ember">
              {SITE_EMAIL}
            </a>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ember">Scope</p>
            <p className="mt-2 leading-relaxed">{SITE_UK_SCOPE}</p>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
