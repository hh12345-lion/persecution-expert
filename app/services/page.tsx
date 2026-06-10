import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { JsonLd } from "@/components/ui/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { servicesPageGraph } from "@/lib/schema";
import { services } from "@/data/services";

export const metadata = createMetadata({
  title: "Persecution Expert Witness Services | Asylum & Immigration Tribunals",
  description:
    "Persecution expert witness services: political persecution analysis, religious persecution reports, LGBTQ+ asylum, gender-based persecution, PSG analysis, non-state actor reports, state protection, and internal relocation.",
  path: "/services",
});

export default function ServicesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Services" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <JsonLd
        data={servicesPageGraph(
          services.map((s) => ({ id: s.id, name: s.name, description: s.description }))
        )}
      />
      <PageShell
        title="Persecution Expert Witness Services"
        subtitle="Immigration Tribunal Practice Direction compliant reports for all major persecution grounds."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 text-[#374151] leading-relaxed">
          Persecution Expert provides eight specialist expert report services for UK immigration solicitors, barristers,
          and Legal Aid practitioners. All reports are prepared by qualified persecution experts with familiarity in UK
          asylum law, tribunal practice, and persecution analysis methodology.
        </p>
        <CardGrid
          items={services.map((s) => ({
            title: s.name,
            description: s.description,
            href: `/services/${s.id}`,
          }))}
        />
        <p className="mt-8 text-[#374151]">
          Questions about instructing an expert? See{" "}
          <Link href="/how-to-instruct" className="font-semibold text-[#C8922A] hover:underline">
            how to instruct
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="font-semibold text-[#C8922A] hover:underline">
            contact us
          </Link>
          .
        </p>
      </PageShell>
    </>
  );
}
