import type { Metadata } from "next";
import { AboutUs } from "@/components/blocks/about-us";
import { Footer } from "@/components/blocks/footer";
import { Header } from "@/components/blocks/header";
import { SubHero } from "@/components/blocks/sub-hero";
import { Link } from "@/i18n/navigation";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about CoreLink Cable and our approach to dependable optical and copper network infrastructure.",
};

const brandMeaning = [
  {
    word: "Core",
    description:
      "The essential center of a system: the main line, the signal path, and the fiber at the heart of the network.",
  },
  {
    word: "Link",
    description:
      "A dependable connection between equipment, locations, systems, and the people who rely on them.",
  },
  {
    word: "Cable",
    description:
      "The physical connection that turns network architecture into infrastructure that can be installed and maintained.",
  },
];

const capabilities = [
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

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <SubHero
          title="About Us"
          bgImage="/images/corelink-fiber-closeup.jpg"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        />

        <AboutUs
          title="Three words. One connected purpose."
          description="CoreLink Cable makes the physical layer easier to specify and safer to deliver. We bring fiber, cable, assemblies, and connectivity together around one goal: dependable infrastructure that is ready for the network you are building."
          imageSrc="/images/corelink-fiber-hero.jpg"
          imageAlt="Illuminated optical fibers"
          features={[
            "Fiber, cable, connectivity, and copper expertise",
            "Product choices aligned to real application conditions",
            "Responsive support from specification through delivery",
          ]}
          buttonSecondary={{
            text: "Explore the Portfolio",
            href: "/products",
          }}
        />

        <section className="bg-[#f6f6f8] py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#7765ff]">
              Our name
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-[-0.04em] text-[#11131b] sm:text-4xl">
              The core that connects everything.
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {brandMeaning.map((item) => (
                <article
                  key={item.word}
                  className="rounded-sm border border-black/10 bg-white p-7"
                >
                  <h3 className="text-2xl font-extrabold text-[#11131b]">
                    {item.word}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#666]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#080b1b] py-16 text-white md:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid gap-px overflow-hidden rounded-sm bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map(([number, title, description]) => (
                <article
                  key={number}
                  className="min-h-64 bg-[#080b1b] p-7 md:p-9"
                >
                  <span className="font-mono text-xs tracking-[0.24em] text-[#8d82ff]">
                    {number}
                  </span>
                  <h3 className="mt-12 text-2xl font-bold tracking-[-0.03em]">
                    {title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/65">
                    {description}
                  </p>
                </article>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-10 inline-flex min-h-12 items-center justify-center rounded-sm bg-[#7765ff] px-7 text-sm font-bold text-white transition-colors hover:bg-[#6554eb]"
            >
              TALK TO OUR TEAM&nbsp;&nbsp;→
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
