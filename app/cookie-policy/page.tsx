import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { CATEGORY_META } from "@/lib/cookies/constants";
import { SITE_EMAIL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Cookie Policy | Persecution Expert",
  description:
    "How persecutionexpert.com uses cookies and similar technologies, your choices under UK GDPR and ePrivacy, and how to manage preferences.",
  path: "/cookie-policy",
  noindex: true,
  follow: true,
});

export default function CookiePolicyPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Cookie Policy" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell title="Cookie Policy" subtitle="Last updated: May 2026" breadcrumbs={crumbs}>
        <p className="text-[#374151] leading-relaxed">
          This Cookie Policy explains how Persecution Expert (&quot;we&quot;, &quot;us&quot;) uses cookies and
          similar technologies when you visit our website. It should be read alongside our Privacy Policy. We comply with
          the UK GDPR, the Privacy and Electronic Communications Regulations (PECR), and apply CCPA-aligned transparency
          where relevant to California visitors.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#1A3A5C]">What are cookies?</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Cookies are small text files stored on your device. We also use similar technologies such as local storage (for
          example, to remember your cookie consent choices) and pixels/tags loaded only after you grant consent.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#1A3A5C]">How we use cookies</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-[#374151]">
          <li>Operate the website securely and remember your consent preferences</li>
          <li>Understand aggregated traffic and page performance (analytics)</li>
          <li>Measure advertising effectiveness (marketing tags, only if enabled)</li>
          <li>Remember optional display preferences where applicable</li>
        </ul>

        <h2 className="mt-10 text-xl font-bold text-[#1A3A5C]">Cookie categories</h2>
        <div className="mt-4 space-y-4">
          {(Object.keys(CATEGORY_META) as Array<keyof typeof CATEGORY_META>).map((key) => {
            const meta = CATEGORY_META[key];
            return (
              <section key={key} className="rounded-[8px] border border-[#C8DDD6] p-4">
                <h3 className="font-semibold text-[#1A3A5C]">{meta.label}</h3>
                <p className="mt-2 text-sm text-[#374151]">{meta.description}</p>
                {meta.required && (
                  <p className="mt-2 text-xs font-medium text-[#1A3A5C]">Always active</p>
                )}
              </section>
            );
          })}
        </div>

        <h2 className="mt-10 text-xl font-bold text-[#1A3A5C]">Third-party services</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Depending on your choices, we may load tools provided by:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-[#374151]">
          <li>Google Analytics / Google Tag Manager (analytics)</li>
          <li>Meta Pixel (marketing)</li>
          <li>LinkedIn Insight Tag (marketing)</li>
          <li>Hotjar (analytics / experience)</li>
        </ul>
        <p className="mt-4 text-sm text-[#374151]">
          These providers may process data outside the UK. We use Google Consent Mode so tags respect your choices before
          data is collected.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#1A3A5C]">Your choices</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          On your first visit you can Accept All, Reject Non-Essential, or Customize Preferences. You may change your
          mind at any time using the Cookie Settings control in the website footer. Consent is stored locally for up to
          12 months, after which we will ask again.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#1A3A5C]">Browser controls</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          You can also block or delete cookies via your browser settings. Blocking necessary cookies may affect site
          functionality, including saving your consent record.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#1A3A5C]">Contact</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Questions about this policy:{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="text-[#C8922A] hover:underline">
            {SITE_EMAIL}
          </a>
        </p>
      </PageShell>
    </>
  );
}
