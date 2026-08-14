import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { SITE_EMAIL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-auto bg-panel">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="folio-rule" aria-hidden />
      </div>
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-4 py-6 text-center sm:px-6 sm:py-7">
        <Link href="/" className="font-display text-xl text-ink hover:text-ember">
          Persecution Expert
        </Link>
        <a href={`mailto:${SITE_EMAIL}`} className="text-sm text-body hover:text-ember">
          {SITE_EMAIL}
        </a>
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[12px] text-body/80" aria-label="Legal">
          <Link href="/privacy" className="inline-flex min-h-[44px] items-center hover:text-ember">
            Privacy
          </Link>
          <Link href="/cookie-policy" className="inline-flex min-h-[44px] items-center hover:text-ember">
            Cookies
          </Link>
          <Link href="/terms" className="inline-flex min-h-[44px] items-center hover:text-ember">
            Terms
          </Link>
          <CookieSettingsButton variant="footer" />
          <Link href="/contact" className="inline-flex min-h-[44px] items-center font-semibold text-ember hover:text-ember-deep">
            Refer a case
          </Link>
        </nav>
        <p className="max-w-xl text-[11px] leading-relaxed text-body/70">
          UK First-tier and Upper Tribunal matters only. Not a law firm. No legal advice.
        </p>
      </div>
    </footer>
  );
}
