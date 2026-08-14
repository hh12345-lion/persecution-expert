import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="bg-panel">
      <div className="mx-auto max-w-5xl min-w-0 px-4 pt-8 pb-6 sm:px-6 sm:pt-10">
        {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
        <h1 className="max-w-3xl break-words font-display text-3xl leading-tight text-ink sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-body sm:text-lg">{subtitle}</p>
        )}
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="folio-rule" aria-hidden />
      </div>
    </section>
  );
}
