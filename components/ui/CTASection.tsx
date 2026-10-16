import Image from "next/image";
import Link from "next/link";
import { photos } from "@/lib/photos";

export function CTASection({
  title = "Need a persecution expert?",
  description = "Send a short case note with the country, the claimed ground, the refusal reasons and your hearing date. We confirm expert fit, scope, and Legal Aid compatible timing where relevant.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-panel py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid overflow-hidden rounded-br-[4rem] bg-ember lg:grid-cols-12">
          <div className="p-8 sm:p-12 lg:col-span-7">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/85">{description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="font-ui inline-flex min-h-[46px] items-center justify-center rounded-full rounded-br-none bg-white px-7 text-sm font-semibold text-ember transition hover:bg-mist"
              >
                Refer a case
              </Link>
              <Link
                href="/how-to-instruct"
                className="font-ui inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/40 px-7 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                How to refer
              </Link>
            </div>
          </div>
          <div className="relative hidden min-h-[18rem] lg:col-span-5 lg:block">
            <Image src={photos.vigil.src} alt="" fill sizes="40vw" className="object-cover" />
            <span aria-hidden="true" className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ember to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
