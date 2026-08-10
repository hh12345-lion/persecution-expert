import Link from "next/link";

export function CardGrid({ items }: { items: { title: string; description: string; href: string }[] }) {
  return (
    <ul className="divide-y divide-rule border-y border-rule">
      {items.map((item, i) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="group flex min-h-[44px] min-w-0 flex-col gap-2 break-words py-5 transition sm:flex-row sm:items-baseline sm:gap-6"
          >
            <span className="w-8 shrink-0 font-mono text-xs text-ember">{String(i + 1).padStart(2, "0")}</span>
            <span className="font-display text-lg text-ink group-hover:text-ember sm:w-56 sm:shrink-0 lg:w-64">
              {item.title}
            </span>
            <span className="flex-1 text-sm leading-relaxed text-body">{item.description}</span>
            <span className="shrink-0 text-sm font-medium text-ember opacity-0 transition group-hover:opacity-100 sm:opacity-100">
              →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
