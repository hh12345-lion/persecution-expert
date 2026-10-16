import Link from "next/link";

export type NavDropdownItem = { label: string; href: string };

export function within(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(href + "/");
}

type NavDropdownProps = {
  label: string;
  href: string;
  items: NavDropdownItem[];
  pathname: string;
  scrollable?: boolean;
};

/** Opens on hover or keyboard focus through CSS; the current section carries the palm curve underline. */
export function NavDropdown({ label, href, items, pathname }: NavDropdownProps) {
  const active = within(pathname, href) || items.some((i) => within(pathname, i.href));

  return (
    <div className="nav-item relative">
      <Link
        href={href}
        aria-haspopup="true"
        aria-current={active ? "page" : undefined}
        className={`relative inline-flex h-[4.75rem] items-center gap-1.5 px-3 text-[0.92rem] font-medium transition-colors ${
          active ? "text-ember" : "text-ink/80 hover:text-ember"
        }`}
      >
        {label}
        <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M2 4 L6 8 L10 4" stroke="currentColor" strokeWidth="1.8" />
        </svg>
        {active && (
          <span aria-hidden="true" className="absolute bottom-3 left-3 right-3 h-1.5 rounded-bl-full rounded-tr-full bg-grey" />
        )}
      </Link>
      <div className="nav-panel absolute left-0 top-full z-50 w-[min(92vw,22rem)]">
        <div className="overflow-hidden rounded-br-[2rem] border border-rule bg-white shadow-[0_24px_48px_rgba(60,52,56,0.16)]">
          <div className="flex items-center justify-between bg-ink px-5 py-3">
            <p className="font-display text-sm font-semibold text-white">{label}</p>
            <Link href={href} className="text-xs font-semibold text-mist hover:text-white">
              View all
            </Link>
          </div>
          <ul className="max-h-[min(62vh,26rem)] overflow-y-auto py-2">
            {items.map((item) => {
              const current = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={`flex items-center gap-3 px-5 py-2.5 text-[0.95rem] ${
                      current ? "bg-panel font-semibold text-ember" : "text-body hover:bg-panel hover:text-ember"
                    }`}
                  >
                    <span aria-hidden="true" className={`h-1.5 w-1.5 shrink-0 rounded-full ${current ? "bg-ember" : "bg-grey"}`} />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
