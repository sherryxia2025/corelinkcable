import type { Metadata } from "next";
import { AboutUs } from "@/components/blocks/about-us";
import { Footer } from "@/components/blocks/footer";
import { Header } from "@/components/blocks/header";
import { Hero } from "@/components/blocks/hero";
import Scenarios from "@/components/blocks/scenarios";
import { Services } from "@/components/blocks/services";
import Why from "@/components/blocks/why";

export const metadata: Metadata = {
  title: "CoreLink Cable | Built for Every Critical Connection",
  description:
    "CoreLink Cable delivers optical fiber, cable, assemblies, connectivity, optical components, and copper systems for critical network infrastructure.",
};

const differentiators = [
  {
    title: "Precision at the Core",
    description:
      "Fiber and cable families selected around loss, bend performance, density, distance, and real installation conditions.",
    cover: "/images/corelink-fiber-closeup.jpg",
  },
  {
    title: "One Coordinated Portfolio",
    description:
      "Optical media, transmission cable, pre-terminated assemblies, connectivity, components, and copper systems in one physical layer.",
    cover: "/images/corelink-fiber-hero.jpg",
  },
  {
    title: "Ready for Deployment",
    description:
      "Clear product choices and project-minded support help network teams move from specification to site with less complexity.",
    cover: "/images/corelink-network-rack.jpg",
  },
];

const applications = [
  { title: "Data Centers", cover: "/images/scenarios5.png" },
  { title: "Telecom Networks", cover: "/images/scenarios2.png" },
  { title: "Industrial Automation", cover: "/images/automation.png" },
  { title: "Energy Infrastructure", cover: "/images/scenarios1.png" },
  { title: "Smart Buildings", cover: "/images/scenarios4.png" },
  { title: "Transport Networks", cover: "/images/scenarios3.png" },
];

const capabilityItems = [
  [
    "01",
    "Optical + copper",
    "A coordinated portfolio for mixed network environments.",
  ],
  [
    "02",
    "Project configured",
    "Lengths, assemblies, labeling, and packaging aligned to the job.",
  ],
  [
    "03",
    "Built to scale",
    "Products selected around density, growth, and maintainability.",
  ],
  [
    "04",
    "Delivery minded",
    "Practical coordination from product selection through deployment.",
  ],
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <div id="why-corelink">
          <Why
            title="The connection layer your network can depend on."
            description="Core means the essential center. Link means a reliable path. Cable makes that connection real."
            items={differentiators}
          />
        </div>

        <div id="products" className="scroll-mt-24">
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
        </div>

        <div id="about" className="scroll-mt-24">
          <AboutUs
            title="Three words. One connected purpose."
            description="CoreLink Cable makes the physical layer easier to specify and safer to deliver. We bring fiber, cable, assemblies, and connectivity together around one goal: dependable infrastructure that is ready for the network you are building."
            imageSrc="/images/corelink-fiber-closeup.jpg"
            imageAlt="Illuminated optical fibers"
            features={[
              "Fiber, cable, connectivity, and copper expertise",
              "Product choices aligned to real application conditions",
              "Responsive support from specification through delivery",
            ]}
            buttonSecondary={{
              text: "Explore the Portfolio",
              href: "/#products",
            }}
          />
        </div>

        <section className="bg-[#080b1b] py-16 text-white md:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid gap-px overflow-hidden rounded-sm bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
              {capabilityItems.map(([number, title, description]) => (
                <article
                  key={number}
                  className="min-h-64 bg-[#080b1b] p-7 transition-colors hover:bg-[#111633] md:p-9"
                >
                  <span className="font-mono text-xs tracking-[0.24em] text-[#8d82ff]">
                    {number}
                  </span>
                  <h3 className="mt-16 text-2xl font-bold tracking-[-0.03em]">
                    {title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/65">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div id="applications">
          <Scenarios
            title="Connected infrastructure, everywhere."
            description="Products configured for the environments where bandwidth, uptime, and clean deployment matter most."
            items={applications}
          />
        </div>

        <section
          id="contact"
          className="scroll-mt-24 bg-[linear-gradient(120deg,#5d4cff,#2563eb)] py-16 text-white md:py-24"
        >
          <div className="container mx-auto flex flex-col gap-8 px-4 md:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-white/70">
                Connect with CoreLink
              </p>
              <h2 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl md:text-6xl">
                Bring us the network you are building.
              </h2>
              <p className="mt-5 max-w-2xl text-base text-white/75 sm:text-lg">
                Share the application, environment, quantities, and target
                schedule. We will help identify a clear path through the
                physical layer.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex min-h-14 shrink-0 items-center justify-center rounded-sm bg-white px-8 text-sm font-extrabold text-[#11131b] transition-transform hover:-translate-y-1"
            >
              REQUEST A QUOTE&nbsp;&nbsp;↗
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
