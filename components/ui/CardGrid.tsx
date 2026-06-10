import Link from "next/link";

export function CardGrid({ items }: { items: { title: string; description: string; href: string }[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
      {items.map((item) => (
        <Link key={item.href} href={item.href}
          className="group min-h-[44px] min-w-0 break-words rounded-[8px] border border-[#D0DCE8] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.06)] transition hover:border-[#1A3A5C]">
          <h3 className="font-semibold text-[#1A3A5C] group-hover:text-[#C8922A]">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[#374151]">{item.description}</p>
          <span className="mt-4 inline-block text-sm font-medium text-[#C8922A]">Learn more →</span>
        </Link>
      ))}
    </div>
  );
}
