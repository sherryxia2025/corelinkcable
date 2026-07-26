import type { Metadata } from "next";
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

const pageLinks = [
  {
    number: "01",
    title: "About CoreLink",
    description:
      "Learn what Core, Link, and Cable mean to our company and how we approach critical connections.",
    href: "/about",
  },
  {
    number: "02",
    title: "Product Center",
    description:
      "Explore optical fiber, fiber optic cable, cable assemblies, connectivity, components, and copper systems.",
    href: "/products",
  },
  {
    number: "03",
    title: "Contact",
    description:
      "Share your application, installation conditions, quantities, and target schedule with our team.",
    href: "/contact",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <Why
          title="The connection layer your network can depend on."
          description="Core means the essential center. Link means a reliable path. Cable makes that connection real."
          items={differentiators}
        />

        <section className="bg-[#080b1b] py-16 text-white md:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="mb-9 max-w-2xl">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#9e92ff]">
                Explore CoreLink
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
                Find the information you need.
              </h2>
            </div>
            <div className="grid gap-px overflow-hidden rounded-sm bg-white/15 md:grid-cols-3">
              {pageLinks.map((item) => (
                <Link
                  key={item.number}
                  href={item.href}
                  className="group min-h-64 bg-[#080b1b] p-7 transition-colors hover:bg-[#111633] md:p-9"
                >
                  <span className="font-mono text-xs tracking-[0.24em] text-[#8d82ff]">
                    {item.number}
                  </span>
                  <h3 className="mt-12 text-2xl font-bold tracking-[-0.03em]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/65">
                    {item.description}
                  </p>
                  <span className="mt-7 inline-block text-sm font-bold text-[#9e92ff]">
                    VIEW PAGE&nbsp;&nbsp;→
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
