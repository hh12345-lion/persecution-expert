import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { LogoLight } from "@/components/brand/Brand";
import { SITE_EMAIL } from "@/lib/constants";
import { persecutionTypesNavLinks, servicesNavLinks } from "@/data/navigation";

const RESOURCES = [
  { label: "Persecution Grounds", href: "/persecution-grounds" },
  { label: "How Reports Work", href: "/how-reports-work" },
  { label: "Solicitor Guides", href: "/guides" },
  { label: "Blog", href: "/blog" },
  { label: "What Is a Persecution Expert?", href: "/what-is-a-persecution-expert" },
  { label: "Qualifications", href: "/qualifications" },
  { label: "Glossary", href: "/glossary" },
];

const GROUPS = [
  { title: "Persecution types", links: persecutionTypesNavLinks.slice(0, 7) },
  { title: "Services", links: servicesNavLinks.slice(0, 7) },
  { title: "Resources", links: RESOURCES },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:py-16">
        <div className="lg:col-span-4">
          <Link href="/" aria-label="Persecution Expert, home" className="inline-block">
            <LogoLight className="h-12 w-auto" />
          </Link>
          <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-white/75">
            Independent persecution analysis for asylum and immigration appeals in the UK First-tier and Upper
            Tribunal.
          </p>
          <a href={`mailto:${SITE_EMAIL}`} className="font-ui mt-6 inline-block text-sm font-semibold text-mist underline-offset-4 hover:underline">
            {SITE_EMAIL}
          </a>
          <div>
            <Link
              href="/contact"
              className="font-ui mt-6 inline-flex min-h-[46px] items-center rounded-full rounded-br-none bg-ember px-6 text-sm font-semibold text-white transition hover:bg-ember-deep"
            >
              Refer a case
            </Link>
          </div>
        </div>
        <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
          {GROUPS.map((g) => (
            <div key={g.title}>
              <h2 className="font-ui text-xs font-semibold uppercase tracking-[0.16em] text-grey">{g.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[0.95rem] text-white/75 transition hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="font-ui mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>UK First-tier and Upper Tribunal matters only. Not a law firm. No legal advice.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/cookie-policy" className="hover:text-white">Cookies</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <CookieSettingsButton variant="footer" className="!min-h-0 !text-xs !text-white/60 hover:!text-white" />
            <Link href="/image-credits" className="hover:text-white">Image credits</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
