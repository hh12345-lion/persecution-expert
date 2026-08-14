"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CATEGORY_META } from "@/lib/cookies/constants";
import type { CategoryConsent, CookieCategory } from "@/lib/cookies/types";
import { useCookieConsent } from "./CookieConsentContext";

const CATEGORIES: CookieCategory[] = ["necessary", "analytics", "marketing", "preferences"];

const FOCUSABLE =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function CategoryToggle({
  category,
  checked,
  onChange,
}: {
  category: CookieCategory;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  const meta = CATEGORY_META[category];

  return (
    <li className="border border-rule bg-panel p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="font-semibold text-ink">{meta.label}</p>
          <p className="mt-1 text-sm leading-relaxed text-body">{meta.description}</p>
          {meta.required && (
            <p className="mt-2 text-xs font-medium uppercase tracking-wide text-ember">Always active</p>
          )}
        </div>
        <label className="relative inline-flex shrink-0 cursor-pointer items-center">
          <input
            type="checkbox"
            className="peer sr-only"
            checked={checked}
            disabled={meta.required}
            onChange={(e) => onChange(e.target.checked)}
            aria-label={`${meta.label} cookies`}
          />
          <span
            className={`relative block h-7 w-12 rounded-full transition-colors duration-200 ${
              meta.required
                ? "bg-ink/35"
                : "bg-rule peer-focus-visible:ring-2 peer-focus-visible:ring-ember peer-focus-visible:ring-offset-2 peer-checked:bg-ember"
            }`}
            aria-hidden
          >
            <span
              className={`absolute left-0.5 top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform duration-200 ${
                checked ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </span>
        </label>
      </div>
    </li>
  );
}

export function CookiePreferencesModal() {
  const {
    isPreferencesOpen,
    closePreferences,
    choices,
    savePreferences,
    acceptAll,
    rejectNonEssential,
  } = useCookieConsent();

  const [draft, setDraft] = useState<CategoryConsent>(choices);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isPreferencesOpen) setDraft(choices);
  }, [isPreferencesOpen, choices]);

  useEffect(() => {
    if (!isPreferencesOpen) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closePreferences();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = [...dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)].filter(
        (el) => !el.hasAttribute("disabled") && el.offsetParent !== null
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isPreferencesOpen, closePreferences]);

  const toggle = useCallback((key: CookieCategory, value: boolean) => {
    if (key === "necessary") return;
    setDraft((d) => ({ ...d, [key]: value }));
  }, []);

  if (!isPreferencesOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[110] flex items-end justify-center sm:items-center sm:p-4"
      style={{ paddingBottom: "max(0px, env(safe-area-inset-bottom))" }}
    >
      <button
        type="button"
        className="absolute inset-0 bg-ink/50 backdrop-blur-[3px] animate-[fadeIn_0.2s_ease-out]"
        aria-label="Close cookie preferences"
        onClick={closePreferences}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-prefs-title"
        className="relative z-10 flex max-h-[min(90vh,640px)] w-full max-w-lg flex-col overflow-hidden border border-rule bg-panel animate-[slideUp_0.35s_cubic-bezier(0.16,1,0.3,1)] sm:animate-[fadeIn_0.25s_ease-out]"
      >
        <div className="border-b border-rule bg-mist px-5 py-4 sm:px-6">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-slate">Cookie settings</p>
          <h2 id="cookie-prefs-title" className="mt-1 font-display text-lg text-ink">
            Customize your preferences
          </h2>
          <p className="mt-1 text-sm text-body">
            Choose which cookies we may use.{" "}
            <Link href="/cookie-policy" className="link-ember" onClick={closePreferences}>
              Cookie Policy
            </Link>
          </p>
        </div>

        <div className="flex-1 overflow-y-auto bg-mist px-5 py-4 sm:px-6">
          <ul className="space-y-3">
            {CATEGORIES.map((key) => (
              <CategoryToggle
                key={key}
                category={key}
                checked={draft[key]}
                onChange={(value) => toggle(key, value)}
              />
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2 border-t border-rule bg-panel p-4 sm:flex-row sm:flex-wrap sm:justify-end">
          <button
            type="button"
            ref={closeBtnRef}
            onClick={closePreferences}
            className="min-h-[44px] border border-rule px-4 py-2 text-sm font-medium text-body transition hover:bg-mist"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={rejectNonEssential}
            className="min-h-[44px] border border-ink px-4 py-2 text-sm font-semibold text-ink transition hover:bg-mist"
          >
            Reject Non-Essential
          </button>
          <button
            type="button"
            onClick={() => savePreferences(draft)}
            className="min-h-[44px] bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-ink-soft"
          >
            Save Preferences
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="min-h-[44px] bg-ember px-4 py-2 text-sm font-semibold text-white transition hover:bg-ember-deep"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
