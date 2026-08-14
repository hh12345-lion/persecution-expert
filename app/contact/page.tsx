import { PageShell } from "@/components/layout/PageShell";
import { ContactForm } from "@/components/forms/ContactForm";
import { createMetadata } from "@/lib/metadata";
import { SITE_EMAIL, SITE_UK_SCOPE } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Refer a Persecution Expert Witness | Persecution Expert UK",
  description:
    "Refer a UK asylum or immigration tribunal matter for a qualified persecution expert witness. Legal Aid compatible. Response within one business day.",
  path: "/contact",
  noindex: true,
});

export default function ContactPage() {
  return (
    <PageShell
      title="Refer a case"
      subtitle="Four fields. One business day response. UK tribunal matters only."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
    >
      <div className="mx-auto grid min-w-0 max-w-xl gap-10">
        <p className="text-sm leading-relaxed text-body">
          Name the ground, country, and hearing stage in the note. We match a persecution expert and confirm scope.
          Or email{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="link-ember">
            {SITE_EMAIL}
          </a>
          .
        </p>
        <ContactForm />
        <p className="text-xs leading-relaxed text-body/80">{SITE_UK_SCOPE}</p>
      </div>
    </PageShell>
  );
}
