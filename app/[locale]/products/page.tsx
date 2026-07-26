import type { Metadata } from "next";
import { Footer } from "@/components/blocks/footer";
import { Header } from "@/components/blocks/header";
import Scenarios from "@/components/blocks/scenarios";
import { Services } from "@/components/blocks/services";
import { SubHero } from "@/components/blocks/sub-hero";
import { Link } from "@/i18n/navigation";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore CoreLink Cable optical fiber, fiber optic cable, cable assemblies, connectivity, components, and copper systems.",
};

const applications = [
  { title: "Data Centers", cover: "/images/scenarios5.png" },
  { title: "Telecom Networks", cover: "/images/scenarios2.png" },
  { title: "Industrial Automation", cover: "/images/automation.png" },
  { title: "Energy Infrastructure", cover: "/images/scenarios1.png" },
  { title: "Smart Buildings", cover: "/images/scenarios4.png" },
  { title: "Transport Networks", cover: "/images/scenarios3.png" },
];

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        <SubHero
          title="Products"
          bgImage="/images/corelink-network-rack.jpg"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
        />

        <section className="pt-14 text-center md:pt-18 lg:pt-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#7765ff]">
              Product portfolio
            </p>
            <h2 className="mx-auto mt-4 max-w-4xl text-balance text-3xl font-extrabold tracking-[-0.04em] text-[#11131b] sm:text-4xl md:text-5xl">
              From a single fiber to a complete connection system.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base text-[#666] sm:text-lg">
              A focused portfolio spanning core optical media, transmission
              cable, assemblies, connectivity, optical components, and copper.
            </p>
          </div>
        </section>

        <Services />

        <Scenarios
          title="Connected infrastructure, everywhere."
          description="Products configured for the environments where bandwidth, uptime, and clean deployment matter most."
          items={applications}
        />

        <section className="bg-[linear-gradient(120deg,#5d4cff,#2563eb)] py-16 text-white md:py-20">
          <div className="container mx-auto flex flex-col gap-7 px-4 md:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-white/70">
                Product support
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
                Need help selecting the right configuration?
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex min-h-14 shrink-0 items-center justify-center rounded-sm bg-white px-8 text-sm font-extrabold text-[#11131b]"
            >
              CONTACT US&nbsp;&nbsp;↗
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
