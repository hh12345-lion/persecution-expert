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
    <header className="relative z-50 w-full bg-panel">
      <input
        ref={toggleRef}
        id="mobile-nav-toggle"
        type="checkbox"
        className="peer sr-only"
        aria-hidden
      />

      <div className="mx-auto max-w-5xl px-4 pt-8 pb-2 text-center sm:px-6 sm:pt-10">
        <p className="text-[10px] uppercase tracking-[0.28em] text-slate">United Kingdom · Tribunal evidence</p>
        <Link href="/" className="mt-3 inline-block font-display text-3xl leading-none text-ink sm:text-4xl md:text-5xl">
          Persecution Expert
        </Link>
        <p className="mt-3 text-sm italic text-body">
          Independent persecution analysis for asylum and immigration appeals
        </p>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="folio-rule" aria-hidden />
      </div>

      <div className="header-bar mx-auto flex max-w-5xl items-center justify-center px-4 py-1 sm:px-6">
        <nav className="hidden items-center justify-center gap-1 lg:flex" aria-label="Main">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center px-2 py-1 text-[13px] text-ink hover:text-ember"
          >
            Home
          </Link>
          <NavDropdown label="Persecution Types" href="/persecution-types" items={persecutionTypesNavLinks} scrollable />
          <NavDropdown label="Case Types" href="/case-types" items={caseTypesNavLinks} scrollable />
          <NavDropdown label="Services" href="/services" items={servicesNavLinks} scrollable />
          <NavDropdown label="Resources" href="/guides" items={resourcesNavLinks} scrollable />
          <Link
            href="/contact"
            className="ml-2 inline-flex min-h-[40px] items-center bg-ember px-4 py-2 text-[13px] font-semibold text-white hover:bg-ember-deep"
          >
            Refer a case
          </Link>
        </nav>

        <label
          htmlFor="mobile-nav-toggle"
          className="mobile-nav-label my-2 inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center border border-rule lg:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg className="icon-open h-5 w-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 7h16M4 12h16M4 17h10" />
          </svg>
          <svg className="icon-close hidden h-5 w-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </label>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="folio-rule" aria-hidden />
      </div>

      <nav
        id="mobile-menu"
        className="hidden border-b border-rule bg-mist peer-checked:block lg:hidden"
        aria-label="Mobile"
      >
        <div className="mx-auto max-w-5xl px-4 py-5 sm:px-6">
          {mobileNavGroups.map((group) => (
            <div key={group.title} className="mb-5">
              <p className="mb-1 font-display text-sm text-ink">{group.title}</p>
              <ul>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="inline-flex min-h-[44px] w-full items-center text-sm text-body hover:text-ember"
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
            className="inline-flex min-h-[44px] w-full items-center justify-center bg-ember px-4 py-3 text-sm font-semibold text-white hover:bg-ember-deep"
          >
            Refer a case
          </Link>
        </div>
      </nav>
    </header>
  );
}
