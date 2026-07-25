import Image from "next/image";
import { Link } from "@/i18n/navigation";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative mt-[72px] min-h-[430px] overflow-hidden bg-[#071524] text-white lg:mt-[108px]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-55"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,21,36,0.98)_0%,rgba(7,21,36,0.86)_48%,rgba(7,21,36,0.25)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:72px_72px]"
      />

      <div className="container relative mx-auto flex min-h-[430px] items-center px-4 py-16 md:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-9 flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] text-white/70">
            <Link href="/" className="transition-colors hover:text-white">
              HOME
            </Link>
            <span className="text-[#3b82f6]">/</span>
            <span>{eyebrow}</span>
          </div>
          <p className="mb-4 text-[11px] font-bold tracking-[0.2em] text-[#64a3ff]">
            CORELINK CABLE
          </p>
          <h1 className="max-w-xl text-3xl font-semibold leading-[1.15] tracking-[-0.02em] sm:text-4xl lg:text-[44px]">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/72 sm:text-base">
            {description}
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-[#1268e8]" />
    </section>
  );
}
