import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { PalmPhoto } from "@/components/brand/Brand";
import type { Photo } from "@/lib/photos";

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  photo,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  photo?: Photo;
}) {
  return (
    <section className="relative overflow-hidden bg-white">
      <span aria-hidden="true" className="absolute inset-y-0 left-0 w-2 bg-ember" />
      <div
        className={`mx-auto grid min-w-0 max-w-6xl gap-12 px-4 py-12 sm:px-6 md:py-16 ${
          photo ? "lg:grid-cols-12 lg:items-center lg:gap-16" : ""
        }`}
      >
        <div className={photo ? "min-w-0 lg:col-span-7" : "max-w-3xl"}>
          <h1 className="break-words font-display text-3xl font-semibold leading-[1.08] text-ink sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {subtitle && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-body">{subtitle}</p>}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <div className="mt-8 border-t border-rule pt-2">
              <Breadcrumbs items={breadcrumbs} />
            </div>
          )}
        </div>
        {photo && (
          <PalmPhoto photo={photo} priority className="lg:col-span-5" ratio="aspect-[5/4] lg:aspect-[4/5]" sizes="(min-width: 1024px) 38vw, 100vw" />
        )}
      </div>
    </section>
  );
}
