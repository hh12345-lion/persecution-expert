import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/metadata";
import { photos } from "@/lib/photos";

export const metadata = createMetadata({
  title: "Image Credits | Persecution Expert",
  description: "Sources, authors and licences for the photographs used on this website.",
  path: "/image-credits",
});

export default function ImageCreditsPage() {
  return (
    <>
      <PageHero
        title="Image credits"
        subtitle="The photographs on this site come from Wikimedia Commons. Each has been resized or cropped to fit its frame and is otherwise unaltered."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Image credits" }]}
      />
      <section className="bg-panel py-14 md:py-16">
        <ul className="mx-auto grid max-w-6xl px-4 sm:px-6 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {Object.values(photos).map((photo) => (
            <li key={photo.src} className="min-w-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-br-[2rem] bg-mist">
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 90vw, 360px" className="object-cover" />
              </div>
              <p className="mt-4 break-words font-display text-lg font-semibold text-ink">{photo.credit.title}</p>
              <p className="mt-1 text-body">
                {photo.credit.creator}
                {" · "}
                <a href={photo.credit.licenseUrl || photo.credit.source} rel="noopener noreferrer" className="font-ui font-semibold text-ember underline underline-offset-2">
                  {photo.credit.license}
                </a>
                {" · "}
                <a href={photo.credit.source} rel="noopener noreferrer" className="font-ui font-semibold text-ember underline underline-offset-2">
                  Source
                </a>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
