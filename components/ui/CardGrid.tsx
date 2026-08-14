import Link from "next/link";

export function CardGrid({ items }: { items: { title: string; description: string; href: string }[] }) {
  return (
    <div className="columns-1 gap-x-10 sm:columns-2">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="mb-6 block min-h-[44px] min-w-0 break-inside-avoid break-words hover:text-ember">
          <h3 className="font-display text-lg text-ink">{item.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-body">{item.description}</p>
        </Link>
      ))}
    </div>
  );
}
