"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  caseTypesNavLinks,
  mobileNavGroups,
  persecutionTypesNavLinks,
  resourcesNavLinks,
  servicesNavLinks,
} from "@/data/navigation";
import { NavDropdown, within } from "@/components/layout/NavDropdown";
import { Logo } from "@/components/brand/Brand";

const MENUS = [
  { label: "Persecution Types", href: "/persecution-types", items: persecutionTypesNavLinks },
  { label: "Case Types", href: "/case-types", items: caseTypesNavLinks },
  { label: "Services", href: "/services", items: servicesNavLinks },
  { label: "Resources", href: "/guides", items: resourcesNavLinks },
];

/** Client only for usePathname, so the current page is marked. Menus open with CSS. */
export function Header() {
  const pathname = usePathname() || "/";
  const contactActive = within(pathname, "/contact");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-rule bg-white/95 backdrop-blur">
      {/* Keyed on the path so the mobile menu closes after each navigation. */}
      <input key={pathname} id="mobile-nav-toggle" type="checkbox" className="peer sr-only" aria-label="Toggle menu" />

      <div className="header-bar mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          aria-label="Persecution Expert, home"
          aria-current={pathname === "/" ? "page" : undefined}
          className="flex min-h-[4.25rem] min-w-0 shrink items-center lg:min-h-[4.75rem]"
        >
          <Logo className="h-11 w-auto sm:h-12 lg:h-14" />
        </Link>

        <nav className="hidden items-center lg:flex" aria-label="Main">
          {MENUS.map((m) => (
            <NavDropdown key={m.label} label={m.label} href={m.href} items={m.items} pathname={pathname} />
          ))}
          <Link
            href="/contact"
            aria-current={contactActive ? "page" : undefined}
            className="ml-4 inline-flex min-h-[46px] items-center rounded-full rounded-br-none bg-ember px-6 text-sm font-semibold text-white transition hover:bg-ember-deep"
          >
            Refer a case
          </Link>
        </nav>

        <label
          htmlFor="mobile-nav-toggle"
          className="inline-flex min-h-[44px] min-w-[44px] shrink-0 cursor-pointer items-center justify-center rounded-full rounded-br-none bg-ember text-white lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <svg className="icon-open h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h10" />
          </svg>
          <svg className="icon-close hidden h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </label>
      </div>

      <nav
        id="mobile-menu"
        className="hidden max-h-[calc(100dvh-4.25rem)] overflow-y-auto overscroll-contain border-t border-rule bg-white peer-checked:block lg:hidden"
        aria-label="Mobile"
      >
        <div className="mx-auto max-w-6xl px-4 py-4 pb-6 sm:px-6">
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            className={`flex min-h-[52px] items-center border-b border-rule font-display text-lg font-semibold ${pathname === "/" ? "text-ember" : "text-ink"}`}
          >
            Home
          </Link>
          {mobileNavGroups.map((group) => {
            const active = group.links.some((l) => within(pathname, l.href));
            return (
              <details key={group.title} className="fold border-b border-rule" open={active}>
                <summary className={`flex min-h-[52px] items-center justify-between font-display text-lg font-semibold ${active ? "text-ember" : "text-ink"}`}>
                  {group.title}
                  <span aria-hidden="true" className="fold-sign text-xl font-normal text-grey transition-transform">
                    +
                  </span>
                </summary>
                <ul className="pb-3">
                  {group.links.map((link) => {
                    const current = pathname === link.href;
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          aria-current={current ? "page" : undefined}
                          className={`flex min-h-[42px] items-center gap-3 px-1 ${current ? "font-semibold text-ember" : "text-body"}`}
                        >
                          <span aria-hidden="true" className={`h-1.5 w-1.5 shrink-0 rounded-full ${current ? "bg-ember" : "bg-grey"}`} />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </details>
            );
          })}
          <Link
            href="/contact"
            className="mt-5 flex min-h-[48px] items-center justify-center rounded-full rounded-br-none bg-ember font-semibold text-white"
          >
            Refer a case
          </Link>
        </div>
      </nav>
    </header>
  );
}
