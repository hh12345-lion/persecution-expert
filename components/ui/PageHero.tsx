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
    <section className="relative overflow-hidden border-b border-rule bg-ink text-panel">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 80% at 100% 0%, rgba(214,106,58,0.25), transparent 55%), linear-gradient(135deg, transparent 40%, rgba(31,74,86,0.35) 100%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl min-w-0 px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
        <div className="flex gap-4">
          <span className="mt-2 hidden h-12 w-1 shrink-0 bg-ember sm:block" aria-hidden />
          <div>
            <h1 className="break-words font-display text-2xl tracking-tight text-white min-[375px]:text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/65 sm:text-lg">{subtitle}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
