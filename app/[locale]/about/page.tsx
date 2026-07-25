import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/blocks/footer";
import { Header } from "@/components/blocks/header";
import { IndustrialCta } from "@/components/corelink/industrial-cta";
import { PageHero } from "@/components/corelink/page-hero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "CoreLink Cable brings optical fiber, cable, assemblies, connectivity, components, and copper systems into one coordinated physical-layer portfolio.",
};

const principles = [
  {
    code: "01",
    title: "Application first",
    description:
      "Distance, density, routing, environment, and installation method come before the part number.",
  },
  {
    code: "02",
    title: "System thinking",
    description:
      "Fiber, cable, termination, hardware, and copper are considered as one physical connection layer.",
  },
  {
    code: "03",
    title: "Deployment clarity",
    description:
      "Straightforward specifications, configurations, labeling, and packaging reduce uncertainty on site.",
  },
];

const workflow = [
  [
    "REQUIREMENTS",
    "Application, environment, distance, density, and schedule.",
  ],
  ["SELECTION", "Media, construction, connectivity, and configuration."],
  ["COORDINATION", "Lengths, termination, identification, and packaging."],
  ["DELIVERY", "A practical connection system prepared for installation."],
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-white text-[#0b1c2e]">
        <PageHero
          eyebrow="ABOUT US"
          title="Built around the physical layer."
          description="CoreLink Cable brings the essential media, transmission cable, assemblies, and connectivity of a network into one coordinated portfolio."
          image="/images/corelink-fiber-closeup.jpg"
          imageAlt="Illuminated optical fiber ends"
        />

        <section className="py-16 lg:py-20">
          <div className="container mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16 lg:px-8">
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#1268e8]">
                OUR PURPOSE
              </p>
              <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.025em] sm:text-[38px]">
                Make critical connections easier to specify and safer to
                deliver.
              </h2>
              <p className="mt-6 text-sm leading-7 text-[#536273] sm:text-base">
                Networks are judged by what stays connected. CoreLink focuses on
                the physical layer where performance, installation, and
                maintainability meet. We align product choices with the actual
                conditions of the project instead of treating components in
                isolation.
              </p>
              <p className="mt-4 text-sm leading-7 text-[#536273] sm:text-base">
                The result is a direct path from requirement to deployment:
                fiber at the core, a reliable link across the network, and cable
                built for the physical world.
              </p>
            </div>
            <div className="relative min-h-[400px] border border-[#d8dee6] bg-[#e9eef4]">
              <Image
                src="/images/corelink-network-rack.jpg"
                alt="Structured fiber connectivity in a network cabinet"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 max-w-xs bg-[#071524] p-6 text-white">
                <p className="text-[10px] font-bold tracking-[0.16em] text-[#64a3ff]">
                  CORELINK CABLE
                </p>
                <p className="mt-3 text-sm leading-6 text-white/68">
                  The core that connects every part of the network.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#d8dee6] bg-[#f4f6f8] py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-[#1268e8]">
                  THREE WORDS
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em]">
                  One connected purpose.
                </h2>
              </div>
              <div className="grid border-l border-t border-[#cfd7e1] sm:grid-cols-3">
                {[
                  [
                    "CORE",
                    "The essential center, main line, conductor, or fiber.",
                  ],
                  [
                    "LINK",
                    "The path that creates connection, continuity, and exchange.",
                  ],
                  [
                    "CABLE",
                    "The engineered physical form that carries the connection.",
                  ],
                ].map(([title, description], index) => (
                  <article
                    key={title}
                    className="min-h-60 border-b border-r border-[#cfd7e1] bg-white p-6"
                  >
                    <span className="font-mono text-[10px] text-[#1268e8]">
                      0{index + 1}
                    </span>
                    <h3 className="mt-10 text-base font-bold tracking-[0.12em]">
                      {title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-[#5c6978]">
                      {description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#1268e8]">
                OPERATING PRINCIPLES
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em]">
                Decisions grounded in the application.
              </h2>
            </div>
            <div className="mt-10 grid border-l border-t border-[#d8dee6] md:grid-cols-3">
              {principles.map((principle) => (
                <article
                  key={principle.code}
                  className="min-h-64 border-b border-r border-[#d8dee6] p-6 lg:p-8"
                >
                  <span className="font-mono text-[10px] text-[#1268e8]">
                    {principle.code}
                  </span>
                  <h3 className="mt-12 text-lg font-semibold">
                    {principle.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-[#5c6978]">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#071524] py-16 text-white lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-[#64a3ff]">
                  FROM INPUT TO SITE
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em]">
                  A direct project workflow.
                </h2>
              </div>
              <ol className="border-t border-white/16">
                {workflow.map(([title, description], index) => (
                  <li
                    key={title}
                    className="grid gap-3 border-b border-white/16 py-5 sm:grid-cols-[48px_150px_1fr] sm:items-center"
                  >
                    <span className="font-mono text-[10px] text-[#64a3ff]">
                      0{index + 1}
                    </span>
                    <span className="text-[11px] font-bold tracking-[0.12em]">
                      {title}
                    </span>
                    <span className="text-sm leading-6 text-white/55">
                      {description}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <IndustrialCta
          eyebrow="START A CONVERSATION"
          title="Bring us the network you are building."
        />
      </main>
      <Footer />
    </>
  );
}
