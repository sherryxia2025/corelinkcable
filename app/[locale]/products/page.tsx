import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/blocks/footer";
import { Header } from "@/components/blocks/header";
import { IndustrialCta } from "@/components/corelink/industrial-cta";
import { PageHero } from "@/components/corelink/page-hero";
import { Link } from "@/i18n/navigation";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore CoreLink Cable optical fiber, fiber optic cable, cable assemblies, connectivity, optical components, and copper network systems.",
};

const productSystems = [
  {
    number: "01",
    id: "optical-fiber",
    title: "Optical Fiber",
    subtitle: "The signal medium at the core",
    description:
      "Fiber families selected around attenuation, bend performance, wavelength, distance, and density.",
    image: "/images/corelink-fiber-closeup.jpg",
    groups: [
      "G.652.D single-mode fiber",
      "G.657.A1 / A2 bend-insensitive fiber",
      "Multimode fiber",
      "Application-specific fiber",
    ],
  },
  {
    number: "02",
    id: "fiber-cable",
    title: "Fiber Optic Cable",
    subtitle: "Construction for the installation",
    description:
      "Cable structures engineered around routing, environment, mechanical protection, and deployment method.",
    image: "/images/corelink-fiber-hero.jpg",
    groups: [
      "Indoor and indoor / outdoor cable",
      "Duct and direct-buried cable",
      "Aerial and armored cable",
      "Microduct and high-density cable",
    ],
  },
  {
    number: "03",
    id: "assemblies",
    title: "Cable Assemblies",
    subtitle: "Factory-terminated connection systems",
    description:
      "Configured assemblies for controlled insertion loss, faster installation, and consistent identification.",
    image: "/images/corelink-network-rack.jpg",
    groups: [
      "Patch cords and pigtails",
      "Pre-terminated trunks",
      "LC / SC / MPO-MTP assemblies",
      "Project-specific lengths and labels",
    ],
  },
  {
    number: "04",
    id: "connectivity",
    title: "Optical Connectivity",
    subtitle: "Distribution, protection, and access",
    description:
      "Passive connectivity and distribution hardware that organizes, protects, and maintains the optical path.",
    image: "/images/service3.jpg",
    groups: [
      "Adapters and connectors",
      "Closures and terminals",
      "ODF, cassettes, and patch panels",
      "Splitters and passive components",
    ],
  },
  {
    number: "05",
    id: "copper",
    title: "Copper Network Systems",
    subtitle: "Coordinated data connectivity",
    description:
      "Copper cabling and connectivity for structured network environments and mixed physical-layer projects.",
    image: "/images/service4.jpg",
    groups: [
      "Category cable",
      "Patch cords",
      "Jacks and connectors",
      "Patch panels and accessories",
    ],
  },
];

const selectionFactors = [
  ["01", "TRANSMISSION", "Distance, bandwidth, attenuation, and wavelength."],
  [
    "02",
    "ENVIRONMENT",
    "Indoor, outdoor, temperature, moisture, and exposure.",
  ],
  ["03", "MECHANICAL", "Bend, pull, crush, armor, and routing constraints."],
  ["04", "DEPLOYMENT", "Termination, density, labeling, access, and schedule."],
];

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="bg-white text-[#0b1c2e]">
        <PageHero
          eyebrow="PRODUCTS"
          title="Connection systems from fiber to interface."
          description="A coordinated portfolio for the core medium, the transmission cable, the terminated assembly, and the hardware that completes the physical layer."
          image="/images/corelink-network-rack.jpg"
          imageAlt="Fiber optic connections in a network rack"
        />

        <section className="border-b border-[#d8dee6] py-14">
          <div className="container mx-auto grid gap-8 px-4 md:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#1268e8]">
                PRODUCT INDEX
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em]">
                Five connected product systems.
              </h2>
            </div>
            <nav className="grid border-l border-t border-[#d8dee6] sm:grid-cols-2">
              {productSystems.map((product) => (
                <a
                  key={product.id}
                  href={`#${product.id}`}
                  className="flex min-h-14 items-center gap-4 border-b border-r border-[#d8dee6] px-4 text-xs font-semibold text-[#334155] transition-colors hover:bg-[#1268e8] hover:text-white"
                >
                  <span className="font-mono text-[10px] text-[#1268e8]">
                    {product.number}
                  </span>
                  {product.title}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container mx-auto space-y-8 px-4 md:px-6 lg:px-8">
            {productSystems.map((product, index) => (
              <article
                key={product.id}
                id={product.id}
                className="scroll-mt-32 border border-[#d8dee6]"
              >
                <div className="grid lg:grid-cols-[0.86fr_1.14fr]">
                  <div
                    className={`relative min-h-[320px] overflow-hidden bg-[#e9eef4] ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover grayscale-[18%]"
                    />
                    <span className="absolute left-5 top-5 bg-[#071524] px-3 py-2 font-mono text-[10px] text-white">
                      SYSTEM {product.number}
                    </span>
                  </div>
                  <div
                    className={`flex flex-col justify-center p-7 md:p-10 lg:p-12 ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <p className="text-[10px] font-bold tracking-[0.17em] text-[#1268e8]">
                      {product.subtitle.toUpperCase()}
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                      {product.title}
                    </h2>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-[#536273]">
                      {product.description}
                    </p>
                    <ul className="mt-7 grid border-l border-t border-[#d8dee6] sm:grid-cols-2">
                      {product.groups.map((group) => (
                        <li
                          key={group}
                          className="flex min-h-14 items-center gap-3 border-b border-r border-[#d8dee6] px-4 text-xs leading-5 text-[#334155]"
                        >
                          <span className="h-[2px] w-4 shrink-0 bg-[#1268e8]" />
                          {group}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="mt-7 inline-flex items-center text-[11px] font-bold tracking-[0.12em] text-[#1268e8]"
                    >
                      DISCUSS THIS SYSTEM&nbsp;&nbsp;→
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#071524] py-16 text-white lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-[#64a3ff]">
                  SELECTION FRAMEWORK
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em]">
                  Specify for the actual installation.
                </h2>
              </div>
              <div className="grid border-l border-t border-white/16 sm:grid-cols-2">
                {selectionFactors.map(([number, title, description]) => (
                  <article
                    key={number}
                    className="min-h-44 border-b border-r border-white/16 p-6"
                  >
                    <span className="font-mono text-[10px] text-[#64a3ff]">
                      {number}
                    </span>
                    <h3 className="mt-6 text-xs font-bold tracking-[0.12em]">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/55">
                      {description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <IndustrialCta
          eyebrow="PRODUCT SUPPORT"
          title="Turn requirements into a practical product configuration."
        />
      </main>
      <Footer />
    </>
  );
}
