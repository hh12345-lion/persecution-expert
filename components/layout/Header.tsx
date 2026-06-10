"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  caseTypesNavLinks,
  mobileNavGroups,
  persecutionTypesNavLinks,
  resourcesNavLinks,
  servicesNavLinks,
} from "@/data/navigation";
import { NavDropdown } from "@/components/layout/NavDropdown";

export function Header() {
  const toggleRef = useRef<HTMLInputElement>(null);

  const closeMobileMenu = () => {
    if (toggleRef.current) toggleRef.current.checked = false;
  };

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        closeMobileMenu();
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#D0DCE8] bg-white shadow-sm">
      <input
        ref={toggleRef}
        id="mobile-nav-toggle"
        type="checkbox"
        className="peer sr-only"
        aria-hidden
      />

      <div className="header-bar mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-h-[44px] min-w-0 shrink items-center gap-2 font-bold text-[#1A3A5C]">
          <span className="truncate text-base sm:text-lg lg:text-xl">Persecution Expert</span>
        </Link>

        <nav className="hidden items-center gap-1 overflow-visible lg:flex" aria-label="Main">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center rounded-[4px] px-2 py-2 text-sm text-[#374151] hover:bg-[#F5F8FC] hover:text-[#1A3A5C]"
          >
            Home
          </Link>
          <NavDropdown label="Persecution Types" href="/persecution-types" items={persecutionTypesNavLinks} scrollable />
          <NavDropdown label="Case Types" href="/case-types" items={caseTypesNavLinks} scrollable />
          <NavDropdown label="Services" href="/services" items={servicesNavLinks} scrollable />
          <NavDropdown label="Resources" href="/guides" items={resourcesNavLinks} scrollable />
          <Link
            href="/contact"
            className="ml-2 inline-flex min-h-[44px] items-center rounded-[4px] bg-[#C8922A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#b07f22]"
          >
            Contact Us
          </Link>
        </nav>

        <label
          htmlFor="mobile-nav-toggle"
          className="mobile-nav-label inline-flex min-h-[44px] min-w-[44px] shrink-0 cursor-pointer items-center justify-center rounded-[4px] border border-[#D0DCE8] lg:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg className="icon-open h-6 w-6 text-[#1A3A5C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg className="icon-close hidden h-6 w-6 text-[#1A3A5C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </label>
      </div>

      <nav
        id="mobile-menu"
        className="hidden border-t border-[#D0DCE8] bg-white peer-checked:block lg:hidden"
        aria-label="Mobile"
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          {mobileNavGroups.map((group) => (
            <div key={group.title} className="mb-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#1A3A5C]">{group.title}</p>
              <ul className="space-y-1">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="inline-flex min-h-[44px] w-full items-center rounded-[4px] px-3 text-sm text-[#374151] hover:bg-[#F5F8FC]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[4px] bg-[#C8922A] px-4 py-3 text-sm font-semibold text-white hover:bg-[#b07f22]"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
}
