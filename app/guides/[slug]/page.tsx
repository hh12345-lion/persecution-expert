import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";
import { getGuide } from "@/data/guides";
import { photoFor } from "@/lib/page-photos";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  return createMetadata({ title: g.metaTitle, description: g.metaDescription, path: `/guides/${slug}` });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  const path = `/guides/${slug}`;
  const crumbs = [{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }, { label: guide.title }];

  return (
    <>
      <PageJsonLd
        breadcrumbs={crumbs}
        faqs={guide.faqs}
        extra={articleSchema({
          headline: guide.h1,
          description: guide.metaDescription,
          path,
        })}
      />
      <PageShell photo={photoFor(`/guides/${slug}`)} title={guide.h1} breadcrumbs={crumbs}>
        {guide.content.map((p, i) => (
          <p key={i} className="mb-4 text-[#4a4246] leading-relaxed">
            {p}
          </p>
        ))}
        <FAQSection faqs={guide.faqs} />
        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-[44px] items-center rounded-[4px] bg-[#5f1b27] px-6 py-3 font-semibold text-white hover:bg-[#46131d]"
        >
          Contact Us
        </Link>
      </PageShell>
    </>
  );
}
