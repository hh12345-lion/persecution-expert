import Image from "next/image";
import Link from "next/link";
import { assignedPhoto } from "@/lib/page-photos";

export function CardGrid({ items }: { items: { title: string; description: string; href: string }[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {items.map((item) => {
        const photo = assignedPhoto(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className="group flex min-w-0 flex-col overflow-hidden rounded-br-[2rem] border border-rule bg-white transition hover:shadow-[0_18px_40px_rgba(60,52,56,0.12)]"
          >
            {photo && (
              <div className="relative aspect-[16/9] overflow-hidden bg-mist">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
            )}
            <div className="flex flex-1 flex-col border-l-4 border-ember p-6">
              <h3 className="break-words font-display text-lg font-semibold text-ink group-hover:text-ember">{item.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-body">{item.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
