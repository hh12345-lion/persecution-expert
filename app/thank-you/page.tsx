import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Thank You | Persecution Expert",
  description: "Your instruction request has been received. We will respond within one business day.",
  path: "/thank-you",
  noindex: true,
  follow: false,
});

const steps = [
  {
    step: "01",
    title: "Case review",
    body: "We match a persecution expert to your Convention ground, country profile, and hearing timeline.",
  },
  {
    step: "02",
    title: "Reply within one business day",
    body: "You receive proposed scope, availability, and indicative fees where applicable.",
  },
  {
    step: "03",
    title: "Legal Aid prior authority",
    body: "For Legal Aid matters, confirm LAA prior authority before the expert starts the report.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <section className="bg-ink py-16 md:py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ember">Received</p>
          <h1 className="mt-4 font-display text-3xl text-white sm:text-4xl">Thank you</h1>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Your instruction note is with us. Expect a reply within one business day. Flag urgent hearing dates in any
            follow-up.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center justify-center bg-ember px-6 py-3 text-sm font-semibold text-white hover:bg-ember-deep"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-[44px] items-center justify-center border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-ember"
            >
              Services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-panel py-14">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <h2 className="font-display text-xl text-ink">What happens next</h2>
          <ol className="index-spine mt-8 space-y-6">
            {steps.map((item) => (
              <li key={item.step} className="relative flex gap-4">
                <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center bg-ink font-mono text-[10px] font-bold text-ember">
                  {item.step}
                </span>
                <div>
                  <p className="font-display text-lg text-ink">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-body">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-rule pt-6 text-sm">
            <Link href="/how-to-instruct" className="link-ember font-semibold">
              How to instruct
            </Link>
            <Link href="/persecution-grounds" className="link-ember font-semibold">
              Grounds guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
