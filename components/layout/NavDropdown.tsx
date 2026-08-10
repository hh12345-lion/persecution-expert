"use client";

import Link from "next/link";
import { useState } from "react";

export type NavDropdownItem = { label: string; href: string };

type NavDropdownProps = {
  label: string;
  href: string;
  items: NavDropdownItem[];
  scrollable?: boolean;
  note?: string;
};

export function NavDropdown({ label, href, items, scrollable, note }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const mid = Math.ceil(items.length / 2);
  const left = items.slice(0, mid);
  const right = items.slice(mid);

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
        className={`group inline-flex min-h-[44px] items-center gap-1.5 px-2.5 py-2 text-[13px] font-medium tracking-wide transition-colors ${
          open ? "text-ember" : "text-ink/80 hover:text-ink"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        <span className="relative">
          {label}
          <span
            className={`absolute -bottom-0.5 left-0 h-px bg-ember transition-all duration-200 ${
              open ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </span>
        <svg
          className={`h-3 w-3 opacity-50 transition-transform duration-200 ${open ? "rotate-180 text-ember" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

      <div
        className={`absolute left-1/2 top-full z-[60] w-[min(92vw,36rem)] -translate-x-1/2 pt-3 ${
          open ? "pointer-events-auto visible" : "pointer-events-none invisible"
        }`}
      >
        <div
          className={`dossier-panel animate-drawer overflow-hidden rounded-[2px] ${open ? "opacity-100" : "opacity-0"}`}
          role="menu"
        >
          <div className="flex items-stretch border-b border-white/10">
            <div className="w-1.5 shrink-0 bg-ember" aria-hidden />
            <div className="flex flex-1 items-center justify-between gap-4 px-4 py-3">
              <div>
                <p className="font-display text-sm text-white">{label}</p>
                {note && <p className="mt-0.5 text-[11px] text-white/45">{note}</p>}
              </div>
              <Link
                href={href}
                className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.12em] text-ember hover:text-white"
              >
                Open index
              </Link>
            </div>
          </div>

          <div
            className={`grid gap-0 sm:grid-cols-2 ${scrollable ? "max-h-[min(60vh,20rem)] overflow-y-auto" : ""}`}
          >
            {[left, right].map((col, colIdx) => (
              <ul
                key={colIdx}
                className={colIdx === 0 ? "sm:border-r sm:border-white/10" : ""}
                role="none"
              >
                {col.map((item, i) => (
                  <li key={item.href} role="none">
                    <Link
                      href={item.href}
                      role="menuitem"
                      className="flex items-baseline gap-3 px-4 py-2.5 text-sm text-white/75 transition-colors hover:bg-ember/15 hover:text-white focus:bg-ember/15 focus:text-white focus:outline-none"
                    >
                      <span className="w-5 shrink-0 font-mono text-[10px] text-ember/80">
                        {String(colIdx * mid + i + 1).padStart(2, "0")}
                      </span>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
