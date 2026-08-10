import Link from "next/link";

export function CTASection({
  title = "Ready to instruct?",
  description = "Send a short case note. We reply within one business day with expert fit, scope, and Legal Aid–compatible timing where relevant.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-slate py-14 sm:py-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 0% 100%, rgba(214,106,58,0.45), transparent 45%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto flex min-w-0 max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-end sm:justify-between sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl text-white sm:text-3xl">{title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:shrink-0">
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] items-center justify-center bg-ember px-6 py-3 text-sm font-semibold text-white hover:bg-ember-deep"
          >
            Instruct
          </Link>
          <Link
            href="/how-to-instruct"
            className="inline-flex min-h-[44px] items-center justify-center border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-ember hover:text-ember"
          >
            Instruction guide
          </Link>
        </div>
      </div>
    </section>
  );
}
