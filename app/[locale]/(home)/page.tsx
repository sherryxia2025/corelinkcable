import { Check } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/blocks/footer";
import { Header } from "@/components/blocks/header";
import { Hero } from "@/components/blocks/hero";
import Why from "@/components/blocks/why";
import { Link } from "@/i18n/navigation";

export const metadata: Metadata = {
  title: "CoreLink Cable | Built for Every Critical Connection",
  description:
    "CoreLink Cable delivers optical fiber, cable, assemblies, connectivity, optical components, and copper systems for critical network infrastructure.",
};

const differentiators = [
  {
    title: "Hollow-Core Fiber",
    description:
      "Light propagates through air instead of solid glass, delivering ultra-low latency and suppressed nonlinear effects to break transmission limits.",
    cover: "/images/corelink-feature-hollow-core.jpg",
  },
  {
    title: "Advanced High-Density Optical Cable",
    description:
      "Optimized compact cable structures accommodate higher fiber counts, supporting dense cabling deployment and meeting surging bandwidth demands.",
    cover: "/images/corelink-feature-high-density.jpg",
  },
  {
    title: "High-Precision Fiber Connection Technology",
    description:
      "Specialized fusion splicing and optimized connector solutions minimize insertion loss, enabling stable, low-loss interconnection.",
    cover: "/images/corelink-feature-connection.jpg",
  },
];

const capabilities = [
  [
    "01",
    "Innovation",
    "We explore cutting-edge fiber technologies to deliver future-proof solutions, keeping you ahead amid the fast-evolving AI era.",
  ],
  [
    "02",
    "Quality",
    "We uphold stringent quality control standards to guarantee outstanding performance, reliability and durability across all products.",
  ],
  [
    "03",
    "Customer First",
    "We focus on identifying distinctive customer requirements, providing customized solutions and prompt technical support.",
  ],
  [
    "04",
    "Operational Excellence",
    "We secure efficient delivery, cost competitiveness and top-tier operational reliability.",
  ],
];

const aboutFeatures = [
  "Fiber, cable, connectivity for the high-speed data transmission.",
  "Product choices aligned to real application conditions",
  "Responsive support from specification through delivery",
];

const portfolioContent = [
  {
    title: "Data Center",
    description:
      "Enabling high-speed data transmission, low-latency interconnection and large-scale computing clusters.",
    image: "/images/corelink-portfolio-data-center.jpg",
  },
  {
    title: "AI Intelligent Communications",
    description:
      "Deliver high-bandwidth, stable and reliable information channels for intelligent computing, model training and real-time data interaction.",
    image: "/images/corelink-portfolio-ai.jpg",
  },
  {
    title: "Enterprise & Industrial Internet",
    description:
      "Connect equipment, control systems and enterprise data platforms, delivering consistent stable connectivity via optical cables.",
    image: "/images/corelink-portfolio-industrial.jpg",
  },
  {
    title: "Cable Ties for Optical Cabling",
    description:
      "Supports optical cable routing, harness management, data center O&M and industrial wiring applications.",
    image: "/images/corelink-portfolio-cable-ties.jpg",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section className="bg-white py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-3xl font-extrabold tracking-[-0.04em] text-[#11131b] sm:text-4xl md:text-5xl">
                From a single fiber to a complete connection system.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#666] md:text-lg">
                A focused portfolio spanning core optical media, transmission
                cable, assemblies, connectivity, optical components.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
              {portfolioContent.map((item) => (
                <article
                  key={item.title}
                  className="group relative min-h-[390px] overflow-hidden rounded-md bg-[#080b1b] md:min-h-[460px]"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#050714] via-[#050714]/25 to-transparent transition-colors duration-500 group-hover:from-[#050714] group-hover:via-[#050714]/45"
                    aria-hidden
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <h3 className="text-2xl font-extrabold tracking-[-0.03em]">
                      {item.title}
                    </h3>
                    <div className="mt-4 h-px bg-white/25" />
                    <div className="mt-4 max-h-32 overflow-hidden transition-[max-height] duration-500 md:max-h-0 md:group-hover:max-h-40">
                      <p className="translate-y-0 text-sm leading-6 text-white/75 opacity-100 transition-all duration-500 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7f7f9] py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#7765ff]">
                  About CoreLink
                </p>
                <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] text-[#11131b] sm:text-4xl md:text-5xl">
                  Three words. One connected purpose.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-7 text-[#666] md:text-lg">
                  CoreLink Cable makes the physical layer easier to specify and
                  safer to deliver. We bring fiber, cable, assemblies, and
                  connectivity together around one goal: dependable
                  infrastructure that is ready for the network you are building.
                </p>
                <div className="mt-7 space-y-4">
                  {aboutFeatures.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#7765ff]/10">
                        <Check className="size-4 text-[#7765ff]" />
                      </span>
                      <span className="text-[#555]">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/about"
                  className="mt-8 inline-flex min-h-11 items-center justify-center rounded-sm bg-[#7765ff] px-6 text-sm font-bold text-white transition-colors hover:bg-[#6554eb]"
                >
                  ABOUT CORELINK&nbsp;&nbsp;→
                </Link>
              </div>

              <div className="relative min-h-[330px] overflow-hidden rounded-md sm:min-h-[440px]">
                <Image
                  src="/images/corelink-fiber-closeup.jpg"
                  alt="Illuminated optical fibers"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#080b1b] text-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid border-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map(([number, title, description]) => (
                <article
                  key={number}
                  className="border-b border-white/10 px-2 py-10 sm:px-7 lg:border-b-0 lg:border-r lg:py-14 lg:first:pl-0 lg:last:border-r-0"
                >
                  <span className="font-mono text-xs tracking-[0.24em] text-[#8d82ff]">
                    {number}
                  </span>
                  <h3 className="mt-8 text-xl font-bold tracking-[-0.03em]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Why
          title="The connection layer your network can depend on."
          description="Core means the essential center. Link means a reliable path. Cable makes that connection real."
          items={differentiators}
          className="pb-16 md:pb-20 lg:pb-24"
        />

        <section className="bg-gradient-to-r from-[#694cff] to-[#2468ee] py-14 text-white md:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-white/70">
                  Connect with CoreLink
                </p>
                <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Bring us the network you are building.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
                  Share the application, environment, quantities, and target
                  schedule. We will help identify a clear path through the
                  physical layer.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-sm bg-white px-7 text-sm font-bold text-[#11131b] transition-colors hover:bg-white/90"
              >
                REQUEST A QUOTE&nbsp;&nbsp;→
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
