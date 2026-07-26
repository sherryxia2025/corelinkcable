import {
  Check,
  Globe2,
  HeartHandshake,
  Lightbulb,
  Target,
  TrendingUp,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/blocks/footer";
import { Header } from "@/components/blocks/header";
import { SubHero } from "@/components/blocks/sub-hero";
import { Link } from "@/i18n/navigation";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about CoreLink Cable and our approach to dependable optical and cable infrastructure.",
};

const principles = [
  {
    title: "We lead",
    description:
      "We move with purpose, take ownership, and turn demanding connection requirements into practical solutions.",
    icon: TrendingUp,
  },
  {
    title: "We learn",
    description:
      "We improve through testing, collaboration, application feedback, and a constant focus on better performance.",
    icon: Lightbulb,
  },
  {
    title: "We care",
    description:
      "We care about quality, customers, colleagues, and the infrastructure communities depend on every day.",
    icon: HeartHandshake,
  },
];

const capabilities = [
  {
    number: "01",
    title: "Fiber expertise",
    description:
      "Product choices aligned to transmission, bend, density, and installation conditions.",
  },
  {
    number: "02",
    title: "Coordinated portfolio",
    description:
      "Optical fiber, fiber cable, assemblies, and cable management in one product family.",
  },
  {
    number: "03",
    title: "Project support",
    description:
      "Responsive coordination from early specification through delivery and deployment.",
  },
  {
    number: "04",
    title: "Global outlook",
    description:
      "Solutions prepared for telecom, data center, industrial, energy, and access networks.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <SubHero
          title="About Us"
          bgImage="/images/corelink-about-banner.jpg"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        />

        <section className="bg-white py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="relative min-h-[340px] overflow-hidden rounded-md sm:min-h-[470px]">
                <Image
                  src="/images/corelink-about-innovation.jpg"
                  alt="CoreLink optical technology research"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#7765ff]">
                  Who we are
                </p>
                <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] text-[#11131b] sm:text-4xl md:text-5xl">
                  Connecting the physical layer with purpose.
                </h2>
                <div className="mt-6 space-y-5 text-base leading-7 text-[#666] md:text-lg">
                  <p>
                    CoreLink Cable brings optical fiber, fiber cable,
                    assemblies, and cable management together in one focused
                    portfolio.
                  </p>
                  <p>
                    We help customers move from network requirements to products
                    that are easier to specify, coordinate, install, and
                    maintain.
                  </p>
                  <p>
                    Our name describes our work: Core is the essential center,
                    Link is the dependable path, and Cable makes that connection
                    real.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3 border-t border-black/10 pt-7">
                  {["Core", "Link", "Cable"].map((word) => (
                    <div key={word}>
                      <p className="text-xl font-extrabold text-[#11131b]">
                        {word}
                      </p>
                      <div className="mt-2 h-1 w-8 rounded-full bg-[#7765ff]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative flex min-h-[440px] items-center overflow-hidden py-20 text-white">
          <Image
            src="/images/corelink-about-infrastructure.jpg"
            alt="Connected data infrastructure"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#16084e]/90 via-[#331080]/75 to-[#090d22]/70"
            aria-hidden
          />
          <div className="container relative mx-auto px-4 text-center md:px-6 lg:px-8">
            <span className="mx-auto flex size-12 items-center justify-center rounded-full border border-white/40 bg-white/10">
              <Target className="size-6" />
            </span>
            <p className="mt-6 font-mono text-xs font-bold uppercase tracking-[0.24em] text-white/70">
              Our mission
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-balance text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl md:text-5xl">
              Make every critical connection easier to build and depend on.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/80 md:text-lg">
              We connect product knowledge, practical coordination, and
              responsive support so customers can build stronger physical
              infrastructure with greater clarity.
            </p>
          </div>
        </section>

        <section className="bg-[#f4e9ff] py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#7765ff]">
                Our principles
              </p>
              <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] text-[#2b2140] sm:text-4xl">
                Turning principles into impact.
              </h2>
              <p className="mt-5 text-base leading-7 text-[#665b73]">
                Our principles shape how we improve products, work together, and
                support every project.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {principles.map((principle) => {
                const Icon = principle.icon;

                return (
                  <article key={principle.title} className="text-center">
                    <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#7a22db] text-white">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="mt-5 text-2xl font-extrabold text-[#2b2140]">
                      {principle.title}
                    </h3>
                    <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-[#665b73]">
                      {principle.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#7765ff]">
                  Built for the future
                </p>
                <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] text-[#11131b] sm:text-4xl md:text-5xl">
                  Infrastructure designed for lasting value.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-7 text-[#666] md:text-lg">
                  Reliable networks are built through thoughtful product
                  selection, maintainable designs, and fewer avoidable
                  replacements. We focus on solutions that support long service
                  life and responsible deployment.
                </p>
                <div className="mt-7 space-y-4">
                  {[
                    "Application-focused product selection",
                    "Maintainable and scalable network design",
                    "Clear coordination that reduces project waste",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#7765ff]/10">
                        <Check className="size-4 text-[#7765ff]" />
                      </span>
                      <span className="text-[#555]">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/products"
                  className="mt-8 inline-flex min-h-11 items-center justify-center rounded-sm bg-[#7765ff] px-6 text-sm font-bold text-white transition-colors hover:bg-[#6554eb]"
                >
                  EXPLORE OUR PRODUCTS&nbsp;&nbsp;→
                </Link>
              </div>

              <div className="relative min-h-[340px] overflow-hidden rounded-md sm:min-h-[470px]">
                <Image
                  src="/images/corelink-about-infrastructure.jpg"
                  alt="Fiber-connected data infrastructure"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f7f9] py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#7765ff]/10 text-[#7765ff]">
                <Globe2 className="size-6" />
              </span>
              <h2 className="mt-6 text-balance text-3xl font-extrabold tracking-[-0.04em] text-[#11131b] sm:text-4xl">
                From global infrastructure to local deployment.
              </h2>
              <p className="mt-5 text-base leading-7 text-[#666] md:text-lg">
                CoreLink combines a broad network perspective with the product
                detail and responsive coordination each individual project
                requires.
              </p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-sm bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((item) => (
                <article key={item.number} className="bg-white p-7 md:p-8">
                  <span className="font-mono text-xs tracking-[0.24em] text-[#7765ff]">
                    {item.number}
                  </span>
                  <h3 className="mt-8 text-xl font-extrabold text-[#11131b]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#666]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#694cff] to-[#2468ee] py-14 text-white md:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-white/70">
                  Work with CoreLink
                </p>
                <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl md:text-5xl">
                  Let&apos;s build the connection together.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
                  Tell us about your application, environment, quantities, and
                  target schedule.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-sm bg-white px-7 text-sm font-bold text-[#11131b] transition-colors hover:bg-white/90"
              >
                CONTACT OUR TEAM&nbsp;&nbsp;→
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
