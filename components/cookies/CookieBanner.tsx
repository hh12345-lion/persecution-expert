"use client";

import Link from "next/link";
import { useCookieConsent } from "./CookieConsentContext";

const btnPrimary =
  "inline-flex min-h-[44px] w-full items-center justify-center bg-ember px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ember-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-ember sm:w-auto";
const btnSecondary =
  "inline-flex min-h-[44px] w-full items-center justify-center border border-rule bg-panel px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-ember hover:text-ember focus:outline-none focus-visible:ring-2 focus-visible:ring-ember sm:w-auto";
const btnGhost =
  "inline-flex min-h-[44px] w-full items-center justify-center px-4 py-2.5 text-sm font-medium text-ink underline-offset-2 transition hover:text-ember focus:outline-none focus-visible:ring-2 focus-visible:ring-ember sm:w-auto";

export function CookieBanner() {
  const { status, acceptAll, rejectNonEssential, openPreferences } = useCookieConsent();

  if (status !== "pending") return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 z-[100] animate-[slideUp_0.45s_cubic-bezier(0.16,1,0.3,1)] px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-6"
    >
      <div className="mx-auto max-w-5xl border border-rule bg-panel shadow-[8px_10px_0_rgba(44,38,31,0.08)]">
        <div className="folio-rule" aria-hidden />
        <div className="p-5 sm:p-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate">
                Privacy &amp; compliance
              </p>
              <h2 id="cookie-banner-title" className="mt-1.5 font-display text-lg text-ink sm:text-xl">
                We value your privacy
              </h2>
              <p id="cookie-banner-desc" className="mt-2 text-sm leading-relaxed text-body">
                We use cookies to operate this website securely, understand how it is used, and measure marketing
                performance. Non-essential cookies load only with your consent. You can accept all, reject
                non-essential, or customise your choices at any time. Read our{" "}
                <Link href="/cookie-policy" className="link-ember font-medium">
                  Cookie Policy
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="link-ember font-medium">
                  Privacy Policy
                </Link>
                .
              </p>
              <p className="mt-2 text-xs leading-relaxed text-body/70">
                UK GDPR &amp; PECR compliant. California residents: you may opt out of non-essential cookies using
                Reject Non-Essential or Customize Preferences.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap lg:max-w-md lg:shrink-0 lg:justify-end">
              <button type="button" onClick={acceptAll} className={btnPrimary}>
                Accept All
              </button>
              <button type="button" onClick={rejectNonEssential} className={btnSecondary}>
                Reject Non-Essential
              </button>
              <button type="button" onClick={openPreferences} className={btnGhost}>
                Customize Preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
