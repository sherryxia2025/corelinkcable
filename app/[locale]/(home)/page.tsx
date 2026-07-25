import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/blocks/footer";
import { Header } from "@/components/blocks/header";
import { IndustrialCta } from "@/components/corelink/industrial-cta";
import { Link } from "@/i18n/navigation";

export const metadata: Metadata = {
  title: "CoreLink Cable | The Core That Connects Everything",
  description:
    "CoreLink Cable delivers optical fiber, cable, assemblies, connectivity, optical components, and copper systems for critical network infrastructure.",
};

const productLines = [
  {
    code: "01",
    id: "optical-fiber",
    title: "Optical Fiber",
    description:
      "Single-mode, multimode, and bend-insensitive fiber selected around distance, loss, density, and routing conditions.",
    image: "/images/corelink-fiber-closeup.jpg",
    items: ["Single-mode & multimode", "Bend-insensitive options"],
  },
  {
    code: "02",
    id: "fiber-cable",
    title: "Fiber Optic Cable",
    description:
      "Indoor, outdoor, duct, aerial, direct-buried, armored, and micro-cable constructions for demanding installations.",
    image: "/images/corelink-fiber-hero.jpg",
    items: ["Indoor / outdoor", "Duct, aerial & armored"],
  },
  {
    code: "03",
    id: "assemblies",
    title: "Cable Assemblies",
    description:
      "Patch cords, pigtails, trunks, and pre-terminated systems configured for clean installation and repeatable performance.",
    image: "/images/corelink-network-rack.jpg",
    items: ["LC / SC / MPO systems", "Project-configured lengths"],
  },
  {
    code: "04",
    id: "connectivity",
    title: "Connectivity & Copper",
    description:
      "Adapters, closures, distribution systems, patch panels, and copper cabling for a coordinated physical layer.",
    image: "/images/service4.jpg",
    items: ["Passive connectivity", "Copper network systems"],
  },
];

const applications = [
  "DATA CENTERS",
  "TELECOM NETWORKS",
  "INDUSTRIAL SYSTEMS",
  "ENERGY INFRASTRUCTURE",
  "TRANSPORTATION",
  "SMART BUILDINGS",
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-white text-[#0b1c2e]">
        <section className="relative mt-[72px] min-h-[650px] overflow-hidden bg-[#071524] text-white lg:mt-[108px]">
          <Image
            src="/images/corelink-fiber-hero.jpg"
            alt="Optical fibers carrying blue light"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-62"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,17,30,0.98)_0%,rgba(5,17,30,0.88)_45%,rgba(5,17,30,0.2)_100%)]"
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:80px_80px]"
          />

          <div className="container relative mx-auto flex min-h-[650px] items-center px-4 pb-40 pt-20 md:px-6 lg:px-8">
            <div className="max-w-[660px]">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#2f80ed]" />
                <p className="text-[10px] font-bold tracking-[0.22em] text-[#8abaff]">
                  OPTICAL · COPPER · CONNECTIVITY
                </p>
              </div>
              <h1 className="max-w-2xl text-[36px] font-semibold leading-[1.14] tracking-[-0.025em] sm:text-[44px] lg:text-[52px]">
                The core of every dependable connection.
              </h1>
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/72 sm:text-base">
                CoreLink Cable brings fiber, cable, assemblies, and connectivity
                into one coordinated physical-layer portfolio for critical
                networks.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products"
                  className="inline-flex h-12 items-center justify-center bg-[#1268e8] px-7 text-[11px] font-bold tracking-[0.12em] text-white transition-colors hover:bg-[#0b4fae]"
                >
                  EXPLORE PRODUCTS&nbsp;&nbsp;→
                </Link>
                <Link
                  href="/about"
                  className="inline-flex h-12 items-center justify-center border border-white/65 px-7 text-[11px] font-bold tracking-[0.12em] text-white transition-colors hover:border-white hover:bg-white hover:text-[#0b1c2e]"
                >
                  ABOUT CORELINK
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 border-t border-white/18 bg-[#071524]/90 backdrop-blur-sm">
            <div className="container mx-auto grid sm:grid-cols-3">
              {[
                ["01", "CORE", "Essential medium and signal path"],
                ["02", "LINK", "Reliable connection across the network"],
                ["03", "CABLE", "The physical layer built for the field"],
              ].map(([number, title, detail]) => (
                <div
                  key={number}
                  className="grid grid-cols-[36px_1fr] gap-4 border-b border-white/14 px-4 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 md:px-6"
                >
                  <span className="font-mono text-[10px] text-[#64a3ff]">
                    {number}
                  </span>
                  <div>
                    <h2 className="text-xs font-bold tracking-[0.15em]">
                      {title}
                    </h2>
                    <p className="mt-1 text-xs leading-5 text-white/52">
                      {detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#dbe2ea] py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-[#1268e8]">
                  PRODUCT SYSTEMS
                </p>
                <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight tracking-[-0.025em] sm:text-[38px]">
                  One physical layer. Every critical connection.
                </h2>
              </div>
              <div className="border-l-2 border-[#1268e8] pl-6">
                <p className="max-w-2xl text-sm leading-7 text-[#536273] sm:text-base">
                  A focused portfolio spanning the medium at the core, the cable
                  that carries it, and the connectivity that turns individual
                  components into a dependable system.
                </p>
                <Link
                  href="/products"
                  className="mt-6 inline-flex items-center text-[11px] font-bold tracking-[0.12em] text-[#1268e8]"
                >
                  VIEW COMPLETE PORTFOLIO&nbsp;&nbsp;→
                </Link>
              </div>
            </div>

            <div className="mt-12 grid border-l border-t border-[#d8dee6] md:grid-cols-2">
              {productLines.map((product) => (
                <article
                  key={product.code}
                  className="group grid min-h-[310px] border-b border-r border-[#d8dee6] sm:grid-cols-[0.9fr_1.1fr]"
                >
                  <div className="relative min-h-52 overflow-hidden bg-[#e9eef4] sm:min-h-full">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 25vw"
                      className="object-cover grayscale-[25%] transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute left-4 top-4 bg-[#071524] px-2.5 py-1.5 font-mono text-[10px] text-white">
                      {product.code}
                    </span>
                  </div>
                  <div className="flex flex-col p-6 lg:p-7">
                    <h3 className="text-xl font-semibold tracking-[-0.015em]">
                      {product.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#5c6978]">
                      {product.description}
                    </p>
                    <ul className="mt-6 space-y-2 border-t border-[#d8dee6] pt-4">
                      {product.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-xs text-[#334155]"
                        >
                          <span className="h-[2px] w-4 bg-[#1268e8]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#071524] py-16 text-white lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-[#64a3ff]">
                  THE NAME DEFINES THE WORK
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em] sm:text-[38px]">
                  Core. Link. Cable.
                </h2>
                <p className="mt-5 max-w-md text-sm leading-7 text-white/58">
                  Three direct ideas define one purpose: build the physical
                  connection layer that networks can depend on.
                </p>
              </div>
              <div className="grid border-l border-t border-white/16 sm:grid-cols-3">
                {[
                  [
                    "CORE",
                    "The essential center: fiber, conductor, signal, and performance.",
                  ],
                  [
                    "LINK",
                    "The engineered path between systems, sites, and people.",
                  ],
                  [
                    "CABLE",
                    "The durable physical form that carries every connection.",
                  ],
                ].map(([title, description], index) => (
                  <article
                    key={title}
                    className="min-h-64 border-b border-r border-white/16 p-6"
                  >
                    <span className="font-mono text-[10px] text-[#64a3ff]">
                      0{index + 1}
                    </span>
                    <h3 className="mt-12 text-lg font-semibold tracking-[0.08em]">
                      {title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-white/55">
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
            <div className="grid items-stretch border border-[#d8dee6] lg:grid-cols-2">
              <div className="relative min-h-[360px] lg:min-h-[470px]">
                <Image
                  src="/images/corelink-network-rack.jpg"
                  alt="Structured network connectivity in a data center"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center bg-[#f4f6f8] p-7 md:p-10 lg:p-12">
                <p className="text-[10px] font-bold tracking-[0.2em] text-[#1268e8]">
                  BUILT AROUND THE APPLICATION
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em]">
                  Product decisions grounded in the field.
                </h2>
                <p className="mt-5 text-sm leading-7 text-[#536273]">
                  CoreLink aligns media type, construction, termination,
                  density, routing, and environmental conditions before a
                  product reaches the site.
                </p>
                <div className="mt-8 grid gap-px bg-[#cfd7e1] sm:grid-cols-2">
                  {applications.map((application) => (
                    <div
                      key={application}
                      className="bg-white px-4 py-4 text-[10px] font-bold tracking-[0.1em] text-[#334155]"
                    >
                      {application}
                    </div>
                  ))}
                </div>
                <Link
                  href="/about"
                  className="mt-8 inline-flex items-center text-[11px] font-bold tracking-[0.12em] text-[#1268e8]"
                >
                  HOW WE WORK&nbsp;&nbsp;→
                </Link>
              </div>
            </div>
          </div>
        </section>

        <IndustrialCta />
      </main>
      <Footer />
    </>
  );
}
