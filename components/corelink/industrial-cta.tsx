import { Link } from "@/i18n/navigation";

interface IndustrialCtaProps {
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function IndustrialCta({
  eyebrow = "PROJECT SUPPORT",
  title = "Specify the right connection system.",
  description = "Share your application, environment, quantities, and project schedule. We will help define a practical physical-layer solution.",
}: IndustrialCtaProps) {
  return (
    <section className="bg-[#1268e8] text-white">
      <div className="container mx-auto grid gap-8 px-4 py-14 md:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8 lg:py-16">
        <div>
          <p className="text-[10px] font-bold tracking-[0.2em] text-white/70">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/78">
            {description}
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex h-12 items-center justify-center border border-white bg-white px-7 text-[11px] font-bold tracking-[0.12em] text-[#0b1c2e] transition-colors hover:bg-[#071524] hover:text-white"
        >
          CONTACT OUR TEAM&nbsp;&nbsp;→
        </Link>
      </div>
    </section>
  );
}
