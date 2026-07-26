import { Check } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/blocks/footer";
import { Header } from "@/components/blocks/header";
import { Hero } from "@/components/blocks/hero";
import Why from "@/components/blocks/why";
import { Link } from "@/i18n/navigation";
import { getProductCategories } from "@/models/product-category";

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

const capabilities = [
  [
    "01",
    "Optical + cable",
    "A coordinated portfolio spanning fiber, cable, assemblies, and cable management.",
  ],
  [
    "02",
    "Project configured",
    "Construction, lengths, termination, labeling, and packaging aligned to the job.",
  ],
  [
    "03",
    "Built to scale",
    "Products selected around density, reach, growth, and maintainability.",
  ],
  [
    "04",
    "Delivery minded",
    "Practical coordination from product selection through deployment.",
  ],
];

const aboutFeatures = [
  "Fiber, cable, assemblies, and cable management expertise",
  "Product choices aligned to real application conditions",
  "Responsive support from specification through delivery",
];

export default async function HomePage() {
  const categories = await getProductCategories({
    page: 1,
    limit: 4,
  });

  return (
    <>
      <Header />
      <main>
        <Hero />

        <section className="bg-white py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#7765ff]">
                Product portfolio
              </p>
              <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] text-[#11131b] sm:text-4xl md:text-5xl">
                From a single fiber to a complete connection system.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#666] md:text-lg">
                A focused portfolio covering optical fiber, transmission cable,
                terminated assemblies, and cable management.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
              {categories.map((category) => (
                <article
                  key={category.uuid}
                  className="group relative min-h-[390px] overflow-hidden rounded-md bg-[#080b1b] md:min-h-[460px]"
                >
                  {category.coverUrl ? (
                    <Image
                      src={category.coverUrl}
                      alt={category.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : null}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#050714] via-[#050714]/25 to-transparent transition-colors duration-500 group-hover:from-[#050714] group-hover:via-[#050714]/45"
                    aria-hidden
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <h3 className="text-2xl font-extrabold tracking-[-0.03em]">
                      {category.title}
                    </h3>
                    <div className="mt-4 h-px bg-white/25" />
                    {category.description ? (
                      <div className="mt-4 max-h-32 overflow-hidden transition-[max-height] duration-500 md:max-h-0 md:group-hover:max-h-40">
                        <p className="translate-y-0 text-sm leading-6 text-white/75 opacity-100 transition-all duration-500 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                          {category.description}
                        </p>
                      </div>
                    ) : null}
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
                  safer to deliver. We bring fiber, cable, assemblies, and cable
                  management together around one goal: dependable infrastructure
                  ready for the network you are building.
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
