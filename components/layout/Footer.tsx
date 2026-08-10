import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { SITE_EMAIL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-ink bg-ink text-panel">
      <div className="mx-auto flex min-w-0 max-w-7xl flex-col gap-5 px-4 py-6 sm:px-6 sm:py-7 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-2">
          <Link href="/" className="font-display text-lg text-white hover:text-ember">
            Persecution Expert
          </Link>
          <span className="hidden h-3 w-px bg-white/20 sm:block" aria-hidden />
          <a href={`mailto:${SITE_EMAIL}`} className="break-all text-sm text-white/55 hover:text-ember">
            {SITE_EMAIL}
          </a>
        </div>

        <nav
          className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/45"
          aria-label="Legal"
        >
          <Link href="/privacy" className="inline-flex min-h-[44px] items-center hover:text-white">
            Privacy
          </Link>
          <Link href="/cookie-policy" className="inline-flex min-h-[44px] items-center hover:text-white">
            Cookies
          </Link>
          <Link href="/terms" className="inline-flex min-h-[44px] items-center hover:text-white">
            Terms
          </Link>
          <CookieSettingsButton variant="footer" />
          <Link href="/contact" className="inline-flex min-h-[44px] items-center font-semibold text-ember hover:text-white">
            Instruct
          </Link>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-3 text-[11px] leading-relaxed text-white/35 sm:px-6 lg:px-8">
          UK First-tier and Upper Tribunal instructions only. Not a law firm. No legal advice.
        </p>
      </div>
    </footer>
  );
}
