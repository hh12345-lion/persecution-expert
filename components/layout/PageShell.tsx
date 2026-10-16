import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import type { Crumb } from "@/components/ui/Breadcrumbs";
import type { Photo } from "@/lib/photos";

export function PageShell({
  title,
  subtitle,
  breadcrumbs,
  photo,
  children,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  photo?: Photo;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero title={title} subtitle={subtitle} breadcrumbs={breadcrumbs} photo={photo} />
      <main className="mx-auto min-w-0 max-w-5xl overflow-x-hidden px-4 py-10 sm:px-6 sm:py-12">
        {children}
      </main>
      <CTASection />
    </>
  );
}
