import Link from "next/link";

export function CTASection({
  title = "Need a persecution expert?",
  description = "Send a short case note. We reply within one business day with expert fit, scope, and Legal Aid–compatible timing where relevant.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-mist">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-12 sm:flex-row sm:items-end sm:justify-between sm:px-6 sm:py-14">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">{title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-body sm:text-base">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:shrink-0">
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] items-center justify-center bg-ember px-6 py-3 text-sm font-semibold text-white hover:bg-ember-deep"
          >
            Refer a case
          </Link>
          <Link
            href="/how-to-instruct"
            className="inline-flex min-h-[44px] items-center justify-center border border-ink/20 px-6 py-3 text-sm font-semibold text-ink hover:border-ember hover:text-ember"
          >
            How to refer
          </Link>
        </div>
      </div>
    </section>
  );
}
