import Image from "next/image";
import type { Photo } from "@/lib/photos";

/** Horizontal logo supplied for light backgrounds. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/brand/logo.svg" alt="Persecution Expert" width={872} height={263} className={className} />
  );
}

/** The same logo with the fist and wordmark in off-white, for dark backgrounds. */
export function LogoLight({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/brand/logo-light.svg" alt="Persecution Expert" width={872} height={263} className={className} />
  );
}

/**
 * A photograph framed by the brand: the lower right corner sweeps like the open palm of the
 * monogram, with a grey crescent cradling it from below.
 */
export function PalmPhoto({
  photo,
  className = "",
  sizes = "(min-width: 1024px) 45vw, 100vw",
  priority = false,
  ratio = "aspect-[4/5]",
}: {
  photo: Photo;
  className?: string;
  sizes?: string;
  priority?: boolean;
  ratio?: string;
}) {
  return (
    <figure className={`relative ${className}`}>
      <span
        aria-hidden="true"
        className="palm-frame absolute -bottom-4 -right-4 left-8 top-10 bg-grey/35"
      />
      <div className={`palm-frame relative overflow-hidden bg-mist ${ratio}`}>
        <Image src={photo.src} alt={photo.alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
    </figure>
  );
}
