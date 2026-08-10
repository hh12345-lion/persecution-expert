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
    <header className="sticky top-0 z-50 w-full">
      <div className="border-b border-rule/60 bg-panel/85 backdrop-blur-md">
        <input
          ref={toggleRef}
          id="mobile-nav-toggle"
          type="checkbox"
          className="peer sr-only"
          aria-hidden
        />

        <div className="header-bar mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
          <Link href="/" className="group flex min-h-[44px] min-w-0 shrink items-center gap-3">
            <span
              className="relative flex h-10 w-10 shrink-0 items-center justify-center bg-ink text-[11px] font-bold tracking-[0.08em] text-panel"
              aria-hidden
            >
              <span className="absolute inset-x-0 top-0 h-0.5 bg-ember" />
              PE
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-base leading-tight text-ink sm:text-lg">
                Persecution Expert
              </span>
              <span className="hidden text-[10px] uppercase tracking-[0.16em] text-body/60 sm:block">
                UK tribunal evidence index
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 overflow-visible lg:flex" aria-label="Main">
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center px-2.5 py-2 text-[13px] font-medium tracking-wide text-ink/80 hover:text-ink"
            >
              Home
            </Link>
            <NavDropdown
              label="Persecution Types"
              href="/persecution-types"
              items={persecutionTypesNavLinks}
              scrollable
              note="Convention grounds & thematic analysis"
            />
            <NavDropdown
              label="Case Types"
              href="/case-types"
              items={caseTypesNavLinks}
              scrollable
              note="How instructions usually arrive"
            />
            <NavDropdown
              label="Services"
              href="/services"
              items={servicesNavLinks}
              scrollable
              note="Report scopes for solicitors"
            />
            <NavDropdown
              label="Resources"
              href="/guides"
              items={resourcesNavLinks}
              scrollable
              note="Guides for UK practitioners"
            />
            <Link
              href="/contact"
              className="ml-3 inline-flex min-h-[44px] items-center bg-ember px-4 py-2 text-[13px] font-semibold tracking-wide text-white transition hover:bg-ember-deep"
            >
              Instruct
            </Link>
          </nav>

          <label
            htmlFor="mobile-nav-toggle"
            className="mobile-nav-label inline-flex min-h-[44px] min-w-[44px] shrink-0 cursor-pointer items-center justify-center border border-rule bg-white lg:hidden"
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

        <nav
          id="mobile-menu"
          className="hidden border-t border-rule bg-ink text-panel peer-checked:block lg:hidden"
          aria-label="Mobile"
        >
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-ember">Navigate the index</p>
            {mobileNavGroups.map((group) => (
              <div key={group.title} className="mb-5 border-b border-white/10 pb-4 last:border-0">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/40">{group.title}</p>
                <ul className="space-y-0.5">
                  {group.links.map((link, i) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={closeMobileMenu}
                        className="inline-flex min-h-[44px] w-full items-center gap-3 px-1 text-sm text-white/80 hover:text-ember"
                      >
                        <span className="w-5 font-mono text-[10px] text-ember/70">{String(i + 1).padStart(2, "0")}</span>
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
              Instruct an expert
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
