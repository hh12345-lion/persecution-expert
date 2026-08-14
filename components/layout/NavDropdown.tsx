"use client";

import Link from "next/link";
import { useState } from "react";

export type NavDropdownItem = { label: string; href: string };

type NavDropdownProps = {
  label: string;
  href: string;
  items: NavDropdownItem[];
  scrollable?: boolean;
};

export function NavDropdown({ label, href, items, scrollable }: NavDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setOpen(false);
        }
      }}
    >
      <Link
        href={href}
        className={`inline-flex min-h-[44px] items-center gap-1 px-2 py-1 text-[13px] tracking-wide ${
          open ? "text-ember" : "text-ink hover:text-ember"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <svg
          className={`h-3 w-3 opacity-50 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

      <div
        className={`absolute left-0 top-full z-[60] min-w-[17rem] pt-2 ${
          open ? "pointer-events-auto visible" : "pointer-events-none invisible"
        }`}
      >
        <div className="hang-toc" role="menu">
          <div className="flex items-center justify-between border-b border-rule px-4 py-2.5">
            <p className="font-display text-sm text-ink">{label}</p>
            <Link href={href} className="text-[11px] text-ember hover:text-ember-deep">
              All
            </Link>
          </div>
          <ul className={scrollable ? "max-h-[min(58vh,18rem)] overflow-y-auto py-1" : "py-1"}>
            {items.map((item) => (
              <li key={item.href} role="none">
                <Link
                  href={item.href}
                  role="menuitem"
                  className="block px-4 py-2 text-[13px] leading-snug text-body hover:bg-mist hover:text-ember focus:bg-mist focus:text-ember focus:outline-none"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
