import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Thank You | Persecution Expert",
  description: "Your case referral has been received. We will be in touch about the next steps.",
  path: "/thank-you",
  noindex: true,
  follow: false,
});

const steps = [
  {
    title: "Case review",
    body: "We match a persecution expert to your Convention ground, country profile, and hearing timeline.",
  },
  {
    title: "We reply with next steps",
    body: "You receive proposed scope, availability, and indicative fees where applicable.",
  },
  {
    title: "Legal Aid prior authority",
    body: "For Legal Aid matters, confirm LAA prior authority before the expert starts the report.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <section className="mx-auto max-w-xl px-4 py-14 sm:px-6 sm:py-16">
        <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Thank you</h1>
        <p className="mt-4 text-base leading-relaxed text-body">
          Your case note is with us. We will be in touch about the next steps. Flag urgent hearing dates in any follow-up.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full rounded-br-none bg-ember px-6 py-3 text-sm font-semibold text-white hover:bg-ember-deep"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="inline-flex min-h-[44px] items-center justify-center border border-ink/20 px-6 py-3 text-sm font-semibold text-ink hover:border-ember"
          >
            Services
          </Link>
        </div>
      </section>

      <section className="bg-mist py-12">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <h2 className="font-display text-xl text-ink">What happens next</h2>
          <ol className="mt-6 space-y-5">
            {steps.map((item) => (
              <li key={item.title}>
                <p className="font-display text-lg text-ink">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-body">{item.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-rule pt-6 text-sm">
            <Link href="/how-to-instruct" className="link-ember font-semibold">
              How to refer
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
