import Link from "next/link";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="font-ui text-xs text-body/80 sm:text-sm">
      <ol className="flex flex-wrap items-center gap-x-1 gap-y-0.5">
        {items.map((item, i) => (
          <li key={i} className="flex max-w-full items-center gap-1">
            {i > 0 && <span aria-hidden="true" className="mx-1 h-1.5 w-1.5 shrink-0 rounded-full bg-grey" />}
            {item.href ? (
              <Link href={item.href} className="inline-flex min-h-[44px] max-w-full items-center break-words py-1 hover:text-ember">
                {item.label}
              </Link>
            ) : (
              <span className="break-words font-semibold text-ember" aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
